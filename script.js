function addValue() {
    var countElem = document.getElementById("count")
    var currentCount = Number(countElem.innerHTML)

    var newCount = currentCount+1
    countElem.innerHTML = newCount
}

function subtractValue() {
    var countElem = document.getElementById("count")
    var currentCount = Number(countElem.innerHTML)

    var newCount = currentCount-1
    countElem.innerHTML = newCount
}

function incrementByValue(){
    var countElem = document.getElementById("count")
    var currentCount = Number(countElem.innerHTML)

    var inputElem = document.getElementById("incrementValue")
    var incrementCount = Number(inputElem.value)

    var newCount = currentCount + incrementCount
    countElem.innerHTML = newCount

}