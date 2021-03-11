import Home from '../containers/Home';
import Result from '../containers/Result';
import Interface from '../core/Interface';
import createHashRouter from '../router';

class App extends Interface {
  constructor(initialState, root) {
    super(initialState, root);
    // 진행상태, 남은 횟수, 남은 시간, 점수, 단어
    // 점수, 평균 해결 시간,
  }
  init() {
  }

};

export default App;