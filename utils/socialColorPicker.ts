// Function to determine the color class based on the platform
const borderColorClass = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "facebook":
      return "bg-facebook"
    case "twitter":
      return "bg-twitter"
    case "instagram":
      return "bg-gradient-to-r from-instagram-start to-instagram-end"
    case "youtube":
      return "bg-youtube"
    default:
      return ""
  }
}

export default borderColorClass
