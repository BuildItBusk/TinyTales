import { Suspense } from 'react';
import ContentLayout from '../components/ContentLayout';
import PageLayout from '../components/PageLayout';
import BackButton from '../components/BackButton';
import StoryContent from './components/StoryContent';

export default function StoryPage() {
  return (
    <PageLayout>
      <BackButton />
      <ContentLayout>
        <Suspense fallback={
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
            <div className="text-center space-y-2">
              <p className="text-lg text-purple-800 dark:text-purple-200">
                Indlæser...
              </p>
            </div>
          </div>
        }>
          <StoryContent />
        </Suspense>
      </ContentLayout>
    </PageLayout>
  );
} 