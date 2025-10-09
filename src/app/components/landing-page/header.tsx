import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

export const LPHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Brain className="size-8 text-primary" />
          <span className="text-xl font-semibold">Mente Viva</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#sobre"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sobre
          </a>
          <a
            href="#jogos"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Jogos
          </a>
          <a
            href="#depoimentos"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Depoimentos
          </a>
          <a
            href="#contato"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contato
          </a>
        </nav>

        <Button>JOGAR</Button>
      </div>
    </header>
  );
};
