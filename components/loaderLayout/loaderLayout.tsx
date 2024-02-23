import LoaderStyle from "./loaderLayout.module.sass";

const LoaderLayout = () => {
  return (
    <div className={LoaderStyle.loaderParent}>
      <img
        className={LoaderStyle.loaderGif}
        src="/static/twyn.gif"
        alt="Loader"
      />
      <p className={LoaderStyle.loaderText}>Loading...</p>
    </div>
  );
};

export default LoaderLayout;
