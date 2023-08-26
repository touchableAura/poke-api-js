"use client";
import { PokemonCard } from "./pokemon-card";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export function PokemonGrid() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <h3>Search For Pokemon</h3>
        <div>
          <Label htmlFor="pokemmonName">Pokemon Name</Label>
          <Input
            type="text"
            value={searchText}
            autoComplete="off"
            id="pokemonName"
            placeholder="Pikachu, etc."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      <PokemonCard name={"Pikachu"} />
      
      </>
  );
}
