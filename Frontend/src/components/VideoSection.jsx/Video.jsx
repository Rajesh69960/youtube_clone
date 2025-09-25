import React from "react"

function Video({ video }) {
  function customFormatNumber(num) {
    if (num < 1000) {
      return num.toString()
    } else if (num >= 1000 && num < 10000) {
      return (num / 1000).toFixed(1) + "k"
    } else {
      // Convert number to string to get first two digits
      const numStr = num.toString()
      return numStr.substring(0, 2) + "k"
    }
  }

  return (
    <div
      key={video.videoId}
      className="w-full min-w-[260px] flex flex-col space-y-2 cursor-pointer "
    >
      <section className=" h-[62%] ">
        <img
          src={video.thumbnailUrl}
          alt=""
          className=" w-full h-full object-cover rounded-xl"
        />
      </section>
      <section className="flex gap-x-3 ">
        <div className="w-9 h-9 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1756707706543-6a17023abd13?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[16px] font-medium leading-5">
            {video.title} | <span>{video.description}</span>
          </p>
          <p className="text-[15px] text-gray-600">{video.uploader}</p>
          <p className="text-[15px] text-gray-600">
            {customFormatNumber(video.views)} views .{" "}
            <span>{video.uploadDate}</span>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Video
