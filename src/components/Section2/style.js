import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 12.5rem 20.5rem;
  background-color: #090c2a;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: #fff;
    font-weight: 700;
    font-size: 3rem;
    line-height: 4.5rem;
  }

  span {
    color: #ffffff7a;
    font-size: 1.25rem;
    line-height: 2.25rem;
  }
`;
