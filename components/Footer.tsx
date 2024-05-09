import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter pt-20 text-white-10 pb-20 px-10">
      <div className="padding-container max-container flex w-full flex-col gap-0 pb-0">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <h2 className='flex flex-1 text-white-10 bold-100'>Condividi le tue Idee</h2>
          <Link href='/contact' className="relative rounded-full p-4 hover:bg-theme-40 bg-gray-10">
            <Image src='/instagram.svg' alt="arrow" width={50} height={50} />
          </Link>
        </div>
        <p className="regular-12 text-gray-20 pb-6 mt-6 lg:pr-64">
          Se sei alla ricerca di una spiegazione comprensibile ad un tuo dubbio esistenziale, purchè si parli di economia, tecnologia,
          ecologia e dati, il Funny Park è a tua disposizione. Contattaci e faremo di tutto per spiegare questa complessità che ci circonda.
        </p>
      </div>
    </footer>
  )
}

export default Footer