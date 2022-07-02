/* eslint-disable import/extensions */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import CatalogPage from '../src/pages/catalog';
import createMockRouter from './test-utils/createMockRouter';

describe('Renderiza pagina Catalogo', () => {
  test('verifica se header é renderizado', async () => {
    render(
      <RouterContext.Provider value={createMockRouter({ pathname: '/catalog' })}>
        <CatalogPage />
      </RouterContext.Provider>,
    );
  });
});
