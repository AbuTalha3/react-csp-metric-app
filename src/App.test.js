import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/home';
import store from './store';
import App from './App';

describe('tests rect-csp-metric-app', () => {
  test('rect-csp-metric-render app component correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        ,
      </Provider>,
    );
  });

  test('render home page component correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
