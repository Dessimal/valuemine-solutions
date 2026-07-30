import { Navbar } from "@/components/Navbar";

const ResultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-28">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {children}
        </section>
      </main>
    </>
  );
};

export default ResultLayout;
