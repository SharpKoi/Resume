"use strict";

// 0 0 0 0 0 1 = 1
// 0 0 0 0 1 0 = 2
// ...
// 1 0 0 0 0 0 = 32
const binary_seeds = [1, 2, 4, 8, 16, 32];
var checked_list = [];

function guessNumber() {
  let answer = 0;
  checked_list.forEach(id => {
    answer += binary_seeds[id];
  });

  return answer;
}

function createCard(cardID) {
  const card = document.createElement('div');
  card.className = 'card';

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.addEventListener('change', (event) => {
    if(event.target.checked) {
      checked_list.push(cardID);
    }else {
      checked_list.splice(checked_list.indexOf(cardID), 1);
    }
  });
  checkbox.style.marginLeft = '10px';

  const title_bar = document.createElement('div');
  title_bar.className = 'card-title';
  title_bar.innerHTML = '<span>第 ' + (cardID+1) + ' 張卡片</span>';
  title_bar.appendChild(checkbox);

  const number_table = document.createElement('table');
  number_table.className = 'card-table';

  let col_count = 0;
  let cell_row = document.createElement('tr');
  for(let n = 1; n < 64; n++) {
    if(n & binary_seeds[cardID]) {
      const cell = document.createElement('td');
      cell.className = 'card-table-cell';
      cell.innerHTML = String(n);
      cell_row.appendChild(cell);
      col_count++;
      if(col_count == 8) {
        number_table.appendChild(cell_row);
        cell_row = document.createElement('tr');
        col_count = 0;
      }
    }
  }

  card.appendChild(title_bar);
  card.appendChild(number_table);

  return card;
}

function main() {
  let cards_container = document.getElementById('cards-container');
  for(let i = 0; i < 6; i++) {
    cards_container.appendChild(createCard(i));
  }
  

  let submit_bt = document.getElementById('submit');
  submit_bt.addEventListener('click', () => {
    let ans = guessNumber();
    if(ans == 0) alert('Please at leat choose one card.');
    else alert('I guess your number is '+ans);
  })
}

main();
