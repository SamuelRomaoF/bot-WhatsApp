import React from 'react';

interface BotProduct {
  id: number;
  name: string;
  title: string;
  description: string;
  featureTitle: string;
  features: {
    icon: string;
    color: string;
    text: string;
  }[];
  multilingual: boolean;
  efficiency: string;
  rating: string;
}

interface BenefitsSectionProps {
  botProducts: BotProduct[];
  activeBotTab: number;
  setActiveBotTab: (index: number) => void;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ botProducts, activeBotTab, setActiveBotTab }) => {
  return (
    <section id="beneficios" className="bg-zinc py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        <p className="text-fuchsia mb-2">Por que escolher nossos Bots?</p>
        
        {/* Bot Products Tabs */}
        <div className="flex space-x-4 mb-10">
          {botProducts.map((product, index) => (
            <button 
              key={product.id}
              onClick={() => setActiveBotTab(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeBotTab === index 
                  ? 'bg-salmon text-white' 
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {botProducts[activeBotTab].title.split(botProducts[activeBotTab].name)[0]}
              <span className="text-salmon block mt-2">{botProducts[activeBotTab].name}</span>
            </h2>
            
            <p className="text-gray-300 mb-8">
              {botProducts[activeBotTab].description}
            </p>
            
            {/* Demo Interface */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 mb-6">
              <h3 className="text-lg font-medium mb-4">{botProducts[activeBotTab].featureTitle}</h3>
              <div className="space-y-4 mb-6">
                {botProducts[activeBotTab].features.map((feature, index) => (
                  <div key={index} className="bg-zinc-800 rounded-lg p-3 flex items-center">
                    <div className={`w-6 h-6 rounded-full bg-${feature.color} flex items-center justify-center mr-3`}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {feature.icon === "plus" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        )}
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
              <a 
                href={`https://wa.me/5511951909033?text=Olá,%20gostaria%20de%20começar%20agora%20com%20o%20${botProducts[activeBotTab].name}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-salmon text-white py-3 rounded-lg font-medium flex items-center justify-center"
              >
                Começar Agora
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
            
            <p className="text-gray-400 text-sm">
              O {botProducts[activeBotTab].name} é projetado com simplicidade em mente, garantindo que usuários de todos os 
              níveis de habilidade possam navegar e utilizar todas as ferramentas sem esforço.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            {/* Multilingual Support */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Suporte Multilíngue</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center bg-zinc-800 rounded-lg px-3 py-2">
                  <span className="mr-2">🇧🇷</span>
                  <span className="text-sm">Português</span>
                </div>
                <div className="flex items-center bg-zinc-800 rounded-lg px-3 py-2">
                  <span className="mr-2">🇺🇸</span>
                  <span className="text-sm">Inglês</span>
                </div>
                <div className="flex items-center bg-zinc-800 rounded-lg px-3 py-2">
                  <span className="mr-2">🇪🇸</span>
                  <span className="text-sm">Espanhol</span>
                </div>
                <div className="flex items-center bg-zinc-800 rounded-lg px-3 py-2">
                  <span className="mr-2">🇫🇷</span>
                  <span className="text-sm">Francês</span>
                </div>
                <div className="flex items-center bg-zinc-800 rounded-lg px-3 py-2">
                  <span className="mr-2">🇮🇹</span>
                  <span className="text-sm">Italiano</span>
                </div>
                <div className="flex items-center bg-zinc-800 rounded-lg px-3 py-2">
                  <span className="mr-2">🇩🇪</span>
                  <span className="text-sm">Alemão</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Proficiente em entender e produzir conteúdo em múltiplos idiomas, 
                permitindo comunicação eficaz e engajamento com públicos diversos.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 flex flex-col items-center justify-center">
                <div className="text-myyellow text-5xl font-bold mb-2">{botProducts[activeBotTab].efficiency}</div>
                <p className="text-center text-gray-400">Mais Eficiente</p>
              </div>
              
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold mb-2">{botProducts[activeBotTab].rating}</div>
                <div className="flex mb-1">
                  <svg className="w-5 h-5 text-myyellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-myyellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-myyellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-myyellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-myyellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <p className="text-center text-gray-400 text-sm">Avaliação de +10 usuários</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
