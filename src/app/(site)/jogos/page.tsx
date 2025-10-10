import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

const games = [
  {
    id: "memoria",
    name: "Jogo da Memória",
    emoji: "🧠",
    description: "Encontre os pares de cartas iguais",
    route: "/jogo-memoria",
  },
  {
    id: "cacapalavras",
    name: "Caça-Palavras",
    emoji: "🔤",
    description: "Encontre palavras escondidas no tabuleiro",
    route: "/caca-palavras",
  },
  {
    id: "pintura",
    name: "Pintura Digital",
    emoji: "🎨",
    description: "Solte sua criatividade com cores",
    route: "/pintura",
  },
  {
    id: "quiz",
    name: "Quiz Nostálgico",
    emoji: "❓",
    description: "Teste seus conhecimentos sobre o passado",
    route: "/quiz",
  },
  {
    id: "puzzle",
    name: "Quebra-Cabeça",
    emoji: "🧩",
    description: "Monte a imagem completa",
    route: "/quebra-cabeca",
  },
]

export default function JogosPage() {
  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-start">
          <Button asChild variant="outline" size="lg" className="gap-2 text-lg bg-transparent">
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
              Voltar para Início
            </Link>
          </Button>
        </div>

        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">Mente Viva 💭</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">Escolha um dos jogos e divirta-se!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card
              key={game.id}
              className="transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50"
            >
              <CardHeader className="text-center space-y-4 p-6">
                <div className="text-6xl md:text-7xl">{game.emoji}</div>
                <CardTitle className="text-2xl md:text-3xl">{game.name}</CardTitle>
                <CardDescription className="text-lg md:text-xl">{game.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <Button asChild size="lg" className="w-full text-lg md:text-xl py-6">
                  <Link href={game.route}>Jogar</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
