import { createServerFn } from "@tanstack/react-start";

const PLAYER_TAG = "%23GJPRULP9"; // # encoded as %23

export type ClashStats = {
  name: string;
  trophies: number;
  bestTrophies: number;
  wins: number;
  battleCount: number;
  arenaName: string;
  favouriteCard: string | null;
};

export const getClashStats = createServerFn({ method: "GET" }).handler(
  async (): Promise<ClashStats | null> => {
    const apiKey = process.env.CLASH_ROYALE_API_KEY;
    if (!apiKey) return null;

    try {
      const res = await fetch(
        `https://api.clashroyale.com/v1/players/${PLAYER_TAG}`,
        { headers: { Authorization: `Bearer ${apiKey}` } }
      );
      if (!res.ok) return null;

      const d = await res.json();
      return {
        name: d.name,
        trophies: d.trophies,
        bestTrophies: d.bestTrophies,
        wins: d.wins,
        battleCount: d.battleCount,
        arenaName: d.arena?.name ?? "Unknown",
        favouriteCard: d.currentFavouriteCard?.name ?? null,
      };
    } catch {
      return null;
    }
  }
);
