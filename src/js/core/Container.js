import Store from '../store';

class Container {
  // 생성자
  constructor(props = {}) {
    if (props.store && props.store instanceof Store) {
      // props.store.subscribe(() => this.render());
      this.store = props.store;
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
    console.log(this.template());
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
}

export default Container;