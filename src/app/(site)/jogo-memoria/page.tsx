import { MemoryGame } from "@/components/jogo-memoria"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function MemoriaPage() {
  return (
    <main className="min-h-screen flex flex-col p-4 md:p-8">
      <div className="mb-6">
        <Button asChild variant="outline" size="lg">
          <Link href="/jogos" className="gap-2">
            <ArrowLeft className="h-5 w-5" />
            Voltar aos Jogos
          </Link>
        </Button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <MemoryGame />
      </div>
    </main>
  )
}
