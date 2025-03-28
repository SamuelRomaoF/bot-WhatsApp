import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="bg-gradient-to-br from-zinc-950 via-blue-950/20 to-zinc-950 py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        <p className="text-fuchsia text-center mb-2">Entre em Contato</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Estamos Aqui para <span className="text-salmon">Ajudar</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 text-center">
              <div className="w-16 h-16 bg-salmon/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-salmon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-400 mb-6">
                Fale diretamente conosco pelo WhatsApp para atendimento rápido.
              </p>
              <a 
                href="https://wa.me/5511951909033?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20WhatsBot" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-salmon hover:bg-salmon-dark text-white py-3 px-6 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar no WhatsApp
              </a>
            </div>
            
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 text-center">
              <div className="w-16 h-16 bg-fuchsia/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-fuchsia" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-400 mb-6">
                Envie-nos um email e retornaremos em até 24 horas úteis.
              </p>
              <a 
                href="mailto:ofc.samuelromao@gmail.com" 
                className="w-full bg-fuchsia hover:bg-fuchsia-600 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
