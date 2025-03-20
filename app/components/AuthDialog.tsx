import { GoogleAuthButton } from "@/app/components/SubmitButtons";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function AuthDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Get started</Button>
      </DialogTrigger>
      <DialogContent className="bg-card m-auto h-auto w-auto rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]">
        <div className="p-8 pb-6">
          <div className="flex items-end gap-2 justify-center mb-3">
            <Image src={Logo} alt="Logo" className="size-10" />

            <h1 className="mb-1 mt-4 text-3xl font-semibold">
              Mentor<span className="text-primary">Link</span>
            </h1>
          </div>

          <p className="text-sm text-center mb-4">Welcome!</p>

          <hr className="my-2 border-dashed" />

          <div className="mt-4 flex flex-col gap-2 justify-center">
            <GoogleAuthButton />
            <GoogleAuthButton />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
