let intervalStatus = false;
let clickedInterval;

const controlInterval = () => {
  if (intervalStatus) {
    clearInterval(clickedInterval);
    intervalStatus = false;
    clickedInterval = null;
  } else {
    intervalStatus = true;
    clickedInterval = setInterval(() => {
      console.log("You are welcome!");
    }, 3000);
  }
}

const buttonSecondTask = document.querySelector('#task_two');
buttonSecondTask.addEventListener('click', controlInterval);