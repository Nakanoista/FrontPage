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
                        className="relative dark:drop-shadow-[0_0_0.3rem_#00000050] drop-shadow-[0_0_0.3rem_#00000030] dark:hidden transition ease-in-out duration-500 hover:-translate-y-0.5 hover:scale-110"
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
              <AlertDialogTitle className="inline-grid grid-rows-2 justify-items-center"><svg
                className="invert"
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 100 130"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M54.25,29.25v26.8500977h-8.6494141V29.25H54.25z M95,5v90H5V5H95z   M87.6503906,87.6503906v-75.300293H12.3505859v75.300293H87.6503906z M54.3505859,62.050293V70.75h-8.7001953v-8.699707H54.3505859  z"/>

              </svg>Disclaimer</AlertDialogTitle>
              <AlertDialogDescription>

                Our works are offered free of charge and without any form of
                monetization. Nakanoista is in no way affiliated or related 
                to MAGES., Spike Chunsoft, or any parties involved in the
                development of any game we work on. 
                All of our works require a copy of the game in question 
                legally owned (and personally dumped, if necessary). <br/><br/>
                <strong>We DO NOT redistribute copies of any game on our 
                platforms.</strong>

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
            href="https://gotokisu.nakanoista.cc/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-white hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-5 lg:mb-3 text-2xl font-semibold relative dark:drop-shadow-[0_0_0.3rem_#00000060] drop-shadow-[0_0_0.3rem_#ffffff60]">
              Gotokisu TL Project (VN2){" "}
              <span className="inline-block transition-transform group-hover:animate-bounceright motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[60ch] text-sm opacity-50 relative dark:drop-shadow-[0_0_0.3rem_#00000060] drop-shadow-[0_0_0.3rem_#ffffff60]">
              Project site for &quot;The Quintessential Quintuplets the Movie:
              Five Memories of My Time with You&quot;
            </p>
          </a>

          <a
            href="https://gotokano.nakanoista.cc/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-white hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-5 lg:mb-3 text-2xl font-semibold relative dark:drop-shadow-[0_0_0.3rem_#00000060] drop-shadow-[0_0_0.3rem_#ffffff60]">
              Gotokano TL Project (VN3){" "}
              <span className="inline-block transition-transform group-hover:animate-bounceright motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[60ch] text-sm opacity-50 relative dark:drop-shadow-[0_0_0.3rem_#00000060] drop-shadow-[0_0_0.3rem_#ffffff60]">
              Project site for &quot;The Quintessential Quintuplets:
              Five Promises Made With Her&quot;
            </p>
          </a>

        </div>
        

        <AlertDialog>
            <AlertDialogTrigger>

            <div className="my-4 mb-12 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-center gap-4">
              <a
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-white hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
              >
                <p className="my-2 text-center text-lg lg:text-xl italic text-slate-200 dark:drop-shadow-[0_0_0.3rem_#00000060] drop-shadow-[0_0_0.3rem_#ffffff60]">
                  Where&apos;s the patch for Gotopazu (VN1)? <span className="inline-block transition-transform group-hover:animate-bounceright motion-reduce:transform-none">
                  -&gt;
                </span>
                </p>
              </a>
            </div>

            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="inline-grid grid-rows-2 justify-items-center"><svg
                  className="invert"
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 902.86 1102.86"
                >
                  <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
			              M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
                  <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
                    c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
                    c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
                    C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
                    c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
                    M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
                    S619.162,694.432,619.162,716.897z"/>
                </svg>Buy it officially.</AlertDialogTitle>
                <AlertDialogDescription>

                  The translation patch for the first game was not done by us and
                  is not of great quality. Therefore, Nakanoista recommends you
                  instead purchase a copy of the official localization.

                  <br/><br/>
                  <strong>We DO NOT redistribute copies of any game on our 
                  platforms.</strong>

                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

      </ThemeProvider>
    </main>
  );
}
