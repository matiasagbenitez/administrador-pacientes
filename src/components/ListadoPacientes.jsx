import { useEffect } from "react";
import { Paciente } from "./Paciente";

export const ListadoPacientes = ({
  pacientes,
  setPaciente,
  eliminarPaciente,
}) => {
  return (
    <div className="md:w-1/2 mx-5 mt-5 md:mt-0">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-center text-sm my-3">
            Administra tus {""}
            <span className="text-indigo-600">pacientes y citas</span>
          </p>

          <div className="md:h-screen overflow-y-scroll">
            {pacientes.map((paciente) => {
              return (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-xl text-center">
            No hay pacientes registrados
          </h2>
          <p className="text-center text-sm my-3">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600"> y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};
