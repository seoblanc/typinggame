import url from '../constants/api';
import axios from 'axios';
import Container from '../core/Container';
import Button from '../components/Button';
import Input from '../components/Input';
import RemainTimer from '../components/RemainTimer';

class Home extends Container {
  init() {
    this.getComponent();
    this.render();
  }

  // fetch data
  async getWords () {
    const { data, status, statusText } = await axios.get(url);
    if (status === 200) {
      this.store.state = {
        words: data,
        current: data[0],
        remainCount: --data.length,
        status: 'playing'
      };
    } else {
      alert('문제 생성에 실패하였습니다. 잠시 후 다시 시도해 주십시오.');
      this.store.state = {
        status: 'failure'
      }
    }
    console.log(this.store.state);
    this.render();
  }

  getComponent () {
    this.components = {
      Button: new Button(),
      Input: new Input(),
      Timer: new RemainTimer(),
    }
  }

  render() {
    const { current, score, status } = this.store.state;
    const { second, text } = current;
    const { Button, Input, Timer } = this.components;
    console.log('@@', current);
    const html = `
      <div>
        ${Timer.render(second)}
        <span>점수 : ${score || 0}점</span>
        <h1>${text ? text : '문제 단어'}</h1>
        ${Input.render(status)}
        ${Button.render(status)}
      </div>`;
    if (this.element) {
      this.element.innerHTML = html;
    }
    super.render();
  }

  onMount() {
    const { current } = this.store.state;

    // bind event
    this.element.querySelector('input').addEventListener('change', e => {
      this.store.state = { current: { value:e.currentTarget.value }};
      console.log(e.currentTarget.value);
      console.log(this.store.state.current, current);
    });
    this.element.querySelector('.btn-submit').addEventListener('click', e => {
      this.getWords();
      this.store.state = { status: 'fetching' };
    });
  }
}

export default Home;