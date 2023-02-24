//Declaring variables
const Name=document.querySelector("#cardholderName")
const Number=document.querySelector("#cardholderNumber")
const expirationDateMonth=document.querySelector("#expirationDateMonth")
const expirationDateYear=document.querySelector("#expirationDateYear")
const CVC=document.querySelector("#cvc")


const sourceContent = Name.innerHTML;

destinationElement.innerHTML = sourceContent;

const form = document.querySelector("#myForm");
form.addEventListener('submit',function(event){
    const hiddenElement = document.querySelector("#myHiddenElement");
    hiddenElement.style.display = "block";
    event.preventDefault();
});

