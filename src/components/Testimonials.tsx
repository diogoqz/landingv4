import { useRef } from 'react';
import { WhatsAppMessage, WhatsAppNotification } from './WhatsAppUI';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

interface TestimonialProps {
  name: string;
  role: string;
  messages: {
    text: string;
    sender: 'user' | 'bot';
    time: string;
  }[];
  notification?: string;
  index: number;
}

function Testimonial({ name, role, messages, notification, index }: TestimonialProps) {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(testimonialRef, { once: true, threshold: 0.1 });
  
  return (
    <div 
      ref={testimonialRef}
      className={cn(
        "bg-card/50 backdrop-blur-sm border border-muted/30 rounded-xl overflow-hidden shadow-lg transition-all duration-500",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* WhatsApp style header */}
      <div className="bg-[#075E54] text-white p-3 flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs opacity-80">{role}</div>
        </div>
      </div>
      
      {/* Chat area */}
      <div className="bg-[#0B141A] p-3 flex flex-col space-y-3 min-h-[300px] bg-[url('/whatsapp-bg.png')] bg-opacity-30">
        {notification && <WhatsAppNotification text={notification} />}
        
        {messages.map((message, i) => (
          <WhatsAppMessage
            key={i}
            text={message.text}
            sender={message.sender}
            time={message.time}
          />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  
  const testimonials = [
    {
      name: "Dr. Carlos Silva",
      role: "Médico Plantonista",
      notification: "Hoje",
      messages: [
        {
          text: "O Prescreva.me salvou meu plantão noturno. Consegui acessar rapidamente protocolos que precisava sem perder tempo procurando em livros ou apps complicados.",
          sender: "user" as const,
          time: "23:45"
        },
        {
          text: "Que bom que o Prescreva.me te ajudou, Dr. Carlos! Estamos sempre trabalhando para tornar seu trabalho mais eficiente.",
          sender: "bot" as const,
          time: "23:47"
        },
        {
          text: "Vou recomendar para toda minha equipe no hospital. Vale cada centavo!",
          sender: "user" as const,
          time: "23:50"
        }
      ]
    },
    {
      name: "Dra. Mariana Costa",
      role: "Residente de Pediatria",
      messages: [
        {
          text: "O cálculo de doses pediátricas é perfeito! Uso diariamente e tem me ajudado muito no PS infantil.",
          sender: "user" as const,
          time: "14:22"
        },
        {
          text: "Ainda bem que descobri o Prescreva.me no início da residência. Tem sido meu companheiro de plantão.",
          sender: "user" as const,
          time: "14:23"
        },
        {
          text: "Ficamos felizes em ajudar, Dra. Mariana! Nosso objetivo é justamente tornar seu dia a dia mais fácil e seguro.",
          sender: "bot" as const,
          time: "14:25"
        }
      ]
    },
    {
      name: "Dr. Rafael Mendes",
      role: "Clínico Geral",
      notification: "Ontem",
      messages: [
        {
          text: "A interface via WhatsApp é genial! Não preciso alternar entre vários apps durante o atendimento. Fácil, prático e extremamente útil.",
          sender: "user" as const,
          time: "10:15"
        },
        {
          text: "E a função de antibióticos com doses ajustadas para insuficiência renal? Simplesmente incrível! 👏",
          sender: "user" as const,
          time: "10:17"
        },
        {
          text: "Obrigado pelo feedback, Dr. Rafael! Continuamos aprimorando o Prescreva.me com mais funcionalidades.",
          sender: "bot" as const,
          time: "10:20"
        }
      ]
    }
  ];
  
  return (
    <section id="depoimentos" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#92caa2]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#92caa2]/20 text-[#92caa2] font-medium text-sm mb-4">
            <span>Experiências Reais</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos usuários</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Médicos e profissionais de saúde estão transformando sua prática diária com o Prescreva.me.
            Veja o que eles têm a dizer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              messages={testimonial.messages}
              notification={testimonial.notification}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}