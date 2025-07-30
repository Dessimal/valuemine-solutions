import { Navbar } from "@/components/Navbar";

const ResultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <section className="">{children}</section>
    </>
  );
};

export default ResultLayout;
