import {React, useState} from 'react';
import './index.css'
import content from './js/content.js'
import Choice from "./components/choice/choice";
import tree from './js/tree'
import setBg from './js/setBg'

import home from './img/home.jpg'

const App = () => {

    const [step, setStep] = useState(0)
    const [line, setLine] = useState(0)
    const [next, setNext] = useState([1, 0])
    const [lock, setLock] = useState(false)
    const [isVisible] = useState(true)

    const [image, setImage] = useState(home)

    const nextStep = () => {

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
}


    return (
      <>

      <div className="main" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}} onClick={nextStep}>
      {
        isVisible
          ? <div className="text">
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
                          : content[line][step].type === 'image'
                                ? setBg(content[line][step].image, setImage, nextStep)
                                : <></>
              }

          </div>
          : <></>
      }

      </div>
      </>
    )
}

export default App;
