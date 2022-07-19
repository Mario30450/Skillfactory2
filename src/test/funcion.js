const getSaludo = (nombre) => {
  return `hola ${nombre}`;
};

const getUser = () => {
  return { uid: "ABC123", username: "Agosto" };
};

module.exports = { getSaludo, getUser };
