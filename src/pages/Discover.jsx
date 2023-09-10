import {Error, Loader, SongCard } from '../components'
import { genres } from '../assets/constants'
import {useGetChartsTrackQuery} from '../redux/apiServices/shazamCore'

import { useDispatch, useSelector } from 'react-redux';


function Discover() {
    const { data, isFetching, error } = useGetChartsTrackQuery();
    const genreTitle = 'Pop';
    const dispatch = useDispatch();
    const {activeSong, isPlaying } = useSelector( (state) => state.player );


    console.log(data)
    if (isFetching){
      return <Loader title = "Loading songs..." />
    }
    if (error) {
        return <Error message={error.message} />;
      }
      

  return (
    <div className='flex flex-col'>
      <div className='w-full flex justify-between 
        items-center sm:flex-row flex-col mt-4 mb-10 '>
         <h2 className=' font-bold text-3xl text-white text-left '>
            Discover {genreTitle}
         </h2> 
         <select 
         onChange={ () => {} }
         value=""
         className='bg-black text-gray-300 p-3 text-sm 
            rounded-lg outline-none sm:mt-0 mt-5  '
          >
            { genres.map( (genre) => <option 
            key={genre.value} 
            value={genre.value} 
            >{genre.title}</option> ) }
         </select>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8 ' >
        { data?.tracks.map( ( song, index ) => {
            return <SongCard
              key={index}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={index}
            />
        } ) }
      </div>
    </div>
  )
}

export default Discover

