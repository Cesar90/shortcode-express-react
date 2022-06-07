import React from 'react';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer, reducerInitialState, middleware } from './store';
import { MemoryRouter } from 'react-router-dom';

const renderConnected = (
  ui, {
    initialState = reducerInitialState,
    store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <MemoryRouter>
        <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions});
};

export default renderConnected;