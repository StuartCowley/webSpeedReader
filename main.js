const timeInterval = 100;

// Slider display

const slider = document.getElementById("speed-slider");
const output = document.getElementById("speed-value");
output.innerHTML = slider.value;

// Update the current slider value on changing value
slider.oninput = function() {
  output.innerHTML = this.value;
}

// Process incoming text
function splitInputText(text) {
    return text.split(' ');
}

// timer function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//clear input field
function clearInput() {
  document.getElementById('text-input').value = '';
}



async function logWords(text) {
  if (document.getElementById('text-input').value == '') {
    alert('Enter something to read')
  } else {
  let wordsArray = splitInputText(text);
  document.getElementById('text-output').innerHTML = 'Ready?'
  await sleep(2000);
  document.getElementById('text-output').innerHTML = 'Three...'
  await sleep(1000);
  document.getElementById('text-output').innerHTML = 'Two...'
  await sleep(1000);
  document.getElementById('text-output').innerHTML = 'One...'
  await sleep(1000);
    
  for (let i = 0; i < wordsArray.length; i++) {
    document.getElementById('text-output').innerHTML = wordsArray[i];
    await sleep(1000/(slider.value/60));
  }
  document.getElementById('text-output').innerHTML = '';
  }
}