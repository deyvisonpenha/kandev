import styled from '@emotion/styled';
import { colors } from '../../../styles';

type Props = {
  children: any;
  icon?: React.ReactElement;
}

const Button = styled.button`
  background-color: ${colors.blueDark};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;

  width: 90px;
  height: 52px;

  border-radius: 8px;
  border-width: 0;
  gap: 8px;

  color: ${colors.gray100};
  font-size: 14px;
  text-align: center;
`;

export const ButtonComponent: React.FC<Props> = ({ children, icon }) => {
  return (
    <Button>
      {children}
      {icon ? icon : null}
    </Button>
  )
}