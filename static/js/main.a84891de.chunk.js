(this["webpackJsonpanime-search"]=this["webpackJsonpanime-search"]||[]).push([[0],{25:function(e,n,t){e.exports=t(43)},30:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),i=(t(30),t(1)),l=t(2),u=t(3),s=t(14),m=t(15),d=t(24),p=t(16),f=t(5),h=t(23),v={margin:"0 0.5rem 0 0",borderRadius:"6px",border:"0",padding:"1rem 1.5rem",fontSize:"120%"},b=function(e){function n(){var e;return Object(s.a)(this,n),(e=Object(d.a)(this,Object(p.a)(n).call(this))).state={animeTitle:""},e.handleChange=e.handleChange.bind(Object(f.a)(e)),e}return Object(h.a)(n,e),Object(m.a)(n,[{key:"handleChange",value:function(e){var n=e.value;this.setState({animeTitle:n})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("input",{type:this.props.type,style:v,placeholder:this.props.placeholder?this.props.placeholder:"",value:this.props.value,onChange:this.props.onChange})}}]),n}(r.a.Component);function g(){var e=Object(i.a)(["\n        padding: 1rem;\n        background: #5262F2;\n        border-radius: 6px;\n        color: white;\n        border:0;\n        box-shadow: 6px 6px 10px #BEBEBE;\n        cursor: pointer;\n        transition: background-color 1s;\n\n        :hover{\n            background-color: #061FFB ;\n        }\n    "]);return g=function(){return e},e}var x=l.a.button(g());var E=function(e){return r.a.createElement(x,{onClick:e.onClick},e.buttonText)},j=Object(a.createContext)(["",function(){}]);function y(){var e=Object(i.a)(["\n        display: flex;\n        justify-content: center;\n        padding:0 2rem;\n        margin: 0 auto;\n        input{\n            flex: 3.5;\n        }\n        button{\n            flex: 1;\n        }\n        @media (min-width: 800px){\n            width: 65%;\n        }\n\n        @media (max-width: 500px){\n            input{\n                width: 45%;\n\n            }\n            button{\n                flex:1;\n            }\n        }\n\n        \n    "]);return y=function(){return e},e}var O=l.a.form(y());var w=function(){var e=Object(a.useContext)(j),n=Object(u.a)(e,2),t=(n[0],n[1]),o=Object(a.useState)(""),c=Object(u.a)(o,2),i=c[0],l=c[1];return r.a.createElement(O,{key:"1"},r.a.createElement(b,{type:"text",placeholder:"Search anime",value:i,onChange:function(e){return l(e.currentTarget.value)}}),r.a.createElement(E,{buttonText:"Search",onClick:function(e){e.preventDefault(),t(i)}}))};function k(){var e=Object(i.a)(["\n        background-color: #C2C2C2;\n        padding: 1.5rem 0;\n    "]);return k=function(){return e},e}var C=l.a.header(k());var S=function(){return r.a.createElement(C,null,r.a.createElement(w,null))};function T(){var e=Object(i.a)(["\n            display: block;\n            color: blue;\n            text-decoration: none;\n            text-align: center;\n    "]);return T=function(){return e},e}function B(){var e=Object(i.a)(["\n        font-size: 150%;\n        text-align: center;\n        font-weight: bold;\n\n        @media (max-width: 768px){\n            padding: 0 1rem;\n        }\n    "]);return B=function(){return e},e}function F(){var e=Object(i.a)(["\n    \n        color: #333;\n        text-decoration: none;\n\n        \n    "]);return F=function(){return e},e}function N(){var e=Object(i.a)(["\n        text-align: center\n    "]);return N=function(){return e},e}var R=function(e){var n=l.a.p(N()),t=Object(l.a)(n)(F()),a=Object(l.a)(n)(B()),o=l.a.a(T());return"CardTitle"===e.type?r.a.createElement(t,null,e.value):"resultText"===e.type?r.a.createElement(a,null,e.value):"AnimeLink"===e.type?r.a.createElement(o,{href:e.link},e.value):r.a.createElement(n,null,r.a.createElement("strong",null,e.heading)," ",e.value)};function W(){var e=Object(i.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 60%;\n    margin: 0 auto;\n    padding:  3rem 0;\n    flex-direction: column;\n\n    img{\n\n    }\n    p{\n        margin-bottom: 0;\n    }\n\n    @media (max-width: 470px){\n        p{\n            align-self: flex-start;\n        }\n        width: 70%;\n    }\n\n\n"]);return W=function(){return e},e}var q=l.a.div(W()),z={fontSize:"110%",textAlign:"center",fontWeight:"bold"},A=function(e){return console.log(e),r.a.createElement(q,null,r.a.createElement("img",{src:e.location.state.img,alt:""}),r.a.createElement("h2",{style:z},e.location.state.title),r.a.createElement(R,{heading:"Type:",value:"".concat(e.location.state.type)}),r.a.createElement(R,{className:"non-title",heading:"Episodes:",value:"".concat(e.location.state.episodes)}),r.a.createElement(R,{className:"non-title",heading:"Rated:",value:"".concat(e.location.state.rated)}),r.a.createElement(R,{className:"non-title",heading:"Score:",value:"".concat(e.location.state.score)}),r.a.createElement("p",null,r.a.createElement("strong",null,"Synopsis:"),r.a.createElement("br",null),"".concat(e.location.state.synopsis)," ",r.a.createElement("a",{href:e.location.state.link},"Read more.")))},D=t(11),J=t.n(D),U=t(19),_=t(6);function I(){var e=Object(i.a)(["\n        height: auto;\n        display: block;\n        width: 100%;\n        border-top-right-radius: 16px;\n        border-top-left-radius: 16px;\n\n    "]);return I=function(){return e},e}var L=function(e){var n=l.a.img(I());return r.a.createElement("div",null,r.a.createElement(n,{src:e.imageSource,alt:""}))};function M(){var e=Object(i.a)(["\n        box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.17);\n        border-radius: 16px;\n        width: 60%;\n        margin: 1rem auto;\n        padding-bottom: 0.5rem;\n        transition: box-shadow 1s, transform 0.5s;\n\n        :hover{\n            box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.3);\n            transform: translatey(-25px);\n        }\n\n        a{\n            text-decoration: none;\n        }\n        \n        \n    "]);return M=function(){return e},e}var P=l.a.div(M());var $=function(e){var n=Object(a.useContext)(j),t=Object(u.a)(n,1)[0];return r.a.createElement(P,null,r.a.createElement(_.a,{to:"/details/".concat(t),state:{title:e.cardTitle,img:e.img,synopsis:e.synopsis,episodes:e.episodes,link:e.animeUrl,type:e.type,rated:e.rated,score:e.score}},r.a.createElement(L,{imageSource:e.img}),r.a.createElement(R,{type:"CardTitle",value:e.cardTitle})))};function G(){var e=Object(i.a)(["\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        @media (max-width: 768px){\n            grid-template-columns: 1fr;\n        }\n    "]);return G=function(){return e},e}var H=l.a.div(G());var K=function(){var e=Object(a.useContext)(j),n=Object(u.a)(e,1)[0],t=Object(a.useState)(""),o=Object(u.a)(t,2),c=o[0],i=o[1],l=Object(a.useState)(),s=Object(u.a)(l,2),m=s[0],d=s[1];return Object(a.useEffect)((function(){function e(){return(e=Object(U.a)(J.a.mark((function e(){var t,a,o;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i("https://api.jikan.moe/v3/search/anime?q=".concat(n,"&limit=12")),e.next=3,fetch(c);case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.next=9,a.results;case 9:o=e.sent,d(o.map((function(e){return r.a.createElement($,{key:e.mal_id,cardTitle:e.title,img:e.image_url,synopsis:e.synopsis,episodes:e.episodes,animeUrl:e.url,score:e.score,type:e.type,rated:e.rated})})));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),d([])}),[n,c]),r.a.createElement("div",null,r.a.createElement(R,{path:"/text",type:"resultText",value:"Search results for ".concat(n)}),r.a.createElement(H,{path:"/"},m))};var Q=function(){return r.a.createElement("main",null,r.a.createElement(_.b,null,r.a.createElement(K,{path:"/"}),r.a.createElement(A,{path:"/details/:id"})))};function V(){var e=Object(i.a)(["\n        background-color: #333;\n        \n        p{\n            color: white;\n            text-align: center;\n\n            a{\n                color: white;\n            }\n        }\n\n    "]);return V=function(){return e},e}var X=function(){var e=l.a.footer(V());return r.a.createElement(e,null,r.a.createElement("p",null,"Built by ",r.a.createElement("a",{href:"https://twitter.com/developerRuq"},"Faruq")))};t(42);var Y=function(){var e=Object(a.useState)("");return r.a.createElement(j.Provider,{value:e},r.a.createElement("div",{className:"gridWrapper"},r.a.createElement(S,null),r.a.createElement(Q,null),r.a.createElement(X,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.a84891de.chunk.js.map