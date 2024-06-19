import { Todo } from "../types";

interface Props extends Todo {
    onClickDelete: (id: number) => void;
}

const TodoItem = (props: Props) => {
    const onClickBtn = () => {
        props.onClickDelete(props.id);
    };

    return (
        <div>
            {props.id}번 : {props.content}
            <button onClick={onClickBtn}>삭제</button>
        </div>
    );
};

export default TodoItem;
