import styled from 'styled-components';
import ButtonList from '../components/btn-list';
import Header from '../components/header';

const mainContentList = [
  '예약하고 병원에 갔을 때 진료 보기',
  '예약 안하고 병원에 갔을 때 진료 보기',
  '의료 증명서 발급받기',
  '병원 키오스크로 금액 결제하기(수납)',
  '병원 근처 약국 찾아보기',
];

export default function MainPage() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Title>
          김OO님, <br /> 무엇을 연습해볼까요?
        </Title>
        <ButtonList contentList={mainContentList} />
        <ImageContainer>
          <TeamLabel>@Team eldkiz</TeamLabel>
          <img src="images/main-image.png" />
        </ImageContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50rem;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #878787, #15204c);
  align-items: center;
  height: 100%;
`;

const Title = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
  text-align: left;
  color: white;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 14rem;
`;

const TeamLabel = styled.p`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: white;
`;
