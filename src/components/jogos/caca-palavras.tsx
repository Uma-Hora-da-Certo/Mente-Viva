"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Position = { row: number; col: number };
type Direction = "horizontal" | "vertical" | "diagonal" | "diagonal-reverse";

type WordPlacement = {
  word: string;
  start: Position;
  direction: Direction;
  found: boolean;
};

const WORD_LISTS = {
  Animais: [
    "GATO",
    "CACHORRO",
    "ELEFANTE",
    "LEAO",
    "TIGRE",
    "URSO",
    "COELHO",
    "PATO",
  ],
  Frutas: [
    "BANANA",
    "LARANJA",
    "UVA",
    "MELANCIA",
    "ABACAXI",
    "MORANGO",
    "PERA",
    "MACA",
  ],
  Cores: [
    "AZUL",
    "VERMELHO",
    "VERDE",
    "AMARELO",
    "ROXO",
    "ROSA",
    "PRETO",
    "BRANCO",
  ],
};

const GRID_SIZE = 15;

export function WordSearchGame() {
  const [grid, setGrid] = useState<string[][]>([]);
  const [words, setWords] = useState<WordPlacement[]>([]);
  const [selectedCells, setSelectedCells] = useState<Position[]>([]);
  const [foundWords, setFoundWords] = useState<Set<string>>(new Set());
  const [isSelecting, setIsSelecting] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const generateGame = () => {
    const newGrid: string[][] = Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill(""));
    const newWords: WordPlacement[] = [];
    const allWords = Object.values(WORD_LISTS).flat();
    const selectedWords = allWords.sort(() => Math.random() - 0.5).slice(0, 12);

    selectedWords.forEach((word) => {
      let placed = false;
      let attempts = 0;

      while (!placed && attempts < 100) {
        const direction: Direction = [
          "horizontal",
          "vertical",
          "diagonal",
          "diagonal-reverse",
        ][Math.floor(Math.random() * 4)] as Direction;

        const maxRow =
          direction === "vertical" || direction.includes("diagonal")
            ? GRID_SIZE - word.length
            : GRID_SIZE;
        const maxCol =
          direction === "horizontal" || direction.includes("diagonal")
            ? GRID_SIZE - word.length
            : GRID_SIZE;

        const row = Math.floor(Math.random() * maxRow);
        const col = Math.floor(Math.random() * maxCol);

        if (canPlaceWord(newGrid, word, row, col, direction)) {
          placeWord(newGrid, word, row, col, direction);
          newWords.push({ word, start: { row, col }, direction, found: false });
          placed = true;
        }
        attempts++;
      }
    });

    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        if (newGrid[i][j] === "") {
          newGrid[i][j] = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
          );
        }
      }
    }

    setGrid(newGrid);
    setWords(newWords);
    setFoundWords(new Set());
    setSelectedCells([]);
    setGameWon(false);
  };

  useEffect(() => {
    generateGame();
  }, []);

  const canPlaceWord = (
    grid: string[][],
    word: string,
    row: number,
    col: number,
    direction: Direction
  ): boolean => {
    for (let i = 0; i < word.length; i++) {
      let r = row;
      let c = col;

      if (direction === "horizontal") c += i;
      else if (direction === "vertical") r += i;
      else if (direction === "diagonal") {
        r += i;
        c += i;
      } else if (direction === "diagonal-reverse") {
        r += i;
        c -= i;
      }

      if (r < 0 || r >= GRID_SIZE || c < 0 || c >= GRID_SIZE) return false;
      if (grid[r][c] !== "" && grid[r][c] !== word[i]) return false;
    }
    return true;
  };

  const placeWord = (
    grid: string[][],
    word: string,
    row: number,
    col: number,
    direction: Direction
  ) => {
    for (let i = 0; i < word.length; i++) {
      let r = row;
      let c = col;

      if (direction === "horizontal") c += i;
      else if (direction === "vertical") r += i;
      else if (direction === "diagonal") {
        r += i;
        c += i;
      } else if (direction === "diagonal-reverse") {
        r += i;
        c -= i;
      }

      grid[r][c] = word[i];
    }
  };

  const handleCellMouseDown = (row: number, col: number) => {
    setIsSelecting(true);
    setSelectedCells([{ row, col }]);
  };

  const handleCellMouseEnter = (row: number, col: number) => {
    if (!isSelecting) return;

    const lastCell = selectedCells[selectedCells.length - 1];
    if (!lastCell) return;

    const rowDiff = row - selectedCells[0].row;
    const colDiff = col - selectedCells[0].col;

    if (
      rowDiff === 0 ||
      colDiff === 0 ||
      Math.abs(rowDiff) === Math.abs(colDiff)
    ) {
      setSelectedCells((prev) => [...prev, { row, col }]);
    }
  };

  const handleCellMouseUp = () => {
    setIsSelecting(false);
    checkSelectedWord();
  };

  const checkSelectedWord = () => {
    if (selectedCells.length < 2) {
      setSelectedCells([]);
      return;
    }

    const selectedWord = selectedCells
      .map((pos) => grid[pos.row][pos.col])
      .join("");
    const reversedWord = selectedWord.split("").reverse().join("");

    const foundWord = words.find(
      (w) =>
        (w.word === selectedWord || w.word === reversedWord) &&
        !foundWords.has(w.word)
    );

    if (foundWord) {
      const newFoundWords = new Set(foundWords);
      newFoundWords.add(foundWord.word);
      setFoundWords(newFoundWords);

      if (newFoundWords.size === words.length) {
        setGameWon(true);
      }
    }

    setSelectedCells([]);
  };

  const isCellSelected = (row: number, col: number) => {
    return selectedCells.some((pos) => pos.row === row && pos.col === col);
  };

  const isCellInFoundWord = (row: number, col: number) => {
    return words.some((word) => {
      if (!foundWords.has(word.word)) return false;

      for (let i = 0; i < word.word.length; i++) {
        let r = word.start.row;
        let c = word.start.col;

        if (word.direction === "horizontal") c += i;
        else if (word.direction === "vertical") r += i;
        else if (word.direction === "diagonal") {
          r += i;
          c += i;
        } else if (word.direction === "diagonal-reverse") {
          r += i;
          c -= i;
        }

        if (r === row && c === col) return true;
      }
      return false;
    });
  };

  if (gameWon) {
    return (
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Parabéns!</h2>
          <p className="text-2xl">Você encontrou todas as palavras!</p>
        </div>
        <Button onClick={generateGame} size="lg" className="text-xl px-8 py-6">
          Novo Jogo
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          Palavras encontradas: {foundWords.size}/{words.length}
        </h2>
        <Button onClick={generateGame} variant="outline">
          Novo Jogo
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-3 p-4">
          <div
            className="grid gap-1 select-none"
            style={{
              gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
            }}
            onMouseLeave={() => setIsSelecting(false)}
          >
            {grid.map((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`
                    aspect-square flex items-center justify-center
                    text-sm md:text-base font-bold cursor-pointer
                    border border-border rounded transition-colors
                    ${
                      isCellSelected(rowIndex, colIndex)
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }
                    ${
                      isCellInFoundWord(rowIndex, colIndex)
                        ? "bg-secondary text-secondary-foreground"
                        : ""
                    }
                    ${
                      !isCellSelected(rowIndex, colIndex) &&
                      !isCellInFoundWord(rowIndex, colIndex)
                        ? "hover:bg-muted"
                        : ""
                    }
                  `}
                  onMouseDown={() => handleCellMouseDown(rowIndex, colIndex)}
                  onMouseEnter={() => handleCellMouseEnter(rowIndex, colIndex)}
                  onMouseUp={handleCellMouseUp}
                >
                  {cell}
                </div>
              ))
            )}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Palavras</h3>
          <div className="space-y-2">
            {words.map((word, index) => (
              <div
                key={index}
                className={`
                  text-lg p-2 rounded
                  ${
                    foundWords.has(word.word)
                      ? "line-through text-muted-foreground bg-muted"
                      : "font-bold"
                  }
                `}
              >
                {word.word}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
