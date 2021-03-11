import App from "./components/App";
import createHashRouter from "./router";

const root = document.getElementById('root');
// init spa router
createHashRouter(root);
const initialState = {
  status: 'init',
  words: [],
  current: {
    time: 0,
    word: '',
  },
  remainCount: 0,
  remainTime: 0,
  score: 0,
  elapsedTime: 0,
}

window.oApp = new App(initialState, root);