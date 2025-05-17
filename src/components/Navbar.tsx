import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-primary flex items-center">
            <span className="text-[#92caa2] mr-1">Prescreva</span>.me
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#como-funciona" className="text-sm text-foreground/80 hover:text-[#92caa2] transition-colors">
            Como Funciona
          </a>
          <a href="#funcionalidades" className="text-sm text-foreground/80 hover:text-[#92caa2] transition-colors">
            Funcionalidades
          </a>
          <a href="#depoimentos" className="text-sm text-foreground/80 hover:text-[#92caa2] transition-colors">
            Depoimentos
          </a>
          <a href="#planos" className="text-sm text-foreground/80 hover:text-[#92caa2] transition-colors">
            Planos
          </a>
          <a href="#faq" className="text-sm text-foreground/80 hover:text-[#92caa2] transition-colors">
            FAQ
          </a>
          <Button 
            variant="default" 
            className="bg-[#92caa2] hover:bg-[#7ab18a] text-background ml-2"
            onClick={() => window.open('https://hotm.art/prescrevamepremium', '_blank')}
          >
            Testar Agora
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          <a 
            href="#como-funciona" 
            className="text-xl font-medium py-2 border-b border-muted hover:text-[#92caa2] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Como Funciona
          </a>
          <a 
            href="#funcionalidades" 
            className="text-xl font-medium py-2 border-b border-muted hover:text-[#92caa2] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Funcionalidades
          </a>
          <a 
            href="#depoimentos" 
            className="text-xl font-medium py-2 border-b border-muted hover:text-[#92caa2] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Depoimentos
          </a>
          <a 
            href="#planos" 
            className="text-xl font-medium py-2 border-b border-muted hover:text-[#92caa2] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Planos
          </a>
          <a 
            href="#faq" 
            className="text-xl font-medium py-2 border-b border-muted hover:text-[#92caa2] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </a>
          <Button 
            variant="default" 
            className="bg-[#92caa2] hover:bg-[#7ab18a] text-background mt-4 w-full"
            onClick={() => window.open('https://hotm.art/prescrevamepremium', '_blank')}
          >
            Testar Agora
          </Button>
        </nav>
      </div>
    </header>
  );
}