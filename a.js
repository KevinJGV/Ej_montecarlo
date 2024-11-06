function calculo() {
  let diana = 0;
    for (let i = 0; i <= 1_000_000; i++) {
      x = Math.random() * 2;
      y = Math.random() * 2;
      if (x*x + y*y <= 1) {
        diana++;
      };
    };
    return 4*diana/1_000_000
};

console.log(calculo());
