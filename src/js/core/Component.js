import Store from '../store';

class Component {
  // 생성자
  constructor(props = {}) {
    if (props.state) {
      this._state = props.state;
    }
    if (props.element) {
      this.element = props.element;
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
  render() {
    if (!this.element) return;
    this.element.append(this.template());
    this.onMount();
  }
  // 렌더 후 실행 함수
  onMount() {
    // this.setEvent();
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