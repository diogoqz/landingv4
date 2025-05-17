import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, ShieldCheck, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { useToast } from '@/hooks/use-toast';

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  const { toast } = useToast();
  
  const handleSubscribe = () => {
    // Here you would implement the checkout logic
    window.open('https://checkout.hotmart.com', '_blank');
    
    toast({
      title: "Redirecionando para o checkout",
      description: "Você será redirecionado para completar sua assinatura",
    });
  };
  
  return (
    <section id="planos" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-[#92caa2]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#92caa2]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#92caa2]/20 text-[#92caa2] font-medium text-sm mb-4">
            <span>Planos e Preços</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Invista em sua prática médica</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acesso completo a todas as funcionalidades do Prescreva.me com nosso plano exclusivo.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div 
            className={cn(
              "bg-card/70 backdrop-blur-md border-2 border-[#92caa2]/30 rounded-2xl overflow-hidden shadow-xl relative transition-all duration-700",
              isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          >
            {/* Popular badge */}
            <div className="absolute top-6 right-6">
              <div className="bg-[#92caa2] text-background text-xs font-bold px-3 py-1 rounded-full">
                RECOMENDADO
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Plano Anual</h3>
              <div className="flex items-end mb-6">
                <span className="text-5xl font-bold">R$427</span>
                <span className="text-muted-foreground ml-2 mb-1">/ano</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="text-[#92caa2] shrink-0 mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Acesso a todas as 9+ guias médicas</p>
                    <p className="text-sm text-muted-foreground">Prescrições, doses, antibióticos e mais</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-[#92caa2] shrink-0 mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Uso ilimitado 24/7</p>
                    <p className="text-sm text-muted-foreground">Sem restrições de uso ou consultas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-[#92caa2] shrink-0 mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Atualizações constantes</p>
                    <p className="text-sm text-muted-foreground">Conteúdo sempre revisado e atualizado</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-[#92caa2] shrink-0 mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Suporte prioritário</p>
                    <p className="text-sm text-muted-foreground">Atendimento direto para dúvidas</p>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={handleSubscribe}
                size="lg" 
                className="w-full bg-[#92caa2] hover:bg-[#7ab18a] text-background font-medium mb-4"
              >
                Assinar Agora
              </Button>
              
              <div className="flex justify-center space-x-6 mt-6">
                <div className="flex items-center text-sm">
                  <ShieldCheck className="text-[#92caa2] mr-2 h-4 w-4" />
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="text-[#92caa2] mr-2 h-4 w-4" />
                  <span>1 dia grátis para testar</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#92caa2]/10 rounded-full blur-xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#92caa2]/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}