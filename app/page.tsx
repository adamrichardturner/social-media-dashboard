"use client"

import socialData from "@/utils/data.json"
import FollowersCard from "@/components/FollowersCard"
import { ReactNode } from "react"
import OverviewCard from "@/components/OverviewCard"
import { DarkModeToggle } from "@/components/DarkModeToggle"

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
    <div className='bg-background-color h-screen'>
      <header className='mx-auto rounded-b-xl md:rounded-none flex flex-row justify-between w-full bg-top-background-color h-[244px] absolute left-0 top-0 text-center pt-9'>
        <div className='w-full md:mx-auto container flex flex-row items-start justify-between text-text-color-strong'>
          <div className='flex flex-col md:flex-row items-center justify-between w-full'>
            <div className='w-full flex flex-col items-start'>
              <h1 className='text-2xl md:text-3xl font-semibold text-text-color-strong'>
                Social Media Dashboard
              </h1>
              <h3 className='text-sm text-text-color'>
                Total Followers: {totalFollowers.toLocaleString()}
              </h3>
            </div>
            <hr className='border border-b-0.5 w-full block md:hidden my-4 border-card-background-hover-color' />
            <div className='w-full flex flex-row items-end justify-end cursor-pointer'>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </header>
      <div className='w-full relative top-[200px] md:top-[140px] container pb-9'>
        <main className='flex w-full flex-col items-center'>
          <section className='content-center w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-8'>
            {renderFollowers}
          </section>
          <h3 className='text-left w-full font-semibold text-2xl pb-6 pt-10'>
            Overview - Today
          </h3>
          <section className='content-center w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-8'>
            {renderOverviews}
          </section>
        </main>
      </div>
    </div>
  )
}
