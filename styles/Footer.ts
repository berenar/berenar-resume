import { createGlobalStyle } from "styled-components";

export const FooterStyles = createGlobalStyle`
footer {
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #4A4545;
}

.contactIcons {
  display: flex;
  a {
    margin: 10px;
  }
}
`;
