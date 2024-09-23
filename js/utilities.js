function getInputValueByID(id) {
    const getValue = document.getElementById(id).value;
    const convertValue = parseFloat(getValue);
    return convertValue;
}

function getTextValueByID(id) {
    const getText = document.getElementById(id).innerText;
    const getTextValue = parseFloat(getText);
    return getTextValue;
}