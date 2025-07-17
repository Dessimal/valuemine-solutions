import { ThemeProvider } from "@/components/theme-provider";
import { Card } from "@/components/ui/card";
import { Toaster } from "sonner";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="bg-muted min-h-screen w-full">
        <div className=" container mx-auto min-h-screen w-full md:max-w-3xl mx-auto flex items-center justify-center p-2 ">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
