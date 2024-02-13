import Image from "next/image"
import socialData from "@/utils/data.json"
import { Followers } from "@/types"
import FollowersCard from "@/components/FollowersCard"
import { nanoid } from "nanoid"
import { ReactNode } from "react"
import OverviewCard from "@/components/OverviewCard"

export default function Home() {
  const renderFollowers: ReactNode[] = socialData.followers.map((data) => {
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
      <header className='mx-auto w-full bg-top-background-color h-[244px] absolute left-0 top-0 text-center pt-9'>
        <div className='w-full mx-auto container flex flex-col items-start justify-start text-text-color-strong'>
          <h1 className='text-3xl font-semibold text-text-color-strong'>
            Social Media Dashboard
          </h1>
          <h3 className='text-sm text-text-color'>Total Followers: 23,004</h3>
        </div>
      </header>
      <div className='relative container'>
        <main className='flex w-full flex-col items-center'>
          <section className='flex flex-row'>{renderFollowers}</section>
          <section className='flex flex-row'>{renderOverviews}</section>
        </main>
      </div>
    </div>
  )
}
