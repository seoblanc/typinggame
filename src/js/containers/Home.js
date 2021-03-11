import url from '../constants/api';
import axios from 'axios';
import Interface from '../core/Interface';

class Home extends Interface {
  init() {
    this.getWords();
    console.log(this);
  }

  async getWords () {
    const { data } = await axios.get(url);
    console.log(data);
    super.render();
  }

  template() {
    return `
    <div>
      <span>남은 시간 : ${this.state.current.time}초</span>
    </div>`
  }

  render() {
    console.log('render');
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