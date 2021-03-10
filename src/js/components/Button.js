class Button {
    constructor(props) {
        const { title } = props;
        this._title = title;
    }

    click() {

    }

    render() {
        
    }

    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}

Button.defaultProps = {
    TITLE: '시작'
}