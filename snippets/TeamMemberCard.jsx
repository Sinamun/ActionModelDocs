export const TeamMemberCard = ({ imageUrl, title, name, description }) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-black rounded-2xl border-2 border-purple-600 p-8 text-center shadow-xl shadow-purple-600/20 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-purple-600/50 my-4">
      <img
        src={imageUrl}
        alt={`Photo of ${name}`}
        className="w-28 h-28 rounded-full object-cover mb-4 mx-auto border-4 border-purple-600/50 pointer-events-none"
      />
      <span className="text-sm font-semibold text-purple-500 uppercase tracking-widest">
        {title}
      </span>
      <h3 className="text-2xl font-bold text-white mt-1.5 mb-2">{name}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}; 