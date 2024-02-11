import Image from "next/image"

export default function Home() {
  return (
    <div>
      <header className='mx-auto w-full bg-very-dark-blue-top-bg h-[244px] absolute left-0 top-0 text-center pt-9'>
        <div className='w-full mx-auto container flex flex-col items-start justify-start'>
          <h1 className='text-3xl font-semibold'>Social Media Dashboard</h1>
          <h3 className='text-sm text-desaturated-blue-text'>
            Total Followers: 23,004
          </h3>
        </div>
      </header>
      <div className='relative container'>
        <main className='flex w-full flex-col items-center'>
          <section></section>
        </main>
      </div>
    </div>
  )
}
