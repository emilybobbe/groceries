$(document).ready(function(){
  $("#blanks").submit(function(event){
    // debugger;
    var blanks = [];
    var userInput = $("#dairy").val();
    blanks.push(userInput);
    var userInput2 = $("#veggie").val();
    blanks.push(userInput2);
    var userInput3 = $("#fruit").val();
    blanks.push(userInput3);
    var userInput4 = $("#meat").val();
    blanks.push(userInput4);


    var userInput = blanks.map(function(blank){
      return blank.toUpperCase();
    });



  userInput.sort();
  userInput.forEach(function(userIn) {
    $(".results").append("<li>" + userIn + "</li>")
    $("#story").show();
  })
  console.log(blanks);
  console.log(userInput)
  event.preventDefault();
  })

});
