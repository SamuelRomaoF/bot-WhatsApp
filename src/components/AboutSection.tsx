import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="bg-zinc py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2">
            <p className="text-fuchsia mb-2">Sobre Nós</p>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Inovando o Futuro<br />
              com <span className="text-salmon">Automação</span>
            </h2>
            
            <p className="text-gray-300 mb-8">
              No WhatsBot, somos apaixonados por aproveitar o poder da automação para transformar 
              a maneira como as pessoas se comunicam. Fundados na crença de que a tecnologia tem 
              o potencial de revolucionar tarefas diárias, estamos dedicados a desenvolver 
              soluções de ponta que capacitam indivíduos e empresas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-salmon flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="ml-3 font-bold">Nossa Missão</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Desenvolvemos bots de WhatsApp acessíveis e fáceis de usar, que 
                  economizam tempo e aumentam a produtividade.
                </p>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-fuchsia flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                  <h3 className="ml-3 font-bold">Nossa Visão</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Imaginamos um mundo onde a automação do WhatsApp se integra 
                  perfeitamente às rotinas diárias, liberando tempo para o que realmente importa.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden h-64">
              <img 
                src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhbhm4hx7s7lykwugha5n.png" 
                alt="WhatsApp Automation" 
                className="w-full h-full object-cover rounded-2xl"
                onContextMenu={(e) => e.preventDefault()} 
                style={{ pointerEvents: 'none' }}
              />
            </div>
            <div className="rounded-xl overflow-hidden h-64 mt-6">
              <img 
                src="https://www.desktop.com.br/blog/wp-content/webp-express/webp-images/uploads/2024/06/WhatsApp-Web.jpg.webp" 
                alt="WhatsApp Web" 
                className="w-full h-full object-cover rounded-2xl"
                onContextMenu={(e) => e.preventDefault()} 
                style={{ pointerEvents: 'none' }}
              />
            </div>
            <div className="rounded-xl overflow-hidden h-64">
              <img 
                src="https://ascsac.com.br/wp-content/uploads/2025/03/blog-capa-1024x576.png" 
                alt="Mobile App" 
                className="w-full h-full object-cover rounded-2xl"
                onContextMenu={(e) => e.preventDefault()} 
                style={{ pointerEvents: 'none' }}
              />
            </div>
            <div className="rounded-xl overflow-hidden h-64 mt-6">
              <img 
                src="https://letalk.com.br/blog/wp-content/uploads/2022/05/Como-Funciona-Um-Bot-De-WhatsApp-100.jpg" 
                alt="WhatsApp Bot" 
                className="w-full h-full object-cover rounded-2xl"
                onContextMenu={(e) => e.preventDefault()} 
                style={{ pointerEvents: 'none' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;