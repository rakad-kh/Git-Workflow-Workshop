function Validate(inputText)
{
    let re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if (inputText.value== '' || !re.test(inputText.value))
    {
        alert('Please enter a valid email address.');
        document.form1.text1.focus();
        return false;
    }
    
}