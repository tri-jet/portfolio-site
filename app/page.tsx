import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-transparent">
      {/* Central content area, 3/5 width, centered */}
      <div className="w-3/5 mx-auto font-mono text-sm">
        {/* Profile Section */}
        <div className="flex flex-col items-center mt-12 mb-12">
          <Image
            src="https://via.placeholder.com/150"
            alt="Pic w/ personality"
            width={150}
            height={150}
            className="rounded-full mb-4"
          />
          <div className="w-[300px] text-center">
            <p>
              Hi I&apos;m Trijit, an SE passionate about building meaningful and useful products etc. Maybe some prod engineer stuff.
            </p>
          </div>
        </div>

        {/* Two-Column Section */}
        <div className="flex flex-row gap-x-12 w-full justify-between">
          {/* Left Column: Work Experience & Projects */}
          <div className="max-w-1/2 w-2/3 pr-8" style={{maxWidth: '50%'}}>
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
            <div className="mb-8">
              <h3 className="text-xl font-semibold">🚀 Project 1 name - Dates</h3>
              <p>- 1 line project desc. inc. use case scenario</p>
              <p>- features developed, for which product purpose</p>
              <p>- non-technical activities – e.g. user convos</p>
              <p className="text-sm text-gray-400 mt-2">React, TypeScript, FastAPI, GraphQL, Serverless AWS</p>
              <p>- &lt;Github and/or Live link&gt;</p>
              <div className="w-full flex justify-center my-4">
                <div className="bg-gray-700 w-72 h-40 flex items-center justify-center text-gray-400">[Project Demo/Video/Image]</div>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold">🤖 Project 2 name - Dates</h3>
              <p>- 1 line project desc. inc. use case scenario</p>
              <p>- features developed, for which product purpose</p>
              <p>- non-technical activities – e.g. user convos</p>
              <p className="text-sm text-gray-400 mt-2">Python, OpenAI LLMs, Web Scraping</p>
              <p>- &lt;Github and/or Live link&gt;</p>
              <div className="w-full flex justify-center my-4">
                <div className="bg-gray-700 w-72 h-40 flex items-center justify-center text-gray-400">[Project Demo/Video/Image]</div>
              </div>
            </div>
          </div>

          {/* Right Column: Blog */}
          <div className="w-1/3 ml-auto">
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

