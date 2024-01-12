(function(t){function e(e){for(var i,o,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},r={app:0},n=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0b03":function(t,e,a){"use strict";var i=a("11be"),r=a.n(i);r.a},"11be":function(t,e,a){},3185:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{class:{sm:t.$vuetify.breakpoint.smAndDown,md:t.$vuetify.breakpoint.md}},[a("Header"),a("AboutSection"),a("ExperienceSection"),a("ProjectsSection"),a("ContactSection",{directives:[{name:"infocus",rawName:"v-infocus",value:"showElement",expression:"'showElement'"}],staticClass:"hidden hidden-right"}),a("v-footer",{staticClass:"mt-10",attrs:{elevation:"5",height:"60",width:"100%",color:"var(--lightBgColor)"}},[a("div",{staticClass:"footerText"},[t._v("Powered by Coffee "),a("v-icon",{attrs:{color:"var(--primaryColor)"}},[t._v("mdi-coffee")])],1),a("v-spacer"),a("div",{staticClass:"footerText"},[t._v("© "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Alba López Folgar")])])],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app-bar",{attrs:{color:"var(--bgColor)",fixed:""}},[i("v-app-bar-nav-icon",{staticClass:"d-md-none",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",[i("a",{attrs:{href:"#top"}},[i("v-img",{staticStyle:{"border-radius":"100%"},attrs:{src:a("cf05"),contain:"",height:"55",width:"55"}})],1)]),i("v-spacer"),i("transition",{attrs:{name:"about",appear:""}},[i("v-btn",{staticClass:"d-none d-md-flex",attrs:{text:"",href:"#about"}},[t._v("About")])],1),i("transition",{attrs:{name:"experience",appear:""}},[i("v-btn",{staticClass:"d-none d-md-flex",attrs:{text:"",href:"#experience"}},[t._v("Experience")])],1),i("transition",{attrs:{name:"projects",appear:""}},[i("v-btn",{staticClass:"d-none d-md-flex",attrs:{text:"",href:"#projects"}},[t._v("Projects")])],1),i("transition",{attrs:{name:"contact",appear:""}},[i("v-btn",{staticClass:"d-none d-md-flex",attrs:{text:"",href:"#contact"}},[t._v("Contact")])],1)],1),i("v-navigation-drawer",{attrs:{absolute:"",temporary:"",color:"var(--bgColor)"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{attrs:{nav:"",dense:""}},[i("v-list-item-group",[i("v-list-item",{attrs:{href:"#about"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[i("v-list-item-title",[t._v("About")])],1),i("v-list-item",{attrs:{href:"#experience"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[i("v-list-item-title",[t._v("Experience")])],1),i("v-list-item",{attrs:{href:"#projects"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[i("v-list-item-title",[t._v("Projects")])],1),i("v-list-item",{attrs:{href:"#contact"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[i("v-list-item-title",[t._v("Get in touch")])],1)],1)],1)],1)],1)},s=[],c={name:"Header",props:{},data:function(){return{drawer:!1}}},l=c,u=(a("e8ea"),a("2877")),p=a("6544"),d=a.n(p),m=a("40dc"),v=a("5bc1"),h=a("8336"),f=a("adda"),b=a("8860"),g=a("da13"),C=a("1baa"),y=a("5d23"),w=a("f774"),_=a("2fa4"),x=a("2a7f"),S=Object(u["a"])(l,o,s,!1,null,"74c93a00",null),k=S.exports;d()(S,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VBtn:h["a"],VImg:f["a"],VList:b["a"],VListItem:g["a"],VListItemGroup:C["a"],VListItemTitle:y["a"],VNavigationDrawer:w["a"],VSpacer:_["a"],VToolbarTitle:x["a"]});var V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{attrs:{id:"about"}},[i("v-col",{staticStyle:{padding:"0"},attrs:{cols:"12"}},[i("transition",{attrs:{name:"welcome",appear:""}},[i("p",{staticClass:"welcomeMsg"},[t._v("Hi, my name is")])]),i("transition",{attrs:{name:"title",appear:""}},[i("h2",{staticClass:"mainText"},[t._v("Alba López Folgar.")])]),i("v-row",{staticClass:"flex-wrap-reverse"},[i("v-col",{staticStyle:{margin:"auto"},attrs:{cols:"12",sm:"6"}},[i("transition",{attrs:{name:"presentation",appear:""}},[i("p",{staticClass:"presentation"},[t._v("I am a Front-End developer.")])]),i("transition",{attrs:{name:"presentation",appear:""}},[t.$vuetify.breakpoint.xs?i("v-img",{staticClass:"my-3 profileImage",attrs:{src:a("c3e7"),contain:"",height:260}}):t._e()],1),i("transition",{attrs:{name:"description",appear:""}},[i("p",{staticClass:"description"},[i("br"),t._v("I've never stopped engaging my passion to help others and solve problems, before as sociologist and now as web developer. "),i("br"),t._v("I am passionate about building user‑friendly experiences, paying attention to detail. I enjoy turning complex problems into simple, keeping learning and continue challenging myself. "),i("br"),t._v("When I'm not coding, you'll find me traveling, making some ceramic pieces or watercolor drawings, or spending time with some tv series while eating sushi. ")])]),i("transition-group",{attrs:{name:"description",tag:"a",appear:""}},t._l(t.contact,(function(e,a){return i("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[i("v-icon",{attrs:{color:"var(--primaryColor)"}},[t._v(t._s(e.icon))])],1)})),0)],1),i("transition",{attrs:{name:"description",appear:""}},[t.$vuetify.breakpoint.xs?t._e():i("v-col",{staticClass:"imageContainer",attrs:{cols:"12",sm:"6"}},[i("v-img",{staticClass:"my-3 profileImage",attrs:{src:a("c3e7"),contain:"",height:320,width:"350"}})],1)],1)],1),i("v-row",[i("transition",{attrs:{name:"skills",appear:""}},[i("v-card",{staticClass:"skillsContainer"},[i("v-col",{staticClass:"skills",attrs:{cols:"12"}},t._l(t.skills,(function(e){return i("v-chip",{key:e.name,staticClass:"ma-2",attrs:{color:"var(--lightBgColor)","text-color":"var(--primaryColor)"}},[i("v-avatar",{attrs:{left:""}},[i("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "+t._s(e.name)+" ")],1)})),1),i("v-col",{staticClass:"mb-10",attrs:{cols:"6"}},t._l(t.languages,(function(e){return i("v-chip",{key:e.name,staticClass:"ma-2",attrs:{color:"var(--lightBgColor)","text-color":"var(--primaryColor)"}},[i("v-avatar",{attrs:{left:""}},[i("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "+t._s(e.name)+" ")],1)})),1)],1)],1)],1)],1)],1)],1)},j=[],T={name:"AboutSection",data:function(){return{skills:[{name:"HTML5",icon:"mdi-language-html5"},{name:"CSS3",icon:"mdi-language-css3"},{name:"SASS",icon:"mdi-sass"},{name:"JavaScript (ES6+)",icon:"mdi-language-javascript"},{name:"React",icon:"mdi-react"},{name:"Vue",icon:"mdi-vuejs"},{name:"Angular2+",icon:"mdi-angular"},{name:"TypeScript",icon:"mdi-language-typescript"},{name:"Bootstrap",icon:"mdi-bootstrap"},{name:"Vuetify",icon:"mdi-vuetify"}],languages:[{name:"Spanish",icon:"mdi-circle-slice-8"},{name:"Galician",icon:"mdi-circle-slice-8"},{name:"English",icon:"mdi-circle-slice-6"}],contact:[{text:"Email",href:"mailto:albalopezfolgar@gmail.com",icon:"mdi-email"},{text:"Linkedin",href:"https://www.linkedin.com/in/albalopezfolgar",icon:"mdi-linkedin"},{text:"Github",href:"https://github.com/albahniuk",icon:"mdi-github"},{text:"Twitter",href:"https://twitter.com/albahniuk",icon:"mdi-twitter"}]}}},A=T,P=(a("b4c7"),a("8212")),E=a("b0af"),I=a("cc20"),M=a("62ad"),L=a("a523"),R=a("132d"),B=a("0fd9"),O=Object(u["a"])(A,V,j,!1,null,"7c900900",null),D=O.exports;d()(O,{VAvatar:P["a"],VCard:E["a"],VChip:I["a"],VCol:M["a"],VContainer:L["a"],VIcon:R["a"],VImg:f["a"],VRow:B["a"]});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mb-10",attrs:{id:"projects"}},[a("v-col",{attrs:{cols:"12"}},[a("h2",{staticClass:"mb-10 sectionTitle"},[t._v("Projects")]),a("div",{staticClass:"projects"},t._l(t.projects,(function(e,i){return a("v-card",{key:i,staticClass:"project ma-2",attrs:{color:"var(--lightBgColor)"}},[a("div",{staticClass:"preCard"},[a("v-icon",{staticClass:"folderIcon",attrs:{color:"var(--primaryColor)"}},[t._v("mdi-folder")]),a("v-card-actions",[a("v-btn",{staticClass:"showBtn",attrs:{text:"",href:e.hrefCode,target:"_blank",color:"var(--primaryColor)",icon:""}},[a("v-icon",{attrs:{left:"",color:"var(--primaryColor)"}},[t._v("mdi-github")])],1),a("v-btn",{staticClass:"showBtn",attrs:{text:"",href:e.hrefProject,target:"_blank",color:"var(--primaryColor)",icon:""}},[a("v-icon",{attrs:{left:"",color:"var(--primaryColor)"}},[t._v("mdi-open-in-new")])],1)],1)],1),a("v-card-title",{staticClass:"headline mb-5"},[t._v(" "+t._s(e.title)+" ")]),a("v-card-subtitle",[t._v(t._s(e.subtitle))])],1)})),1)])],1)],1)},$=[],F={name:"ProjectsSection",data:function(){return{projects:[{title:"Mastermind",subtitle:"The mastermind game made with React.",hrefCode:"https://github.com/albahniuk/mastermind",hrefProject:"https://albahniuk.github.io/mastermind/"},{title:"Awesome profile-cards",subtitle:"Interactive web application made with React that allows you to create a personalized business card.",hrefCode:"https://github.com/albahniuk/easley-s3-codekatchers",hrefProject:"https://albahniuk.github.io/easley-s3-codekatchers/#/"},{title:"Gext",subtitle:"Platform made with React that allows you to create documents from templates, automatically changing the text or image fields to customize it to your needs.",hrefCode:"https://github.com/albahniuk/easley-s4-gext",hrefProject:"https://gext.es/#/"},{title:"Code crushers",subtitle:"Collaborative web presentation of a team using HTML5, CSS3, Sass, responsive design",hrefCode:"https://github.com/albahniuk/e-s1-codecrushers",hrefProject:"https://albahniuk.github.io/e-s1-codecrushers/"},{title:"Harry potter characters searcher",subtitle:"SWA made with React",hrefCode:"https://github.com/albahniuk/e-s3-evaluacion-final-albahniuk",hrefProject:"https://albahniuk.github.io/e-s3-evaluacion-final-albahniuk/#/"},{title:"Pokédex",subtitle:"SWA made with React",hrefCode:"https://github.com/albahniuk/f-online-pokemon-albahniuk",hrefProject:"https://albahniuk.github.io/f-online-pokemon-albahniuk/"},{title:"TV series searcher",subtitle:"SWA made with JavaScript",hrefCode:"https://github.com/albahniuk/e-s2-evaluacion-final-albahniuk",hrefProject:"https://albahniuk.github.io/e-s2-evaluacion-final-albahniuk/"}]}}},z=F,J=(a("b8cf"),a("99d9")),N=Object(u["a"])(z,H,$,!1,null,"7ce5a11f",null),G=N.exports;d()(N,{VBtn:h["a"],VCard:E["a"],VCardActions:J["a"],VCardSubtitle:J["b"],VCardTitle:J["d"],VCol:M["a"],VContainer:L["a"],VIcon:R["a"],VRow:B["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mb-10",attrs:{id:"experience"}},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("h2",{staticClass:"mb-10 sectionTitle"},[t._v("Experience")]),a("v-tabs",{attrs:{vertical:!t.$vuetify.breakpoint.xs,"show-arrows":""},model:{value:t.experienceTab,callback:function(e){t.experienceTab=e},expression:"experienceTab"}},[t._l(t.experience,(function(e,i){return a("v-tab",{key:i},[t._v(" "+t._s(e.title)+" ")])})),a("v-tabs-items",{model:{value:t.experienceTab,callback:function(e){t.experienceTab=e},expression:"experienceTab"}},t._l(t.experience,(function(e,i){return a("v-tab-item",{key:i},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("p",{staticClass:"tabText"},[t._v(t._s(e.text)+" "),e.place?a("span",[t._v("@"+t._s(e.place))]):t._e()]),a("p",{staticClass:"tabYear"},[t._v(t._s(e.year))]),e.description&&Array.isArray(e.description)?t._l(e.description,(function(e,i){return a("p",{key:i,staticClass:"tabDescription"},[a("v-icon",{attrs:{left:""}},[t._v("mdi-chevron-right")]),t._v(" "+t._s(e)+" ")],1)})):t._e(),e.description&&!Array.isArray(e.description)?a("p",{staticClass:"tabDescription"},[a("v-icon",{attrs:{left:""}},[t._v("mdi-chevron-right")]),t._v(" "+t._s(e.description)+" ")],1):t._e(),t._l(e.tech,(function(e){return a("v-chip",{key:e,staticClass:"ma-2",attrs:{color:"var(--lightBgColor)","text-color":"var(--primaryColor)"}},[t._v(" "+t._s(e)+" ")])}))],2)],1)],1)})),1)],2)],1)],1)],1)],1)],1)},q=[],U={name:"ExperienceSection",data:function(){return{experienceTab:0,experience:[{year:"Mar 2022 - Present",title:"Secuoyas",text:"Software engineer",description:["Development and maintaning web apps using React, HLML5, CSS3 for clients as IE university","Development of unit tests with Jest and React testing library","Documentation with Storybook","Improvement of Core Web Vitals"],place:"Secuoyas",tech:["React","Typescript","Storybook","Jest","Styled components","HTML5","CSS3"]},{year:"Sep 2020 - Mar 2022",title:"Bosonit",text:"Front-End developer",description:["Development and maintaning of financial solutions web apps with Vue, HLML5, CSS3, Vuetify and SCRUM methodology.","Development of e2e tests with Cypress","Development of unit tests with Jest","Documentation with Storybook"],place:"Bosonit",tech:["Vue","Storybook","Jest","Cypress","Vuetify","HTML5","CSS3"]},{year:"Mar 2019 - Sep 2020",title:"NFQ",text:"Front-End developer",description:["Development and maintaning of financial solutions web apps with Angular2+, Angular material, HLML5, CSS3, Vue, Vuetify, SCRUM methodology","Development of e2e tests with Protractor, Selenium and Cypress","Documentation with Styleguidist"],place:"NFQ",tech:["Angular2+","Vue","Styleguidist","Cypress","Vuetify","HTML5","CSS3"]},{year:"2017",title:"Freelance",text:"Sociologist",description:"Collaboration in social researches directed by Tomás Calvo Buezas, Emeritus Professor of Social Anthropology at the Faculty of Political Sciences and Sociology of the UCM and founder of the Center for Studies on Migration and Racism."},{year:"2015 - 2017",title:"Red Acoge",text:"Internship and volunteering as sociologist",description:["Collaboration in research and reports carried out in the Social Intervention Area.","Treatment of statistical data, data analysis, field work (in-depth interviews), development of theoretical framework..."],place:"Red Acoge"},{year:"2016",title:"Activa Idiomas",text:"English teacher",place:"Activa Idiomas",description:"Teacher of after-school English classes in early childhood education"}]}}},Q=U,Y=(a("0b03"),a("71a3")),K=a("c671"),X=a("fe57"),Z=a("aac8"),tt=Object(u["a"])(Q,W,q,!1,null,"5de2f1d2",null),et=tt.exports;d()(tt,{VCard:E["a"],VCardText:J["c"],VChip:I["a"],VCol:M["a"],VContainer:L["a"],VIcon:R["a"],VRow:B["a"],VTab:Y["a"],VTabItem:K["a"],VTabs:X["a"],VTabsItems:Z["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{id:"contact"}},[a("v-card",{staticClass:"mb-10 card-container",attrs:{shaped:""}},[a("h2",{staticClass:"sectionTitle mb-5"},[t._v("Get in touch")]),a("p",{staticClass:"contactText"},[t._v(" My inbox is open if you wanna get in touch, talk to me about a project collaboration or just say hi. ")]),a("a",{staticClass:"subheading mx-3",attrs:{href:"mailto:albalopezfolgar@gmail.com",target:"_blank"}},[a("v-btn",{staticClass:"sendBtn",attrs:{color:"var(--primaryColor)",rounded:""}},[t._v(" Say hello ")])],1)])],1)],1)},it=[],rt={name:"ContactSection",data:function(){return{valid:!0,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=20||"Name must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],message:"",messageRules:[function(t){return!!t||"Message is required"}]}},methods:{sendMessage:function(){this.$refs.form.validate()}}},nt=rt,ot=(a("e7ce"),Object(u["a"])(nt,at,it,!1,null,"64d146e1",null)),st=ot.exports;d()(ot,{VBtn:h["a"],VCard:E["a"],VContainer:L["a"],VRow:B["a"]});var ct={name:"App",components:{Header:k,AboutSection:D,ProjectsSection:G,ExperienceSection:et,ContactSection:st},directives:{infocus:{isLiteral:!0,inserted:function(t,e){var a=function a(){var i=t.getBoundingClientRect(),r=i.width>0&&i.height>0&&i.top>=0&&i.bottom<=(window.innerHeight||document.documentElement.clientHeight);r&&(t.classList.add(e.value),window.removeEventListener("scroll",a))};window.addEventListener("scroll",a),a()}}}},lt=ct,ut=(a("5c0b"),a("7496")),pt=a("553a"),dt=Object(u["a"])(lt,r,n,!1,null,null,null),mt=dt.exports;d()(dt,{VApp:ut["a"],VFooter:pt["a"],VIcon:R["a"],VSpacer:_["a"]});var vt=a("f309");i["a"].use(vt["a"]);var ht=new vt["a"]({theme:{themes:{light:{primary:"#e9c46a",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}});i["a"].config.productionTip=!1,new i["a"]({vuetify:ht,render:function(t){return t(mt)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("7694"),r=a.n(i);r.a},"5cfb":function(t,e,a){},7221:function(t,e,a){},7694:function(t,e,a){},b4c7:function(t,e,a){"use strict";var i=a("c3ad"),r=a.n(i);r.a},b8cf:function(t,e,a){"use strict";var i=a("5cfb"),r=a.n(i);r.a},c3ad:function(t,e,a){},c3e7:function(t,e,a){t.exports=a.p+"img/profile.0cb78890.png"},cf05:function(t,e,a){t.exports=a.p+"img/logo.774e5e8e.png"},e7ce:function(t,e,a){"use strict";var i=a("3185"),r=a.n(i);r.a},e8ea:function(t,e,a){"use strict";var i=a("7221"),r=a.n(i);r.a}});
//# sourceMappingURL=app.c6dddaa1.js.map