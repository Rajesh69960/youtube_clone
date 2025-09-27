import React, { useState } from "react"
import { MdOutlineSort } from "react-icons/md"
import { BsEmojiGrin } from "react-icons/bs"
import { AiOutlineLike } from "react-icons/ai"
import { BiSolidLike } from "react-icons/bi"
import { BiDislike } from "react-icons/bi"
import { BiSolidDislike } from "react-icons/bi"
function Comments() {
  const [showBtn, setShowBtn] = useState(false)
  const [LikeCount, setLikeCount] = useState(null)
  const [disLikeCount, setDisLikeCount] = useState(false)
  return (
    <div className="mt-6">
      <section className="flex space-x-8">
        <h1 className="text-xl font-semibold">2765 Comments</h1>
        <p className="flex items-center space-x-2">
          <MdOutlineSort className="text-2xl text-gray-600" />
          <span className="font-semibold">Sort by</span>
        </p>
      </section>
      <section className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center mt-4">
          R
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Add a Comment"
            className=" w-full border-b-1 border-gray-200 outline-none"
            onClick={() => setShowBtn(true)}
          />
        </div>
      </section>
      {showBtn ? (
        <div className="flex space-x-2 justify-between items-center pl-12">
          <BsEmojiGrin className="text-xl" />

          <div className="flex space-x-2 text-sm">
            <button
              className="px-3 py-2 hover:bg-gray-200 hover:rounded-full"
              onClick={() => setShowBtn(false)}
            >
              Cancel
            </button>
            <button
              disabled
              className="px-3 py-2 hover:bg-gray-200 hover:rounded-full"
            >
              Comment
            </button>
          </div>
        </div>
      ) : null}
      <section className="flex items-start space-x-4 mt-6">
        <div className="w-9 h-9 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1756707706543-6a17023abd13?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <p className="text-[15px] font-semibold">
            <span>emial@gamail.com </span>
            <span className="text-gray-600 text-xs">1 month ago</span>
          </p>
          <p className="text-sm">some random comment</p>
          <section className="flex items-center space-x-4 text-gray-600 text-xl my-2">
            <div className="flex items-center space-x-2">
              {!LikeCount ? (
                <AiOutlineLike onClick={() => setLikeCount(LikeCount + 1)} />
              ) : (
                <BiSolidLike onClick={() => setLikeCount(LikeCount - 1)} />
              )}
              <span className="text-[15px]">{LikeCount}</span>
            </div>
            <div>
              {!disLikeCount ? (
                <BiDislike onClick={() => setDisLikeCount(true)} />
              ) : (
                <BiSolidDislike onClick={() => setDisLikeCount(false)} />
              )}
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Comments
