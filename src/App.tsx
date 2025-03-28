import './App.css'
import React, { useState } from 'react'

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

// Usando a mesma interface que está em BenefitsSection
interface BotProduct {
  id: number; // Nota: mudado de string para number para compatibilidade
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

function App() {
  const [activeBotTab, setActiveBotTab] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      closeMobileMenu()
    }
  }

  const botProducts: BotProduct[] = [
    {
      id: 0,
      name: 'WhatsMarketing',
      title: "Descubra os Benefícios do WhatsMarketing", 
      description: "Potencialize suas campanhas com o WhatsMarketing, enviando mensagens em massa para seus contatos de forma personalizada e eficiente.",
      featureTitle: "Envio em Massa",
      features: [
        { text: 'Envio de mensagens em massa', color: 'pink-500', icon: 'check' },
        { text: 'Personalização com campos dinâmicos', color: 'pink-500', icon: 'check' },
        { text: 'Segmentação de público', color: 'pink-500', icon: 'check' },
        { text: 'Automação de campanhas', color: 'pink-500', icon: 'check' },
        { text: 'Programação de envios', color: 'pink-500', icon: 'check' },
        { text: 'Métricas de engajamento', color: 'pink-500', icon: 'check' },
      ],
      multilingual: true,
      efficiency: '70%',
      rating: '4.8',
    },
    {
      id: 1,
      name: 'AutoResponder',
      title: "Descubra os Benefícios do AutoResponder",
      description: "Automatize suas respostas com inteligência artificial. Responda perguntas frequentes e mantenha-se disponível 24/7 sem esforço.",
      featureTitle: "Respostas Inteligentes",
      features: [
        { text: 'Respostas automáticas 24/7', color: 'blue-500', icon: 'check' },
        { text: 'Identificação de palavras-chave', color: 'blue-500', icon: 'check' },
        { text: 'Respostas inteligentes', color: 'blue-500', icon: 'check' },
        { text: 'Integração com humanos', color: 'blue-500', icon: 'check' },
        { text: 'Configuração flexível', color: 'blue-500', icon: 'check' },
        { text: 'Análise de conversas', color: 'blue-500', icon: 'check' },
      ],
      multilingual: true,
      efficiency: '80%',
      rating: '4.7',
    },
    {
      id: 2,
      name: 'WhatsComplete',
      title: "Descubra os Benefícios do WhatsComplete",
      description: "Solução completa que combina envio em massa e respostas automáticas em um único aplicativo. A escolha perfeita para quem precisa de todas as funcionalidades em um só lugar.",
      featureTitle: "Solução Completa",
      features: [
        { text: 'Marketing + Atendimento', color: 'purple-500', icon: 'check' },
        { text: 'Dashboard unificado', color: 'purple-500', icon: 'check' },
        { text: 'Automação completa', color: 'purple-500', icon: 'check' },
        { text: 'Métricas avançadas', color: 'purple-500', icon: 'check' },
        { text: 'Integrações Premium', color: 'purple-500', icon: 'check' },
        { text: 'Suporte prioritário', color: 'purple-500', icon: 'check' },
      ],
      multilingual: true,
      efficiency: '90%',
      rating: '4.9',
    },
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
        <BenefitsSection 
          activeBotTab={activeBotTab} 
          setActiveBotTab={setActiveBotTab} 
          botProducts={botProducts} 
        />
        <PricingSection />
        <ContactSection />
      </main>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default App
