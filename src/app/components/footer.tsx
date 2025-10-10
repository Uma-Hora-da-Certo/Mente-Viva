import { Brain } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="size-6 text-primary" />
              <span className="text-lg font-semibold">Mente Viva</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Plataforma digital com jogos interativos para estimular a mente da terceira idade.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Jogos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/jogos/memoria" className="hover:text-foreground">
                  Jogo da Memória
                </a>
              </li>
              <li>
                <a href="/jogos/cacapalavras" className="hover:text-foreground">
                  Caça-Palavras
                </a>
              </li>
              <li>
                <a href="/jogos/quiz" className="hover:text-foreground">
                  Quiz Cultural
                </a>
              </li>
              <li>
                <a href="/jogos/puzzle" className="hover:text-foreground">
                  Quebra-Cabeça
                </a>
              </li>
              <li>
                <a href="/jogos/pintura" className="hover:text-foreground">
                  Pintura Digital
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Sobre</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#sobre" className="hover:text-foreground">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-foreground">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#jogos" className="hover:text-foreground">
                  Nossos Jogos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#contato" className="hover:text-foreground">
                  Entre em Contato
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-foreground">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mente Viva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
