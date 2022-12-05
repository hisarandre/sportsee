export class Performance {
  constructor(data) {
    this._id = data.userId;
    this._kind = data.kind;
    this._data = data.data;
  }
}
