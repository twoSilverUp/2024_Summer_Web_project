import React from 'react';
import MainButton from './main-btn';
import styled from 'styled-components';
interface ButtonListProps {
  contentList: Array<string>;
}

const ButtonList: React.FC<ButtonListProps> = ({ contentList }) => {
  //버튼 내용 입력받아 버튼 목록 생성
  const buttonList = contentList.map((content: string, index: number) => (
    <MainButton key={index} text={content} />
  ));

  return <BtnWrapper>{buttonList}</BtnWrapper>;
};

export default ButtonList;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;
