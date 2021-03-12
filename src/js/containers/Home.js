import url from '../constants/api';
import axios from 'axios';
import Container from '../core/Container';
import Button from '../components/Button';

class Home extends Container {
  init() {
    this.getWords();
  }

  async getWords () {
    const { data } = await axios.get(url);
    this.store.state = { words: data, status: 'ready' };
    this.render();
  }

  template() {
    const { current, score } = this.store.state;
    const { time, word } = current;
    const btn = new Button();
    return `
    <div>
      <span>남은 시간 : ${time}초</span>
      &nbsp;
      <span>점수 : ${score}점</span>
      <h1>${word ? word : '문제 단어'}</h1>
      ${btn.template()}
    </div>`
  }

  // render() {
  //   console.log('render');
  //   const container = document.createElement('div');
  //   const title = document.createElement('h1');
  //   title.innerHTML = '타자게임!';
  //   const btn1 = document.createElement('button');
  //   const btn2 = document.createElement('button');
  //   btn1.innerHTML = 'home';
  //   btn1.addEventListener('click', () => location.hash = '');
  //   btn2.innerHTML = 'result';
  //   btn2.addEventListener('click', () => location.hash = 'result');
  //   container.appendChild(title);
  //   container.appendChild(btn1);
  //   container.appendChild(btn2);
  //   return container;
  // }
}

export default Home;