import Image from "next/image"
import truncateNumber from "@/utils/truncateNumber"
import socialPicker from "@/utils/socialPicker"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface FollowersCardProps {
  platform: string | StaticImport
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
  return (
    <article className='text-text-color rounded-lg w-[255px] bg-card-background-color flex flex-col items-center justify-center space-y-6 py-8'>
      <div className='rounded-lg flex flex-row space-x-2 items-center'>
        <Image
          src={socialPicker(platform) || ""}
          alt={platform + " Icon"}
          width={20}
          height={20}
        />
        <span className='font-semibold text-xs'>{handle}</span>
      </div>
      <div className='text-center space-y-2'>
        <h3 className='text-5xl font-bold text-text-color-strong'>
          {truncateNumber(followers)}
        </h3>
        <p className='tracking-widest uppercase font-light text-sm'>{term}</p>
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
    </article>
  )
}

export default FollowersCard
