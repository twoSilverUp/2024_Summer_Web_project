import styled from 'styled-components';
import FloatingBtn from '../components/FloatingBtn';
import Header from '../components/MainHeader';
import { useNavigate, useParams } from 'react-router-dom';
import KioskLayout, { ContentTitle } from '../components/KioskLayout';
import { SCENE4_STEP_NAME } from '../components/constData';
import NumberInput from '../components/NumberInput';
import {
  ActionBtn,
  BtnWrapper,
  InfoBox,
  InfoWrapper,
} from '../styles/Scene4Components';
import SubButton from '../components/SubButton';
import { FaArrowDown, FaGripLines, FaRegCheckCircle } from 'react-icons/fa';
import { LongPressEventType, useLongPress } from 'use-long-press';
import { useCallback, useState } from 'react';

const Step1 = () => {
  return <NumberInput />;
};

const Step2 = () => {
  const navigate = useNavigate();

  return (
    <>
      <InfoWrapper>
        <InfoBox>진료일시</InfoBox>
        <InfoBox>2024-07-06</InfoBox>
        <InfoBox>총 수납금액</InfoBox>
        <InfoBox>38,040원</InfoBox>
      </InfoWrapper>
      <BtnWrapper>
        <ActionBtn backgroundColor="#C15555" onClick={() => navigate(-1)}>
          취소
        </ActionBtn>
        <ActionBtn
          backgroundColor="#5574C1"
          onClick={() => navigate('/scene4/3')}
        >
          수납
        </ActionBtn>
      </BtnWrapper>
    </>
  );
};

//결제방식 선택
const Step3 = () => {
  const navigate = useNavigate();

  return (
    <SubBtnWrapper>
      <SubButton text="카드 결제" onClick={() => navigate('/scene4/4')} />
      <SubButton text="간편 결제" onClick={() => navigate('/scene4/5')} />
    </SubBtnWrapper>
  );
};

const SubBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

//카드결제
const Step4 = () => {
  const navigate = useNavigate();
  const callback = useCallback(() => navigate('/scene4/6'), []);

  const bind = useLongPress(callback, {
    threshold: 5000,
    detect: LongPressEventType.Mouse || LongPressEventType.Touch,
  });

  return (
    <>
      <InfoWrapper>
        <InfoBox>진료일시</InfoBox>
        <InfoBox>2024-07-06</InfoBox>
        <InfoBox>총 수납금액</InfoBox>
        <InfoBox>38,040원</InfoBox>
      </InfoWrapper>
      <ContentTitle>아래 카드 투입구를 5초 이상 꾹 눌러주세요!</ContentTitle>
      <FaArrowDown size={30} />
      <PressContainer {...bind()}>
        <LineIconContainer>
          <FaGripLines />
        </LineIconContainer>
      </PressContainer>
    </>
  );
};

const PressContainer = styled.button`
  margin-top: 10px;
  background-color: #fff;
  width: 200px;
  height: 70px;
  position: relative;
  border: none;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
    transition: 0.3s;
  }
`;

const LineIconContainer = styled.div`
  position: absolute;
  font-size: 100px;
  top: -25%;
  left: 25%;
`;

// ----------------------------

//간편결제
const Step5 = () => {
  const [isScan, setIsScan] = useState(false);
  const navigate = useNavigate();

  const handleScan = () => {
    setIsScan(true);
    setTimeout(() => {
      setIsScan(false);
      navigate('/scene4/6');
    }, 3000);
  };

  return (
    <>
      <CodeImgContainer>
        <img src="../images/qr-image.png" alt="qrimage" />
      </CodeImgContainer>
      <EndButton onClick={handleScan}>QR코드 스캔하기</EndButton>
      {isScan ? <ContentTitle>스캔 중입니다...</ContentTitle> : null}
    </>
  );
};

const CodeImgContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

// ----------------------------

//결제완료
const Step6 = () => {
  const navigate = useNavigate();

  return (
    <>
      <FaRegCheckCircle size={80} style={{ margin: '50 0' }} />
      <ContentTitle>
        수납 과정이 모두 끝났습니다.
        <br />
        수고하셨습니다.
      </ContentTitle>
      <EndButton onClick={() => navigate('/')}>첫 화면으로 돌아가기</EndButton>
    </>
  );
};

const EndButton = styled.button`
  background-color: #5574c1;
  color: #fff;
  font-size: 15px;
  border: 1px solid #787878;
  padding: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

// ----------------------------

const StepComponent = () => {
  const { step } = useParams(); //현재 페이지의 스텝 번호 받아오기
  const stepName = SCENE4_STEP_NAME[Number(step) - 1];

  //n번째 단계, ... 부분
  const renderTitle = () => {
    return (
      <Title>
        {stepName.stepTitle}
        <br />
        {stepName.stepSubtitle}
      </Title>
    );
  };

  //키오스크 레이아웃 안에 들어가는 부분
  const renderStepComponent = () => {
    switch (step) {
      case '1':
        return <Step1 />;
      case '2':
        return <Step2 />;
      case '3':
        return <Step3 />;
      case '4':
        return <Step4 />;
      case '5':
        return <Step5 />;
      case '6':
        return <Step6 />;
      default:
        return <h1>Not Found</h1>;
    }
  };

  //타이틀 + 껍데기 +플로팅 버튼 내보내기
  return (
    <>
      {renderTitle()}
      <KioskLayout
        contentTitle={stepName.stepDescription}
        children={renderStepComponent()}
      />
      <FloatingBtn advice={stepName.advice} />
    </>
  );
};

export default function Scene4() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <StepComponent />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 800px;
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #878787, #15204c);
  align-items: center;
  height: 100%;
`;

const Title = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 24px;
  text-align: left;
  color: white;
`;
