const randomDay = () => {
  return Math.floor((Math.random() * 28) + 1).toString();
}

const randomMonth = () => {
  return Math.floor((Math.random() * 12) + 1).toString();
}

export const generateEvents = () => {
  let arr = [];
  for (let i = 0; i < 500; i++) {
    arr.push({
      title: `event ${i}`,
      start: `2017-${randomMonth()}-${randomDay()}`,
      color: 'red'
    });
  }

  arr.push({
    title: 'event setahun',
    start: '2017-01-01',
    end: '2017-12-31'
  });

  return arr;
};
