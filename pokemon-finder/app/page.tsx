import { PokemonGrid } from "@/components/pokemon-grid";
import { PokemonCard } from "@/components/pokemon-card";
import Image from "next/image";
import React from "react";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {
  // load in data
  const pokemonList = await getPokemonList();

  // text input that filters content

  return (
    <>
        <PokemonGrid pokemonList={pokemonList} />
    </>
  );
}
