import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 10rem 20rem;
  background-color: #090c2a;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  h2 {
    font-weight: 700;
    font-size: 3rem;
    color: #fff;
    line-height: 4.5rem;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.25rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  svg {
    margin: 2.25rem;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  h3 {
    font-weight: 700;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: underline;
    text-decoration-color: #4c59d6;
    text-decoration-thickness: 0.625rem;
    text-underline-offset: -0.125rem;
  }

  span {
    color: #a1a1a1;
    line-height: 2.25rem;
    font-size: 1.125rem;
  }
`;
