import { MemoryGame } from "@/components/jogos/jogo-memoria";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Leaderboard from "@/components/Leaderboard";

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
      <div className="flex-1 flex flex-col items-center justify-center">
        <MemoryGame />
        <Leaderboard
          gameSlug="memory-game"
          limit={10}
          refreshInterval={15000}
        />
      </div>
    </main>
  );
}
