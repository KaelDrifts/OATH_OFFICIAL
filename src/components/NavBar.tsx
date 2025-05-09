import React, { useState, useEffect } from 'react';
import { Menu, X, Lock } from 'lucide-react';
import Button from './ui/Button';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDevelopersClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://github.com/KaelDrifts/OATH-AI', '_blank');
  };

  const handleApiDocsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/api-docs';
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#f9e3be]/90 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img src="/logofr" alt="Logo" className="h-16 w-auto" />
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#how-it-works" className="text-[#3f1c08] hover:text-[#a26320] font-medium transition-colors">
              How It Works
            </a>
            <a 
              href="#" 
              onClick={handleDevelopersClick}
              className="text-[#3f1c08] hover:text-[#a26320] font-medium transition-colors"
            >
              Developers
            </a>
            <a 
              href="https://t.me/OATH_management" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#3f1c08] hover:text-[#a26320] font-medium transition-colors"
            >
              Community
            </a>
            <a 
              href="#" 
              onClick={handleApiDocsClick}
              className="text-[#3f1c08] hover:text-[#a26320] font-medium transition-colors"
            >
              API Docs
            </a>
            <a href="/docs" className="text-[#3f1c08] hover:text-[#a26320] font-medium transition-colors">
              Docs
            </a>
          </nav>
          
          <div className="hidden md:block">
          <Button className="bg-[#68452b] border-[#542706] text-white !retro-blink-none">
              <Lock size={16} className="mr-2" />
              Join Network
            </Button>
          </div>
          
          <button 
            className="md:hidden text-[#3f1c08]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-[#f9e3be] border-t border-[#3f1c08]/10 pt-4 pb-6 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a href="/#how-it-works" className="text-[#3f1c08] font-medium py-2 hover:text-[#a26320] transition-colors">
              How It Works
            </a>
            <a 
              href="#" 
              onClick={handleDevelopersClick}
              className="text-[#3f1c08] font-medium py-2 hover:text-[#a26320] transition-colors"
            >
              Developers
            </a>
            <a 
              href="https://t.me/OATH_management" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#3f1c08] font-medium py-2 hover:text-[#a26320] transition-colors"
            >
              Community
            </a>
            <a 
              href="#" 
              onClick={handleApiDocsClick}
              className="text-[#3f1c08] font-medium py-2 hover:text-[#a26320] transition-colors"
            >
              API Docs
            </a>
            <a href="/docs" className="text-[#3f1c08] font-medium py-2 hover:text-[#a26320] transition-colors">
              Docs
            </a>
            <Button className="bg-[#5f3816] border-[#441e07] text-white !retro-blink-none">
              <Lock size={16} className="mr-2" />
              Join Network
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;