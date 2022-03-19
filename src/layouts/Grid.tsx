const Grid: React.FC = ({ children }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-[20px]">
      {children}
    </div>
  );
};

export default Grid;
