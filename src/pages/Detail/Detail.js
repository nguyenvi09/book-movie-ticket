import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, Rate } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetails } from '../../redux/actions/theaterManagerAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const { TabPane } = Tabs;
function Detail(props) {
  const { movieDetail } = useSelector((state) => state.movieManagerReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieDetails(id));
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movieDetail.hinhAnh})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        width: '100vw',
      }}
    >
      <div
        style={{ height: '100vh' }}
        className="container d-flex align-items-center"
      >
        <div className="row">
          <div className="col-4">
            <img
              style={{ width: '80%', borderRadius: '20px' }}
              src={movieDetail.hinhAnh}
              alt={movieDetail.tenPhim}
            />
          </div>
          <div className="col-8 text-white">
            <div
              style={{
                padding: '20px',
                backgroundColor: 'rgba(34, 34, 34, .8)',
                borderRadius: '20px',
                fontSize: '1.8rem',
              }}
            >
              <p className="display-4" style={{ fontWeight: '700' }}>
                {movieDetail.tenPhim}
              </p>
              <p>
                Tình trạng: {movieDetail.dangChieu ? 'Đang chiếu' : 'Sắp chiếu'}
              </p>
              <p>
                Đánh giá:{' '}
                <span>
                  <Rate
                    allowHalf
                    value={movieDetail.danhGia / 2}
                    style={{ color: 'yellow', fontSize: '3rem' }}
                  />
                </span>
              </p>
              <p>Mô tả: {movieDetail.moTa}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-light" style={{ borderRadius: '20px' }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Lịch chiếu" key="1">
            <Tabs tabPosition={'left'}>
              {movieDetail.heThongRapChieu?.map((item, index) => {
                return (
                  <TabPane
                    tab={
                      <div>
                        <img
                          src={item.logo}
                          width="60"
                          height="60"
                          alt={item.logo}
                        />
                        <span
                          style={{
                            marginLeft: '5px',
                            fontSize: '2rem',
                            fontWeight: 'bold',
                          }}
                        >
                          {item.tenHeThongRap}
                        </span>
                      </div>
                    }
                    key={index}
                  >
                    {item.cumRapChieu?.map((cumRap, index) => {
                      return (
                        <div key={index} className="mb-5">
                          <div style={{ display: 'flex', gap: '10px' }}>
                            <img
                              style={{ width: '100px', height: '100px' }}
                              src={cumRap.hinhAnh}
                              alt={cumRap.tenCumRap}
                            />
                            <div className="ml-3">
                              <p
                                style={{
                                  fontWeight: 'bold',
                                  fontSize: '2rem',
                                  marginBottom: '0',
                                }}
                              >
                                {cumRap.tenCumRap}
                              </p>
                              <p className="font-weight-bold">
                                {cumRap.diaChi}
                              </p>
                              <div
                                style={{
                                  display: 'grid',
                                  gridTemplateColumns:
                                    'auto auto  auto auto auto auto',
                                  gap: '10px',
                                }}
                              >
                                {cumRap.lichChieuPhim
                                  ?.slice(0, 12)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        key={index}
                                        style={{
                                          padding: '3px',
                                          border:
                                            '1px solid var(--primary-color)',
                                          borderRadius: '5px',
                                          color: 'var(--primary-color)',
                                          fontWeight: 500,
                                        }}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu,
                                        ).format('hh:mm A')}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </TabPane>
                );
              })}
            </Tabs>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Detail;
