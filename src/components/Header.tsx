import React from 'react';

interface HeaderProps {
  openMobileMenu: () => void;
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ openMobileMenu, scrollToSection }) => {
  return (
    <header className="relative top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-fuchsia text-3xl mr-2">🤖</span>
            <span className="text-xl font-bold text-white">WhatsBot</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#inicio" 
              onClick={(e) => scrollToSection(e, 'inicio')}
              className="text-gray-200 hover:text-white transition-colors duration-300"
            >
              Início
            </a>
            <a 
              href="#sobre" 
              onClick={(e) => scrollToSection(e, 'sobre')}
              className="text-gray-200 hover:text-white transition-colors duration-300"
            >
              Sobre Nós
            </a>
            <a 
              href="#recursos" 
              onClick={(e) => scrollToSection(e, 'recursos')}
              className="text-gray-200 hover:text-white transition-colors duration-300"
            >
              Recursos
            </a>
            <a 
              href="#como-usar" 
              onClick={(e) => scrollToSection(e, 'como-usar')}
              className="text-gray-200 hover:text-white transition-colors duration-300"
            >
              Como Funciona
            </a>
            <a 
              href="#beneficios" 
              onClick={(e) => scrollToSection(e, 'beneficios')}
              className="text-gray-200 hover:text-white transition-colors duration-300"
            >
              Benefícios
            </a>
            <a 
              href="#precos" 
              onClick={(e) => scrollToSection(e, 'precos')}
              className="text-gray-200 hover:text-white transition-colors duration-300"
            >
              Preços
            </a>
          </nav>
          
          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#contato" 
              onClick={(e) => scrollToSection(e, 'contato')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contato
            </a>
            <a 
              href="#precos" 
              onClick={(e) => scrollToSection(e, 'precos')}
              className="bg-salmon hover:bg-salmon-dark text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Comprar Agora
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={openMobileMenu}
            className="md:hidden text-gray-300 hover:text-white transition-colors focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
