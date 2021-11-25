/*==============================================
            JS Form Validation
            author: Na Shree Nitu
            Date: 11/23/2021
===============================================*/
// DOM Selection
const loginContainer = document.querySelector('.login-container');
const loginForm = document.getElementById('loginform');

const loginPassword = document.getElementById('loginUserPass');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const showIcon = document.querySelector('i.fa-eye');


// Banking starts
const transArea = document.getElementById('trans-area');
const depositForm = document.getElementById('depositForm');
const depositAmount = document.getElementById('depositAmount');
const withdrawForm = document.getElementById('withdrawform');
const withdrawAmount = document.getElementById('withdrawAmount');



showIcon.addEventListener('click', showPassword);

// Show/Hide password icon and color change
function showPassword(){
  if(loginPassword.type === 'password'){
     loginPassword.type = 'text';
     showIcon.style.color = 'red';
  }else{
     loginPassword.type = 'password';
     showIcon.style.color = 'black';
  }
}

// Simple validation
loginForm.addEventListener('submit', submitValidation);

function submitValidation(e){
  e.preventDefault();
  
  //First Name validation
  if(firstName.value === '' || firstName.value.length < 3){
    showErrorMessage(firstName, 'First Name field must not be empty & less then 3');
  }else{
    showSuccessMessage(firstName);
  }

  //Last Name validation
    if(lastName.value === '' || lastName.value.length < 3){
      showErrorMessage(lastName, 'Last Name field must not be empty & less then 3');
    }else{
      showSuccessMessage(lastName);
    }

   //User Password validation
   if(loginPassword.value === '' || loginPassword.value.length < 5){
    showErrorMessage(loginPassword, 'User Password field must no be empty & less then 5');
  }else{
    showSuccessMessage(loginPassword);
    loginContainer.style.display = 'none';
    transArea.style.display = 'block';
  }

  

  // Everything clear after form submit
  firstName.value = '';
  lastName.value = '';
  loginPassword.value = '';

  //after submit this form you can see this alert message your broweser top bar
  alert ('Login Successfull');
}

// Show error message function 
function showErrorMessage(input, message){
  const formField = input.parentElement;
  formField.className = 'form-field error';
  if(formField.className = 'form-field error'){
    const alertMessage = formField.querySelector('.alert-message');
    alertMessage.style.visibility = 'visible';
    alertMessage.style.color = '#704c4c';
    alertMessage.innerText = message;
  }
}

// Show success message function
function showSuccessMessage(input, message){
  const formField = input.parentElement;
  formField.className = 'form-field success';
  if(formField.className = 'form-field success'){
    const alertMessage = formField.querySelector('.alert-message');
    alertMessage.style.visibility = 'hidden';
    alertMessage.innerText = message;
  }
}

//added eventListener for depositeForm
depositForm.addEventListener('submit', depositSubmit);

function depositSubmit(e){
  e.preventDefault();

  if(depositAmount.value == ''){
    showErrorMessage(depositAmount, 'Deposit Amount field must not blank');
  }else{
    showSuccessMessage(depositAmount);

    const depositNumber = parseFloat(depositAmount.value);
    updateSpanBlance('currentDeposit', depositNumber);
    updateSpanBlance('currentBlance', depositNumber);
  

    depositAmount.value = '';
    
  }
}

//Update fuunction starts here
function updateSpanBlance(id, depositNumber){
    const currentDeposit = document.getElementById(id).innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById(id).innerText = totalDeposit;
}

//added eventListener for withdrawForm
withdrawForm.addEventListener('submit', withdrawSubmit);

function withdrawSubmit(e){
  e.preventDefault();

  if(withdrawAmount.value == ''){
    showErrorMessage(withdrawAmount, 'Withdraw Amount field must not blank');
  }else{
    showSuccessMessage(withdrawAmount);
    const withdrawAmountNumber = parseFloat(withdrawAmount.value);
    updateSpanBlance('currentWithdraw', withdrawAmountNumber);
    updateSpanBlance('currentBlance', -1*withdrawAmountNumber);
    withdrawAmount.value = '';
  }
}
