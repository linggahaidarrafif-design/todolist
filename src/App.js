import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 px-8 py-4 flex gap-8 shadow-lg">
      <Link to="/" className="text-white font-semibold hover:text-blue-400 transition">Home</Link>
      <Link to="/about" className="text-white font-semibold hover:text-blue-400 transition">About</Link>
      <Link to="/contact" className="text-white font-semibold hover:text-blue-400 transition">Contact</Link>
    </nav>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">🏠 Selamat Datang!</h1>
        <p className="text-gray-500 text-lg">Ini website pertama saya pakai React + Tailwind.</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">👤 About</h1>
        <p className="text-gray-500 text-lg">Nama saya Lenz, saya pelajar SMK yang belajar React!</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">📩 Contact</h1>
        <p className="text-gray-500 text-lg">Email: lenz@gmail.com</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}