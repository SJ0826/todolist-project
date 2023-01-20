import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`* {
    box-sizing: border-box;
    // border: 1px solid red;
  }

 body {
  line-height: 1;
}
  
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  
  input {
  border: none;
  &:focus {
    outline: none;
  }
}
  
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }`;

export default GlobalStyle;
