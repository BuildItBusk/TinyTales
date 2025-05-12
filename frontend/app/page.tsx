import StartButton from './components/StartButton';
import DecorativeBackground from './components/DecorativeBackground';
import Title from './components/Title';
import WelcomeCard from './components/WelcomeCard';
import ContentLayout from './components/ContentLayout';
import PageLayout from './components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <DecorativeBackground />

      <ContentLayout>
        <Title text="Små fortællinger" />

        <WelcomeCard
          title="Velkommen til en magisk verden af historier!"
          description="Her kan du skabe din egen unikke godnat historie ved at vælge mellem forskellige muligheder. Lad fantasien flyde og skab et eventyr, der er helt specielt for dig."
        />

        <StartButton />
      </ContentLayout>
    </PageLayout>
  );
}