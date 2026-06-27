import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1> 🏠 Home </h1>
      <p>Selamat Datang di Website ku!</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>👤 About</h1>
      <p> Nama saya Lenz, saya belajar React!</p>
    </div>
  );
}

function Contact() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📩 Contact </h1>
      <p>Email: lenz@gmail.com</p>
    </div>
  );
}

function Navbar() {
  return (
    <nav style={{ background: "#333", padding: "10px 20px", display: "flex", gap: "20px" }}>
       <Link to="/" style={{ color: "white", textDecoration: "none"}}>Home</Link>
       <Link to="/about" style={{ color: "white", textDecoration: "none"}}>About</Link>
       <Link to="/contact" style={{ color: "white", textDecoration: "none"}}>Contact</Link>
    </nav>
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