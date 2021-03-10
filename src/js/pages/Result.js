class Result {
    constructor(root) {
        this.root = root;
        this.title = 'result';
    }

    cacheElement() {

    }

    render() {
        const container = document.createElement('div');
        const title = document.createElement('h1');
        title.innerHTML = '당신의 결과는!!';
        const btn1 = document.createElement('button');
        const btn2 = document.createElement('button');
        btn1.innerHTML = 'home';
        btn1.addEventListener('click', () => location.hash = '');
        btn2.innerHTML = 'result';
        btn2.addEventListener('click', () => location.hash = 'result');
        container.appendChild(title);
        container.appendChild(btn1);
        container.appendChild(btn2);
        return container;
    }
}

export default Result;