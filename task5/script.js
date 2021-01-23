const array = new Array(10)

function fillArray(array, min, max) {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let index = 0; index < array.length; index++) {
        array[index] = getRandomIntInclusive(min, max);
    }

    return array;
}

function replaceFromArray(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] < 0) array[index] = 0
    }
    return array;
}

function addToArray(array) {
    const even = n => !(n % 2);
    const insertionPositions = []

    for (let index = 0; index < array.length; index++) {
        if (even(index) && array[index] == 0)
            insertionPositions.push(index + 1)
    }

    insertionPositions.forEach(positon => {
        array.splice(positon, 0, -1)
    });

    return array;
}

const filledArray = fillArray(array.slice(), -100, 100)
const modifiedArray = replaceFromArray(filledArray.slice())
const arrayWithAppendedValues = addToArray(modifiedArray.slice())

console.log(array)
console.log(filledArray)
console.log(modifiedArray)
console.log(arrayWithAppendedValues)

document.body.innerHTML += `1. Массив с длиной 10: ${array}</br>`
document.body.innerHTML += `2. Массив заполненный числами от -100 до 100: ${filledArray}</br>`
document.body.innerHTML += `3. Массив c замененными отрицательными числами на 0: ${modifiedArray}</br>`
document.body.innerHTML += `4. Массив c добавленными элементами -1 после каждого четного индекса элемента равного 0: ${modifiedArray}</br>`