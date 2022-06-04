# Plan

## Requirements

- [ ] Should allow for basic math operators you'd find on simple calculators
  - [ ] Add
  - [ ] Subtract
  - [ ] Multiply
  - [ ] Divide
- [ ] Has a "clear" button
- [ ] Has a backspace button
- [ ] Has keyboard support
- [ ] Buttons have a "press-down" effect in CSS
- [ ] Allow users to input floating points
- [ ] Display error message when user divides by 0
- [ ] Round answers with a long line of decimals
- [ ] Evaluate one pair of numbers at a time (`12 + 7 - 5 * 3 = 42`)
- [ ] You can't enter two operators in a row
- [ ] Every time you enter an operator after a number, show the number + operator pair on a sub-line and clear the mainline for another input
- [ ] You can change the operator of a number-operator pair assuming nothing has been computed yet
- [ ] Do not allow numbers to overflow off the screen (use scientific notation for very large numbers)

## Steps

- [x] Create a mockup of the calculator
- [x] Add basic HTML
- [x] Add basic CSS
- [x] Create calculator operations in JS
- [x] Allow calculator to execute a basic operation such as 3 + 5 = 8
- [x] Enable the addition of multi-digit numbers
- [x] Enable all operators
- [x] Enable the "clear" button
- [x] Activate the subline
- [x] Disable button-pressing at inappropriate times
- [ ] Enable decimal inputs
- [ ] Enable DEL button