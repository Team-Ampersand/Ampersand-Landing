import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 10rem 20rem;
  background-color: #090c2a;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

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
  gap: 52px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  svg {
    margin: 36px;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-weight: 700;
    color: #fff;
    font-size: 24px;
    text-decoration: underline;
    text-decoration-color: #4c59d6;
    text-decoration-thickness: 10px;
    text-underline-offset: -2px;
  }

  span {
    color: #a1a1a1;
    line-height: 36px;
    font-size: 18px;
  }
`;
