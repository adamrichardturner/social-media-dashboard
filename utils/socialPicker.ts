import { StaticImport } from "next/dist/shared/lib/get-img-props"

export default function socialPicker(platform: string | StaticImport) {
  switch (platform) {
    case "Facebook":
      return "/images/icon-facebook.svg"
    case "Instagram":
      return "/images/icon-instagram.svg"
    case "Twitter":
      return "/images/icon-twitter.svg"
    case "YouTube":
      return "/images/icon-youtube.svg"
  }
}
