import Image from "next/image";
import './main.css'
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 2xl:p-64">

      <div className="lg:mt-0">
	  <Link href="?disclaimer=true">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#00000050] drop-shadow-[0_0_0.3rem_#00000050] hidden dark:block transition ease-in-out duration-500 hover:-translate-y-0.5 hover:scale-110"
          src="/Logo_DarkBG.svg"
          alt="Nakanoista Logo"
          width={600}
          height={150}
          priority
        />
		<Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#00000050] drop-shadow-[0_0_0.3rem_#00000050] dark:hidden transition ease-in-out duration-500 hover:-translate-y-0.5 hover:scale-110"
          src="/Logo_LightBG.svg"
          alt="Nakanoista Logo"
          width={600}
          height={150}
          priority
        />
		</Link>
      </div>
	  
	  <div>
        <p className="my-12 text-center text-lg lg:text-xl font-bold dark:drop-shadow-[0_0_0.3rem_#00000060] drop-shadow-[0_0_0.3rem_#ffffff60]">
		Fan translating things (mainly games) related to the 5Hanayome franchise.
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
            <svg className="inline-block dark:invert" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 127.14 96.36"><path fill="#000" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>&nbsp;&nbsp;Discord Server{" "}
            <span className="inline-block transition-transform group-hover:animate-bounceright motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[60ch] text-sm opacity-50 relative dark:drop-shadow-[0_0_0.3rem_#00000060] drop-shadow-[0_0_0.3rem_#ffffff60]">
            Join our discord where we will be providing updates on our projects.
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
            Project site for &quot;The Quintessential Quintuplets the Movie: Five Memories of My Time with You&quot;
          </p>
        </a>
      </div>
    </main>
  );
}
