import Axios from "axios";
import { DOMAIN, TOKEN, USER_LOGIN } from "../util/settings/config";

export class BaseService {
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
      headers: {
        Authorization: localStorage.getItem(USER_LOGIN)
          ? "Bearer " + JSON.parse(localStorage.getItem(USER_LOGIN)).accessToken
          : "",
        TokenCybersoft: TOKEN,
      },
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
      },
    });
  };

  get = (url) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
        TokenCybersoft: TOKEN,
      },
    });
  };

  delete = (url) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem(USER_LOGIN)
          ? "Bearer " + JSON.parse(localStorage.getItem(USER_LOGIN)).accessToken
          : "",
        TokenCybersoft: TOKEN,
      },
    });
  };
}
