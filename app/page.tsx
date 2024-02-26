import Image from "next/image";
import './main.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Latest project:&nbsp;
          <code className="font-mono font-bold">
            <a href="https://eiga.nakanoista.cc/">Eiga</a>
          </code>
        </p>
      </div>

      <div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] light"
          src="https://eiga.nakanoista.cc/static/nakanoista_darkbg.svg"
          alt="Nakanoista Logo"
          width={500}
          height={150}
          priority
        />
      </div>
		
		
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="https://discord.com/invite/HguEswuU5p"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Discord{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[50ch] text-sm opacity-50`}>
            Join our discord where we will be providing updates on our projects.
          </p>
        </a>

        <a
          href="https://eiga.nakanoista.cc/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Eiga VN Project{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[50ch] text-sm opacity-50`}>
            Project page for &quot;The Quintessential Quintuplets the Movie: Five Memories of My Time with You&quot;
          </p>
        </a>
      </div>
    </main>
  );
}
