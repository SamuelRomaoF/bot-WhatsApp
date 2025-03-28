import React from 'react';

interface FeaturesSectionProps {
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="recursos" className="bg-gradient-to-br from-zinc-950 via-blue-950/20 to-zinc-950 py-24 relative overflow-hidden">
      {/* Background Circle Lines */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-30">
        <img src="/background-circle.svg" alt="" className="w-full max-w-4xl" 
          onContextMenu={(e) => e.preventDefault()} 
          style={{ pointerEvents: 'none' }}
        />
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        <p className="text-fuchsia text-center mb-2">Nossos Recursos</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Transforme sua Comunicação<br />
          via <span className="text-salmon">WhatsApp</span>
        </h2>
        
        {/* Main Feature Card */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden mb-16">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">
                Automatize Mensagens Instantaneamente
              </h3>
              <p className="text-gray-400 mb-6">
                Envie mensagens personalizadas para seus contatos com poder da automação. 
                Não importa se você precisa enviar campanhas de marketing, lembretes ou 
                atendimento ao cliente, nosso bot torna tudo mais rápido e eficiente.
              </p>
              <a href="#precos" className="flex items-center text-salmon font-medium group" onClick={(e) => scrollToSection(e, 'precos')}>
                Explorar Mais
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-full">
                <img 
                  src="https://whaticket.com/wp-content/uploads/2022/11/Chatbot-grupos-de-WhatsApp.png.webp" 
                  alt="WhatsApp Automation" 
                  className="w-full h-full object-cover rounded-2xl" 
                  onContextMenu={(e) => e.preventDefault()} 
                  style={{ pointerEvents: 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <h3 className="text-xl font-bold mb-4">Envie Mensagens em Massa</h3>
            <p className="text-gray-400 mb-6">
              Alcance centenas ou milhares de contatos com apenas alguns cliques. Ideal para 
              campanhas de marketing, notificações importantes ou avisos de promoções.
            </p>
            <a href="#precos" className="flex items-center text-salmon font-medium group" onClick={(e) => scrollToSection(e, 'precos')}>
              Explorar Mais
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
          
          {/* Card 2 */}
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <h3 className="text-xl font-bold mb-4">Respostas Automáticas com IA</h3>
            <p className="text-gray-400 mb-6">
              Deixe nosso bot responder perguntas frequentes automaticamente com inteligência 
              artificial. Ofereça suporte 24/7 sem precisar estar sempre online.
            </p>
            <a href="#precos" className="flex items-center text-fuchsia font-medium group" onClick={(e) => scrollToSection(e, 'precos')}>
              Explorar Mais
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
          
          {/* Card 3 */}
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <h3 className="text-xl font-bold mb-4">Personalização Completa</h3>
            <p className="text-gray-400 mb-6">
              Crie templates personalizados para suas mensagens, inclua dados específicos dos 
              clientes e adapte o tom para cada contexto de comunicação.
            </p>
            <a href="#precos" className="flex items-center text-sky font-medium group" onClick={(e) => scrollToSection(e, 'precos')}>
              Explorar Mais
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
