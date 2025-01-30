import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css'

function TodoItem(props) {
    return (
      <li className="TodoItem">
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}
          unComplete={props.unComplete}
        />

        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>

        <DeleteIcon
          onDelete={props.onDelete}
        />
      </li>
    )
  }

  export { TodoItem };