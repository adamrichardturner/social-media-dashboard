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
    <article className='rounded-t-lg text-text-color rounded-lg w-full bg-card-background-color hover:bg-card-background-hover-color hover:cursor-pointer transition-colors flex flex-col items-center justify-center'>
      <div
        className={`rounded-t-2xl ${borderColorClass(platform)} h-1 w-full`}
      ></div>
      <div className='w-full space-y-[26px] py-6 flex flex-col items-center justify-center text-center'>
        <div className='rounded-lg flex flex-row space-x-2 items-center'>
          <Image
            src={socialPicker(platform) || ""}
            alt={platform + " Icon"}
            width={20}
            height={20}
            style={{
              height: "auto",
              width: "20px",
            }}
          />
          <span className='font-semibold text-card-meta'>{handle}</span>
        </div>
        <div className='text-center w-full flex flex-col items-center justify-center'>
          <h3 className='text-follower-count whitespace-pre-line leading-[48px] font-bold text-text-color-strong'>
            {truncateNumber(followers)}
          </h3>
          <div className='w-full text-center pt-[12px]'>
            <span className='text-center w-full tracking-widest uppercase font-light text-card-meta'>
              {term}
            </span>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center space-x-1'>
          <Image
            src={isUp ? "/images/icon-up.svg" : "/images/icon-down.svg"}
            alt={isUp ? "Arrow pointing up" : "Arrow pointing down"}
            width={8}
            height={4}
          />
          <span
            className={`${
              change.type === "increase" ? "text-[#1EB589]" : "text-[#DC414C]"
            } text-card-meta font-semibold`}
          >
            {change.number} Today
          </span>
        </div>
      </div>
    </article>
  )
}

export default FollowersCard
