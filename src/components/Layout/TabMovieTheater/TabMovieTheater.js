import React, { Fragment } from 'react';
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import styles from './TabMovieTheater.module.scss';
const { TabPane } = Tabs;

function TabMovieTheater(props) {
  const renderTheaterSystem = () => {
    return props.cinemaSystem?.map((theaterSystem, index) => {
      return (
        <TabPane
          tab={
            <img
              alt={theaterSystem.tenCumRap}
              src={theaterSystem.logo}
              className={`rounded-full ${styles['theater__logo']}`}
            />
          }
          key={index}
        >
          <Tabs tabPosition="left">
            {theaterSystem.lstCumRap?.map((theaterCluster, index) => {
              return (
                <TabPane
                  tab={
                    <div
                      style={{
                        width: '350px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3px',
                      }}
                    >
                      <img src={theaterSystem.logo} width="50px" /> <br />
                      <div style={{ fontSize: '1.7rem', fontWeight: '600' }}>
                        {theaterCluster.tenCumRap}
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {theaterCluster.danhSachPhim
                    .slice(0, 4)
                    .map((film, index) => {
                      return (
                        <Fragment key={index}>
                          <div className="my-5">
                            <div
                              style={{
                                display: 'flex',
                                gap: '8px',
                              }}
                            >
                              <img
                                style={{ height: 150, width: 110 }}
                                src={film.hinhAnh}
                                alt={film.tenPhim}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = 'https://picsum.photos/75/75';
                                }}
                              />

                              <div className="ml-2">
                                <h1 className="text-2xl text-green-700">
                                  {film.tenPhim}
                                </h1>
                                <p>{theaterCluster.diaChi}</p>
                                <div
                                  style={{
                                    display: 'grid',
                                    gap: '20px',
                                    gridTemplateColumns:
                                      'auto auto auto auto auto auto',
                                  }}
                                >
                                  {film.lstLichChieuTheoPhim
                                    ?.slice(0, 12)
                                    .map((showTime, index) => {
                                      return (
                                        <NavLink
                                          style={{
                                            padding: '3px',
                                            border:
                                              '1.5px solid var(--primary-color)',
                                            borderRadius: '5px',
                                            color: 'var(--primary-color)',
                                            fontWeight: 600,
                                          }}
                                          to={`/checkout/${showTime.maLichChieu}`}
                                          key={index}
                                        >
                                          {moment(
                                            showTime.ngayChieuGioChieu,
                                          ).format('hh:mm A')}
                                        </NavLink>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </Fragment>
                      );
                    })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <>
      <Tabs tabPosition="top">{renderTheaterSystem()}</Tabs>
    </>
  );
}

export default TabMovieTheater;
