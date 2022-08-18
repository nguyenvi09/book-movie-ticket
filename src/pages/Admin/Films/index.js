import React, { Fragment, useEffect, useState } from "react";
import { Table, Input, Button } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMovieAction,
  getListMovieAction,
} from "../../../redux/actions/movieManagerAction";
import { NavLink, Outlet } from "react-router-dom";
import FilmModal from "../../../components/FilmModal";
function Films() {
  const { arrMovieDefault } = useSelector((state) => state.movieManagerReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListMovieAction());
  }, []);

  const { Search } = Input;

  const onSearch = (value) => {
    console.log(value);
    dispatch(getListMovieAction(value));
  };

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",

      sorter: (a, b) => a.maPhim - b.maPhim,
      defaultSortOrder: "descend",
      width: "15%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",

      render: (text, film, index) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              width={80}
              height={90}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",

      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return -1;
        }
        return 1;
      },
      sortDirections: ["ascend", "descend"],
      width: "25%",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",

      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + " ..."
              : film.moTa}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Hành động",
      dataIndex: "maPhim",
      render: (text, film) => {
        return (
          <Fragment key={film.maPhim}>
            {/* <NavLink key={1} to={`edit-film/${film.maPhim}`}>
              <EditOutlined />
            </NavLink> */}
            <FilmModal maPhim={film.maPhim} />
            <Button
              type="danger"
              onClick={() => {
                if (
                  window.confirm("Bạn có chắc muốn xóa phim: " + film.tenPhim)
                ) {
                  dispatch(deleteMovieAction(film.maPhim));
                }
              }}
            >
              Xóa
            </Button>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
  ];
  const data = arrMovieDefault;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="container">
      <h3 className="display-4">Quản lý phim</h3>

      <Search
        placeholder="Tìm kiếm phim"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey="maPhim"
      />
      <Outlet />
    </div>
  );
}

export default Films;
