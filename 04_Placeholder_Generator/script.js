const select = document.querySelector('select')
const inputAll = document.querySelectorAll('input')
const myImage = document.querySelector('img');
const textArea = document.querySelector('textarea')

let urlObj = {};

const removeHashTag = (str) => {
    return str.replace('#', "")
}

const addPlus = (plus) => {
    return plus.split(' ').join("+");
}

const createImagePath = () => {

    urlObj.size = select.value;
    urlObj.text = addPlus(inputAll[0].value);
    urlObj.bgColor = removeHashTag(inputAll[1].value);
    urlObj.txtColor = removeHashTag(inputAll[2].value);

    let urlPath = `http://via.placeholder.com/${urlObj.size}/${urlObj.bgColor}/${urlObj.txtColor}?text=${urlObj.text}`
    myImage.src = urlPath
    textArea.value = urlPath;
}

textArea.addEventListener("click", () => {

    navigator.clipboard.writeText(textArea.value)
        .then(() => {
            alert('Text copied to clipboard');
        })
        .catch(err => {
            {
                alert('Error copying text: ', err);
            }
        })
})

inputAll.forEach((e) => e.addEventListener('change', createImagePath));
select.addEventListener('change', createImagePath)
































