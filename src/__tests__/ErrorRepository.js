import ErrorRepository from "../js/ErrorRepository";

test("test error repository with error", () => {
  const errorRepository = new ErrorRepository();
  errorRepository.errors.set(123, 'Ошибка 123')
  errorRepository.errors.set(234, 'Ошибка 234')
  expect(errorRepository.translate(123)).toBe('Ошибка 123');
});

test("test error repository without error", () => {
  const errorRepository = new ErrorRepository();
  errorRepository.errors.set(123, 'Ошибка 123')
  errorRepository.errors.set(234, 'Ошибка 234')
  expect(errorRepository.translate(345)).toBe('Unknown error');
});

