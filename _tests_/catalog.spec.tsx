import { render, screen } from '@testing-library/react';
import CatalogPage from '../src/pages/catalog';

describe('Render Catalog Page', () => {
  beforeEach(() => {
    render(<CatalogPage />);
  });

  test('Title to be in the document', async () => {
    const title = await screen.findByTestId('title');
    expect(title).toBeInTheDocument;
  });
});
