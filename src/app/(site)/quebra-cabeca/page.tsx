import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { SlidingPuzzle } from "@/components/quebra-cabeca"

export default function PuzzlePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <Button asChild variant="ghost" size="lg">
          <Link href="/jogos" className="gap-2">
            <ArrowLeft className="h-5 w-5" />
            Voltar aos Jogos
          </Link>
        </Button>
        <SlidingPuzzle />
      </div>
    </main>
  )
}
