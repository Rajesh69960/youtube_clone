import React, { useState } from "react"

function VideoDescription() {
  const [showDescription, setShowDescription] = useState(false)
  let fullText = ` Randy Orton goes one-on-one with Brock Lesnar in an all-time dream
          match at SummerSlam 2016. Find the latest Superstar gear at WWEShop:
          http://shop.wwe.com ---------------------------------------------
          Check out these other channels!
          --------------------------------------------- WWE: / wwe WWE Español:
          / @wweespanol WWE Arabic: / @wwearabic WWE NXT: / @wwenxt WCW: / @wcw
          WWE Music: / wwemusic UpUpDownDown: / upupdowndown Celtic Warrior
          Workouts: / @celticwarriorworkouts
          --------------------------------------------- Subscribe to our
          Podcasts! --------------------------------------------- Raw Recap: •
          WWE Raw Recap What Do You Wanna Talk About? With Cody Rhodes: /
          @codyrhodes What's Your Story? With Steph McMahon: / @stephaniemcmahon
          ------------------------------------ WWE on Social Media
          ------------------------------------ X: / wwe Facebook: / wwe
          Instagram: / wwe TikTok: / wwe ------------------------------------`
  function handleMore() {
    setShowDescription(!setShowDescription)
  }
  const displayText = showDescription ? fullText : fullText.slice(0, 200)
  return (
    <div className="w-full bg-gray-200 rounded-lg my-2  px-4 py-3">
      <section className="font-semibold">
        <span>87654 views </span>
        <span>sep 3 2025</span>
      </section>
      <section>
        <p>{displayText}...</p>
        <span
          onClick={() => setShowDescription(!showDescription)}
          className="font-semibold mt-1"
        >
          {showDescription ? "Show Less" : "... More"}
        </span>
      </section>
    </div>
  )
}

export default VideoDescription
