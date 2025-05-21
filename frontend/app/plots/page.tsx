import { Suspense } from 'react';
import ContentLayout from '../components/ContentLayout';
import Title from '../components/Title';
import PlotSelectionIntro from './components/PlotSelectionIntro';
import PageLayout from '../components/PageLayout';
import BackButton from '../components/BackButton';
import PlotSelectionClient from './components/PlotSelectionClient';

export default function PlotSelection() {
  return (
    <PageLayout>
      <BackButton />
      <ContentLayout>
        <Title text="Vælg din historie" />

        <PlotSelectionIntro />

        <Suspense fallback={<div className="text-center">Indlæser historier...</div>}>
          <PlotSelectionClient />
        </Suspense>
      </ContentLayout>
    </PageLayout>
  );
} 