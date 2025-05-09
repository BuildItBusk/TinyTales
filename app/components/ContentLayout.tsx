type ContentLayoutProps = {
  children: React.ReactNode;
};

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div
      className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        p-4
        sm:p-8
        space-y-12
      "
    >
      {children}
    </div>
  );
} 