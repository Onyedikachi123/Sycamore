(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{351:function(t,e,n){"use strict";n(44),n(17);var o={name:"Navbar",data:function(){return{auth:this.$store.state.auth,page:null}},beforeCreate:function(){this.page=this.$route.name},watch:{$route:function(){this.page=this.$route.name}},methods:{logout:function(){this.$store.commit("auth/SET",{key:"loggedIn",value:!1}),this.$store.commit("auth/SET",{key:"user",value:null}),this.$store.commit("application/updateData",{}),this.$store.commit("dashboard/clear"),localStorage.clear()},toggleMobileMenu:function(){this.$refs.collapse.style.height="".concat(this.$refs.collapse.style.height).replace("px","")>0?0:"".concat(this.$refs.collapse.scrollHeight,"px")}}},r=n(39),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header-section"},[n("div",{staticClass:"container h-100"},[n("div",{staticClass:"inner-header"},[n("div",{staticClass:"logo h-100"},[n("nuxt-link",{staticClass:"h-100 d-flex align-items-center",attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo-colored.png",alt:"Logo"}})]),t._v(" "),n("button",{staticClass:"btn btn-outline-secondary mobile-menu-toggle",on:{click:function(e){return t.toggleMobileMenu()}}},[n("i",{staticClass:"fa fa-bars"})])],1),t._v(" "),n("div",{ref:"collapse",staticClass:"mobile-collapse flex-grow-1 d-flex justify-content-between"},[n("div"),t._v(" "),n("nav",{staticClass:"main-menu mobile-menu h-100 small"},[n("ul",{staticClass:"h-100"},[t.auth.loggedIn?t._e():n("li",{staticClass:"h-100 d-inline-flex align-items-center"},[n("nuxt-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),t._m(0),t._v(" "),n("li",{staticClass:"h-100 d-inline-flex align-items-center"},[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About us")])],1),t._v(" "),n("li",{staticClass:"h-100 d-inline-flex align-items-center"},[n("nuxt-link",{attrs:{to:"/faq"}},[t._v("FAQ")])],1),t._v(" "),n("li",{staticClass:"h-100 d-inline-flex align-items-center"},[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact us")])],1),t._v(" "),n("li",{staticClass:"h-100 d-inline-flex align-items-center"},[n("nuxt-link",{attrs:{to:"/fgloan"}},[t._v("FG Loans")])],1),t._v(" "),t._m(1),t._v(" "),t.auth.loggedIn?n("li",{staticClass:"h-100 d-inline-flex align-items-center cursor-pointer pl-3"},[n("b-dropdown",{attrs:{"aria-role":"list",position:"is-bottom-left"}},[n("div",{staticClass:"d-flex align-items-center",attrs:{slot:"trigger"},slot:"trigger"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:t.$store.state.auth.user.profile?t.$store.state.auth.user.profile.profile_image:"",alt:"Avatar"}})]),t._v(" "),n("b-icon",{attrs:{pack:"fas",icon:"caret-down"}})],1),t._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(e){return t.logout()}}},[n("i",{staticClass:"fa fa-power-off mr-2"}),t._v(" Logout\n                ")])],1)],1):t._e(),t._v(" "),t._m(2)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"h-100 d-inline-flex align-items-center"},[e("a",{attrs:{href:"https://asset-financing.sycamore.ng/"}},[this._v("E-shop")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"h-100 d-inline-flex align-items-center"},[e("a",{attrs:{href:"https://blog.sycamore.ng",target:"_blank"}},[this._v("\n                Blog\n                "),e("i",{staticClass:"fa fa-external-link-alt ml-1"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"h-100 d-inline-flex align-items-center"},[e("span")])}],!1,null,null,null);e.a=component.exports},358:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHgSURBVHgBpZXNTsJAEMdnt9aQcKl3ExpfgJBw8AYEL3pArmBE+wi8EGJM9KocvBHKAxDDnUOJD2APmqDtdp1pKS5fsYV/0nR3s/Pr7OzMlMEWPR0clCXApQyCsmTMZAAGzl0mpcM4twXAy7Xv25ts2RoskzGl590hoAz/CI1tputWYzZz1HWuTh417UZ43lsSIIn2Bbif7FY+9gfETV3YUQi6bQpxPx9HRyYPKW6wu1yu6wUKRXh8iuEuQN0wwmcugzihp3TLgZQDSKlsLgdn/X44fi0WwXPdcBwwVuEBQB1SKgZmTZMua0l49DrHPCxBCqnAT8eBfrW68HKuEgdMbHWFYkSGSYFf0+nyJilNrl7QIQLrkwmcj0Zg5PPpgZEMTqUXz37wGN/4EJwAMfgI3xf4oQRAksvRXUddIQMyjMEnrVb4prAkAGI+MYdjcxiqa2RAhh/jcQg+7XSSAyMNKaWeV1dVMCkFEIgXlinW/WBTEyFPj2s1eO/1VtNmoxhjdtP3K1HtA5hC0/aqfbpwTYhCAyCqfRogsA17KOC8TRwaL/rplRBdfFlqiiX1UHButTyvG6+td34MhdS0ZJ0fY8h834o93AqN9YDdi0fNpiSx9Bb/KMxDXBvSLW/7R/0ClO31xMUSKYwAAAAASUVORK5CYII="},378:function(t,e,n){var content=n(411);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("3c42bd47",content,!0,{sourceMap:!1})},403:function(t,e,n){t.exports=n.p+"img/code.f4b0271.png"},404:function(t,e,n){t.exports=n.p+"img/thisday.ce25b4f.png"},405:function(t,e,n){t.exports=n.p+"img/the-nation.a9488c7.png"},406:function(t,e,n){t.exports=n.p+"img/Punch-Logo.1a55f07.png"},407:function(t,e,n){t.exports=n.p+"img/vanguardlogo.ac08682.png"},408:function(t,e,n){t.exports=n.p+"img/business-day.b0186c3.png"},409:function(t,e,n){t.exports=n.p+"img/Mask Group.a41f48d.png"},410:function(t,e,n){"use strict";n(378)},411:function(t,e,n){(e=n(58)(!1)).push([t.i,".fgloans-details{padding-top:70px}.hero-text h1{font-size:3rem;font-weight:700;margin-bottom:30px}button{background-color:red;border:1px solid red;margin-top:30px;padding:10px 20px;border-radius:4px}button a{font-weight:700}button a,button a:hover{color:#fff}#as-seen{background-color:#f2e8e8;height:70px;padding:25px}#as-seen .as-seen-img{display:flex}.as-seen-img h5{width:100%}.news-media a img{width:14%}.news-media{margin-top:-11px}.title{font-size:3.5rem}#howitworks .about-text,.about-text-p,.title{color:#2d0000}.about-text ul li{margin-bottom:20px}.about-section{margin-top:50px;margin-bottom:50px}.news-media a{padding-right:30px}@media only screen and (max-width:600px){.title{font-size:2.5rem}.news-media{margin:auto;width:100%}.news-media a img{margin-top:-42px;width:23%}.about-text ul li{font-size:11px}#howitworks .howitworks-img{margin-top:-16px!important}.hero-img img{margin-bottom:-75px}.hero-text h1{font-size:2rem}}",""]),t.exports=e},455:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"fgloans-details"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12 text-center"},[o("div",{staticClass:"hero-text"},[o("h1",[t._v("Sycamore Public Sector Loan")]),t._v(" "),o("p",[t._v("\n              Fedral government workers in Nigeria can now access loans\n              directly from "),o("br"),t._v("\n              mobile phones! Just dail *347*34# to get started now.\n            ")])]),t._v(" "),o("button",[o("a",{attrs:{href:"#howitworks"}},[t._v("HOW IT WORKS")])]),t._v(" "),o("div",{staticClass:"hero-img",staticStyle:{"margin-bottom":"100px"}},[o("img",{attrs:{src:n(403)}})])])])]),t._v(" "),o("section",{attrs:{id:"as-seen"}},[o("div",{staticClass:"container as-seen-img"},[o("h5",[t._v("As seen on:")]),t._v(" "),o("div",{staticClass:"news-media"},[o("a",{attrs:{href:"https://www.thisdaylive.com/index.php/2020/03/07/sycamore-presents-lending-platform-for-businesses/"}},[o("img",{attrs:{src:n(404)}})]),t._v(" "),o("a",{attrs:{href:"https://thenationonlineng.net/sycamore-launches-ussd-loan-platform-for-civil-servants/"}},[o("img",{attrs:{src:n(405)}})]),t._v(" "),o("a",{attrs:{href:"https://www.pressreader.com/nigeria/the-punch/20200324/281672552031096"}},[o("img",{attrs:{src:n(406)}})]),t._v(" "),o("a",{attrs:{href:"https://www.vanguardngr.com/2020/11/sycamore-launches-ussd-loan-infrastructure-for-fedral-workers/"}},[o("img",{attrs:{src:n(407)}})]),t._v(" "),o("a",{attrs:{href:"https://businessday.ng/personal-finance/article/businesses-individuals-in-focus-as-sycamore-launches-solution-to-financial-freedom/"}},[o("img",{attrs:{src:n(408)}})])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"about-section",attrs:{id:"howitworks"}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6 d-flex align-items-start justify-content-center mt-6 mb-0"},[o("div",{staticClass:"howitworks-img",staticStyle:{"margin-top":"80px"}},[o("img",{attrs:{src:n(409),alt:"How it works"}})])]),t._v(" "),o("div",{staticClass:"col-lg-6"},[o("div",{staticClass:"about-text"},[o("h2",{staticClass:"title font-weight-bold mb-4 "},[t._v("\n              How it Works\n            ")]),t._v(" "),o("p",{staticClass:"about-text-p"},[t._v("Follow these simple steps to get started")]),t._v(" "),o("ul",[o("li",[o("img",{attrs:{src:n(358)}}),t._v("    Dial *347*34#")]),t._v(" "),o("li",[o("img",{attrs:{src:n(358)}}),t._v("    Insert your IPPIS number")]),t._v(" "),o("li",[o("img",{attrs:{src:n(358)}}),t._v("    Provide desired amount and tenor")]),t._v(" "),o("li",[o("img",{attrs:{src:n(358)}}),t._v("    Confirm bank account details")]),t._v(" "),o("li",[o("img",{attrs:{src:n(358)}}),t._v("    Get feedback!")])])])])])])])}],r=n(351),l=n(353),c={components:{Navbar:r.a,Footer:l.a}},m=(n(410),n(39)),component=Object(m.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"main"},[e("Navbar"),this._v(" "),this._m(0),this._v(" "),this._m(1),this._v(" "),e("Footer")],1)}),o,!1,null,null,null);e.default=component.exports}}]);