
const submitBtn = () => {
    const typedValue = document.getElementById('type').value;
    ValidateEmail(typedValue);
    // console.log(typedValue)
}
function ValidateEmail(inputText) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        document.getElementById('validation').innerHTML = `
        <p class="text-center text-success fw-bold">Succesfully matched your Email</p>
        `
        document.form1.text1.focus();
        return true;
    }
    else {
        document.getElementById('validation').innerHTML = `
        <p class="text-center text-danger fw-bold">Didn't match your Email</p>
        `;
        document.form1.text1.focus();
        return false;
    }
}