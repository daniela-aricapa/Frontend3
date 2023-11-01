import React, { useState } from "react";

function App() {
  // Estado para almacenar los datos del usuario
  const [userData, setUserData] = useState({
    fullName: "",
    age: "",
    favoritePokemon: "",
  });

  // Manejador de cambios en los campos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  // Manejador para el botón de registro
  const handleRegistration = () => {
    // Aquí puedes realizar la lógica de registro con los datos de usuario
    console.log("Datos de usuario registrados:", userData);
    alert("Usuario registrado con éxito.");
  };

  return (
    <div className="App">
      <h1>Formulario de Registro</h1>
      <div>
        <label>Nombre Completo:</label>
        <input
          type="text"
          name="fullName"
          value={userData.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Edad:</label>
        <input
          type="number"
          name="age"
          value={userData.age}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Pokemon Favorito:</label>
        <input
          type="text"
          name="favoritePokemon"
          value={userData.favoritePokemon}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleRegistration}>Registro</button>
    </div>
  );
}

export default App;
