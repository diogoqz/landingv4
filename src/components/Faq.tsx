import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

export default function Faq() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  
  const faqItems = [
    {
      question: "O que é o Prescreva.me?",
      answer: "O Prescreva.me é uma ferramenta médica acessível via WhatsApp que oferece acesso rápido a protocolos médicos, prescrições prontas, cálculos de doses, interpretação de exames e muito mais. Foi desenvolvido para simplificar a prática médica, especialmente durante plantões e emergências, fornecendo informações confiáveis e atualizadas na palma da sua mão."
    },
    {
      question: "O conteúdo é confiável?",
      answer: "Sim. Todo o conteúdo do Prescreva.me é baseado em evidências científicas atualizadas e constantemente revisado por uma equipe de especialistas de diferentes áreas da medicina. Utilizamos diretrizes nacionais e internacionais para garantir a qualidade e confiabilidade das informações fornecidas."
    },
    {
      question: "Como funciona o período de teste?",
      answer: "Oferecemos 1 dia gratuito para que você possa testar todas as funcionalidades do Prescreva.me sem compromisso. Durante este período, você terá acesso completo a todas as guias e recursos disponíveis na plataforma. Para iniciar seu teste, basta clicar no botão 'Testar Agora' e seguir as instruções."
    },
    {
      question: "Como faço para cancelar?",
      answer: "O cancelamento pode ser feito a qualquer momento diretamente pela plataforma Hotmart, onde você realizou a assinatura. Caso tenha alguma dificuldade, nossa equipe de suporte está disponível para auxiliá-lo no processo. Lembramos que oferecemos garantia de 7 dias, então se você cancelar dentro deste período, receberá o reembolso integral."
    },
    {
      question: "Em quais casos o Prescreva.me pode me ajudar?",
      answer: "O Prescreva.me é útil em diversas situações clínicas, como: consultas de emergência quando você precisa de acesso rápido a protocolos; durante plantões para verificar doses de medicamentos ou interpretar exames; no atendimento pediátrico para calcular doses adequadas; na prescrição de antibióticos com ajustes para função renal; e no uso de scores e escalas para avaliação clínica. É um companheiro versátil para profissionais de saúde em qualquer ambiente de trabalho."
    }
  ];
  
  return (
    <section id="faq" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#92caa2]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#92caa2]/20 text-[#92caa2] font-medium text-sm mb-4">
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas Comuns</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais frequentes sobre o Prescreva.me.
          </p>
        </div>
        
        <div 
          className={cn(
            "max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border border-muted/30 rounded-xl p-6 shadow-lg transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-[#92caa2] font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}