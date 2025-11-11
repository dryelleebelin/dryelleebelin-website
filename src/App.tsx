import CursorLight from "./components/CursorLight.tsx";
import Sidebar from "./components/Sidebar.tsx";
import "./index.css";

export default function App() {
  return (
    <div className="flex bg-indigo-950 text-gray-400">
      <aside className="w-2/5">
        <Sidebar/>
      </aside>

      <main className="w-3/5">
        
      </main>

      <CursorLight />
    </div>
  );
}
