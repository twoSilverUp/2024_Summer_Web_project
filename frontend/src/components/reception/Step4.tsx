import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LongPressEventType, useLongPress } from 'use-long-press';
import {
  ContentTitle,
  InfoBox,
  InfoWrapper,
  LineIconContainer,
  PressContainer,
} from '../../styles/reception/ReceptionStyle';
import { FaArrowDown, FaGripLines } from 'react-icons/fa';

//카드결제
export function Step4() {
  const navigate = useNavigate();
  const callback = useCallback(() => navigate('/reception/6'), []);

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
}
