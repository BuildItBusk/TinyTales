import StartButton from './components/StartButton';
import DecorativeBackground from './components/DecorativeBackground';
import Title from './components/Title';
import WelcomeCard from './components/WelcomeCard';
import ContentLayout from './components/ContentLayout';

export default function Home() {
  return (
    <main
      className="
        relative
        min-h-screen
        bg-gradient-to-br
        from-indigo-100
        via-purple-50
        to-pink-100
        dark:from-indigo-950
        dark:via-purple-900
        dark:to-pink-950
      ">
        
      <DecorativeBackground />

      <ContentLayout>
        <Title text="Små fortællinger" />

        <WelcomeCard
          title="Velkommen til en magisk verden af historier!"
          description="Her kan du skabe din egen unikke godnat historie ved at vælge mellem forskellige muligheder. Lad fantasien flyde og skab et eventyr, der er helt specielt for dig."
        />

        <StartButton />
      </ContentLayout>
    </main>
  );
}