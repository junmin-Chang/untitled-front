const Grid: React.FC = ({ children }) => {
  return (
    <div className="grid grid-cols-4 w-1/2 h-full justify-center">
      {children}
    </div>
  );
};

export default Grid;
