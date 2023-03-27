import { useState } from "react";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { ListadoPacientes } from "./components/ListadoPacientes";

const listaPacientes = [
  {
    id: 1,
    nombre: "Toby",
    propietario: "Juan",
    email: "juan@correo.com",
    fechaAlta: "2021-01-01",
    sintomas: "No come",
  },
  {
    id: 2,
    nombre: "Luna",
    propietario: "Pepe",
    email: "pepe@correo.com",
    fechaAlta: "2022-10-11",
    sintomas: "No duerme",
  },
];

function App() {
  const [pacientes, setPacientes] = useState(listaPacientes);
  const [paciente, setPaciente] = useState({});

  return (
    <div className="container mx-auto my-5">
      <Header />
      <div className="mt-10 md:flex gap-3">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} />
      </div>
    </div>
  );
}

export default App;
