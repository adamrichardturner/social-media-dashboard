export default function truncateNumber(num: number) {
  if (Math.abs(num) > 9999) {
    const truncatedNum = Math.sign(num) * (Math.abs(num) / 1000)
    // Check if the truncated number is a whole number
    if (truncatedNum % 1 === 0) {
      // If it's a whole number, format without decimals
      return truncatedNum + "k"
    } else {
      // If it's not a whole number, format with one decimal place
      return truncatedNum.toFixed(1) + "k"
    }
  } else {
    return Math.sign(num) * Math.abs(num)
  }
}
