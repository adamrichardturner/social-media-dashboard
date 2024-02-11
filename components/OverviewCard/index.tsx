import socialPicker from "@/utils/socialPicker"
import Image from "next/image"

interface OverviewCardProps {
  type: string
  platform: string
  number: number
  change: {
    percentage: number
    type: string
  }
}

function OverviewCard({ type, platform, number, change }: OverviewCardProps) {
  // Determines whether an increase or decrease of overview statistics
  const isUp = change.type === "increase"
  return (
    <article>
      <div>
        <div>
          <h3>{type}</h3>
        </div>
        <div>{number}</div>
      </div>
      <div>
        <div>
          <Image
            src={socialPicker(platform) || ""}
            alt={platform + " Icon"}
            width={20}
            height={20}
          />
        </div>
        <div>
          <Image
            src={isUp ? "/images/icon-up.svg" : "/images/icon-down.svg"}
            alt={isUp ? "Arrow pointing up" : "Arrow pointing down"}
          />
          <span>{change.percentage}%</span>
        </div>
      </div>
    </article>
  )
}

export default OverviewCard
