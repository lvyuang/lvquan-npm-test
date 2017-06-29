import func from '.'

test('print hello', () => {
  const result = func()

  expect(result).toBe('hello')
})