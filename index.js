console.log('starting...');

let count = 0;
let linesLimit = 20000;

function continuousLogger() {
  if (count < linesLimit) {
    console.log('logging line # ' + count);
    count++;
    setTimeout(() => {
      continuousLogger()
    }, 5);
  } else {
    console.log('finished');
  }
}

continuousLogger();
