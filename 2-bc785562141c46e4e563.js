(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{182:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(191),i=a.n(r),n=a(193),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new i.a(s.a);var l=o.rhythm,d=o.scale},183:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(11),s=a.n(n),o=a(58),l=a.n(o);a.d(t,"a",function(){return l.a});a(184),i.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},184:function(e,t,a){var r;e.exports=(r=a(187))&&r.default||r},185:function(e,t,a){"use strict";a(17);var r=a(0),i=a.n(r),n=a(183),s=a(182);a(194);var o=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,o=t.children;return e="/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},i.a.createElement(n.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):i.a.createElement("h3",{style:{marginTop:0}},i.a.createElement(n.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},i.a.createElement("header",null,e),i.a.createElement("main",null,o),i.a.createElement("footer",null,"© ",(new Date).getFullYear()))},r}(i.a.Component);t.a=o},186:function(e,t,a){"use strict";var r=a(188),i=a(0),n=a.n(i),s=a(11),o=a.n(s),l=a(195),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,o=r.data.site,l=t||o.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},187:function(e,t,a){"use strict";a.r(t);a(17);var r=a(0),i=a.n(r),n=a(11),s=a.n(n),o=a(87),l=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},188:function(e){e.exports={data:{site:{siteMetadata:{title:"mic(s)",description:"A place for thoughts to roam free.",author:"Michelle"}}}}},189:function(e,t,a){"use strict";a(190);var r=a(198),i=a(0),n=a.n(i),s=a(199),o=a.n(s),l=a(182);t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,a)," who enjoys reading, building software, and petting cats."," ",n.a.createElement("a",{href:"https://twitter.com/"+i.twitter},"Twitter")," ",n.a.createElement("a",{href:"https://github.com/"+i.github},"Github")))}},190:function(e,t,a){"use strict";a(197)("fixed",function(e){return function(){return e(this,"tt","","")}})},197:function(e,t,a){var r=a(6),i=a(8),n=a(36),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},198:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADfklEQVQ4y41US0hUYRQ+d5yxTUG7hqAEVy5iiBaBlWHZwjG1dO4dZ6oZKywosiApSCtEKNr0gKbcZiRFEWJNJWVZ+CDUkkpyoJdEtRBXEVRz5/6nc869d7qziS583P91vv/7zwtAB/trJBhQBO6nQxWhm/CW8JOQJXwk9BIaIAIBOWeAL8/h/mnT3rAX1xDGIAYI2whNBMNBlBB3oEOGEPEI0LzKXLLWvJEBOZqbBIugHFiyZhCa8sTnwCtMMzR5ZlFTUau2XXPVmEJg2ER0RsBzX9SntKiG9M8RTF/Cx+NUgUqf4VtDXkEGGbIydMh4ju4eKUCoJdTRXr3zr6XLI6K0GTxSx0oOluCSliUmucAlU6KW5sE9QVy6dykuSizC8o5yXH1sNa44vEKtPLISy9vLc6GjISTV3+iSxbAgvqAKtgAOzwznMl8zigjspxpyqxDOzs1i73Avlh0qw/F34/hg6gHOf5/H6c/T6sn0E7wxeiMbSAb4Fa1A7+9m49vPb5uWZanw6TDCZsDieLH8w6fCyN+VoSv2c7cSqgDvTt7F+IU4wga6vIECaAdokIPyln1ACqyrz66qvvE+9g36m/zIyq+PXGcF2PO0B9lvchER3395H3de2olQA8of81uSHTp8ZcJfbEgHVM3pGjWaGcW1x9cibAJcf3I93pm8g7ELMVHEismYSYSwOdWMEAZFGeK6KMuEJt88+HpQrTq6SrX1tOHNsZtI6S3KEhcTWH2qWvz2H4Q5JvzAfnn46qFV2VmpFiYW4syXGYnmxPsJSZXY+RimX6T/TWg/eY6Dco2NBqYGTAqIgkrA1EBKAtF1qwuhAsSwf6K/gDA9mcbkxaRLmJNS1WEUyPkNnBojMyNm7Zla9p0KtYVw6tMUlh4oRdgIuPvybnz85rEQBmIBIRyaHsKW7hYF1YBEmJW61+E4BHcF/USYqeis4MTOSWJHKBXqnDykClm+b7kdKK6kqF05606sUyX7S3hsyZoOPwjLpFDIj41C1EhOdZKaDql8l+Gyq3fGblnWyzrX+G/YLusdNllUk05DTz8LO2TDlE5j/C1BbgzcFDwNgxuC5SG7B54+5h2nxBdRIctKGhS2LyVrvMcXumQRKC7sifmBjJOEb0Icz5P/bbBu47V91u6x8xUq1KXRas54MeEA4ZGUk55XOyepwdF0A+AVRBx/AP5kKQ+aS5LkAAAAAElFTkSuQmCC",width:50,height:50,src:"/static/e0e82a002acb34f484cd0284b2adcfd1/352e5/profile-pic.png",srcSet:"/static/e0e82a002acb34f484cd0284b2adcfd1/352e5/profile-pic.png 1x,\n/static/e0e82a002acb34f484cd0284b2adcfd1/aae31/profile-pic.png 1.5x,\n/static/e0e82a002acb34f484cd0284b2adcfd1/47c2b/profile-pic.png 2x"}}},site:{siteMetadata:{author:"Michelle",social:{twitter:"__m_th",github:"mtham8"}}}}}},199:function(e,t,a){"use strict";a(29),a(21),a(12),a(62),a(123),a(190);var r=a(16);t.__esModule=!0,t.default=void 0;var i,n=r(a(59)),s=r(a(64)),o=r(a(124)),l=r(a(125)),d=r(a(0)),c=r(a(11)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function A(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?A(e,!0):"")+A(e)}).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(L,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},L=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,A=e.loading,O=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,l.default)({opacity:x?1:0,transition:z?"opacity "+b+"ms":"none"},o),B="boolean"==typeof h?"lightgray":h,V={transitionDelay:b+"ms"},C=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&V,o,f),q={title:t,alt:this.state.isVisible?"":a,style:C,className:g};if(p){var j=p,W=j[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),B&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:B,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&V)}),W.base64&&d.default.createElement(R,{src:W.base64,spreadProps:q,imageVariants:j,generateSources:w}),W.tracedSVG&&d.default.createElement(R,{src:W.tracedSVG,spreadProps:q,imageVariants:j,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(j),d.default.createElement(L,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:A,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:A},W,{imageVariants:j}))}}))}if(m){var M=m,k=M[0],G=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},n);return"inherit"===n.display&&delete G.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},B&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:B,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},z&&V)}),k.base64&&d.default.createElement(R,{src:k.base64,spreadProps:q,imageVariants:M,generateSources:w}),k.tracedSVG&&d.default.createElement(R,{src:k.tracedSVG,spreadProps:q,imageVariants:M,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(M),d.default.createElement(L,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:A,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:A},k,{imageVariants:M}))}}))}return null},t}(d.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});x.propTypes={resolutions:z,sizes:T,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([T,c.default.arrayOf(T)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var B=x;t.default=B}}]);
//# sourceMappingURL=2-bc785562141c46e4e563.js.map