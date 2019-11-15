import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        numbers: [...state.numbers, Math.round(Math.random() * 1000)]
      };

    default:
      return state;
  }
}

function App() {
  let [state, dispatch] = useReducer(reducer, {
    numbers: []
  });

  const clearWithMutations = () => {
    state.numbers = [];
  };

  const crashApp = () => {
    state.numbers = null;
    dispatch({ type: 'ADD' });
  };

  return (
    <div className="container">
      <h1>Immer + ReactJS</h1>
      <p>Random numbers</p>
      <br />
      <button onClick={() => dispatch({ type: 'ADD' })}>Сгенерировать</button>
      <button onClick={clearWithMutations}>Очистить</button>
      <button onClick={crashApp}>Сломать</button>
      <div>
        <ol>
          {state.numbers.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
