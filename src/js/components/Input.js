import Interface from "../core/Interface";

class Input extends Interface{
  init() {
    this.state = {
      value: '',
    }
  }
  template() {
    const { value } = this.state;
    return `
      <input
        class="input-field"
        type="text"
        placeholder='${Input.defaultProps.placeholer}'
        value='${value}'
      />
    `
  }
}

Input.defaultProps = {
  placeholer: '단어를 입력하세요'
}

export default Input;