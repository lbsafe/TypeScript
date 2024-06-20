import { useTodoDispatch } from "../App";
import { Todo } from "../types";

interface Props extends Todo {}

const TodoItem = (props: Props) => {
    const dispatch = useTodoDispatch();

    const onClickBtn = () => {
        dispatch.onClickDelete(props.id);
    };

    return (
        <div>
            {props.id}번 : {props.content}
            <button onClick={onClickBtn}>삭제</button>
        </div>
    );
};

export default TodoItem;
