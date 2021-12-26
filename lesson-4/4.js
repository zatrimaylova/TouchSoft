const controlInputChange = (e) => {
  console.log(e.target.value);
}

const debounceInput = (funcToDelay, delay) => {
  let prevTimeout;

  return function() {
    const functionToCall = () => funcToDelay.apply(this, arguments);
    clearTimeout(prevTimeout);
    prevTimeout = setTimeout(functionToCall, delay);
  }
}

const inputEl = document.querySelector('#task_four');
inputEl.addEventListener('keyup', debounceInput(controlInputChange, 1000));