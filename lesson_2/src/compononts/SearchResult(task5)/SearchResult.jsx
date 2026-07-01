//Задача 5. Самостійно сформуйте масив даних та виведіть фрагмент на зразок поданого (дані не обов’язково повинні співпадати)
import styles from "./SearchResult.module.css";
function SearchResult() {
  const list = [
    {
      websiteName: "Фрілансер по життю",
      title: `YouTube · Фрілансер по життю`,
      subTitle: `Підписників: понад 297 тис.`,
      link: `https://www.youtube.com/@FreelancerLifeStyle`,
      icon: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhUlEQVR4AWNwL/ChCFPHgP8MxqxA7ArEKVBcCcUNIAznI+RdQXrABgAZpv8ZjP6Tg0F6QQbsosCAXSADHmGVVPIC0jKEDHgAMuAbmgRE445D///feYzXIJBeBigH04BVW/9DAcgwqEGYaik2gGIvUByIlEbjDooTEiwps5GRlNmolpkowgBVP9wMSzSKGAAAAABJRU5ErkJggg==`,
      text: `Фриланс для начинающих. Правильный старт на фрилансе // Фрилансер по жизни · Три простых шага для начинающего фрилансера: 1) Оформление профиля на фриланс ...`,
    },
    {
      websiteName: `Фрілансер по життю - курс по верстці. HTML CSS JavaScript`,
      title: `живи, а працюй у вільний час!`,
      subTitle: `https://edu.fls.guru`,
      link: `https://edu.fls.guru/`,
      icon: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABeElEQVR4AWOICy7GRN0pMRNzs7BKYdGwuCbrzITE/Y0RE/MSCWtozsrbVuF7ojtyYriRBztDlGs0AQ17G4MOdGQ92DF/ZVXq0oK42rg4fBrKkwseLEt/sL77/4Oz306sBKLXR9aja0Dz6+GeiBMzGyZnBWeayM9K9ukId6jNLMOpYUlF3pxYtzOTW3K83LriAo93lHTEhhVFJOLUML+4brKH+cfdq/7u23qpo+Luwqnv1y7Z0TUFp4bM8CKgM3aXB28vigJaVWCqVWttsK4kk0CwBvMxANGFKcVAJwG1ZTna4tMwtWXilu5aFz6uWFmO03XuN7oC0rzD8Wm4dX3f/+cngfFQ6m4bpSAKNB4ad5gayhwzulX9N2eWAsMeqAdIAgMXe9LINYsoUveokbHPZtYNZZDOl7cGugqo58Leab0JqZlO6SgagNJN0o5AlCBiAGTDtU3yjpqdlJooYQAUj5KzAhqa5JmJogGoFEhCEEQbEAEZyAioDQBTkDmuTeMsZwAAAABJRU5ErkJggg==`,
      text: `Загальна програма курсу · JS Введення та синтаксис · JS Змінні та масиви · JS робота з DOM (взаємодія JS HTML CSS) · Тестування верстки · Практика на вибір ...`,
    },
    {
      websiteName: `Фрілансер по життю - живи, а працюй у вільний час ...`,
      title: `живи, а працюй у вільний час!`,
      subTitle: `https://edu.fls.guru`,
      link: `https://fls.guru/`,
      icon: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABeElEQVR4AWOICy7GRN0pMRNzs7BKYdGwuCbrzITE/Y0RE/MSCWtozsrbVuF7ojtyYriRBztDlGs0AQ17G4MOdGQ92DF/ZVXq0oK42rg4fBrKkwseLEt/sL77/4Oz306sBKLXR9aja0Dz6+GeiBMzGyZnBWeayM9K9ukId6jNLMOpYUlF3pxYtzOTW3K83LriAo93lHTEhhVFJOLUML+4brKH+cfdq/7u23qpo+Luwqnv1y7Z0TUFp4bM8CKgM3aXB28vigJaVWCqVWttsK4kk0CwBvMxANGFKcVAJwG1ZTna4tMwtWXilu5aFz6uWFmO03XuN7oC0rzD8Wm4dX3f/+cngfFQ6m4bpSAKNB4ad5gayhwzulX9N2eWAsMeqAdIAgMXe9LINYsoUveokbHPZtYNZZDOl7cGugqo58Leab0JqZlO6SgagNJN0o5AlCBiAGTDtU3yjpqdlJooYQAUj5KzAhqa5JmJogGoFEhCEEQbEAEZyAioDQBTkDmuTeMsZwAAAABJRU5ErkJggg==`,
      text: `На YouTube каналі «Фрілансер по життю», я регулярно і в максимально доступному форматі буду ділитися з тобою своїм досвідом, напрацюваннями, секретами та ...`,
    },
    {
      websiteName: `Фрілансер по життю 🇺🇦 (@freelancer.lifestyle) · Uzhhorod`,
      title: `Instagram · freelancer.lifestyle`,
      subTitle: `Підписників: понад 14,1 тис.`,
      link: `https://www.instagram.com/freelancer.lifestyle/`,
      icon: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABX1BMVEVHcEx3GPlxGft3Ff2RCPKlA+q4AOnEAN7TANnWAc/pDqviANTiAryJF/3vAL7pAbKcGP6zHPjJVebmW97oad3yHc3yBMz0Ba6IHf7PhfL77Pj////1ecX+Ar39BLXuAqT0ue335Or4r+f51vH9///8Aan8AJn88/naOt7SGvX4XMD5G7X+AYv4AIn8GJb+AHzqF+X3wuP4uNn3UpL+AHf6ZKT+AG3+IXj4scv9EnD8K2r6Z5n+AWD5d435vsP+GFz8JE/+LVL9M0T9Myv6g3b+PS39Rj/9M2D+Rhr+UTD5ysz9URD9XRP5WkL99uj8CD36i0j60bv+aSL9PEn9cxz9aQT6lHT5Ykb+hAz+fBH6umn4o0f+jAD+kAX9QQf1lZL727L9dQb+mAP9oAH7ynD8FpL7Yin9pwH+sgD6vhf9zF3+kAf/uQD/wQD9Mmn+rQf/yAD3rA/+wAP/zQH5UzC+zwLvAAAAdXRSTlMAWtL////////FWv/Y///Y///////////F////////xP//////////////////////////////////////////////////////////////////////////////////////xP///8Vb/////9j//9jO/1r6/8T8Mp/KAAAB8UlEQVR4AUXMBdLkNhiE4bf1ybI141nmLUxBmJn5KrlPGI4TTpaxaJkZh21L659qW6ynqgVIAtD6XNs0BYF7ShIIwEBjtGoDZqsiMNjQh17qycaq18vJa1VzqkZ7JhjjnevCmrtHm7Wg0hZgsr8hZNwaJZvHNpUgr952NLUuDylZ12U9Ewi/B86K3koEGRgtapFEkAOeUbg82CmVi3q0rKrFfNFUqgLOlWV5my22i3JL7R8+9DVlVbKZwqzwV5HQbiMuxvWQya26tTaAK3B+FzzMlHHuxrvaJWHXrV0NhIgDZ2bEMGJ4qy4GQ6e2viUMAgQfsc3ngtSxOzVE5sNxlR2r6gfkDuS6iCU6ikRoQguAk6wEszi7qdHIrJqQDNbQzAGFz6+OB80yhE3dqxbWbOkxWjBhb5623dzsrPNsvznrDW9GFbc3AXj5/zG8Gu8LAvNI8ib87OhbGdD7Dt1/7Ef3uUwJjVOMetMa38eK1DZbS3ustMw7re+PeIpZMolMVpOy27k4ytcXAI/Pnq//nL25DfAPoeCPJa8+cIvkfD3zQXx26xBxxnre3HolAu/qm2mQF0gAyykoPc6pG40fnHC/be7NF4W3Ps5vGlWin8C7U+PAJ50X5laSzWWnxsjMn/sOg/8+1obSW06k3L4Qf4InPlCr4J1w0W4AAAAASUVORK5CYII=`,
      text: `Безкоштовні уроки HTML CSS JavaScript YouTube канал Фрілансер по життю Живи, а працюй у вільний час! ©. Follow. Message ...`,
    },
  ];
  return (
    <div>
      <p style={{ color: "blue" }}>Задача 5</p>
      <ul className={styles.searchBody}>
        {list.map((el, i) => (
          <li key={i}>
            <a href={el.link} className={styles.mainBody}>
              <div className={styles.icon}>
                <img src={el.icon} />
              </div>
              <h3 className={styles.title}>{el.title}</h3>
              <h4 className={styles.subTitle}>{el.subTitle}</h4>
            </a>
            <div>
              <a href={el.link} className={styles.websiteName}>
                {el.websiteName}
              </a>
              <p className={styles.text}>{el.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
