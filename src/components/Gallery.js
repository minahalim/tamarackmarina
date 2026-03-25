import { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import background from '../assets/original5.jpeg';
import Banner from './Banner';
import video from '../assets/video.mp4';
import thumbnail from '../assets/thumbnail.png';

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

const photos = [
  { src: photo1, width: 1500, height: 1000 },
  { src: photo2, width: 1500, height: 1000 },
  { src: photo3, width: 1500, height: 1000 },
  { src: photo4, width: 1500, height: 1000 },
  { src: photo5, width: 1500, height: 1000 },
  { src: photo6, width: 1500, height: 1000 },
  { src: photo7, width: 1500, height: 1000 },
  { src: photo8, width: 1500, height: 1000 },
  { src: photo9, width: 1500, height: 1000 },
  { src: photo10, width: 1500, height: 1000 },
];

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <Banner background={background} isSmall title="Gallery" />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-5">Photography</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-8">
            Marina Life
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <PhotoAlbum
          layout="rows"
          photos={photos}
          onClick={({ index: i }) => setIndex(i)}
          componentsProps={{
            imageProps: { className: 'cursor-pointer hover:opacity-90 transition-opacity duration-300' },
          }}
        />

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={photos.map((p) => ({ src: p.src }))}
        />

        {/* Video */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-5">Video</p>
            <h3 className="font-serif text-3xl text-navy">Experience the Marina</h3>
            <div className="w-10 h-px bg-gold mx-auto mt-6" />
          </div>
          <video
            className="w-full shadow-2xl"
            src={video}
            poster={thumbnail}
            controls
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
