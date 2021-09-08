import  {useState} from "react";

function App() {
  import React, { useState } from "react";

    const [list, setList] = useState(["Huyen", "Hoa", "Hung", "Long"]);
    const [index, setIndex] = useState(0);

    // Next
    const next = () => {
        if (index < list.length - 1) setIndex(index + 1);
    };
    //Preve
    const pre = () => {
        if (index > 0) setIndex(index - 1);
    };

    return (
        <div style={{ margin: 40 }}>
            <p>学生一覧：[</p>
            {list.map((item) => (
                <p style={{ width: 50 }}>
                    {item}
                </p>
            ))}
            <p>]</p>
            <p>位置：{index + 1}</p>
            <p>名前：{list[index]}</p>
            <button style={{ marginRight: 60 }} onClick={() => next()}>
                次に
            </button>
            <button onClick={() => pre()}>前に</button>
        </div>
    );
}
export default App;
