"use client";
import { useEffect, useState } from "react";

export function useUsername() {
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("username");
    if (stored) {
      setUsername(stored);
      setLoading(false);
    } else {
      setUsername(null);
      setLoading(false);
    }
  }, []);

  function saveUsername(name: string) {
    localStorage.setItem("username", name);
    setUsername(name);
  }

  return { username, loading, saveUsername };
}
