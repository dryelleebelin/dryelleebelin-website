import CursorLight from "./components/CursorLight.tsx";
import Sidebar from "./components/Sidebar.tsx";
import About from "./sections/About.tsx";
import "./index.css";

export default function App() {
  return (
    <div className="font-inter bg-indigo-950 text-gray-400 flex flex-col md:flex-row">
      <aside className="w-full md:w-2/5">
        <Sidebar />
      </aside>

      <main className="w-full md:w-3/5">
        <section id="about"><About /></section>
      </main>

      <CursorLight />
    </div>
  );
}
