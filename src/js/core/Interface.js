class Interface {
  // 생성자
  constructor(state, element) {
    this._state = state;
    this._element = element;
    this.init();
  }
  // 초기 실행 함수
  init() {
  }
  template() {
    return '';
  }
  // 엘리먼트 렌더링 함수
  render() {
    console.log('render');
    this._element.innerHTML = this.template();
    this.onMount();
  }
  // 렌더 후 실행 함수
  onMount() {
    this.setEvent();
  }
  // 이벤트 바인딩 함수
  setEvent() {
  }
  onUpdate() {
    this.render();
  }
  onUnmout() {
  }
  static get state () {
    return this._state;
  }
  static set state(state) {
    this._state = {...this._state, ...state };
    this.onUpdate(this._state);
  }
}

export default Interface;