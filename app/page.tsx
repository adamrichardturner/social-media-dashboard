"use client"

import socialData from "@/utils/data.json"
import FollowersCard from "@/components/FollowersCard"
import { ReactNode } from "react"
import OverviewCard from "@/components/OverviewCard"
import DarkModeToggle from "@/components/DarkModeToggle"

export default function Home() {
  let totalFollowers: number = 0
  const renderFollowers: ReactNode[] = socialData.followers.map((data) => {
    totalFollowers += data.followers
    return (
      <FollowersCard
        key={data.id}
        platform={data.platform}
        followers={data.followers}
        change={data.change}
        handle={data.handle}
        term={data.term}
      />
    )
  })

  const renderOverviews: ReactNode[] = socialData.overview.map((data) => {
    return (
      <OverviewCard
        key={data.id}
        type={data.type}
        platform={data.platform}
        number={data.number}
        change={data.change}
      />
    )
  })
  return (
    <div>
      <header className='mx-auto flex flex-row justify-between w-full bg-top-background-color h-[244px] absolute left-0 top-0 text-center pt-9'>
        <div className='w-full mx-auto container flex flex-row items-start justify-between text-text-color-strong'>
          <div className='flex flex-row items-center justify-between w-full'>
            <div className='flex flex-col items-start'>
              <h1 className='text-3xl font-semibold text-text-color-strong'>
                Social Media Dashboard
              </h1>
              <h3 className='text-sm text-text-color'>
                Total Followers: {totalFollowers.toLocaleString()}
              </h3>
            </div>

            <div>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </header>
      <div className='relative top-[140px]'>
        <main className='flex w-full flex-col items-center'>
          <section className='grid grid-cols-4 grid-rows-1 gap-8'>
            {renderFollowers}
          </section>
          <section className='flex flex-row'>{renderOverviews}</section>
        </main>
      </div>
    </div>
  )
}
