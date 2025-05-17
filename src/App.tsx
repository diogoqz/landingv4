import { useEffect } from 'react';
import { ThemeProvider } from './components/theme-provider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Prescreva.me | Simplifique sua Prática Médica';
    
    // Get the default title element
    const titleElement = document.querySelector('title[data-default]');
    if (titleElement) {
      titleElement.removeAttribute('data-default');
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="prescreva-theme">
      <div className="min-h-screen bg-gradient-to-b from-background to-background/90 text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <HowItWorks />
          <Features />
          <Pricing />
          <Faq />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;