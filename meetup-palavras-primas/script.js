function handleClick() {
  const word = document.getElementById('inputWord').value
  const isPrimeWord = checkPrimeWord(word)
  if (isPrimeWord) {
    document.getElementById('logo').setAttribute('src', 'primo.png')
    document.getElementById('title').innerHTML = 'Palavra Prima!'
  } else {
    document.getElementById('logo').setAttribute('src', 'just-llama.png')
    document.getElementById('title').innerHTML = 'Palavras primas'
  }
  document.getElementById('counter').innerHTML = `O valor dessa palavra é ${convertWordToNumber(word)}`
  document.getElementById('inputWord').value = ''
}

function checkPrimeWord(word) {
  const sumLettersValues = convertWordToNumber(word);
  return numberIsPrime(sumLettersValues);
}

function convertWordToNumber(word){
  let sumLetters = 0 ;
  const a = 'a';
  const A = 'A';
  for (const letra of word) {
      if(letra == letra.toUpperCase()){
          sumLetters += letra.charCodeAt(0) - A.charCodeAt(0) + 27;
      }
      else{
          sumLetters += letra.charCodeAt(0) - a.charCodeAt(0) + 1;
      }
  }
  return sumLetters;
}

function numberIsPrime(number){

  for(let i = 2; i < number/2; i++ ){
      if((number % i) == 0 ){
          return false;
      }
  }
  return true;
}