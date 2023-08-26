"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export function PokemonGrid() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <h3 className="text 2xl py-6 text-center">Search for a Pokemon</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="pokemmonName">Pokemon Name</Label>
        <Input
          type="text"
          value={searchText}
          autoComplete="off"
          id="pokemonName"
          placeholder="Pikachu, Bulbasaur, Jigglypuff, etc."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </>
  );
}
