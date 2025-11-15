import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from "@/components/ui/toaster";
import GlobalBackground from './components/GlobalBackground';
import { navLinks } from './data/content';

function App() {
  const headerItems = navLinks.map(link => ({
    name: link.label,
    href: link.href,
    icon: link.icon
  }));

  return (
    <div className="bg-background font-sans text-foreground">
      <GlobalBackground />
      <Header items={headerItems} />
      <main>
        <Hero />
        <About />
        <Projects />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
