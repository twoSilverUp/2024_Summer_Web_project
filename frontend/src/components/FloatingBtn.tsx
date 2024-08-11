import { Add, Help, Home } from '@mui/icons-material';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AdviceBar from './AdviceBar';

interface floatingBtnProps {
  advice: string; //도움말 내용
}

const FloatingBtn: React.FC<floatingBtnProps> = ({ advice }) => {
  const navigate = useNavigate();
  const goHome = () => navigate('/');

  const [isOpen, setIsOpen] = useState(false);

  const showAdvice = () => {
    setIsOpen(true);
  };

  const actions = [
    {
      icon: <Home />,
      name: 'Go Home',
      tooltip: '첫 화면으로 돌아가기',
      act: goHome,
    },
    {
      icon: <Help />,
      name: 'Help',
      tooltip: '도움말 보기',
      act: showAdvice,
    },
  ];

  return (
    <FloatingBtnWrapper>
      <AdviceBar
        isOpen={isOpen}
        advice={advice}
        onClose={() => setIsOpen(false)}
      />
      <SpeedDial ariaLabel="floating button" icon={<Add />}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.tooltip}
            onClick={action.act}
          />
        ))}
      </SpeedDial>
    </FloatingBtnWrapper>
  );
};

const FloatingBtnWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export default FloatingBtn;
