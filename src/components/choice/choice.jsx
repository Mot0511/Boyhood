import React from 'react';
import cl from './choice.module.css'

const Choice = ({choices, step, setStep, setLock, setLine, next, setNext, tree}) => {
    setLock(true)

    const select = (choice) => {
        setLock(false)
        setStep(0)
        setLine(next[choice])
        console.log(tree[next[choice]].next);
        setNext(tree[next[choice]].next)
    }
    return (
        <div className={cl.bg}>
            <div className={cl.choices}>
                {
                    choices.map(choice => <button onClick={() => select(choice[0])}>{choice[1]}</button>)
                }

            </div>
        </div>
    );
};

export default Choice;