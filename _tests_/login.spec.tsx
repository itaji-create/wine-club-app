/* eslint-disable import/extensions */
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import Login from '../src/pages/index';
import createMockRouter from './test-utils/createMockRouter';

describe('Renderiza a pagina Login', () => {
  it('Itens da página de login', () => {
    render(<Login />);
    const title = screen.getByText('Wine');
    const emailInput = screen.getByTestId('username-input');
    const passInput = screen.getByPlaceholderText('senha');
    expect(emailInput).toBeTruthy();
    expect(passInput).toBeTruthy();
    expect(title).toBeTruthy();
  });

  it('Verifica botão login etá desabilitado', async () => {
    render(<Login />);
    const button = screen.getByTestId('login-btn');
    expect(button).toBeDisabled();
  });

  it('Verifica botão login fica habilitado ao informar username', async () => {
    render(<Login />);
    const emailInput = screen.getByTestId('username-input');
    const passInput = screen.getByPlaceholderText('senha');
    const button = screen.getByTestId('login-btn');
    fireEvent.change(emailInput, { target: { value: 'olaMundo' } });
    fireEvent.change(passInput, { target: { value: 'ola24dfg' } });
    expect(button).toBeEnabled();
  });

  it('muda de pagina', async () => {
    const { debug } = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Login />
      </RouterContext.Provider>,
    );
    const emailInput = screen.getByTestId('username-input');
    const passInput = screen.getByPlaceholderText('senha');
    const button = screen.getByTestId('login-btn');
    fireEvent.change(emailInput, { target: { value: 'olaMundo' } });
    fireEvent.change(passInput, { target: { value: 'ola24dfg' } });
    fireEvent.click(button);
    expect(screen.getByText('Bem vindo ao catalogo')).toBeTruthy();
  });
});
