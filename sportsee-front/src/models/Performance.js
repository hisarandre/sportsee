export class Performance {
  constructor(data) {
    this._id = data.userId;
    this._kind = data.kind;
    this._data = data.data;
  }

  get data() {
    const categoryFR = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];

    const data = this._data.map((perf, index) => {
      return {
        kind: categoryFR[index],
        value: perf.value,
        fullMark: 250,
      };
    });

    return data;
  }
}
