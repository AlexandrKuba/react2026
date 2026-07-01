//Задача 6. Задача. На кухню поступають замовлення. Спочатку ми додаємо їх у список “Очікують на виконання”, якщо повар береться робити — замовлення переходить у список “Виконуються”,   якщо замовлення виконано — переходить у список “Готові до виносу”. Якщо натиснути на “Подано” - страва зникає з таблиці

import { useState } from "react";
import styles from "./Kitchen.module.css";

function Kitchen() {
  const [waitingList, setWaitingList] = useState([]);
  const [processingList, setProcessingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [newFood, setNewFood] = useState("");
  function addNewFood() {
    if (newFood.trim()) {
      setWaitingList((prevList) => [...prevList, newFood.trim()]);
      setNewFood("");
    }
  }
  function goToProcess(food) {
    setProcessingList((prevList) => [...prevList, food]);
    setWaitingList((prevList) =>
      prevList.toSpliced(
        prevList.findIndex((el) => el === food),
        1,
      ),
    );
  }
  function goToCompleted(food) {
    setCompletedList((prevList) => [...prevList, food]);
    setProcessingList((prevList) =>
      prevList.toSpliced(
        prevList.findIndex((el) => el === food),
        1,
      ),
    );
  }
  function done(food) {
    setCompletedList((prevList) =>
      prevList.toSpliced(
        prevList.findIndex((el) => el === food),
        1,
      ),
    );
  }
  return (
    <div>
      <p style={{ color: "blue" }}>Задача 6</p>
      <div>
        <label>
          Нова замовлена страва:
          <input
            value={newFood}
            onChange={(e) => setNewFood(e.target.value)}
            type="text"
          />
          <button onClick={addNewFood} type="button">
            Додати
          </button>
        </label>
      </div>
      <div className={styles.kitchenBody}>
        <div className={styles.process}>
          <h3 className={styles.title}>Очікують на виконання</h3>
          <ul>
            {waitingList.map((el, i) => (
              <li key={i} className={styles.item}>
                <p>{el}</p>
                <button onClick={() => goToProcess(el)}>Готувати</button>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.process}>
          <h3 className={styles.title}>Виконується</h3>
          <ul>
            {processingList.map((el, i) => (
              <li key={i} className={styles.item}>
                <p>{el}</p>
                <button onClick={() => goToCompleted(el)}>Приготовлено</button>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.process}>
          <h3 className={styles.title}>Готові до виносу</h3>
          <ul>
            {completedList.map((el, i) => (
              <li key={i} className={styles.item}>
                <p>{el}</p>
                <button onClick={() => done(el)}>Подано</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Kitchen;
