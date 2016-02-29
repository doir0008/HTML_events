// Create event listener when DOM content has loaded and run anonymous function
document.addEventListener("DOMContentLoaded", function () {
  
    // Setup the variables we'll need to work with the content
    var leftBox = document.querySelector("div.col-md-6"),
        rightBox = document.querySelector("div.col-md-4"),
        leftBoxHovered = false;
 
    // Change content in leftBox  
    function leftBoxChange() {
        leftBox.innerHTML = "Lookie Here! You are hovering the mouse over the left box!";
        leftBoxHovered = true;
    }
    
    // Change content in rightBox
    function rightBoxChange() {
        rightBox.innerHTML = "Oh oh! Right box over here!";
    }
    
    // Change leftBox content back to original
    function leftBoxChangeBack() {
        leftBox.innerHTML = "Detect if the mouse goes over this box";
    }
    
    // Change rightBox content back to original
    function rightBoxChangeBack() {
        rightBox.innerHTML = "Update the status of this box. This box should not be clickable at this point.";
    }
    
    // Pop-up alert when rightBox is clicked ONLY after leftBox has been hovered over
    function rightBoxClicked() {
        if (leftBoxHovered === true) {
            window.alert("OooooOo! You clicked me!");
        }
    }
    
    // Add Event Listener to call function based on mouse action
    leftBox.addEventListener("mouseover", leftBoxChange);
    leftBox.addEventListener("mouseout", leftBoxChangeBack);
    rightBox.addEventListener("mouseover", rightBoxChange);
    rightBox.addEventListener("mouseout", rightBoxChangeBack);
    rightBox.addEventListener("click", rightBoxClicked);
});
