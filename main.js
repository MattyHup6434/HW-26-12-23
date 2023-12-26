const root = ReactDOM.createRoot(document.querySelector("#root"));

const Counter = ({ item: { id, number }, hdlUpdate, hdlDelete }) => {
  return (
    <div className="content">
      <button className="btn btn-1" onClick={() => hdlUpdate(id, 1)}>
        +
      </button>
      <button className="btn">{number}</button>
      <button className="btn btn-3" onClick={() => hdlUpdate(id, -1)}>
        -
      </button>
      <button className="btn btn-4" onClick={() => hdlUpdate(id, -number)}>
        C
      </button>
      <button className="btn btn-x" onClick={() => hdlDelete(id)}>
        X
      </button>
    </div>
  );
};

//สู้ ๆ นะเพื่อนพวกนายทำได้

const Show = () => {
  const [counterCount, setCounterCount] = React.useState([
    { id: 1, number: 0 },
  ]);

  const hdlUpdate = (id, num) => {
    const cloneCounters = [...counterCount];
    let idx = cloneCounters.findIndex((el) => el.id === id);
    if (cloneCounters[idx].number + num < 0) {
      return;
    }
    cloneCounters[idx].number += num;
    setCounterCount(cloneCounters);
  };

  const halAddCounter = () => {
    let newId = counterCount.length === 0 ? 1 : counterCount.at(-1).id + 1;
    setCounterCount([...counterCount, { id: newId, number: 0 }]);
    console.log(newId);
  };

  const hdldelCounter = (id) => {
    setCounterCount((delCounter) => delCounter.filter((el) => el.id !== id));
  };

  let isSum = 0;
  for (let itm of counterCount) {
    isSum += itm.number;
  }
  // const isSum = counterCount.redcue((sum, itm) => sum + itm.number, 0);
  return (
    <>
      <div>
        <div className="container">
          <div className="head">
            <h1>SUM = {isSum}</h1>
            <button className="btnAd" onClick={halAddCounter}>
              Add Counter
            </button>
          </div>
          {counterCount.map((el) => (
            <Counter
              key={el.id}
              item={el}
              hdlUpdate={hdlUpdate}
              hdlDelete={hdldelCounter}
            />
          ))}
        </div>
      </div>
    </>
  );
};

root.render(<Show />);
