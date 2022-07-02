import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../src/pages/index';

describe('Render Login Page', () => {
  test('Itens da página de login', () => {
    render(<Login />);
    const title = screen.getByText('Wine');
    const emailInput = screen.getByTestId('email-input');
    const passInput = screen.getByPlaceholderText('senha');
    expect(emailInput).toBeInTheDocument;
    expect(passInput).toBeTruthy();
    expect(title).toBeTruthy();
  });

  test('Ao clicar no button, caso os inputs tenham sido preenchidos, será redirecionado para a página catálogo', async () => {
    const { debug } = render(<Login />);
    const loginBtn = screen.getByTestId('login-btn');
    const emailInput = screen.getByTestId('email-input');
    const passInput = screen.getByTestId('pw-input');
    userEvent.type(emailInput, 'OlaMundoDoido');
    userEvent.type(passInput, 'OlaMundo');
    debug()
    fireEvent.click(loginBtn);
    debug();

    expect(screen.getByTestId('title')).toBeInTheDocument();
  });
});
