const ErrorComponent = ({ message }) => {
  return (
    <div className="p-4 bg-red-100 text-red-700 rounded-md text-center">
      <p>{message}</p>
    </div>
  );
};

export default ErrorComponent;
