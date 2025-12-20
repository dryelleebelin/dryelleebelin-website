import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

export default function DownloadCVButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      if (scrollTop + windowHeight >= docHeight * 0.85) {
        setShow(true);
      } else {
        setShow(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="/CurriculoDryelleEbelin.pdf"
      className={`
        fixed bottom-5 right-5 p-3 rounded-full shadow-xl bg-indigo-900 text-white
        transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-indigo-700
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
      `}
    >
      <FileText size={22} />
    </a>
  );
}
