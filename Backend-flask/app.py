from flask import Flask, request, jsonify
import uuid
import os
from dotenv import load_dotenv
from werkzeug.security import generate_password_hash, check_password_hash
from flask_mysqldb import MySQL

load_dotenv()

app = Flask(__name__)

# Configuration MySQL depuis .env
app.config['MYSQL_HOST'] = os.getenv("DB_HOST")
app.config['MYSQL_USER'] = os.getenv("DB_USER")
app.config['MYSQL_PASSWORD'] = os.getenv("DB_PASSWORD")
app.config['MYSQL_DB'] = os.getenv("DB_NAME")

mysql = MySQL(app)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    if not email or not password:
        return jsonify({'error': 'Email et mot de passe requis.'}), 400

    cur = mysql.connection.cursor()
    # Vérifier si l'utilisateur existe déjà
    cur.execute("SELECT id FROM users WHERE email = %s", (email,))
    existing = cur.fetchone()
    if existing:
        cur.close()
        return jsonify({'error': 'Utilisateur déjà existant.'}), 409

    user_id = str(uuid.uuid4())
    password_hash = generate_password_hash(password)
    cur.execute(
        "INSERT INTO users (id, email, password_hash) VALUES (%s, %s, %s)",
        (user_id, email, password_hash)
    )
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Inscription réussie.', 'user_id': user_id}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    if not email or not password:
        return jsonify({'error': 'Email et mot de passe requis.'}), 400

    cur = mysql.connection.cursor()
    cur.execute("SELECT id, password_hash FROM users WHERE email = %s", (email,))
    user = cur.fetchone()
    cur.close()
    if not user or not check_password_hash(user[1], password):
        return jsonify({'error': 'Identifiants invalides.'}), 401

    token = str(uuid.uuid4())
    return jsonify({'message': 'Connexion réussie.', 'token': token, 'user_id': user[0]}), 200

if __name__ == '__main__':
    app.run(debug=True)
    
@app.route('/test-db')
def test_db():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT 1")
        cur.fetchone()
        cur.close()
        return jsonify({"status": "✅ Connexion MySQL OK"}), 200
    except Exception as e:
        return jsonify({"status": "❌ Erreur de connexion MySQL", "error": str(e)}), 500


