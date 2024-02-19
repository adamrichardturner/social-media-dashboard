"use client"

import socialPicker from "@/utils/socialPicker"
import Image from "next/image"
import truncateNumber from "@/utils/truncateNumber"

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
    <article className='cursor-pointer p-6 space-y-8 rounded-lg w-[255px] bg-card-background-color hover:bg-card-background-hover-color'>
      <div className='flex flex-row justify-between items-center'>
        <div>
          <h3 className='font-semibold text-sm'>{type}</h3>
        </div>
        <div>
          <Image
            src={socialPicker(platform) || ""}
            alt={platform + " Icon"}
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div className='text-xl font-semibold'>{truncateNumber(number)}</div>
        <div className='flex flex-row items-center space-x-1 text-xs'>
          <Image
            src={isUp ? "/images/icon-up.svg" : "/images/icon-down.svg"}
            alt={isUp ? "Arrow pointing up" : "Arrow pointing down"}
            width={10}
            height={10}
          />
          <span>{change.percentage}%</span>
        </div>
      </div>
    </article>
  )
}

export default OverviewCard
