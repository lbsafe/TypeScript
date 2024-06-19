import { useState } from "react";

interface Props {
    onClickAdd: (text: string) => void;
}

const Editer = (props: Props) => {
    const [text, setText] = useState("");

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onClickBtn = () => {
        props.onClickAdd(text);
        setText("");
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChangeInput} />
            <button onClick={onClickBtn}>추가</button>
        </div>
    );
};

export default Editer;
