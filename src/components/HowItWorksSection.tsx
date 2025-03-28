import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-usar" className="bg-zinc py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column with Image */}
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-fuchsia/30 to-salmon/30 p-1 rounded-2xl shadow-2xl">
              <div className="bg-zinc-900 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611746869696-d09bce200020?q=80&w=1000" 
                  alt="WhatsApp Bot Application" 
                  className="w-full h-full object-cover rounded-2xl"
                  onContextMenu={(e) => e.preventDefault()} 
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            </div>
          </div>
          
          {/* Right Column with Text */}
          <div className="lg:w-1/2">
            <p className="text-fuchsia mb-2">Como Funciona</p>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conecte com seu<br />
              <span className="text-salmon">Bot de WhatsApp</span>
            </h2>
            
            <p className="text-gray-300 mb-8">
              Esta versão simplificada fornece uma visão rápida do processo, facilitando
              o início do uso dos nossos bots para o WhatsApp.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-salmon flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Instalação Simples</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-salmon flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Ferramentas Versáteis</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-salmon flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Configuração Intuitiva</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-salmon flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Resultados Imediatos</span>
              </li>
            </ul>
            
            <div className="mt-8">
              {/* Espaço mantido para preservar o layout */}
            </div>
          </div>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {/* Step 1 */}
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <div className="text-salmon text-sm font-medium mb-2">01.</div>
            <h3 className="text-xl font-bold mb-4">Escolha seu Bot</h3>
            <p className="text-gray-400">
              Selecione o bot que atende às suas necessidades: envio de mensagens, respostas automáticas 
              ou a combinação de ambos.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <div className="text-fuchsia text-sm font-medium mb-2">02.</div>
            <h3 className="text-xl font-bold mb-4">Instale o Aplicativo</h3>
            <p className="text-gray-400">
              Faça o download do nosso executável e instale em seu computador. O processo é rápido e simples, 
              sem complicações técnicas.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <div className="text-sky text-sm font-medium mb-2">03.</div>
            <h3 className="text-xl font-bold mb-4">Configure suas Mensagens</h3>
            <p className="text-gray-400">
              Personalize as mensagens, defina agendamentos ou crie respostas automáticas 
              para perguntas frequentes.
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <div className="text-myyellow text-sm font-medium mb-2">04.</div>
            <h3 className="text-xl font-bold mb-4">Obtenha Resultados</h3>
            <p className="text-gray-400">
              Veja seu WhatsApp trabalhando automaticamente, economizando seu tempo e 
              aumentando sua eficiência em segundos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
