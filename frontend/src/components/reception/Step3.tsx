import { useNavigate } from 'react-router-dom';
import SubButton from '../common/SubButton';
import { SubBtnWrapper } from '../../styles/reception/ReceptionStyle';

//결제방식 선택
export function Step3() {
  const navigate = useNavigate();

  return (
    <SubBtnWrapper>
      <SubButton text="카드 결제" onClick={() => navigate('/reception/4')} />
      <SubButton text="간편 결제" onClick={() => navigate('/reception/5')} />
    </SubBtnWrapper>
  );
}
