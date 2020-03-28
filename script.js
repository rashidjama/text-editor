/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

 //catch the dom
 const textAreaEl = document.getElementById("text-input");
 const outputTextEl = document.getElementById("text-output");



/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */

function updateText(){
  // CODE GOES HERE
  const textAreaEl = document.getElementById("text-input").value;
  outputTextEl.innerHTML = textAreaEl;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem){
  //CODE GOES HERE
  elem.classList.toggle('active');
  outputTextEl.classList.toggle("bold");
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem){
  elem.classList.toggle("active")
  outputTextEl.classList.toggle('italic')
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem){
    //CODE GOES HERE
    elem.classList.toggle("active")
    outputTextEl.classList.toggle('underline')
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType){
  // CODE GOES HERE
  outputTextEl.style.textAlign = alignType;
  const buttonsListEl = document.getElementsByClassName("align");
  for(let i=0;i<buttonsListEl.length;i++) {
    buttonsListEl[i].classList.remove("active")
  }
  elem.classList.add("active")
}