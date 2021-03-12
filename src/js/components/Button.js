import Component from '../core/Component';
class Button extends Component {
  constructor() {
    super();
    this._label = Button.defaultProps.label.initial;
  }

  render(status) {
    `<button class="btn-submit">${Button.defaultProps.label[status]}</button>`
  }

  get label() {
    return this._label;
  }
  set label(label) {
    this._label = label;
  }
}

Button.defaultProps = {
  label: {
    initial: '시작',
    failure: '시작',
    playing: '초기화',
    complete: '다시 시작'
  }
}

export default Button;