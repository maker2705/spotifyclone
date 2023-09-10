import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
 import { FreeMode } from 'swiper/modules'

import PlayPause from './PlayPause'
import {playPause, setActiveSong} from '../redux/features/playerSlice'
import { useGetChartsTrackQuery } from "../redux/apiServices/shazamCore";

import 'swiper/css'
import 'swiper/css/free-mode'

  const TopChartCard = ({song, index}) => (
    <div className=" w-full flex flex-row items-center hover:bg-[#4c426e] p-4 py-2 rounded-lg cursor-pointer mb-2 " >
        {song.title}
    </div>
  )

const TopPlay = () => {

    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector( (state) =>
       state.player); 


    const { data } = useGetChartsTrackQuery();
    const divRef = useRef(null);
    useEffect(() => {
      divRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    })

    
    const topPlays = data?.tracks.slice(0,5)
    console.log('Top Plays:', topPlays);
    
    const handlePauseClick = () => {
        dispatch(playPause(false));
      }
    const handlePlayClick = ()  => {
        dispatch(setActiveSong( { song, data, i } ));
        dispatch(playPause(true));
      }


    return (
        <div ref={divRef} 
        className=" xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 
        xl:max-w-[500px] max-w-full flex flex-col  "
        >
            <div className="w-full flex flex-col " >
                <div className="flex flex-row items-center justify-between" >
                   <h2 className="text-white text-2xl font-bold " >Trending</h2>
                   <Link to="/top-charts" >
                    <p className="text-gray-300 text-base cursor-pointer " >
                    See more..</p>
                   </Link>
                </div>
                <div className=" mt-4 flex flex-col gap-1 " >
                  {topPlays?.map( (song, index) => (
                    <TopChartCard
                      key={index}
                      song={song}
                      i={index}
                  />) )}
                </div>
            </div>
            <div className="w-full flex flex-col mt-8" >
              <div className="flex flex-row items-center justify-between" >
                    <h2 className="text-white text-2xl font-bold " >Artists Trending</h2>
                    <Link to="/top-artists" >
                      <p className="text-gray-300 text-base cursor-pointer " >See more..</p>
                    </Link>
              </div>
              <Swiper
              slidePerView="auto"
              spaceBetween={15}
              freeMode
              centeredSlides
              centeredSlidesBounds
              modules={[FreeMode]}
              className="mt-4"
              >

              </Swiper>
            </div>
        </div>
  )
}

export default TopPlay;
