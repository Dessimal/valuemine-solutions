import { Navbar } from "@/components/Navbar";

const ResultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto">{children}</div>
    </>
  );
};

export default ResultLayout;
