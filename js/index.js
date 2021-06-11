const daysSpan = document.querySelector('#days')
const hoursSpan = document.querySelector('#hours')
const minutesSpan = document.querySelector('#minutes')
const secondsSpan = document.querySelector('#seconds')
const btn = document.querySelector('#btn')

let importantDate = localStorage.getItem('date') ? new Date(localStorage.getItem('date')) : new Date(2021,11,31)

function formatTime(number) {
  return 10 > number ? `0${number}` : number
}

function countDown () {
  const currentDate = new Date()
  const totalSecond = (importantDate - currentDate) / 1000

  timeOver(totalSecond)
  
  const days = Math.floor(totalSecond / 86400)
  const hours = Math.floor(totalSecond / 3600) % 24
  const minutes = Math.floor(totalSecond / 60) % 60
  const seconds = Math.floor(totalSecond) % 60

  daysSpan.textContent = formatTime(days)
  hoursSpan.textContent = formatTime(hours)
  minutesSpan.textContent = formatTime(minutes)
  secondsSpan.textContent = formatTime(seconds)
}

function timeOver (time) {
  if(Math.floor(time) === 0) {
    importantDate.setFullYear(importantDate.getFullYear() + 1)
  }
}

function clickBtn (event) {
  event.preventDefault()

  let date = new Date(document.querySelector('#date').value)
  date.setDate(date.getDate() + 1)
  date.setHours(0)
  importantDate = date === '' || date < new Date() ? importantDate : new Date(date)
  console.log(importantDate)
  localStorage.setItem('date', importantDate)
}

btn.addEventListener('click', clickBtn)

setInterval(countDown, 1000)