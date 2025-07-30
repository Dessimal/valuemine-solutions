"use client";

import { Calculator, ChevronDownIcon, LogOutIcon } from "lucide-react";
import { toast } from "sonner";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function UserDropdown() {
  const router = useRouter();

  const { data: session, isPending, error } = authClient.useSession();

  if (session) {
    console.log(session.user.name);
  } else {
    console.log("user not found");
  }

  const userName = session?.user?.name || session?.user?.email?.split("@")[0];
  const userAvatar = session?.user?.image;

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
          toast("Successfully signed out");
        },
        onError: () => {
          toast("Error signing out");
        },
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage src={userAvatar} alt="Profile image" />
            <AvatarFallback>
              {userName?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <ChevronDownIcon
            size={16}
            className="opacity-60"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            {isPending ? null : session ? <>Hello, {userName}</> : null}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/calculator">
              <Calculator size={16} className="opacity-60" aria-hidden="true" />
              <span>Solar Calculator</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button onClick={handleSignOut} variant="ghost">
            <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>Logout</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
