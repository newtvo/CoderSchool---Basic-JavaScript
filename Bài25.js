var tom = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse) {
      this.stomach.push(mouse);
      return this;
    }
  };
  
  var m1 = { name: 'm1' };
  var m2 = { name: 'm2' };
  var m3 = { name: 'm3' };
  
  //tom.eat(m1).eat(m2).eat(m3); // method chaining
  
  // console.log('Tom: ');
  // console.log(tom);
  
  function Mouse(name) {
    this.name = name;
  }
  
  var mouse1 = new Mouse('m1');
  var mouse2 = new Mouse('m2');
  var mouse3 = new Mouse('m3');
  
  // console.log(mouse1, mouse2, mouse3);
  
  tom.eat(mouse1).eat(mouse2).eat(mouse3);
  
  console.log(tom);
  