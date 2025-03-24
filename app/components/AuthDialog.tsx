import Image from "next/image";
import Logo from "@/public/logo.png";
import { GoogleAuthButton } from "@/app/components/SubmitButtons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { submitGoogleButton } from "../lib/hooks";

export default function AuthDialog() {
  return (
    <Dialog>
      <DialogTitle hidden />
      <DialogTrigger asChild>
        <Button>Get started</Button>
      </DialogTrigger>
      <DialogContent className="bg-card m-auto h-auto w-auto rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]">
        <div className="p-8 pb-6">
          <div className="flex items-end gap-2 justify-center mb-3">
            <Image src={Logo} alt="Logo" className="size-10" />

            <h1 className="mb-1 mt-4 text-3xl font-semibold">
              Mentor<span className="text-orange-400">Link</span>
            </h1>
          </div>

          <p className="text-sm text-center mb-4">Welcome!</p>

          <hr className="my-2 border-dashed" />

          <div className="mt-4 flex flex-col gap-2 justify-center">
            <form
              action={async () => {
                await submitGoogleButton();
              }}
            >
              <GoogleAuthButton />
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
