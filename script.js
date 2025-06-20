    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let guessCount = 0;
    const input = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const guessCounter = document.getElementById('guessCount');
    const submitButton = document.getElementById('submitGuess');
    const restartButton = document.getElementById('restartGame');

    submitButton.addEventListener('click', () => {
      const userGuess = Number(input.value);
      guessCount++;

      if (userGuess < 1 || userGuess > 100) {
        feedback.textContent = '🚫 Please enter a number between 1 and 100.';
      } else if (userGuess < secretNumber) {
        feedback.textContent = '⬆️ Too low! Try again.';
      } else if (userGuess > secretNumber) {
        feedback.textContent = '⬇️ Too high! Try again.';
      } else {
        feedback.textContent = `🎉 Congratulations! You guessed it in ${guessCount} attempts.`;
        submitButton.disabled = true;
        restartButton.style.display = 'inline-block';
      }

      guessCounter.textContent = `Number of guesses: ${guessCount}`;
      input.value = '';
      input.focus();
    });

    restartButton.addEventListener('click', () => {
      secretNumber = Math.floor(Math.random() * 100) + 1;
      guessCount = 0;
      feedback.textContent = '';
      guessCounter.textContent = '';
      input.value = '';
      input.focus();
      submitButton.disabled = false;
      restartButton.style.display = 'none';
    });