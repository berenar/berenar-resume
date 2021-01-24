import { createGlobalStyle } from "styled-components";
const backgroundColor = "#F652A0";
export const CornerRibbonStyles = createGlobalStyle`
.ribbon {
    margin: 0;
    padding: 0;
    background: ${backgroundColor};
    color:white;
    padding:1.5em 0;
    position: absolute;
    top:0;
    right:0;
    transform: translateX(30%) translateY(0%) rotate(45deg);
    transform-origin: top left;
    -webkit-filter: drop-shadow(5px 5px 5px #666666);
    filter: drop-shadow(5px 5px 5px #666666);;
  }
  .ribbon:before,
  .ribbon:after {
    content: '';
    position: absolute;
    top:0;
    margin: 0 -1px; /* tweak */
    width: 100%;
    height: 100%;
    background: ${backgroundColor};
  }
  .ribbon:before {
    right:100%;
  }
  
  .ribbon:after {
    left:100%;
  }
`;
