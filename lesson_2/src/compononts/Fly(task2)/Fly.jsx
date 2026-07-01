//Задача 2. З випадаючого списку вибираємо клас квитка у літаку. Якщо
//1) бізнес -  виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес кают
//2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.

import { useState } from "react";
import styles from "./Fly.module.css";

function Fly() {
  const [ticket, setTicket] = useState("");
  const [firstOption, setFirstOption] = useState(false);
  const [secondOption, setSecondOption] = useState(false);
  const [bonusOption, setBonusOption] = useState(false);
  const [msg, setMsg] = useState("");
  function changeTicket(event) {
    setTicket(event.target.value);
    setFirstOption(false);
    setSecondOption(false);
  }
  function addOption(event, optionFunction) {
    optionFunction(event.target.checked);
    if (optionFunction === setSecondOption && event.target.checked === false)
      setBonusOption(false);
  }
  return (
    <div>
      <p style={{ color: "blue" }}>Задача 2</p>
      <div>
        <label>
          Оберіть тип квитка
          <select value={ticket} onChange={(e) => changeTicket(e)}>
            <option value="" selected disabled hidden>
              Оберіть квиток
            </option>
            <option value="business">Бізнес</option>
            <option value="econom">Економ</option>
          </select>
        </label>
      </div>
      {ticket && (
        <div>
          <div className={styles.selectBody}>
            <p>Оберіть додаткові пропозиції</p>
            <label>
              {ticket === "business" ? "Газета" : "Чипси"}
              <input
                checked={firstOption}
                onChange={(e) => addOption(e, setFirstOption)}
                type="checkbox"
              />
            </label>
            <label>
              {ticket === "business" ? "Коньяк" : "Пиво"}
              <input
                checked={secondOption}
                type="checkbox"
                onChange={(e) => addOption(e, setSecondOption)}
              />
            </label>
            {ticket === "business" && secondOption && (
              <label>
                Додаткова закуска
                <input
                  checked={bonusOption}
                  type="checkbox"
                  onChange={(e) => addOption(e, setBonusOption)}
                />
              </label>
            )}
            <img
              src={
                ticket === "business"
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmfzZkyOw92wRmpeqdLxixE7tca07m1qd9zlubivMLF1FcKti9PILFgQ&s=10"
                  : "https://static.make.ua/catalog/25/sky-0000139__1399839854__615.jpg"
              }
            />
          </div>
          <div>
            Ваш клас квитка: {ticket === "business" ? "бізнес" : "економ"}.{" "}
            {firstOption || secondOption ? "Обрані додаткові опції:" : ""}
            {firstOption ? (ticket === "business" ? " газета" : " чипси") : ""}
            {firstOption && secondOption && ","}
            {secondOption
              ? ticket === "business"
                ? " коньяк"
                : " пиво"
              : ""}{" "}
            {bonusOption ? " та додаткова закуска" : ""}
          </div>
        </div>
      )}
    </div>
  );
}

export default Fly;
