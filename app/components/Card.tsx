import { SkillPills } from './SkillPills';

export interface CardProps {
  title: string;
  subtitle?: string;
  lines?: string[];
  bulletPoints?: string[];
  skills: string[];
  githubLink?: string;
  liveLink?: string;
  media?: React.ReactNode;
  hasMediaPlaceholder?: boolean;
}

export const Card = ({
  title,
  subtitle,
  lines,
  bulletPoints,
  skills,
  githubLink,
  liveLink,
  media,
  hasMediaPlaceholder = false
}: CardProps) => {


  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          {subtitle && <h4 className="text-md font-medium mb-2">{subtitle}</h4>}

          {/* Render unbulleted lines if provided */}
          {lines && lines.length > 0 && (
            <div className="text-gray-700 mb-4">
              {lines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          )}

          {/* Render bullet points if provided */}
          {bulletPoints && bulletPoints.length > 0 && (
            <ul className="text-gray-700 mb-4">
              {bulletPoints.map((bullet, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 mr-2">&#8226;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          
          <SkillPills skills={skills} />
          
          {/* Render links only if provided */}
          {(githubLink || liveLink) && (
            <div className="mt-4 text-gray-600">
              {githubLink && <a href={githubLink} className="underline mr-4">GitHub Link</a>}
              {liveLink && <a href={liveLink} className="underline">Live Demo</a>}
            </div>
          )}
        </div>
        
         {/* Render the media container only if there's content to put in it */}
        {media && (
          <div className="md:ml-6 mt-4 md:mt-0 flex-shrink-0">
            {media}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;