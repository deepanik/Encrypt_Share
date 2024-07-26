// src/App.js
import React from 'react';
import FileUpload from './components/FileUpload';
import Download from './components/Download';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import BackgroundTheme from './components/BackgroundTheme';

const App = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center">
            <BackgroundTheme />
            <div className="relative w-full flex flex-col items-center z-10">
                <Navbar />
                <header className="w-full p-4 text-neonPink text-center text-2xl">
                    Welcome to Encrypted Share
                </header>
                <main className="relative flex flex-col md:flex-row gap-4 mt-8 p-4 w-full md:w-2/3">
                    <section className="bg-gradient-to-r from-slate-800 to-red-800 shadow-md rounded-lg border-4 border-Violet-500 p-6 flex-1">
                        <h2 className="text-xl  font-semibold mb-4">Upload Files</h2>
                        <FileUpload />
                    </section>
                    <section className="bg-gradient-to-r fromslate-800 to-red-800 shadow-md rounded-lg border-4 border-Violet-500 p-6 flex-1">
                        <h2 className="text-xl  font-semibold mb-4">Receive Files</h2>
                        <Download />
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;
