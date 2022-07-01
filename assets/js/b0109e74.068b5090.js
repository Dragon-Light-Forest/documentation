"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[178],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(l,".").concat(d)]||u[d]||y[d]||i;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6913:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={title:"Wymagania techniczne"},o=void 0,c={unversionedId:"project-analysis/technical-requirements",id:"project-analysis/technical-requirements",title:"Wymagania techniczne",description:"Co znajduje si\u0119 w tej sekcji?",source:"@site/docs/project-analysis/04-technical-requirements.md",sourceDirName:"project-analysis",slug:"/project-analysis/technical-requirements",permalink:"/documentation/docs/project-analysis/technical-requirements",draft:!1,editUrl:"https://github.com/Dragon-Light-Forest/Documentation/tree/develop/docs/project-analysis/04-technical-requirements.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Wymagania techniczne"},sidebar:"tutorialSidebar",previous:{title:"Architektura i zakres projektu",permalink:"/documentation/docs/project-analysis/architecture-scope-project"},next:{title:"Wymagania dot. ruchu",permalink:"/documentation/docs/project-analysis/traffic-requirements"}},l={},s=[],p={toc:s};function y(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Co znajduje si\u0119 w tej sekcji?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Struktura adres\xf3w URL (okre\u015blenie jakie maj\u0105 by\u0107 poszczeg\xf3lne linki przy r\xf3\u017cnych funkcjonalno\u015bciach).\nPrzekierowania (czy trzeba robi\u0107 przekierowania istniej\u0105cych adres\xf3w URL).\nOkre\u015blenie kluczowych breakpoint\xf3w (na jakich rozmiarach ekran\xf3w aplikacja ma by\u0107 sprawdzona oraz stworzenie tabelarycznej listy rozmiar\xf3w ekran\xf3w wraz z referencj\u0105 do urz\u0105dzenia).\nWymagania dot. responsive design (RWD, Grid).\nWsparcie przegl\u0105darek (lista przegl\u0105darek dla kt\xf3rych strona ma wy\u015bwietla\u0107 si\u0119 poprawnie).\nOpis modu\u0142u CMS i lista funkcjonalno\u015bci.\n")),(0,r.kt)("p",null,"Wymagania techniczne by\u0107 mo\u017ce nie s\u0105 naj\u0142atwiejsz\u0105 decyzj\u0105 (i lektur\u0105) dla Klienta, ale z perspektywy samej platformy/aplikacji jest to cz\u0119\u015b\u0107 bardzo wa\u017cna. To w\u0142a\u015bnie tu znajd\u0105 si\u0119 wytyczne odno\u015bnie poprawnej budowy adres\xf3w URL wewn\u0105trz platformy/aplikacji, zostan\u0105 doprecyzowane breakpointy (czyli inaczej: rozmiary ekran\xf3w, na jakich platforma/aplikacja ma by\u0107 przetestowana przez wykonawc\u0119), wspierane przegl\u0105darki oraz inne wymagania odno\u015bnie responsywno\u015bci i inkluzywno\u015bci (np. wersja kontrastowa dla niedowidz\u0105cych). Te elementy cz\u0119sto wp\u0142ywaj\u0105 nie tylko na finalny dob\xf3r narz\u0119dzi, ale tak\u017ce na wyb\xf3r j\u0119zyka ca\u0142ej aplikacji/platformy! O wiele rozs\u0105dniejsze, szybsze i ta\u0144sze jest ustalenie tych szczeg\xf3\u0142\xf3w na pocz\u0105tku pracy projektowej, ni\u017c wprowadzanie zmian i \u0142atanie kiepskich wybor\xf3w podczas lub nawet na koniec developmentu."),(0,r.kt)("p",null,"Dodatkowo, w tej sekcji powinien znale\u017a\u0107 si\u0119 tak\u017ce opis modu\u0142u CMS (Content Management System \u2013 czyli inaczej: system zarz\u0105dzania tre\u015bci\u0105) oraz lista jego funkcjonalno\u015bci; przyk\u0142adowo: kt\xf3re elementy gotowej platformy/aplikacji powinny by\u0107 zawsze edytowalne z poziomu CMS, a kt\xf3re mog\u0105 by\u0107 \u201czakodowane na twardo\u201d (tj. b\u0119d\u0105 wymaga\u0142y bezpo\u015brednich zmian w kodzie)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Przyk\u0142ad funkcjonalno\u015bci CMS dla aplikacji/platformy",src:t(5738).Z,width:"1024",height:"749"})))}y.isMDXComponent=!0},5738:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/11_tabela-1024x749-0d165d987504584ad0c51826de53b2a0.png"}}]);