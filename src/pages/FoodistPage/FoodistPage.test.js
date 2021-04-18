import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import FoodistPage from './FoodistPage';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('component load test', () => {
  act(() => {
    ReactDOM.render(<FoodistPage />, container);
  });
  const timestring = container.querySelector('div');
  expect(timestring.innerText).toBe(`업로드 시간: ${new Date().toString()}`)
})
