'use client';

export default function DecorativeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 text-6xl animate-bounce">✨</div>
      <div className="absolute top-40 right-20 text-5xl animate-bounce [animation-delay:1s]">⭐</div>
      <div className="absolute bottom-40 left-1/4 text-6xl animate-bounce [animation-delay:2s]">✨</div>
      <div className="absolute bottom-20 right-1/4 text-5xl animate-bounce [animation-delay:3s]">⭐</div>
    </div>
  );
} 