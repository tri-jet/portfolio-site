import Image from "next/image";
import {SkillPills} from './components/SkillPills';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-orange-200">
    <main className="min-h-screen flex flex-col items-center bg-transparent">
        {/* Central content area, 3/5 width, centered */}
        <div className="w-3/5 mx-auto font-mono text-sm text-gray-900">
          {/* Profile Section */}
          <div className="flex flex-col items-center mt-12 mb-12">
            <Image
              src="https://placehold.co/450x300/png"
              alt="Pic w/ personality"
              width={450}
              height={300}
              className="rounded-[30px] mb-4"
            />
            <div className="w-[300px] text-center text-gray-900">
              <p>
                Hi I&apos;m Trijit, an SE passionate about building meaningful and useful products etc. Maybe some prod engineer stuff.
              </p>
            </div>
          </div>

          {/* Test this main text colour rgb(71 85 105/var(--tw-text-opacity))*/}
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
                <SkillPills skills={['React', 'TypeScript','AWS']}/>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Role 2 @ Company - Dates</h3>
                <p>built X to do Y</p>
                <ul className="list-disc list-inside ml-4">
                  <li>sub-features built - e.g. built A for &lt;purpose&gt; for Z product aim</li>
                  <li>other sub features</li>
                </ul>
                
                <SkillPills skills={['React', 'TypeScript', 'GraphQL', 'AWS']}/>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-4">Projects</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold">🚀 Project 1 name - Dates</h3>
                <p>- 1 line project desc. inc. use case scenario</p>
                <p>- features developed, for which product purpose</p>
                <p>- non-technical activities – e.g. user convos</p>
                <SkillPills skills={['React', 'TypeScript', 'FastAPI', 'GraphQL', 'Serverless AWS']}/>

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
                
                <SkillPills skills={['Python', 'OpenAI LLMs', 'Web Scraping']}/>

                <div className ="text-purple-600">
                  <p>test</p>
                </div>

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
    </div>

  
  );
}

