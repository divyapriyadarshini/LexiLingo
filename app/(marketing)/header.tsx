import Image from "next/image";
import { Loader } from "lucide-react";
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";


  export const Header = () => {
    return (
      <header className="h-20 w-full border-b-2 border-slate-200 px-4">
       <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
            <Image src="/mascot.svg" height={40} width={40} alt="Mascot"/>
            <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
                LexiLingo
            </h1>
        </div>
        <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground"/>
        </ClerkLoading>
        <ClerkLoaded>
        <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
              <SignInButton
                mode="modal"
                forceRedirectUrl="/learn"
                signUpForceRedirectUrl="/learn"
              >
                <Button size="lg" variant="ghost">
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
        </ClerkLoaded>
       </div>
      </header>
    );
  };