import AppError from './AppError';

describe('AppError', () => {
  it('should return error message and status error', () => {
    const mock = { message: 'Error message', statusCode: 400 };
    const error = new AppError(mock.message, mock.statusCode);

    expect(error.message).toBe(mock.message);
    expect(error.statusCode).toBe(mock.statusCode);
  });
});
