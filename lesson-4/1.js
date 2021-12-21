const showMessage = () => {
  console.log('Hello World');
}

const debounceButton = (funcToDelay, delay) => {
  let prevInterval;

  return function() {
    const functionToCall = () => funcToDelay.apply(this, arguments);
    clearInterval(prevInterval);
    prevInterval = setInterval(functionToCall, delay);
  }
}

const buttonFirstTask = document.querySelector('#task_one');
buttonFirstTask.addEventListener('click', debounceButton(showMessage, 5000));

