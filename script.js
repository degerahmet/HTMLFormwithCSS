const resultsList = document.getElementById('results')
let labels = document.createElement('div')
labels.id = 'labels'
resultsList.appendChild(labels)

let values = document.createElement('div')
values.id = 'values'
resultsList.appendChild(values)

new URLSearchParams(window.location.search).forEach((value, key) => {
    let elementId = key.split(' ').join('')
    let labelElement = document.getElementById(`label-${elementId}`)

    if (labelElement) {
        let valueElement = document.getElementById(`value-${elementId}`)
        valueElement.innerHTML += `, ${value}`
    } else {

        labels.innerHTML += `<div id='label-${elementId}'><strong>${key}: </strong></div>`
        values.innerHTML += `<div id='value-${elementId}'>${value}</div>`
    }
})