const input = document.querySelector("input")

function addVal(btnVal) {
    input.value += btnVal
}

function clearVal() {
    input.value = ""
}

function deleteVal() {
    input.value = input.value.slice(0, input.value.length - 1)
}

function resultVal() {
    try {
        input.value = eval(input.value)
    }
    catch (err) {
        alert("Invalid.... Enter Correct Input")
    }
}