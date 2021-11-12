console.log('Hello World');

class Main {
  color = 'black';
}
class Paragraph extends Main {
  color = 'red';
}

class Span extends Paragraph {}
const s = new Span();
console.log(s.color);

