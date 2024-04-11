import styled from '@emotion/styled';

export const Container = styled.section`
  padding: 10rem 20rem;
  background-color: #090c2a;
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.5rem;
  margin-bottom: 5rem;
`;

export const MajorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MajorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  ${(props) => {
    if (props.align === 'start') return 'align-items: flex-start;';
    return 'align-items: flex-end;';
  }}
`;

export const MajorDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

export const MajorTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  color: #838ce2;
`;

export const MajorDescription = styled.span`
  color: #ffffff99;
`;

export const MemberContainer = styled.ul`
  width: 27.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  ${(props) => {
    if (props.align === 'start') return 'justify-content: flex-start;';
    return 'justify-content: flex-end;';
  }}
`;

export const MemberWrapper = styled.li`
  width: 5rem;
  height: 7.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    font-size: 18px;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
    line-height: 26px;
  }
`;
