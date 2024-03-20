 const bigBox = document.getElementById('bigBox')
 const box = document.querySelectorAll('box')
 const reset = document.getElementById('reset')
 const result = document.getElementById('result')

 const player_X_won = 'player_X_won'
 const player_O_won = 'player_O_won'
 const draw = 'draw'


const onlyPossibleWin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  let