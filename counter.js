//The Counter factory function
function Counter() {
    return {
      count: 0,
      min: 0,
      max: 30,
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
    };
  }


