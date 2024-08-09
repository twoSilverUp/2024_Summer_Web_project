import styled from 'styled-components';

export default function MainHeader() {
  return (
    <Wrapper>
      <Title>병원 키오스크 연습용 웹, 홀로서기✨</Title>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: #474747;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
`;

const Title = styled.p`
  font-family: Suite;
  color: #fff;
  text-align: center;
`;
