import { useState, useEffect } from "react";
import { ErrorFormulario } from "./ErrorFormulario";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const alert = (icon = "success", title = "Signed in successfully") => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icon,
    title: title,
  });
};

export const Formulario = ({
  pacientes,
  setPacientes,
  paciente,
  setPaciente,
}) => {
  // STATES
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fechaAlta, setFechaAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);

  // USE EFFECT
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setModoEdicion(true);
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFechaAlta(paciente.fechaAlta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDACIÓN
    if ([nombre, propietario, email, fechaAlta, sintomas].includes("")) {
      setError(true);
      return;
    }

    // OBJETO
    if (modoEdicion) {
      const objetoPaciente = {
        id: paciente.id,
        nombre,
        propietario,
        email,
        fechaAlta,
        sintomas,
      };

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === objetoPaciente.id ? objetoPaciente : pacienteState
      );

      setPacientes([...pacientesActualizados]);
      setPaciente({});
      alert("success", "Paciente editado con éxito");
    } else {
      const objetoPaciente = {
        id: Date.now(),
        nombre,
        propietario,
        email,
        fechaAlta,
        sintomas,
      };
      setPacientes([...pacientes, objetoPaciente]);
      alert("success", "Paciente agregado con éxito");
    }

    // REINICIAR FORM
    setNombre("");
    setPropietario("");
    setEmail("");
    setFechaAlta("");
    setSintomas("");
    setError(false);
    setModoEdicion(false);
  };

  return (
    <div className="md:w-1/2 mx-3">
      <h2 className="font-black text-xl text-center">Seguimiento pacientes</h2>
      <p className="text-center text-sm my-3">
        Añade pacientes y {""}
        <span className="text-indigo-600">administralos</span>
      </p>

      <form
        className="bg-white shadow-md mx-auto rounded-lg p-5 text-sm"
        onSubmit={handleSubmit}
      >
        {error && (
          // <ErrorFormulario mensaje="Todos los campos son obligatorios." />
          <ErrorFormulario>Todos los campos son obligatorios.</ErrorFormulario>
        )}
        <div className="mb-2">
          <label
            htmlFor="mascota"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre mascota
          </label>
          <input
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 rounded-md"
            id="mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="propietario"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre propietario
          </label>
          <input
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 rounded-md"
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-gray-700 font-bold uppercase"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            placeholder="Correo electrónico del propietario"
            className="border-2 w-full p-2 mt-2 rounded-md"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="alta"
            className="block text-gray-700 font-bold uppercase"
          >
            Fecha alta
          </label>
          <input
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md"
            id="alta"
            value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 font-bold uppercase"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="Describe los síntomas presentados"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-800 rounded-lg cursor-pointer transition:all duration-300 ease-in-out"
          value={modoEdicion ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};
