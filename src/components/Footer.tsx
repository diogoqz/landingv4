import { MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background/95 border-t border-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-2xl font-bold text-primary flex items-center">
              <span className="text-[#92caa2] mr-1">Prescreva</span>.me
            </a>
            <p className="text-muted-foreground mt-4 max-w-md">
              Simplifique sua prática médica com o Prescreva.me. Acesse guias médicas, faça prescrições,
              calcule doses e muito mais diretamente pelo WhatsApp.
            </p>
            <div className="mt-6">
              <a 
                href="https://wa.me/message/ABCDEF123456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#92caa2] hover:text-[#7ab18a] transition-colors"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Iniciar conversa no WhatsApp
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#como-funciona" className="text-muted-foreground hover:text-[#92caa2] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#funcionalidades" className="text-muted-foreground hover:text-[#92caa2] transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-muted-foreground hover:text-[#92caa2] transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#planos" className="text-muted-foreground hover:text-[#92caa2] transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-[#92caa2] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#92caa2] transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#92caa2] transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#92caa2] transition-colors">
                  Aviso de Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#92caa2] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Prescreva.me. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            O Prescreva.me é uma ferramenta de apoio e não substitui a avaliação médica profissional.
          </p>
        </div>
      </div>
    </footer>
  );
}