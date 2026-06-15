import emailjs from '@emailjs/browser';
import { useState, useEffect, useRef } from 'react';
import {
  Smartphone,
  Globe,
  ShoppingCart,
  CreditCard,
  Shield,
  Server,
  CheckCircle,
  Zap,
  Clock,
  Award,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Code,
  Layers,
  Settings,
  BarChart3,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const sections = {
    accueil: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    'paiement-api': useRef<HTMLElement>(null),
    realisations: useRef<HTMLElement>(null),
    'a-propos': useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionKeys = Object.keys(sections) as Array<keyof typeof sections>;
      for (const key of sectionKeys) {
        const section = sections[key].current;
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(key);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: keyof typeof sections) => {
    sections[id].current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    projectType: formData.projectType,
    message: formData.message,
  };

  try {
    await emailjs.send(
      'service_ro3f5uj',
      'template_iadgmyf',
      templateParams,
      {
        publicKey: 'wC7cJYlvOYbYhaBC8',
      }
    );

    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
  } catch (error) {
    console.error('Erreur EmailJS:', error);
    alert("Erreur lors de l'envoi. Veuillez réessayer.");
  }
};

  const navItems = [
    { id: 'accueil' as const, label: 'Accueil' },
    { id: 'services' as const, label: 'Services' },
    { id: 'paiement-api' as const, label: 'Paiement API' },
    { id: 'realisations' as const, label: 'Réalisations' },
    { id: 'a-propos' as const, label: 'À propos' },
    { id: 'contact' as const, label: 'Contact' },
  ];

  const services = [
    {
      icon: Globe,
      title: 'Création de sites web',
      description: 'Sites web professionnels, modernes et responsive adaptés à votre image de marque.',
    },
    {
      icon: Smartphone,
      title: 'Applications mobiles',
      description: 'Apps Android et iOS performantes avec interfaces intuitives et UX optimisée.',
    },
    {
      icon: ShoppingCart,
      title: 'Boutiques e-commerce',
      description: 'Solutions e-commerce complètes avec gestion des commandes et paiements intégrés.',
    },
    {
      icon: CreditCard,
      title: 'Intégration API Amana',
      description: 'Paiements Amana Transfert d\'argent sécurisés pour vos plateformes digitales.',
    },
    {
      icon: Layers,
      title: 'Intégration API Nita',
      description: 'Solutions de paiement Nita Transfert d\'argent pour automatiser vos transactions.',
    },
    {
      icon: Server,
      title: 'Hébergement & Maintenance',
      description: 'Hébergement, maintenance, sécurité et support technique 24/7.',
    },
  ];

  const apiFeatures = [
    { icon: ShoppingCart, title: 'Paiement e-commerce', desc: 'Intégration boutique en ligne' },
    { icon: Smartphone, title: 'Paiement mobile', desc: 'Apps Android & iOS' },
    { icon: CheckCircle, title: 'Confirmation automatique', desc: 'Validation instantanée' },
    { icon: Zap, title: 'Webhooks', desc: 'Notifications en temps réel' },
    { icon: Shield, title: 'Sécurisation SSL', desc: 'Transactions cryptées' },
    { icon: Code, title: 'Intégration WooCommerce', desc: 'Plugin prêt à l\'emploi' },
    { icon: Layers, title: 'Intégration Flutter', desc: 'SDK mobile complet' },
    { icon: BarChart3, title: 'Tableau de bord', desc: 'Suivi en temps réel' },
  ];

  const whyChoose = [
    { icon: MapPin, title: 'Expertise locale', desc: 'Connaissance approfondie du marché nigérien' },
    { icon: Globe, title: 'Vision internationale', desc: 'Standards de qualité mondiale' },
    { icon: Shield, title: 'Solutions sécurisées', desc: 'Protection maximale de vos données' },
    { icon: Clock, title: 'Support rapide', desc: 'Disponibilité et réactivité 7j/7' },
    { icon: Award, title: 'Design premium', desc: 'Interfaces modernes et élégantes' },
    { icon: CreditCard, title: 'Paiements locaux', desc: 'Maîtrise d\'Amana et Nita' },
  ];

  const portfolio = [
  {
    title: 'Boulevard Delivery',
    description:
      'Plateforme complète de commande et livraison de repas avec menu dynamique, panier, géolocalisation client, dashboard restaurant, espace livreur, notifications temps réel et statistiques.',
    tags: ['React', 'Supabase', 'Vercel', 'Realtime', 'Livraison'],
    link: 'https://boulevard-delivery.vercel.app',
  },
  {
    title: 'Boutique e-commerce avec Amana',
    description:
      'Plateforme e-commerce avec intégration des paiements Amana pour automatiser les transactions.',
    tags: ['E-commerce', 'API Amana', 'WooCommerce'],
  },
  {
    title: 'Intégration API Nita',
    description:
      'Système de paiement digital intégré pour une plateforme de services.',
    tags: ['API Nita', 'Paiement', 'Sécurité'],
  },
];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-primary-500/95 backdrop-blur-lg shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('accueil')}
              className="flex items-center space-x-2 group"
            >
              <img
  src="/images/logo-airtech.png"
  alt="AÏRTech"
  className="h-24 w-auto object-contain"
/>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-1 py-2 font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-accent-500'
                      : scrolled
                      ? 'text-white/80 hover:text-white'
                      : 'text-primary-500/80 hover:text-primary-500'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-500 rounded-full"></span>
                  )}
                </button>
              ))}
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                Demander un devis
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-white' : 'text-primary-500'
              }`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-20 bg-primary-500 shadow-2xl transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <nav className="container-custom py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-accent-500 text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary w-full mt-4"
            >
              Demander un devis
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={sections.accueil}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-hero-pattern">
          <div className="absolute inset-0 geometric-bg"></div>
          <div className="absolute inset-0 circuit-pattern opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-500/90 via-primary-500/95 to-primary-500"></div>
        </div>

        {/* Animated shapes inspired by Agadez architecture */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-accent-500/5 rounded-full blur-2xl animate-pulse"></div>

          {/* Geometric triangles inspired by Sahelian architecture */}
          <svg
            className="absolute top-0 right-0 w-96 h-96 opacity-10"
            viewBox="0 0 200 200"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            <polygon
              points="100,20 180,180 20,180"
              fill="none"
              stroke="#c9a052"
              strokeWidth="1"
            />
            <polygon
              points="100,40 160,160 40,160"
              fill="none"
              stroke="#c9a052"
              strokeWidth="0.5"
            />
          </svg>

          <svg
            className="absolute bottom-0 left-0 w-80 h-80 opacity-10"
            viewBox="0 0 200 200"
            style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '2s' }}
          >
            <polygon
              points="100,10 190,190 10,190"
              fill="none"
              stroke="#c9a052"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full mb-6 animate-slide-up">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-accent-500 text-sm font-medium">
                  #1 Solutions digitales au Niger
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                AÏRTech, votre{' '}
                <span className="gradient-text">partenaire digital</span>{' '}
                au Niger
              </h1>

              <p className="text-lg sm:text-xl text-white/80 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Nous créons des sites web, applications web et mobiles et solutions e-commerce
                avec intégration des paiements Amana et Nita.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <button onClick={() => scrollToSection('contact')} className="btn-primary">
                  Demander un devis
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button onClick={() => scrollToSection('services')} className="btn-secondary">
                  Voir nos services
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-500">50+</div>
                  <div className="text-white/60 text-sm">Projets livrés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-500">100%</div>
                  <div className="text-white/60 text-sm">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-500">24/7</div>
                  <div className="text-white/60 text-sm">Support technique</div>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square">
                {/* Main circle */}
                <div className="absolute inset-0 rounded-full border-2 border-accent-500/30 animate-pulse-glow"></div>
                <div className="absolute inset-8 rounded-full border border-gold-400/20"></div>
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-accent-500/10 to-transparent"></div>

                {/* Central icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent-500 to-gold-400 rounded-2xl flex items-center justify-center transform rotate-12 shadow-2xl shadow-accent-500/30">
                    <img
  src="/images/app-icon.png"
  alt="AÏRTech"
  className="w-24 h-24 object-contain"
/>
                  </div>
                </div>

                {/* Orbiting icons */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center border border-accent-500/30 shadow-xl">
                      <Smartphone className="w-8 h-8 text-accent-500" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center border border-accent-500/30 shadow-xl">
                      <ShoppingCart className="w-8 h-8 text-accent-500" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center border border-accent-500/30 shadow-xl">
                      <CreditCard className="w-8 h-8 text-accent-500" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center border border-accent-500/30 shadow-xl">
                      <Code className="w-8 h-8 text-accent-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={sections.services} className="section-padding bg-gray-50 geometric-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500/5 rounded-full text-accent-600 font-medium text-sm mb-4">
              Nos Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500 mb-4">
              Solutions digitales{' '}
              <span className="gradient-text">complètes</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              De la création à la maintenance, nous vous accompagnons dans toutes les étapes
              de votre transformation digitale.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card card-hover group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-7 h-7 text-accent-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-500 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment API Section */}
      <section ref={sections['paiement-api']} className="section-padding bg-primary-500 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20"></div>
        <div className="absolute inset-0 geometric-bg"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-accent-500/20 rounded-full text-accent-400 font-medium text-sm mb-4">
                Intégration Paiements
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Intégration des paiements locaux pour vos{' '}
                <span className="gradient-text">plateformes digitales</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                AÏRTech accompagne les entreprises, boutiques en ligne et applications mobiles
                au Niger dans l'intégration sécurisée des API Amana et Nita afin d'automatiser
                les paiements, confirmer les transactions et améliorer l'expérience client.
              </p>
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                Intégrer les paiements
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {apiFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <feature.icon className="w-8 h-8 text-accent-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                  <p className="text-white/60 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-white geometric-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500/5 rounded-full text-accent-600 font-medium text-sm mb-4">
              Pourquoi nous choisir
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500 mb-4">
              Pourquoi choisir{' '}
              <span className="gradient-text">AÏRTech</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Une équipe dévouée, des solutions innovantes et un accompagnement personnalisé.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <item.icon className="w-10 h-10 text-accent-500" />
                  </div>
                  <div className="absolute inset-0 bg-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-primary-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={sections.realisations} className="section-padding bg-gray-50 geometric-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500/5 rounded-full text-accent-600 font-medium text-sm mb-4">
              Nos Réalisations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500 mb-4">
              Découvrez nos{' '}
              <span className="gradient-text">projets récents</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Des solutions sur mesure qui ont transformé les activités de nos clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="card card-hover group overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="relative h-48 -mx-8 -mt-8 mb-6 bg-gradient-to-br from-primary-500 to-primary-700 overflow-hidden">
                  <div className="absolute inset-0 circuit-pattern opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-accent-500/20 rounded-2xl flex items-center justify-center border border-accent-500/30">
                      <Code className="w-12 h-12 text-accent-500" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl font-bold text-primary-500 mb-3 group-hover:text-accent-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-500/5 text-primary-500 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {'link' in item && item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-5 text-accent-600 font-semibold hover:text-accent-700"
                  >
                    Voir la démonstration
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sections['a-propos']} className="section-padding bg-primary-500 relative overflow-hidden">
        <div className="absolute inset-0 sahel-pattern opacity-10"></div>
        <div className="absolute inset-0 geometric-bg"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-accent-500/20 rounded-full text-accent-400 font-medium text-sm mb-4">
                À propos de nous
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Une équipe passionnée au service de{' '}
                <span className="gradient-text">votre succès digital</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                AÏRTech est une entreprise technologique nigérienne basée à Niamey, fondée
                par Moustapha Maman Sani Abdou. Notre mission est d'aider les entreprises
                africaines à réussir leur transformation digitale grâce à des solutions web,
                mobiles et fintech modernes, sécurisées et adaptées au marché local.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Nous combinons expertise technique de pointe et compréhension profonde des
                réalités locales pour créer des solutions qui font la différence.
              </p>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-gold-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-500 font-bold text-2xl">M</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Moustapha Maman Sani Abdou</h4>
                    <p className="text-accent-400">Fondateur & CEO</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent-500 mb-2">50+</div>
                  <div className="text-white/60">Projets livrés</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent-500 mb-2">30+</div>
                  <div className="text-white/60">Clients satisfaits</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent-500 mb-2">2+</div>
                  <div className="text-white/60">Années d'expérience</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent-500 mb-2">100%</div>
                  <div className="text-white/60">Engagement qualité</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sections.contact} className="section-padding bg-white geometric-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500/5 rounded-full text-accent-600 font-medium text-sm mb-4">
              Contactez-nous
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500 mb-4">
              Parlons de votre{' '}
              <span className="gradient-text">projet</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Nous sommes prêts à transformer vos idées en réalité digitale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary-500 font-medium mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-primary-500 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary-500 font-medium mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none"
                      placeholder="+227 XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-primary-500 font-medium mb-2">
                      Type de projet
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none bg-white"
                      required
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="site-web">Site web professionnel</option>
                      <option value="application-mobile">Application mobile</option>
                      <option value="e-commerce">Boutique e-commerce</option>
                      <option value="api-paiement">Intégration API paiement</option>
                      <option value="hebergement">Hébergement & Maintenance</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-primary-500 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none resize-none"
                    placeholder="Décrivez votre projet..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Envoyer le message
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-500 mb-1">
                      Téléphone
                    </h4>
                    <p className="text-gray-600">+227 80068056</p>
                    <p className="text-gray-600">+227 92879458</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-500 mb-1">
                      WhatsApp
                    </h4>
                    <p className="text-gray-600">+227 80068056</p>
                    <a
                      href="https://wa.me/22780068056"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-accent-500 hover:text-accent-600 font-medium"
                    >
                      Discuter maintenant →
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-500 mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:moustaphamaman80@yahoo.fr"
                      className="text-gray-600 hover:text-accent-500 transition-colors"
                    >
                      moustaphamaman80@yahoo.fr
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-500 mb-1">
                      Adresse
                    </h4>
                    <p className="text-gray-600">Niamey - Niger</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-500 border-t border-white/10">
        <div className="container-custom py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1 flex flex-col gap-4">
            <img
  src="/images/logo-footer.png"
  alt="AÏRTech"
  className="h-24 w-auto mb-6 object-contain"
/>
              <p className="text-white/70 text-lg leading-relaxed max-w-xs">
  Solutions digitales & paiements intelligents au Niger
</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-primary-500 transition-colors text-white">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-primary-500 transition-colors text-white">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-primary-500 transition-colors text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500 hover:text-primary-500 transition-colors text-white">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-white/60 hover:text-accent-400 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li><span className="text-white/60">Création de sites web</span></li>
                <li><span className="text-white/60">Applications mobiles</span></li>
                <li><span className="text-white/60">E-commerce</span></li>
                <li><span className="text-white/60">API Amana & Nita</span></li>
                <li><span className="text-white/60">Hébergement & Maintenance</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Coordonnées</h4>
              <ul className="space-y-3 text-white/60">
                <li>+227 80068056 / +227 92879458</li>
                <li>moustaphamaman80@yahoo.fr</li>
                <li>Niamey - Niger</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-custom py-6">
            <p className="text-center text-white/40 text-sm">
              © 2026 AÏRTech. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/22780068056"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse-glow group"
        aria-label="Contacter via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-16 bg-white text-primary-500 px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Discuter sur WhatsApp
        </span>
      </a>
    </div>
  );
}

export default App;
