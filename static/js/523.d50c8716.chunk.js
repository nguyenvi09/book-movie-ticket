"use strict";(self.webpackChunkmovie_booking=self.webpackChunkmovie_booking||[]).push([[523],{523:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});t(2791);var r=t(5705),a=t(132),o=t(3504),c="Register_register__background__EM6-b",u="Register_register__form__tmioi",i="Register_close__BGAp+",s=t(9434),l=t(8553),h=t(184);var p=function(){var n=(0,s.I0)(),e=(0,r.TA)({initialValues:{taiKhoan:"",matKhau:"",hoTen:"",email:"",soDienThoai:""},validationSchema:a.Ry({taiKhoan:a.Z_().required("T\xe0i kho\u1ea3n kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!").min(6,"T\xe0i kho\u1ea3n t\u1ed1i thi\u1ec3u 6 k\xfd t\u1ef1"),matKhau:a.Z_().required("M\u1eadt kh\u1ea9u kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!"),hoTen:a.Z_().required("H\u1ecd t\xean kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!"),email:a.Z_().required("Email kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!").email("Email kh\xf4ng h\u1ee3p l\u1ec7, v\xed d\u1ee5: example@gmail.com"),soDienThoai:a.Z_().required("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng!").max(10,"T\u1ed1i ta 10 ch\u1eef s\u1ed1!").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng h\u1ee3p l\u1ec7!")}),onSubmit:function(e){console.log(e),n((0,l.H)(e))}});return(0,h.jsx)("div",{className:"".concat(c),children:(0,h.jsxs)("form",{onSubmit:e.handleSubmit,className:"".concat(u),children:[(0,h.jsxs)("div",{className:"form-outline mb-4",children:[(0,h.jsx)("input",{type:"text",className:"form-control form-control-lg",name:"taiKhoan",value:e.values.taiKhoan,onChange:e.handleChange,placeholder:"T\xean \u0111\u0103ng nh\u1eadp"}),e.errors.taiKhoan&&(0,h.jsx)("span",{style:{fontSize:"1.6rem",color:"#ff0000c2"},children:e.errors.taiKhoan})]}),(0,h.jsxs)("div",{className:"form-outline mb-4",children:[(0,h.jsx)("input",{type:"password",className:"form-control form-control-lg",name:"matKhau",value:e.values.matKhau,onChange:e.handleChange,placeholder:"Nh\u1eadp m\u1eadt kh\u1ea9u"}),e.errors.matKhau&&(0,h.jsx)("span",{style:{fontSize:"1.6rem",color:"#ff0000c2"},children:e.errors.matKhau})]}),(0,h.jsxs)("div",{className:"form-outline mb-4",children:[(0,h.jsx)("input",{type:"text",className:"form-control form-control-lg",name:"hoTen",value:e.values.hoTen,onChange:e.handleChange,placeholder:"H\u1ecd v\xe0 t\xean"}),e.errors.hoTen&&(0,h.jsx)("span",{style:{fontSize:"1.6rem",color:"#ff0000c2"},children:e.errors.hoTen})]}),(0,h.jsxs)("div",{className:"form-outline mb-4",children:[(0,h.jsx)("input",{type:"email",className:"form-control form-control-lg",name:"email",value:e.values.email,onChange:e.handleChange,placeholder:"Nh\u1eadp Email"}),e.errors.email&&(0,h.jsx)("span",{style:{fontSize:"1.6rem",color:"#ff0000c2"},children:e.errors.email})]}),(0,h.jsxs)("div",{className:"form-outline mb-4",children:[(0,h.jsx)("input",{type:"text",className:"form-control form-control-lg",name:"soDienThoai",value:e.values.soDienThoai,onChange:e.handleChange,placeholder:"Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),e.errors.soDienThoai&&(0,h.jsx)("span",{style:{fontSize:"1.6rem",color:"#ff0000c2"},children:e.errors.soDienThoai})]}),(0,h.jsx)("div",{className:"pt-1 mb-4",children:(0,h.jsx)("button",{className:"btn btn-danger btn-lg btn-block",type:"submit",children:"\u0110\u0103ng k\xfd"})}),(0,h.jsx)("span",{children:"B\u1ea1n \u0111\xe3 c\xf3 t\xe0i kho\u1ea3n? "}),(0,h.jsx)(o.OL,{to:"/login",children:"\u0110\u0103ng nh\u1eadp"}),(0,h.jsx)(o.OL,{className:"".concat(i),to:"/",children:"X"})]})})}},8553:function(n,e,t){t.d(e,{ND:function(){return y},J$:function(){return k},xy:function(){return b},pZ:function(){return m},nQ:function(){return x},Re:function(){return f},H:function(){return d},z$:function(){return v}});var r=t(4165),a=t(5861),o=t(5645),c=t(3144),u=t(5671),i=t(136),s=t(7277),l=(t(2426),t(2226)),h=function(n){(0,i.Z)(t,n);var e=(0,s.Z)(t);function t(){var n;return(0,u.Z)(this,t),(n=e.call(this)).logIn=function(e){return n.post("/api/QuanLyNguoiDung/DangNhap",e)},n.registerAccount=function(e){return n.post("/api/QuanLyNguoiDung/DangKy",e)},n.getUserInfo=function(){return n.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan")},n.updateAccount=function(e){return n.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",e)},n.getUserList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""!==e.trim()?n.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=".concat(l.WY,"&tuKhoa=").concat(e)):n.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=".concat(l.WY))},n.deleteUser=function(e){return n.delete("/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=".concat(e))},n.editUser=function(e){return n.post("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",e)},n.addUser=function(e){return n.post("/api/QuanLyNguoiDung/ThemNguoiDung",e)},n}return(0,c.Z)(t)}(t(6002).b),p=new h,g=t(2862),f=function(n){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.logIn(n);case 3:200===(a=e.sent).data.statusCode&&(t({type:g.pe,data:a.data.content}),window.alert("\u0110\u0103ng nh\u1eadp th\xe0nh c\xf4ng"),o.m.back()),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),window.alert("T\xe0i kho\u1ea3n ho\u1eb7c m\u1eadt kh\u1ea9u kh\xf4ng \u0111\xfang"),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},m=function(){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.getUserInfo();case 3:200===(t=n.sent).data.statusCode&&e({type:g.$j,data:t.data.content}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},d=function(n){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.registerAccount(n);case 3:200===(a=e.sent).data.statusCode&&(t({type:g.pe,data:a.data.content}),o.m.back(),window.alert("\u0110\u0103ng k\xfd th\xe0nh c\xf4ng")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("errors",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},v=function(n){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.updateAccount(n);case 3:a=e.sent,t({type:"UPDATE_ACCOUNT",payload:a.data.content}),window.alert("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng!"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("errors",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()},x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.getUserList(n);case 3:200===(a=e.sent).data.statusCode&&t({type:"SET_DANH_SACH_NGUOI_DUNG",payload:a.data.content}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},k=function(n){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.deleteUser(n);case 3:200===e.sent.data.statusCode&&(alert("X\xf3a th\xe0nh c\xf4ng!"),t(x())),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.response.data.content),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},b=function(n){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.editUser(n);case 3:e.sent,alert("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng!"),t(x()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("errors",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()},y=function(n){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.addUser(n);case 3:e.sent,t(x()),alert("Th\xeam m\u1edbi th\xe0nh c\xf4ng!"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("L\u1ed7i: "+e.t0.response.data.content);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()}},6002:function(n,e,t){t.d(e,{b:function(){return i}});var r=t(3144),a=t(5671),o=t(4569),c=t.n(o),u=t(2226),i=(0,r.Z)((function n(){(0,a.Z)(this,n),this.put=function(n,e){return c()({url:"".concat(u.yK).concat(n),method:"PUT",data:e,headers:{Authorization:localStorage.getItem(u.bc)?"Bearer "+JSON.parse(localStorage.getItem(u.bc)).accessToken:"",TokenCybersoft:u.o3}})},this.post=function(n,e){return c()({url:"".concat(u.yK).concat(n),method:"POST",data:e,headers:{Authorization:localStorage.getItem(u.bc)?"Bearer "+JSON.parse(localStorage.getItem(u.bc)).accessToken:"",TokenCybersoft:u.o3}})},this.get=function(n){return c()({url:"".concat(u.yK).concat(n),method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem(u.o3),TokenCybersoft:u.o3}})},this.delete=function(n){return c()({url:"".concat(u.yK).concat(n),method:"DELETE",headers:{Authorization:localStorage.getItem(u.bc)?"Bearer "+JSON.parse(localStorage.getItem(u.bc)).accessToken:"",TokenCybersoft:u.o3}})}}))}}]);
//# sourceMappingURL=523.d50c8716.chunk.js.map