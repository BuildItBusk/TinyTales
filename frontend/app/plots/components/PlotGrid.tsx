'use client';

import { Plot } from '../../types/Plot';
import PlotCard from './PlotCard';

interface PlotGridProps {
  plots: Plot[];
  characterName: string;
}

const PlotGrid: React.FC<PlotGridProps> = ({ plots, characterName }) => {
  return (
    <div className="grid gap-4 max-w-2xl mx-auto w-full">
      {plots.map((plot) => (
        <PlotCard
          key={plot.id}
          {...plot}
          characterName={characterName}
        />
      ))}
    </div>
  );
};

export default PlotGrid; 