import React, { useRef, useState } from 'react'
import './style.css'

const Assets = () => {
    let pic = ['🎮', '🔊', '⚙️', '😍', '😴', '🤑', '💀', '👻', '👽', '🐭', '🐸', '🐢', '🐬', '🧟', '🥷', '🎈', '🎉', '😷', '🕸️', '🎯', '🔒', '🔑', '🧲', '☎️', '🏧', '⏰', '🧭', '🏚️', '☢️', '📵', '🚓']

    const [reset, setReset] = useState(null);


    // Generate a random number between 1 and 30
    let randomNumber = Math.floor(Math.random() * 30) + 1;
    let randomNumber2 = Math.floor(Math.random() * 30) + 1;
    let randomNumber3 = Math.floor(Math.random() * 30) + 1;
    let randomNumber4 = Math.floor(Math.random() * 30) + 1;
    let randomNumber5 = Math.floor(Math.random() * 30) + 1;

    let sum = randomNumber + randomNumber + randomNumber;
    let sum2 = randomNumber + randomNumber2 + randomNumber2;
    let sum3 = randomNumber + randomNumber2 + randomNumber3;
    let sum4 = randomNumber3 + randomNumber + randomNumber4;
    let sum5 = randomNumber3 + randomNumber4 + randomNumber5;
    let sum6 = randomNumber5 + randomNumber4 + randomNumber2;

    const refs = useRef(null);
    const ansshow = useRef(null);
    const ansshow2 = useRef(null);

    function answeris(e) {
        // alert(sum6)
        refs.current.style.display = 'block'
        setTimeout(() => {
            refs.current.style.display = 'none'
        }, 5000);
    }

    function next() {
        setReset('reset')
        setTimeout(() => {
            setReset(null)
        }, 400);
        setTimeout(() => {
            setReset('reset')
        }, 500);
        setTimeout(() => {
            setReset(null)
        }, 800);
        // window.location.reload();
        setTimeout(() => {
            setReset('reset')
        }, 1300);
        setTimeout(() => {
            setReset(null)
        }, 1600);
        setReset(reset)
    }

    let submitans;
    function valu(e) {
        submitans = parseInt(e.target.value);
    }
    function submitanser() {
        if (sum6 === submitans) {
            // alert('Right Answer ')
            ansshow.current.style.display = 'block'
            setTimeout(() => {
                ansshow.current.style.display = 'none'
            }, 10000);
        } else {      
            ansshow2.current.style.display = 'block'
            setTimeout(() => {
                ansshow2.current.style.display = 'none'
            }, 5000);
            // alert('Wrong Answer')
        }
    }
    return (
        <div>


            {/* 
            {randomNumber} <br />
          {randomNumber2} <br />
          {randomNumber3} <br />
          {randomNumber4} <br />
          {randomNumber5} <br /> */}
            {/* {randomNumber5} <br /> */}

            {/* <h1>ans:{ sum5}</h1> */}
            {/* 1 */}

            <div>
                {/* <div className='hintans'>
                    <h1>{sum6}</h1>
                    <h4>x</h4>
                </div> */}
            </div>
            <div>
                <span className='show ' ref={ansshow} >Right Answer</span>
                <span className='show ' ref={ansshow2} >Wrong Answer</span>
            </div>
            <div className='btn_update '>
                <button onClick={answeris} >Hint</button> <span className='show ' ref={refs} >{sum6}</span>
                <button onClick={next} className='again' >Play again</button>
            </div>

            <div className='emogy'>
                <div className='rendomimg'>
                    <span className='sp'>{pic[randomNumber]}</span>
                    <span className='add'>+</span>
                    <span className='sp'>{pic[randomNumber]}</span>
                    <span className='add'>+</span>
                    <span className='sp'>{pic[randomNumber]}</span>
                    <span className='eq'>=</span>
                    <span className='ans'>{sum}</span>
                </div>
                {/* 2 */}
                <div className='rendomimg'>
                    <span className='sp'>{pic[randomNumber2]}</span>
                    <span className='add'>+</span>
                    <span className='sp'>{pic[randomNumber]}</span>
                    <span className='add'>+</span>
                    <span className='sp'>{pic[randomNumber2]}</span>
                    <span className='eq'>=</span>
                    <span className='ans'>{sum2}</span>
                </div>
                {/* 3 */}
                <div className='rendomimg'>
                    <span className='sp'>{pic[randomNumber]}</span>
                    <span className='add'>+</span>
                    <span className='sp'>{pic[randomNumber2]}</span>
                    <span className='add'>+</span>
                    <span className='sp'>{pic[randomNumber3]}</span>
                    <span className='eq'>=</span>
                    <span className='ans'>{sum3}</span>
                </div>
                {/* 4 */}
                <div className='rendomimg'>
                    <span className='sp'>{pic[randomNumber3]}</span>
                    <span className='add'>+</span>
                    <span className='sp'>{pic[randomNumber]}</span>
                    <span className='add'>+</span>
                    <span className='sp'>{pic[randomNumber4]}</span>
                    <span className='eq'>=</span>
                    <span className='ans'>{sum4}</span>
                </div>
                {/* 5 */}
                <div className='rendomimg'>
                    <span className='sp'>{pic[randomNumber3]}</span>
                    <span className='add'>+</span>
                    <span className='sp'>{pic[randomNumber4]}</span>
                    <span className='add'>+</span>
                    <span className='sp'>{pic[randomNumber5]}</span>
                    <span className='eq'>=</span>
                    <span className='ans'>{sum5}</span>
                </div>
                {/* 6 */}
                <div className='rendomimg'>
                    <span className='sp'>{pic[randomNumber5]}</span>
                    <span className='add'>+</span>
                    <span className='sp'>{pic[randomNumber4]}</span>
                    <span className='add'>+</span>
                    <span className='sp'>{pic[randomNumber2]}</span>
                    <span className='eq'>=</span>
                    <span className='qes'>❓</span>
                </div>
            </div>
            <div className='chackown'>
                <input type='number' onChange={valu} autoFocus />
                <button onClick={submitanser}>Submit Answer</button>
            </div>



        </div>
    )
}

export default Assets