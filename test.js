
const test = require('tape')
// const playerJs = require('./Player')
const cards2Table = require('./cards-2-table')

// test.skip('correct card value',
//   function (t) {
//     t.equal(playerJs.toNum('J'), 11)
//     t.end()
//   }
// )

test('cards 2 table convert should work', (t) => {
  let cards = [{rank: '4', suit: 'spades'}, {rank: '5', suit: 'spades'}]
  t.equal(cards2Table.convert(cards), '54s')

  cards = [{rank: '4', suit: 'spades'}, {rank: '4', suit: 'spades'}]
  t.equal(cards2Table.convert(cards), '44')

  cards = [{rank: '4', suit: 'spades'}, {rank: '5', suit: 'hearts'}]
  t.equal(cards2Table.convert(cards), '54o')

  cards = [{rank: '10', suit: 'spades'}, {rank: '4', suit: 'hearts'}]
  t.equal(cards2Table.convert(cards), 'T4o')

  t.end()
})

test('cards 2 table percentage should work', (t) => {
  let cards = [{rank: 'A', suit: 'spades'}, {rank: 'A', suit: 'spades'}]
  t.equal(cards2Table.getPercentage(cards), 0.59)

  cards = [{rank: 'J', suit: 'spades'}, {rank: 'K', suit: 'spades'}]
  t.equal(cards2Table.getPercentage(cards), 5.33)

  cards = [{rank: 'A', suit: 'spades'}, {rank: 'Q', suit: 'cubes'}]
  t.equal(cards2Table.getPercentage(cards), 10.65)

  t.end()
})
