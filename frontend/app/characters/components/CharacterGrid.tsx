'use client';

import CharacterCard from './CharacterCard';

type Character = {
  name: string;
  description: string;
  emoji: string;
};

type CharacterGridProps = {
  characters: Character[];
  onSelect: (name: string) => void;
};

export default function CharacterGrid({ characters, onSelect }: CharacterGridProps) {
  return (
    <div className="grid gap-6">
      {characters.map((character) => (
        <CharacterCard
          key={character.name}
          {...character}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
} 