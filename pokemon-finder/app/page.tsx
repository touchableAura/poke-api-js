import { PokemonGrid } from "@/components/pokemon-grid";
import { PokemonCard } from "@/components/pokemon-card";
import Image from "next/image";
import React from "react";

export default function Home() {
  // load in data

  // text input that filters content

  return (
    <>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <PokemonGrid />
      </div>
    </>
  );
}
