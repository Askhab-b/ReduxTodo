import React, { useState } from "react";
import styles from "./app.module.css";
import { useDispatch, useSelector } from "react-redux";
import img from "./img/redux.svg";

function App() {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.customers);
  console.log(customers);

  const [text, setText] = useState("");
  const [checktodo, setChecktodo] = useState(false);

  const addCustomer = () => {
    dispatch({ type: "ADD_CUSTOMER", payload: text });
    setText("");
  };

  const removeCustomer = (index) => {
    dispatch({ type: "REMOVE_CUSTOMER", payload: index });
  };

  

  return (
    <div className={styles.app}>
      <div>
        <div className={styles.inputBlock}>
          <input
            placeholder="Введите текст..."
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <button className={styles.btn} onClick={() => addCustomer()}>
            Добавить ToDo
          </button>
        </div>
        {customers.map((todo, index) => {
          return (
            <div>
              <div
                onClick={() => removeCustomer(index)}
                className={styles.container}
              >
                {todo}
              </div>
              <input type="checkbox"></input>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
