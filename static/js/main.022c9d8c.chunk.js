(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{13:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(2),i=n.n(s),a=n(14),c=n.n(a),o=n(4),u=n.n(o),d=n(15),j=n(16),l=n(17),m=n(20),p=n(19),v=n(18),h=n.n(v);n(13);var b=function(e){e.id;var t=e.title,n=e.year,s=e.summary,i=e.poster,a=e.genres;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h4",{children:[t,Object(r.jsx)("span",{children:n})]}),Object(r.jsx)("ul",{children:a.map((function(e,t){return Object(r.jsx)("li",{children:e},t)}))}),Object(r.jsx)("p",{className:s,children:s.slice(0,100)}),Object(r.jsx)("p",{children:Object(r.jsx)("img",{src:i,alt:t,title:t})})]})},O=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,r=n.data.data.movies,e.setState({movies:r,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(r.jsx)("div",{children:t?"Loading....":n.map((function(e){return Object(r.jsx)(b,{id:e.id,genres:e.genres,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image},e.id)}))})}}]),n}(i.a.Component);c.a.render(Object(r.jsx)(O,{}),document.getElementById("ddd"))}},[[45,1,2]]]);
//# sourceMappingURL=main.022c9d8c.chunk.js.map