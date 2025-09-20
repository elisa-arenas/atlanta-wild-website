import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { TeamPage } from "./components/pages/TeamPage";
import { SponsorsPage } from "./components/pages/SponsorsPage";
import { AboutLeaguePage } from "./components/pages/AboutLeaguePage";
import { NewsPage } from "./components/pages/NewsPage";
import { ContactPage } from "./components/pages/ContactPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const handleNavigation = (page: string) => {
    // This function is no longer needed with React Router, but keeping for Hero component compatibility
    console.log("Navigation to:", page);
  };

  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigation} />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/about-league" element={<AboutLeaguePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all route to redirect any unmatched paths to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Toaster />
    </Router>
  );
}