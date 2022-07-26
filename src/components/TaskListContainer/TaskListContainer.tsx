import styled from '@emotion/styled';
import { CounterTask } from './CounterTask/CounterTask';
import { colors } from '../../styles';
import { EmptyTaskList } from './EmptyTaskList/EmptyTaskList';

const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 736px;
`;

export const TaskListContainer: React.FC = () => {
  return (
    <>
      <TitleContent>
        <CounterTask color={colors.blue} titleText='Tarefas criadas' count={0}/>
        <CounterTask color={colors.purple} titleText='Concluídas' count={0}/>
      </TitleContent>

      <EmptyTaskList />
    </>
  )
}