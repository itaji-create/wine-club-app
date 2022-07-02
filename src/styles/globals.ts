import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #DEDEDE;
  }

  #header {
    background-color: #FFFFFF;
    border-bottom: solid grey;
    height: 60px;
  }

  .nav-item {
    margin-right: 5px;
    text-decoration: none;
    color: blueviolet;
  }

  #loginPage {
    display: flex;
    justify-content: space-between;
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

  #contentCatalogPage {
    display: flex;
    font-family: 'Lato', sans-serif;
  }

  #filterContainer {
    background-color: whitesmoke;
    margin-top: -35px;
    padding: 10px;
    min-width: 200px;
  }

  #cardsContainer {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .productCard {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    text-align: center;
    margin: 15px;
  }

  .productCardContent {
    margin-bottom: 15px;
    text-decoration: none;
    padding: 10px;
    height: 300px;
    box-shadow: 2px 4px 10px grey;
  }
  .productCardContent .title {
    text-decoration: none;
    color: #1D1D1B;
  }

  .productCardContent .price {
    padding: 2px;
    color: #888888;
    text-decoration: line-through;
    font-size: smaller;
  }

  #catalogPage #welcome {
    margin-left: 220px;
  }

  #productsQtd {
    margin-left: 15px;
    margin-bottom: -10px;
  }

`;