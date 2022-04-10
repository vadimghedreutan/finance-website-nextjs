const LoadingPage = () => {
  return (
    <div className="flex justify-center w-full h-full fixed bg-[#02b1f8]">
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
