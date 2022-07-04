import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #DEDEDE;
  }

  #header h1 {
    color: #77193e;
  }

  .nav-item {
    margin-right: 5px;
    text-decoration: none;
    color: #77193e;
    font-weight: 400;
  }

  #loginPage {
    display: flex;
    justify-content: space-between;
    border-bottom: solid grey;
    padding: 3px;
  }
  #loginContainer {
    display: flex;
  }

  .loginItem {
    margin-left: 5px;
  }

  .loginItem-ipt {
    margin-left: 10px;
  }
  #content-catalog-page {
    display: flex;
    font-family: 'Lato', sans-serif;
  }

  @media(max-width: 1000px) {
    #content-catalog-page {

    }
  }

  #filterContainer {
    background-color: #DEDEDE;
    margin-top: -35px;
    padding: 10px;
    min-width: 200px;
  }

  #cardsContainer {
    display: flex;
    /* align-items: center; */
    flex-wrap: wrap;
  }

  .product-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    text-align: center;
    margin-left: 15px;
    margin-top: 15px;
  }

  .product-card-content {
    margin-bottom: 10px;
    text-decoration: none;
    width: 256px;
    height: 333px;
    box-shadow: 2px 3px 5px #77193e;
    border-radius: 5px;
  }
  .product-card-content .title {
    text-decoration: none;
    color: #1D1D1B;
  }

  .product-card-content .price {
    padding: 2px;
    color: #888888;
    text-decoration: line-through;
    font-size: smaller;
  }

  @media(max-width: 800px) {
    .product-card-content {
      width: 156px;
      height: 348px;
    }
    .product-card {
      width: 150px;
      margin-left: 12%;
    }
  }

  #catalogPage #welcome {
    margin-left: 220px;
    color: #77193e;
  }

  @media(max-width: 800px) {
    #catalogPage #welcome {
      margin: 0;
    }
  }

  @media(max-width: 1200px) {
    #qtd-cotainer {
      display: none;
    }
    #price-container {
      bottom: 0;
      position: fixed;
      height: 70px;
      background-color: white;
      left: 0px;
      width: 100%;
    }
  }

  #productsQtd {
    margin-left: 15px;
    margin-bottom: -10px;
  }

  .filter-item {
    margin-right: 10px;
    margin-top: 10px;
  }

  .item-product-details {
    margin-bottom: 50px;
  }

  .member-price {
    color: #C81A78;
    font-size: 23px;
  }

  .no-member-price {
    color: #888888;
    font-style: bold;
    font-size: 16px;
  }

  .sidebar {
    display: 'flex';
  }

`;
