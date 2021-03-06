import { createGlobalStyle } from 'styled-components'

// const small = 400;
// const medium = 655;
// const large = 700;

const KeywordsStyles = createGlobalStyle`
#root {
  overflow: hidden;
  margin: 0;
  padding: 0;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.transitions-item {
  // overflow: hidden;
  width: 100%;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 5vw;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity, height;
  white-space: nowrap;
  /* cursor: pointer; */
  /* line-height: 80px; */
}

`

export default KeywordsStyles
