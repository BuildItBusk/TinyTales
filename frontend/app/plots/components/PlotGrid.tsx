'use client';

import { Plot } from '../../types/Plot';
import PlotCard from './PlotCard';

interface PlotGridProps {
  plots: Plot[];
  onSelect: (plotId: string) => void;
}

const PlotGrid: React.FC<PlotGridProps> = ({ plots, onSelect }) => {
  return (
    <div className="grid gap-4 max-w-2xl mx-auto w-full">
      {plots.map((plot) => (
        <PlotCard
          key={plot.id}
          {...plot}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default PlotGrid; 