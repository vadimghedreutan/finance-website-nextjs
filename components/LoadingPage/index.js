const LoadingPage = () => {
  return (
    <div className="flex justify-center w-full h-full fixed bg-[#17C68D]">
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
