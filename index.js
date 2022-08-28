// Your code here
const dodger = document.getElementById("dodger");

// moves Dodger to the Left 
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) { // condition evaluates if left is greater than zero or left is a positive number 
      dodger.style.left = `${left - 1}px`;
    }
  }


  // listens for events in the keyboard
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    
    }
  });
  

  // moves Dodger to the Right 
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }



  // listens for events in the keyboard
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight   ();
    
    }
  });

  