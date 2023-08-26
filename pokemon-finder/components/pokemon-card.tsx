import Link from "next/link"

// point card at pokemon
// pickachu points to localhost://pikachu 

interface PokemonCardProps {
    name: string
}

export function PokemonCard({name} : PokemonCardProps) {

    return (
        <a
            href={name}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            key={name + "Card"}
          >
            <h2 className={`text-2xl font-semibold`}>
              {name}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>
    )
}