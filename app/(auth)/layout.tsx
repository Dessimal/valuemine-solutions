import { Card } from "@/components/ui/card";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted min-h-screen w-full">
      <div className=" min-h-screen w-full md:max-w-3xl mx-auto flex items-center justify-center p-2 ">
        {children}
      </div>
    </div>
  );
};

export default layout;
