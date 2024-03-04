import Image from "next/image";
import "./main.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 2xl:p-64">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="lg:mt-0">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#00000050] drop-shadow-[0_0_0.3rem_#00000050] hidden dark:block transition ease-in-out duration-500 hover:-translate-y-0.5 hover:scale-110"
                        src="/Logo_DarkBk.svg"
                        alt="Nakanoista Logo"
                        width={600}
                        height={150}
                        priority
                      />
                      <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#00000050] drop-shadow-[0_0_0.3rem_#00000050] dark:hidden transition ease-in-out duration-500 hover:-translate-y-0.5 hover:scale-110"
                        src="/Logo_LightBk.svg"
                        alt="Nakanoista Logo"
                        width={600}
                        height={150}
                        priority
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>See Copyright Disclaimer</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle><svg
                className="inline-block dark:invert"
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 100 110"
              >
                <path d="M83.5,83.5C102,65,102,35,83.5,16.5C65-2,35-2,16.5,16.5C-2,35-2,65,16.5,83.5C35,102,65,102,83.5,83.5z M44.7,27.1  c1.2-2.6,4-4,6.8-3.3c2.7,0.7,4.5,3.3,4.3,6.2c-0.1,1.9-0.2,3.7-0.3,5.6c-0.4,7-0.8,14-1.1,20.9c-0.1,2.3-2,4.1-4.3,4.1  c-2.4,0-4.2-1.8-4.3-4.3c-0.1-1.4-0.1-2.8-0.2-4.2c-0.3-4.5-0.5-9-0.8-13.6c-0.2-2.9-0.3-5.8-0.5-8.7C44.2,29,44.3,28,44.7,27.1z   M50,64.7c3.2,0,5.8,2.6,5.9,5.8c0,3.2-2.6,5.8-5.8,5.8c-3.1,0-5.8-2.6-5.8-5.7C44.2,67.4,46.8,64.7,50,64.7z"/>

              </svg>&nbsp;&nbsp;Disclaimer</AlertDialogTitle>
              <AlertDialogDescription>
                Our works are offered free of charge and without any form of
                monetization. Nakanoista is in no way affiliated or related to
                mages., or any parties involved in the development of any game
                we work on.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <div>
          <p className="my-12 text-center text-lg lg:text-xl font-bold dark:drop-shadow-[0_0_0.3rem_#00000060] drop-shadow-[0_0_0.3rem_#ffffff60]">
            Fan translating things (mainly games) related to the 5Hanayome
            franchise.
          </p>
        </div>

        <div className="mb-12 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left gap-4">
          <a
            href="https://discord.com/invite/HguEswuU5p"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-white hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-5 lg:mb-3 text-2xl font-semibold relative dark:drop-shadow-[0_0_0.3rem_#00000060] drop-shadow-[0_0_0.3rem_#ffffff60]">
              <svg
                className="inline-block dark:invert"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 127.14 96.36"
              >
                <path
                  fill="#000"
                  d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                />
              </svg>
              &nbsp;&nbsp;Discord Server{" "}
              <span className="inline-block transition-transform group-hover:animate-bounceright motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[60ch] text-sm opacity-50 relative dark:drop-shadow-[0_0_0.3rem_#00000060] drop-shadow-[0_0_0.3rem_#ffffff60]">
              Join our discord where we will be providing updates on our
              projects.
            </p>
          </a>

          <a
            href="https://eiga.nakanoista.cc/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-white hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-5 lg:mb-3 text-2xl font-semibold relative dark:drop-shadow-[0_0_0.3rem_#00000060] drop-shadow-[0_0_0.3rem_#ffffff60]">
              Eiga VN Project{" "}
              <span className="inline-block transition-transform group-hover:animate-bounceright motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[60ch] text-sm opacity-50 relative dark:drop-shadow-[0_0_0.3rem_#00000060] drop-shadow-[0_0_0.3rem_#ffffff60]">
              Project site for &quot;The Quintessential Quintuplets the Movie:
              Five Memories of My Time with You&quot;
            </p>
          </a>
        </div>
      </ThemeProvider>
    </main>
  );
}
