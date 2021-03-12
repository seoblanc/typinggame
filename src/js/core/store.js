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

const store = {
  state: initialState,
  setState: (newState) => {
  }
}