# Journal

## 15 December 2021
p1 = player()
p2 = player()

while no-one is winning yet:
 if i is even then p1 plays
 if i is odd then p2 plays

p1 and p2 will get their role 'O' or 'X'

inside the p1 class there should be function that calls setBoard(role,index)

if 1 square is already taken by 'X' or 'O' it cannot be changed

## 19 December 2021
Remember to set max player count = 2
because we know that player 1 will always play 'X', we do not need
to somehow make connection between them, we can just check if 'X' is
winning or 'O' is winning. if 'X' is winning then update player1
winning status.

if player isWinning == true, update Gameboard.win == true.

I already implemented board_item update using setBox

Mouse click function to update the gameboard already implemented

Next mission : implement player 1 and player 2 plays

## 21 December 2021
Already implemented the odd even to assign who plays
if number i is even player 1 plays
if number i is odd player 2 plays
Need to check who is winning

I think we don't need isWinning function in each player class
we just need to make isWinning in gameboard class and then check for wether player with sign 'X' win or sign 'O' win.

I fixed the problem where player can change the sign in board even if the board had been signed previosly.
