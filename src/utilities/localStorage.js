const getStoredData = () => {
  const storedData = localStorage.getItem("donations");
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    return [];
  }
};

const saveToLocalStorage = (id) => {
  const storedData = getStoredData();
  const exists = storedData.find((storedId) => storedId === id);
  if (!exists) {
    storedData.push(id);
    localStorage.setItem("donations", JSON.stringify(storedData));
  }
};

export { getStoredData, saveToLocalStorage };
