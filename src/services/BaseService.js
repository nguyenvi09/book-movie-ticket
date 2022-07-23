//tổ chức services để quản lý API, các phương thức tương tác với BE
import Axios from "axios";
import { DOMAIN, TOKEN, USER_LOGIN } from "../util/settings/config";

export class BaseService {
  //put json về phía backend
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) }, //JWT
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: model,
      headers: {
        Authorization: localStorage.getItem(USER_LOGIN)
          ? "Bearer " + JSON.parse(localStorage.getItem(USER_LOGIN)).accessToken
          : "",
        TokenCybersoft: TOKEN,
      }, //JWT
    });
  };

  get = (url) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "GET",
      headers: {
        //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
        TokenCybersoft: TOKEN,
      },
    });
  };

  delete = (url) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };
}
