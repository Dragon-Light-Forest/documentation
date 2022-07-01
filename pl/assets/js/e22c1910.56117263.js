"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),y=l(n),d=a,m=y["".concat(s,".").concat(d)]||y[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"Wymagania dot. ruchu"},o=void 0,c={unversionedId:"project-analysis/traffic-requirements",id:"project-analysis/traffic-requirements",title:"Wymagania dot. ruchu",description:"Co znajduje si\u0119 w tej sekcji?",source:"@site/docs/project-analysis/05-traffic-requirements.md",sourceDirName:"project-analysis",slug:"/project-analysis/traffic-requirements",permalink:"/documentation/pl/docs/project-analysis/traffic-requirements",draft:!1,editUrl:"https://github.com/Dragon-Light-Forest/Documentation/tree/develop/docs/project-analysis/05-traffic-requirements.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Wymagania dot. ruchu"},sidebar:"tutorialSidebar",previous:{title:"Wymagania techniczne",permalink:"/documentation/pl/docs/project-analysis/technical-requirements"},next:{title:"Wymagania SEO",permalink:"/documentation/pl/docs/project-analysis/seo-requirements"}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Co znajduje si\u0119 w tej sekcji?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Okre\u015blenie jaki ruch musi by\u0107 obs\u0142u\u017cony przez aplikacj\u0119 (po wdro\u017ceniu i rok/kilka lat od wdro\u017cenia).\nPerformance (waga aplikacji i poszczeg\xf3lnych widok\xf3w).\n")),(0,a.kt)("p",null,"Bardzo cz\u0119stym b\u0142\u0119dem przy projektowaniu platformy/aplikacji jest nieprzygotowanie na du\u017ce wolumeny ruchu. "),(0,a.kt)("p",null,"Oczywi\u015bcie, w pierwszych tygodniach, a cz\u0119sto nawet miesi\u0105cach istnienia platformy/aplikacji, ruch nie b\u0119dzie przebija\u0142 sufitu. Wystarczy jednak jedna wzmianka na popularnym blogu lub stronie i mo\u017ce si\u0119 zdarzy\u0107, \u017ce w ci\u0105gu nocy ruch na naszej stronie wzro\u015bnie z kilku tysi\u0119cy unikalnych u\u017cytkownik\xf3w do kilkuset\u2026 a nasza infrastruktura tego nie ud\u017awignie i strona dos\u0142ownie \u201cutonie\u201d."),(0,a.kt)("p",null,"A co si\u0119 dzieje kiedy statystyczny u\u017cytkownik internetu natrafia na stron\u0119, kt\xf3ra nie dzia\u0142a?"),(0,a.kt)("p",null,"Nigdy na ni\u0105 nie wraca."),(0,a.kt)("p",null,"W\u0142a\u015bnie dlatego tak wa\u017cne jest okre\u015blenie jaki ruch musi by\u0107 obs\u0142u\u017cony przez platform\u0119/aplikacj\u0119 po wdro\u017ceniu i rok od wdro\u017cenia. Dobr\u0105 praktyk\u0105 jest te\u017c zastanowienie si\u0119 nad celami ilo\u015bciowymi na nast\u0119pne 5 lat, zak\u0142adaj\u0105c systematyczny i stabilny przyrost fan\xf3w."),(0,a.kt)("p",null,"W tej sekcji okre\u015bla si\u0119 ponadto tzw. performance, czyli wydajno\u015b\u0107. Nie raz, nie dwa spotkali\u015bmy si\u0119 z sytuacj\u0105, w kt\xf3rej z powodu braku przemy\u015blanych rozwi\u0105za\u0144 na pocz\u0105tku procesu, konieczne by\u0142o wstrzymanie prac developerskich nad startupem na rzecz poprawy wydajno\u015bci wdro\u017conych ju\u017c element\xf3w. Efekt? Bardzo cz\u0119sta i nag\u0142a \u015bmier\u0107 owych startup\xf3w, ze wzgl\u0119du na nieprzewidziane koszty."),(0,a.kt)("p",null,"Aby nie powtarza\u0107 tego b\u0142\u0119du, zawsze zwracamy naszym Klientom uwag\u0119 na okre\u015blenie chocia\u017cby wst\u0119pnych wymaga\u0144 dotycz\u0105cych performance: ustalenie minimalnej liczby punkt\xf3w w bezp\u0142atnym narz\u0119dziu Google Page Speed czy warto\u015bci granicznej czasu wy\u015bwietlenia dowolnej strony serwisu oraz wypisanie \u201cdobrych praktyk\u201d, takich jak optymalizacja obraz\xf3w, kompresja tekst\xf3w itd."))}p.isMDXComponent=!0}}]);