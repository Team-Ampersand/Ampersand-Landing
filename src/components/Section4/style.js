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
    color: #fff;
    font-weight: 700;
    font-size: 3rem;
    line-height: 4.5rem;
  }
`;

export const List = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Item = styled.div`
  position: relative;
  width: 19.25rem;
  height: 22.375rem;
  background-color: #ffffff1a;
  border-radius: 1rem;

  h3 {
    color: #fff;
    font-weight: 700;
    font-size: 1.375rem;
    line-height: 2.125rem;
    margin-top: 2.5rem;
    margin-left: 2rem;
  }

  div {
    bottom: 2rem;
    right: 2rem;
    position: absolute;
    width: 7.0625rem;
    height: 7.0625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #090c2a;
    font-size: 3.5rem;
    border-radius: 50%;
  }
`;
