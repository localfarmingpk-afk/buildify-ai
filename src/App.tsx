import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 border-b bg-white">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Buildify AI Assistant</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-sm">Home</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <footer className="p-4 text-center text-sm text-gray-500">© Buildify — AI Assistant</footer>
    </div>
  );
}
