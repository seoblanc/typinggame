class Store {
  constructor(initialState = {}) {
    this._state = initialState;
  }

  get state() {
    return this._state;
  }

  set state(value) {
    this._state = {
      ...this.state,
      ...value
    }
  }
};

export default Store;