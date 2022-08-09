import React, { Fragment, useEffect } from "react";
import { Table, Input } from "antd";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getListMovieAction } from "../../../redux/actions/movieManagerAction";
import { NavLink, Outlet } from "react-router-dom";

function Films() {
  const { arrMovieDefault } = useSelector((state) => state.movieManagerReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListMovieAction());
  }, []);

  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",

      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
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
              width={50}
              height={50}
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
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
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
          <Fragment>
            <NavLink key={1} to={`edit-film/${film.maPhim}`}>
              <EditOutlined />
            </NavLink>
            <NavLink key={2} to="/">
              <DeleteOutlined />
            </NavLink>
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
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
      <Outlet />
    </div>
  );
}

export default Films;
