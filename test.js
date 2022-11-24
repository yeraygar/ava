import test from 'ava';

test('foo', t => {
	t.is(2 + 2, 4);
});

function sum (a, b) {
  return a + b;
}

test('foo is being tested', t => {
  t.pass();
})
test('sum of 2 numbers', t => {
  t.is(sum(1, 2), 3);
})

