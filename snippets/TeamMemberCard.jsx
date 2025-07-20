export const TeamMemberCard = ({ imageUrl, name, title, description }) => {
  return (
    <div className="bg-[#4A006A] rounded-2xl flex flex-col sm:flex-row items-center p-6 text-white font-sans w-full max-w-lg mx-auto">
      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
        <img
          src={imageUrl}
          alt={`Photo of ${name}`}
          className="w-32 h-32 rounded-2xl object-cover"
        />
      </div>
      <div className="text-center sm:text-left">
        <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-md mb-3 uppercase tracking-wider">
          {title}
        </span>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-white/80 text-base">{description}</p>
      </div>
    </div>
  );
}; 