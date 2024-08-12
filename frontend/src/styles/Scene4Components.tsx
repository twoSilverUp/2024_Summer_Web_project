import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  gap: 15px;
  position: absolute;
  bottom: 20px;
`;

interface ActionBtnProps {
  backgroundColor: string;
}

export const ActionBtn = styled.button<ActionBtnProps>`
  width: 124px;
  height: 60px;
  color: #fff;
  border: none;
  font-size: 24px;
  font-family: Suite;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  background-color: ${(props) => props.backgroundColor};
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 15px;
`;

export const InfoBox = styled.div`
  width: 125px;
  height: 56px;
  border: 1px solid #a3a3a3;
  color: #585858;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
