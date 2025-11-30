import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseServer";

export async function GET(
  req: NextRequest,
  context: { params: { slug: string } | Promise<{ slug: string }> }
) {
  const params =
    "then" in context.params ? await context.params : context.params;
  const slug = params.slug;
  const limit = Number(req.nextUrl.searchParams.get("limit") ?? 10);
  const reverse = req.nextUrl.searchParams.get("reverse") === "true";

  try {
    const { data, error } = await supabaseAdmin.rpc("get_leaderboard", {
      p_game_slug: slug,
      p_limit: limit,
      p_reverse: reverse,
    });

    if (error) throw error;

    return NextResponse.json({ leaderboard: data ?? [] });
  } catch (err: unknown) {
    console.error(err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}
export async function POST(
  req: NextRequest,
  context: { params: { slug: string } | Promise<{ slug: string }> }
) {
  const params =
    "then" in context.params ? await context.params : context.params;
  const slug = params.slug;
  const body = await req.json();

  if (!body || typeof body.score !== "number") {
    return NextResponse.json(
      { error: "missing score in body" },
      { status: 400 }
    );
  }

  try {
    const { data: gameRow, error: _gameErr } = await supabaseAdmin
      .from("games")
      .select("id")
      .eq("slug", slug)
      .single();

    let gameId: string;

    if (!gameRow) {
      const { data: created, error: createErr } = await supabaseAdmin
        .from("games")
        .insert({ slug, name: slug })
        .select("id")
        .single();

      if (createErr) throw createErr;
      gameId = created.id;
    } else {
      gameId = gameRow.id;
    }

    const { error: insertErr } = await supabaseAdmin.from("scores").insert({
      game_id: gameId,
      user_id: body.user_id ?? null,
      username: body.username ?? null,
      score: body.score,
      metadata: body.metadata ?? {},
    });

    if (insertErr) throw insertErr;

    const { data, error: lbErr } = await supabaseAdmin.rpc("get_leaderboard", {
      p_game_slug: slug,
      p_limit: 10,
    });

    if (lbErr) throw lbErr;

    return NextResponse.json(
      { ok: true, leaderboard: data ?? [] },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error(err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}
