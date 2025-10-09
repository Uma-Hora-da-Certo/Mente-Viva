import { Separator } from "@radix-ui/react-separator";
import { Brain } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Brain className="size-6 text-primary" />
              <span className="text-lg font-semibold">Mente Viva</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Mais diversão, memória afiada e bem-estar ao seu dia a dia!
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Jogos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#jogos" className="hover:text-foreground">
                  Jogo da Memória
                </a>
              </li>
              <li>
                <a href="#jogos" className="hover:text-foreground">
                  Caça-Palavras
                </a>
              </li>
              <li>
                <a href="#jogos" className="hover:text-foreground">
                  Colorir Digital
                </a>
              </li>
              <li>
                <a href="#jogos" className="hover:text-foreground">
                  Quiz de Perguntas e Respostas
                </a>
              </li>
              <li>
                <a href="#jogos" className="hover:text-foreground">
                  Quebra-Cabeça Digital (Puzzle)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Nós</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#sobre" className="hover:text-foreground">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-foreground">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contato@menteviva.com.br</li>
              <li>(11) 9999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>© 2025 Mente Viva. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-foreground">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
