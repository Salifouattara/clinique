import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderAuth() {
    return (
        <header className="w-full py-4 bg-transparent">
            <div className="layout-container flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">MS</div>
                    <span className="font-bold text-lg text-[#1b140d] dark:text-white">Clinique Santé Ivoire</span>
                </Link>

                <div className="flex items-center gap-3">
                    <Link to="/urgence" className="hidden md:inline-flex items-center px-3 py-2 rounded-md border border-red-500 text-red-600 hover:bg-red-50">
                        Urgence
                    </Link>
                    <Link to="/connexion" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white font-semibold hover:opacity-95">
                        Se connecter
                    </Link>
                </div>
            </div>
        </header>
    );
}