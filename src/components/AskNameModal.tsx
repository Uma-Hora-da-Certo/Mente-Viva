"use client";

import { useState } from "react";
import { Link } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AskNameModal({
  onSubmit,
}: {
  onSubmit: (name: string) => void;
}) {
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) return;
    onSubmit(name.trim());
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: 20,
          borderRadius: 8,
          width: "90%",
          maxWidth: 400,
          textAlign: "center",
        }}
      >
        <h3 className="font-semibold">Qual é o seu nome?</h3>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
          style={{
            width: "100%",
            padding: 10,
            fontSize: 16,
            marginTop: 10,
            borderRadius: 5,
            border: "1px solid #ccc",
          }}
        />

        <Button size="lg" className="w-full text-lg md:text-xl py-6">
          Começar
        </Button>
      </form>
    </div>
  );
}
