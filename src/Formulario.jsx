import { useState } from 'react';
import './Formulario.css';

const Formulario = ({ onAgregarCita }) => {
  const [formData, setFormData] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.values(formData).some(val => val.trim() === '')) return;
    onAgregarCita(formData);
    setFormData({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  };

  return (
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          value={formData.mascota}
          onChange={(e) => setFormData({...formData, mascota: e.target.value})}
        />
        
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={formData.propietario}
          onChange={(e) => setFormData({...formData, propietario: e.target.value})}
        />
        
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          value={formData.fecha}
          onChange={(e) => setFormData({...formData, fecha: e.target.value})}
        />
        
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          value={formData.hora}
          onChange={(e) => setFormData({...formData, hora: e.target.value})}
        />
        
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          value={formData.sintomas}
          onChange={(e) => setFormData({...formData, sintomas: e.target.value})}
        ></textarea>
        
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
  );
};

export default Formulario;