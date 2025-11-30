import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { QuizGame } from "@/components/jogos/quiz";
import Leaderboard from "@/components/Leaderboard";
import { GameSlugEnum } from "@/lib/utils";

export default function QuizPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl mx-auto space-y-6">
        <Button asChild variant="outline" size="lg">
          <Link href="/jogos" className="gap-2">
            <ArrowLeft className="h-5 w-5" />
            Voltar aos Jogos
          </Link>
        </Button>
        <QuizGame />
        <Leaderboard
          gameSlug={GameSlugEnum.QUIZ}
          limit={10}
          refreshInterval={15000}
        />
      </div>
    </main>
  );
}
