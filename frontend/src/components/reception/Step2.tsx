import { useNavigate } from 'react-router-dom';
import {
  ActionBtn,
  BtnWrapper,
  InfoBox,
  InfoWrapper,
} from '../../styles/reception/ReceptionStyle';

export function Step2() {
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
          onClick={() => navigate('/reception/3')}
        >
          수납
        </ActionBtn>
      </BtnWrapper>
    </>
  );
}
