import React from 'react';
    import { Building2, Globe, Phone, Mail, MessageSquare, Cloud, Bot, Rocket, CheckCircle2, MessageCircle, ChevronDown, Code, Settings } from 'lucide-react';

    function App() {
      const whatsappNumber = "5537999068306"; // Format: country code + number without spaces or special chars
      const whatsappUrl = `https://wa.me/${whatsappNumber}`;

      return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative">
          {/* WhatsApp Floating Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center gap-2"
            aria-label="Contato WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="hidden md:inline">Fale no WhatsApp</span>
          </a>

          {/* Hero Section */}
          <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="container mx-auto px-4 py-16">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Bem-vindo à IprRossoni Ltda!</h1>
                <p className="text-xl mb-8">
                  Somos uma empresa comprometida em oferecer soluções tecnológicas inovadoras para potencializar o sucesso do seu negócio.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <a href="#contato" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                    Fale Conosco
                  </a>
                  <a href="#servicos" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                    Nossos Serviços
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Contact Info */}
          <section id="contato" className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Building2 className="text-blue-600" />
                    <p>Rua Geraldo Vieira Xavier, n° 72, Papagaios (MG)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-600" />
                    <p>+55 37 99906-8306</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-600" />
                    <p>info@iprrossoni.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="text-blue-600" />
                    <p>iprrossoni.com</p>
                  </div>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Conversar no WhatsApp</span>
                  </a>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                    alt="Escritório moderno" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section id="servicos" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <ServiceCard 
                  icon={<Globe />}
                  title="Criação de Sites Web"
                  description="Damos vida à sua presença online com websites personalizados, modernos e funcionais."
                />
                <ServiceCard 
                  icon={<MessageSquare />}
                  title="Sistemas WhatsApp"
                  description="Criamos ferramentas que transformam o WhatsApp em uma poderosa plataforma de gestão."
                />
                <ServiceCard 
                  icon={<Bot />}
                  title="Automatizações com IA"
                  description="Desenvolvemos soluções automatizadas com IA para otimizar processos."
                />
                <ServiceCard 
                  icon={<Globe />}
                  title="Registro de Domínios"
                  description="Cuidamos de todo o processo para registrar o nome de domínio ideal para o seu negócio."
                />
                <ServiceCard 
                  icon={<Cloud />}
                  title="Soluções em Cloud"
                  description="Oferecemos suporte completo no mundo do Cloud Computing."
                />
                <ServiceCard 
                  icon={<Rocket />}
                  title="Consultoria Digital"
                  description="Consultoria especializada para impulsionar sua presença digital."
                />
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a IprRossoni?</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <details className="group bg-blue-50 rounded-lg">
                  <summary className="flex items-center gap-3 p-4 cursor-pointer hover:bg-blue-100 transition-colors">
                    <Bot className="text-blue-600 flex-shrink-0" />
                    <p className="text-gray-800 font-semibold">Expertise em tecnologia moderna e inovadora</p>
                    <ChevronDown className="ml-auto text-blue-600 transform group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 space-y-4">
                    <h3 className="text-xl font-semibold text-blue-800">Inteligência Artificial (IA) e Machine Learning</h3>
                    <p className="text-gray-700">
                      A inteligência artificial está revolucionando praticamente todas as indústrias. Algumas aplicações incluem:
                    </p>
                    <ul className="space-y-2 text-gray-700 list-disc pl-6">
                      <li>
                        <strong>Processamento de Linguagem Natural (PLN):</strong> Chatbots, assistentes virtuais (como Alexa e ChatGPT).
                      </li>
                      <li>
                        <strong>Visão Computacional:</strong> Reconhecimento facial, análise de imagens médicas, carros autônomos.
                      </li>
                      <li>
                        <strong>Automação:</strong> Melhoria de processos empresariais através de algoritmos preditivos e personalização em massa.
                      </li>
                    </ul>
                    <h4 className="text-lg font-semibold text-blue-800 mt-4">Avanços mais recentes:</h4>
                    <ul className="space-y-2 text-gray-700 list-disc pl-6">
                      <li>Geração de imagens e vídeos realistas com IA generativa (como DALL-E e Stable Diffusion).</li>
                      <li>Modelos de linguagem cada vez mais potentes (GPT-4 e similares).</li>
                      <li>Sistemas de IA multimodal, que processam texto, imagem e som simultaneamente.</li>
                    </ul>
                  </div>
                </details>
                <Benefit text="Atendimento personalizado e profissional" />
                <details className="group bg-blue-50 rounded-lg">
                  <summary className="flex items-center gap-3 p-4 cursor-pointer hover:bg-blue-100 transition-colors">
                    <Settings className="text-blue-600 flex-shrink-0" />
                    <p className="text-gray-800 font-semibold">Soluções sob medida para necessidades específicas</p>
                    <ChevronDown className="ml-auto text-blue-600 transform group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg text-blue-800 mb-2">Sistemas Personalizados</h4>
                      <p className="text-gray-700">Desenvolvimento de software ou aplicativos adaptados às operações e fluxos de trabalho específicos de uma empresa.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-blue-800 mb-2">Integração de Sistemas</h4>
                      <p className="text-gray-700">Soluções que conectam diferentes plataformas ou tecnologias usadas por um cliente para criar um ambiente digital integrado.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-blue-800 mb-2">Automatização de Processos</h4>
                      <p className="text-gray-700">Automação de tarefas específicas, como emissão de relatórios, controle de estoque ou coordenação de equipes.</p>
                    </div>
                  </div>
                </details>
                <Benefit text="Suporte contínuo para garantir o sucesso dos seus projetos" />
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-blue-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p className="text-lg font-semibold mb-2">IprRossoni Ltda – Tecnologia que transforma! 🚀</p>
              <p className="text-blue-200">© 2025 IprRossoni Ltda. Todos os direitos reservados.</p>
            </div>
          </footer>
        </div>
      );
    }

    function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
      return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-blue-600 w-12 h-12 mb-4 flex items-center justify-center bg-blue-50 rounded-lg">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      );
    }

    function Benefit({ text }: { text: string }) {
      return (
        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
          <CheckCircle2 className="text-blue-600 flex-shrink-0" />
          <p className="text-gray-800">{text}</p>
        </div>
      );
    }

    export default App;
