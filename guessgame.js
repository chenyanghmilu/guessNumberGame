
const game = {
    title: 'Guess the Number!',
    message1: document.getElementById('msg1'),
    message2: document.getElementById('msg2'),
    inputValue: document.getElementById('inputValue'),
    submitbtn: document.getElementById('submitbtn'),
    startresetbtn: document.getElementById('startresetbtn'),
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],

    play: function() {
        // const setSmallNum = document.getElementsByTagName('small').textContent;
        // const setBigNum = document.getElementsByTagName('big').textContent;
        // if (!(setBigNum >= setSmallNum || (setBigNum.length == 0 && setSmallNum.length == 0))){
        //     this.message1.textContent = `please make sure your setting smallest number is less than biggest number`;
        //     return game.play();
        // }
        // this.smallestNum = setSmallNum;
        // this.biggestNum = setBigNum;
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        let guess = parseInt(this.inputValue.value);
    //   while (guess !== this.secretNum) {
    //       console.log('RUN')
    //       guess = this.submitbtn.addEventListener('click', this.getGuess);
    //       this.prevGuesses.push(guess);
    //       this.render(guess);
    //   }
    },
    getGuess: function(){
        let guess = parseInt(document.getElementById('inputValue').value);
        while (!(guess >= this.smallestNum && guess <= this.biggestNum)){
            guess = this.message2.textContent = `Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`;
        }
        return guess;
    },
    render: function(guess){
        if (guess === this.secretNum){
            this.message2.textContent = `Congrats! You guessed the number ${this.prevGuesses.length} in guesses!`;
        } else {
            let guesslist = guess > this.secretNum ? "too high" : "too low";
            this.message2.textContent = `Your guess is too ${guesslist} 
            Previous guesses: ${this.prevGuesses.join(', ')}`;
        }
    }
};

game.startresetbtn.addEventListener('click', game.play());


/*
const game = {
    title: 'Guess the Number!',
    biggestNum: null,
    smallestNum: null,
    secretNum: null,
    prevGuesses: [],
    play: function() {
        const setSmallNum = parseInt(prompt(`please set smallest number:`));
        const setBigNum = parseInt(prompt(`please set biggest number:`));
        if (!(setBigNum >= setSmallNum || (setBigNum.length == 0 && setSmallNum.length == 0))){
            alert(`please make sure your setting smallest number is less than biggest number`);
            return game.play();
        }
        this.smallestNum = setSmallNum;
        this.biggestNum = setBigNum;
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      let guess = NaN;
      while (guess !== this.secretNum) {
          guess = this.getGuess();
          this.prevGuesses.push(guess);
          this.render(guess);
      }
    },
    getGuess: function(){
        let guess = NaN;
        while (!(guess >= this.smallestNum && guess <= this.biggestNum)){
            guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`));
        }
        return guess;
    },
    render: function(guess){
        if (guess === this.secretNum){
            alert(`Congrats! You guessed the number ${this.prevGuesses.length} in guesses!`);
        } else {
            let guesslist = guess > this.secretNum ? "too high" : "too low";
            alert(`Your guess is too ${guesslist} 
            Previous guesses: ${this.prevGuesses.join(', ')}`);
        }
    }
};
game.play();
*/