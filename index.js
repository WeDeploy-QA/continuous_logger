console.log('starting...');

let count = 0;
let linesLimit = 20000;

function continuousLogger() {
  if (count < linesLimit) {
    console.log('logging line # ' + count);
    setTimeout(() => {
      continuousLogger()
    }, 5000);
  } else {
    console.log(finished);
  }
}

continuousLogger();