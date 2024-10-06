const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    </div>
  );
};

export default Loader;
