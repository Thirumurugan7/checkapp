'use client'
 
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { Helmet } from 'react-helmet';

import Image from "next/image";
import { Suspense } from 'react'

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams()


  const search = searchParams.get('r')

  const playerUrl = search ? `https://mintwink.vercel.app/r=${search}` : '';


  return (
    <>
     <Suspense>
    <Helmet>
      <meta name="twitter:card" content="player" />
      <meta name="twitter:title" content="Minting Wink" />
      <meta name="twitter:description" content="Minting NFT on X" />
      {/* Dynamically update twitter:player */}
      <meta name="twitter:player" content={playerUrl} />
      <meta name="twitter:player:width" content="360" />
      <meta name="twitter:player:height" content="560" />
      <meta name="twitter:image" content="https://res.cloudinary.com/dg8ssfxu3/image/upload/v1722584912/ud/y6uypvxozxsutmrkhot0.png" />
      <meta name="twitter:site" content="https://x.com/ultimatedigits" />
      <meta name="twitter:app:card" content="player" />
      <title>Ultimate Winks</title>
    </Helmet>

    <div>
      <h1>Welcome to Ultimate Winks!</h1>
      <p>Mint your NFT by passing the "r" query parameter to the URL.</p>
      <p>
        Example: <code>{playerUrl}</code>
      </p>
    </div>
    </Suspense>

  </>
  );
}
