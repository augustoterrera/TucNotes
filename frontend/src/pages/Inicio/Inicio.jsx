import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Inicio = () => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const checkAuth = async () => {
        try {
          const response = await axios.get('http://localhost:3000/protected', { withCredentials: true })
          if(response.status === 200){
            setUserData(response.data)
          }
        } catch (error) {
          console.error('Error al decodificar el token:', error);
        }
    };

    checkAuth()
  }, [])
  if (!userData) {
    // Si userData es null, muestra un mensaje de carga o un error
    return <div>Cargando...</div>;

  }
  return (
    <div>
      <h1>Hola {userData.name} {userData.lastname} </h1>
      <h2>Usuario: {userData.username}</h2>
    </div>
  )
}

export default Inicio
