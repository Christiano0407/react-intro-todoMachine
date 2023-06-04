//**? ==== =========  === LocalStorage === ===========  ==== */
import { useState } from "react";

//const local = localStorage.setItem("TODO_V1", Data);
//localStorage.setItem("TODO_V1", JSON.stringify(Data));
//localStorage.setItem("TODO_V1", JSON.parse(Data));
//localStorage.removeItem("TODO_V1", Data);

export function useLocalStorage(itemName, initialValue) {
  //let dataParsedTodo = JSON.parse(dataLocalStorageTodo);
  const dataLocalStorageItem = localStorage.getItem(itemName);

  let dataParsedItem;

  if (!dataLocalStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    dataParsedItem = initialValue;
  } else {
    dataParsedItem = JSON.parse(dataLocalStorageItem);
  }
  const [item, setItem] = useState(dataParsedItem);

  const saveItem = (newPlusTodo) => {
    localStorage.setItem(itemName, JSON.stringify(newPlusTodo));
    setItem(newPlusTodo);
  };

  return [item, saveItem];
}
