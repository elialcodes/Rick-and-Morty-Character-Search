// Fichero src/services/localStorage.js

// Función que obtiene una propiedad del local storage
// Si esta propiedad no existe porque es la primera vez que la usuaria entra en la página, la función devuelve el valor de defaultValue
// Que esta función devuelva un valor por defecto es una cómoda manera de trabajar, así esta comprobación no la tenemos que hacer en App.js
const get = (key, defaultValue) => {
  const localStorageData = localStorage.getItem(key);
  if (localStorageData === null) {
    return defaultValue;
  } else {
    return JSON.parse(localStorageData);
  }
};

// Función que guarda una propiedad y su valor en el local storage
const set = (key, value) => {
  const localStorageData = JSON.stringify(value);
  localStorage.setItem(key, localStorageData);
};

// Creamos un objeto temporal, que es el que queremos exportar
// Este objeto tiene una propiedad get cuyo valor es la función get
// Este objeto tiene una propiedad set cuyo valor es la función set
const objectToExport = {
  get: get,
  set: set,
};

// Exportamos el objeto para que pueda ser usado desde App
export default objectToExport;
