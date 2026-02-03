// Problem

// একটা class তৈরি করো EventEmitter

// on(event, callback) → listener যোগ করবে

// emit(event, data) → সব listener call করবে

// off(event, callback) → specific listener remove করবে

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((cb) => cb(data));
    }
  }

  off(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter((cb) => cb !== callback);
  }
}

// demo
const emitter = new EventEmitter();
function greet(name) {
  console.log("Hello " + name);
}

emitter.on("sayHi", greet);
emitter.emit("sayHi", "Alice"); // Hello Alice
emitter.off("sayHi", greet);
emitter.emit("sayHi", "Bob"); // no output
