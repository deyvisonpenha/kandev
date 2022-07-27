import { Header, BodyTasks, InputFormContent } from './styles';
import { InputComponent, ButtonComponent } from './components/form';
import { TaskListContainer } from './components/TaskListContainer/TaskListContainer';
import { HiOutlinePlusCircle } from "react-icons/hi";

function App() {
  const taskList = [];
  
  return (
    <div className="App">
      <Header className="App-header">
        <img src='/src/Logo.svg' />
      </Header>
      <BodyTasks>
        <InputFormContent>
          <InputComponent placeholder="Adicione uma nova tarefa" />
          <ButtonComponent icon={<HiOutlinePlusCircle size={16}/>}>
            Criar
          </ButtonComponent>
        </InputFormContent> 
        
        <TaskListContainer />
      </BodyTasks>
    </div>
  )
}

export default App
