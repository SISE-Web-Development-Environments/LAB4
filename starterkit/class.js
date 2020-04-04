// properties are directly passed to `create` method
//Class.create: creates a claa and returns a constructor function. Calling the
//the constructor function will invoke the class's initialize method.
var Person = Class.create({
  initialize: function(name) {
    this.name = name;
  },
  say: function(message) {
    return this.name + ': ' + message;
  }
});

// when subclassing, specify the class you want to inherit from
var Pirate = Class.create(Person, {
  // redefine the speak method
  say: function($super, message) {
    return $super(message) + ', yarr!';
  }
});


function myFunction() {
	var jack = new Pirate('Jack Sparrow');
	var msg = jack.say('Ahoy');
	// -> "Jack Sparrow: Ahoy, yarr!"


	var assaf = new Person('Assaf Nahum');
	var msg2 = assaf.say('Hello!');
	// -> "Assaf Nahum: Hello!"


    $("h01").insert(msg);
	$("h02").insert(msg2);
}

Event.observe(window, "load", myFunction);
