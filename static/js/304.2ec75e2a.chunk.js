"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{291:function(n,t,e){e.d(t,{Z:function(){return l}});var r,a,u=e(689),c=e(87),i=e(168),o=e(867),s=o.ZP.ul(r||(r=(0,i.Z)(["\nmargin-top: 12px;\n"]))),f=o.ZP.li(a||(a=(0,i.Z)(["\nmargin-bottom: 6px;\npadding: 16px;\ndisplay: block;\ncolor: white;\n"]))),p=e(184),l=function(n){var t=n.movies,e=(0,u.TH)();return(0,p.jsx)(s,{children:t.map((function(n){var t=n.id,r=n.original_title;return(0,p.jsx)(f,{children:(0,p.jsx)(c.rU,{state:{from:e},to:"/movies/".concat(t),children:r})},t)}))})}},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r,a=e(439),u=e(291),c=e(791),i=e(82),o=e(168),s=e(867).ZP.h1(r||(r=(0,o.Z)(["\ncolor: grey;\nfont-size: 30px;\nmargin-left: 10px;\n"]))),f=e(184),p=function(){var n=(0,c.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1];return(0,c.useEffect)((function(){(0,i.Df)("").then(r)}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{children:"Trending today"}),(0,f.jsx)(u.Z,{movies:e})]})}},82:function(n,t,e){e.d(t,{Df:function(){return o},Eb:function(){return p},Hu:function(){return l},Pg:function(){return f},Ph:function(){return s}});var r=e(861),a=e(757),u=e.n(a),c=e(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="3373af60a4ee1fe7510a1a61c11380e1",o=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/week?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=304.2ec75e2a.chunk.js.map