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
    this.components = {};
    this.init();
  }
  // 초기 실행 함수
  init() {
  }
  // 구현부
  render() {
    // if (this.parent) {
    //   this.parent.appendChild(this.element);
    // } else {
    //   const fragment = document.createDocumentFragment();
    //   fragment.appendChild(this.element);
    // }
    this.onMount();
  }
  // 렌더 후 실행 함수
  onMount() {
    // this.setEvent();
  }
  onUpdate() {
    // this.render();
  }
  onUnmout() {
  }
}

export default Container;