import Image from "next/image";
import {SkillPills} from './components/SkillPills';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <main className="min-h-screen flex flex-col items-center bg-transparent">
        {/* Central content area, 3/5 width, centered */}
        <div className="w-3/5 mx-auto text-sm text-gray-900">
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
          
          {/* Work Experience Section */}
          <h2 className="text-2xl font-bold mt-12 mb-4">Work Experience</h2>
          <div className="flex flex-col gap-8 py-8">
            {/* Work Experience 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Digital Engineer @ Sonata Software 🎵</h3>
                  <h4 className="text-md font-medium mb-2"> June 2025 - Present</h4>
                  <p className="text-gray-700 mb-4">
                    Currently working on AI proof of concept research, exploring generative and agentic AI use cases.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {/* <li>Built new features for the cross-platform UI to enhance user experience.</li>
                    <li>Collaborated with a dedicated team to maintain and improve robust microservices.</li> */}
                  </ul>
                  <SkillPills skills={['TypeScript', 'Python', 'React', 'Agentic AI']} />
                </div>
              </div>
            </div>
            
            {/* Work Experience 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">London Accelerator Engineer @ SumUp 💰</h3>
                  <h4 className="text-md font-medium mb-2"> March - May 2025</h4>
                  <p className="text-gray-700 mb-4">
                    
                    
                    

                  </p>
                  <ul className="text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 mr-2">&#8226;</span>
                      <span>Co-developed a bill splitting web app with £2k processed in its first week.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 mr-2">&#8226;</span>
                      <span>Built GraphQL endpoints and connected to a clean UI with Next.js & Tailwind.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 mr-2">&#8226;</span>
                      <span>Presented weekly demos to clients and iterated quickly based on feedback.</span>
                    </li>
                  </ul>
                  <SkillPills skills={['TypeScript', 'React', 'AWS Lambda', 'NextJS', 'Tailwind','GraphQL']} />
                </div>
              </div>
            </div>
          </div>

          <hr className="my-12 border-t-2 border-gray-300" />
          
          {/* Projects Section - Aligned with Profile */}
          <h2 className="text-2xl font-bold mt-12 mb-4">Projects</h2>
          <div className="flex flex-col gap-8 py-8">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">🚀 Project 1 name - Dates</h3>
                  <p className="text-gray-700 mb-4">
                    A one-line project description including a use-case scenario. This section highlights the features developed, the product&apos;s purpose, and any non-technical activities like user interviews.
                  </p>
                  <SkillPills skills={['React', 'TypeScript', 'FastAPI', 'GraphQL', 'Serverless AWS']} />
                  <div className="mt-4 text-gray-600">
                    <a href="#" className="underline mr-4">GitHub Link</a>
                    <a href="#" className="underline">Live Demo</a>
                  </div>
                </div>
                <div className="md:ml-6 mt-4 md:mt-0 flex-shrink-0">
                  <div className="w-full md:w-72 h-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
                    [Project Demo/Video/Image]
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">🤖 Project 2 name - Dates</h3>
                  <p className="text-gray-700 mb-4">
                    A one-line project description including a use-case scenario. This section highlights the features developed, the product&apos;s purpose, and any non-technical activities like user interviews.
                  </p>
                  <SkillPills skills={['Python', 'OpenAI LLMs', 'Web Scraping']} />
                  <div className="mt-4 text-gray-600">
                    <a href="#" className="underline mr-4">GitHub Link</a>
                    <a href="#" className="underline">Live Demo</a>
                  </div>
                </div>
                <div className="md:ml-6 mt-4 md:mt-0 flex-shrink-0">
                  <div className="w-full md:w-72 h-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
                    [Project Demo/Video/Image]
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">✨ Project 3 name - Dates</h3>
                  <p className="text-gray-700 mb-4">
                    A one-line project description including a use-case scenario. This section highlights the features developed, the product&apos;s purpose, and any non-technical activities like user interviews.
                  </p>
                  <SkillPills skills={['Node.js', 'Express.js', 'PostgreSQL']} />
                  <div className="mt-4 text-gray-600">
                    <a href="#" className="underline mr-4">GitHub Link</a>
                    <a href="#" className="underline">Live Demo</a>
                  </div>
                </div>
                <div className="md:ml-6 mt-4 md:mt-0 flex-shrink-0">
                  <div className="w-full md:w-72 h-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
                    [Project Demo/Video/Image]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}