const add = (a,b) => a + b;

test('Should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

const generateGreeding = (name) => `Hello ${name}!`;

test('Should generateGreeding form the name', () => {
    const result = generateGreeding('Muthu');
    expect(result).toBe('Hello Muthu!')
})