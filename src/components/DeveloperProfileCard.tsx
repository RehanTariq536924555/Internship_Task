interface DeveloperProfileCardProps {
  developer: {
    name: string;
    title: string;
    avatar: string;
    rating: number;
    completedProjects: number;
    hourlyRate: number;
    skills: string[];
    location: string;
    availability: string;
  };
}

const DeveloperProfileCard = ({ developer }: DeveloperProfileCardProps) => {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {developer.name.split(' ').map(n => n[0]).join('')}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{developer.name}</h3>
              <p className="text-gray-600">{developer.title}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1 mb-1">
                <span className="text-yellow-500">★</span>
                <span className="font-semibold">{developer.rating}</span>
              </div>
              <p className="text-sm text-gray-500">{developer.completedProjects} projects</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
            <span>📍 {developer.location}</span>
            <span>💰 ${developer.hourlyRate}/hr</span>
            <span className={`px-2 py-1 rounded-full text-xs ${
              developer.availability === 'Available' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {developer.availability}
            </span>
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {developer.skills.slice(0, 4).map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
              {developer.skills.length > 4 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                  +{developer.skills.length - 4} more
                </span>
              )}
            </div>
          </div>

          <div className="flex space-x-3">
            <button className="btn-primary flex-1">
              View Profile
            </button>
            <button className="btn-secondary">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfileCard;