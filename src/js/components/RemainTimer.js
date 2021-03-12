import Component from '../core/Component';
class RemainTimer extends Component {
  constructor(second) {
    super();
    this._interval = null;
    this.state = second;
  }

  template() {
    return `<span>남은 시간 : ${second || 0}초</span>`;
  }

  onMount() {
    this._interval = setInterval(() => {
      while(this.state) {
        this.render(--this.state);
      }
    }, 1000)
  }

  onUnmout() {
    clearInterval(this._interval);
  }
}

export default RemainTimer;