(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{351:function(t,e,n){"use strict";n(44),n(17);var l={name:"Navbar",data:function(){return{auth:this.$store.state.auth,page:null}},beforeCreate:function(){this.page=this.$route.name},watch:{$route:function(){this.page=this.$route.name}},methods:{logout:function(){this.$store.commit("auth/SET",{key:"loggedIn",value:!1}),this.$store.commit("auth/SET",{key:"user",value:null}),this.$store.commit("application/updateData",{}),this.$store.commit("dashboard/clear"),localStorage.clear()},toggleMobileMenu:function(){this.$refs.collapse.style.height="".concat(this.$refs.collapse.style.height).replace("px","")>0?0:"".concat(this.$refs.collapse.scrollHeight,"px")}}},o=n(39),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header-section"},[n("div",{staticClass:"container h-100"},[n("div",{staticClass:"inner-header"},[n("div",{staticClass:"logo h-100"},[n("nuxt-link",{staticClass:"h-100 d-flex align-items-center",attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo-colored.png",alt:"Logo"}})]),t._v(" "),n("button",{staticClass:"btn btn-outline-secondary mobile-menu-toggle",on:{click:function(e){return t.toggleMobileMenu()}}},[n("i",{staticClass:"fa fa-bars"})])],1),t._v(" "),n("div",{ref:"collapse",staticClass:"mobile-collapse flex-grow-1 d-flex justify-content-between"},[n("div"),t._v(" "),n("nav",{staticClass:"main-menu mobile-menu h-100 small"},[n("ul",{staticClass:"h-100"},[t.auth.loggedIn?t._e():n("li",{staticClass:"h-100 d-inline-flex align-items-center"},[n("nuxt-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),t._m(0),t._v(" "),n("li",{staticClass:"h-100 d-inline-flex align-items-center"},[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About us")])],1),t._v(" "),n("li",{staticClass:"h-100 d-inline-flex align-items-center"},[n("nuxt-link",{attrs:{to:"/faq"}},[t._v("FAQ")])],1),t._v(" "),n("li",{staticClass:"h-100 d-inline-flex align-items-center"},[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact us")])],1),t._v(" "),n("li",{staticClass:"h-100 d-inline-flex align-items-center"},[n("nuxt-link",{attrs:{to:"/fgloan"}},[t._v("FG Loans")])],1),t._v(" "),t._m(1),t._v(" "),t.auth.loggedIn?n("li",{staticClass:"h-100 d-inline-flex align-items-center cursor-pointer pl-3"},[n("b-dropdown",{attrs:{"aria-role":"list",position:"is-bottom-left"}},[n("div",{staticClass:"d-flex align-items-center",attrs:{slot:"trigger"},slot:"trigger"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:t.$store.state.auth.user.profile?t.$store.state.auth.user.profile.profile_image:"",alt:"Avatar"}})]),t._v(" "),n("b-icon",{attrs:{pack:"fas",icon:"caret-down"}})],1),t._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(e){return t.logout()}}},[n("i",{staticClass:"fa fa-power-off mr-2"}),t._v(" Logout\n                ")])],1)],1):t._e(),t._v(" "),t._m(2)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"h-100 d-inline-flex align-items-center"},[e("a",{attrs:{href:"https://asset-financing.sycamore.ng/"}},[this._v("E-shop")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"h-100 d-inline-flex align-items-center"},[e("a",{attrs:{href:"https://blog.sycamore.ng",target:"_blank"}},[this._v("\n                Blog\n                "),e("i",{staticClass:"fa fa-external-link-alt ml-1"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"h-100 d-inline-flex align-items-center"},[e("span")])}],!1,null,null,null);e.a=component.exports},458:function(t,e,n){"use strict";n.r(e);n(18);var l=n(3),o=n(351),r=n(353),c={components:{Navbar:o.a,Footer:r.a},data:function(){return{sending:!1,loading:!1,codeSent:!1,email:"",password:"",code:""}},methods:{handleSubmit:function(){this.email&&this.sendCode(this.email)},resendCode:function(){this.sendCode(this.email)},sendCode:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.sending=!0,n.next=3,e.$axios({method:"POST",url:"/changemypassword",data:{email:t}});case 3:(l=n.sent).data.status?(e.codeSent=!0,e.sending=!1,e.$buefy.snackbar.open({queue:!1,duration:5e3,message:l.data.message,type:"is-info",position:"is-top"})):(e.sending=!1,e.$buefy.snackbar.open({queue:!1,duration:5e3,message:l.data.message,type:"is-error",position:"is-top"}));case 5:case"end":return n.stop()}}),n)})))()},resetPassword:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,code,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading=!0,n=t.email,code=t.code,l=t.password,n&&code&&l){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,t.$axios({method:"POST",url:"/accountcontroller/confirmpasswordchange",data:{email:n,token:code,password:l}});case 6:o=e.sent,t.loading=!1,o.data.status?(t.$buefy.snackbar.open({queue:!1,duration:5e3,message:o.data.message,type:"is-success",position:"is-top"}),t.$router.push("/login")):t.$buefy.snackbar.open({queue:!1,duration:5e3,message:o.data.message,type:"is-danger",position:"is-top"});case 9:case"end":return e.stop()}}),e)})))()}},middleware:"noauth"},d=n(39),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main"},[n("Navbar"),t._v(" "),n("div",{staticClass:"nav-margin"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 offset-md-3 mt-5"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("h4",{staticClass:"title is-4"},[t._v("Reset PIN")]),t._v(" "),n("p",{staticClass:"subtitle is-6 pt-2"},[t._v("Enter your email address to reset your PIN")]),t._v(" "),n("div",{staticClass:"mt-5"},[n("div",{staticClass:"title is-4 text-center"}),t._v(" "),t.codeSent?n("div",[n("b-field",{attrs:{label:"Email","label-position":"inside"}},[n("b-input",{attrs:{disabled:"",size:"is-medium",type:"email"},model:{value:t.email,callback:function(e){t.email="string"==typeof e?e.trim():e},expression:"email"}})],1),t._v(" "),n("b-field",{attrs:{label:"Code","label-position":"inside"}},[n("b-input",{attrs:{disabled:t.loading||t.sending,size:"is-medium",type:"number"},model:{value:t.code,callback:function(e){t.code="string"==typeof e?e.trim():e},expression:"code"}})],1),t._v(" "),n("b-field",{attrs:{label:"New PIN","label-position":"inside"}},[n("b-input",{attrs:{disabled:t.loading||t.sending,size:"is-medium",type:"password","password-reveal":""},model:{value:t.password,callback:function(e){t.password="string"==typeof e?e.trim():e},expression:"password"}})],1),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-between"},[n("b-button",{staticClass:"mt-4",attrs:{type:"is-primary",outlined:"","native-type":"button",loading:t.sending},on:{click:function(e){return t.resendCode()}}},[t._v("Resend code")]),t._v(" "),n("b-button",{staticClass:"mt-4",attrs:{type:"is-primary","native-type":"submit",loading:t.loading,disabled:t.loading||t.sending},on:{click:function(e){return t.resetPassword()}}},[t._v("Change PIN")])],1)],1):n("div",[n("b-field",{attrs:{label:"Email","label-position":"inside"}},[n("b-input",{attrs:{disabled:t.loading||t.sending,size:"is-medium",type:"email"},model:{value:t.email,callback:function(e){t.email="string"==typeof e?e.trim():e},expression:"email"}})],1),t._v(" "),n("b-button",{staticClass:"mt-4",attrs:{type:"is-primary","native-type":"button",loading:t.sending},on:{click:function(e){return t.handleSubmit()}}},[t._v("Send reset code")])],1)])])])])])]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);