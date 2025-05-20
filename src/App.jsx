import { useState, useEffect} from 'react';
import Formulario from './Formulario';
import ListadoCitas from './ListadoCitas';
import './App.css';

function App() {
  const [citas, setCitas] = useState([
    // {
    //   id: "1",
    //   mascota: "Nina",
    //   propietario: "Martin",
    //   fecha: "2021-08-05",
    //   hora: "08:20",
    //   sintomas: "Le duele la pierna"
    // },
    // {
    //   id: "2",
    //   mascota: "Sifon",
    //   propietario: "Flecha",
    //   fecha: "2023-08-05",
    //   hora: "09:24",
    //   sintomas: "Duerme mucho"
    // }
  ]);

  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, {...nuevaCita, id: Date.now()}]);
  };

  const eliminarCita = (id) => {
    setCitas(citas.filter(cita => cita.id !== id));
  };

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario onAgregarCita={agregarCita} />
          </div>
          <div className="one-half column">
            <ListadoCitas citas={citas} onEliminarCita={eliminarCita} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;