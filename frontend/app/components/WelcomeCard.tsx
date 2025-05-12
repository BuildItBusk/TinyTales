type WelcomeCardProps = {
  title: string;
  description: string;
};

export default function WelcomeCard({ title, description }: WelcomeCardProps) {
  return (
    <div
      className="
        backdrop-blur-sm
        bg-white/70
        dark:bg-gray-900/70
        rounded-3xl
        p-8
        shadow-xl
        border
        border-purple-100
        dark:border-purple-800
        max-w-2xl
        w-full
      "
    >
      <div className="space-y-6">
        <p
          className="
            text-2xl
            sm:text-3xl
            font-medium
            text-purple-800
            dark:text-purple-200
          "
        >
          {title}
        </p>
        <p
          className="
            text-lg
            sm:text-xl
            text-purple-700
            dark:text-purple-300
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
} 