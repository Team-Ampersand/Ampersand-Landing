import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100vw;
  height: 3.1875rem;
  display: flex;
  padding: 2.1875rem 20rem 0 20rem;
  background-color: red;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
  }

  ul {
    display: flex;
    gap: 2.25rem;
    color: #fff;

    li {
      cursor: pointer;
    }
  }
`;
