import React from 'react'

const Assets = () => {
    let pic = ['🎮','🔊','⚙️','😍','😴','🤑','💀','👻','👽','🐭','🐸','🐢','🐬','🧟','🥷','🎈','🎉','😷','🕶️','🎯','🔒','🔑','🧲','☎️','🏧','⏰','🧭','🏚️','☢️','📵','🚓']

    // Generate a random number between 1 and 30
    let randomNumber = Math.floor(Math.random() * 30) + 1;
    let randomNumber2 = Math.floor(Math.random() * 30) + 1;
    let randomNumber3 = Math.floor(Math.random() * 30) + 1;
    let randomNumber4 = Math.floor(Math.random() * 30) + 1;
    let randomNumber5 = Math.floor(Math.random() * 30) + 1;

    let sum = randomNumber + randomNumber + randomNumber + randomNumber;
    let sum2 = randomNumber + randomNumber2 + randomNumber2 + randomNumber2;
    let sum3 = randomNumber + randomNumber2 + randomNumber3 + randomNumber3;
    let sum4 = randomNumber + randomNumber2 + randomNumber3 + randomNumber4;
    let sum5 = randomNumber5 + randomNumber2 + randomNumber3 + randomNumber4;


    function answeris() {
        alert(sum5)
    }

    function next() {
        window.location.reload();
    }

  return (
      <div>
          {/* {randomNumber} <br />
          {randomNumber2} <br />
          {randomNumber3} <br />
          {randomNumber4} <br />
          {randomNumber5} <br /> */}
          <hr />
          <h1>{pic[randomNumber]} + {pic[randomNumber]} + {pic[randomNumber]} + {pic[randomNumber]} = {sum}</h1>
          <h1>{pic[randomNumber]} + {pic[randomNumber2]} + {pic[randomNumber2]} + {pic[randomNumber2]} = {sum2}</h1>
          <h1>{pic[randomNumber]} + {pic[randomNumber2]} + {pic[randomNumber3]} + {pic[randomNumber3]} = {sum3}</h1>
          <h1>{pic[randomNumber]} + {pic[randomNumber2]} + {pic[randomNumber3]} + {pic[randomNumber4]} = {sum4}</h1>
          <h1>{pic[randomNumber5]} + {pic[randomNumber2]} + {pic[randomNumber3]} + {pic[randomNumber4]} = ?</h1>
          <hr />
          <button onClick={answeris} style={{fontSize:'30px'}}>chack the answer</button> <hr />
          <button onClick={next} style={{ fontSize: '30px' }}>Next game</button>
          <hr />
          {/* <h1>ans:{ sum5}</h1> */}
      </div>
  )
}

export default Assets