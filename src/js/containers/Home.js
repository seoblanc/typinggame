import url from '../constants/api';
import axios from 'axios';
import Interface from '../core/Interface';
import Input from '../components/Input';

class Home extends Container {
  init() {
    this.getWords();
  }

  async getWords () {
    const { data } = await axios.get(url);
    console.log(data);
    this.render();
  }

  template() {
    // const input = new Input();
    const state = this.state;
    console.log(this, state);
    return `
    <div>
      <div>
        <span>남은 시간 : ${this.state.current.time}초</span>
        <span>점수 : ${this.state.score}점</span>
      </div>
      <h1>${this.state.current.word || '문제 단어'}</h1>
      </div>`
      // ${input.template()}
  }

  onInputChange(e) {
    console.log('input', e);
  }

  setEvent() {
    this.element.querySelector('.input-field').addEventListener('change', this.onInputChange);
  }

}

export default Home;