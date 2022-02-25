
export default class HttpResponse<T> {
  // eslint-disable-next-line no-useless-constructor
  constructor (
      public status: number,
      public body: {
          message: string;
          data?: T;
      }
  ) { };
}
