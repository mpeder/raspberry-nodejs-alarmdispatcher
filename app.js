var msg = 'Hello World';
console.log(msg);

var gpio = require("gpio");
var gpio4 = gpio.export(4, {
   direction: "in",
   ready: function() {
   }
});

console.log('GPIO 4 is: ' + gpio4.value);

// bind to the "change" event
gpio4.on("change", function(val) {
    // value will report either 1 or 0 (number) when the value changes
    console.log(val)
 });

 console.log("end");


 var stdin = process.openStdin();
 
 stdin.addListener("data", function(d) {
    var input = d.toString().trim();
     // note:  d is an object, and when converted to a string it will
     // end with a linefeed.  so we (rather crudely) account for that  
     // with toString() and then trim() 
     console.log("you entered: [" + 
         input + "]");

    if(input == "send")
    {
        console.log("Send email");
    }
   });