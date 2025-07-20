export const TeamMemberCard = ({ imageUrl, title, name, description }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-slate-900/70 rounded-2xl border border-purple-500/30 p-8 text-center shadow-2xl shadow-purple-500/10 backdrop-blur-sm">
      <img
        src={imageUrl}
        alt={`Photo of ${name}`}
        className="w-32 h-32 rounded-full object-cover mb-5 mx-auto border-4 border-purple-500/50"
      />
      <span className="text-sm font-semibold text-purple-400 uppercase tracking-widest">
        {title}
      </span>
      <h3 className="text-3xl font-bold text-white mt-2 mb-3">{name}</h3>
      <p className="text-slate-400 text-base">{description}</p>
    </div>
  );
}; 