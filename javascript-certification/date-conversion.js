const currentDate = new Date()

const currentDateFormat = `Current Date and Time: ${currentDate}`

console.log(currentDateFormat)

const formatDateMMDDYYYY = (obj) => {
  //convert to month date yr
  const formatted = obj.toLocaleDateString("en-US")

  return `Formatted Date (MM/DD/YYYY): ${formatted}`
}

console.log(formatDateMMDDYYYY(currentDate))

const formatDateLong = (obj) => {
  //convert to month date yr
    const options = {
        year: "numeric",
  month: "long",
  day: "numeric",
    }
    const formatted = obj.toLocaleDateString("en-US", options)

  return `Formatted Date (Month Day, Year): ${formatted}`
}
