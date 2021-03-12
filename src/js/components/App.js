// import Interface from '../core/Interface';
// import createHashRouter from '../router';
// import { Store } from '../store';

class App extends Interface {
  // 진행상태, 남은 횟수, 남은 시간, 점수, 단어
  // 점수, 평균 해결 시간,
  init() {
    window.oHome = new Home(this.element);
    window.oResult = new Result(this.element);
    // init spa router
    createHashRouter(root);
  }

// };

// export default App;