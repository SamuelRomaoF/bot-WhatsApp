import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section id="precos" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 text-center">
        <p className="text-fuchsia mb-2">Conheça nossos bots</p>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Escolha o <span className="text-salmon">melhor para você</span>
        </h2>
        
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Oferecemos diferentes tipos de bots para WhatsApp, cada um com funcionalidades específicas para atender diferentes necessidades.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Bot de Marketing */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 flex flex-col h-full">
            <div className="mb-auto">
              <div className="w-16 h-16 bg-fuchsia/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-fuchsia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Bot de Marketing</h3>
              
              <p className="text-gray-400 mb-6">
                Ideal para fazer envios em massa de campanhas de marketing, promoções e novidades para seus contatos de forma personalizada.
              </p>
              
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Envio em massa personalizado</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Segmentação de contatos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Relatórios de desempenho</span>
                </li>
              </ul>
            </div>
            
            <a
              href="https://wa.me/5511951909033?text=Olá,%20gostaria%20de%20conhecer%20mais%20sobre%20o%20Bot%20de%20Marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 bg-fuchsia hover:bg-fuchsia/80 text-white text-center rounded-lg transition-colors duration-300"
            >
              Conhecer Mais
            </a>
          </div>
          
          {/* Bot de Atendimento */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 flex flex-col h-full transform scale-105 shadow-xl relative">
            <div className="absolute top-0 left-0 w-full text-center">
              <span className="bg-salmon text-white text-sm py-1 px-4 rounded-bl-lg rounded-br-lg">
                Mais Popular
              </span>
            </div>
            
            <div className="mb-auto pt-6">
              <div className="w-16 h-16 bg-salmon/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-salmon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Bot de Atendimento</h3>
              
              <p className="text-gray-400 mb-6">
                Automatize o atendimento ao cliente, respondendo perguntas frequentes e coletando informações importantes 24 horas por dia.
              </p>
              
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Respostas automáticas inteligentes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Atendimento 24/7</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Transferência para atendente humano</span>
                </li>
              </ul>
            </div>
            
            <a
              href="https://wa.me/5511951909033?text=Olá,%20gostaria%20de%20conhecer%20mais%20sobre%20o%20Bot%20de%20Atendimento"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 bg-salmon hover:bg-salmon/80 text-white text-center rounded-lg transition-colors duration-300"
            >
              Conhecer Mais
            </a>
          </div>
          
          {/* Bot Completo */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 flex flex-col h-full">
            <div className="mb-auto">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Bot Completo</h3>
              
              <p className="text-gray-400 mb-6">
                Combine funções de marketing e atendimento em uma solução completa, ideal para empresas que desejam maximizar suas operações no WhatsApp.
              </p>
              
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Todas as funções dos outros bots</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Integração com sistemas externos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Dashboard analítico avançado</span>
                </li>
              </ul>
            </div>
            
            <a
              href="https://wa.me/5511951909033?text=Olá,%20gostaria%20de%20conhecer%20mais%20sobre%20o%20Bot%20Completo"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white text-center rounded-lg transition-colors duration-300"
            >
              Conhecer Mais
            </a>
          </div>
        </div>
        
        <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Precisa de uma solução personalizada?</h3>
          <p className="text-gray-300 mb-6">
            Se você precisa de funcionalidades específicas, podemos desenvolver um bot personalizado que atenda perfeitamente às necessidades do seu negócio.
          </p>
          <a
            href="https://wa.me/5511951909033?text=Olá,%20gostaria%20de%20uma%20solução%20personalizada%20para%20meu%20negócio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-zinc-900 rounded-lg transition-colors duration-300"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
