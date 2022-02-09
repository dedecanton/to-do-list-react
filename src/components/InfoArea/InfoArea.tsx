import * as C from "./InfoArea.style";
import {ListItemType} from '../../types/ListItem.type'

type Props={
    taskList: ListItemType[]
}

const InfoArea = ({taskList}:Props) => {



  return (
    <C.Container>
      <table>
        <thead>
          <tr>
            <th>Tarefas a fazer</th>
            <th>Tarefas feitas</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{taskList.filter(task => task.done === false).length}</td>
            <td>{taskList.filter(task => task.done === true).length}</td>
          </tr>
        </tbody>
      </table>
    </C.Container>
  );
};

export default InfoArea;
