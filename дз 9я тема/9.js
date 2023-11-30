function generatePairs() {
    let pairs = [];
    for (let i = 1; i <= 8; i++) {
      pairs.push(i, i);
    }
    return pairs;
  }
  
  //Перемешивание массива
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  //Создание массива с перемешанными номерами
  let shuffledPairs = shuffle(generatePairs());
  
  //Создание DOM-элементов карточек
  const gameContainer = document.querySelector('.cards-grid');
  
  shuffledPairs.forEach(num => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.value = num;
    gameContainer.appendChild(card);
  });
  
  // Добавление событий клика на карточки
  let selectedCards = [];
  
  gameContainer.addEventListener('click', function(e) {
    const clickedCard = e.target;
    if (clickedCard.classList.contains('card') && selectedCards.length < 2) {
      clickedCard.classList.add('flipped');
      selectedCards.push(clickedCard);
      
      if (selectedCards.length === 2) {
        const value1 = selectedCards[0].dataset.value;
        const value2 = selectedCards[1].dataset.value;
        if (value1 !== value2) {
          setTimeout(() => {
            selectedCards.forEach(card => card.classList.remove('flipped'));
            selectedCards = [];
          }, 1000);
        } else {
          selectedCards = [];
        }
      }
    }
  });
  
  // Добавление события для кнопки "Сыграть ещё раз"
  const restartButton = document.getElementById('restart-btn');
  restartButton.addEventListener('click', function() {
    gameContainer.innerHTML = '';
    shuffledPairs = shuffle(generatePairs());
    shuffledPairs.forEach(num => {
      const card = document.createElement('div');
      card.className = 'card';
      card.dataset.value = num;
      gameContainer.appendChild(card);
    });
  });