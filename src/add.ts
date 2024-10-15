// implement

function add(num1: number, num2: number) {
  if (typeof num1 != 'number' || typeof num2 != 'number') {
    throw new Error('Please provide valid number');
  }

  return num1 + num2;
}

export { add };
