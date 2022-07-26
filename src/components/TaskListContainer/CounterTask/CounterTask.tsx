import styled from '@emotion/styled';
import { colors } from '../../../styles';

interface IProps {
  titleText: string;
  color: string;
  count: number;
}

const Title = styled.p`
  font-size: 14px;
  color: ${props => props.color};
`;

const Counter = styled.div`
  color: ${colors.gray100};
  font-size: 12px;
  background-color: ${colors.gray400};
  border-radius: 999px;
  padding: 2px 8px;
  margin-left:8px;
`;

const Content = styled.div`
  display:flex;
`;

export const CounterTask: React.FC<IProps> = ({titleText, color , count}) => {
  return(
    <Content>
      <Title color={color}>{titleText}</Title>
      <Counter>{count}</Counter>
    </Content>
  )
}