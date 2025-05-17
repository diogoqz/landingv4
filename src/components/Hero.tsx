import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Brain, Check } from 'lucide-react';
import { WhatsAppMessage } from './WhatsAppUI';
import { cn } from '@/lib/utils';

export default function Hero() {
  const [isTyping, setIsTyping] = useState(false);
  const [showFirstResponse, setShowFirstResponse] = useState(false);
  const [showSecondResponse, setShowSecondResponse] = useState(false);

  useEffect(() => {
    const typingTimer = setTimeout(() => setIsTyping(true), 1000);
    const firstResponseTimer = setTimeout(() => {
      setIsTyping(false);
      setShowFirstResponse(true);
    }, 3000);
    const secondResponseTimer = setTimeout(() => {
      setShowSecondResponse(true);
    }, 4500);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(firstResponseTimer);
      clearTimeout(secondResponseTimer);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#92caa2]/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-24 w-96 h-96 bg-[#92caa2]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#92caa2]/20 text-[#92caa2] font-medium text-sm">
              <span>🧠 Assistente Clínico Inteligente</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Seu <span className="text-[#92caa2]">PARCEIRO</span> na Prática Clínica
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Discuta casos clínicos com IA avançada e receba recomendações baseadas em evidências em tempo real. 
              <span className="font-semibold text-[#92caa2]"> Seu colega de plantão disponível 24/7.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-[#92caa2] hover:bg-[#7ab18a] text-background font-medium"
                onClick={() => window.open('https://checkout.hotmart.com', '_blank')}
              >
                <Brain className="mr-2 h-5 w-5" />
                Começar Agora
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#92caa2] hover:bg-[#92caa2]/10 text-[#92caa2]"
                onClick={() => {
                  const element = document.getElementById('como-funciona');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Saber Mais
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start mt-8 space-x-6">
              <div className="flex items-center text-sm">
                <Check className="text-[#92caa2] mr-2 h-4 w-4" />
                <span>Teste Grátis 1 dia</span>
              </div>
              <div className="flex items-center text-sm">
                <Check className="text-[#92caa2] mr-2 h-4 w-4" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="relative p-3 bg-[#121212] rounded-[40px] shadow-xl border-4 border-[#2a2a2a]">
                <div className="bg-[#075E54] text-white p-3 rounded-t-2xl flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <div className="font-medium">PrescrevaME</div>
                    <div className="text-xs opacity-80">online</div>
                  </div>
                </div>
                
                <div className="bg-[#0B141A] h-[500px] overflow-y-auto p-3 flex flex-col space-y-3 bg-[url('/whatsapp-bg.png')] bg-opacity-30">
                  <WhatsAppMessage
                    text="Olá, Doutor! Como posso ajudar com seu caso clínico hoje?"
                    sender="bot"
                    time="09:30"
                  />
                  
                  <WhatsAppMessage
                    text="Paciente com dor torácica, preciso discutir o caso"
                    sender="user"
                    time="09:31"
                  />
                  
                  {isTyping && (
                    <div className="flex self-start bg-[#202C33] text-white rounded-lg px-3 py-2 max-w-[70%]">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                      </div>
                    </div>
                  )}
                  
                  {showFirstResponse && (
                    <WhatsAppMessage
                      text="Claro! Por favor, me conte mais sobre o caso. Qual a idade do paciente e as características da dor?"
                      sender="bot"
                      time="09:32"
                      animate={true}
                    />
                  )}
                  
                  {showSecondResponse && (
                    <>
                      <WhatsAppMessage
                        text="Homem, 55 anos, dor retroesternal há 2 horas, com irradiação para MSE e sudorese"
                        sender="user"
                        time="09:33"
                      />
                      <WhatsAppMessage
                        text="Baseado nos sintomas apresentados, devemos considerar SCA como principal hipótese. Recomendo:"
                        sender="bot"
                        time="09:33"
                        animate={true}
                      />
                      <WhatsAppMessage
                        text="1️⃣ ECG 12 derivações imediato\n2️⃣ Troponina e outros marcadores\n3️⃣ AAS 200mg VO\n4️⃣ Monitorização contínua\n\nGostaria de discutir os diagnósticos diferenciais?"
                        sender="bot"
                        time="09:33"
                        animate={true}
                      />
                    </>
                  )}
                </div>
                
                <div className="bg-[#1F2C34] p-2 rounded-b-2xl flex items-center">
                  <input 
                    type="text" 
                    placeholder="Digite uma mensagem" 
                    className="bg-[#2A3942] text-white rounded-full px-4 py-2 text-sm flex-1 outline-none"
                    readOnly
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#92caa2]/30 rounded-full blur-xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#92caa2]/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}