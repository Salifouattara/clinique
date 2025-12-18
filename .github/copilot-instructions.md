# Copilot Instructions for Medical Project

## Vue d'ensemble de l'architecture

- **Frontend (font/)** : Application React (Vite) avec React Router pour la navigation, TailwindCSS pour le style, et des composants modulaires dans `src/components` et `src/Pages`.
- **Backend (Backend-flask/)** : Dossier prévu pour un backend Flask (actuellement vide).

## Flux de travail développeur

### Frontend
- **Démarrage local** :
  - `npm install` dans `font/` pour installer les dépendances.
  - `npm run dev` pour lancer le serveur Vite (hot reload).
- **Build production** :
  - `npm run build` génère le build dans `font/dist/`.
  - `npm run preview` pour prévisualiser le build.
- **Linting** :
  - `npm run lint` pour vérifier les règles ESLint personnalisées.
- **Structure des pages** :
  - Les routes sont définies dans `src/App.jsx` via React Router.
  - Les pages principales sont dans `src/Pages/` (ex : `Home.jsx`, `Login.jsx`, `Register.jsx`, `Services.jsx`).
  - Les composants réutilisables sont dans `src/components/` (ex : `Header.jsx`, `Footer.jsx`).
- **Conventions UI** :
  - Utilisation intensive de TailwindCSS, y compris des classes personnalisées (ex : `bg-primary`, `bg-background-light`).
  - Les icônes proviennent de `react-icons` et parfois de `material-symbols-outlined`.
  - Le header et le footer sont gérés globalement via le layout dans `App.jsx`.
- **Navigation** :
  - Utilisation de `<Layout>` pour injecter le header sur toutes les pages.
  - Les liens de navigation sont synchronisés avec la route active (voir `Header.jsx`).

### Backend
- **Backend-flask/** :
  - Prévu pour une API Flask, mais aucun code n'est présent actuellement.

## Intégrations et dépendances clés
- **React 19**, **React Router v7**, **Vite** (voir `package.json` pour les versions).
- **TailwindCSS** et plugins (voir `tailwind.config.js`).
- **ESLint** avec configuration personnalisée (`eslint.config.js`).

## Points d'attention spécifiques
- **Les routes `/connexion` et `/inscription` sont gérées par des pages dédiées.**
- **Le design est fortement inspiré de la charte graphique africaine (voir classes `african-pattern`).**
- **Aucune logique d'appel API n'est encore présente côté frontend ni backend.**
- **Le backend Flask est un squelette, prévoir l'intégration API REST plus tard.**

## Fichiers clés à consulter
- `font/src/App.jsx` : Définition des routes et du layout principal.
- `font/src/components/Header.jsx` : Navigation principale et responsive.
- `font/package.json` : Scripts, dépendances, conventions de build.
- `font/README.md` : Rappels sur l'utilisation de Vite et ESLint.

---

Pour toute nouvelle fonctionnalité, respecter la structure modulaire (Pages/Components) et les conventions Tailwind déjà en place. Documenter toute logique métier ou workflow non standard directement dans ce fichier.
