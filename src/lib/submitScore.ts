import { getDefaultUsername, getDeviceId } from "./deviceId";
import { GameSlug } from "./utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function submitScore(
  gameSlug: GameSlug,
  payload: {
    user_id?: string;
    username?: string;
    score: number;
    metadata?: any;
  }
) {
  const finalPayload = {
    user_id: payload.user_id ?? getDeviceId(),
    username: payload.username ?? getDefaultUsername(),
    score: payload.score,
    metadata: payload.metadata ?? {},
  };

  const res = await fetch(`/api/leaderboard/${encodeURIComponent(gameSlug)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(finalPayload),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.error || "failed to submit score");
  return json;
}
