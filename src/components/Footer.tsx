import React from 'react';

interface FooterProps {
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-zinc-950 py-12 px-6">
      <div className="container mx-auto">
        {/* Logo e descrição */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="text-white text-xl font-bold">🤖 WhatsBot</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Automatize seu atendimento no WhatsApp e aumente suas conversões com nossos bots inteligentes.
            </p>
          </div>

          {/* Links principais (horizontal) */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="text-gray-300 hover:text-white transition-colors">
              Início
            </a>
            <a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="text-gray-300 hover:text-white transition-colors">
              Sobre Nós
            </a>
            <a href="#recursos" onClick={(e) => scrollToSection(e, 'recursos')} className="text-gray-300 hover:text-white transition-colors">
              Recursos
            </a>
            <a href="#como-usar" onClick={(e) => scrollToSection(e, 'como-usar')} className="text-gray-300 hover:text-white transition-colors">
              Como Funciona
            </a>
            <a href="#beneficios" onClick={(e) => scrollToSection(e, 'beneficios')} className="text-gray-300 hover:text-white transition-colors">
              Benefícios
            </a>
            <a href="#precos" onClick={(e) => scrollToSection(e, 'precos')} className="text-gray-300 hover:text-white transition-colors">
              Preços
            </a>
          </div>

          {/* Links para dispositivos móveis */}
          <div className="grid grid-cols-2 gap-3 md:hidden w-full">
            <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="text-gray-300 hover:text-white transition-colors">
              Início
            </a>
            <a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="text-gray-300 hover:text-white transition-colors">
              Sobre Nós
            </a>
            <a href="#recursos" onClick={(e) => scrollToSection(e, 'recursos')} className="text-gray-300 hover:text-white transition-colors">
              Recursos
            </a>
            <a href="#como-usar" onClick={(e) => scrollToSection(e, 'como-usar')} className="text-gray-300 hover:text-white transition-colors">
              Como Funciona
            </a>
            <a href="#beneficios" onClick={(e) => scrollToSection(e, 'beneficios')} className="text-gray-300 hover:text-white transition-colors">
              Benefícios
            </a>
            <a href="#precos" onClick={(e) => scrollToSection(e, 'precos')} className="text-gray-300 hover:text-white transition-colors">
              Preços
            </a>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Copyright © feito por <a href="https://agenciasml.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">agenciasml.netlify.app</a>
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="https://wa.me/5511951909033" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="mailto:ofc.samuelromao@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 4H2C0.9 4 0 4.9 0 6v12c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm0 4l-10 6l-10-6V6l10 6l10-6v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
