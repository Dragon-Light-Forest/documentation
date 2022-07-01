"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[109],{3905:(e,a,o)=>{o.d(a,{Zo:()=>s,kt:()=>d});var n=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function c(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=n.createContext({}),p=function(e){var a=n.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},s=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},z={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var o=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(o),d=t,y=u["".concat(l,".").concat(d)]||u[d]||z[d]||i;return o?n.createElement(y,r(r({ref:a},s),{},{components:o})):n.createElement(y,r({ref:a},s))}));function d(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=o.length,r=new Array(i);r[0]=u;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,r[1]=c;for(var p=2;p<i;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2490:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>z,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=o(7462),t=(o(7294),o(3905));const i={title:"Architektura technologiczna"},r=void 0,c={unversionedId:"project-analysis/technological-architecture",id:"project-analysis/technological-architecture",title:"Architektura technologiczna",description:"Co znajduje si\u0119 w tej sekcji?",source:"@site/docs/project-analysis/07-technological-architecture.md",sourceDirName:"project-analysis",slug:"/project-analysis/technological-architecture",permalink:"/documentation/docs/project-analysis/technological-architecture",draft:!1,editUrl:"https://github.com/Dragon-Light-Forest/Documentation/tree/develop/docs/project-analysis/07-technological-architecture.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Architektura technologiczna"},sidebar:"tutorialSidebar",previous:{title:"Wymagania SEO",permalink:"/documentation/docs/project-analysis/seo-requirements"},next:{title:"Wyb\xf3r narz\u0119dzi promocji platformy",permalink:"/documentation/docs/project-analysis/promotion-tools"}},l={},p=[],s={toc:p};function z(e){let{components:a,...i}=e;return(0,t.kt)("wrapper",(0,n.Z)({},s,i,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Co znajduje si\u0119 w tej sekcji?"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"Wyb\xf3r platformy technologicznej.\nOpis \u015brodowiska produkcyjnego i testowego oraz repozytorium.\nTransfer us\u0142ug (je\u017celi dotyczy).\nWymagania techniczne dotycz\u0105ce serwera.\n")),(0,t.kt)("p",null,"Sekcja architektury technologicznej ma za zadanie jak najlepsze rozplanowanie technicznej realizacji projektu \u2013 od jego bezpiecze\u0144stwa, przez spos\xf3b wdro\u017cenia kluczowych funkcjonalno\u015bci, utrzymanie i rozw\xf3j aplikacji/platformy, ale te\u017c dobranie najlepszych narz\u0119dzi do osi\u0105gni\u0119cia opisanych w poprzednich rozdzia\u0142ach cel\xf3w."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Przyk\u0142ad architektury technologicznej dla aplikacji/platformy",src:o(9490).Z,width:"1200",height:"599"})),(0,t.kt)("p",null,"Wyb\xf3r platformy musi uwzgl\u0119dnia\u0107 ruch opisany w sekcji 5 (Wymagania dot. ruchu), a jednocze\u015bnie zapewni\u0107 aplikacji/platformie jak najwi\u0119ksze bezpiecze\u0144stwo i \u0142atwo\u015b\u0107 developmentu. Wa\u017cnym elementem jest tutaj tak\u017ce d\u0142ug technologiczny. Czym on jest?"),(0,t.kt)("p",null,"Przez d\u0142ug technologiczny rozumiemy ograniczenia, jakie narzucaj\u0105 nam konkretne rozwi\u0105zania programistyczne. To w\u0142a\u015bnie podczas tworzenia dokumentacji projektowej powinni\u015bmy znale\u017a\u0107 odpowiedzi na pytania: czy wybrana przez nas technologia jest rozwijana i b\u0119dzie rozwijana w przysz\u0142o\u015bci? Czy s\u0105 jakiekolwiek przes\u0142anki \u015bwiadcz\u0105ce o tym, \u017ce technologia ta ulegnie powa\u017cnym zmianom w nied\u0142ugim czasie? A mo\u017ce ju\u017c teraz wida\u0107, \u017ce technologia \u201cumiera\u201d i nie posiada aktywnego drona developer\xf3w, kt\xf3rzy j\u0105 rozwijaj\u0105?"),(0,t.kt)("p",null,"D\u0142ug technologiczny powstaje zawsze \u2013 poniewa\u017c ka\u017cda technologia ewoluuje \u2013 mo\u017cna go jednak niepotrzebnie powi\u0119kszy\u0107 ju\u017c na starcie decyduj\u0105c si\u0119 na wykonanie aplikacji/platformy \u201cna wczoraj\u201d i najlepiej po kosztach. "),(0,t.kt)("p",null,"Przyk\u0142ad:"),(0,t.kt)("p",null,"Firma X tworzy platform\u0119 w 2011 roku, korzystaj\u0105c z konkretnego \u015brodowiska (np. CodeIgniter, wersja 2.1.0). Decyduje si\u0119 na sieciowy framework (np. Gearman) do realizacji zada\u0144 (m.in. wykonywania po\u0142\u0105cze\u0144 i wysy\u0142ania powiadomie\u0144, ale tak\u017ce np. do rejestracji nowych u\u017cytkownik\xf3w) oraz inne integracje zewn\u0119trzne."),(0,t.kt)("p",null,"Kilka lat p\xf3\u017aniej na rynku pojawiaj\u0105 si\u0119 nowe wersje zar\xf3wno wykorzystanego \u015brodowiska jak i frameworka; firma jednak nie podejmuje si\u0119 aktualizacji ze wzgl\u0119du na koszta i obaw\u0119 o problemy mog\u0105ce wyst\u0105pi\u0107 w trakcie zmian. Kolejne wersje obu narz\u0119dzi tak\u017ce s\u0105 pomijane."),(0,t.kt)("p",null,"W 2017 roku framework sieciowy ko\u0144czy oficjalne wsparcie dla swojego produktu, pozostawiaj\u0105c go tym samym z ogromnymi dziurami w bezpiecze\u0144stwie (stale rosn\u0105cymi) i coraz wi\u0119kszym niedostosowaniem do nowszych narz\u0119dzi. W rezultacie znacznie wzrastaj\u0105 koszta utrzymania bie\u017c\u0105cych rozwi\u0105za\u0144 firmy X \u2013 ka\u017cdy nowy problem trzeba rozwi\u0105zywa\u0107 w\u0142asnymi zasobami, a developer\xf3w maj\u0105cych ch\u0119ci i do\u015bwiadczenie w pracy z martwym produktem jest coraz mniej."),(0,t.kt)("p",null,"Jednocze\u015bnie, brak aktualizacji wybranego \u015brodowiska powi\u0119ksza przepa\u015b\u0107 mi\u0119dzy platform\u0105, a integracjami zewn\u0119trznymi (kt\xf3re podlegaj\u0105 automatycznym aktualizacjom, niezale\u017cnym od firmy X). Z ka\u017cdym dniem d\u0142ug technologiczny ro\u015bnie, a przy ka\u017cdej takiej aktualizacji pojawia si\u0119 coraz wi\u0119cej problem\xf3w z integracjami. "),(0,t.kt)("p",null,"Efekt? Ze wzgl\u0119du na przestarza\u0142\u0105 architektur\u0119 platforma jest niezabezpieczona, nie spe\u0142nia wymog\xf3w GDPR, a jej podstawowe funkcjonalno\u015bci przestaj\u0105 dzia\u0142a\u0107. Firma X nie mo\u017ce znale\u017a\u0107 developera, kt\xf3ry zgodzi\u0142by si\u0119 pracowa\u0107 w starym \u015brodowisku i na skutek tego zaczyna ugina\u0107 si\u0119 pod ci\u0119\u017carem d\u0142ugu technologicznego. W rezultacie traci kolejne okazje biznesowe i ostatecznie jest zmuszona przepisa\u0107 ca\u0142\u0105 platform\u0119 od nowa (czyt. ponie\u015b\u0107 koszta rozleg\u0142ych prac projektowych i developerskich)."),(0,t.kt)("p",null,"Repozytorium oraz \u015brodowisko testowe i produkcyjne odpowiadaj\u0105 z kolei za to jak b\u0119dzie wygl\u0105da\u0142 bie\u017c\u0105cy rozw\xf3j produktu (w jaki spos\xf3b developerzy mog\u0119 edytowa\u0107/dodawa\u0107 kod, jak dostarczane b\u0119d\u0105 kolejne wersje na deploy). Warto ju\u017c w tym momencie zdecydowa\u0107 si\u0119 na jedn\u0105 z opcji dodawania zmian: continuous integration lub dodawanie zmian manualnie, przy pomocy dodatkowych zasob\xf3w (np. admina)."),(0,t.kt)("p",null,"Transfer us\u0142ug (je\u017celi dotyczy, tj. jest to nowa wersja istniej\u0105cego ju\u017c produktu) mo\u017ce wi\u0105za\u0107 si\u0119 z dodatkowymi kosztami (ze wzgl\u0119du na niekompatybilno\u015b\u0107 us\u0142ug); dlatego warto sprawdzi\u0107 to ju\u017c na etapie projektowania i uwzgl\u0119dni\u0107 w kosztach developmentu."),(0,t.kt)("p",null,"Wymagania techniczne serwera maj\u0105 za zadanie upewnienie si\u0119, \u017ce serwer (us\u0142uga) spe\u0142nia wymogi wybranego softu (np. potrzebujemy bazy danych X \u2013 czy dostawca \u015bwiadczy tak\u0105 us\u0142ug\u0119?)."))}z.isMDXComponent=!0},9490:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/7_schemat_technologiczny-1-b075dbfbf11a7fae23b2da164b65848c.png"}}]);