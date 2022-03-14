const GlossyCard: React.FC = ({ children }) => {
  return (
    <div className="w-full flex flex-col gap-10  max-w-[500px] px-4 py-10 bg-white shadow-lg rounded-3xl bg-opacity-60 border ">
      {children}
    </div>
  );
};

export default GlossyCard;
