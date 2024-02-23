import React, { useState } from 'react';
import Start from './Start';
import Content from './Content';
import Result from './Result';

const Main = () => {
    const[id, setId] = useState(0)    
    const[mbtiType, setMbtiType] = useState([0, 0, 0, 0 ,0 ,0 ,0 ,0])

    const nextId = () => (setId(id + 1))

    const onUpdate = (type) => {
        if(type[0] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[0]] += 1
                return ch
            })
        }

        if(type[1] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[1]] += 1
                return ch
            })
        }

        if(type[2] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[2]] += 1
                return ch
            })
        }

        if(type[3] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[3]] += 1
                return ch
            })
        }
        if(type[4] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[4]] += 1
                return ch
            })
        }
        if(type[5] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[5]] += 1
                return ch
            })
        }
        if(type[6] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[6]] += 1
                return ch
            })
        }
        if(type[7] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[7]] += 1
                return ch
            })
        }
    }

    const onMinus = (type) => {
        if(type[0] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[0]] -= 1
                return ch
            })
        }

        if(type[1] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[1]] -= 1
                return ch
            })
        }

        if(type[2] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[2]] -= 1
                return ch
            })
        }

        if(type[3] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[3]] -= 1
                return ch
            })
        }
        if(type[4] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[4]] -= 1
                return ch
            })
        }
        if(type[5] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[5]] -= 1
                return ch
            })
        }
        if(type[6] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[6]] -= 1
                return ch
            })
        }
        if(type[7] !== 0) {
            setMbtiType(() => {
                const ch = mbtiType
                ch[type[7]] -= 1
                return ch
            })
        }
    }

    return (
        <div>
            { id === 0 && <Start nextId={ nextId } /> }                
            { id === 1 && <Content nextId={ nextId } onUpdate={ onUpdate } onMinus={ onMinus } /> }                
            { id === 2 && <Result nextId={ nextId } mbtiType={ mbtiType } /> }                
        </div>
    );
};

export default Main;