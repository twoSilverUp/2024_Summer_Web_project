import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ActionBtn, BtnWrapper } from '../styles/Scene4Components';

const NumberInput = () => {
  const [phoneNum, setPhoneNum] = useState('');
  const navigate = useNavigate();

  const handleClick = (num: number) => {
    setPhoneNum((cur) => cur + num.toString());
  };

  const handleDelete = () => {
    setPhoneNum(phoneNum.slice(0, -1));
  };

  const handleSubmit = (completeNum: string) => {
    //전화번호 API 연결. 저장된 전화번호 보냄

    //형식틀림 오류 처리

    //다음 단계로
    navigate('/scene4/2');
  };

  return (
    <InputContainer>
      <NumField>{phoneNum}</NumField>
      <NumInput>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <NumButton onClick={() => handleClick(number)}>{number}</NumButton>
        ))}
      </NumInput>
      <BtnWrapper>
        <ActionBtn backgroundColor="#C15555" onClick={handleDelete}>
          지우기
        </ActionBtn>
        <ActionBtn
          backgroundColor="#5574C1"
          onClick={() => handleSubmit(phoneNum)}
        >
          확인
        </ActionBtn>
      </BtnWrapper>
    </InputContainer>
  );
};

export default NumberInput;

const InputContainer = styled.div`
  width: 278px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NumField = styled.div`
  width: 100%;
  height: 46px;
  border: 1px solid #a3a3a3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const NumInput = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;

const NumButton = styled.button`
  width: 60px;
  height: 60px;
  cursor: pointer;
  font-size: 24px;
  font-family: 'Suite';
  color: #585858;
  border: 1px solid #a3a3a3;
  background-color: #f1f1f1;
`;
