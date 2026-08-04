import { useEffect, useState } from "react";
import { api } from "./utils/api";
import { useLanguage } from "./i18n/LanguageContext";
import { t } from "./i18n/translations";
import CursorLight from "./components/CursorLight";
import Sidebar from "./components/Sidebar";
import DownloadCVButton from "./components/DownloadCVButton";
import About from "./sections/About";
import Techs from "./sections/Techs";
import Experiences from "./sections/Experiences";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const { t: tr } = useLanguage();
  const [showFabCV, setShowFabCV] = useState(false);

  useEffect(() => {
    api.get("/ping").catch(() => {});
  }, []);

  useEffect(() => {
    function onScroll() {
      setShowFabCV(window.scrollY > 400);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative font-inter bg-indigo-950 text-gray-400 min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-indigo-800 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        {tr(t.nav.skip)}
      </a>

      <div className="relative z-10 flex flex-col md:flex-row max-w-7xl mx-auto">
        <aside className="w-full md:w-2/5">
          <Sidebar />
        </aside>

        <main id="main-content" className="w-full md:w-3/5">
          <section id="about" aria-labelledby="about-heading" tabIndex={-1}>
            <About />
          </section>
          <section id="techs" aria-labelledby="techs-heading" tabIndex={-1}>
            <Techs />
          </section>
          <section
            id="experiences"
            aria-labelledby="experiences-heading"
            tabIndex={-1}
          >
            <Experiences />
          </section>
          <section id="projects" aria-labelledby="projects-heading" tabIndex={-1}>
            <Projects />
          </section>
          <section
            id="education"
            aria-labelledby="education-heading"
            tabIndex={-1}
          >
            <Education />
          </section>
          <Testimonials />
          <section id="contact" aria-labelledby="contact-heading" tabIndex={-1}>
            <Contact />
          </section>
          <Footer />
        </main>
      </div>

      <CursorLight />
      <DownloadCVButton variant="floating" visible={showFabCV} />
    </div>
  );
}
