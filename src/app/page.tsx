import Image from "next/image";

export default function Home() {
  return (
  <main>
    <div className="relative z-[-1] pt-64 -mb-64 sticky top-0 content-center object-contain fixed before:absolute before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-72 after:w-72 after:translate-x-1/3 after:bg-gradient-conic after:from-green-200 after:via-green-600 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-400 before:dark:opacity-10 after:dark:from-green-700 after:dark:via-[#88B25F] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <div className="pb-40 lg:py-40 z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Congresso Coral e Orquestra 2024
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
              className="font-semibold flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://www.instagram.com/ieadijardimdasnacoes/"
              rel="noopener noreferrer"
            >
              @ieadijardimdasnacoes{" "}
              <Image
                src="/Instagram.svg"
                alt="Vercel Logo"
                className=""
                width={30}
                height={10}
                priority
              />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-center text-2xl font-semibold">
            DEUS REVELA SUA GLÓRIA ATRAVÉS DO LOUVOR
          </h2><br />
          <h5 className="text-center font-semibold mb-16">
            2º CRO 5:13-14
          </h5>
        </div>

        <div className="mb-324 grid text-center pb-48 lg:mb-24 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
          <a
            href="/letras/emJesus"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100/30 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Só em Jesus{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Só em Jesus posso esperar, é minha força...
            </p>
          </a>

          <a
            href="/letras/AmarDeus"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100/30 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Amar a Deus{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              De onde o vento vem, vai soprar para o norte...
            </p>
          </a>

          <a
            href="/letras/Jesusmeu"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100/30 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Jesus meu guia é{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Jesus, meu guia é, amigo e protetor...
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
