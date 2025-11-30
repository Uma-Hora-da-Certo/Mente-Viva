"use client";
import React, { useEffect, useState } from "react";

type Row = {
  rank: number;
  user_id: string | null;
  username: string | null;
  score: number;
  achieved_at: string | null;
};

export default function Leaderboard({
  gameSlug,
  reverse = false,
  limit = 10,
  refreshInterval = 0,
}: {
  gameSlug: string;
  reverse?: boolean;
  limit?: number;
  refreshInterval?: number;
}) {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `/api/leaderboard/${encodeURIComponent(
          gameSlug
        )}?limit=${limit}&reverse=${reverse}`
      );
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "failed to load leaderboard");
      setRows(json.leaderboard ?? []);
    } catch (err: unknown) {
      setError((err as Error).message ?? String(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    if (refreshInterval && refreshInterval > 0) {
      const iv = setInterval(load, refreshInterval);
      return () => clearInterval(iv);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameSlug, limit]);

  return (
    <div className="leaderboard card" style={{ padding: 12 }}>
      <h3 className="text-2xl">Ranking</h3>
      {loading && <div>Carregando…</div>}
      {error && (
        <div style={{ color: "red" }}>
          Ocorreu um erro ao carregar o ranking
        </div>
      )}
      {!loading && rows.length === 0 && (
        <div>Nenhum score ainda — seja o primeiro!</div>
      )}
      {!error && (
        <ol>
          {rows.map((r, index) => (
            <li key={`${r.user_id}-${r.rank}-${r.score}`}>
              <strong>{index + 1 + "° - " + (r.username ?? "Anon")}</strong> —{" "}
              {r.score} pontos
              <div style={{ fontSize: 12, color: "#666" }}>
                {r.achieved_at ? new Date(r.achieved_at).toLocaleString() : ""}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
