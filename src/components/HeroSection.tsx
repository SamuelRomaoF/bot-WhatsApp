import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative z-10 container mx-auto px-4 pt-20 pb-24 text-center">
      <div className="absolute left-[10%] top-20 hidden md:block">
        <img src="/tag-whatsapp.svg" alt="WhatsApp" 
          onContextMenu={(e) => e.preventDefault()} 
          style={{ pointerEvents: 'none' }}
        />
      </div>
      <div className="absolute right-[15%] top-10 hidden md:block">
        <img src="/tag-automation.svg" alt="Automação" 
          onContextMenu={(e) => e.preventDefault()} 
          style={{ pointerEvents: 'none' }}
        />
      </div>
      <div className="absolute left-[20%] bottom-20 hidden md:block">
        <img src="/tag-bot.svg" alt="Bot" 
          onContextMenu={(e) => e.preventDefault()} 
          style={{ pointerEvents: 'none' }}
        />
      </div>

      <p className="text-salmon mb-6">Transforme seu Atendimento no WhatsApp</p>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto">
        Amplie o Potencial do seu 
        <span className="text-salmon block mt-2">Bot de WhatsApp</span>
      </h1>
      
      <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
        Acreditamos no poder da automação para transformar a maneira como você se comunica. 
        Nossa solução oferece ferramentas avançadas para revolucionar seu atendimento e 
        marketing no WhatsApp, economizando tempo e aumentando conversões.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a 
          href="https://wa.me/5511951909033?text=Olá,%20gostaria%20de%20comprar%20o%20WhatsBot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-salmon text-white px-8 py-4 rounded-full font-bold flex items-center justify-center hover:bg-salmon/90 transition-colors duration-300"
        >
          Comprar Agora 
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
        
        <a 
          href="https://wa.me/5511951909033?text=Olá,%20gostaria%20de%20ver%20uma%20demonstração%20do%20WhatsBot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-white text-white px-8 py-4 rounded-full font-bold flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
        >
          <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Ver Demonstração
        </a>
      </div>
    </section>
  );
};

export default HeroSection; 