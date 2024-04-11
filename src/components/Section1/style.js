import styled from '@emotion/styled';

export const Section1Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }

  div {
    position: absolute;
    bottom: 2.5rem;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
`;

export const Description = styled.span`
  position: absolute;
  color: #fff;
  bottom: 6.25rem;
`;
