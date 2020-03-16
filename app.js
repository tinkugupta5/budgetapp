
// BUDGET CONTROLLER

var budgetController = (function(){

  //some code 


})();


// UI CONTROLLER


var UIController = (function(){

    var DOMstring = {
        inputType: '.add__type',
        inputDescription: '.add__value',
        inputValue: '.add__value'

    };

    return{
        getInput: function () {
            return{
            type: document.querySelector(DOMstring.inputType).value,
            description: document.querySelector(DOMstring.inputDescription).value,
            value: document.querySelector( inputValue).value
            };
      
        }
    };


    // Some Code

})();

//GLOBAL APP CONTROLLER


var controller = (function(budgetCtrl,UICtrl){

//   some code 

var ctrlAddItem = function()
{

 // get the filled input data

 var input = UICtrl.getInput();
 console.log(input);

 // add the item to the budget controller
 //add the item to the ui
 // calculate the budget
 // display the budget on the ui.

console.log("it works");

}

document.querySelector('.add__btn').addEventListener('click' , ctrlAddItem);

document.addEventListener('keypress',function(event){

    if(event.keyCode === 13 || event.which === 13 )
    {       
       ctrlAddItem();
    } 
     
});


})(budgetController,UIController);