import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { DrawingCanvas } from "@/components/jogos/pintura";

export default function PinturaPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl mx-auto space-y-6">
        <Button asChild variant="outline" size="lg">
          <Link href="/jogos" className="gap-2">
            <ArrowLeft className="h-5 w-5" />
            Voltar aos Jogos
          </Link>
        </Button>
        <DrawingCanvas />
      </div>
    </main>
  );
}
