//4. Вивести список як маркований список з елементами у форматі (name: salary)

function BulletedList() {
  const workersList2 = [
    {
      id: "111",
      name: "Іванов",
      salary: 10000,
    },
    {
      id: "111",
      name: "Петров",
      salary: 20000,
    },
    {
      id: "111",
      name: "Сидоров",
      salary: 50000,
    },
  ];

  return (
    <div>
      <p style={{ color: "blue" }}>Задача 4</p>
      <ul>
        {workersList2.map((el, i) => (
          <li key={i}>{`${el.name}: ${el.salary}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default BulletedList;
