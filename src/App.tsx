/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutBento from "./components/AboutBento";
import SelectedWork from "./components/SelectedWork";
import ProjectDetail from "./components/ProjectDetail";
import TechnicalArsenal from "./components/TechnicalArsenal";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { PROJECTS_DATA } from "./data";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  // Synchronized dynamic routing state
  const getPathAndHash = () => {
    // Enable seamless fallback if hash-based URLs are triggered by container shells
    const hash = window.location.hash;
    if (hash.startsWith("#/projects/")) {
      return hash.replace("#", "");
    }
    return window.location.pathname;
  };

  const [currentPath, setCurrentPath] = useState(getPathAndHash());

  // Sync popstate / browser back and forward actions
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getPathAndHash());
    };
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  // Custom router navigation utility
  const navigate = (path: string) => {
    try {
      window.history.pushState({}, "", path);
      setCurrentPath(path);
    } catch (e) {
      window.location.hash = path;
    }
  };

  // Sync scroll positions when path routing transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [currentPath]);

  // Route matches
  const isProjectRoute = currentPath.startsWith("/projects/");
  const projectSlug = isProjectRoute ? currentPath.replace("/projects/", "") : null;
  const activeProject = projectSlug ? PROJECTS_DATA.find((p) => p.id === projectSlug) : null;

  // Smooth scroll target finder helper
  const navigateToSection = (selector: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#e5e2e1] flex flex-col selection:bg-white selection:text-[#09090b]">
      
      {/* Shared Navigation Header bar */}
      <Navbar
        currentProjectId={activeProject ? activeProject.id : null}
        onNavigateHome={() => navigate("/")}
      />

      {/* Main Orchestrated Router Body with dynamic slide transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {!activeProject ? (
            <motion.div
              key="home-views"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Portfolio landing elements */}
              <Hero
                onViewProjects={() => navigateToSection("#work")}
                onContactMe={() => navigateToSection("#contact")}
              />
              
              <AboutBento />
              
              <SelectedWork 
                onSelectProject={(projectId) => navigate(`/projects/${projectId}`)} 
              />
              
              <TechnicalArsenal />
              
              <ContactForm />
            </motion.div>
          ) : (
            <motion.div
              key="detail-views"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            >
              <ProjectDetail
                project={activeProject}
                onBack={() => navigate("/")}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer bar */}
      <Footer />

    </div>
  );
}
