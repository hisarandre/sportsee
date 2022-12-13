export class User {
  constructor(data) {
    this._id = data.id;
    this._keyData = data.keyData;
    this._todayScore = data.todayScore;
    this._userInfo = data.userInfos;
  }

  get firstName() {
    let firstName = this._userInfo.firstName;
    return firstName;
  }

  get todayScore() {
    let todayScore = this._todayScore;
    return todayScore;
  }

  get nutrients() {
    let nutrients = this._keyData;
    return nutrients;
  }

  get calorieCount() {
    let calorieCount = this._keyData.calorieCount;
    return calorieCount;
  }

  get proteinCount() {
    let proteinCount = this._keyData.proteinCount;
    return proteinCount;
  }

  get carbohydrateCount() {
    let carbohydrateCount = this._keyData.carbohydrateCount;
    return carbohydrateCount;
  }

  get lipidCount() {
    let lipidCount = this._keyData.lipidCount;
    return lipidCount;
  }
}
