import styled from 'styled-components';
import FloatingBtn from '../components/FloatingBtn';
import Header from '../components/MainHeader';
import { useParams } from 'react-router-dom';
import KioskLayout from '../components/KioskLayout';
import KeypadLayout from "../components/KeypadLayout";
import { SCENE1_STEP_NAME } from '../components/constData';

const Step1 = () => {
    return (
        <div>
            <KeypadLayout />
        </div>
    );
};


const Step2 = () => {
    return <h1>this is step2</h1>;
};

const StepComponent = () => {
    const { step } = useParams(); //현재 페이지의 스텝 번호 받아오기
    const stepName = SCENE1_STEP_NAME[Number(step) - 1];

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
