"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const GRID_SIZE = 4
const TILE_COUNT = GRID_SIZE * GRID_SIZE - 1

export function SlidingPuzzle() {
  const [tiles, setTiles] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [isWon, setIsWon] = useState(false)

  const initializePuzzle = () => {
    const newTiles = Array.from({ length: TILE_COUNT }, (_, i) => i + 1)
    newTiles.push(0) // 0 represents empty space

    for (let i = 0; i < 1000; i++) {
      const emptyIndex = newTiles.indexOf(0)
      const validMoves = getValidMoves(emptyIndex)
      const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)]
      ;[newTiles[emptyIndex], newTiles[randomMove]] = [newTiles[randomMove], newTiles[emptyIndex]]
    }

    setTiles(newTiles)
    setMoves(0)
    setIsWon(false)
  }

  useEffect(() => {
    initializePuzzle()
  }, [])

  const getValidMoves = (emptyIndex: number): number[] => {
    const moves: number[] = []
    const row = Math.floor(emptyIndex / GRID_SIZE)
    const col = emptyIndex % GRID_SIZE

    if (row > 0) moves.push(emptyIndex - GRID_SIZE) // Up
    if (row < GRID_SIZE - 1) moves.push(emptyIndex + GRID_SIZE) // Down
    if (col > 0) moves.push(emptyIndex - 1) // Left
    if (col < GRID_SIZE - 1) moves.push(emptyIndex + 1) // Right

    return moves
  }

  const handleTileClick = (index: number) => {
    if (isWon) return

    const emptyIndex = tiles.indexOf(0)
    const validMoves = getValidMoves(emptyIndex)

    if (validMoves.includes(index)) {
      const newTiles = [...tiles]
      ;[newTiles[emptyIndex], newTiles[index]] = [newTiles[index], newTiles[emptyIndex]]
      setTiles(newTiles)
      setMoves(moves + 1)

      const isSolved = newTiles.every((tile, i) => (i === TILE_COUNT ? tile === 0 : tile === i + 1))
      if (isSolved) {
        setIsWon(true)
      }
    }
  }

  if (isWon) {
    return (
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Parabéns!</h2>
          <p className="text-2xl">Você completou o quebra-cabeça!</p>
          <p className="text-xl text-muted-foreground">Movimentos: {moves}</p>
        </div>
        <Button onClick={initializePuzzle} size="lg" className="text-xl px-8 py-6">
          Novo Jogo
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Movimentos: {moves}</h2>
        <Button onClick={initializePuzzle} variant="outline">
          Reiniciar
        </Button>
      </div>

      <Card className="p-4">
        <div
          className="grid gap-2 mx-auto"
          style={{
            gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
            maxWidth: "500px",
          }}
        >
          {tiles.map((tile, index) => (
            <button
              key={index}
              onClick={() => handleTileClick(index)}
              className={`
                aspect-square flex items-center justify-center
                text-3xl font-bold rounded-lg transition-all
                ${
                  tile === 0
                    ? "bg-muted cursor-default"
                    : "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-lg"
                }
              `}
              disabled={tile === 0}
            >
              {tile !== 0 && tile}
            </button>
          ))}
        </div>
      </Card>

      <p className="text-center text-muted-foreground">Clique nas peças adjacentes ao espaço vazio para movê-las</p>
    </div>
  )
}
