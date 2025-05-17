import { useRef } from 'react';
import { Brain, FileText, Stethoscope, Microscope, FlaskRound as Flask, BookOpen, MessageCircle, Clock, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, threshold: 0.1 });
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-card/50 backdrop-blur-sm border border-muted/30 rounded-xl p-6 shadow-lg hover:shadow-[#92caa2]/5 transition-all duration-500",
        "hover:border-[#92caa2]/30 hover:translate-y-[-5px]",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-[#92caa2]/20 rounded-lg mb-4">
        <div className="text-[#92caa2]">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  
  return (
    <>
      <section id="funcionalidades" ref={sectionRef} className="py-20 relative overflow-hidden">
        {/* Background gradient elements */}
        <div className="absolute -top-40 left-0 w-96 h-96 bg-[#92caa2]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-[#92caa2]/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-[#92caa2]/20 text-[#92caa2] font-medium text-sm mb-4">
              <span>Assistente Clínico IA</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Funcionalidades e Benefícios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Seu parceiro inteligente para discussão de casos clínicos, disponível 24/7
              para apoiar suas decisões com recomendações baseadas em evidências.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Brain size={24} />}
              title="Análise Inteligente"
              description="IA avançada analisa casos clínicos completos e fornece recomendações personalizadas em tempo real."
              delay={100}
            />
            <FeatureCard 
              icon={<FileText size={24} />}
              title="Sugestões Baseadas em Evidências"
              description="Receba recomendações práticas e cientificamente embasadas para condução do caso."
              delay={200}
            />
            <FeatureCard 
              icon={<Stethoscope size={24} />}
              title="Diagnósticos Diferenciais"
              description="Explore possíveis diagnósticos alternativos para considerar em sua avaliação clínica."
              delay={300}
            />
            <FeatureCard 
              icon={<Microscope size={24} />}
              title="Exames Complementares"
              description="Sugestões de exames relevantes baseados no quadro clínico apresentado."
              delay={400}
            />
            <FeatureCard 
              icon={<Flask size={24} />}
              title="Opções Terapêuticas"
              description="Recomendações de tratamentos adequados ao caso, respeitando protocolos atuais."
              delay={500}
            />
            <FeatureCard 
              icon={<BookOpen size={24} />}
              title="Raciocínio Clínico"
              description="Apoio ao desenvolvimento do raciocínio clínico com explicações detalhadas."
              delay={600}
            />
            <FeatureCard 
              icon={<MessageCircle size={24} />}
              title="Discussão de Casos"
              description="Compartilhe casos clínicos completos e receba análises detalhadas em tempo real."
              delay={700}
            />
            <FeatureCard 
              icon={<Clock size={24} />}
              title="Disponível 24/7"
              description="Seu parceiro de estudos sempre disponível para discutir casos e auxiliar decisões."
              delay={800}
            />
            <FeatureCard 
              icon={<Shield size={24} />}
              title="Autonomia Profissional"
              description="Recomendações que respeitam sua autonomia e apoiam sua tomada de decisão."
              delay={900}
            />
          </div>
        </div>
      </section>

      {/* Nova seção de features destacadas */}
      <section id="destaques" className="py-20 relative overflow-hidden">
        <div className="absolute -top-40 left-0 w-96 h-96 bg-[#92caa2]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-[#92caa2]/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-[#92caa2]/20 text-[#92caa2] font-medium text-sm mb-4">
              <span>Destaques do Aplicativo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tudo no seu WhatsApp, sem complicação</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Acesse todas estas funcionalidades e muito mais diretamente pelo seu WhatsApp, sem precisar baixar aplicativos adicionais.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<BookOpen size={24} />} 
              title="9+ Guias Médicas" 
              description="Acesse rapidamente protocolos e guias médicos essenciais para sua prática clínica." 
              delay={100} 
            />
            <FeatureCard 
              icon={<FileText size={24} />} 
              title="Prescrições Prontas" 
              description="Modelos de prescrições para as condições mais comuns, economizando tempo e reduzindo erros." 
              delay={200} 
            />
            <FeatureCard 
              icon={<Stethoscope size={24} />} 
              title="Doses Pediátricas" 
              description="Cálculo preciso de doses pediátricas com base no peso, idade e medicamento." 
              delay={300} 
            />
            <FeatureCard 
              icon={<Microscope size={24} />} 
              title="Gasometria" 
              description="Interpretação rápida e precisa de resultados de gasometria arterial e venosa." 
              delay={400} 
            />
            <FeatureCard 
              icon={<Flask size={24} />} 
              title="Antibióticos" 
              description="Guia completo de antibióticos com doses, indicações, contraindicações e ajustes para função renal." 
              delay={500} 
            />
            <FeatureCard 
              icon={<BookOpen size={24} />} 
              title="Escalas/Scores" 
              description="Acesso rápido a escalas como CURB-65, CHA₂DS₂-VASc, HAS-BLED e muitas outras." 
              delay={600} 
            />
            <FeatureCard 
              icon={<Brain size={24} />} 
              title="Cálculos Médicos" 
              description="Calcule clearance de creatinina, IMC, correção de eletrólitos e outros parâmetros essenciais." 
              delay={700} 
            />
            <FeatureCard 
              icon={<MessageCircle size={24} />} 
              title="Interface via WhatsApp" 
              description="Utilize o aplicativo que você já conhece, sem curva de aprendizado ou instalações adicionais." 
              delay={800} 
            />
            <FeatureCard 
              icon={<Clock size={24} />} 
              title="Acesso 24/7" 
              description="Disponível 24 horas por dia, 7 dias por semana, para consultas rápidas durante plantões e emergências." 
              delay={900} 
            />
            <FeatureCard 
              icon={<Shield size={24} />} 
              title="Conteúdo Confiável" 
              description="Informações médicas atualizadas e baseadas em evidências, revisadas por especialistas." 
              delay={1000} 
            />
          </div>
        </div>
      </section>
    </>
  );
}