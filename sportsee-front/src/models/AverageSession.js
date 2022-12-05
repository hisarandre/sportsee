export class AverageSession {
  constructor(data) {
    this._id = data.userId;
    this._sessions = data.sessions;
  }

  get sessions() {
    let sessions = this._sessions;
    return sessions;
  }
}
