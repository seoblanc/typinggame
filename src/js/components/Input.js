import Component from '../core/Component';
class Input extends Component {
  constructor() {
    super();
    this._value = Input.defaultProps.value;
  }

  click(e) {
    console.log(e)
  }

  render(status) {
    return `<input type="text" value="${this.value}" ${status !== 'playing' && 'disabled'}/>`;
  }

  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
}

Input.defaultProps = {
  value: '',
}

export default Input;