import url from '../constants/api';
import axios from 'axios';

class Home {
    constructor(root) {
        this.root = root;
        this.title = 'home';
        this.init();
    }

    init() {
        this.getWords();
    }

    async getWords () {
        console.log(url);
        await axios.get(url).then(res => {
            console.log(res);
        });
        console.log(data);
    }

    render() {
        const container = document.createElement('div');
        const title = document.createElement('h1');
        title.innerHTML = '타자게임!';
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

export default Home;