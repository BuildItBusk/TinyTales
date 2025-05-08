type TitleProps = {
  text: string;
};

export default function Title({ text }: TitleProps) {
  return (
    <div className="space-y-4">
      <h1
        className="
          text-5xl
          sm:text-6xl
          font-bold
          bg-gradient-to-r
          from-purple-600
          to-pink-600
          dark:from-purple-400
          dark:to-pink-400
          bg-clip-text
          text-transparent
          leading-tight
        "
      >
        {text}
      </h1>
      <div
        className="
          h-1
          w-24
          mx-auto
          bg-gradient-to-r
          from-purple-400
          to-pink-400
          rounded-full
        "
      ></div>
    </div>
  );
}
