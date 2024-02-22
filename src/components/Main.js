import React, { useState } from 'react';

const Main = () => {
    const[id, setId] = useState(0)
    
    const[mbtiType, setMbtiType] = useState([0, 0, 0, 0 ,0 ,0 ,0 ,0])

    const nextId = () => (setId(id + 1))

    const onUpdate = (type) => {
        if(type[0] !== 0) {
            setMbtiType(() => {
                const ch = e
                ch[type[0]] += 1
                return ch
            })
        }

        if(type[1] !== 0) {
            setMbtiType(() => {
                const ch = i
                ch[type[1]] += 1
                return ch
            })
        }

        if(type[2] !== 0) {
            setMbtiType(() => {
                const ch = n
                ch[type[2]] += 1
                return ch
            })
        }

        if(type[3] !== 0) {
            setMbtiType(() => {
                const ch = s
                ch[type[3]] += 1
                return ch
            })
        }
        if(type[4] !== 0) {
            setMbtiType(() => {
                const ch = f
                ch[type[4]] += 1
                return ch
            })
        }
        if(type[5] !== 0) {
            setMbtiType(() => {
                const ch = t
                ch[type[5]] += 1
                return ch
            })
        }
        if(type[6] !== 0) {
            setMbtiType(() => {
                const ch = p
                ch[type[6]] += 1
                return ch
            })
        }
        if(type[7] !== 0) {
            setMbtiType(() => {
                const ch = j
                ch[type[7]] += 1
                return ch
            })
        }
    }



    return (
        <div>
            
        </div>
    );
};

export default Main;