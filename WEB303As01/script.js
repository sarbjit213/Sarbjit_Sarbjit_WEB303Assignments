/*
	WEB 303 Assignment 1 - jQuery
	{Sarbjit}
*/
$(document).ready(function () {
    // Event handler for the "keyup" event to run the Salary and Percent..... Used keyup instead of change because keyup gives result immmediately
    $("#yearly-salary, #percent").on("keyup", function () {
        // Get the input values
        var salary = parseFloat($("#yearly-salary").val());
        var percent = parseFloat($("#percent").val());
            // Make sure that the given input values are valid numbers
        if (!isNaN(salary) && !isNaN(percent)) {
            //Amount's Calculations
            var amount = (salary * percent) / 100;
            // Round to dollars and cents by usingg the  toFixed() methoddd
            var roundedAmount = amount.toFixed(2);
            // Update the amount(output) in the HTML
            $("#amount").text("$" + roundedAmount);
        } else {
            // When the inputs are not valid then it displays an error message
            $("#amount").text("Invalid input");
        }
    });
});