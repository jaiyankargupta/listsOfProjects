const ErrorMsg = ({ list }) => {
  return <div>{list.length === 0 && <h1> error</h1>}</div>;
};

export default ErrorMsg;
