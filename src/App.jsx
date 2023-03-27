import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { ListadoPacientes } from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // LOCAL STORAGE
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes"));
      pacientesLS?.length > 0 && setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesFiltrados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes([...pacientesFiltrados]);
  };

  return (
    <div className="container mx-auto my-5">
      <Header />
      <div className="mt-10 md:flex gap-3">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
