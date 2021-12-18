// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

let markup = new Workshop("John");
console.log(typeof Workshop);

console.log(markup);

let js = new Workshop("Jane");
console.log(js);

markup.ask("teaches HTML???");
js.ask("teaches JS???");
