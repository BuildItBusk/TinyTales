import StartButton from './components/StartButton';
import DecorativeBackground from './components/DecorativeBackground';

export default function Home() {
  return (
    <div
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
      "
    >
      
      <DecorativeBackground />

      <main
        className="
          relative
          min-h-screen
          flex
          flex-col
          items-center
          justify-center
          p-4
          sm:p-8
        "
      >
        <div className="max-w-2xl w-full space-y-12 text-center">
          {/* Title section */}
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
              Små fortællinger
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

          {/* Content card */}
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
                Velkommen til en magisk verden af historier!
              </p>
              <p
                className="
                  text-lg
                  sm:text-xl
                  text-purple-700
                  dark:text-purple-300
                "
              >
                Her kan du skabe din egen unikke godnat historie ved at vælge mellem forskellige muligheder.
                Lad fantasien flyde og skab et eventyr, der er helt specielt for dig.
              </p>
            </div>
          </div>

          {/* Button container */}
          <div
            className="
              hover:scale-105
              transition-transform
              duration-300
            "
          >
            <StartButton />
          </div>
        </div>
      </main>
    </div>
  );
}
