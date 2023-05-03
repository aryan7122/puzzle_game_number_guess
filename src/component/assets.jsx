import React from 'react'
import './style.css'


const Assets = () => {
    let pic = ['🎮', '🔊', '⚙️', '😍', '😴', '🤑', '💀', '👻', '👽', '🐭', '🐸', '🐢', '🐬', '🧟', '🥷', '🎈', '🎉', '😷', '🕸️', '🎯', '🔒', '🔑', '🧲', '☎️', '🏧', '⏰', '🧭', '🏚️', '☢️', '📵', '🚓']

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

    function answeris() {
        alert(sum6)
    }

    function next() {
        window.location.reload();
    }

    let submitans = '';
    function valu(e) {
        submitans = e.target.value;
        // alert(submitans)
    }
    function submitanser() {
        { (sum6 == submitans) ? alert("Right Answer") : alert('Worng Answer') }
        // if (sum5 === submitans.toString()) {
        //     alert('good anser ')
        // } else {
        //     alert('this is  not good anser')
        // }
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

            <div className='btn_update'>
                <button onClick={answeris} >Hint</button>
                <button onClick={next} >Play again</button>
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
                    <span className='qes'>...?</span>
                </div>
            </div>
            <div className='chackown'>
                <input type='text' onChange={valu} autoFocus/>
                <button onClick={submitanser}>Submit Answer</button>
            </div>

            
           
        </div>
    )
}

export default Assets