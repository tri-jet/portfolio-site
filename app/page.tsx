import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <div className="flex flex-col items-center mb-12">
          <Image
            src="https://via.placeholder.com/150"
            alt="Pic w/ personality"
            width={150}
            height={150}
            className="rounded-full mb-4"
          />
          <p className="text-center">
            Hi I&apos;m Trijit, an SE passionate about building meaningful and useful products etc. Maybe some prod engineer stuff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="mb-8">
              <h3 className="text-xl font-semibold">Role 1 @ Company - Dates</h3>
              <p>built X to do Y</p>
              <ul className="list-disc list-inside ml-4">
                <li>sub-features built - e.g. built A for &lt;purpose&gt; for Z product aim</li>
                <li>other sub features</li>
              </ul>
              <p className="text-sm text-gray-400 mt-2">React, TypeScript, GraphQL, AWS</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Role 2 @ Company - Dates</h3>
              <p>built X to do Y</p>
              <ul className="list-disc list-inside ml-4">
                <li>sub-features built - e.g. built A for &lt;purpose&gt; for Z product aim</li>
                <li>other sub features</li>
              </ul>
              <p className="text-sm text-gray-400 mt-2">React, TypeScript, GraphQL, AWS</p>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">Projects</h2>
            <div>
              <h3 className="text-xl font-semibold">&lt;icon/emoji&gt; Project 1 name - Dates</h3>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Blog</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Blog Post title 3 - Date</h3>
              <p>Subline + cut off preview of start</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Blog Post title 2 - Date</h3>
              <p>Subline + cut off preview of start</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Blog Post title 1 - Date</h3>
              <p>Subline + cut off preview of start</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

