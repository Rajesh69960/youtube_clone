import React, { useState } from "react"
import { AiOutlineLike } from "react-icons/ai"
import { BiDislike } from "react-icons/bi"
import { PiShareFatThin } from "react-icons/pi"
import { LiaDownloadSolid } from "react-icons/lia"
import { SlOptions } from "react-icons/sl"

function VideoTitle() {
  const [likeCount, setLikeCount] = useState(0)
  return (
    <div className="flex flex-col">
      {/* video player */}
      <div className="">
        <video
          src="https://www.shutterstock.com/shutterstock/videos/3738727067/preview/stock-footage-futuristic-digital-globe-of-earth-with-glowing-data-points-network-connections-on-a-dark-background.webm"
          alt="Earth Rotation"
          className="w-full rounded-2xl"
        ></video>
      </div>
      {/* title */}
      <div className="text-xl pt-3 pb-2 font-bold">
        <span>Title tyfgd hgdfs suaygdv| </span>
        <span>description kjwkeh ujhd ueyg euyg wueiy</span>
      </div>
      <section className="flex space-x-7">
        {/* channel name and logo */}
        <div className="flex items-center justify-start space-x-3 ">
          <section className=" w-10 h-10 bg-gray-300 rounded-full mb-2 overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1756707706543-6a17023abd13?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className=" w-full h-full rounded-full object-cover"
            />
          </section>
          <section className="flex flex-col mb-1">
            <div className="font-bold">ChannelName</div>
            <div className="text-xs text-gray-600">1M subscribers</div>
          </section>
        </div>
        <div className="flex items-center justify-between w-full">
          {/* subscribe button */}
          <button className="py-2 px-4 bg-black text-sm text-white rounded-full">
            Subscribe
          </button>

          <div className="flex items-center space-x-2 ">
            {/* Like dislike buttons */}
            <div className="flex items-center space-x-2 py-[10px] px-2 bg-gray-100 rounded-full text-sm">
              <button className="flex items-center justify-center space-x-2 px-3 rounded-l-full border-r-1 border-gray-400 ">
                {" "}
                <AiOutlineLike
                  className="text-[22px] text-gray-700"
                  onClick={() => setLikeCount(likeCount + 1)}
                />{" "}
                <span className="font-medium text-base">{likeCount} </span>
              </button>

              <button className="flex items-center justify-center px-2 ">
                <BiDislike
                  className="text-[22px] text-gray-700"
                  onClick={() => setLikeCount(likeCount - 1)}
                />
              </button>
            </div>
            {/* share button */}

            <button className="flex items-center space-x-2 px-3 py-[10px] bg-gray-100 text-sm rounded-full">
              <PiShareFatThin className="text-[22px]" /> <span>Share</span>
            </button>

            {/* download button */}

            <button className="flex items-center space-x-2 px-3 py-[10px] bg-gray-100 text-sm rounded-full">
              <LiaDownloadSolid className="text-[22px]" />
              <span>Download</span>
            </button>

            {/* other options button */}

            <button className="flex items-center px-3 py-3 bg-gray-100 rounded-full">
              <SlOptions />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VideoTitle
