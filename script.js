/*
Program name: script.js
Author: Phat Le
Date created: 03/20/2026
Date last edited: 04/15/2026
Version: 3.0
Descriptiton: This is my javascript of the codes required to make my Medical website.
              These code adds additional quality of life attributes to the websites such as: Password varification, SSN formatting, DOB Verificationm, and others using Methods that verify user inputs on the fly..
*/
function showDate()     
        {
            const d = new Date();
            document.getElementById("today").innerHTML =
                d.toLocaleDateString('en-US', 
                {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }
            );
            const dobInput = document.getElementById("dob");

            const maxDate = new Date();
            const minDate = new Date();
            minDate.setFullYear(maxDate.getFullYear() - 120);

                dobInput.max = maxDate.toISOString().split("T")[0];
                dobInput.min = minDate.toISOString().split("T")[0];
        }        
function validatePassword()     
            {
                const pw = document.getElementById("password").value;
                const cpw = document.getElementById("confirm_password").value;
                const userId = document.getElementById("user_id").value.toLowerCase();
                const errorBox = document.getElementById("passwordError");

                errorBox.innerText = "";
                errorBox.style.color = "red";

                  if (!pw || !cpw)
                    {
                      errorBox.style.color = "red";  
                      errorBox.innerText = ("Password fields cannot be empty.");
                      return false;      
                    }
              
                    if (pw.length < 8) 
                    {
                      errorBox.innerText = "Password must be at least 8 characters.";
                      return false;
                    }

                    if (!/[A-Z]/.test(pw))
                    {
                      errorBox.innerText = "Password must include at least one uppercase letter.";
                      return false;
                    }

                    if (!/[a-z]/.test(pw))
                    {
                      errorBox.innerText = "Password must include at least one lowercase letter.";
                      return false;
                    }

                    if (!/[0-9]/.test(pw))
                    {
                      errorBox.innerText = "Password must include at least one number.";
                      return false;
                    }
                    
                    if (!/[@$!%*?&]/.test(pw))
                    {
                      errorBox.innerText = "Password must include at least one special character.";
                      return false;
                    }
              
                    if (pw.toLowerCase() === userId)
                    {
                      errorBox.innerText = "Password cannot be the same as your User ID.";
                      return false;
                    }

                    if (userId && pw.toLowerCase().includes(userId))
                    {
                      errorBox.innerText = "Password cannot contain your User ID.";
                      return false;
                    }

                    if (pw !== cpw)
                    {
                      errorBox.innerText = "Passwords do not match.";
                      return false;
                    }

                    errorBox.style.color = "green";
                    errorBox.innerText = "Valid password";
                    return true;
            }

function validateDOB()
{
  const dobInput = document.getElementById("dob").value;
  const errorBox = document.getElementById("dobError");
  errorBox.innerText = "";
  errorBox.style.color = "red";

    if (dobInput === "")
    {
      errorBox.innerText = "Date of birth is required.";
      return false;
    }

  const dob = new Date(dobInput);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const minDate = new Date();
  minDate.setHours(0, 0, 0, 0);
  minDate.setFullYear(today.getFullYear() - 120);

    if (dob < minDate)
    {
      errorBox.innerText = "Date of birth cannot be more than 120 years ago.";
      return false;
    }

    if (dob > today)
    {
      errorBox.innerText = "Date of birth cannot be in the future.";
      return false;
    }

    errorBox.style.color = "green";
    errorBox.innerText = "Valid date of birth";
    return true;
}

function validateFirstName()
{
  const first = document.getElementById("first_name").value.trim();
  const errorBox = document.getElementById("firstNameError");
  errorBox.innerText = "";
  errorBox.style.color = "red";

    if (first === "")
    {
      errorBox.innerText = "First name is required.";
      return false;
    }

    if (!/^[A-Za-z'-]{1,30}$/.test(first))
    {
      errorBox.innerText = "First name must be 1-30 letters only.";
      return false;
    }

    errorBox.style.color = "green";
    errorBox.innerText = "Valid first name";
    return true;
}

function validateMiddleInitial()
{
  const mi = document.getElementById("middle_initial").value.trim();
  const errorBox = document.getElementById("middleInitialError");
  errorBox.innerText = "";
  errorBox.style.color = "red";

    if (mi === "")
    {
      return true;
    }

    if (!/^[A-Za-z]$/.test(mi))
    {
      errorBox.innerText = "Middle initial must be one letter.";
      return false;
    }

    errorBox.style.color = "green";
    errorBox.innerText = "Valid";
    return true;
}

function validateLastName()
{
  const last = document.getElementById("last_name").value.trim();
  const errorBox = document.getElementById("lastNameError");
  errorBox.innerText = "";
  errorBox.style.color = "red";

    if (last === "")
    {
      errorBox.innerText = "Last name is required.";
      return false;
    }

    if (!/^[A-Za-z'-]{1,30}$/.test(last))
    {
      errorBox.innerText = "Last name must be 1-30 letters only.";
      return false;
    }

    errorBox.style.color = "green";
    errorBox.innerText = "Valid last name";
    return true;
}

function validateAddress1()
{
  const address = document.getElementById("address1").value.trim();
  const errorBox = document.getElementById("address1Error");
  errorBox.innerText = "";
  errorBox.style.color = "red";

    if (address === "")
    {
      errorBox.innerText = "Address is required.";
      return false;
    }

    if (!/^[A-Za-z0-9\s.\-#]{5,30}$/.test(address))
    {
      errorBox.innerText = "Address must be 5-30 valid characters.";
      return false;
    }

    errorBox.style.color = "green";
    errorBox.innerText = "Valid address";
    return true;
}

function validateCity1()
{
  const city = document.getElementById("city1").value.trim();
  const errorBox = document.getElementById("city1Error");
  errorBox.innerText = "";
  errorBox.style.color = "red";

    if (city === "")
    {
      errorBox.innerText = "City is required.";
      return false;
    }

    if (!/^[A-Za-z\s]{2,30}$/.test(city))
    {
      errorBox.innerText = "City must be 2-30 letters only.";
      return false;
    }

    errorBox.style.color = "green";
    errorBox.innerText = "Valid city";
    return true;
}

function validateState1()
{
  const state = document.getElementById("state1").value;
  const errorBox = document.getElementById("state1Error");
  errorBox.innerText = "";
  errorBox.style.color = "red";

    if (state === "")
    {
      errorBox.innerText = "Please select a state.";
      return false;
    }

    errorBox.style.color = "green";
    errorBox.innerText = "Valid state";
    return true;
}

function validateZip1()
{
  const zip = document.getElementById("zip1").value.trim();
  const errorBox = document.getElementById("zip1Error");
  errorBox.innerText = "";
  errorBox.style.color = "red";

    if (zip == "")
    {
      errorBox.innerText = "ZIP code is required.";
      return false;
    }

    if (!/^\d{5}(-\d{4})?$/.test(zip))
    {
      errorBox.innerText = "Enter a valid ZIP code.";
      return false;
    }

    errorBox.style.color = "green";
    errorBox.innerText = "Valid ZIP code";
    return true;
}
  
function validateUserId()
{
  const userId = document.getElementById("user_id").value;
  const errorBox = document.getElementById("userIdError");
  errorBox.innerText = "";
  errorBox.style.color = "red";
  
    if (/^[0-9]/.test(userId))
    {
      errorBox.innerText = "User ID cannot start with a number.";
      return false;
    }
  
    if (userId.length < 5 || userId.length > 20)
    {
      errorBox.innerText = "User ID must be between 5 and 20 characters.";
      return false;
    }

    if (/\s/.test(userId))
    {
      errorBox.innerText = "User ID cannot contain spaces.";
      return false;
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(userId))
    {
      errorBox.innerText = "Only letters, numbers, dash (-), and underscore (_) allowed.";
      return false;
    }

    errorBox.style.color = "green";
    errorBox.innerText = "Valid User ID";
    return true;
}

function validateEmail()
{
  const email = document.getElementById("email").value.trim().toLowerCase();
  const errorBox = document.getElementById("emailError");
  errorBox.innerText = "";
  errorBox.style.color = "red";

    if (email === "")
    {
      errorBox.innerText = "Email address is required.";
      return false;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email))
    {
      errorBox.innerText = "Enter a valid email address.";
      return false;
    }

    errorBox.style.color = "green";
    errorBox.innerText = "Valid email address";
    return true;
}

function validatePhone()
{
  const phone = document.getElementById("phone").value.trim();
  const errorBox = document.getElementById("phoneError");
  errorBox.innerText = "";
  errorBox.style.color = "red";

    if (phone === "")
    {
      errorBox.innerText = "Phone number is required.";
      return false;
    }

    if (!/^\d{3}-\d{3}-\d{4}$/.test(phone))
    {
      errorBox.innerText = "Enter a valid phone number (123-456-7890).";
      return false;
    }

    errorBox.style.color = "green";
    errorBox.innerText = "Valid phone number";
    return true;
}

function validateSSN()
{
  const ssn = document.getElementById("ssn").value.trim();
  const errorBox = document.getElementById("ssnError");
  errorBox.innerText = "";
  errorBox.style.color = "red";

    if (ssn === "")
    {
      errorBox.innerText = "SSN is required.";
      return false;
    }

    if (!/^\d{3}-\d{2}-\d{4}$/.test(ssn))
    {
      errorBox.innerText = "Enter a valid SSN (123-45-6789).";
      return false;
    }

    errorBox.style.color = "green";
    errorBox.innerText = "Valid SSN";
    return true;
}

function validateReason()
{
  const reason = document.getElementById("reason_for_visit").value.trim();
  const errorBox = document.getElementById("reasonError");
  errorBox.innerText = "";
  errorBox.style.color = "red";

    if (reason === "")
    {
      errorBox.innerText = "Reason for visit is required.";
      return false;
    }

    if (reason.length < 2 || reason.length > 200)
    {
      errorBox.innerText = "Reason for visit must be between 2 and 200 characters.";
      return false;
    }

    errorBox.style.color = "green";
    errorBox.innerText = "Valid reason";
    return true;
}

function validateForm()
        {
                return validateFirstName()
                  && validateMiddleInitial()
                  && validateLastName()
                  && validateAddress1()
                  && validateCity1()
                  && validateState1()
                  && validateZip1()
                  && validateUserId()
                  && validateEmail()  
                  && validatePhone()
                  && validateSSN()
                  && validatePassword() 
                  && validateDOB()
                  && validateReason();
        }

function showValidate()
{
  if (validateForm())
  {
    document.querySelector('input[type="submit"]').style.display = "inline-block";
  }
  else
  {
    document.querySelector('input[type="submit"]').style.display = "none";
  }
}
  
window.onload = function()
{
        showDate();
        
document.querySelector('input[name="phone"]').addEventListener('input', function(e)
        {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 6)
                        e.target.value = value.slice(0,3) + '-' + value.slice(3,6) + '-' + value.slice(6,10);
                                else if (value.length >= 3)
                                        e.target.value = value.slice(0,3) + '-' + value.slice(3);
                                        
                else
                        e.target.value = value;                    
        });
document.getElementById("ssn").addEventListener("input", function(e)
        {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >=5)
                        e.target.value = value.slice(0,3) + '-' + value.slice(3,5) + '-' + value.slice(5,9);
                                else if (value.length >= 3)
                                        e.target.value = value.slice(0,3) + '-' + value.slice(3);
                else
                        e.target.value = value;
        });
        
document.querySelector('input[name="user_id"]').addEventListener('input', function(e)
        {
                e.target.value = e.target.value.toLowerCase();
        });
};    

function showReview()
{
        if (!validateForm())
        {
                return;
        }
        
        let content = "";

        const first = document.querySelector('[name="first_name"]').value;
        const mi = document.querySelector('[name="middle_initial"]').value;
        const last = document.querySelector('[name="last_name"]').value;
        const fullName = mi ? `${first} ${mi} ${last}` : `${first} ${last}`;
        content += `<strong>Name:</strong> ${fullName}<br>`;

        const dob = document.getElementById("dob").value;
        let formattedDOB = "";

                if (dob)
                {
                        const parts = dob.split("-");
                        formattedDOB = `${parts[1]}/${parts[2]}/${parts[0]}`;
                }
        content += `<strong>DOB:</strong> ${formattedDOB}<br>`;

        const email = document.querySelector('[name="email"]').value;
        const phone = document.querySelector('[name="phone"]').value;
        content += `<strong>Email:</strong> ${email}<br>`;
        content += `<strong>Phone:</strong> ${phone}<br>`;

        const address = document.querySelector('[name="address1"]').value;
        const city = document.querySelector('[name="city1"]').value;
        const state = document.querySelector('[name="state1"]').value;
        const zip = document.querySelector('[name="zip1"]').value;
        content += `<strong>Address:</strong> ${address}, ${city}, ${state} ${zip}<br>`;

        const gender = document.querySelector('input[name="gender"]:checked');
        content += `<strong>Gender:</strong> ${gender ? gender.value : ""}<br>`;

        const consent = document.querySelector('input[name="consent"]:checked');
        content += `<strong>Consent:</strong> ${consent ? consent.value : ""}<br>`;
        
        const insurance = document.querySelector('input[name="insurance"]:checked');
        content += `<strong>Insurance:</strong> ${insurance ? insurance.value : ""}<br>`;

        const conditions = document.querySelectorAll('input[name="conditions"]:checked');
        let condList = [];
        conditions.forEach(c => condList.push(c.value));

        content += `<strong>Medical History:</strong> ${condList.length ? condList.join(", ") : "None"}<br>`;
   
        const pain = document.querySelector('[name="pain_scale"]').value;
        content += `<strong>Pain Level:</strong> ${pain}<br>`;
    
        const user = document.querySelector('[name="user_id"]').value;
        content += `<strong>User ID:</strong> ${user}<br>`;

        const reason = document.querySelector('[name="reason_for_visit"]').value;
        content += `<strong>Reason:</strong> ${reason}<br>`;
        
        document.getElementById("reviewContent").innerHTML = content;
        document.getElementById("reviewSection").style.display = "block";
}

function updatePainValue()
{
        const value = document.getElementById("pain").value;
        document.getElementById("painValue").innerText = value;
}
