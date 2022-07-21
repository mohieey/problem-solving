var fibonacci = (i) => {
  if (i < 2) return i;

  return fibonacci(i - 1) + fibonacci(i - 2);
};

console.log(fibonacci(8));
