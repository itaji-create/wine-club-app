import { NextPage } from 'next';

const PriceFilter: NextPage = () => {
  const handleClick = ({ target: value }: never): void => {
    console.log(value);
  };
  return (
    <div style={ { minWidth: '150px' } }>
      <h4>Refine sua busca</h4>
      <p>Por preço</p>
      <label htmlFor='input-40'>
        <input onClick={ handleClick } value='40' name='filter' id='input-40' type='radio' />
        Até R$ 40
      </label><br />
      <label htmlFor='input-60'>
        <input onClick={ handleClick } value='60' name='filter' id='input-60' type='radio' />
        R$40 A R$60
      </label><br />
      <label htmlFor='input-100'>
        <input onClick={ handleClick } value='100' name='filter' id='input-100' type='radio' />
        R$100 A R$200
      </label><br />
      <label htmlFor='input-200'>
        <input onClick={ handleClick } value='200' name='filter' id='input-200' type='radio' />
        R$200 A R$500
      </label><br />
      <label htmlFor='input-500'>
        <input onClick={ handleClick } value='500' name='filter' id='input-500' type='radio' />
        Acima de R$500
      </label><br />
    </div>
  );
};

export default PriceFilter;
