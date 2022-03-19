const GlossyCard: React.FC = ({ children }) => {
  return (
    <div
      className="
      w-full 
      h-full
      flex 
      flex-col
      px-10
      py-10 
      bg-white 
      shadow-lg 
      rounded-3xl 
      bg-opacity-60
    "
    >
      {children}
    </div>
  );
};

export default GlossyCard;
