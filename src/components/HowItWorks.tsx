import { useState, useEffect, useRef } from 'react';
import { MessageSquare, FileCheck, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

function Step({ number, title, description, icon, isActive = false }: StepProps) {
  return (
    <div className={cn(
      "relative flex flex-col md:flex-row items-start mb-12 transition-all duration-500",
      isActive ? "opacity-100" : "opacity-60"
    )}>
      <div className={cn(
        "flex items-center justify-center w-14 h-14 rounded-full shrink-0 text-white mb-4 md:mb-0 md:mr-6 transition-all duration-500",
        isActive ? "bg-[#92caa2]" : "bg-muted"
      )}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <span className={cn(
            "mr-2 transition-colors duration-500",
            isActive ? "text-[#92caa2]" : "text-muted-foreground"
          )}>
            {number}.
          </span>
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, threshold: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 3) + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section id="como-funciona" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#92caa2]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#92caa2]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            O Prescreva.me é simples e intuitivo. Em apenas 3 passos você tem acesso a todo o conteúdo médico que precisa diretamente pelo WhatsApp.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Step
            number={1}
            title="Inicie pelo WhatsApp"
            description="Comece uma conversa com o Prescreva.me através do WhatsApp. Não é necessário baixar nenhum aplicativo adicional."
            icon={<MessageSquare size={24} />}
            isActive={activeStep === 1}
          />
          
          <Step
            number={2}
            title="Escolha sua guia"
            description="Selecione entre 9+ guias médicas disponíveis, desde prescrições até cálculos médicos e doses pediátricas."
            icon={<FileCheck size={24} />}
            isActive={activeStep === 2}
          />
          
          <Step
            number={3}
            title="Solucione com facilidade"
            description="Obtenha prescrições prontas, cálculos precisos e informações médicas relevantes em segundos, tudo no seu WhatsApp."
            icon={<CheckCircle size={24} />}
            isActive={activeStep === 3}
          />
        </div>
      </div>
    </section>
  );
}