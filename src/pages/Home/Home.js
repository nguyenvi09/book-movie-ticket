import React from 'react';
import Carousel from '../../components/Layout/Carousel/Carousel';
import TabMovieTheater from '../../components/Layout/TabMovieTheater/TabMovieTheater';
import ListMovie from './_components/ListMovie/ListMovie';
import ModalTrailer from './_components/ModalTrailer/ModalTrailer';

function Home() {
  return (
    <div>
      <div
        style={{
          position: 'fixed',
          zIndex: 9999,
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
        }}
      >
        <ModalTrailer />
      </div>
      <div>
        <Carousel />
        <ListMovie />
        <div className="p-5">
          <h1
            id="movieSchedule"
            style={{
              textAlign: 'center',
              padding: '10px 0',
              fontSize: '3rem',
              fontWeight: '900',
              color: 'var(--primary-color)',
            }}
          >
            Lịch chiếu phim
          </h1>
          <div className="container">
            <TabMovieTheater />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
