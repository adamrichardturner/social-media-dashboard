"use client"

import Image from "next/image"
import truncateNumber from "@/utils/truncateNumber"
import socialPicker from "@/utils/socialPicker"

interface FollowersCardProps {
  platform: string
  followers: number
  change: {
    number: number
    type: string
  }
  handle: string
  term: string
}

function FollowersCard({
  platform,
  followers,
  change,
  handle,
  term,
}: FollowersCardProps) {
  // Determines whether an increase or decrease of followers
  const isUp = change.type === "increase"

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

  return (
    <article className='rounded-t-lg text-text-color rounded-lg w-[255px] bg-card-background-color hover:bg-card-background-hover-color hover:cursor-pointer transition-colors flex flex-col items-center justify-center'>
      <div
        className={`rounded-t-lg ${borderColorClass(platform)} h-2 w-full`}
      ></div>
      <div className='w-full space-y-4 py-6 flex flex-col items-center justify-center text-center'>
        <div className='rounded-lg flex flex-row space-x-2 items-center'>
          <Image
            src={socialPicker(platform) || ""}
            alt={platform + " Icon"}
            width={20}
            height={20}
          />
          <span className='font-semibold text-xs'>{handle}</span>
        </div>
        <div className='text-center w-full flex flex-col items-center justify-center'>
          <h3 className='text-5xl font-bold text-text-color-strong'>
            {truncateNumber(followers)}
          </h3>
          <div className='w-full text-center'>
            <span className='text-center w-full tracking-widest uppercase font-light text-sm'>
              {term}
            </span>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2'>
          <Image
            src={isUp ? "/images/icon-up.svg" : "/images/icon-down.svg"}
            alt={isUp ? "Arrow pointing up" : "Arrow pointing down"}
            width={20}
            height={20}
          />
          <span
            className={`${
              change.type === "increase" ? "text-[#1EB589]" : "text-[#DC414C]"
            } text-xs`}
          >
            {change.number} Today
          </span>
        </div>
      </div>
    </article>
  )
}

export default FollowersCard
