import { useEffect } from "react";
import { api } from "./utils/api.ts";
import CursorLight from "./components/CursorLight.tsx";
import Sidebar from "./components/Sidebar.tsx";
import About from "./sections/About..js";
import Experience from "./sections/Experience.tsx";
import Contact from "./sections/Contact.tsx";
import Footer from "./sections/Footer.tsx";
import DownloadCVButton from "./components/DownloadCVButton.tsx";
import "./index.css";

export default function App() {
  useEffect(() => {
    api.get("/ping").catch(() => { });
  }, []);

  return (
    <div className="font-inter bg-indigo-950 text-gray-400 flex flex-col md:flex-row">
      <aside className="w-full md:w-2/5">
        <Sidebar />
      </aside>

      <main className="w-full md:w-3/5">
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </main>

      <CursorLight />
      <DownloadCVButton />
    </div>
  );
}
