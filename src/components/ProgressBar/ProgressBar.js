import React, { useState } from "react";
import "./ProgressBar.css";



function ProgressBar() {
  const totalCircles = 4;
  const [currentActive, setCurrentActive] = useState(1);

  const update = (val) => {
    if (val < 1) {
      setCurrentActive(1);
    } else if (val > totalCircles) {
      setCurrentActive(totalCircles);
    } else {
      setCurrentActive(val);
    }
  };

  const nextClickHandler = () => {
    update(currentActive + 1);
  };

  const prevClickHandler = () => {
    update(currentActive - 1);
  };

  return (
    <>
      <div className="progress-body">
        <div className="progress-bar-container">
          <div className="progress-container">
            <div
              className="progress"
              style={{ width: ((currentActive - 1) / (totalCircles - 1)) * 100 + '%' }}
            ></div>
            {Array(totalCircles)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className={`circle ${idx < currentActive ? "active" : ""}`}
                >
                  {idx + 1}
                </div>
              ))}
          </div>
          <button
            className="btn"
            onClick={prevClickHandler}
            disabled={currentActive === 1}
          >
            Prev
          </button>
          <button
            className="btn"
            onClick={nextClickHandler}
            disabled={currentActive === totalCircles}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}







// The following is how I would write the code for the progress bar in a vanilla JavaScript application

// function ProgressBar() {
//     return(
//         <>
//             <div className="progress-body">
//                 <div className="progress-bar-container">
//                     <div className="progress-container">
//                         <div className="progress" id="progress"></div>
//                         <div className="circle active">1</div>
//                         <div className="circle">2</div>
//                         <div className="circle">3</div>
//                         <div className="circle">4</div>
//                     </div>
//                     <button className="btn" id="prev" disabled>Prev</button>
//                     <button className="btn" id="next">Next</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// const progress = document.getElementById('progress');
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// const circles = document.querySelectorAll('circle'); // don't forget to get all the circles with getElementByClassName('circles') rather than by ID if you intend to use them as an array like below

// let currentActive = 1;

// next.addEventListener('click', () => {
//     currentActive++;
//     console.log(currentActive)
//     if(currentActive > circles.length) {
//         currentActive = circles.length;
//     }
//     update();
// })

// prev.addEventListener('click', () => {
//     currentActive--;
//     console.log(currentActive)
//     if(currentActive < 1) {
//         currentActive = 1;
//     }
//     update();
// })

// function update() {
//     circles.forEach((circle, index) => {  //for each takes a callback function as its first argument
//         if(index < currentActive) {
//             circle.classList.add('active');
//         } else {
//             circle.classList.remove('active');
//         }
//     })
//     const actives = document.querySelectorAll('.active')
//     progress.style.width = (actives.length -1) / (circles.length - 1) * 100 + '%';

//     if(currentActive === 1) {
//         prev.disabled = true;
//     } else if(currentActive === circles.length) {
//         next.disabled = true;
//     } else {
//         prev.disabled = false;
//         next.disabled = false;
//     }
// };

// The forEach() method in JavaScript takes a callback function as its first argument. 
// This callback function is executed once for each element in the array. 
// The callback function itself can accept up to three parameters:

// Element Value: The current element being processed in the array.
// Index (optional): The index of the current element being processed in the array.
// Array (optional): The array forEach was called upon.

// Here's an example of how you might use forEach():

// const array = ['a', 'b', 'c'];
// array.forEach(function(element, index, array) {
//     console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
// });

// Output:
// Element: a, Index: 0, Array: a,b,c
// Element: b, Index: 1, Array: a,b,c
// Element: c, Index: 2, Array: a,b,c


export default ProgressBar