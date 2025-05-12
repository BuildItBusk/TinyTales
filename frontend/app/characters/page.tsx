'use client';

import ContentLayout from '../components/ContentLayout';
import Title from '../components/Title';
import CharacterSelectionIntro from './components/CharacterSelectionIntro';
import CharacterGrid from './components/CharacterGrid';
import PageLayout from '../components/PageLayout';
import BackButton from '../components/BackButton';

type Character = {
  name: string;
  description: string;
  emoji: string;
};

const characters: Character[] = [
  {
    name: "Isbjørnen Theo",
    description: "En snild isbjørn der elsker at fortælle historier om sine eventyr i Arktis",
    emoji: "🐻‍❄️"
  },
  {
    name: "Papegøjen Polly",
    description: "En farverig papegøje der har rejst verden rundt og samlet på historier",
    emoji: "🦜"
  },
  {
    name: "Pindsvinet Pelle",
    description: "En sød pindsvin der bor i en magisk have og kender alle skovens hemmeligheder",
    emoji: "🦔"
  }
];

export default function CharacterSelection() {
  const handleCharacterSelect = (characterName: string) => {
    console.log(`Selected character: ${characterName}`);
  };

  return (
    <PageLayout>
      <BackButton />
      <ContentLayout>
        <Title text="Vælg din fortæller" />

        <CharacterSelectionIntro />

        <CharacterGrid
          characters={characters}
          onSelect={handleCharacterSelect}
        />
      </ContentLayout>
    </PageLayout>
  );
} 