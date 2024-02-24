import React, { useState } from 'react';

const Start = (props) => {
    const { nextId } = props

    const [btnDis, setBtnDis] = useState(false)

    const startClick = () => {
        setBtnDis(true)
    }
    return (
        <div>
            <button onClick={ () => startClick() }>시작하기</button>
        </div>
    );
};

export default Start;