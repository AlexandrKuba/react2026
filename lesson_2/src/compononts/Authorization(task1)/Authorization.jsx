import { useState } from "react";
import styles from "./Authorization.module.css";
//Задача 1. Вводимо логін і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:
//1) якщо логін = Іван – колір повідомлення про помилку синій
//2) якщо хтось інший, то колір повідомлення червоний

function Authorization() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [correctLogin, setCorrectLogin] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgClass, setMsgClass] = useState(styles.logOn__cancel);
  const users = [{ login: "Login", password: "password" }];

  function logOn() {
    if (!login) {
      setMsg("Введіть логін");
      return;
    }
    for (const user of users) {
      if (user.login === login) {
        setCorrectLogin(true);
        if (user.password === pass) {
          setMsg("Вхід дозволено");
          setMsgClass(styles.logOn__confirm);
        } else {
          setMsg("Не правильний пароль");
        }
        break;
      } else {
        setCorrectLogin(false);
        setMsg("Не правильний логін");
      }
    }
    if (login === "Іван") setMsgClass(styles.logOn__ivan);
    if (!pass) setMsg("Введіть пароль"); //Перевіряємо вкінці, а не спочатку, щоб відобразити смайл, за потреби, та перевірити чи логін === Іван
  }
  return (
    <div>
      <p style={{ color: "blue" }}>Задача 1</p>
      <div>
        <label>
          Логін:
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>
        <label>
          Пароль:
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <button type="button" onClick={logOn}>
          Надіслати
        </button>
        {msg && <div className={msgClass}>{msg}</div>}
        {correctLogin && (
          <img src="https://www.pngarts.com/files/3/Smile-Emoji-Face-PNG-Download-Image.png" />
        )}
      </div>
    </div>
  );
}

export default Authorization;
