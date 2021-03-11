import { create } from '../utils/render';

class Button extends Comment {
    constructor() {
        super();
        this._label = Button.defaultProps.label;
    }

    click(e) {
        console.log(e)
    }

    template() {
        const btn = create('button', {
            children: this.label,
            event: { 'click': this.click }
        })
        console.log(btn);
        return btn;
    }

    render() {
    }

    get label() {
        return this._label;
    }
    set label(label) {
        this._label = label;
    }
}

Button.defaultProps = {
    label: '시작'
}

export default Button;