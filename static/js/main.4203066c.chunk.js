(this["webpackJsonpspooky-halloween"]=this["webpackJsonpspooky-halloween"]||[]).push([[0],{12:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var i=a(1),r=a.n(i),s=a(7),n=a.n(s),l=(a(22),a(23),a(0)),o=function(){return Object(l.jsxs)("div",{className:"Home",children:[Object(l.jsx)("span",{children:"Hello, this application is intended to be a fun way to practice your React and TypeScript coding while celebrating Hacktoberfest 2020!"}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:"Feel free to fork this repository, make some changes, and submit a pull request!"}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:"Please avoid purposeless pull requests. Thank you"})]})},c=a(3),m=a(2),u=(a(12),{latLngBounds:{north:85,south:-85,east:180,west:-180},strictBounds:!0}),d={center:{lat:44.967243,lng:-103.771556},zoom:5,disableDefaultUI:!0,styles:[{featureType:"landscape",elementType:"all",stylers:[{hue:"#FFAD00"},{saturation:50.2},{lightness:-34.8},{gamma:1}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffefe5"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{color:"#ecffef"}]},{featureType:"poi",elementType:"all",stylers:[{hue:"#FFC300"},{saturation:54.2},{lightness:-14.4},{gamma:1}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5e9ae"}]},{featureType:"road.highway",elementType:"all",stylers:[{hue:"#FFAD00"},{saturation:-19.8},{lightness:-1.8},{gamma:1}]},{featureType:"road.arterial",elementType:"all",stylers:[{hue:"#FFAD00"},{saturation:72.4},{lightness:-32.6},{gamma:1}]},{featureType:"road.local",elementType:"all",stylers:[{hue:"#FFAD00"},{saturation:74.4},{lightness:-18},{gamma:1}]},{featureType:"water",elementType:"all",stylers:[{hue:"#00FFA6"},{saturation:-63.2},{lightness:38},{gamma:1}]}]},p="key=".concat("AIzaSyAFfKzJRUZbrUQgwUOPjIGcl0rvvczraKY"),h=a(16),g=a.n(h),j=function(e){var t,a=Object(i.useRef)(null),r=Object(i.useRef)(null);function s(a,i){if(a.geometry&&a.geometry.location){var r=new google.maps.Marker({map:e.map,position:a.geometry.location});google.maps.event.addListener(r,"click",(function(){var s,n,l;null===(s=t)||void 0===s||s.setContent(function(e,t){var a;return"<div>\n        <strong>\n            ".concat(t.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "),"\n        </strong>\n        <div>\n            ").concat(e.name,"\n        </div>\n        <div>\n            ").concat(e.vicinity,"\n        </div>\n        <div>\n            ").concat(e.rating," out of ").concat(e.user_ratings_total,' ratings\n        </div>\n        <div>\n            <a href="https://www.google.com/maps/place/').concat(null===(a=e.name)||void 0===a?void 0:a.split(" ").join("+"),'/">Open in Google Maps</a>\n        </div>\n    </div>')}(a,i)||""),null===(n=t)||void 0===n||n.open(e.map);var o=r.getPosition();null===(l=t)||void 0===l||l.setPosition(o)}))}}return Object(l.jsx)("div",{id:"mapUI",ref:a,className:"MapStuff-uiWrapper",children:e.map&&Object(l.jsx)(g.a,{nodeRef:r,handle:".UI-Window",bounds:"#mapUI",children:Object(l.jsx)("div",{ref:r,className:"UI-Window",children:Object(l.jsxs)("div",{className:"UI-Check-Box-Wrapper",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{id:"haunted-houses",type:"checkbox",name:"haunted-houses"}),Object(l.jsx)("label",{htmlFor:"haunted-houses",children:"Haunted Houses"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{id:"pumpkin-patches",type:"checkbox",name:"pumpkin-patches"}),Object(l.jsx)("label",{htmlFor:"pumpkin-patches",children:"Pumpkin Patches"})]}),Object(l.jsx)("button",{type:"button",onClick:function(){if(e.map){var a=new google.maps.places.PlacesService(e.map);t=new google.maps.InfoWindow({pixelOffset:new google.maps.Size(0,-25),zIndex:-1});var i=e.map.getCenter();if(!i)return;var r=document.getElementById("haunted-houses").checked,n=document.getElementById("pumpkin-patches").checked;r&&a.nearbySearch({location:i,radius:3e4,keyword:"Haunted House"},(function(t,a){if(a===google.maps.places.PlacesServiceStatus.OK&&t){for(var i,r,n,l=0;l<t.length;l++)s(t[l],"haunted-house");null===(i=e.map)||void 0===i||i.setCenter(null===(r=t[0])||void 0===r||null===(n=r.geometry)||void 0===n?void 0:n.location)}})),n&&a.nearbySearch({location:i,radius:3e4,keyword:"Pumpkin Patch"},(function(t,a){if(a===google.maps.places.PlacesServiceStatus.OK&&t){for(var i,r,n,l=0;l<t.length;l++)s(t[l],"pumpkin-patch");null===(i=e.map)||void 0===i||i.setCenter(null===(r=t[0])||void 0===r||null===(n=r.geometry)||void 0===n?void 0:n.location)}}))}},children:"Search!"})]})})})})},f=function(){var e=Object(i.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(i.useRef)(null);Object(i.useEffect)((function(){"geolocation"in navigator&&a&&navigator.geolocation.getCurrentPosition((function(e){var t=new google.maps.LatLng(e.coords.latitude,e.coords.longitude);a.setCenter(t),a.setZoom(9)}))}),[a]);var n=Object(i.useCallback)((function(){r(new window.google.maps.Map(s.current,Object(c.a)(Object(c.a)({},d),{},{restriction:u})))}),[]),o=document.createElement("script");return o.id="googleMapsScriptTag",Object(i.useEffect)((function(){var e;document.getElementById("googleMapsScriptTag")||(o.src="".concat("https://maps.googleapis.com/maps/api/js?").concat(p).concat("&libraries=places,geometry"),null===(e=document.querySelector(".App-Body"))||void 0===e||e.appendChild(o),o.addEventListener("load",n))}),[o,n,a]),Object(l.jsxs)("div",{className:"MapStuff",children:[Object(l.jsx)("div",{id:"map",ref:s,className:"MapStuff-mapWrapper"}),Object(l.jsx)(j,{map:a})]})},v={currentPage:"Home"},x=function(e,t){if("SET_CURRENT_PAGE"===t.type)return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.payload})},k=Object(i.createContext)(v),b=Object(i.createContext)((function(){})),M=function(e){var t=e.children,a=Object(i.useReducer)(x,v),r=Object(m.a)(a,2),s=r[0],n=r[1];return Object(l.jsx)(b.Provider,{value:n,children:Object(l.jsx)(k.Provider,{value:s,children:t})})},y=(a(31),["Home","Scare Me!","Let's Make A Story","Watch List","Map Stuff"]),_=function(){var e=Object(i.useContext)(b);return Object(l.jsx)("div",{className:"Navigation",children:y.map((function(t){return Object(l.jsx)("div",{className:"Navigation-Option",onClick:function(a){return function(t,a){e({type:"SET_CURRENT_PAGE",payload:a})}(0,t)},children:t},t)}))})},T=a(5),Y=a.n(T),N=a(11),w=(a(33),function(){var e=Object(N.a)(Y.a.mark((function e(t){var a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=function(e){var t=document.createElement("img"),a=document.createElement("span");a.innerHTML="Click the image to get another random spook!",t.setAttribute("src",e),t.onclick=function(){z()};var i=document.querySelector(".Scare-Me");i&&(i.innerHTML="",i.appendChild(t),i.appendChild(a))},z=function(){var e=Object(N.a)(Y.a.mark((function e(){var t,a,i,r,s,n,l,o,c,m,u,d,p,h,g,j;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("https://www.reddit.com/r/techsupportgore/random.json");case 2:h=e.sent,g=null===h||void 0===h||null===(t=h[0])||void 0===t||null===(a=t.data)||void 0===a||null===(i=a.children)||void 0===i||null===(r=i[0])||void 0===r?void 0:r.data,j=null===g||void 0===g||null===(s=g.gallery_data)||void 0===s||null===(n=s.items)||void 0===n||null===(l=n[0])||void 0===l?void 0:l.media_id,(null===h||void 0===h||null===(o=h[0])||void 0===o||null===(c=o.data)||void 0===c||null===(m=c.children)||void 0===m?void 0:m[0])&&"image"===g.post_hint?O(g.url):!(null===h||void 0===h||null===(u=h[0])||void 0===u||null===(d=u.data)||void 0===d||null===(p=d.children)||void 0===p?void 0:p[0])||g.gallery_data&&g.gallery_data.items[0].media_id?O(g.media_metadata[j].s.u.split("amp;").join("")):z();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){return Object(i.useEffect)((function(){z()}),[]),Object(l.jsx)("div",{className:"Scare-Me"})},B=a(17),L=(a(34),[["Adjective",""],["Adjective",""],["Number",""],["A Spooky Character",""],["Emotion",""],["Action Verb",""],["Noise",""],["Same Noise",""],["Action Verb, Past Tense",""],["Different Noise",""],["Adjective",""],["Adjective",""],["Verb, Past Tense",""],["Same Spooky Character",""],["Item of Furniture",""],["Same Item",""],["Candy Name",""],["Candy Name",""],["Creature",""],["Action Verb, Past Tense",""],["Sound",""],["Food Verb",""],["Meal",""]]),D=function(){var e=Object(i.useState)(L),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(i.useState)(!1),n=Object(m.a)(s,2),o=n[0],c=n[1],u=Object(i.useState)(!1),d=Object(m.a)(u,2),p=d[0],h=d[1],g=function(e){return function(t){r(a.map((function(a,i){return e===i?[a[0],t.target.value]:a})))}},j=Object(i.useCallback)((function(){var e,t,i,r,s,n,l,o,c,m,u,d,p,h,g,j,f,v,x,k,b,M,y,_=Object(B.a)(a);return"It was a ".concat("<mark>".concat(null===(e=_.shift())||void 0===e?void 0:e[1],"</mark>")," and ","<mark>".concat(null===(t=_.shift())||void 0===t?void 0:t[1],"</mark>")," Halloween night. ","<mark>".concat(null===(i=_.shift())||void 0===i?void 0:i[1],"</mark>")," children were out\n            trick-or-treating, when they came across an old house at the end of the street. The\n            rumor in the neighborhood was that ","<mark>".concat(null===(r=_.shift())||void 0===r?void 0:r[1],"</mark>")," haunted the house, and the children were ","<mark>".concat(null===(s=_.shift())||void 0===s?void 0:s[1],"</mark>"),". One very brave trick-or-treater decided to ","<mark>".concat(null===(n=_.shift())||void 0===n?void 0:n[1],"</mark>")," up to the front door and ring the doorbell. ","<mark>".concat(null===(l=_.shift())||void 0===l?void 0:l[1],"</mark>")," they heard the noise from inside the house\n            but no one answered. He rang the bell again ","<mark>".concat(null===(o=_.shift())||void 0===o?void 0:o[1],"</mark>"),". Still no answer. Then he realized the door was open.\n            He ","<mark>".concat(null===(c=_.shift())||void 0===c?void 0:c[1],"</mark>")," inside, and the door made a loud ","<mark>".concat(null===(m=_.shift())||void 0===m?void 0:m[1],"</mark>"),". The house was,\n            ","<mark>".concat(null===(u=_.shift())||void 0===u?void 0:u[1],"</mark>")," and ","<mark>".concat(null===(d=_.shift())||void 0===d?void 0:d[1],"</mark>"),", but the child continued in the house. His friends\n            ","<mark>".concat(null===(p=_.shift())||void 0===p?void 0:p[1],"</mark>")," away out of fear, but he was sure that there was no such thing as\n            ","<mark>".concat(null===(h=_.shift())||void 0===h?void 0:h[1],"</mark>"),".\n            In the living room of the house, there was a big ","<mark>".concat(null===(g=_.shift())||void 0===g?void 0:g[1],"</mark>")," On the ","<mark>".concat(null===(j=_.shift())||void 0===j?void 0:j[1],"</mark>")," sat a big bowl of candy. ","<mark>".concat(null===(f=_.shift())||void 0===f?void 0:f[1],"</mark>"),"! ","<mark>".concat(null===(v=_.shift())||void 0===v?void 0:v[1],"</mark>"),"! It was a trick-or-treater\u2019s dream come true. But \n            when he went to take a piece, he heard footsteps in the hallway. Then, he noticed a\n            shadow. It didn\u2019t look like the shadow of a human, but the shadow of a ","<mark>".concat(null===(x=_.shift())||void 0===x?void 0:x[1],"</mark>"),"! \n            He ","<mark>".concat(null===(k=_.shift())||void 0===k?void 0:k[1],"</mark>")," out of the house, tipping over the bowl, which made a loud\n            ,\n            ","<mark>".concat(null===(b=_.shift())||void 0===b?void 0:b[1],"</mark>"),"! As he turned the corner, he heard the creature yell after him: \u201cStay away,\n            little kid! I\u2019ll ","<mark>".concat(null===(M=_.shift())||void 0===M?void 0:M[1],"</mark>")," you for ","<mark>".concat(null===(y=_.shift())||void 0===y?void 0:y[1],"</mark>"),"!")}),[a]),f=window.speechSynthesis;Object(i.useEffect)((function(){if(p){var e=new SpeechSynthesisUtterance(j());e.rate=1.2,f.speak(e)}}),[j,p,f]);return Object(l.jsxs)("div",{className:"StoryTime",children:[Object(l.jsxs)("div",{className:"InputsHere",children:[Object(l.jsxs)("div",{children:["Word List: ",Object(l.jsx)("button",{type:"button",onClick:function(){a.filter((function(e){return e[1].length})).length===a.length?(c(!0),h(!0)):alert("First finish the form.")},children:"Show Story"})]}),a.map((function(e,t){return function(e,t){return Object(l.jsxs)("div",{className:"WordRow",children:[Object(l.jsxs)("span",{children:[e[0],":"]}),Object(l.jsx)("input",{type:"text",value:e[1],onChange:g(t)})]},"".concat(e[0],"-").concat(t))}(e,t)}))]}),Object(l.jsx)("div",{className:"StoryHere",children:o&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{children:["Your Story: ",Object(l.jsx)("button",{type:"button",onClick:function(){p?(f.pause(),h(!1)):h(!0)},children:p?"Stop":"Play"})]}),Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:j()}})]})})]})},Z=(a(35),a(36),function(e){var t=e.movieStats;return Object(l.jsxs)("div",{className:"movieCard",children:[Object(l.jsx)("img",{width:"175px",height:"275px",src:t.url,alt:""}),Object(l.jsxs)("div",{className:"movieContainer",children:[Object(l.jsx)("span",{className:"movieStatsTitle",children:t.title}),Object(l.jsx)("span",{className:"movieStatsYear",children:t.releaseYear})]})]})}),W=[{title:"The Nightmare Before Christmas",releaseYear:1993,url:"https://resizing.flixster.com/T6aXMvfque7L8iUUN6n3lT1EItI=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p15096_p_v10_ak.jpg"},{title:"Gremlins",releaseYear:1984,url:"https://resizing.flixster.com/A8c_oX9MSWNAZgjBzK1HVlR2AGw=/fit-in/180x240/v2/https://flxt.tmsimg.com/NowShowing/39750/39750_aa.jpg"},{title:"Ghostbusters",releaseYear:1984,url:"https://resizing.flixster.com/MlnneIx-1j3F1gjMk3QgpABMBas=/fit-in/180x240/v2/https://resizing.flixster.com/0nGXk74tgLRxURPzFaK6JrlaZwk=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzA3M2YyNDRhLTk0NDYtNDI5Yy1iOTUxLTljYzQ2NzEzN2I3YS53ZWJw"},{title:"It's The Great Pumpkin, Charlie Brown",releaseYear:1966,url:"https://resizing.flixster.com/9zBJQkhDGhdKGl0hx32k3-uvNMg=/fit-in/180x240/v2/https://resizing.flixster.com/NdvmOz-8pNQYPW0A4BLaWTfvG8U=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2VjZWRhNDMwLTY5YmEtNGM2OC04ZmUzLTdiZGE1ZTRhNDUyNS5qcGc="},{title:"Beetlejuice",releaseYear:1988,url:"https://resizing.flixster.com/x3ANUGvCArDnBUz7tU76nzFQRpU=/fit-in/180x240/v2/https://flxt.tmsimg.com/NowShowing/1673/1673_ab.jpg"},{title:"Coco",releaseYear:2017,url:"https://resizing.flixster.com/Gmkhr84UQuRdqma8bePxaLsBJzE=/fit-in/180x240/v2/https://flxt.tmsimg.com/NowShowing/172117/172117_ac.jpg"},{title:"Wallace & Gromit: The Curse of the Were-Rabbit",releaseYear:2005,url:"https://m.media-amazon.com/images/I/81hdyqyxbFL._SL1500_.jpg"},{title:"Harry Potter",releaseYear:2001,url:"https://resizing.flixster.com/SFRFhon-ssCQkKyHenizYuQAmXY=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p28630_p_v8_at.jpg"},{title:"Monsters Inc",releaseYear:2001,url:"https://resizing.flixster.com/-a4pOhlAKzp0SmAMVFv_dW3r0So=/fit-in/180x240/v2/https://resizing.flixster.com/YL2uY_OxeLWt2fgb9Pt740dkkLM=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzVmMjE2ODVkLTU3MGMtNGQxYS1hYTJjLWRmMTMyMDIyOTVlZi53ZWJw"},{title:"Scooby-Doo on Zombie Island",releaseYear:1998,url:"https://resizing.flixster.com/gDq3Y56N-sDXzsMv_i9RiZorTu4=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p21515_p_v10_ab.jpg"},{title:"Tim Burton's Corpse Bride",releaseYear:2005,url:"https://resizing.flixster.com/N1WObv-1Bqbk-usNtOHdO_FMNGY=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p36328_p_v10_aj.jpg"},{title:"Caroline",releaseYear:2009,url:"https://resizing.flixster.com/AfKP4ayHn1DWhJJy_QJ9qrhQpB0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p177367_p_v10_ae.jpg"},{title:"E.T. The Extra-Terrestrial",releaseYear:1982,url:"https://resizing.flixster.com/oTvqJMdTlwToTOk9Ix6YoIgSIPM=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p10998_p_v8_ao.jpg"},{title:"Paranorman",releaseYear:2012,url:"https://resizing.flixster.com/ABK0HT0Kt_T5UDjSwG0IDD_TTLk=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p9047424_p_v10_ay.jpg"},{title:"Halloweentown",releaseYear:1998,url:"https://resizing.flixster.com/VDvKQc9nsaUfd-R-QLn_RbZdl24=/fit-in/180x240/v2/https://resizing.flixster.com/Bt126St39SEYNjzff_lUJcUP-7c=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2M5ZWU1NmZkLWYwZGEtNDgwZC1iMTYwLTc0ZDgwYzY4NGQ0ZS53ZWJw"},{title:"Hotel Transylvania",releaseYear:2012,url:"https://resizing.flixster.com/AUUIT-PnP9MSe0HpgF_oebZDnVc=/fit-in/180x240/v2/https://flxt.tmsimg.com/NowShowing/116013/116013_ad.jpg"},{title:"Hocus Pocus",releaseYear:1993,url:"https://resizing.flixster.com/XlEHHdF5srHlRi_F49In4-9hWHo=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p14911_p_v10_ac.jpg"},{title:"Return of Oz",releaseYear:1985,url:"https://resizing.flixster.com/gTN3hnXL_7h1lDsC6wOOR3ujSNM=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p8719_p_v10_aa.jpg"},{title:"The Adventures of Ichabod and Mr Toad",releaseYear:1949,url:"https://resizing.flixster.com/L1MRYMNc8iNm8sBoz6PGxO0GF6o=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p6335_p_v13_ac.jpg"},{title:"Frankenweenie",releaseYear:2012,url:"https://resizing.flixster.com/nM07NMTU3vpReFkRTZn2QOBtWfI=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p9125996_p_v10_aa.jpg"},{title:"The Addams Family",releaseYear:2019,url:"https://resizing.flixster.com/aexbMQTfZxlZOspdUXweceWPf4s=/fit-in/180x240/v2/https://resizing.flixster.com/UeLgzm9fTSPyOxvNF5h8DhGZdJw=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzJmNTcyYWM3LWEzOGUtNGYxMi04YmY1LWQ1YjExMmRmYzVmMS53ZWJw"},{title:"Monster House",releaseYear:2006,url:"https://resizing.flixster.com/ufSB17K4-lzOwAvRrId4SpV9xCc=/fit-in/180x240/v2/https://flxt.tmsimg.com/NowShowing/44090/44090_aa.jpg"},{title:"Goosebumps",releaseYear:2015,url:"https://resizing.flixster.com/MlnneIx-1j3F1gjMk3QgpABMBas=/fit-in/180x240/v2/https://resizing.flixster.com/0nGXk74tgLRxURPzFaK6JrlaZwk=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzA3M2YyNDRhLTk0NDYtNDI5Yy1iOTUxLTljYzQ2NzEzhttps://resizing.flixster.com/c3pHK_g9NmxRDYa3cLxg-AVyYqk=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p11819892_p_v10_ac.jpg"},{title:"Casper",releaseYear:1995,url:"https://resizing.flixster.com/JH21Q8usvZQvVaRHD7QxKQ2q9WQ=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p16786_p_v13_bc.jpg"},{title:"The Haunted Mansion",releaseYear:2003,url:"https://scdn.nflximg.net/images/8432/3898432.jpg"},{title:"Double, Double, Toil and Trouble",releaseYear:1993,url:"https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Double%2C_Double%2C_Toil_and_Trouble.jpg/250px-Double%2C_Double%2C_Toil_and_Trouble.jpg"}],F=[{title:"The Conjuring",releaseYear:2013,url:"https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg"},{title:"The Cabin in the Woods",releaseYear:2012,url:"https://m.media-amazon.com/images/M/MV5BNTUxNzYyMjg2N15BMl5BanBnXkFtZTcwMTExNzExNw@@._V1_.jpg"},{title:"The Invisible Man",releaseYear:1982,url:"https://upload.wikimedia.org/wikipedia/en/3/3a/The_Invisible_Man_%282020_film%29_-_release_poster.jpg"},{title:"The Amityville Horror",releaseYear:1979,url:"https://m.media-amazon.com/images/M/MV5BMzc1Njc2NDc3NV5BMl5BanBnXkFtZTYwODYyNzI3._V1_FMjpg_UX1000_.jpg"},{title:"The Omen",releaseYear:1976,url:"https://m.media-amazon.com/images/M/MV5BZmNjZDcwNTMtMjQxMy00ZTY5LTg4M2YtYjA5NDliNjNhYzQ3XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"},{title:"Friday the 13th",releaseYear:1980,url:"https://images-na.ssl-images-amazon.com/images/I/81S-S8ivx2L._RI_.jpg"},{title:"The Shining",releaseYear:1980,url:"https://flxt.tmsimg.com/assets/p40_p_v10_ap.jpg"},{title:"Halloween",releaseYear:1978,url:"https://upload.wikimedia.org/wikipedia/en/a/af/Halloween_%281978%29_theatrical_poster.jpg"},{title:"Get Out",releaseYear:2017,url:"https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg"},{title:"Edward Scissorhands",releaseYear:1990,url:"https://m.media-amazon.com/images/I/A1hx78Yei8L._SY679_.jpg"},{title:"The Exorcist",releaseYear:1973,url:"https://thecabot.org/wp-content/uploads/2021/09/81hQdlnKWL._RI_.jpg"},{title:"Rocky Horror Picture Show",releaseYear:1975,url:"https://m.media-amazon.com/images/M/MV5BOGIzYjM3YzMtMjk5ZS00NDY2LTllMjEtNjYwZjhmMDNhMDBkXkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_.jpg"},{title:"The Blair Witch Project",releaseYear:1999,url:"https://images-na.ssl-images-amazon.com/images/I/81ooNceHq7L._RI_.jpg"},{title:"The Craft",releaseYear:1993,url:"https://i.ytimg.com/vi/EAJrsGuqwBg/movieposter_en.jpg"},{title:"Paranormal Activity",releaseYear:1993,url:"https://images-na.ssl-images-amazon.com/images/I/71f-n4kbJsL._RI_.jpg"},{title:"Practical Magic",releaseYear:1998,url:"https://m.media-amazon.com/images/M/MV5BMzU4MmNkNGYtN2I1Zi00ZDEzLTlmZjItNWQ5NWI0NzcwZDQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"},{title:"The Witches of Eastwick",releaseYear:1987,url:"https://m.media-amazon.com/images/M/MV5BZjY0ZGFkMDMtZWRlOC00ZmY1LWFiODEtNmM3OTA3MmQwYzY1XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg"},{title:"Death Becomes Her",releaseYear:1992,url:"https://m.media-amazon.com/images/I/71ElrksGExL._SY445_.jpg"},{title:"Sleepy Hollow",releaseYear:1999,url:"https://upload.wikimedia.org/wikipedia/en/0/09/Sleepy_hollow_ver2.jpg"},{title:"Bram Stoker's Dracula",releaseYear:1992,url:"https://dyn1.heritagestatic.com/lf?set=path%5B2%2F1%2F3%2F2%2F3%2F21323478%5D&call=url%5Bfile%3Aproduct.chain%5D"},{title:"The Silence of the Lambs",releaseYear:1991,url:"https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"},{title:"Psycho",releaseYear:1960,url:"https://cdn.shopify.com/s/files/1/0747/3829/products/HP2480_09ac6e62-51a2-4640-a1ca-41cacd3b4059_1024x1024.jpg?v=1571444853"},{title:"Trick'r Treat",releaseYear:2007,url:"https://m.media-amazon.com/images/I/A1Fk0jn2EXL._SY445_.jpg"},{title:"Scream",releaseYear:1996,url:"https://flxt.tmsimg.com/assets/p18852_p_v8_aa.jpg"},{title:"It",releaseYear:1990,url:"https://m.media-amazon.com/images/M/MV5BYjg1YTRkNzQtODgyYi00MTQ5LThiMDYtNDJjMWRjNTdjZDZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"},{title:"A Quiet Place",releaseYear:2018,url:"https://m.media-amazon.com/images/I/A1zV1fxtMEL._SL1500_.jpg"},{title:"Carrie",releaseYear:1976,url:"https://m.media-amazon.com/images/M/MV5BMTlhNmVkZGUtNjdjOC00YWY3LTljZWQtMTY1YWFhNGYwNDQwXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"},{title:"The Haunting",releaseYear:1963,url:"https://m.media-amazon.com/images/M/MV5BMzBhMThiM2YtMWQ1OS00NmMyLWI4NGMtMjE3YzBmMTBiODJhL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"},{title:"Young Frankenstein",releaseYear:1974,url:"https://upload.wikimedia.org/wikipedia/en/b/b5/Young_Frankenstein_movie_poster.jpg"},{title:"A Nightmare on Elm Street",releaseYear:1984,url:"https://c8.alamy.com/comp/PY7RGT/original-film-title-a-nightmare-on-elm-street-english-title-a-nightmare-on-elm-street-year-1984-director-wes-craven-credit-new-line-cinema-album-PY7RGT.jpg"},{title:"The Sixth Sense",releaseYear:1999,url:"https://upload.wikimedia.org/wikipedia/en/a/a4/The_Sixth_Sense_poster.png"},{title:"Us",releaseYear:2019,url:"https://upload.wikimedia.org/wikipedia/en/0/00/Us_%282019%29_theatrical_poster.png"},{title:"Poltergeist",releaseYear:1982,url:"https://www.snopes.com/uploads/2015/05/poltergeist-865x452.jpg"},{title:"Candyman",releaseYear:1992,url:"https://m.media-amazon.com/images/M/MV5BYjVjYjhlNTQtN2UxOC00Njk5LWFjNDctODNjZTI1ZGM0ZDZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"},{title:"The Bride of Frankenstein",releaseYear:1935,url:"https://upload.wikimedia.org/wikipedia/commons/5/58/The_Bride_of_Frankenstein_%281935_poster%29.jpg"},{title:"Clue",releaseYear:1985,url:"https://flxt.tmsimg.com/assets/p8906_p_v13_ac.jpg"},{title:"Shutter Island",releaseYear:2010,url:"https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"},{title:"Saw",releaseYear:2004,url:"https://m.media-amazon.com/images/I/712UayrBc0L._SY445_.jpg"},{title:"The Ring",releaseYear:2002,url:"https://m.media-amazon.com/images/M/MV5BYTQzZjhiYjYtNDMzOS00ZjNiLTg2MGMtYWZmYWNjN2U5YTVmXkEyXkFqcGdeQXVyNjI3OTcxOTU@._V1_.jpg"}],I=function(){return Object(l.jsxs)("div",{className:"Watch-List",children:[Object(l.jsxs)("div",{className:"Kids",children:[Object(l.jsx)("span",{children:"Kids Halloween Movies"}),W.map((function(e){return Object(l.jsx)(Z,{movieStats:e})}))]}),Object(l.jsxs)("div",{className:"Scary",children:[Object(l.jsx)("span",{children:"Scary Movie List"}),F.map((function(e){return Object(l.jsx)(Z,{movieStats:e})}))]})]})};function V(){var e,t=(e="currentPage",Object(i.useContext)(k)[e]),a=function(){switch(t){case"Home":return Object(l.jsx)(o,{});case"Scare Me!":return Object(l.jsx)(S,{});case"Let's Make A Story":return Object(l.jsx)(D,{});case"Watch List":return Object(l.jsx)(I,{});case"Map Stuff":return Object(l.jsx)(f,{});default:return null}};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"App-Title",children:"Happy Halloween!"}),Object(l.jsx)("div",{className:"App-Navigation",children:Object(l.jsx)(_,{})}),Object(l.jsx)("div",{className:"App-Body",children:Object(l.jsx)(a,{})})]})}var C=function(){return Object(l.jsx)(M,{children:Object(l.jsx)(V,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.4203066c.chunk.js.map