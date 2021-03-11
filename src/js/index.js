import Home from "./containers/Home";
import Result from "./containers/Result";
import Router from './router';
import Store from './store';

const root = document.getElementById('root');
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
};

const store = new Store(initialState);
const HomeContainer = new Home({store, element: root});
const ResultContainer = new Result({store, element: root});
const routes = {
  '': HomeContainer,
  'home': HomeContainer,
  'result': ResultContainer
};
Router(routes);
