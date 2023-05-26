var bcrypt = require("bcryptjs");

const createPasswordHash = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 8, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const checkPassword = (user, password) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports.createPasswordHash = createPasswordHash;
module.exports.checkPassword = checkPassword;


// Observação
// Tive que utilizar promises para que o cálculo de hash fosse realizado antes de retornar a resposta ao cliente.
// Tive que importar o bcryptjs de modo CommonJS, pois o node-gyp não reconhece o bcryptjs.
// Tive que exportar a função createPasswordHash e checkPassword utilizando modo CommonJS.

// Observation
// I had to use promises to calculate the hash before returning the response to the client.
// I had to import bcryptjs in CommonJS mode, because node-gyp doesn't recognize it.
// I had to export the functions createPasswordHash and checkPassword using CommonJS mode.