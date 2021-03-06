import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #FFDEE9;
    background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
  min-width:350px; 
}

* {
  box-sizing: border-box;
}
`
export default GlobalStyles
