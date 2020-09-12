
export const heavyProcess = (iterations: number) => {
  for (let i = 0; i < iterations; i++) {
    console.log('some log');
  }
  return `${iterations} iterations done`;
};
