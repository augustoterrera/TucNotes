class Validations{
    static register(username, email, password, name, lastname){
        if (!username || !email || !password || !name || !lastname) {
            throw new Error('Todos los campos son obligatorios')
        }
        return true
    }
    static password(password){
        if (password.length < 8) {
            throw new Error('La contraseña debe tener al menos 8 caracteres')
        }
        return true
    }
    static email = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        if (!emailRegex.test(email)) {
          throw new Error('Correo electrónico no válido')
        }
        return true
      }
}

export default Validations