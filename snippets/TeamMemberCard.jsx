export const TeamMemberCard = ({ imageUrl, title, name, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#461a64] rounded-2xl p-6 text-white overflow-hidden shadow-lg transform transition-transform hover:scale-105">
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
        <img
          src={imageUrl}
          alt={`Photo of ${name}`}
          className="w-32 h-32 rounded-2xl object-cover"
        />
      </div>
      <div className="text-center md:text-left">
        <span className="text-xs font-semibold uppercase tracking-wider bg-white/10 text-white px-3 py-1 rounded-md">
          {title}
        </span>
        <h3 className="text-2xl font-bold mt-3 mb-2">{name}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  );
}; 