const repository = new Map();

export default class ErrorRepository {
  constructor(code, description) {
    this.code = code;
    this.description = description;

    repository.set(this, { code, description });
  }

  translate(code) {
    return (code === error.code) ? repository.get(this).description : 'Unknown error';
  }
}

const error = new ErrorRepository();
repository.set(123, 'Ошибка 123')
console.log(error, repository)