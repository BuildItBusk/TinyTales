type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
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
      "
    >
      {children}
    </main>
  );
} 