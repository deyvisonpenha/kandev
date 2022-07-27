import styled from '@emotion/styled';
import { CounterTask } from './CounterTask/CounterTask';
import { colors } from '../../styles';
import { EmptyTaskList } from './EmptyTaskList/EmptyTaskList';

const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 736px;
`;
const taskList = ['texto exemplo'];

export const TaskListContainer: React.FC = () => {
  if( taskList.length == 0){

  }
  else {

  }
  return (
    <Container>
      <TitleContent>
        <CounterTask color={colors.blue} titleText='Tarefas criadas' count={0}/>
        <CounterTask color={colors.purple} titleText='Concluídas' count={0}/>
      </TitleContent>

      {
        taskList.length == 0 ? (
          <EmptyTaskList />
        ) :
        (
        <div style={{color: '#fff'}}>
          <h1>Tarefas</h1>
          <ul>
            <li>tarefa 1</li>
            <li>tarefa 2</li>
          </ul>
        </div>
        )
      }

     

      
    </Container>
  )
}