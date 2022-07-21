import React from "react";
import { Navigate } from "react-router-dom";
import { USER_LOGIN } from "../../util/settings/config";

function Checkout() {
  //kiểm tra nếu chưa đăng nhập thì chuyển hướng sang trang đăng nhập
  //nếu chưa tồn tại localStorage thì ko cho vào
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Navigate replace to="/login" />;
  }
  return <div>Checkout</div>;
}

export default Checkout;
