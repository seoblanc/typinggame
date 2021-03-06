class Component {
  // 생성자
  constructor(props = {}) {
    if (props.element) {
      this.element = props.element;
    } else {
      this.element = document.createDocumentFragment();
    }

    this.init();
  }
  // 초기 실행 함수
  init() {

  }
  template() {
    return '';
  }
  // 엘리먼트 렌더링 함수
  render(){
    this.element.innerHTML = this.template();
    this.onMount();
  }
  // 렌더 후 실행 함수
  onMount() {
    this.bindEvent();
  }
  bindEvent() {
  }
  onUpdate() {
    this.render();
  }
  onUnmout() {
  }
  get state() {
    return this._state;
  }
  set state(value) {
    switch (typeof this._state) {
      case 'string':
      case 'number':
      case 'boolean':
        this._state = value;
        break;
      case 'object':
        if (!this._state) break;
        Array.isArray(this._state)
        ? (this._state = [...this.state, value])
        : this._state = {...this.state, value}
        break;
      case 'undefined':
        break;
      default:
        this._state = {
          ...this.state,
          value
        }
        break;
    }
    this.onUpdate();
  }
}

export default Component;