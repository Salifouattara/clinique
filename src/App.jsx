// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Header from './components/Header'; // <-- ajouté
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Medecins from './Pages/Medecins';
// Un Layout pour les composants qui restent sur toutes& les pages (comme le header/footer)
const Layout = ({ children }) => (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#1b140d] dark:text-white overflow-x-hidden min-h-screen">
        <Header /> {/* <-- ajouté */}
        <main>{children}</main>
        
    </div>
);

// Composant principal avec les routes
export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/connexion" element={<Layout><Login /></Layout>} />
                <Route path="/inscription" element={<Layout><Register /></Layout>} />
                {/* Page Services */}
                <Route path="/services" element={<Layout><Services /></Layout>} />
                {/* Page Médecins */}
                <Route path="/doctors" element={<Layout><Medecins /></Layout>} />
                {/* Page Contact */}
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
                {/* Page À propos */}
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="*" element={<Layout><p className="text-center p-10">404 - Page non trouvée</p></Layout>} />
            </Routes>
        </Router>
    );
}

// Assurez-vous d'importer et de rendre <App /> dans votre main.jsx