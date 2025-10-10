import { MemoryGame } from "@/components/jogo-memoria"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <MemoryGame />
    </main>
  )
}
