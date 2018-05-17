function getSentence({ foo }) {
  return foo
}

const o = {
  subject: 'I',
  verb: 'love',
  object: 'JavaScript',
  foo: {
    baz1: 'aaaaaaaaaaaaa',
    baz2: 'bbbbbbbbbbbbb',
    baz3: 'ccccccccccccc',
  }
}

console.log(getSentence(o))