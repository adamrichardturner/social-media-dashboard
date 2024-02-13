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
    <article>
      <div>
        <Image
          src={socialPicker(platform) || ""}
          alt={platform + " Icon"}
          width={20}
          height={20}
        />
        <span>{handle}</span>
      </div>
      <div>
        <h3>{truncateNumber(followers)}</h3>
        <span>{term}</span>
      </div>
      <div>
        <Image
          src={isUp ? "/images/icon-up.svg" : "/images/icon-down.svg"}
          alt={isUp ? "Arrow pointing up" : "Arrow pointing down"}
          width={20}
          height={20}
        />
        <span>{change.number} Today</span>
      </div>
    </article>
  )
}

export default FollowersCard
