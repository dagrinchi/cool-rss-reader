import styled, { createGlobalStyle } from "styled-components";

export default {
  global: createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700');
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin: 0;
      padding: 0;
    }
  `
}