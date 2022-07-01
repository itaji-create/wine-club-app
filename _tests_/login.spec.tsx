import { render, screen } from '@testing-library/react';
import Login from '../src/pages/index';

describe('Render page Login', () => {
  beforeEach(() => {
    render(<Login />);
  });

  test('Text Wine in the Document', () => {
    const title = screen.getByText('Wine');

    expect(title).toBeTruthy();
  });

  test('inputs email and password in the document', () => {
    const emailInput = screen.getByTestId('email-input');
    const passInput = screen.getByPlaceholderText('senha');
    expect(emailInput).toBeInTheDocument;
    expect(passInput).toBeTruthy();
  });
});
