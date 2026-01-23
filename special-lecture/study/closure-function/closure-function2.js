function counterMaker() {
  let total = 0;

  return function () {
    return ++total;
  };
}

counter1 = counterMaker();
counter2 = counterMaker();
counter3 = counterMaker();

console.log(counter1());
console.log(counter2());
console.log(counter3());
