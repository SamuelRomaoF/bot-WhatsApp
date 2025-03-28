import './App.css'
import React, { useState, useEffect } from 'react'

// Importando componentes
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import BenefitsSection from './components/BenefitsSection'
import PricingSection from './components/PricingSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [activeBotTab, setActiveBotTab] = useState(0)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [testimonialFilter, setTestimonialFilter] = useState('all')
  
  // Estado para controlar o menu móvel
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Funções para abrir e fechar o menu móvel
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = 'auto'
  }
  
  // Função para scroll suave
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Ajuste o valor para criar um pequeno espaço
        behavior: 'smooth'
      });
      // Fechar menu móvel após clicar em um link
      closeMobileMenu();
    }
  };

  const botProducts = [
    {
      id: 0,
      name: "WhatsMarketing",
      title: "Descubra os Benefícios do WhatsMarketing",
      description: "Potencialize suas campanhas com o WhatsMarketing, enviando mensagens em massa para seus contatos de forma personalizada e eficiente.",
      featureTitle: "Envio em Massa",
      features: [
        { icon: "plus", color: "fuchsia", text: "Envie para múltiplos contatos" },
        { icon: "pencil", color: "salmon", text: "Personalize cada mensagem" }
      ],
      multilingual: true,
      efficiency: "70%",
      rating: "4.8"
    },
    {
      id: 1,
      name: "AutoResponder",
      title: "Descubra os Benefícios do AutoResponder",
      description: "Automatize suas respostas com inteligência artificial. Responda perguntas frequentes e mantenha-se disponível 24/7 sem esforço.",
      featureTitle: "Respostas Inteligentes",
      features: [
        { icon: "plus", color: "fuchsia", text: "Configure gatilhos de resposta" },
        { icon: "pencil", color: "salmon", text: "Personalize as respostas automáticas" }
      ],
      multilingual: true,
      efficiency: "85%",
      rating: "4.7"
    },
    {
      id: 2,
      name: "WhatsComplete",
      title: "Descubra os Benefícios do WhatsComplete",
      description: "Solução completa que combina envio em massa e respostas automáticas em um único aplicativo. A escolha perfeita para quem precisa de todas as funcionalidades em um só lugar.",
      featureTitle: "Solução Completa",
      features: [
        { icon: "plus", color: "fuchsia", text: "Envio em massa + Respostas automáticas" },
        { icon: "pencil", color: "salmon", text: "Interface unificada e simplificada" }
      ],
      multilingual: true,
      efficiency: "90%",
      rating: "4.9"
    }
  ]

  return (
    <div className="min-h-screen bg-zinc text-white">
      <Header openMobileMenu={openMobileMenu} scrollToSection={scrollToSection} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} scrollToSection={scrollToSection} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection scrollToSection={scrollToSection} />
        <HowItWorksSection />
        <BenefitsSection botProducts={botProducts} activeBotTab={activeBotTab} setActiveBotTab={setActiveBotTab} />
        <PricingSection />
        <ContactSection />
      </main>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default App
