import {React, useMemo, useState} from 'react';
import './index.css'
import content from './content.js'
import Choice from "./components/choice/choice";
import tree from './tree'
import img from './img/1.png'

const App = () => {

    const [step, setStep] = useState(0)
    const [line, setLine] = useState(0)
    const [next, setNext] = useState([1, 2])

    const [lock, setLock] = useState(false)
    const [allChoices, setAllChoices] = useState([])

    useMemo(() => {

    }, [])

    return (
      <div className="main" onClick={() => {
          if (!lock){
              if (content[line].length === step + 1){
                  setStep(0)
                  setLine(next)
                  setNext(tree[next].next)
              }
              else{
                  setStep(step + 1)
              }

          }
      }}>
        <div className="text">
            <p>{
              content[line][step].person
                ? content[line][step].person
                : <br></br>
            }</p>
            {
                content[line][step].type === 'text'
                    ? <p>{content[line][step].text}</p>
                    : content[line][step].type === 'choice'
                        ? <Choice choices={content[line][step].choices} setLock={setLock} step={step} tree={tree} setStep={setStep} setLine={setLine} next={next} setNext={setNext} />
                        : content[line][step].type === 'bg'
            }

        </div>
      </div>
    )
}

export default App;
