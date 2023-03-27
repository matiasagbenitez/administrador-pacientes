// export const ErrorFormulario = ({mensaje}) => {
export const ErrorFormulario = ({ children }) => {
  return (
    <div className="bg-red-600 text-white p-1 uppercase font-bold text-center mb-3 rounded-lg">
      <p>{children}</p>
    </div>
  );
};
