"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RotateCcw, Trophy } from "lucide-react";
import { submitScore } from "@/lib/submitScore";

type CardType = {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const emojis = ["🎮", "🎯", "🎨", "🎭", "🎪", "🎸", "🎺", "🎹"];

export function MemoryGame() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsChecking(true);
      const [first, second] = flippedCards;
      const firstCard = cards.find((c) => c.id === first);
      const secondCard = cards.find((c) => c.id === second);

      if (firstCard?.emoji === secondCard?.emoji) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === first || card.id === second
                ? { ...card, isMatched: true }
                : card
            )
          );
          setMatches((prev) => prev + 1);
          setFlippedCards([]);
          setIsChecking(false);
        }, 600);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === first || card.id === second
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000);
      }
      setMoves((prev) => prev + 1);
    }
  }, [flippedCards, cards]);

  const initializeGame = () => {
    const shuffledEmojis = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledEmojis);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setIsChecking(false);
  };

  const handleCardClick = (id: number) => {
    if (isChecking || flippedCards.length === 2) return;
    const card = cards.find((c) => c.id === id);
    if (card?.isFlipped || card?.isMatched) return;

    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isFlipped: true } : c))
    );
    setFlippedCards((prev) => [...prev, id]);
  };

  const isGameComplete = matches === emojis.length;

  useEffect(() => {
    const updateScore = async () => {
      try {
        const result = await submitScore("memory-game", { score: moves });
        console.log("leaderboard updated", result.leaderboard);
      } catch (err) {
        console.error("Não foi possível enviar o score", err);
      }
    };

    if (isGameComplete) updateScore();
  }, [isGameComplete, moves]);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Jogo da Memória
        </h1>
        <p className="text-muted-foreground">
          Encontre todos os pares de cartas
        </p>
      </div>

      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Movimentos</p>
              <p className="text-2xl font-bold text-primary">{moves}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Pares</p>
              <p className="text-2xl font-bold text-secondary">
                {matches}/{emojis.length}
              </p>
            </div>
          </div>
          <Button onClick={initializeGame} variant="outline" size="icon">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {isGameComplete && (
          <div className="bg-primary/10 border-2 border-primary rounded-lg p-4 text-center space-y-2">
            <Trophy className="h-8 w-8 text-primary mx-auto" />
            <p className="font-bold text-lg text-primary">Parabéns!</p>
            <p className="text-sm text-muted-foreground">
              Você completou o jogo em {moves} movimentos!
            </p>
          </div>
        )}

        <div className="grid grid-cols-4 gap-3 md:gap-4">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              disabled={isChecking || card.isMatched}
              className="aspect-square relative"
              style={{ perspective: "1000px" }}
            >
              <div
                className={`w-full h-full transition-transform duration-500 relative ${
                  card.isFlipped || card.isMatched
                    ? "[transform:rotateY(180deg)]"
                    : ""
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Card Back */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary-foreground/20" />
                </div>

                {/* Card Front */}
                <div
                  className={`absolute inset-0 rounded-lg flex items-center justify-center shadow-lg ${
                    card.isMatched
                      ? "bg-gradient-to-br from-secondary to-secondary/80"
                      : "bg-gradient-to-br from-accent to-accent/80"
                  }`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <span className="text-4xl md:text-5xl">{card.emoji}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Card>

      <div className="text-center text-sm text-muted-foreground">
        <p>Dificuldade: Médio • 4x4 cartas</p>
      </div>
    </div>
  );
}
