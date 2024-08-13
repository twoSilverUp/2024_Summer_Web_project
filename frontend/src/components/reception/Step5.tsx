import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CodeImgContainer,
  ContentTitle,
  EndButton,
} from '../../styles/reception/ReceptionStyle';

//간편결제
export function Step5() {
  const [isScan, setIsScan] = useState(false);
  const navigate = useNavigate();

  const handleScan = () => {
    setIsScan(true);
    setTimeout(() => {
      setIsScan(false);
      navigate('/reception/6');
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
}
