import spinnerLoading from "./../../images/Spinner-1s-200px.gif";

const LoadingIcon = () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img width={300} height={300} src={spinnerLoading} alt="Loading.." />
  </div>
);
export default LoadingIcon;
