import AuroraBackground from './AuroraBackground.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ScrollManager from './ScrollManager.jsx';

// The frame every page shares: aurora background, navbar, page content, footer.
// overflow-x-clip (not hidden) keeps the sticky navbar working.
export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-white px-4 py-2 font-semibold text-on-accent focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <AuroraBackground />
      <ScrollManager />
      <Navbar />
      <main id="main" className="relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}
