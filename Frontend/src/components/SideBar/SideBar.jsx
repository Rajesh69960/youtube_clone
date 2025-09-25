import React, { useContext } from "react"
import { TiHome } from "react-icons/ti"
import { SiYoutubeshorts } from "react-icons/si"
import { MdOutlineSubscriptions } from "react-icons/md"
import { GrHistory } from "react-icons/gr"
import { CgPlayList } from "react-icons/cg"
import { RiVideoLine } from "react-icons/ri"
import { MdOutlineWatchLater } from "react-icons/md"
import { AiOutlineLike } from "react-icons/ai"
import { LiaDownloadSolid } from "react-icons/lia"
import { PiGreaterThanThin } from "react-icons/pi"
import { RiShoppingBag4Line } from "react-icons/ri"
import { IoMusicalNotesOutline } from "react-icons/io5"
import { PiFilmSlateBold } from "react-icons/pi"
import { HiMiniSignal } from "react-icons/hi2"
import { SiYoutubegaming } from "react-icons/si"
import { MdOutlineNewspaper } from "react-icons/md"
import { GrTrophy } from "react-icons/gr"
import { GiGraduateCap } from "react-icons/gi"
import { GiHanger } from "react-icons/gi"
import { MdOutlinePodcasts } from "react-icons/md"
import { Context } from "../../utils/Context"
import MiniSideBar from "./MiniSideBar"

function SideBar() {
  const [openSideBar, setOpenSideBar] = useContext(Context)
  return (
    <div>
      {openSideBar ? (
        <main
          className="w-[240px] h-[100vh] font-semibold bg-white py-1 sticky top-[57px] left-0 text-sm hover:overflow-y-auto "
          onClick={() => setOpenSideBar(!openSideBar)}
        >
          <section className="flex flex-col px-4 py-2 ">
            <div className="flex items-center gap-6 bg-gray-200 rounded-lg px-2 py-[10px]">
              <i className="text-xl">
                <TiHome />
              </i>
              <span>Home</span>
            </div>
            <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
              <i className="text-xl">
                <SiYoutubeshorts />
              </i>
              <span>Shorts</span>
            </div>
            <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
              <i className="text-xl">
                <MdOutlineSubscriptions />
              </i>
              <span>Subscriptions</span>
            </div>
          </section>
          <section>
            <div className="flex items-center gap-2 pl-6 pt-6 pb-2">
              <p className="font-medium text-base">You</p>
              <i className="text-sm mt-1">
                <PiGreaterThanThin />
              </i>
            </div>
            <section className="flex flex-col px-4 py-2">
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-xl">
                  <GrHistory />
                </i>
                <span>History</span>
              </div>
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-xl">
                  <CgPlayList />
                </i>
                <span>Playlists</span>
              </div>
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-xl">
                  <RiVideoLine />
                </i>
                <span>Your Videos</span>
              </div>
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-xl">
                  <MdOutlineWatchLater />
                </i>
                <span>Watch Later</span>
              </div>
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-xl">
                  <AiOutlineLike />
                </i>
                <span>Liked</span>
              </div>
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-xl">
                  <LiaDownloadSolid />
                </i>
                <span>Downloads</span>
              </div>
            </section>
          </section>
          <section>
            <section className="flex items-center gap-4 pl-6 pt-6 pb-2 ">
              <p className="font-medium text-base">Explore</p>
            </section>
            <section className="flex flex-col px-4 py-2">
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-lg">
                  <RiShoppingBag4Line />
                </i>
                <span>Shopping</span>
              </div>
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-lg">
                  <IoMusicalNotesOutline />
                </i>
                <span>Music</span>
              </div>
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-lg">
                  <PiFilmSlateBold />
                </i>
                <span>Movies</span>
              </div>
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-lg">
                  <HiMiniSignal />
                </i>
                <span>Live</span>
              </div>
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-lg">
                  <SiYoutubegaming />
                </i>
                <span>Gaming</span>
              </div>
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-lg">
                  <MdOutlineNewspaper />
                </i>
                <span>News</span>
              </div>
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-lg">
                  <GrTrophy />
                </i>
                <span>Sports</span>
              </div>
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-lg">
                  <GiGraduateCap />
                </i>
                <span>Courses</span>
              </div>
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-lg">
                  <GiHanger />
                </i>
                <span>Fashion & Beauty</span>
              </div>
              <div className="flex items-center gap-6 hover:bg-gray-200 rounded-lg px-2 py-[10px]">
                <i className="text-lg">
                  <MdOutlinePodcasts />
                </i>
                <span>PodCasts</span>
              </div>
            </section>
          </section>
        </main>
      ) : (
        <MiniSideBar />
      )}
    </div>
  )
}

export default SideBar
