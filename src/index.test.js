import func from '.'

test('print hello', () => {
  const result = func()

  expect(result).toBe('Hello, this is my second version.')
})