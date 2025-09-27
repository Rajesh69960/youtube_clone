import React from "react"
import { MdMoreVert } from "react-icons/md"

function VideoLists() {
  let titleDescription =
    `video title for example | video description for example purpose`.slice(
      0,
      55
    )
  return (
    <div className="flex space-x-2 mt-4 ">
      <section>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQasKPDCewT1v2j4mJjfCN1rqH2SczejiwkoA&s"
          alt=""
          className="w-full h-full rounded-xl object-cover"
        />
      </section>
      <section className="flex flex-col items-start space-y-1 ">
        <div className="font-medium leading-5">{titleDescription}</div>
        <div className="text-gray-700 text-[13px]">channel name dear</div>
        <div className="text-gray-700 text-[13px]">
          <span>45M views </span> <span>.15 Hours Ago</span>
        </div>
      </section>
      <section className="text-2xl">
        <MdMoreVert />
      </section>
    </div>
  )
}

export default VideoLists
