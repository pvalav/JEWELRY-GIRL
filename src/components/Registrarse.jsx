import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../style/Registrarse.css";

const Registrarse = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(formData.nombre);
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo);
    const contraseñaValida = /^[0-9]{7}$/.test(formData.contraseña); // 7 dígitos

    if (!nombreValido) return alert("El nombre solo debe contener letras.");
    if (!correoValido) return alert("Por favor ingresa un correo válido con '@'.");
    if (!contraseñaValida) return alert("La contraseña debe tener exactamente 7 números.");

    try {
      await createUserWithEmailAndPassword(auth, formData.correo, formData.contraseña);
      alert("Cuenta creada correctamente ✅");
      navigate("/login"); // Redirige a Login
    } catch (error) {
      alert("Error al crear cuenta: " + error.message);
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-box">
        <h2 className="registro-title">Crear Cuenta</h2>

        <form className="registro-form" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+"
            required
          />
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="tu@email.com"
            value={formData.correo}
            onChange={handleChange}
            required
          />
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            placeholder="7 dígitos"
            value={formData.contraseña}
            onChange={handleChange}
            pattern="[0-9]{7}"
            maxLength="7"
            required
          />

          <div className="registro-boton-container">
            <button type="submit" className="btn-aceptar">Aceptar</button>
          </div>
        </form>

        <p className="registro-info">Esta plataforma es un sistema de apartado</p>
      </div>
    </div>
  );
};

export default Registrarse;
