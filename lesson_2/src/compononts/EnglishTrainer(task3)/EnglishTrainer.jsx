import { use, useState } from "react";
import styles from "./EnglishTrainer.module.css";
//Задача 3. Елемент тренажера англійської. Виводимо зображення елемента і слово. Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре. Молодець!» (і додаємо зелену рамку до елемента), якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).

function EnglishTrainer() {
  const task = [
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xlNhhRhm9TwkRtRi-HtKPYgPthq0w8-0Nh1J3_zecBn5f6_h11cw0Djw&s=10",
      title: "Dog",
      correctAnswer: "собака",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2A3qCp92KV049txoiA9AWScU1oj2xbIJmj8zOZ5le0Ltda57-n2SYz1b0&s=10",
      title: "Plane",
      correctAnswer: "літак",
    },
    {
      imgSrc:
        "https://forest.gov.ua/storage/app/resources/resize/820_360_0_0_auto/img_fa911dbc90c0db455b0ceda513ffe80d.png",
      title: "Forest",
      correctAnswer: "ліс",
    },
    {
      imgSrc:
        "https://content.presspage.com/uploads/2341/1920_p-bus-eot-lionscity18e-koeln-02.jpg?10000",
      title: "Bus",
      correctAnswer: "автобус",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzYcNwXmenMlmDypvTUcn20NQN-WIYmEkRm44-7_PXuo7u5bryOludzY&s=10",
      title: "Water",
      correctAnswer: "вода",
    },
  ];
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [haveCorrectAnswer, setHaveCorrectAnswer] = useState(false);
  const [msg, setMsg] = useState("");
  function checkAnswer() {
    if (
      userAnswer.toLowerCase().trim() === task[currentQuestionNum].correctAnswer
    ) {
      setHaveCorrectAnswer(true);
      setMsg("Добре. Молодець!");
    } else setMsg("Невірно, спробуйте ще раз");
  }
  console.log(!!msg);
  function nextTask() {
    setCurrentQuestionNum(
      currentQuestionNum !== task.length - 1 ? (prevNum) => prevNum + 1 : 0,
    );
    setUserAnswer("");
    setHaveCorrectAnswer(false);
    setMsg("");
  }
  return (
    <div>
      <p style={{ color: "blue" }}>Задача 3</p>
      <div
        className={`${styles.questionBody}
        ${
          msg
            ? haveCorrectAnswer
              ? styles.correctAnswer
              : styles.inCorrectAnswer
            : styles.noAnswer
        }`}
      >
        {msg && <p>{msg}</p>}
        <div className={styles.pictureBody}>
          <img src={task[currentQuestionNum].imgSrc} />
        </div>
        <p>{task[currentQuestionNum].title}</p>
        <label>
          Ваш переклад
          <input
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            type="text"
          />
        </label>
        {!haveCorrectAnswer && (
          <button onClick={checkAnswer}>Перевірити</button>
        )}
        {haveCorrectAnswer && <button onClick={nextTask}>Далі</button>}
      </div>
    </div>
  );
}

export default EnglishTrainer;
