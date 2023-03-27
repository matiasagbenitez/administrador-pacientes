export const Paciente = ({ paciente, setPaciente }) => {
  const { id, nombre, propietario, email, fechaAlta, sintomas } = paciente;
  return (
    <div className="bg-white p-5 rounded-lg mb-2">
      <p className="font-bold mb-1 text-gray-700 uppercase text-sm">
        Nombre mascota: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-1 text-gray-700 uppercase text-sm">
        Nombre propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-1 text-gray-700 uppercase text-sm">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-1 text-gray-700 uppercase text-sm">
        Fecha alta: {""}
        <span className="font-normal normal-case">{fechaAlta}</span>
      </p>
      <p className="font-bold mb-1 text-gray-700 uppercase text-sm">
        Síntomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="md:flex md:gap-3">
        <button
          type="button"
          className="bg-green-600 text-white p-1 w-full rounded-md uppercase font-bold mt-2 text-sm"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="bg-red-600 text-white p-1 w-full rounded-md uppercase font-bold mt-2 text-sm"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
