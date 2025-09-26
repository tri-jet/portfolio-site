import Image from "next/image";
import { Card } from "./components/Card";
import { SocialLinks } from "./components/SocialLinks";

export default function Home() {
   const mediaPlaceholder = (
    <div className="w-full md:w-72 h-48 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
      [Project Demo/Video/Image]
    </div>);
  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <main className="min-h-screen flex flex-col items-center bg-transparent">
        {/* Central content area, 3/5 width, centered */}
        <div className="w-3/5 mx-auto text-sm text-gray-900">
          {/* Profile Section */}
          <div className="flex flex-col items-center mt-12 mb-12">
            <Image
              //src="https://placehold.co/450x300/png"
              src="./DANTE BASCO CROPPED.PNG"
              alt="Pic"
              width={150}
              height={300}
              className="rounded-[30px]"
            />
            <p className="mt-2 text-xs text-gray-500 text-center w-[300px] mb-4">
                If you know you know 🔥, I&apos;m on the right btw.
            </p>
            <div className="w-[300px] text-center text-gray-900">
              <p>
                Hi, I&apos;m Trijit, a product-minded software engineer passionate about designing and building meaningful, user-focused applications that solve real problems.
              </p>
              <div className="mt-4 mb-6"> {/* Adds some vertical spacing */}
                <span className="inline-block px-4 py-2 text-sm font-semibold text-gray-700 bg-white rounded-full shadow-lg">
                  🎓 BSc Computer Science Graduate<br></br> University of Nottingham
                </span>
              </div>
              <p>📍London</p>
              <SocialLinks />
              
            </div>
          </div>
          
          {/* Work Experience Section */}
          <h2 className="text-2xl font-bold mt-12 mb-4">Work Experience</h2>
          <div className="flex flex-col gap-8 py-8">
            <Card
              title="Digital Engineer @ Sonata Software 🎵"
              subtitle="June 2025 - Present"
              lines={[
                "Currently working on AI proof of concept research, exploring generative and agentic AI use cases."
              ]}
              skills={['TypeScript', 'Python', 'React', 'Agentic AI']}
            />
            <Card
              title="London Accelerator Engineer @ SumUp 💰"
              subtitle="March - May 2025"
              bulletPoints={[
                "Co-developed a bill splitting web app with £2k processed in its first week.",
                "Built GraphQL endpoints and connected to a clean UI with Next.js & Tailwind.",
                "Presented weekly demos to clients and iterated quickly based on feedback."
              ]}
              skills={['TypeScript', 'React', 'AWS Lambda', 'NextJS', 'Tailwind','GraphQL', 'Node.js']}
            />
            
          </div>

          <hr className="my-12 border-t-2 border-gray-300" />
          
          {/* Projects Section - Aligned with Profile */}
          <h2 className="text-2xl font-bold mt-12 mb-4">Projects</h2>
          <div className="flex flex-col gap-8 py-8">
            <Card 
              title="Nando's Map 🐔 🗺"
              subtitle="July 2025 - Present"
              lines={["Building a social, gamified web app for tracking visits to Nando’s restaurants."]}
              bulletPoints={[
                "Implemented authentication, persistence, region selection and check-off features with CI/CD.",
                "Roadmap: interactive maps, leaderboards, photo uploads, and “Spotify Wrapped”-style insights."
              ]}
              skills={['Next.js', 'TypeScript', 'FastAPI', 'Shadcn UI', 'Tailwind', 'Supabase', 'Vercel', 'Render']}
              //githubLink="#"
              //liveLink="#"
              media={mediaPlaceholder}
            />

            <Card 
              title="Anki Chatbot 📝 🤖"
              subtitle="January 2025"
              lines={["Anki is a flashcard tool used to study, but can often have quite a steep learning curve.",
                "I made this tool to make Anki easier to use and learn."
              ]}
              bulletPoints={["Created a RAG chatbot in Python that provides contextually relevant answers about the Anki flashcard tool.",
                "Scraped and indexed documentation to create a vector database with embeddings, enabling use of cosine similarity to retrieve context relevant to the question.",
                "Leveraged the context with OpenAI's chat completion model using prompt engineering for context-aware answer generation."]}              
              skills={['Python', 'OpenAI LLMs', 'Web Scraping']}
              // githubLink="#"
              // liveLink="#"
              media={
                <Image
                  src="./anki-screenshot.PNG"
                  alt="Anki screenshot"
                  width={288}
                  height={162}
                />
              }
            />

            <Card
              title="Reversi/Othello Game ♟️"
              subtitle="April 2022"
              bulletPoints={[
                "Game built with MVC architecture in Java, with GUI made in Java Swing, allowing for 2 players to play on separate windows.",
                "Greedy AI button to make the most optimal move at any time, for the most points gain."
              ]}
              skills={['Java', 'Java Swing', 'MVC Architecture']}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
