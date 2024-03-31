import PhotoAlbum from 'react-photo-album';

import background from '../assets/original5.jpeg';
import Banner from './Banner';

import photo1 from '../assets/original1.jpeg';
import photo2 from '../assets/original2.jpeg';
import photo3 from '../assets/original3.jpeg';
import photo4 from '../assets/original4.jpeg';
import photo5 from '../assets/original5.jpeg';
import photo6 from '../assets/original6.jpeg';
import photo7 from '../assets/original7.jpeg';
import photo8 from '../assets/original8.jpeg';
import photo9 from '../assets/original9.jpeg';
import photo10 from '../assets/original10.jpeg';

import thumbnail from '../assets/thumbnail.png';
import video from '../assets/video.mp4';

const photos = [
  { src: photo1, width: 1.5, height: 1 },
  { src: photo2, width: 1.5, height: 1 },
  { src: photo3, width: 1.5, height: 1 },
  { src: photo4, width: 1.5, height: 1 },
  { src: photo5, width: 1.5, height: 1 },
  { src: photo6, width: 1.5, height: 1 },
  { src: photo7, width: 1.5, height: 1 },
  { src: photo8, width: 1.5, height: 1 },
  { src: photo9, width: 1.5, height: 1 },
  { src: photo10, width: 1.5, height: 1 }
];

const Gallery = () => {
  return (
    <>
      <Banner background={background} isSmall title='Gallery' />{' '}
      <div className='w-3/4 m-auto my-6 text-xl'>
        <PhotoAlbum layout='rows' photos={photos} />

        <div className='flex flex-row justify-center mt-6'>
          <video className='w-full' src={video} poster={thumbnail} controls />
        </div>
      </div>
    </>
  );
};

export default Gallery;
