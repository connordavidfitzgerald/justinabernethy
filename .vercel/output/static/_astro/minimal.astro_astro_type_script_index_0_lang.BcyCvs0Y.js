var ic=Object.defineProperty,ac=(e,t,i)=>t in e?ic(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,rc=(e,t,i)=>ac(e,t+"",i),p={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},w={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},rd={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},nd=Object.entries(rd),s=nd.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),nc={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},Mt=nd.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{...nc});Object.entries(Mt).reduce((e,[t,i])=>{const a=s[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});var sc=Object.entries(s).reduce((e,[t,i])=>{const a=Mt[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),Pe={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},di={DISABLED:"disabled",SHOWING:"showing"},un={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},ie={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},We={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},oc={FULLSCREEN:"fullscreen"};function lc(e){return e?.map(uc).join(" ")}function dc(e){return e?.split(/\s+/).map(cc)}function uc(e){if(e){const{id:t,width:i,height:a}=e;return[t,i,a].filter(r=>r!=null).join(":")}}function cc(e){if(e){const[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function hc(e){return e?.map(vc).join(" ")}function mc(e){return e?.split(/\s+/).map(pc)}function vc(e){if(e){const{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(n=>n!=null).join(":")}}function pc(e){if(e){const[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function Ec(e){return e.replace(/[-_]([a-z])/g,(t,i)=>i.toUpperCase())}function ys(e){return typeof e=="number"&&!Number.isNaN(e)&&Number.isFinite(e)}function sd(e){return typeof e!="string"?!1:!isNaN(e)&&!isNaN(parseFloat(e))}var od=e=>new Promise(t=>setTimeout(t,e)),dl=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],fc=(e,t)=>{const i=e===1?dl[t].singular:dl[t].plural;return`${e} ${i}`},zi=e=>{if(!ys(e))return"";const t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0);return`${[a.getHours(),a.getMinutes(),a.getSeconds()].map((l,u)=>l&&fc(l,u)).filter(l=>l).join(", ")}${i?" remaining":""}`};function tt(e,t){let i=!1;e<0&&(i=!0,e=0-e),e=e<0?0:e;let a=Math.floor(e%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);const o=Math.floor(t/60%60),l=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),n=n>0||l>0?n+":":"",r=((n||o>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}var gc={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."},ul,cn={en:gc},kn=((ul=globalThis.navigator)==null?void 0:ul.language)||"en",bc=e=>{kn=e},_c=e=>{var t,i,a;const[r]=kn.split("-");return((t=cn[kn])==null?void 0:t[e])||((i=cn[r])==null?void 0:i[e])||((a=cn.en)==null?void 0:a[e])||e},E=(e,t={})=>_c(e).replace(/\{(\w+)\}/g,(i,a)=>a in t?String(t[a]):`{${a}}`),ld=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},dd=class extends ld{},cl=class extends dd{constructor(){super(...arguments),this.role=null}},Ac=class{observe(){}unobserve(){}disconnect(){}},ud={createElement:function(){return new aa.HTMLElement},createElementNS:function(){return new aa.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(e){return!1}},aa={ResizeObserver:Ac,document:ud,Node:dd,Element:cl,HTMLElement:class extends cl{constructor(){super(...arguments),this.innerHTML=""}get content(){return new aa.DocumentFragment}},DocumentFragment:class extends ld{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(e){return null},setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(e){return{matches:!1,media:e}},DOMParser:class{parseFromString(t,i){return{body:{textContent:t}}}}},cd="global"in globalThis&&globalThis?.global===globalThis||typeof window>"u"||typeof window.customElements>"u",hd=Object.keys(aa).every(e=>e in globalThis),d=cd&&!hd?aa:globalThis,V=cd&&!hd?ud:globalThis.document,hl=new WeakMap,Is=e=>{let t=hl.get(e);return t||hl.set(e,t=new Set),t},md=new d.ResizeObserver(e=>{for(const t of e)for(const i of Is(t.target))i(t)});function Ei(e,t){Is(e).add(t),md.observe(e)}function fi(e,t){const i=Is(e);i.delete(t),i.size||md.unobserve(e)}function se(e){const t={};for(const i of e)t[i.name]=i.value;return t}function ee(e){var t;return(t=Sn(e))!=null?t:Ti(e,"media-controller")}function Sn(e){var t;const{MEDIA_CONTROLLER:i}=w,a=e.getAttribute(i);if(a)return(t=Qr(e))==null?void 0:t.getElementById(a)}var vd=(e,t,i=".value")=>{const a=e.querySelector(i);a&&(a.textContent=t)},Tc=(e,t)=>{const i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},pd=(e,t)=>Tc(e,t)[0],Fe=(e,t)=>!e||!t?!1:e?.contains(t)?!0:Fe(e,t.getRootNode().host),Ti=(e,t)=>{if(!e)return null;const i=e.closest(t);return i||Ti(e.getRootNode().host,t)};function Ms(e=document){var t;const i=e?.activeElement;return i?(t=Ms(i.shadowRoot))!=null?t:i:null}function Qr(e){var t;const i=(t=e?.getRootNode)==null?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function Ed(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,t--}return!0}function kc(e,t,i,a){const r=a.x-i.x,n=a.y-i.y,o=r*r+n*n;if(o===0)return 0;const l=((e-i.x)*r+(t-i.y)*n)/o;return Math.max(0,Math.min(1,l))}function G(e,t){const i=Sc(e,a=>a===t);return i||ws(e,t)}function Sc(e,t){var i,a;let r;for(r of(i=e.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const o of n??[])if(t(o.selectorText))return o}}function ws(e,t){var i,a;const r=(i=e.querySelectorAll("style:not([media])"))!=null?i:[],n=r?.[r.length-1];return n?.sheet?(n?.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),(a=n.sheet.cssRules)==null?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function O(e,t,i=Number.NaN){const a=e.getAttribute(t);return a!=null?+a:i}function B(e,t,i){const a=+i;if(i==null||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}O(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function y(e,t){return e.hasAttribute(t)}function I(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}y(e,t)!=i&&e.toggleAttribute(t,i)}function P(e,t,i=null){var a;return(a=e.getAttribute(t))!=null?a:i}function U(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}const a=`${i}`;P(e,t,void 0)!==a&&e.setAttribute(t,a)}var fd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ve=(e,t,i)=>(fd(e,t,"read from private field"),i?i.call(e):t.get(e)),yc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ga=(e,t,i,a)=>(fd(e,t,"write to private field"),t.set(e,i),i),j;function Ic(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}var zr=class extends d.HTMLElement{constructor(){if(super(),yc(this,j,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[w.MEDIA_CONTROLLER,s.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===w.MEDIA_CONTROLLER&&(t&&((r=(a=Ve(this,j))==null?void 0:a.unassociateElement)==null||r.call(a,this),ga(this,j,null)),i&&this.isConnected&&(ga(this,j,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=Ve(this,j))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),ga(this,j,Mc(this)),this.getAttribute(w.MEDIA_CONTROLLER)&&((t=(e=Ve(this,j))==null?void 0:e.associateElement)==null||t.call(e,this)),(i=Ve(this,j))==null||i.addEventListener("pointerdown",this),(a=Ve(this,j))==null||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(w.MEDIA_CONTROLLER)&&((t=(e=Ve(this,j))==null?void 0:e.unassociateElement)==null||t.call(e,this)),(i=Ve(this,j))==null||i.removeEventListener("pointerdown",this),(a=Ve(this,j))==null||a.removeEventListener("click",this),ga(this,j,null)}handleEvent(e){var t;const i=(t=e.composedPath())==null?void 0:t[0];if(["video","media-controller"].includes(i?.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:r,clientY:n}=e,{left:o,top:l,width:u,height:h}=this.getBoundingClientRect(),f=r-o,b=n-l;if(f<0||b<0||f>u||b>h||u===0&&h===0)return;const m=this._pointerType||"mouse";if(this._pointerType=void 0,m===un.TOUCH){this.handleTap(e);return}else if(m===un.MOUSE||m===un.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return y(this,s.MEDIA_PAUSED)}set mediaPaused(e){I(this,s.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const t=this.mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new d.CustomEvent(t,{composed:!0,bubbles:!0}))}};j=new WeakMap;zr.shadowRootOptions={mode:"open"};zr.getTemplateHTML=Ic;function Mc(e){var t;const i=e.getAttribute(w.MEDIA_CONTROLLER);return i?(t=e.getRootNode())==null?void 0:t.getElementById(i):Ti(e,"media-controller")}d.customElements.get("media-gesture-receiver")||d.customElements.define("media-gesture-receiver",zr);var ml=zr,Ls=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ne=(e,t,i)=>(Ls(e,t,"read from private field"),i?i.call(e):t.get(e)),ae=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lt=(e,t,i,a)=>(Ls(e,t,"write to private field"),t.set(e,i),i),ue=(e,t,i)=>(Ls(e,t,"access private method"),i),Ir,Bt,ra,ri,Pa,yn,gd,Pi,Ua,In,bd,Mn,_d,na,Xr,Jr,Cs,gi,sa,g={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function wc(e){return`
    <style>
      
      :host([${s.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${g.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${g.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${g.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${g.AUDIO}])[${g.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${g.AUDIO}])[${g.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${g.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${g.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${g.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${g.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${g.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${g.USER_INACTIVE}]:not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_AIRPLAYING}]):not([${s.MEDIA_IS_CASTING}]):not([${g.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${g.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${g.USER_INACTIVE}]:not([${g.NO_AUTOHIDE}]):not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_CASTING}]):not([${g.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${g.USER_INACTIVE}][${g.AUTOHIDE_OVER_CONTROLS}]:not([${g.NO_AUTOHIDE}]):not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_CASTING}]):not([${g.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${g.AUDIO}])[${s.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${ml.shadowRootOptions.mode}">
          ${ml.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}var Lc=Object.values(s),Cc="sm:384 md:576 lg:768 xl:960";function Rc(e){Ad(e.target,e.contentRect.width)}function Ad(e,t){var i;if(!e.isConnected)return;const a=(i=e.getAttribute(g.BREAKPOINTS))!=null?i:Cc,r=Dc(a),n=xc(r,t);let o=!1;if(Object.keys(r).forEach(l=>{if(n.includes(l)){e.hasAttribute(`breakpoint${l}`)||(e.setAttribute(`breakpoint${l}`,""),o=!0);return}e.hasAttribute(`breakpoint${l}`)&&(e.removeAttribute(`breakpoint${l}`),o=!0)}),o){const l=new CustomEvent(Mt.BREAKPOINTS_CHANGE,{detail:n});e.dispatchEvent(l)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(Mt.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function Dc(e){const t=e.split(/\s+/);return Object.fromEntries(t.map(i=>i.split(":")))}function xc(e,t){return Object.keys(e).filter(i=>t>=parseInt(e[i]))}var jr=class extends d.HTMLElement{constructor(){if(super(),ae(this,yn),ae(this,In),ae(this,Mn),ae(this,na),ae(this,Jr),ae(this,gi),ae(this,Ir,0),ae(this,Bt,null),ae(this,ra,null),ae(this,ri,void 0),this.breakpointsComputed=!1,ae(this,Pa,new MutationObserver(ue(this,yn,gd).bind(this))),ae(this,Pi,!1),ae(this,Ua,t=>{ne(this,Pi)||(setTimeout(()=>{Rc(t),lt(this,Pi,!1)},0),lt(this,Pi,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=se(this.attributes),i=this.constructor.getTemplateHTML(t);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){ne(this,Bt)&&this.mediaUnsetCallback(ne(this,Bt));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[g.AUTOHIDE,g.GESTURES_DISABLED].concat(Lc).filter(e=>![s.MEDIA_RENDITION_LIST,s.MEDIA_AUDIO_TRACK_LIST,s.MEDIA_CHAPTERS_CUES,s.MEDIA_WIDTH,s.MEDIA_HEIGHT,s.MEDIA_ERROR,s.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==g.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return e?.nodeName=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(lt(this,Bt,e),e.localName.includes("-")&&await d.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;ne(this,Pa).observe(this,{childList:!0,subtree:!0}),Ei(this,ne(this,Ua));const t=this.getAttribute(g.AUDIO)!=null,i=E(t?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",i),this.handleMediaUpdated(this.media),this.setAttribute(g.USER_INACTIVE,""),Ad(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=d.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;ne(this,Pa).disconnect(),fi(this,ne(this,Ua)),this.media&&this.mediaUnsetCallback(this.media),(e=d.window)==null||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){lt(this,Bt,null)}handleEvent(e){switch(e.type){case"pointerdown":lt(this,Ir,e.timeStamp);break;case"pointermove":ue(this,In,bd).call(this,e);break;case"pointerup":ue(this,Mn,_d).call(this,e);break;case"mouseleave":ue(this,na,Xr).call(this);break;case"mouseup":this.removeAttribute(g.KEYBOARD_CONTROL);break;case"keyup":ue(this,gi,sa).call(this),this.setAttribute(g.KEYBOARD_CONTROL,"");break}}set autohide(e){const t=Number(e);lt(this,ri,isNaN(t)?0:t)}get autohide(){return(ne(this,ri)===void 0?2:ne(this,ri)).toString()}get breakpoints(){return P(this,g.BREAKPOINTS)}set breakpoints(e){U(this,g.BREAKPOINTS,e)}get audio(){return y(this,g.AUDIO)}set audio(e){I(this,g.AUDIO,e)}get gesturesDisabled(){return y(this,g.GESTURES_DISABLED)}set gesturesDisabled(e){I(this,g.GESTURES_DISABLED,e)}get keyboardControl(){return y(this,g.KEYBOARD_CONTROL)}set keyboardControl(e){I(this,g.KEYBOARD_CONTROL,e)}get noAutohide(){return y(this,g.NO_AUTOHIDE)}set noAutohide(e){I(this,g.NO_AUTOHIDE,e)}get autohideOverControls(){return y(this,g.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){I(this,g.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return y(this,g.USER_INACTIVE)}set userInteractive(e){I(this,g.USER_INACTIVE,e)}};Ir=new WeakMap;Bt=new WeakMap;ra=new WeakMap;ri=new WeakMap;Pa=new WeakMap;yn=new WeakSet;gd=function(e){const t=this.media;for(const i of e){if(i.type!=="childList")continue;const a=i.removedNodes;for(const r of a){if(r.slot!="media"||i.target!=this)continue;let n=i.previousSibling&&i.previousSibling.previousElementSibling;if(!n||!t)this.mediaUnsetCallback(r);else{let o=n.slot!=="media";for(;(n=n.previousSibling)!==null;)n.slot=="media"&&(o=!1);o&&this.mediaUnsetCallback(r)}}if(t)for(const r of i.addedNodes)r===t&&this.handleMediaUpdated(t)}};Pi=new WeakMap;Ua=new WeakMap;In=new WeakSet;bd=function(e){if(e.pointerType!=="mouse"&&e.timeStamp-ne(this,Ir)<250)return;ue(this,Jr,Cs).call(this),clearTimeout(ne(this,ra));const t=this.hasAttribute(g.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&ue(this,gi,sa).call(this)};Mn=new WeakSet;_d=function(e){if(e.pointerType==="touch"){const t=!this.hasAttribute(g.USER_INACTIVE);[this,this.media].includes(e.target)&&t?ue(this,na,Xr).call(this):ue(this,gi,sa).call(this)}else e.composedPath().some(t=>["media-play-button","media-fullscreen-button"].includes(t?.localName))&&ue(this,gi,sa).call(this)};na=new WeakSet;Xr=function(){if(ne(this,ri)<0||this.hasAttribute(g.USER_INACTIVE))return;this.setAttribute(g.USER_INACTIVE,"");const e=new d.CustomEvent(Mt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)};Jr=new WeakSet;Cs=function(){if(!this.hasAttribute(g.USER_INACTIVE))return;this.removeAttribute(g.USER_INACTIVE);const e=new d.CustomEvent(Mt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)};gi=new WeakSet;sa=function(){ue(this,Jr,Cs).call(this),clearTimeout(ne(this,ra));const e=parseInt(this.autohide);e<0||lt(this,ra,setTimeout(()=>{ue(this,na,Xr).call(this)},e*1e3))};jr.shadowRootOptions={mode:"open"};jr.getTemplateHTML=wc;d.customElements.get("media-container")||d.customElements.define("media-container",jr);var Td=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Y=(e,t,i)=>(Td(e,t,"read from private field"),i?i.call(e):t.get(e)),Mi=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ba=(e,t,i,a)=>(Td(e,t,"write to private field"),t.set(e,i),i),Wt,$t,Mr,pt,He,qe,Rs=class{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){Mi(this,He),Mi(this,Wt,void 0),Mi(this,$t,void 0),Mi(this,Mr,void 0),Mi(this,pt,new Set),ba(this,Wt,e),ba(this,$t,t),ba(this,Mr,new Set(i))}[Symbol.iterator](){return Y(this,He,qe).values()}get length(){return Y(this,He,qe).size}get value(){var e;return(e=[...Y(this,He,qe)].join(" "))!=null?e:""}set value(e){var t;e!==this.value&&(ba(this,pt,new Set),this.add(...(t=e?.split(" "))!=null?t:[]))}toString(){return this.value}item(e){return[...Y(this,He,qe)][e]}values(){return Y(this,He,qe).values()}forEach(e,t){Y(this,He,qe).forEach(e,t)}add(...e){var t,i;e.forEach(a=>Y(this,pt).add(a)),!(this.value===""&&!((t=Y(this,Wt))!=null&&t.hasAttribute(`${Y(this,$t)}`)))&&((i=Y(this,Wt))==null||i.setAttribute(`${Y(this,$t)}`,`${this.value}`))}remove(...e){var t;e.forEach(i=>Y(this,pt).delete(i)),(t=Y(this,Wt))==null||t.setAttribute(`${Y(this,$t)}`,`${this.value}`)}contains(e){return Y(this,He,qe).has(e)}toggle(e,t){return typeof t<"u"?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}};Wt=new WeakMap;$t=new WeakMap;Mr=new WeakMap;pt=new WeakMap;He=new WeakSet;qe=function(){return Y(this,pt).size?Y(this,pt):Y(this,Mr)};var Oc=(e="")=>e.split(/\s+/),kd=(e="")=>{const[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:t==="cc"?Pe.CAPTIONS:Pe.SUBTITLES,language:i,label:r}},en=(e="",t={})=>Oc(e).map(i=>{const a=kd(i);return{...t,...a}}),Sd=e=>e?Array.isArray(e)?e.map(t=>typeof t=="string"?kd(t):t):typeof e=="string"?en(e):[e]:[],wn=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${e==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,oa=(e=[])=>Array.prototype.map.call(e,wn).join(" "),Pc=(e,t)=>i=>i[e]===t,yd=e=>{const t=Object.entries(e).map(([i,a])=>Pc(i,a));return i=>t.every(a=>a(i))},Xi=(e,t=[],i=[])=>{const a=Sd(i).map(yd),r=n=>a.some(o=>o(n));Array.from(t).filter(r).forEach(n=>{n.mode=e})},tn=(e,t=()=>!0)=>{if(!e?.textTracks)return[];const i=typeof t=="function"?t:yd(t);return Array.from(e.textTracks).filter(i)},Id=e=>{var t;return!!((t=e.mediaSubtitlesShowing)!=null&&t.length)||e.hasAttribute(s.MEDIA_SUBTITLES_SHOWING)},Uc=e=>{var t;const{media:i,fullscreenElement:a}=e;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(t=a[r])==null?void 0:t.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i?.webkitEnterFullscreen?i.webkitEnterFullscreen():i?.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},vl="exitFullscreen"in V?"exitFullscreen":"webkitExitFullscreen"in V?"webkitExitFullscreen":"webkitCancelFullScreen"in V?"webkitCancelFullScreen":void 0,Nc=e=>{var t;const{documentElement:i}=e;if(vl){const a=(t=i?.[vl])==null?void 0:t.call(i);if(a instanceof Promise)return a.catch(()=>{})}},Ui="fullscreenElement"in V?"fullscreenElement":"webkitFullscreenElement"in V?"webkitFullscreenElement":void 0,Hc=e=>{const{documentElement:t,media:i}=e,a=t?.[Ui];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===oc.FULLSCREEN?i:a},Bc=e=>{var t;const{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;const n=Hc(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let o=n.shadowRoot;if(!(Ui in o))return Fe(n,r);for(;o?.[Ui];){if(o[Ui]===r)return!0;o=(t=o[Ui])==null?void 0:t.shadowRoot}}return!1},Wc="fullscreenEnabled"in V?"fullscreenEnabled":"webkitFullscreenEnabled"in V?"webkitFullscreenEnabled":void 0,$c=e=>{const{documentElement:t,media:i}=e;return!!t?.[Wc]||i&&"webkitSupportsFullscreen"in i},_a,Ds=()=>{var e,t;return _a||(_a=(t=(e=V)==null?void 0:e.createElement)==null?void 0:t.call(e,"video"),_a)},Fc=async(e=Ds())=>{if(!e)return!1;const t=e.volume;e.volume=t/2+.1;const i=new AbortController,a=await Promise.race([Vc(e,i.signal),Kc(e,t)]);return i.abort(),a},Vc=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),Kc=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await od(10)}return e.volume!==t},Gc=/.*Version\/.*Safari\/.*/.test(d.navigator.userAgent),Md=(e=Ds())=>d.matchMedia("(display-mode: standalone)").matches&&Gc?!1:typeof e?.requestPictureInPicture=="function",wd=(e=Ds())=>$c({documentElement:V,media:e}),qc=wd(),Zc=Md(),Yc=!!d.WebKitPlaybackTargetAvailabilityEvent,Qc=!!d.chrome,wr=e=>tn(e.media,t=>[Pe.SUBTITLES,Pe.CAPTIONS].includes(t.kind)).sort((t,i)=>t.kind>=i.kind?1:-1),Ld=e=>tn(e.media,t=>t.mode===di.SHOWING&&[Pe.SUBTITLES,Pe.CAPTIONS].includes(t.kind)),Cd=(e,t)=>{const i=wr(e),a=Ld(e),r=!!a.length;if(i.length){if(t===!1||r&&t!==!0)Xi(di.DISABLED,i,a);else if(t===!0||!r&&t!==!1){let n=i[0];const{options:o}=e;if(!o?.noSubtitlesLangPref){const f=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),b=f?[f,...globalThis.navigator.languages]:globalThis.navigator.languages,m=i.filter(v=>b.some(T=>v.language.toLowerCase().startsWith(T.split("-")[0]))).sort((v,T)=>{const k=b.findIndex(x=>v.language.toLowerCase().startsWith(x.split("-")[0])),_=b.findIndex(x=>T.language.toLowerCase().startsWith(x.split("-")[0]));return k-_});m[0]&&(n=m[0])}const{language:l,label:u,kind:h}=n;Xi(di.DISABLED,i,a),Xi(di.SHOWING,i,[{language:l,label:u,kind:h}])}}},xs=(e,t)=>e===t?!0:e==null||t==null||typeof e!=typeof t?!1:typeof e=="number"&&Number.isNaN(e)&&Number.isNaN(t)?!0:typeof e!="object"?!1:Array.isArray(e)?zc(e,t):Object.entries(e).every(([i,a])=>i in t&&xs(a,t[i])),zc=(e,t)=>{const i=Array.isArray(e),a=Array.isArray(t);return i!==a?!1:i||a?e.length!==t.length?!1:e.every((r,n)=>xs(r,t[n])):!0},Xc=Object.values(We),Lr,Jc=Fc().then(e=>(Lr=e,Lr)),jc=async(...e)=>{await Promise.all(e.filter(t=>t).map(async t=>{if(!("localName"in t&&t instanceof d.HTMLElement))return;const i=t.localName;if(!i.includes("-"))return;const a=d.customElements.get(i);a&&t instanceof a||(await d.customElements.whenDefined(i),d.customElements.upgrade(t))}))},eh=new d.DOMParser,th=e=>e&&(eh.parseFromString(e,"text/html").body.textContent||e),Ni={mediaError:{get(e,t){const{media:i}=e;if(t?.type!=="playing")return i?.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;const{media:a}=e;if(t?.type!=="playing")return(i=a?.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;const{media:r}=e;if(t?.type!=="playing")return(a=(i=r?.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;const{media:i}=e;return(t=i?.videoWidth)!=null?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;const{media:i}=e;return(t=i?.videoHeight)!=null?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;const{media:i}=e;return(t=i?.paused)!=null?t:!0},set(e,t){var i;const{media:a}=t;a&&(e?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){const{media:i}=e;return i?t?t.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;const{media:i}=e;return(t=i?.ended)!=null?t:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;const{media:i}=e;return(t=i?.playbackRate)!=null?t:1},set(e,t){const{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;const{media:i}=e;return(t=i?.muted)!=null?t:!1},set(e,t){const{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{const r=d.localStorage.getItem("media-chrome-pref-muted")!==null,n=i.hasAttribute("muted");if(a){r&&d.localStorage.removeItem("media-chrome-pref-muted");return}if(n&&!r)return;d.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{const{options:{noMutedPref:i}}=t,{media:a}=t;if(!(!a||a.muted||i))try{const r=d.localStorage.getItem("media-chrome-pref-muted")==="true";Ni.mediaMuted.set(r,t),e(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(e){const{media:t}=e;return t?.loop},set(e,t){const{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;const{media:i}=e;return(t=i?.volume)!=null?t:1},set(e,t){const{media:i,options:{noVolumePref:a}={}}=t;if(i){try{e==null?d.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&d.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{const{options:{noVolumePref:i}}=t;if(!i)try{const{media:a}=t;if(!a)return;const r=d.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;Ni.mediaVolume.set(+r,t),e(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(e){const{media:t}=e;return typeof t?.volume>"u"?"high":t.muted||t.volume===0?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;const{media:i}=e;return(t=i?.currentTime)!=null?t:0},set(e,t){const{media:i}=t;!i||!ys(e)||(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){const{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(t?.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){const{media:t}=e;return t?.readyState<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;const{media:i}=e;if(!((t=i?.seekable)!=null&&t.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;const{media:i}=e,a=(t=i?.buffered)!=null?t:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){const{media:t,options:{defaultStreamType:i}={}}=e,a=[We.LIVE,We.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;const{streamType:r}=t;if(Xc.includes(r))return r===We.UNKNOWN?a:r;const n=t.duration;return n===1/0?We.LIVE:Number.isFinite(n)?We.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){const{media:t}=e;if(!t)return Number.NaN;const{targetLiveWindow:i}=t,a=Ni.mediaStreamType.get(e);return(i==null||Number.isNaN(i))&&a===We.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){const{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if(typeof t.liveEdgeStart=="number")return Number.isNaN(t.liveEdgeStart)?!1:t.currentTime>=t.liveEdgeStart;if(!(Ni.mediaStreamType.get(e)===We.LIVE))return!1;const r=t.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return t.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(e){return wr(e).map(({kind:t,label:i,language:a})=>({kind:t,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(e){return Ld(e).map(({kind:t,label:i,language:a})=>({kind:t,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;const{media:r,options:n}=t;if(!r)return;const o=l=>{var u;!n.defaultSubtitles||l&&![Pe.CAPTIONS,Pe.SUBTITLES].includes((u=l?.track)==null?void 0:u.kind)||Cd(t,!0)};return r.addEventListener("loadstart",o),(i=r.textTracks)==null||i.addEventListener("addtrack",o),(a=r.textTracks)==null||a.addEventListener("removetrack",o),()=>{var l,u;r.removeEventListener("loadstart",o),(l=r.textTracks)==null||l.removeEventListener("addtrack",o),(u=r.textTracks)==null||u.removeEventListener("removetrack",o)}}]},mediaChaptersCues:{get(e){var t;const{media:i}=e;if(!i)return[];const[a]=tn(i,{kind:Pe.CHAPTERS});return Array.from((t=a?.cues)!=null?t:[]).map(({text:r,startTime:n,endTime:o})=>({text:th(r),startTime:n,endTime:o}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r?.addEventListener("load",e),n?.addEventListener("load",e),()=>{r?.removeEventListener("load",e),n?.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;const{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(t=a.localName)!=null&&t.includes("-")?Fe(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n?.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(e,t){const{media:i}=t;if(i)if(e){if(!V.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",o),i.preload="none"},o=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",o),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else V.pictureInPictureElement&&V.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;const{media:i}=e;return[...(t=i?.videoRenditions)!=null?t:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;const{media:r}=e;return(a=(i=r?.videoRenditions)==null?void 0:i[(t=r.videoRenditions)==null?void 0:t.selectedIndex])==null?void 0:a.id},set(e,t){const{media:i}=t;if(!i?.videoRenditions){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=e,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;const{media:i}=e;return[...(t=i?.audioTracks)!=null?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;const{media:a}=e;return(i=[...(t=a?.audioTracks)!=null?t:[]].find(r=>r.enabled))==null?void 0:i.id},set(e,t){const{media:i}=t;if(!i?.audioTracks){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=e;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(e){return Bc(e)},set(e,t,i){var a;e?(Uc(t),i.detail&&((a=t.media)==null||a.focus())):Nc(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;const{media:i}=e;return!i?.remote||((t=i.remote)==null?void 0:t.state)==="disconnected"?!1:!!i.remote.state},set(e,t){var i,a;const{media:r}=t;if(r&&!(e&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!e&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(e,t){const{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&d.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){const{media:t}=e;if(!qc||!wd(t))return ie.UNSUPPORTED}},mediaPipUnavailable:{get(e){const{media:t}=e;if(!Zc||!Md(t))return ie.UNSUPPORTED;if(t?.disablePictureInPicture)return ie.UNAVAILABLE}},mediaVolumeUnavailable:{get(e){const{media:t}=e;if(Lr===!1||t?.volume==null)return ie.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{Lr==null&&Jc.then(t=>e(t?void 0:ie.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;const{media:a}=e;if(!Qc||!((i=a?.remote)!=null&&i.state))return ie.UNSUPPORTED;if(!(t==null||t==="available"))return ie.UNAVAILABLE},stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{e({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(e,t){if(!Yc)return ie.UNSUPPORTED;if(t?.availability==="not-available")return ie.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{e({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(e){var t;const{media:i}=e;if(!i?.videoRenditions)return ie.UNSUPPORTED;if(!((t=i.videoRenditions)!=null&&t.length))return ie.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;const{media:a}=e;if(!a?.audioTracks)return ie.UNSUPPORTED;if(((i=(t=a.audioTracks)==null?void 0:t.length)!=null?i:0)<=1)return ie.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){const{options:{mediaLang:t}={}}=e;return t??"en"}}},ih={[p.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;const{media:o}=t,l=i??void 0;let u,h;if(o&&l!=null){const[v]=tn(o,{kind:Pe.METADATA,label:"thumbnails"}),T=Array.prototype.find.call((a=v?.cues)!=null?a:[],(k,_,x)=>_===0?k.endTime>l:_===x.length-1?k.startTime<=l:k.startTime<=l&&k.endTime>l);if(T){const k=/'^(?:[a-z]+:)?\/\//i.test(T.text)||(r=o?.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,_=new URL(T.text,k);h=new URLSearchParams(_.hash).get("#xywh").split(",").map(J=>+J),u=_.href}}const f=e.mediaDuration.get(t);let m=(n=e.mediaChaptersCues.get(t).find((v,T,k)=>T===k.length-1&&f===v.endTime?v.startTime<=l&&v.endTime>=l:v.startTime<=l&&v.endTime>l))==null?void 0:n.text;return i!=null&&m==null&&(m=""),{mediaPreviewTime:l,mediaPreviewImage:u,mediaPreviewCoords:h,mediaPreviewChapter:m}},[p.MEDIA_PAUSE_REQUEST](e,t){e["mediaPaused"].set(!0,t)},[p.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;const o="mediaPaused",u=e.mediaStreamType.get(t)===We.LIVE,h=!((i=t.options)!=null&&i.noAutoSeekToLive),f=e.mediaTargetLiveWindow.get(t)>0;if(u&&h&&!f){const b=(a=e.mediaSeekable.get(t))==null?void 0:a[1];if(b){const m=(n=(r=t.options)==null?void 0:r.seekToLiveOffset)!=null?n:0,v=b-m;e.mediaCurrentTime.set(v,t)}}e[o].set(!1,t)},[p.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){const a="mediaPlaybackRate",r=i;e[a].set(r,t)},[p.MEDIA_MUTE_REQUEST](e,t){e["mediaMuted"].set(!0,t)},[p.MEDIA_UNMUTE_REQUEST](e,t){const i="mediaMuted";e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e[i].set(!1,t)},[p.MEDIA_LOOP_REQUEST](e,t,{detail:i}){const a="mediaLoop",r=!!i;return e[a].set(r,t),{mediaLoop:r}},[p.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){const a="mediaVolume",r=i;r&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e[a].set(r,t)},[p.MEDIA_SEEK_REQUEST](e,t,{detail:i}){const a="mediaCurrentTime",r=i;e[a].set(r,t)},[p.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;const n="mediaCurrentTime",o=(i=e.mediaSeekable.get(t))==null?void 0:i[1];if(Number.isNaN(Number(o)))return;const l=(r=(a=t.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,u=o-l;e[n].set(u,t)},[p.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;const{options:r}=t,n=wr(t),o=Sd(i),l=(a=o[0])==null?void 0:a.language;l&&!r.noSubtitlesLangPref&&d.localStorage.setItem("media-chrome-pref-subtitles-lang",l),Xi(di.SHOWING,n,o)},[p.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){const a=wr(t),r=i??[];Xi(di.DISABLED,a,r)},[p.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){Cd(t,i)},[p.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){const a="mediaRenditionSelected",r=i;e[a].set(r,t)},[p.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){const a="mediaAudioTrackEnabled",r=i;e[a].set(r,t)},[p.MEDIA_ENTER_PIP_REQUEST](e,t){const i="mediaIsPip";e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e[i].set(!0,t)},[p.MEDIA_EXIT_PIP_REQUEST](e,t){e["mediaIsPip"].set(!1,t)},[p.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){const a="mediaIsFullscreen";e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e[a].set(!0,t,i)},[p.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e["mediaIsFullscreen"].set(!1,t)},[p.MEDIA_ENTER_CAST_REQUEST](e,t){const i="mediaIsCasting";e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e[i].set(!0,t)},[p.MEDIA_EXIT_CAST_REQUEST](e,t){e["mediaIsCasting"].set(!1,t)},[p.MEDIA_AIRPLAY_REQUEST](e,t){e["mediaIsAirplaying"].set(!0,t)}},ah=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=Ni,requestMap:r=ih,options:n={},monitorStateOwnersOnlyWithSubscriptions:o=!0})=>{const l=[],u={options:{...n}};let h=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const f=k=>{k!=null&&(xs(k,h)||(h=Object.freeze({...h,...k}),l.forEach(_=>_(h))))},b=()=>{const k=Object.entries(a).reduce((_,[x,{get:J}])=>(_[x]=J(u),_),{});f(k)},m={};let v;const T=async(k,_)=>{var x,J,nt,Lt,Do,xo,Oo,Po,Uo,No,Ho,Bo,Wo,$o,Fo,Vo;const Yu=!!v;if(v={...u,...v??{},...k},Yu)return;await jc(...Object.values(k));const Ct=l.length>0&&_===0&&o,Ko=u.media!==v.media,Go=((x=u.media)==null?void 0:x.textTracks)!==((J=v.media)==null?void 0:J.textTracks),qo=((nt=u.media)==null?void 0:nt.videoRenditions)!==((Lt=v.media)==null?void 0:Lt.videoRenditions),Zo=((Do=u.media)==null?void 0:Do.audioTracks)!==((xo=v.media)==null?void 0:xo.audioTracks),Yo=((Oo=u.media)==null?void 0:Oo.remote)!==((Po=v.media)==null?void 0:Po.remote),Qo=u.documentElement!==v.documentElement,zo=!!u.media&&(Ko||Ct),Xo=!!((Uo=u.media)!=null&&Uo.textTracks)&&(Go||Ct),Jo=!!((No=u.media)!=null&&No.videoRenditions)&&(qo||Ct),jo=!!((Ho=u.media)!=null&&Ho.audioTracks)&&(Zo||Ct),el=!!((Bo=u.media)!=null&&Bo.remote)&&(Yo||Ct),tl=!!u.documentElement&&(Qo||Ct),dn=zo||Xo||Jo||jo||el||tl,Rt=l.length===0&&_===1&&o,il=!!v.media&&(Ko||Rt),al=!!((Wo=v.media)!=null&&Wo.textTracks)&&(Go||Rt),rl=!!(($o=v.media)!=null&&$o.videoRenditions)&&(qo||Rt),nl=!!((Fo=v.media)!=null&&Fo.audioTracks)&&(Zo||Rt),sl=!!((Vo=v.media)!=null&&Vo.remote)&&(Yo||Rt),ol=!!v.documentElement&&(Qo||Rt),ll=il||al||rl||nl||sl||ol;if(!(dn||ll)){Object.entries(v).forEach(([C,Ii])=>{u[C]=Ii}),b(),v=void 0;return}Object.entries(a).forEach(([C,{get:Ii,mediaEvents:Qu=[],textTracksEvents:zu=[],videoRenditionsEvents:Xu=[],audioTracksEvents:Ju=[],remoteEvents:ju=[],rootEvents:ec=[],stateOwnersUpdateHandlers:tc=[]}])=>{m[C]||(m[C]={});const te=N=>{const $=Ii(u,N);f({[C]:$})};let q;q=m[C].mediaEvents,Qu.forEach(N=>{q&&zo&&(u.media.removeEventListener(N,q),m[C].mediaEvents=void 0),il&&(v.media.addEventListener(N,te),m[C].mediaEvents=te)}),q=m[C].textTracksEvents,zu.forEach(N=>{var $,he;q&&Xo&&(($=u.media.textTracks)==null||$.removeEventListener(N,q),m[C].textTracksEvents=void 0),al&&((he=v.media.textTracks)==null||he.addEventListener(N,te),m[C].textTracksEvents=te)}),q=m[C].videoRenditionsEvents,Xu.forEach(N=>{var $,he;q&&Jo&&(($=u.media.videoRenditions)==null||$.removeEventListener(N,q),m[C].videoRenditionsEvents=void 0),rl&&((he=v.media.videoRenditions)==null||he.addEventListener(N,te),m[C].videoRenditionsEvents=te)}),q=m[C].audioTracksEvents,Ju.forEach(N=>{var $,he;q&&jo&&(($=u.media.audioTracks)==null||$.removeEventListener(N,q),m[C].audioTracksEvents=void 0),nl&&((he=v.media.audioTracks)==null||he.addEventListener(N,te),m[C].audioTracksEvents=te)}),q=m[C].remoteEvents,ju.forEach(N=>{var $,he;q&&el&&(($=u.media.remote)==null||$.removeEventListener(N,q),m[C].remoteEvents=void 0),sl&&((he=v.media.remote)==null||he.addEventListener(N,te),m[C].remoteEvents=te)}),q=m[C].rootEvents,ec.forEach(N=>{q&&tl&&(u.documentElement.removeEventListener(N,q),m[C].rootEvents=void 0),ol&&(v.documentElement.addEventListener(N,te),m[C].rootEvents=te)});const fa=m[C].stateOwnersUpdateHandlers;if(fa&&dn&&(Array.isArray(fa)?fa:[fa]).forEach($=>{typeof $=="function"&&$()}),ll){const N=tc.map($=>$(te,v)).filter($=>typeof $=="function");m[C].stateOwnersUpdateHandlers=N.length===1?N[0]:N}else dn&&(m[C].stateOwnersUpdateHandlers=void 0)}),Object.entries(v).forEach(([C,Ii])=>{u[C]=Ii}),b(),v=void 0};return T({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(k){const{type:_,detail:x}=k;if(r[_]&&h.mediaErrorCode==null){f(r[_](a,u,k));return}_==="mediaelementchangerequest"?T({media:x}):_==="fullscreenelementchangerequest"?T({fullscreenElement:x}):_==="documentelementchangerequest"?T({documentElement:x}):_==="optionschangerequest"&&(Object.entries(x??{}).forEach(([J,nt])=>{u.options[J]=nt}),b())},getState(){return h},subscribe(k){return T({},l.length+1),l.push(k),k(h),()=>{const _=l.indexOf(k);_>=0&&(T({},l.length-1),l.splice(_,1))}}}},Os=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},A=(e,t,i)=>(Os(e,t,"read from private field"),i?i.call(e):t.get(e)),me=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Be=(e,t,i,a)=>(Os(e,t,"write to private field"),t.set(e,i),i),Re=(e,t,i)=>(Os(e,t,"access private method"),i),je,Hi,L,Et,Bi,Ae,Na,Ha,Ln,_t,ui,Ba,Cn,Rn,Rd,Dd=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],pl=10,El=.025,fl=.25,rh=.25,nh=2,c={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"},sh=class extends jr{constructor(){super(),me(this,Ha),me(this,_t),me(this,Ba),me(this,Rn),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,me(this,je,new Rs(this,c.HOTKEYS)),me(this,Hi,void 0),me(this,L,void 0),me(this,Et,null),me(this,Bi,void 0),me(this,Ae,void 0),me(this,Na,t=>{var i;(i=A(this,L))==null||i.dispatch(t)}),this.associateElement(this);let e={};Be(this,Bi,t=>{Object.entries(t).forEach(([i,a])=>{if(i in e&&e[i]===a)return;this.propagateMediaState(i,a);const r=i.toLowerCase(),n=new d.CustomEvent(sc[r],{composed:!0,detail:a});this.dispatchEvent(n)}),e=t}),this.hasAttribute(c.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(c.NO_HOTKEYS,c.HOTKEYS,c.DEFAULT_STREAM_TYPE,c.DEFAULT_SUBTITLES,c.DEFAULT_DURATION,c.NO_MUTED_PREF,c.NO_VOLUME_PREF,c.LANG,c.LOOP)}get mediaStore(){return A(this,L)}set mediaStore(e){var t,i;if(A(this,L)&&((t=A(this,Ae))==null||t.call(this),Be(this,Ae,void 0)),Be(this,L,e),!A(this,L)&&!this.hasAttribute(c.NO_DEFAULT_STORE)){Re(this,Ha,Ln).call(this);return}Be(this,Ae,(i=A(this,L))==null?void 0:i.subscribe(A(this,Bi)))}get fullscreenElement(){var e;return(e=A(this,Hi))!=null?e:this}set fullscreenElement(e){var t;this.hasAttribute(c.FULLSCREEN_ELEMENT)&&this.removeAttribute(c.FULLSCREEN_ELEMENT),Be(this,Hi,e),(t=A(this,L))==null||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return y(this,c.DEFAULT_SUBTITLES)}set defaultSubtitles(e){I(this,c.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return P(this,c.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){U(this,c.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return O(this,c.DEFAULT_DURATION)}set defaultDuration(e){B(this,c.DEFAULT_DURATION,e)}get noHotkeys(){return y(this,c.NO_HOTKEYS)}set noHotkeys(e){I(this,c.NO_HOTKEYS,e)}get keysUsed(){return P(this,c.KEYS_USED)}set keysUsed(e){U(this,c.KEYS_USED,e)}get liveEdgeOffset(){return O(this,c.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){B(this,c.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return y(this,c.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){I(this,c.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return y(this,c.NO_VOLUME_PREF)}set noVolumePref(e){I(this,c.NO_VOLUME_PREF,e)}get noMutedPref(){return y(this,c.NO_MUTED_PREF)}set noMutedPref(e){I(this,c.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return y(this,c.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){I(this,c.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return y(this,c.NO_DEFAULT_STORE)}set noDefaultStore(e){I(this,c.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,t,i){var a,r,n,o,l,u,h,f,b,m,v,T;if(super.attributeChangedCallback(e,t,i),e===c.NO_HOTKEYS)i!==t&&i===""?(this.hasAttribute(c.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&i===null&&this.enableHotkeys();else if(e===c.HOTKEYS)A(this,je).value=i;else if(e===c.DEFAULT_SUBTITLES&&i!==t)(a=A(this,L))==null||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(c.DEFAULT_SUBTITLES)}});else if(e===c.DEFAULT_STREAM_TYPE)(n=A(this,L))==null||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(r=this.getAttribute(c.DEFAULT_STREAM_TYPE))!=null?r:void 0}});else if(e===c.LIVE_EDGE_OFFSET)(o=A(this,L))==null||o.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(c.LIVE_EDGE_OFFSET)}});else if(e===c.SEEK_TO_LIVE_OFFSET)(l=A(this,L))==null||l.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(c.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===c.NO_AUTO_SEEK_TO_LIVE)(u=A(this,L))==null||u.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(c.NO_AUTO_SEEK_TO_LIVE)}});else if(e===c.FULLSCREEN_ELEMENT){const k=i?(h=this.getRootNode())==null?void 0:h.getElementById(i):void 0;Be(this,Hi,k),(f=A(this,L))==null||f.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===c.LANG&&i!==t?(bc(i),(b=A(this,L))==null||b.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===c.LOOP&&i!==t?(m=A(this,L))==null||m.dispatch({type:p.MEDIA_LOOP_REQUEST,detail:i!=null}):e===c.NO_VOLUME_PREF&&i!==t?(v=A(this,L))==null||v.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(c.NO_VOLUME_PREF)}}):e===c.NO_MUTED_PREF&&i!==t&&((T=A(this,L))==null||T.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(c.NO_MUTED_PREF)}}))}connectedCallback(){var e,t;!A(this,L)&&!this.hasAttribute(c.NO_DEFAULT_STORE)&&Re(this,Ha,Ln).call(this),(e=A(this,L))==null||e.dispatch({type:"documentelementchangerequest",detail:V}),super.connectedCallback(),A(this,L)&&!A(this,Ae)&&Be(this,Ae,(t=A(this,L))==null?void 0:t.subscribe(A(this,Bi))),this.hasAttribute(c.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;(e=super.disconnectedCallback)==null||e.call(this),A(this,L)&&((t=A(this,L))==null||t.dispatch({type:"documentelementchangerequest",detail:void 0}),(i=A(this,L))==null||i.dispatch({type:p.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),A(this,Ae)&&((a=A(this,Ae))==null||a.call(this),Be(this,Ae,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),(t=A(this,L))==null||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),(t=A(this,L))==null||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){_l(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:t}=this;if(t.has(e))return;const i=this.registerMediaStateReceiver.bind(this),a=this.unregisterMediaStateReceiver.bind(this),r=hh(e,i,a);Object.values(p).forEach(n=>{e.addEventListener(n,A(this,Na))}),t.set(e,r)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:t}=this;if(!t.has(e))return;t.get(e)(),t.delete(e),Object.values(p).forEach(a=>{e.removeEventListener(a,A(this,Na))})}registerMediaStateReceiver(e){if(!e)return;const t=this.mediaStateReceivers;t.indexOf(e)>-1||(t.push(e),A(this,L)&&Object.entries(A(this,L).getState()).forEach(([a,r])=>{_l([e],a,r)}))}unregisterMediaStateReceiver(e){const t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",Re(this,Ba,Cn))}disableHotkeys(){this.removeEventListener("keydown",Re(this,Ba,Cn)),this.removeEventListener("keyup",Re(this,_t,ui))}get hotkeys(){return P(this,c.HOTKEYS)}set hotkeys(e){U(this,c.HOTKEYS,e)}keyboardShortcutHandler(e){var t,i,a,r,n,o,l,u,h;const f=e.target;if(((a=(i=(t=f.getAttribute(c.KEYS_USED))==null?void 0:t.split(" "))!=null?i:f?.keysUsed)!=null?a:[]).map(_=>_==="Space"?" ":_).filter(Boolean).includes(e.key))return;let m,v,T;if(!(A(this,je).contains(`no${e.key.toLowerCase()}`)||e.key===" "&&A(this,je).contains("nospace")||e.shiftKey&&(e.key==="/"||e.key==="?")&&A(this,je).contains("noshift+/")))switch(e.key){case" ":case"k":m=A(this,L).getState().mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new d.CustomEvent(m,{composed:!0,bubbles:!0}));break;case"m":m=this.mediaStore.getState().mediaVolumeLevel==="off"?p.MEDIA_UNMUTE_REQUEST:p.MEDIA_MUTE_REQUEST,this.dispatchEvent(new d.CustomEvent(m,{composed:!0,bubbles:!0}));break;case"f":m=this.mediaStore.getState().mediaIsFullscreen?p.MEDIA_EXIT_FULLSCREEN_REQUEST:p.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new d.CustomEvent(m,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new d.CustomEvent(p.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{const _=this.hasAttribute(c.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(c.KEYBOARD_BACKWARD_SEEK_OFFSET):pl;v=Math.max(((r=this.mediaStore.getState().mediaCurrentTime)!=null?r:0)-_,0),T=new d.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(T);break}case"ArrowRight":case"l":{const _=this.hasAttribute(c.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(c.KEYBOARD_FORWARD_SEEK_OFFSET):pl;v=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)+_,0),T=new d.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(T);break}case"ArrowUp":{const _=this.hasAttribute(c.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(c.KEYBOARD_UP_VOLUME_STEP):El;v=Math.min(((o=this.mediaStore.getState().mediaVolume)!=null?o:1)+_,1),T=new d.CustomEvent(p.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(T);break}case"ArrowDown":{const _=this.hasAttribute(c.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(c.KEYBOARD_DOWN_VOLUME_STEP):El;v=Math.max(((l=this.mediaStore.getState().mediaVolume)!=null?l:1)-_,0),T=new d.CustomEvent(p.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(T);break}case"<":{const _=(u=this.mediaStore.getState().mediaPlaybackRate)!=null?u:1;v=Math.max(_-fl,rh).toFixed(2),T=new d.CustomEvent(p.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(T);break}case">":{const _=(h=this.mediaStore.getState().mediaPlaybackRate)!=null?h:1;v=Math.min(_+fl,nh).toFixed(2),T=new d.CustomEvent(p.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(T);break}case"/":case"?":{e.shiftKey&&Re(this,Rn,Rd).call(this);break}case"p":{m=this.mediaStore.getState().mediaIsPip?p.MEDIA_EXIT_PIP_REQUEST:p.MEDIA_ENTER_PIP_REQUEST,T=new d.CustomEvent(m,{composed:!0,bubbles:!0}),this.dispatchEvent(T);break}}}};je=new WeakMap;Hi=new WeakMap;L=new WeakMap;Et=new WeakMap;Bi=new WeakMap;Ae=new WeakMap;Na=new WeakMap;Ha=new WeakSet;Ln=function(){var e;this.mediaStore=ah({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(c.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(c.DEFAULT_DURATION)?+this.getAttribute(c.DEFAULT_DURATION):void 0,defaultStreamType:(e=this.getAttribute(c.DEFAULT_STREAM_TYPE))!=null?e:void 0,liveEdgeOffset:this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(c.SEEK_TO_LIVE_OFFSET):this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(c.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(c.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(c.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(c.NO_SUBTITLES_LANG_PREF)}})};_t=new WeakSet;ui=function(e){const{key:t,shiftKey:i}=e;if(!(i&&(t==="/"||t==="?")||Dd.includes(t))){this.removeEventListener("keyup",Re(this,_t,ui));return}this.keyboardShortcutHandler(e)};Ba=new WeakSet;Cn=function(e){var t;const{metaKey:i,altKey:a,key:r,shiftKey:n}=e,o=n&&(r==="/"||r==="?");if(o&&((t=A(this,Et))!=null&&t.open)){this.removeEventListener("keyup",Re(this,_t,ui));return}if(i||a||!o&&!Dd.includes(r)){this.removeEventListener("keyup",Re(this,_t,ui));return}const l=e.target,u=l instanceof HTMLElement&&(l.tagName.toLowerCase()==="media-volume-range"||l.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!(A(this,je).contains(`no${r.toLowerCase()}`)||r===" "&&A(this,je).contains("nospace"))&&!u&&e.preventDefault(),this.addEventListener("keyup",Re(this,_t,ui),{once:!0})};Rn=new WeakSet;Rd=function(){A(this,Et)||(Be(this,Et,V.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(A(this,Et))),A(this,Et).open=!0};var oh=Object.values(s),lh=Object.values(rd),xd=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&((t=e.nodeName)!=null&&t.includes("-"))&&(d.customElements.upgrade(e),{observedAttributes:n}=e.constructor);const o=(r=(a=(i=e?.getAttribute)==null?void 0:i.call(e,w.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||o)?(n||o).filter(l=>oh.includes(l)):[]},dh=e=>{var t,i;return(t=e.nodeName)!=null&&t.includes("-")&&d.customElements.get((i=e.nodeName)==null?void 0:i.toLowerCase())&&!(e instanceof d.customElements.get(e.nodeName.toLowerCase()))&&d.customElements.upgrade(e),lh.some(a=>a in e)},Dn=e=>dh(e)||!!xd(e).length,gl=e=>{var t;return(t=e?.join)==null?void 0:t.call(e,":")},bl={[s.MEDIA_SUBTITLES_LIST]:oa,[s.MEDIA_SUBTITLES_SHOWING]:oa,[s.MEDIA_SEEKABLE]:gl,[s.MEDIA_BUFFERED]:e=>e?.map(gl).join(" "),[s.MEDIA_PREVIEW_COORDS]:e=>e?.join(" "),[s.MEDIA_RENDITION_LIST]:lc,[s.MEDIA_AUDIO_TRACK_LIST]:hc},uh=async(e,t,i)=>{var a,r;if(e.isConnected||await od(0),typeof i=="boolean"||i==null)return I(e,t,i);if(typeof i=="number")return B(e,t,i);if(typeof i=="string")return U(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);const n=(r=(a=bl[t])==null?void 0:a.call(bl,i))!=null?r:i;return e.setAttribute(t,n)},ch=e=>{var t;return!!((t=e.closest)!=null&&t.call(e,'*[slot="media"]'))},dt=(e,t)=>{if(ch(e))return;const i=(r,n)=>{var o,l;Dn(r)&&n(r);const{children:u=[]}=r??{},h=(l=(o=r?.shadowRoot)==null?void 0:o.children)!=null?l:[];[...u,...h].forEach(b=>dt(b,n))},a=e?.nodeName.toLowerCase();if(a.includes("-")&&!Dn(e)){d.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},_l=(e,t,i)=>{e.forEach(a=>{if(t in a){a[t]=i;return}const r=xd(a),n=t.toLowerCase();r.includes(n)&&uh(a,n,i)})},hh=(e,t,i)=>{dt(e,t);const a=f=>{var b;const m=(b=f?.composedPath()[0])!=null?b:f.target;t(m)},r=f=>{var b;const m=(b=f?.composedPath()[0])!=null?b:f.target;i(m)};e.addEventListener(p.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(p.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=f=>{f.forEach(b=>{const{addedNodes:m=[],removedNodes:v=[],type:T,target:k,attributeName:_}=b;T==="childList"?(Array.prototype.forEach.call(m,x=>dt(x,t)),Array.prototype.forEach.call(v,x=>dt(x,i))):T==="attributes"&&_===w.MEDIA_CHROME_ATTRIBUTES&&(Dn(k)?t(k):i(k))})};let o=[];const l=f=>{const b=f.target;b.name!=="media"&&(o.forEach(m=>dt(m,i)),o=[...b.assignedElements({flatten:!0})],o.forEach(m=>dt(m,t)))};e.addEventListener("slotchange",l);const u=new MutationObserver(n);return u.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{dt(e,i),e.removeEventListener("slotchange",l),u.disconnect(),e.removeEventListener(p.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(p.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};d.customElements.get("media-controller")||d.customElements.define("media-controller",sh);var Dt={PLACEMENT:"placement",BOUNDS:"bounds"};function mh(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}var an=class extends d.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!Ed(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const t=this.placement;if(t==="left"||t==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const i=getComputedStyle(this),a=(e=Ti(this,"#"+this.bounds))!=null?e:ee(this);if(!a)return;const{x:r,width:n}=a.getBoundingClientRect(),{x:o,width:l}=this.getBoundingClientRect(),u=o+l,h=r+n,f=i.getPropertyValue("--media-tooltip-offset-x"),b=f?parseFloat(f.replace("px","")):0,m=i.getPropertyValue("--media-tooltip-container-margin"),v=m?parseFloat(m.replace("px","")):0,T=o-r+b-v,k=u-h+b+v;if(T<0){this.style.setProperty("--media-tooltip-offset-x",`${T}px`);return}if(k>0){this.style.setProperty("--media-tooltip-offset-x",`${k}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[Dt.PLACEMENT,Dt.BOUNDS]}get placement(){return P(this,Dt.PLACEMENT)}set placement(e){U(this,Dt.PLACEMENT,e)}get bounds(){return P(this,Dt.BOUNDS)}set bounds(e){U(this,Dt.BOUNDS,e)}};an.shadowRootOptions={mode:"open"};an.getTemplateHTML=mh;d.customElements.get("media-tooltip")||d.customElements.define("media-tooltip",an);var Al=an,Ps=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},F=(e,t,i)=>(Ps(e,t,"read from private field"),i?i.call(e):t.get(e)),xt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Aa=(e,t,i,a)=>(Ps(e,t,"write to private field"),t.set(e,i),i),vh=(e,t,i)=>(Ps(e,t,"access private method"),i),Te,ni,et,Ft,Wa,xn,Od,Ke={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function ph(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${Al.shadowRootOptions.mode}">
          ${Al.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `}function Eh(e,t){return`
    <slot></slot>
  `}function fh(){return""}var Q=class extends d.HTMLElement{constructor(){if(super(),xt(this,xn),xt(this,Te,void 0),this.preventClick=!1,this.tooltipEl=null,xt(this,ni,e=>{this.preventClick||this.handleClick(e),setTimeout(F(this,et),0)}),xt(this,et,()=>{var e,t;(t=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||t.call(e)}),xt(this,Ft,e=>{const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",F(this,Ft));return}this.preventClick||this.handleClick(e)}),xt(this,Wa,e=>{const{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",F(this,Ft));return}this.addEventListener("keyup",F(this,Ft),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=se(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",Ke.TOOLTIP_PLACEMENT,w.MEDIA_CONTROLLER,s.MEDIA_LANG]}enable(){this.addEventListener("click",F(this,ni)),this.addEventListener("keydown",F(this,Wa)),this.tabIndex=0}disable(){this.removeEventListener("click",F(this,ni)),this.removeEventListener("keydown",F(this,Wa)),this.removeEventListener("keyup",F(this,Ft)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===w.MEDIA_CONTROLLER?(t&&((r=(a=F(this,Te))==null?void 0:a.unassociateElement)==null||r.call(a,this),Aa(this,Te,null)),i&&this.isConnected&&(Aa(this,Te,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=F(this,Te))==null?void 0:o.associateElement)==null||l.call(o,this))):e==="disabled"&&i!==t?i==null?this.enable():this.disable():e===Ke.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===s.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),F(this,et).call(this)}connectedCallback(){var e,t,i;const{style:a}=G(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const r=this.getAttribute(w.MEDIA_CONTROLLER);r&&(Aa(this,Te,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(i=(t=F(this,Te))==null?void 0:t.associateElement)==null||i.call(t,this)),d.customElements.whenDefined("media-tooltip").then(()=>vh(this,xn,Od).call(this))}disconnectedCallback(){var e,t;this.disable(),(t=(e=F(this,Te))==null?void 0:e.unassociateElement)==null||t.call(e,this),Aa(this,Te,null),this.removeEventListener("mouseenter",F(this,et)),this.removeEventListener("focus",F(this,et)),this.removeEventListener("click",F(this,ni))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return P(this,Ke.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){U(this,Ke.TOOLTIP_PLACEMENT,e)}get mediaController(){return P(this,w.MEDIA_CONTROLLER)}set mediaController(e){U(this,w.MEDIA_CONTROLLER,e)}get disabled(){return y(this,Ke.DISABLED)}set disabled(e){I(this,Ke.DISABLED,e)}get noTooltip(){return y(this,Ke.NO_TOOLTIP)}set noTooltip(e){I(this,Ke.NO_TOOLTIP,e)}handleClick(e){}};Te=new WeakMap;ni=new WeakMap;et=new WeakMap;Ft=new WeakMap;Wa=new WeakMap;xn=new WeakSet;Od=function(){this.addEventListener("mouseenter",F(this,et)),this.addEventListener("focus",F(this,et)),this.addEventListener("click",F(this,ni));const e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)};Q.shadowRootOptions={mode:"open"};Q.getTemplateHTML=ph;Q.getSlotTemplateHTML=Eh;Q.getTooltipContentHTML=fh;d.customElements.get("media-chrome-button")||d.customElements.define("media-chrome-button",Q);var Tl=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function gh(e){return`
    <style>
      :host([${s.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${s.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${s.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${s.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Tl}</slot>
      <slot name="exit">${Tl}</slot>
    </slot>
  `}function bh(){return`
    <slot name="tooltip-enter">${E("start airplay")}</slot>
    <slot name="tooltip-exit">${E("stop airplay")}</slot>
  `}var kl=e=>{const t=e.mediaIsAirplaying?E("stop airplay"):E("start airplay");e.setAttribute("aria-label",t)},Us=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_AIRPLAYING,s.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),kl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_IS_AIRPLAYING&&kl(this)}get mediaIsAirplaying(){return y(this,s.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){I(this,s.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return P(this,s.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){U(this,s.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new d.CustomEvent(p.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}};Us.getSlotTemplateHTML=gh;Us.getTooltipContentHTML=bh;d.customElements.get("media-airplay-button")||d.customElements.define("media-airplay-button",Us);var _h=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Ah=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function Th(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${_h}</slot>
      <slot name="off">${Ah}</slot>
    </slot>
  `}function kh(){return`
    <slot name="tooltip-enable">${E("Enable captions")}</slot>
    <slot name="tooltip-disable">${E("Disable captions")}</slot>
  `}var Sl=e=>{e.setAttribute("aria-checked",Id(e).toString())},Ns=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",E("closed captions")),Sl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_SUBTITLES_SHOWING&&Sl(this)}get mediaSubtitlesList(){return yl(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Il(this,s.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return yl(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Il(this,s.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new d.CustomEvent(p.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}};Ns.getSlotTemplateHTML=Th;Ns.getTooltipContentHTML=kh;var yl=(e,t)=>{const i=e.getAttribute(t);return i?en(i):[]},Il=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=oa(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};d.customElements.get("media-captions-button")||d.customElements.define("media-captions-button",Ns);var Sh='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',yh='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function Ih(e){return`
    <style>
      :host([${s.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${s.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${s.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${s.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Sh}</slot>
      <slot name="exit">${yh}</slot>
    </slot>
  `}function Mh(){return`
    <slot name="tooltip-enter">${E("Start casting")}</slot>
    <slot name="tooltip-exit">${E("Stop casting")}</slot>
  `}var Ml=e=>{const t=e.mediaIsCasting?E("stop casting"):E("start casting");e.setAttribute("aria-label",t)},Hs=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_CASTING,s.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Ml(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_IS_CASTING&&Ml(this)}get mediaIsCasting(){return y(this,s.MEDIA_IS_CASTING)}set mediaIsCasting(e){I(this,s.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return P(this,s.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){U(this,s.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?p.MEDIA_EXIT_CAST_REQUEST:p.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}};Hs.getSlotTemplateHTML=Ih;Hs.getTooltipContentHTML=Mh;d.customElements.get("media-cast-button")||d.customElements.define("media-cast-button",Hs);var Bs=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},At=(e,t,i)=>(Bs(e,t,"read from private field"),t.get(e)),Ue=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ws=(e,t,i,a)=>(Bs(e,t,"write to private field"),t.set(e,i),i),st=(e,t,i)=>(Bs(e,t,"access private method"),i),Cr,la,wt,$a,On,Pn,Pd,Un,Ud,Nn,Nd,Hn,Hd,Bn,Bd;function wh(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `}function Lh(e){return`
    <slot id="content"></slot>
  `}var wi={OPEN:"open",ANCHOR:"anchor"},ki=class extends d.HTMLElement{constructor(){super(),Ue(this,$a),Ue(this,Pn),Ue(this,Un),Ue(this,Nn),Ue(this,Hn),Ue(this,Bn),Ue(this,Cr,!1),Ue(this,la,null),Ue(this,wt,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[wi.OPEN,wi.ANCHOR]}get open(){return y(this,wi.OPEN)}set open(e){I(this,wi.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":st(this,Nn,Nd).call(this,e);break;case"focusout":st(this,Hn,Hd).call(this,e);break;case"keydown":st(this,Bn,Bd).call(this,e);break}}connectedCallback(){st(this,$a,On).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){st(this,$a,On).call(this),e===wi.OPEN&&i!==t&&(this.open?st(this,Pn,Pd).call(this):st(this,Un,Ud).call(this))}focus(){Ws(this,la,Ms());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;const i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');i?.focus()}get keysUsed(){return["Escape","Tab"]}};Cr=new WeakMap;la=new WeakMap;wt=new WeakMap;$a=new WeakSet;On=function(){if(!At(this,Cr)&&(Ws(this,Cr,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const e=se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{const{style:t}=G(this.shadowRoot,":host");t.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};Pn=new WeakSet;Pd=function(){var e;(e=At(this,wt))==null||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};Un=new WeakSet;Ud=function(){var e;(e=At(this,wt))==null||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};Nn=new WeakSet;Nd=function(e){Ws(this,wt,e.relatedTarget),Fe(this,e.relatedTarget)||(this.open=!this.open)};Hn=new WeakSet;Hd=function(e){var t;Fe(this,e.relatedTarget)||((t=At(this,la))==null||t.focus(),At(this,wt)&&At(this,wt)!==e.relatedTarget&&this.open&&(this.open=!1))};Bn=new WeakSet;Bd=function(e){var t,i,a,r,n;const{key:o,ctrlKey:l,altKey:u,metaKey:h}=e;l||u||h||this.keysUsed.includes(o)&&(e.preventDefault(),e.stopPropagation(),o==="Tab"?(e.shiftKey?(i=(t=this.previousElementSibling)==null?void 0:t.focus)==null||i.call(t):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):o==="Escape"&&((n=At(this,la))==null||n.focus(),this.open=!1))};ki.shadowRootOptions={mode:"open"};ki.getTemplateHTML=wh;ki.getSlotTemplateHTML=Lh;d.customElements.get("media-chrome-dialog")||d.customElements.define("media-chrome-dialog",ki);var $s=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},H=(e,t,i)=>($s(e,t,"read from private field"),i?i.call(e):t.get(e)),z=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ze=(e,t,i,a)=>($s(e,t,"write to private field"),t.set(e,i),i),pe=(e,t,i)=>($s(e,t,"access private method"),i),ke,rn,Fa,Va,Ee,Rr,Ka,Ga,qa,Fs,Wd,Za,Wn,Ya,$n,Dr,Vs,Fn,$d,Vn,Fd,Kn,Vd,Gn,Kd;function Ch(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `}var Si=class extends d.HTMLElement{constructor(){if(super(),z(this,Fs),z(this,Za),z(this,Ya),z(this,Dr),z(this,Fn),z(this,Vn),z(this,Kn),z(this,Gn),z(this,ke,void 0),z(this,rn,void 0),z(this,Fa,void 0),z(this,Va,void 0),z(this,Ee,{}),z(this,Rr,[]),z(this,Ka,()=>{if(this.range.matches(":focus-visible")){const{style:e}=G(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),z(this,Ga,()=>{const{style:e}=G(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),z(this,qa,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=se(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),Ze(this,Fa,this.shadowRoot.querySelector("#startpoint")),Ze(this,Va,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",w.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===w.MEDIA_CONTROLLER?(t&&((r=(a=H(this,ke))==null?void 0:a.unassociateElement)==null||r.call(a,this),Ze(this,ke,null)),i&&this.isConnected&&(Ze(this,ke,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=H(this,ke))==null?void 0:o.associateElement)==null||l.call(o,this))):(e==="disabled"||e==="aria-disabled"&&t!==i)&&(i==null?(this.range.removeAttribute(e),pe(this,Za,Wn).call(this)):(this.range.setAttribute(e,i),pe(this,Ya,$n).call(this)))}connectedCallback(){var e,t,i;const{style:a}=G(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),H(this,Ee).pointer=G(this.shadowRoot,"#pointer"),H(this,Ee).progress=G(this.shadowRoot,"#progress"),H(this,Ee).thumb=G(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),H(this,Ee).activeSegment=G(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const r=this.getAttribute(w.MEDIA_CONTROLLER);r&&(Ze(this,ke,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(i=(t=H(this,ke))==null?void 0:t.associateElement)==null||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",H(this,Ka)),this.shadowRoot.addEventListener("focusout",H(this,Ga)),pe(this,Za,Wn).call(this),Ei(this.container,H(this,qa))}disconnectedCallback(){var e,t;pe(this,Ya,$n).call(this),(t=(e=H(this,ke))==null?void 0:e.unassociateElement)==null||t.call(e,this),Ze(this,ke,null),this.shadowRoot.removeEventListener("focusin",H(this,Ka)),this.shadowRoot.removeEventListener("focusout",H(this,Ga)),fi(this.container,H(this,qa))}updatePointerBar(e){var t;(t=H(this,Ee).pointer)==null||t.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,t;const i=this.range.valueAsNumber*100;(e=H(this,Ee).progress)==null||e.style.setProperty("width",`${i}%`),(t=H(this,Ee).thumb)==null||t.style.setProperty("left",`${i}%`)}updateSegments(e){const t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!e?.length),!e?.length)return;const i=[...new Set([+this.range.min,...e.flatMap(r=>[r.start,r.end]),+this.range.max])];Ze(this,Rr,[...i]);const a=i.pop();for(const[r,n]of i.entries()){const[o,l]=[r===0,r===i.length-1],u=o?"calc(var(--segments-gap) / -1)":`${n*100}%`,f=`calc(${((l?a:i[r+1])-n)*100}%${o||l?"":" - var(--segments-gap)"})`,b=V.createElementNS("http://www.w3.org/2000/svg","rect"),m=ws(this.shadowRoot,`#segments-clipping rect:nth-child(${r+1})`);m.style.setProperty("x",u),m.style.setProperty("width",f),t.append(b)}}getPointerRatio(e){return kc(e.clientX,e.clientY,H(this,Fa).getBoundingClientRect(),H(this,Va).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":pe(this,Gn,Kd).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":pe(this,Fn,$d).call(this,e);break;case"pointerdown":pe(this,Dr,Vs).call(this,e);break;case"pointerup":pe(this,Vn,Fd).call(this);break;case"pointerleave":pe(this,Kn,Vd).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}};ke=new WeakMap;rn=new WeakMap;Fa=new WeakMap;Va=new WeakMap;Ee=new WeakMap;Rr=new WeakMap;Ka=new WeakMap;Ga=new WeakMap;qa=new WeakMap;Fs=new WeakSet;Wd=function(e){const t=H(this,Ee).activeSegment;if(!t)return;const i=this.getPointerRatio(e),r=`#segments-clipping rect:nth-child(${H(this,Rr).findIndex((n,o,l)=>{const u=l[o+1];return u!=null&&i>=n&&i<=u})+1})`;(t.selectorText!=r||!t.style.transform)&&(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};Za=new WeakSet;Wn=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};Ya=new WeakSet;$n=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(e=d.window)==null||e.removeEventListener("pointerup",this),(t=d.window)==null||t.removeEventListener("pointermove",this)};Dr=new WeakSet;Vs=function(e){var t;Ze(this,rn,e.composedPath().includes(this.range)),(t=d.window)==null||t.addEventListener("pointerup",this)};Fn=new WeakSet;$d=function(e){var t;e.pointerType!=="mouse"&&pe(this,Dr,Vs).call(this,e),this.addEventListener("pointerleave",this),(t=d.window)==null||t.addEventListener("pointermove",this)};Vn=new WeakSet;Fd=function(){var e;(e=d.window)==null||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Kn=new WeakSet;Vd=function(){var e,t;this.removeEventListener("pointerleave",this),(e=d.window)==null||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(t=H(this,Ee).activeSegment)==null||t.style.removeProperty("transform")};Gn=new WeakSet;Kd=function(e){e.pointerType==="pen"&&e.buttons===0||(this.toggleAttribute("dragging",e.buttons===1||e.pointerType!=="mouse"),this.updatePointerBar(e),pe(this,Fs,Wd).call(this,e),this.dragging&&(e.pointerType!=="mouse"||!H(this,rn))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};Si.shadowRootOptions={mode:"open"};Si.getTemplateHTML=Ch;d.customElements.get("media-chrome-range")||d.customElements.define("media-chrome-range",Si);var Gd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ta=(e,t,i)=>(Gd(e,t,"read from private field"),i?i.call(e):t.get(e)),Rh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ka=(e,t,i,a)=>(Gd(e,t,"write to private field"),t.set(e,i),i),Se;function Dh(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}var Ks=class extends d.HTMLElement{constructor(){if(super(),Rh(this,Se,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[w.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===w.MEDIA_CONTROLLER&&(t&&((r=(a=Ta(this,Se))==null?void 0:a.unassociateElement)==null||r.call(a,this),ka(this,Se,null)),i&&this.isConnected&&(ka(this,Se,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=Ta(this,Se))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,t,i;const a=this.getAttribute(w.MEDIA_CONTROLLER);a&&(ka(this,Se,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(i=(t=Ta(this,Se))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=Ta(this,Se))==null?void 0:e.unassociateElement)==null||t.call(e,this),ka(this,Se,null)}};Se=new WeakMap;Ks.shadowRootOptions={mode:"open"};Ks.getTemplateHTML=Dh;d.customElements.get("media-control-bar")||d.customElements.define("media-control-bar",Ks);var qd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Sa=(e,t,i)=>(qd(e,t,"read from private field"),i?i.call(e):t.get(e)),xh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ya=(e,t,i,a)=>(qd(e,t,"write to private field"),t.set(e,i),i),ye;function Oh(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `}function Ph(e,t){return`
    <slot></slot>
  `}var at=class extends d.HTMLElement{constructor(){if(super(),xh(this,ye,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[w.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===w.MEDIA_CONTROLLER&&(t&&((r=(a=Sa(this,ye))==null?void 0:a.unassociateElement)==null||r.call(a,this),ya(this,ye,null)),i&&this.isConnected&&(ya(this,ye,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=Sa(this,ye))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,t,i;const{style:a}=G(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const r=this.getAttribute(w.MEDIA_CONTROLLER);r&&(ya(this,ye,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(i=(t=Sa(this,ye))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=Sa(this,ye))==null?void 0:e.unassociateElement)==null||t.call(e,this),ya(this,ye,null)}};ye=new WeakMap;at.shadowRootOptions={mode:"open"};at.getTemplateHTML=Oh;at.getSlotTemplateHTML=Ph;d.customElements.get("media-text-display")||d.customElements.define("media-text-display",at);var Zd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},wl=(e,t,i)=>(Zd(e,t,"read from private field"),i?i.call(e):t.get(e)),Uh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Nh=(e,t,i,a)=>(Zd(e,t,"write to private field"),t.set(e,i),i),Wi;function Hh(e,t){return`
    <slot>${tt(t.mediaDuration)}</slot>
  `}var Yd=class extends at{constructor(){var e;super(),Uh(this,Wi,void 0),Nh(this,Wi,this.shadowRoot.querySelector("slot")),wl(this,Wi).textContent=tt((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===s.MEDIA_DURATION&&(wl(this,Wi).textContent=tt(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return O(this,s.MEDIA_DURATION)}set mediaDuration(e){B(this,s.MEDIA_DURATION,e)}};Wi=new WeakMap;Yd.getSlotTemplateHTML=Hh;d.customElements.get("media-duration-display")||d.customElements.define("media-duration-display",Yd);var Bh={2:E("Network Error"),3:E("Decode Error"),4:E("Source Not Supported"),5:E("Encryption Error")},Wh={2:E("A network error caused the media download to fail."),3:E("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:E("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:E("The media is encrypted and there are no keys to decrypt it.")},Qd=e=>{var t,i;return e.code===1?null:{title:(t=Bh[e.code])!=null?t:`Error ${e.code}`,message:(i=Wh[e.code])!=null?i:e.message}},zd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},$h=(e,t,i)=>(zd(e,t,"read from private field"),i?i.call(e):t.get(e)),Fh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Vh=(e,t,i,a)=>(zd(e,t,"write to private field"),t.set(e,i),i),Qa;function Kh(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${Xd({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `}function Gh(e){return e.code&&Qd(e)!==null}function Xd(e){var t;const{title:i,message:a}=(t=Qd(e))!=null?t:{};let r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}var Ll=[s.MEDIA_ERROR_CODE,s.MEDIA_ERROR_MESSAGE],Gs=class extends ki{constructor(){super(...arguments),Fh(this,Qa,null)}static get observedAttributes(){return[...super.observedAttributes,...Ll]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!Ll.includes(e))return;const r=(a=this.mediaError)!=null?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=Gh(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){return $h(this,Qa)}set mediaError(e){Vh(this,Qa,e)}get mediaErrorCode(){return O(this,"mediaerrorcode")}set mediaErrorCode(e){B(this,"mediaerrorcode",e)}get mediaErrorMessage(){return P(this,"mediaerrormessage")}set mediaErrorMessage(e){U(this,"mediaerrormessage",e)}};Qa=new WeakMap;Gs.getSlotTemplateHTML=Kh;Gs.formatErrorMessage=Xd;d.customElements.get("media-error-dialog")||d.customElements.define("media-error-dialog",Gs);var qh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ge=(e,t,i)=>(qh(e,t,"read from private field"),i?i.call(e):t.get(e)),Cl=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Vt,Kt;function Zh(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${Yh()}
    </slot>
  `}function Yh(){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:i,description:a})=>`
      <tr>
        <td>
          <div class="key-combo">${i.map((n,o)=>o>0?`<span class="key-separator">or</span><span class="key">${n}</span>`:`<span class="key">${n}</span>`).join("")}</div>
        </td>
        <td class="description">${a}</td>
      </tr>
    `).join("")}</table>
  `}var Jd=class extends ki{constructor(){super(...arguments),Cl(this,Vt,e=>{var t;if(!this.open)return;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("#content");if(!i)return;const a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),Cl(this,Kt,e=>{if(!this.open)return;const t=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||t)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",Ge(this,Vt)),document.addEventListener("keydown",Ge(this,Kt)))}disconnectedCallback(){this.removeEventListener("click",Ge(this,Vt)),document.removeEventListener("keydown",Ge(this,Kt))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="open"&&(this.open?(this.addEventListener("click",Ge(this,Vt)),document.addEventListener("keydown",Ge(this,Kt))):(this.removeEventListener("click",Ge(this,Vt)),document.removeEventListener("keydown",Ge(this,Kt))))}};Vt=new WeakMap;Kt=new WeakMap;Jd.getSlotTemplateHTML=Zh;d.customElements.get("media-keyboard-shortcuts-dialog")||d.customElements.define("media-keyboard-shortcuts-dialog",Jd);var jd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Qh=(e,t,i)=>(jd(e,t,"read from private field"),t.get(e)),zh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Xh=(e,t,i,a)=>(jd(e,t,"write to private field"),t.set(e,i),i),za,Jh=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,jh=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function em(e){return`
    <style>
      :host([${s.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${s.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${s.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${s.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Jh}</slot>
      <slot name="exit">${jh}</slot>
    </slot>
  `}function tm(){return`
    <slot name="tooltip-enter">${E("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${E("Exit fullscreen mode")}</slot>
  `}var Rl=e=>{const t=e.mediaIsFullscreen?E("exit fullscreen mode"):E("enter fullscreen mode");e.setAttribute("aria-label",t)},qs=class extends Q{constructor(){super(...arguments),zh(this,za,null)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_FULLSCREEN,s.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Rl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_IS_FULLSCREEN&&Rl(this)}get mediaFullscreenUnavailable(){return P(this,s.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){U(this,s.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return y(this,s.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){I(this,s.MEDIA_IS_FULLSCREEN,e)}handleClick(e){Xh(this,za,e);const t=Qh(this,za)instanceof PointerEvent,i=this.mediaIsFullscreen?new d.CustomEvent(p.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new d.CustomEvent(p.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(i)}};za=new WeakMap;qs.getSlotTemplateHTML=em;qs.getTooltipContentHTML=tm;d.customElements.get("media-fullscreen-button")||d.customElements.define("media-fullscreen-button",qs);var{MEDIA_TIME_IS_LIVE:Xa,MEDIA_PAUSED:Ji}=s,{MEDIA_SEEK_TO_LIVE_REQUEST:im,MEDIA_PLAY_REQUEST:am}=p,rm='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>';function nm(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Xa}]:not([${Ji}])) slot[name=indicator] > *,
      :host([${Xa}]:not([${Ji}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Xa}]:not([${Ji}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${rm}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${E("live")}</slot>
  `}var Dl=e=>{var t;const i=e.mediaPaused||!e.mediaTimeIsLive,a=E(i?"seek to live":"playing live");e.setAttribute("aria-label",a);const r=(t=e.shadowRoot)==null?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=E("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")},eu=class extends Q{static get observedAttributes(){return[...super.observedAttributes,Xa,Ji]}connectedCallback(){super.connectedCallback(),Dl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),Dl(this)}get mediaPaused(){return y(this,s.MEDIA_PAUSED)}set mediaPaused(e){I(this,s.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return y(this,s.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){I(this,s.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new d.CustomEvent(im,{composed:!0,bubbles:!0})),this.hasAttribute(Ji)&&this.dispatchEvent(new d.CustomEvent(am,{composed:!0,bubbles:!0})))}};eu.getSlotTemplateHTML=nm;d.customElements.get("media-live-button")||d.customElements.define("media-live-button",eu);var tu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Li=(e,t,i)=>(tu(e,t,"read from private field"),i?i.call(e):t.get(e)),xl=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ci=(e,t,i,a)=>(tu(e,t,"write to private field"),t.set(e,i),i),Ie,Ja,Ia={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},iu=500,sm=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function om(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${iu}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${sm}</slot>
    <div id="status" role="status" aria-live="polite">${E("media loading")}</div>
  `}var Zs=class extends d.HTMLElement{constructor(){if(super(),xl(this,Ie,void 0),xl(this,Ja,iu),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[w.MEDIA_CONTROLLER,s.MEDIA_PAUSED,s.MEDIA_LOADING,Ia.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===Ia.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===w.MEDIA_CONTROLLER&&(t&&((r=(a=Li(this,Ie))==null?void 0:a.unassociateElement)==null||r.call(a,this),Ci(this,Ie,null)),i&&this.isConnected&&(Ci(this,Ie,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=Li(this,Ie))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,t,i;const a=this.getAttribute(w.MEDIA_CONTROLLER);a&&(Ci(this,Ie,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(i=(t=Li(this,Ie))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=Li(this,Ie))==null?void 0:e.unassociateElement)==null||t.call(e,this),Ci(this,Ie,null)}get loadingDelay(){return Li(this,Ja)}set loadingDelay(e){Ci(this,Ja,e);const{style:t}=G(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return y(this,s.MEDIA_PAUSED)}set mediaPaused(e){I(this,s.MEDIA_PAUSED,e)}get mediaLoading(){return y(this,s.MEDIA_LOADING)}set mediaLoading(e){I(this,s.MEDIA_LOADING,e)}get mediaController(){return P(this,w.MEDIA_CONTROLLER)}set mediaController(e){U(this,w.MEDIA_CONTROLLER,e)}get noAutohide(){return y(this,Ia.NO_AUTOHIDE)}set noAutohide(e){I(this,Ia.NO_AUTOHIDE,e)}};Ie=new WeakMap;Ja=new WeakMap;Zs.shadowRootOptions={mode:"open"};Zs.getTemplateHTML=om;d.customElements.get("media-loading-indicator")||d.customElements.define("media-loading-indicator",Zs);var lm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Ol=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,dm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function um(e){return`
    <style>
      :host(:not([${s.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${s.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${s.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${s.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${s.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${s.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${s.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${lm}</slot>
      <slot name="low">${Ol}</slot>
      <slot name="medium">${Ol}</slot>
      <slot name="high">${dm}</slot>
    </slot>
  `}function cm(){return`
    <slot name="tooltip-mute">${E("Mute")}</slot>
    <slot name="tooltip-unmute">${E("Unmute")}</slot>
  `}var Pl=e=>{const t=e.mediaVolumeLevel==="off",i=E(t?"unmute":"mute");e.setAttribute("aria-label",i)},Ys=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),Pl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_VOLUME_LEVEL&&Pl(this)}get mediaVolumeLevel(){return P(this,s.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){U(this,s.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?p.MEDIA_UNMUTE_REQUEST:p.MEDIA_MUTE_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}};Ys.getSlotTemplateHTML=um;Ys.getTooltipContentHTML=cm;d.customElements.get("media-mute-button")||d.customElements.define("media-mute-button",Ys);var Ul=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function hm(e){return`
    <style>
      :host([${s.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${s.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${s.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${s.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Ul}</slot>
      <slot name="exit">${Ul}</slot>
    </slot>
  `}function mm(){return`
    <slot name="tooltip-enter">${E("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${E("Exit picture in picture mode")}</slot>
  `}var Nl=e=>{const t=e.mediaIsPip?E("exit picture in picture mode"):E("enter picture in picture mode");e.setAttribute("aria-label",t)},Qs=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_PIP,s.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Nl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_IS_PIP&&Nl(this)}get mediaPipUnavailable(){return P(this,s.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){U(this,s.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return y(this,s.MEDIA_IS_PIP)}set mediaIsPip(e){I(this,s.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?p.MEDIA_EXIT_PIP_REQUEST:p.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}};Qs.getSlotTemplateHTML=hm;Qs.getTooltipContentHTML=mm;d.customElements.get("media-pip-button")||d.customElements.define("media-pip-button",Qs);var vm=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ot=(e,t,i)=>(vm(e,t,"read from private field"),i?i.call(e):t.get(e)),pm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ye,hn={RATES:"rates"},au=[1,1.2,1.5,1.7,2],si=1;function Em(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||si}x</slot>
  `}function fm(){return E("Playback rate")}var zs=class extends Q{constructor(){var e;super(),pm(this,Ye,new Rs(this,hn.RATES,{defaultValue:au})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:si}x`}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE,hn.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===hn.RATES&&(Ot(this,Ye).value=i),e===s.MEDIA_PLAYBACK_RATE){const a=i?+i:Number.NaN,r=Number.isNaN(a)?si:a;this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",E("Playback rate {playbackRate}",{playbackRate:r}))}}get rates(){return Ot(this,Ye)}set rates(e){e?Array.isArray(e)?Ot(this,Ye).value=e.join(" "):typeof e=="string"&&(Ot(this,Ye).value=e):Ot(this,Ye).value=""}get mediaPlaybackRate(){return O(this,s.MEDIA_PLAYBACK_RATE,si)}set mediaPlaybackRate(e){B(this,s.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;const i=Array.from(Ot(this,Ye).values(),n=>+n).sort((n,o)=>n-o),a=(t=(e=i.find(n=>n>this.mediaPlaybackRate))!=null?e:i[0])!=null?t:si,r=new d.CustomEvent(p.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}};Ye=new WeakMap;zs.getSlotTemplateHTML=Em;zs.getTooltipContentHTML=fm;d.customElements.get("media-playback-rate-button")||d.customElements.define("media-playback-rate-button",zs);var gm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,bm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function _m(e){return`
    <style>
      :host([${s.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${s.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${s.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${s.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${gm}</slot>
      <slot name="pause">${bm}</slot>
    </slot>
  `}function Am(){return`
    <slot name="tooltip-play">${E("Play")}</slot>
    <slot name="tooltip-pause">${E("Pause")}</slot>
  `}var Hl=e=>{const t=e.mediaPaused?E("play"):E("pause");e.setAttribute("aria-label",t)},Xs=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PAUSED,s.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),Hl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===s.MEDIA_PAUSED||e===s.MEDIA_LANG)&&Hl(this)}get mediaPaused(){return y(this,s.MEDIA_PAUSED)}set mediaPaused(e){I(this,s.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}};Xs.getSlotTemplateHTML=_m;Xs.getTooltipContentHTML=Am;d.customElements.get("media-play-button")||d.customElements.define("media-play-button",Xs);var ge={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function Tm(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}var km=e=>{e.style.removeProperty("background-image")},Sm=(e,t)=>{e.style["background-image"]=`url('${t}')`},Js=class extends d.HTMLElement{static get observedAttributes(){return[ge.PLACEHOLDER_SRC,ge.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===ge.SRC&&(i==null?this.image.removeAttribute(ge.SRC):this.image.setAttribute(ge.SRC,i)),e===ge.PLACEHOLDER_SRC&&(i==null?km(this.image):Sm(this.image,i))}get placeholderSrc(){return P(this,ge.PLACEHOLDER_SRC)}set placeholderSrc(e){U(this,ge.SRC,e)}get src(){return P(this,ge.SRC)}set src(e){U(this,ge.SRC,e)}};Js.shadowRootOptions={mode:"open"};Js.getTemplateHTML=Tm;d.customElements.get("media-poster-image")||d.customElements.define("media-poster-image",Js);var ru=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ym=(e,t,i)=>(ru(e,t,"read from private field"),i?i.call(e):t.get(e)),Im=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Mm=(e,t,i,a)=>(ru(e,t,"write to private field"),t.set(e,i),i),ja,wm=class extends at{constructor(){super(),Im(this,ja,void 0),Mm(this,ja,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PREVIEW_CHAPTER,s.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===s.MEDIA_PREVIEW_CHAPTER||e===s.MEDIA_LANG)&&i!==t&&i!=null)if(ym(this,ja).textContent=i,i!==""){const a=E("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",a)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return P(this,s.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){U(this,s.MEDIA_PREVIEW_CHAPTER,e)}};ja=new WeakMap;d.customElements.get("media-preview-chapter-display")||d.customElements.define("media-preview-chapter-display",wm);var nu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ma=(e,t,i)=>(nu(e,t,"read from private field"),i?i.call(e):t.get(e)),Lm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},wa=(e,t,i,a)=>(nu(e,t,"write to private field"),t.set(e,i),i),Me;function Cm(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}var nn=class extends d.HTMLElement{constructor(){if(super(),Lm(this,Me,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[w.MEDIA_CONTROLLER,s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;const a=this.getAttribute(w.MEDIA_CONTROLLER);a&&(wa(this,Me,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(i=(t=Ma(this,Me))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=Ma(this,Me))==null?void 0:e.unassociateElement)==null||t.call(e,this),wa(this,Me,null)}attributeChangedCallback(e,t,i){var a,r,n,o,l;[s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===w.MEDIA_CONTROLLER&&(t&&((r=(a=Ma(this,Me))==null?void 0:a.unassociateElement)==null||r.call(a,this),wa(this,Me,null)),i&&this.isConnected&&(wa(this,Me,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=Ma(this,Me))==null?void 0:o.associateElement)==null||l.call(o,this)))}get mediaPreviewImage(){return P(this,s.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){U(this,s.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(s.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(t=>+t)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(s.MEDIA_PREVIEW_COORDS);return}this.setAttribute(s.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;const[i,a,r,n]=e,o=t.split("#")[0],l=getComputedStyle(this),{maxWidth:u,maxHeight:h,minWidth:f,minHeight:b}=l,m=Math.min(parseInt(u)/r,parseInt(h)/n),v=Math.max(parseInt(f)/r,parseInt(b)/n),T=m<1,k=T?m:v>1?v:1,{style:_}=G(this.shadowRoot,":host"),x=G(this.shadowRoot,"img").style,J=this.shadowRoot.querySelector("img"),nt=T?"min":"max";_.setProperty(`${nt}-width`,"initial","important"),_.setProperty(`${nt}-height`,"initial","important"),_.width=`${r*k}px`,_.height=`${n*k}px`;const Lt=()=>{x.width=`${this.imgWidth*k}px`,x.height=`${this.imgHeight*k}px`,x.display="block"};J.src!==o&&(J.onload=()=>{this.imgWidth=J.naturalWidth,this.imgHeight=J.naturalHeight,Lt()},J.src=o,Lt()),Lt(),x.transform=`translate(-${i*k}px, -${a*k}px)`}};Me=new WeakMap;nn.shadowRootOptions={mode:"open"};nn.getTemplateHTML=Cm;d.customElements.get("media-preview-thumbnail")||d.customElements.define("media-preview-thumbnail",nn);var Bl=nn,su=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Wl=(e,t,i)=>(su(e,t,"read from private field"),i?i.call(e):t.get(e)),Rm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Dm=(e,t,i,a)=>(su(e,t,"write to private field"),t.set(e,i),i),$i,xm=class extends at{constructor(){super(),Rm(this,$i,void 0),Dm(this,$i,this.shadowRoot.querySelector("slot")),Wl(this,$i).textContent=tt(0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_PREVIEW_TIME&&i!=null&&(Wl(this,$i).textContent=tt(parseFloat(i)))}get mediaPreviewTime(){return O(this,s.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){B(this,s.MEDIA_PREVIEW_TIME,e)}};$i=new WeakMap;d.customElements.get("media-preview-time-display")||d.customElements.define("media-preview-time-display",xm);var Pt={SEEK_OFFSET:"seekoffset"},mn=30,Om=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${e}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function Pm(e,t){return`
    <slot name="icon">${Om(t.seekOffset)}</slot>
  `}function Um(){return E("Seek backward")}var Nm=0,js=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_CURRENT_TIME,Pt.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=O(this,Pt.SEEK_OFFSET,mn)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===Pt.SEEK_OFFSET&&(this.seekOffset=O(this,Pt.SEEK_OFFSET,mn))}get seekOffset(){return O(this,Pt.SEEK_OFFSET,mn)}set seekOffset(e){B(this,Pt.SEEK_OFFSET,e),this.setAttribute("aria-label",E("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),vd(pd(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return O(this,s.MEDIA_CURRENT_TIME,Nm)}set mediaCurrentTime(e){B(this,s.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new d.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};js.getSlotTemplateHTML=Pm;js.getTooltipContentHTML=Um;d.customElements.get("media-seek-backward-button")||d.customElements.define("media-seek-backward-button",js);var Ut={SEEK_OFFSET:"seekoffset"},vn=30,Hm=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${e}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function Bm(e,t){return`
    <slot name="icon">${Hm(t.seekOffset)}</slot>
  `}function Wm(){return E("Seek forward")}var $m=0,eo=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_CURRENT_TIME,Ut.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=O(this,Ut.SEEK_OFFSET,vn)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===Ut.SEEK_OFFSET&&(this.seekOffset=O(this,Ut.SEEK_OFFSET,vn))}get seekOffset(){return O(this,Ut.SEEK_OFFSET,vn)}set seekOffset(e){B(this,Ut.SEEK_OFFSET,e),this.setAttribute("aria-label",E("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),vd(pd(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return O(this,s.MEDIA_CURRENT_TIME,$m)}set mediaCurrentTime(e){B(this,s.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,t=new d.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};eo.getSlotTemplateHTML=Bm;eo.getTooltipContentHTML=Wm;d.customElements.get("media-seek-forward-button")||d.customElements.define("media-seek-forward-button",eo);var ou=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},pn=(e,t,i)=>(ou(e,t,"read from private field"),i?i.call(e):t.get(e)),Fm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Vm=(e,t,i,a)=>(ou(e,t,"write to private field"),t.set(e,i),i),Gt,ut={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},$l=[...Object.values(ut),s.MEDIA_CURRENT_TIME,s.MEDIA_DURATION,s.MEDIA_SEEKABLE],Fl=["Enter"," "],Km="&nbsp;/&nbsp;",qn=(e,{timesSep:t=Km}={})=>{var i,a;const r=(i=e.mediaCurrentTime)!=null?i:0,[,n]=(a=e.mediaSeekable)!=null?a:[];let o=0;Number.isFinite(e.mediaDuration)?o=e.mediaDuration:Number.isFinite(n)&&(o=n);const l=e.remaining?tt(0-(o-r)):tt(r);return e.showDuration?`${l}${t}${tt(o)}`:l},Gm="video not loaded, unknown time.",qm=e=>{var t;const i=e.mediaCurrentTime,[,a]=(t=e.mediaSeekable)!=null?t:[];let r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){e.setAttribute("aria-valuetext",Gm);return}const n=e.remaining?zi(0-(r-i)):zi(i);if(!e.showDuration){e.setAttribute("aria-valuetext",n);return}const o=zi(r),l=`${n} of ${o}`;e.setAttribute("aria-valuetext",l)};function Zm(e,t){return`
    <slot>${qn(t)}</slot>
  `}var lu=class extends at{constructor(){super(),Fm(this,Gt,void 0),Vm(this,Gt,this.shadowRoot.querySelector("slot")),pn(this,Gt).innerHTML=`${qn(this)}`}static get observedAttributes(){return[...super.observedAttributes,...$l,"disabled"]}connectedCallback(){const{style:e}=G(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",E("playback time"));const t=i=>{const{key:a}=i;if(!Fl.includes(a)){this.removeEventListener("keyup",t);return}this.toggleTimeDisplay()};this.addEventListener("keydown",i=>{const{metaKey:a,altKey:r,key:n}=i;if(a||r||!Fl.includes(n)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){$l.includes(e)?this.update():e==="disabled"&&i!==t&&(i==null?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return y(this,ut.REMAINING)}set remaining(e){I(this,ut.REMAINING,e)}get showDuration(){return y(this,ut.SHOW_DURATION)}set showDuration(e){I(this,ut.SHOW_DURATION,e)}get noToggle(){return y(this,ut.NO_TOGGLE)}set noToggle(e){I(this,ut.NO_TOGGLE,e)}get mediaDuration(){return O(this,s.MEDIA_DURATION)}set mediaDuration(e){B(this,s.MEDIA_DURATION,e)}get mediaCurrentTime(){return O(this,s.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){B(this,s.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(s.MEDIA_SEEKABLE);if(e)return e.split(":").map(t=>+t)}set mediaSeekable(e){if(e==null){this.removeAttribute(s.MEDIA_SEEKABLE);return}this.setAttribute(s.MEDIA_SEEKABLE,e.join(":"))}update(){const e=qn(this);qm(this),e!==pn(this,Gt).innerHTML&&(pn(this,Gt).innerHTML=e)}};Gt=new WeakMap;lu.getSlotTemplateHTML=Zm;d.customElements.get("media-time-display")||d.customElements.define("media-time-display",lu);var du=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Z=(e,t,i)=>(du(e,t,"read from private field"),t.get(e)),be=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},re=(e,t,i,a)=>(du(e,t,"write to private field"),t.set(e,i),i),Ym=(e,t,i,a)=>({set _(r){re(e,t,r)},get _(){return Z(e,t)}}),qt,er,Zt,Fi,tr,ir,ar,Yt,ct,rr,Qm=class{constructor(e,t,i){be(this,qt,void 0),be(this,er,void 0),be(this,Zt,void 0),be(this,Fi,void 0),be(this,tr,void 0),be(this,ir,void 0),be(this,ar,void 0),be(this,Yt,void 0),be(this,ct,0),be(this,rr,(a=performance.now())=>{re(this,ct,requestAnimationFrame(Z(this,rr))),re(this,Fi,performance.now()-Z(this,Zt));const r=1e3/this.fps;if(Z(this,Fi)>r){re(this,Zt,a-Z(this,Fi)%r);const n=1e3/((a-Z(this,er))/++Ym(this,tr)._),o=(a-Z(this,ir))/1e3/this.duration;let l=Z(this,ar)+o*this.playbackRate;l-Z(this,qt).valueAsNumber>0?re(this,Yt,this.playbackRate/this.duration/n):(re(this,Yt,.995*Z(this,Yt)),l=Z(this,qt).valueAsNumber+Z(this,Yt)),this.callback(l)}}),re(this,qt,e),this.callback=t,this.fps=i}start(){Z(this,ct)===0&&(re(this,Zt,performance.now()),re(this,er,Z(this,Zt)),re(this,tr,0),Z(this,rr).call(this))}stop(){Z(this,ct)!==0&&(cancelAnimationFrame(Z(this,ct)),re(this,ct,0))}update({start:e,duration:t,playbackRate:i}){const a=e-Z(this,qt).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),re(this,ar,e),re(this,ir,performance.now()),this.duration=t,this.playbackRate=i}};qt=new WeakMap;er=new WeakMap;Zt=new WeakMap;Fi=new WeakMap;tr=new WeakMap;ir=new WeakMap;ar=new WeakMap;Yt=new WeakMap;ct=new WeakMap;rr=new WeakMap;var to=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},W=(e,t,i)=>(to(e,t,"read from private field"),i?i.call(e):t.get(e)),K=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},le=(e,t,i,a)=>(to(e,t,"write to private field"),t.set(e,i),i),X=(e,t,i)=>(to(e,t,"access private method"),i),Qt,Tt,xr,ji,Or,nr,da,ua,zt,Xt,Jt,Vi,io,uu,Zn,Pr,ao,Ur,ro,Nr,no,Yn,cu,ca,Hr,Qn,hu,zm="video not loaded, unknown time.",Xm=e=>{const t=e.range,i=zi(+mu(e)),a=zi(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:zm;t.setAttribute("aria-valuetext",r)};function Jm(e){return`
    ${Si.getTemplateHTML(e)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${s.MEDIA_PREVIEW_IMAGE}], [${s.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${s.MEDIA_PREVIEW_IMAGE}], [${s.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${s.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${s.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${s.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${s.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${s.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${s.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${s.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${s.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${s.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${s.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${s.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${s.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${Bl.shadowRootOptions.mode}">
            ${Bl.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}var La=(e,t=e.mediaCurrentTime)=>{const i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(t-i)/(a-i);return Math.max(0,Math.min(r,1))},mu=(e,t=e.range.valueAsNumber)=>{const i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i},so=class extends Si{constructor(){super(),K(this,Jt),K(this,io),K(this,Pr),K(this,Ur),K(this,Nr),K(this,Yn),K(this,ca),K(this,Qn),K(this,Qt,void 0),K(this,Tt,void 0),K(this,xr,void 0),K(this,ji,void 0),K(this,Or,void 0),K(this,nr,void 0),K(this,da,void 0),K(this,ua,void 0),K(this,zt,void 0),K(this,Xt,void 0),K(this,Zn,i=>{this.dragging||(ys(i)&&(this.range.valueAsNumber=i),W(this,Xt)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),le(this,xr,this.shadowRoot.querySelectorAll('[part~="box"]')),le(this,Or,this.shadowRoot.querySelector('[part~="preview-box"]')),le(this,nr,this.shadowRoot.querySelector('[part~="current-box"]'));const t=getComputedStyle(this);le(this,da,parseInt(t.getPropertyValue("--media-box-padding-left"))),le(this,ua,parseInt(t.getPropertyValue("--media-box-padding-right"))),le(this,Tt,new Qm(this.range,W(this,Zn),60))}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PAUSED,s.MEDIA_DURATION,s.MEDIA_SEEKABLE,s.MEDIA_CURRENT_TIME,s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_TIME,s.MEDIA_PREVIEW_CHAPTER,s.MEDIA_BUFFERED,s.MEDIA_PLAYBACK_RATE,s.MEDIA_LOADING,s.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",E("seek")),X(this,Jt,Vi).call(this),le(this,Qt,this.getRootNode()),(e=W(this,Qt))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),X(this,Jt,Vi).call(this),(e=W(this,Qt))==null||e.removeEventListener("transitionstart",this),le(this,Qt,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===s.MEDIA_CURRENT_TIME||e===s.MEDIA_PAUSED||e===s.MEDIA_ENDED||e===s.MEDIA_LOADING||e===s.MEDIA_DURATION||e===s.MEDIA_SEEKABLE?(W(this,Tt).update({start:La(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),X(this,Jt,Vi).call(this),Xm(this)):e===s.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===s.MEDIA_DURATION||e===s.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=W(this,zt),this.updateBar()))}get mediaChaptersCues(){return W(this,zt)}set mediaChaptersCues(e){var t;le(this,zt,e),this.updateSegments((t=W(this,zt))==null?void 0:t.map(i=>({start:La(this,i.startTime),end:La(this,i.endTime)})))}get mediaPaused(){return y(this,s.MEDIA_PAUSED)}set mediaPaused(e){I(this,s.MEDIA_PAUSED,e)}get mediaLoading(){return y(this,s.MEDIA_LOADING)}set mediaLoading(e){I(this,s.MEDIA_LOADING,e)}get mediaDuration(){return O(this,s.MEDIA_DURATION)}set mediaDuration(e){B(this,s.MEDIA_DURATION,e)}get mediaCurrentTime(){return O(this,s.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){B(this,s.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return O(this,s.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){B(this,s.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(s.MEDIA_BUFFERED);return e?e.split(" ").map(t=>t.split(":").map(i=>+i)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(s.MEDIA_BUFFERED);return}const t=e.map(i=>i.join(":")).join(" ");this.setAttribute(s.MEDIA_BUFFERED,t)}get mediaSeekable(){const e=this.getAttribute(s.MEDIA_SEEKABLE);if(e)return e.split(":").map(t=>+t)}set mediaSeekable(e){if(e==null){this.removeAttribute(s.MEDIA_SEEKABLE);return}this.setAttribute(s.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,t=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return t}get mediaSeekableStart(){var e;const[t=0]=(e=this.mediaSeekable)!=null?e:[];return t}get mediaPreviewImage(){return P(this,s.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){U(this,s.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return O(this,s.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){B(this,s.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return y(this,s.MEDIA_ENDED)}set mediaEnded(e){I(this,s.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const t=this.mediaBuffered;if(!t.length)return;let i;if(this.mediaEnded)i=1;else{const r=this.mediaCurrentTime,[,n=this.mediaSeekableStart]=(e=t.find(([o,l])=>o<=r&&r<=l))!=null?e:[];i=La(this,n)}const{style:a}=G(this.shadowRoot,"#buffered");a.setProperty("width",`${i*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const t=G(this.shadowRoot,"#current-rail"),i=G(this.shadowRoot,'[part~="current-box"]'),a=X(this,Pr,ao).call(this,W(this,nr)),r=X(this,Ur,ro).call(this,a,this.range.valueAsNumber),n=X(this,Nr,no).call(this,a,this.range.valueAsNumber);t.style.transform=`translateX(${r})`,t.style.setProperty("--_range-width",`${a.range.width}`),i.style.setProperty("--_box-shift",`${n}`),i.style.setProperty("--_box-width",`${a.box.width}px`),i.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":X(this,Qn,hu).call(this);break;case"pointermove":X(this,Yn,cu).call(this,e);break;case"pointerup":W(this,Xt)&&le(this,Xt,!1);break;case"pointerdown":le(this,Xt,!0);break;case"pointerleave":X(this,ca,Hr).call(this,null);break;case"transitionstart":Fe(e.target,this)&&setTimeout(()=>X(this,Jt,Vi).call(this),0);break}}};Qt=new WeakMap;Tt=new WeakMap;xr=new WeakMap;ji=new WeakMap;Or=new WeakMap;nr=new WeakMap;da=new WeakMap;ua=new WeakMap;zt=new WeakMap;Xt=new WeakMap;Jt=new WeakSet;Vi=function(){X(this,io,uu).call(this)?W(this,Tt).start():W(this,Tt).stop()};io=new WeakSet;uu=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Ed(this)};Zn=new WeakMap;Pr=new WeakSet;ao=function(e){var t;const a=((t=this.getAttribute("bounds")?Ti(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?t:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=e.offsetWidth,o=-(r.left-a.left-n/2),l=a.right-r.left-n/2;return{box:{width:n,min:o,max:l},bounds:a,range:r}};Ur=new WeakSet;ro=function(e,t){let i=`${t*100}%`;const{width:a,min:r,max:n}=e.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const l=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${l})`}return i};Nr=new WeakSet;no=function(e,t){const{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+W(this,da)){const o=e.range.left-e.bounds.left-W(this,da);return`${n-i/2+o}px`}if(n>r-W(this,ua)){const o=e.bounds.right-e.range.right-W(this,ua);return`${n+i/2-o-e.range.width}px`}return 0};Yn=new WeakSet;cu=function(e){const t=[...W(this,xr)].some(f=>e.composedPath().includes(f));if(!this.dragging&&(t||!e.composedPath().includes(this))){X(this,ca,Hr).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=G(this.shadowRoot,"#preview-rail"),r=G(this.shadowRoot,'[part~="preview-box"]'),n=X(this,Pr,ao).call(this,W(this,Or));let o=(e.clientX-n.range.left)/n.range.width;o=Math.max(0,Math.min(1,o));const l=X(this,Ur,ro).call(this,n,o),u=X(this,Nr,no).call(this,n,o);a.style.transform=`translateX(${l})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${u}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const h=Math.round(W(this,ji))-Math.round(o*i);Math.abs(h)<1&&o>.01&&o<.99||(le(this,ji,o*i),X(this,ca,Hr).call(this,W(this,ji)))};ca=new WeakSet;Hr=function(e){this.dispatchEvent(new d.CustomEvent(p.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))};Qn=new WeakSet;hu=function(){W(this,Tt).stop();const e=mu(this);this.dispatchEvent(new d.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))};so.shadowRootOptions={mode:"open"};so.getTemplateHTML=Jm;d.customElements.get("media-time-range")||d.customElements.define("media-time-range",so);var jm=1,ev=e=>e.mediaMuted?0:e.mediaVolume,tv=e=>`${Math.round(e*100)}%`,iv=class extends Si{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_VOLUME,s.MEDIA_MUTED,s.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{const e=this.range.value,t=new d.CustomEvent(p.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",E("volume"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===s.MEDIA_VOLUME||e===s.MEDIA_MUTED)&&(this.range.valueAsNumber=ev(this),this.range.setAttribute("aria-valuetext",tv(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return O(this,s.MEDIA_VOLUME,jm)}set mediaVolume(e){B(this,s.MEDIA_VOLUME,e)}get mediaMuted(){return y(this,s.MEDIA_MUTED)}set mediaMuted(e){I(this,s.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return P(this,s.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){U(this,s.MEDIA_VOLUME_UNAVAILABLE,e)}};d.customElements.get("media-volume-range")||d.customElements.define("media-volume-range",iv);function av(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${s.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function rv(){return E("Loop")}var oo=class extends Q{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=E("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return y(this,s.MEDIA_LOOP)}set mediaLoop(e){I(this,s.MEDIA_LOOP,e)}handleClick(){const e=!this.mediaLoop,t=new d.CustomEvent(p.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};oo.getSlotTemplateHTML=av;oo.getTooltipContentHTML=rv;d.customElements.get("media-loop-button")||d.customElements.define("media-loop-button",oo);var vu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},S=(e,t,i)=>(vu(e,t,"read from private field"),i?i.call(e):t.get(e)),De=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},$e=(e,t,i,a)=>(vu(e,t,"write to private field"),t.set(e,i),i),jt,sr,ht,Ki,Qe,ze,Xe,mt,ei,or,ve,Vl=1,Kl=0,nv=1,sv={processCallback(e,t,i){if(i){for(const[a,r]of t)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof kt&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof kt?r.element[r.attributeName]=n:r.value=n}}}},lo=class extends d.DocumentFragment{constructor(e,t,i=sv){var a;super(),De(this,jt,void 0),De(this,sr,void 0),this.append(e.content.cloneNode(!0)),$e(this,jt,pu(this)),$e(this,sr,i),(a=i.createCallback)==null||a.call(i,this,S(this,jt),t),i.processCallback(this,S(this,jt),t)}update(e){S(this,sr).processCallback(this,S(this,jt),e)}};jt=new WeakMap;sr=new WeakMap;var pu=(e,t=[])=>{let i,a;for(const r of e.attributes||[])if(r.value.includes("{{")){const n=new lv;for([i,a]of ql(r.value))if(!i)n.append(a);else{const o=new kt(e,r.name,r.namespaceURI);n.append(o),t.push([a,o])}r.value=n.toString()}for(const r of e.childNodes)if(r.nodeType===Vl&&!(r instanceof HTMLTemplateElement))pu(r,t);else{const n=r.data;if(r.nodeType===Vl||n.includes("{{")){const o=[];if(n)for([i,a]of ql(n))if(!i)o.push(new Text(a));else{const l=new gu(e);o.push(l),t.push([a,l])}else if(r instanceof HTMLTemplateElement){const l=new bu(e,r);o.push(l),t.push([l.expression,l])}r.replaceWith(...o.flatMap(l=>l.replacementNodes||[l]))}}return t},Gl={},ql=e=>{let t="",i=0,a=Gl[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)n==="{"&&e[r+1]==="{"&&e[r-1]!=="\\"&&e[r+2]&&++i==1?(t&&a.push([Kl,t]),t="",r++):n==="}"&&e[r+1]==="}"&&e[r-1]!=="\\"&&!--i?(a.push([nv,t.trim()]),t="",r++):t+=n||"";return t&&a.push([Kl,(i>0?"{{":"")+t]),Gl[e]=a},ov=11,Eu=class{get value(){return""}set value(e){}toString(){return this.value}},fu=new WeakMap,lv=class{constructor(){De(this,ht,[])}[Symbol.iterator](){return S(this,ht).values()}get length(){return S(this,ht).length}item(e){return S(this,ht)[e]}append(...e){for(const t of e)t instanceof kt&&fu.set(t,this),S(this,ht).push(t)}toString(){return S(this,ht).join("")}};ht=new WeakMap;var kt=class extends Eu{constructor(e,t,i){super(),De(this,mt),De(this,Ki,""),De(this,Qe,void 0),De(this,ze,void 0),De(this,Xe,void 0),$e(this,Qe,e),$e(this,ze,t),$e(this,Xe,i)}get attributeName(){return S(this,ze)}get attributeNamespace(){return S(this,Xe)}get element(){return S(this,Qe)}get value(){return S(this,Ki)}set value(e){S(this,Ki)!==e&&($e(this,Ki,e),!S(this,mt,ei)||S(this,mt,ei).length===1?e==null?S(this,Qe).removeAttributeNS(S(this,Xe),S(this,ze)):S(this,Qe).setAttributeNS(S(this,Xe),S(this,ze),e):S(this,Qe).setAttributeNS(S(this,Xe),S(this,ze),S(this,mt,ei).toString()))}get booleanValue(){return S(this,Qe).hasAttributeNS(S(this,Xe),S(this,ze))}set booleanValue(e){if(!S(this,mt,ei)||S(this,mt,ei).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}};Ki=new WeakMap;Qe=new WeakMap;ze=new WeakMap;Xe=new WeakMap;mt=new WeakSet;ei=function(){return fu.get(this)};var gu=class extends Eu{constructor(e,t){super(),De(this,or,void 0),De(this,ve,void 0),$e(this,or,e),$e(this,ve,t?[...t]:[new Text])}get replacementNodes(){return S(this,ve)}get parentNode(){return S(this,or)}get nextSibling(){return S(this,ve)[S(this,ve).length-1].nextSibling}get previousSibling(){return S(this,ve)[0].previousSibling}get value(){return S(this,ve).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const t=e.flat().flatMap(i=>i==null?[new Text]:i.forEach?[...i]:i.nodeType===ov?[...i.childNodes]:i.nodeType?[i]:[new Text(i)]);t.length||t.push(new Text),$e(this,ve,dv(S(this,ve)[0].parentNode,S(this,ve),t,this.nextSibling))}};or=new WeakMap;ve=new WeakMap;var bu=class extends gu{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}};function dv(e,t,i,a=null){let r=0,n,o,l,u=i.length,h=t.length;for(;r<u&&r<h&&t[r]==i[r];)r++;for(;r<u&&r<h&&i[u-1]==t[h-1];)a=i[--h,--u];if(r==h)for(;r<u;)e.insertBefore(i[r++],a);if(r==u)for(;r<h;)e.removeChild(t[r++]);else{for(n=t[r];r<u;)l=i[r++],o=n?n.nextSibling:a,n==l?n=o:r<u&&i[r]==o?(e.replaceChild(l,n),n=o):e.insertBefore(l,n);for(;n!=a;)o=n.nextSibling,e.removeChild(n),n=o}return i}var Zl={string:e=>String(e)},_u=class{constructor(e){this.template=e,this.state=void 0}},ft=new WeakMap,gt=new WeakMap,zn={partial:(e,t)=>{t[e.expression]=new _u(e.template)},if:(e,t)=>{var i;if(Au(e.expression,t))if(ft.get(e)!==e.template){ft.set(e,e.template);const a=new lo(e.template,t,uo);e.replace(a),gt.set(e,a)}else(i=gt.get(e))==null||i.update(t);else e.replace(""),ft.delete(e),gt.delete(e)}},uv=Object.keys(zn),uo={processCallback(e,t,i){var a,r;if(i)for(const[n,o]of t){if(o instanceof bu){if(!o.directive){const u=uv.find(h=>o.template.hasAttribute(h));u&&(o.directive=u,o.expression=o.template.getAttribute(u))}(a=zn[o.directive])==null||a.call(zn,o,i);continue}let l=Au(n,i);if(l instanceof _u){ft.get(o)!==l.template?(ft.set(o,l.template),l=new lo(l.template,l.state,uo),o.value=l,gt.set(o,l)):(r=gt.get(o))==null||r.update(l.state);continue}l?(o instanceof kt&&o.attributeName.startsWith("aria-")&&(l=String(l)),o instanceof kt?typeof l=="boolean"?o.booleanValue=l:typeof l=="function"?o.element[o.attributeName]=l:o.value=l:(o.value=l,ft.delete(o),gt.delete(o))):o instanceof kt?o.value=void 0:(o.value=void 0,ft.delete(o),gt.delete(o))}}},Yl={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>e??t,"|":(e,t)=>{var i;return(i=Zl[t])==null?void 0:i.call(Zl,e)}};function cv(e){return hv(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:t})=>t!=="ws")}function Au(e,t={}){var i,a,r,n,o,l,u;const h=cv(e);if(h.length===0||h.some(({type:f})=>!f))return Ri(e);if(((i=h[0])==null?void 0:i.token)===">"){const f=t[(a=h[1])==null?void 0:a.token];if(!f)return Ri(e);const b={...t};f.state=b;const m=h.slice(2);for(let v=0;v<m.length;v+=3){const T=(r=m[v])==null?void 0:r.token,k=(n=m[v+1])==null?void 0:n.token,_=(o=m[v+2])==null?void 0:o.token;T&&k==="="&&(b[T]=Di(_,t))}return f}if(h.length===1)return Ca(h[0])?Di(h[0].token,t):Ri(e);if(h.length===2){const f=(l=h[0])==null?void 0:l.token,b=Yl[f];if(!b||!Ca(h[1]))return Ri(e);const m=Di(h[1].token,t);return b(m)}if(h.length===3){const f=(u=h[1])==null?void 0:u.token,b=Yl[f];if(!b||!Ca(h[0])||!Ca(h[2]))return Ri(e);const m=Di(h[0].token,t);if(f==="|")return b(m,h[2].token);const v=Di(h[2].token,t);return b(m,v)}}function Ri(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function Ca({type:e}){return["number","boolean","string","param"].includes(e)}function Di(e,t){const i=e[0],a=e.slice(-1);return e==="true"||e==="false"?e==="true":i===a&&["'",'"'].includes(i)?e.slice(1,-1):sd(e)?parseFloat(e):t[e]}function hv(e,t){let i,a,r;const n=[];for(;e;){r=null,i=e.length;for(const o in t)a=t[o].exec(e),a&&a.index<i&&(r={token:a[0],type:o,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n}var co=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Xn=(e,t,i)=>(co(e,t,"read from private field"),i?i.call(e):t.get(e)),xi=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},bt=(e,t,i,a)=>(co(e,t,"write to private field"),t.set(e,i),i),En=(e,t,i)=>(co(e,t,"access private method"),i),ci,lr,hi,Jn,Tu,dr,jn,fn={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},ku=V.createElement("template");ku.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;var sn=class extends d.HTMLElement{constructor(){super(),xi(this,Jn),xi(this,dr),xi(this,ci,void 0),xi(this,lr,void 0),xi(this,hi,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const e=new MutationObserver(t=>{var i;this.mediaController&&!((i=this.mediaController)!=null&&i.breakpointsComputed)||t.some(a=>{const r=a.target;return r===this?!0:r.localName!=="media-controller"?!1:!!(fn[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(Mt.BREAKPOINTS_COMPUTED,this.render),En(this,Jn,Tu).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=Xn(this,ci))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(bt(this,ci,e),bt(this,hi,null),this.createRenderer())}get props(){var e,t,i;const a=[...Array.from((t=(e=this.mediaController)==null?void 0:e.attributes)!=null?t:[]).filter(({name:n})=>fn[n]||n.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(const n of a){const o=(i=fn[n.name])!=null?i:Ec(n.name);let{value:l}=n;l!=null?(sd(l)&&(l=parseFloat(l)),r[o]=l===""?!0:l):r[o]=!1}return r}attributeChangedCallback(e,t,i){e==="template"&&t!=i&&En(this,dr,jn).call(this)}connectedCallback(){En(this,dr,jn).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Xn(this,lr)&&(bt(this,lr,this.template),this.renderer=new lo(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(ku.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}};ci=new WeakMap;lr=new WeakMap;hi=new WeakMap;Jn=new WeakSet;Tu=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}};dr=new WeakSet;jn=function(){var e;const t=this.getAttribute("template");if(!t||t===Xn(this,hi))return;const i=this.getRootNode(),a=(e=i?.getElementById)==null?void 0:e.call(i,t);if(a){bt(this,hi,t),bt(this,ci,a),this.createRenderer();return}mv(t)&&(bt(this,hi,t),vv(t).then(r=>{const n=V.createElement("template");n.innerHTML=r,bt(this,ci,n),this.createRenderer()}).catch(console.error))};sn.observedAttributes=["template"];sn.processor=uo;function mv(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;const t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch{return!1}return!0}async function vv(e){const t=await fetch(e);if(t.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}d.customElements.get("media-theme")||d.customElements.define("media-theme",sn);function pv({anchor:e,floating:t,placement:i}){const a=Ev({anchor:e,floating:t}),{x:r,y:n}=gv(a,i);return{x:r,y:n}}function Ev({anchor:e,floating:t}){return{anchor:fv(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}function fv(e,t){var i;const a=e.getBoundingClientRect(),r=(i=t?.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function gv({anchor:e,floating:t},i){const a=bv(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=Su(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,u=e[r]/2-t[r]/2;let h;switch(n){case"top":h={x:o,y:e.y-t.height};break;case"bottom":h={x:o,y:e.y+e.height};break;case"right":h={x:e.x+e.width,y:l};break;case"left":h={x:e.x-t.width,y:l};break;default:h={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":h[a]-=u;break;case"end":h[a]+=u;break}return h}function Su(e){return e.split("-")[0]}function bv(e){return["top","bottom"].includes(Su(e))?"y":"x"}var ho=class extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}},_v=class extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}},mo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},M=(e,t,i)=>(mo(e,t,"read from private field"),i?i.call(e):t.get(e)),R=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},we=(e,t,i,a)=>(mo(e,t,"write to private field"),t.set(e,i),i),D=(e,t,i)=>(mo(e,t,"access private method"),i),Le,St,it,ur,cr,yt,ha,es,yu,Br,vo,Wr,hr,ts,is,Iu,as,Mu,rs,wu,mi,vi,pi,ma,$r,po,ns,Lu,Eo,Cu,ss,Ru,fo,Du,os,xu,ls,Ou,ea,Fr,ds,Pu,ta,Vr,mr,us;function bi({type:e,text:t,value:i,checked:a}){const r=V.createElement("media-chrome-menu-item");r.type=e,r.part.add("menu-item"),r.part.add(e),r.value=i,r.checked=a;const n=V.createElement("span");return n.textContent=t,r.append(n),r}function It(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if(i?.nodeName=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}function Av(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}var ot={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"},ce=class extends d.HTMLElement{constructor(){if(super(),R(this,es),R(this,Br),R(this,hr),R(this,is),R(this,as),R(this,rs),R(this,pi),R(this,$r),R(this,ns),R(this,Eo),R(this,ss),R(this,fo),R(this,os),R(this,ls),R(this,ea),R(this,ds),R(this,ta),R(this,mr),R(this,Le,null),R(this,St,null),R(this,it,null),R(this,ur,new Set),R(this,cr,void 0),R(this,yt,!1),R(this,ha,null),R(this,Wr,()=>{const e=M(this,ur),t=new Set(this.items);for(const i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(const i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));we(this,ur,t)}),R(this,mi,()=>{D(this,pi,ma).call(this),D(this,$r,po).call(this,!1)}),R(this,vi,()=>{D(this,pi,ma).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),we(this,cr,new MutationObserver(M(this,Wr))),M(this,cr).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[ot.DISABLED,ot.HIDDEN,ot.STYLE,ot.ANCHOR,w.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":D(this,es,yu).call(this,e);break;case"invoke":D(this,is,Iu).call(this,e);break;case"click":D(this,ns,Lu).call(this,e);break;case"toggle":D(this,ss,Ru).call(this,e);break;case"focusout":D(this,os,xu).call(this,e);break;case"keydown":D(this,ls,Ou).call(this,e);break}}connectedCallback(){var e,t;we(this,ha,ws(this.shadowRoot,":host")),D(this,hr,ts).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),we(this,Le,Sn(this)),(t=(e=M(this,Le))==null?void 0:e.associateElement)==null||t.call(e,this),this.hidden||(Ei(va(this),M(this,mi)),Ei(this,M(this,vi))),D(this,Br,vo).call(this)}disconnectedCallback(){var e,t;fi(va(this),M(this,mi)),fi(this,M(this,vi)),this.disable(),(t=(e=M(this,Le))==null?void 0:e.unassociateElement)==null||t.call(e,this),we(this,Le,null)}attributeChangedCallback(e,t,i){var a,r,n,o;e===ot.HIDDEN&&i!==t?(M(this,yt)||we(this,yt,!0),this.hidden?D(this,rs,wu).call(this):D(this,as,Mu).call(this),this.dispatchEvent(new _v({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===w.MEDIA_CONTROLLER?(t&&((r=(a=M(this,Le))==null?void 0:a.unassociateElement)==null||r.call(a,this),we(this,Le,null)),i&&this.isConnected&&(we(this,Le,Sn(this)),(o=(n=M(this,Le))==null?void 0:n.associateElement)==null||o.call(n,this))):e===ot.DISABLED&&i!==t?i==null?this.enable():this.disable():e===ot.STYLE&&i!==t&&D(this,hr,ts).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=Qr(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(Tv)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return(t=(e=this.checkedItems[0])==null?void 0:e.value)!=null?t:""}set value(e){const t=this.items.find(i=>i.value===e);t&&D(this,mr,us).call(this,t)}focus(){if(we(this,St,Ms()),this.items.length){D(this,ta,Vr).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e?.focus()}handleSelect(e){var t;const i=D(this,ea,Fr).call(this,e);i&&(D(this,mr,us).call(this,i,i.type==="checkbox"),M(this,it)&&!this.hidden&&((t=M(this,St))==null||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;const{key:a}=e,r=this.items,n=(i=(t=D(this,ea,Fr).call(this,e))!=null?t:D(this,ds,Pu).call(this))!=null?i:r[0],o=r.indexOf(n);let l=Math.max(0,o);a==="ArrowDown"?l++:a==="ArrowUp"?l--:e.key==="Home"?l=0:e.key==="End"&&(l=r.length-1),l<0&&(l=r.length-1),l>r.length-1&&(l=0),D(this,ta,Vr).call(this,r[l]),r[l].focus()}};Le=new WeakMap;St=new WeakMap;it=new WeakMap;ur=new WeakMap;cr=new WeakMap;yt=new WeakMap;ha=new WeakMap;es=new WeakSet;yu=function(e){const t=e.target;for(const i of t.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(t.name)&&D(this,Br,vo).call(this),t.name||M(this,Wr).call(this)};Br=new WeakSet;vo=function(){const e=this.shadowRoot.querySelector('slot[name="header"]'),t=this.shadowRoot.querySelector('slot[name="title"]');e.hidden=t.assignedNodes().length===0&&e.assignedNodes().length===0};Wr=new WeakMap;hr=new WeakSet;ts=function(){var e;const t=this.shadowRoot.querySelector("#layout-row"),i=(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:e.trim();t.setAttribute("media",i==="row"?"":"width:0")};is=new WeakSet;Iu=function(e){we(this,it,e.relatedTarget),Fe(this,e.relatedTarget)||(this.hidden=!this.hidden)};as=new WeakSet;Mu=function(){var e;(e=M(this,it))==null||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Ei(va(this),M(this,mi)),Ei(this,M(this,vi))};rs=new WeakSet;wu=function(){var e;(e=M(this,it))==null||e.setAttribute("aria-expanded","false"),fi(va(this),M(this,mi)),fi(this,M(this,vi))};mi=new WeakMap;vi=new WeakMap;pi=new WeakSet;ma=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:t,y:i}=pv({anchor:this.anchorElement,floating:this,placement:"top-start"});e??(e=this.offsetWidth);const r=va(this).getBoundingClientRect(),n=r.width-t-e,o=r.height-i-this.offsetHeight,{style:l}=M(this,ha);l.setProperty("position","absolute"),l.setProperty("right",`${Math.max(0,n)}px`),l.setProperty("--_menu-bottom",`${o}px`);const u=getComputedStyle(this),f=l.getPropertyValue("--_menu-bottom")===u.bottom?o:parseFloat(u.bottom),b=r.height-f-parseFloat(u.marginBottom);this.style.setProperty("--_menu-max-height",`${b}px`)};$r=new WeakSet;po=function(e){const t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=t?.querySelector('[role="menu"]'),{style:a}=M(this,ha);if(e||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),D(this,pi,ma).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),D(this,pi,ma).call(this);a.removeProperty("--media-menu-transition-in")};ns=new WeakSet;Lu=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(M(this,Eo,Cu))){(t=M(this,St))==null||t.focus(),this.hidden=!0;return}const i=D(this,ea,Fr).call(this,e);!i||i.hasAttribute("disabled")||(D(this,ta,Vr).call(this,i),this.handleSelect(e))};Eo=new WeakSet;Cu=function(){var e;return(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:e.find(i=>i.matches('button[part~="back"]'))};ss=new WeakSet;Ru=function(e){if(e.target===this)return;D(this,fo,Du).call(this);const t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of t)i.invokeTargetElement!=e.target&&e.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new ho({relatedTarget:i}));for(const i of t)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);D(this,$r,po).call(this,!0)};fo=new WeakSet;Du=function(){const t=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!t)};os=new WeakSet;xu=function(e){var t;Fe(this,e.relatedTarget)||(M(this,yt)&&((t=M(this,St))==null||t.focus()),M(this,it)&&M(this,it)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))};ls=new WeakSet;Ou=function(e){var t,i,a,r,n;const{key:o,ctrlKey:l,altKey:u,metaKey:h}=e;if(!(l||u||h)&&this.keysUsed.includes(o))if(e.preventDefault(),e.stopPropagation(),o==="Tab"){if(M(this,yt)){this.hidden=!0;return}e.shiftKey?(i=(t=this.previousElementSibling)==null?void 0:t.focus)==null||i.call(t):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else o==="Escape"?((n=M(this,St))==null||n.focus(),M(this,yt)&&(this.hidden=!0)):o==="Enter"||o===" "?this.handleSelect(e):this.handleMove(e)};ea=new WeakSet;Fr=function(e){return e.composedPath().find(t=>["menuitemradio","menuitemcheckbox"].includes(t.role))};ds=new WeakSet;Pu=function(){return this.items.find(e=>e.tabIndex===0)};ta=new WeakSet;Vr=function(e){for(const t of this.items)t.tabIndex=t===e?0:-1};mr=new WeakSet;us=function(e,t){const i=[...this.checkedItems];e.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};ce.shadowRootOptions={mode:"open"};ce.getTemplateHTML=Av;function Tv(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(e?.role)}function va(e){var t;return(t=e.getAttribute("bounds")?Ti(e,`#${e.getAttribute("bounds")}`):ee(e)||e.parentElement)!=null?t:e}d.customElements.get("media-chrome-menu")||d.customElements.define("media-chrome-menu",ce);var go=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},xe=(e,t,i)=>(go(e,t,"read from private field"),i?i.call(e):t.get(e)),Ne=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},gn=(e,t,i,a)=>(go(e,t,"write to private field"),t.set(e,i),i),fe=(e,t,i)=>(go(e,t,"access private method"),i),vr,ia,cs,Uu,Kr,bo,_o,Nu,Oe,_i,pa,hs,Hu,pr,ms;function kv(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `}function Sv(e){return""}var oe={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"},rt=class extends d.HTMLElement{constructor(){if(super(),Ne(this,cs),Ne(this,Kr),Ne(this,_o),Ne(this,_i),Ne(this,hs),Ne(this,pr),Ne(this,vr,!1),Ne(this,ia,void 0),Ne(this,Oe,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const i=this.shadowRoot.querySelector('slot[name="description"]'),a=(e=this.submenuElement.checkedItems)==null?void 0:e[0],r=(t=a?.dataset.description)!=null?t:a?.text,n=V.createElement("span");n.textContent=r??"",i.replaceChildren(n)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[oe.TYPE,oe.DISABLED,oe.CHECKED,oe.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),Oi(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":fe(this,cs,Uu).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":fe(this,hs,Hu).call(this,e);break;case"keyup":fe(this,_i,pa).call(this,e);break}}attributeChangedCallback(e,t,i){e===oe.CHECKED&&Oi(this)&&!xe(this,vr)?this.setAttribute("aria-checked",i!=null?"true":"false"):e===oe.TYPE&&i!==t?this.role="menuitem"+i:e===oe.DISABLED&&i!==t&&(i==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(oe.DISABLED)||this.enable(),this.role="menuitem"+this.type,gn(this,ia,vs(this,this.parentNode)),fe(this,pr,ms).call(this),this.submenuElement&&fe(this,Kr,bo).call(this)}disconnectedCallback(){this.disable(),fe(this,pr,ms).call(this),gn(this,ia,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=Qr(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(oe.TYPE))!=null?e:""}set type(e){this.setAttribute(oe.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(oe.VALUE))!=null?e:this.text}set value(e){this.setAttribute(oe.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(Oi(this))return this.getAttribute("aria-checked")==="true"}set checked(e){Oi(this)&&(gn(this,vr,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){Oi(this)||this.invokeTargetElement&&Fe(this,e.target)&&this.invokeTargetElement.dispatchEvent(new ho({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}};vr=new WeakMap;ia=new WeakMap;cs=new WeakSet;Uu=function(e){const t=e.target;if(!t?.name)for(const a of t.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();t.name==="submenu"&&(this.submenuElement?fe(this,Kr,bo).call(this):fe(this,_o,Nu).call(this))};Kr=new WeakSet;bo=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",xe(this,Oe)),this.submenuElement.addEventListener("addmenuitem",xe(this,Oe)),this.submenuElement.addEventListener("removemenuitem",xe(this,Oe)),xe(this,Oe).call(this)};_o=new WeakSet;Nu=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",xe(this,Oe)),this.submenuElement.removeEventListener("addmenuitem",xe(this,Oe)),this.submenuElement.removeEventListener("removemenuitem",xe(this,Oe)),xe(this,Oe).call(this)};Oe=new WeakMap;_i=new WeakSet;pa=function(e){const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",fe(this,_i,pa));return}this.handleClick(e)};hs=new WeakSet;Hu=function(e){const{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",fe(this,_i,pa));return}this.addEventListener("keyup",fe(this,_i,pa),{once:!0})};pr=new WeakSet;ms=function(){var e;const t=(e=xe(this,ia))==null?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=t[0]);for(const a of t)a.setAttribute("aria-checked","false");i?.setAttribute("aria-checked","true")};rt.shadowRootOptions={mode:"open"};rt.getTemplateHTML=kv;rt.getSuffixSlotInnerHTML=Sv;function Oi(e){return e.type==="radio"||e.type==="checkbox"}function vs(e,t){if(!e)return null;const{host:i}=e.getRootNode();return!t&&i?vs(e,i):t?.items?t:vs(t,t?.parentNode)}d.customElements.get("media-chrome-menu-item")||d.customElements.define("media-chrome-menu-item",rt);function yv(e){return`
    ${ce.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}var Bu=class extends ce{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:ee(this).querySelector("media-settings-menu-button")}};Bu.getTemplateHTML=yv;d.customElements.get("media-settings-menu")||d.customElements.define("media-settings-menu",Bu);function Iv(e){return`
    ${rt.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function Mv(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}var on=class extends rt{};on.shadowRootOptions={mode:"open"};on.getTemplateHTML=Iv;on.getSuffixSlotInnerHTML=Mv;d.customElements.get("media-settings-menu-item")||d.customElements.define("media-settings-menu-item",on);var yi=class extends Q{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=Qr(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new ho({relatedTarget:this}))}};d.customElements.get("media-chrome-menu-button")||d.customElements.define("media-chrome-menu-button",yi);function wv(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function Lv(){return E("Settings")}var Ao=class extends yi{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",E("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:ee(this).querySelector("media-settings-menu")}};Ao.getSlotTemplateHTML=wv;Ao.getTooltipContentHTML=Lv;d.customElements.get("media-settings-menu-button")||d.customElements.define("media-settings-menu-button",Ao);var To=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Wu=(e,t,i)=>(To(e,t,"read from private field"),i?i.call(e):t.get(e)),Ra=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ps=(e,t,i,a)=>(To(e,t,"write to private field"),t.set(e,i),i),Da=(e,t,i)=>(To(e,t,"access private method"),i),Gi,Gr,Er,Es,fr,fs,Cv=class extends ce{constructor(){super(...arguments),Ra(this,Er),Ra(this,fr),Ra(this,Gi,[]),Ra(this,Gr,void 0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_AUDIO_TRACK_LIST,s.MEDIA_AUDIO_TRACK_ENABLED,s.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===s.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(ps(this,Gi,mc(i??"")),Da(this,Er,Es).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Da(this,fr,fs))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Da(this,fr,fs))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=ee(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return Wu(this,Gi)}set mediaAudioTrackList(e){ps(this,Gi,e),Da(this,Er,Es).call(this)}get mediaAudioTrackEnabled(){var e;return(e=P(this,s.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){U(this,s.MEDIA_AUDIO_TRACK_ENABLED,e)}};Gi=new WeakMap;Gr=new WeakMap;Er=new WeakSet;Es=function(){if(Wu(this,Gr)===JSON.stringify(this.mediaAudioTrackList))return;ps(this,Gr,JSON.stringify(this.mediaAudioTrackList));const e=this.mediaAudioTrackList;this.defaultSlot.textContent="",e.sort((t,i)=>t.id.localeCompare(i.id,void 0,{numeric:!0}));for(const t of e){const i=this.formatMenuItemText(t.label,t),a=bi({type:"radio",text:i,value:`${t.id}`,checked:t.enabled});a.prepend(It(this,"checked-indicator")),this.defaultSlot.append(a)}};fr=new WeakSet;fs=function(){if(this.value==null)return;const e=new d.CustomEvent(p.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};d.customElements.get("media-audio-track-menu")||d.customElements.define("media-audio-track-menu",Cv);var Rv=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function Dv(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${Rv}</slot>
  `}function xv(){return E("Audio")}var Ql=e=>{const t=E("Audio");e.setAttribute("aria-label",t)},ko=class extends yi{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_AUDIO_TRACK_ENABLED,s.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Ql(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_LANG&&Ql(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=ee(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=P(this,s.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){U(this,s.MEDIA_AUDIO_TRACK_ENABLED,e)}};ko.getSlotTemplateHTML=Dv;ko.getTooltipContentHTML=xv;d.customElements.get("media-audio-track-menu-button")||d.customElements.define("media-audio-track-menu-button",ko);var So=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ov=(e,t,i)=>(So(e,t,"read from private field"),t.get(e)),bn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Pv=(e,t,i,a)=>(So(e,t,"write to private field"),t.set(e,i),i),xa=(e,t,i)=>(So(e,t,"access private method"),i),qr,gr,gs,br,bs,Uv=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function Nv(e){return`
    ${ce.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${Uv}</slot>
  `}var $u=class extends ce{constructor(){super(...arguments),bn(this,gr),bn(this,br),bn(this,qr,void 0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_SUBTITLES_LIST&&t!==i?xa(this,gr,gs).call(this):e===s.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",xa(this,gr,gs).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",xa(this,br,bs))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",xa(this,br,bs))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:ee(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return zl(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Xl(this,s.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return zl(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Xl(this,s.MEDIA_SUBTITLES_SHOWING,e)}};qr=new WeakMap;gr=new WeakSet;gs=function(){var e;const t=Ov(this,qr)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(s.MEDIA_SUBTITLES_SHOWING);if(!t&&!i)return;Pv(this,qr,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const a=!this.value,r=bi({type:"radio",text:this.formatMenuItemText(E("Off")),value:"off",checked:a});r.prepend(It(this,"checked-indicator")),this.defaultSlot.append(r);const n=this.mediaSubtitlesList;for(const o of n){const l=bi({type:"radio",text:this.formatMenuItemText(o.label,o),value:wn(o),checked:this.value==wn(o)});l.prepend(It(this,"checked-indicator")),((e=o.kind)!=null?e:"subs")==="captions"&&l.append(It(this,"captions-indicator")),this.defaultSlot.append(l)}};br=new WeakSet;bs=function(){const e=this.mediaSubtitlesShowing,t=this.getAttribute(s.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if(e?.length&&i&&this.dispatchEvent(new d.CustomEvent(p.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;const a=new d.CustomEvent(p.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};$u.getTemplateHTML=Nv;var zl=(e,t)=>{const i=e.getAttribute(t);return i?en(i):[]},Xl=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=oa(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};d.customElements.get("media-captions-menu")||d.customElements.define("media-captions-menu",$u);var Hv=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Bv=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function Wv(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${Hv}</slot>
      <slot name="off">${Bv}</slot>
    </slot>
  `}function $v(){return E("Captions")}var Jl=e=>{e.setAttribute("data-captions-enabled",Id(e).toString())},jl=e=>{e.setAttribute("aria-label",E("closed captions"))},yo=class extends yi{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING,s.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),jl(this),Jl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_SUBTITLES_SHOWING?Jl(this):e===s.MEDIA_LANG&&jl(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=ee(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return ed(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){td(this,s.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return ed(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){td(this,s.MEDIA_SUBTITLES_SHOWING,e)}};yo.getSlotTemplateHTML=Wv;yo.getTooltipContentHTML=$v;var ed=(e,t)=>{const i=e.getAttribute(t);return i?en(i):[]},td=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=oa(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};d.customElements.get("media-captions-menu-button")||d.customElements.define("media-captions-menu-button",yo);var Fu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ti=(e,t,i)=>(Fu(e,t,"read from private field"),i?i.call(e):t.get(e)),_n=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Nt=(e,t,i)=>(Fu(e,t,"access private method"),i),Je,ii,qi,_r,_s,An={RATES:"rates"},Fv=class extends ce{constructor(){super(),_n(this,ii),_n(this,_r),_n(this,Je,new Rs(this,An.RATES,{defaultValue:au})),Nt(this,ii,qi).call(this)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE,An.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,Nt(this,ii,qi).call(this)):e===An.RATES&&t!=i&&(ti(this,Je).value=i,Nt(this,ii,qi).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Nt(this,_r,_s))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Nt(this,_r,_s))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:ee(this).querySelector("media-playback-rate-menu-button")}get rates(){return ti(this,Je)}set rates(e){e?Array.isArray(e)?ti(this,Je).value=e.join(" "):typeof e=="string"&&(ti(this,Je).value=e):ti(this,Je).value="",Nt(this,ii,qi).call(this)}get mediaPlaybackRate(){return O(this,s.MEDIA_PLAYBACK_RATE,si)}set mediaPlaybackRate(e){B(this,s.MEDIA_PLAYBACK_RATE,e)}};Je=new WeakMap;ii=new WeakSet;qi=function(){this.defaultSlot.textContent="";const e=this.mediaPlaybackRate,t=new Set(Array.from(ti(this,Je)).map(a=>Number(a)));e>0&&!t.has(e)&&t.add(e);const i=Array.from(t).sort((a,r)=>a-r);for(const a of i){const r=bi({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:e===a});r.prepend(It(this,"checked-indicator")),this.defaultSlot.append(r)}};_r=new WeakSet;_s=function(){if(!this.value)return;const e=new d.CustomEvent(p.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};d.customElements.get("media-playback-rate-menu")||d.customElements.define("media-playback-rate-menu",Fv);var Ar=1;function Vv(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||Ar}x</slot>
  `}function Kv(){return E("Playback rate")}var Io=class extends yi{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:Ar}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===s.MEDIA_PLAYBACK_RATE){const a=i?+i:Number.NaN,r=Number.isNaN(a)?Ar:a;this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",E("Playback rate {playbackRate}",{playbackRate:r}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:ee(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return O(this,s.MEDIA_PLAYBACK_RATE,Ar)}set mediaPlaybackRate(e){B(this,s.MEDIA_PLAYBACK_RATE,e)}};Io.getSlotTemplateHTML=Vv;Io.getTooltipContentHTML=Kv;d.customElements.get("media-playback-rate-menu-button")||d.customElements.define("media-playback-rate-menu-button",Io);var Mo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Zi=(e,t,i)=>(Mo(e,t,"read from private field"),i?i.call(e):t.get(e)),Oa=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},id=(e,t,i,a)=>(Mo(e,t,"write to private field"),t.set(e,i),i),Ht=(e,t,i)=>(Mo(e,t,"access private method"),i),Yi,oi,ai,Qi,Tr,As,Gv=class extends ce{constructor(){super(...arguments),Oa(this,ai),Oa(this,Tr),Oa(this,Yi,[]),Oa(this,oi,{})}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_RENDITION_LIST,s.MEDIA_RENDITION_SELECTED,s.MEDIA_RENDITION_UNAVAILABLE,s.MEDIA_HEIGHT]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){const i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){const a=e.bitrate/1e6,r=`${a.toFixed(a<1?1:0)} Mbps`;return`${i} (${r})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?((i=t.bitrate)!=null?i:0)-((a=e.bitrate)!=null?a:0):t.height-e.height}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_RENDITION_SELECTED&&t!==i?(this.value=i??"auto",Ht(this,ai,Qi).call(this)):e===s.MEDIA_RENDITION_LIST&&t!==i?(id(this,Yi,dc(i)),Ht(this,ai,Qi).call(this)):e===s.MEDIA_HEIGHT&&t!==i&&Ht(this,ai,Qi).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Ht(this,Tr,As))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Ht(this,Tr,As))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:ee(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return Zi(this,Yi)}set mediaRenditionList(e){id(this,Yi,e),Ht(this,ai,Qi).call(this)}get mediaRenditionSelected(){return P(this,s.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){U(this,s.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return O(this,s.MEDIA_HEIGHT)}set mediaHeight(e){B(this,s.MEDIA_HEIGHT,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}};Yi=new WeakMap;oi=new WeakMap;ai=new WeakSet;Qi=function(){if(Zi(this,oi).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&Zi(this,oi).mediaHeight===this.mediaHeight)return;Zi(this,oi).mediaRenditionList=JSON.stringify(this.mediaRenditionList),Zi(this,oi).mediaHeight=this.mediaHeight;const e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),t=e.find(o=>o.id===this.mediaRenditionSelected);for(const o of e)o.selected=o===t;this.defaultSlot.textContent="";const i=!this.mediaRenditionSelected;for(const o of e){const l=this.formatRendition(o,{showBitrate:this.showRenditionBitrate(o)}),u=bi({type:"radio",text:l,value:`${o.id}`,checked:o.selected&&!i});u.prepend(It(this,"checked-indicator")),this.defaultSlot.append(u)}const a=t&&this.showRenditionBitrate(t),r=i?t?this.formatMenuItemText(`${E("Auto")} • ${this.formatRendition(t,{showBitrate:a})}`,t):this.formatMenuItemText(`${E("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(E("Auto")),n=bi({type:"radio",text:r,value:"auto",checked:i});n.dataset.description=r,n.prepend(It(this,"checked-indicator")),this.defaultSlot.append(n)};Tr=new WeakSet;As=function(){if(this.value==null)return;const e=new d.CustomEvent(p.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};d.customElements.get("media-rendition-menu")||d.customElements.define("media-rendition-menu",Gv);var qv=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function Zv(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${qv}</slot>
  `}function Yv(){return E("Quality")}var wo=class extends yi{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_RENDITION_SELECTED,s.MEDIA_RENDITION_UNAVAILABLE,s.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",E("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:ee(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return P(this,s.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){U(this,s.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return O(this,s.MEDIA_HEIGHT)}set mediaHeight(e){B(this,s.MEDIA_HEIGHT,e)}};wo.getSlotTemplateHTML=Zv;wo.getTooltipContentHTML=Yv;d.customElements.get("media-rendition-menu-button")||d.customElements.define("media-rendition-menu-button",wo);var Lo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ce=(e,t,i)=>(Lo(e,t,"read from private field"),i?i.call(e):t.get(e)),_e=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Vu=(e,t,i,a)=>(Lo(e,t,"write to private field"),t.set(e,i),i),de=(e,t,i)=>(Lo(e,t,"access private method"),i),Ai,Ea,ln,vt,li,Co,Ku,kr,Ts,Sr,ks,Gu,Zr,Yr,yr;function Qv(e){return`
      ${ce.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `}var qu=class extends ce{constructor(){super(),_e(this,Ea),_e(this,vt),_e(this,Co),_e(this,kr),_e(this,ks),_e(this,Ai,!1),_e(this,Sr,e=>{const t=e.target,i=t?.nodeName==="VIDEO",a=de(this,kr,Ts).call(this,t);(i||a)&&(Ce(this,Ai)?de(this,vt,li).call(this):de(this,ks,Gu).call(this,e))}),_e(this,Zr,e=>{const t=e.target,i=this.contains(t),a=e.button===2,r=t?.nodeName==="VIDEO",n=de(this,kr,Ts).call(this,t);i||a&&(r||n)||de(this,vt,li).call(this)}),_e(this,Yr,e=>{e.key==="Escape"&&de(this,vt,li).call(this)}),_e(this,yr,e=>{var t,i;const a=e.target;if((t=a.matches)!=null&&t.call(a,'button[invoke="copy"]')){const r=(i=a.closest("media-context-menu-item"))==null?void 0:i.querySelector('input[slot="copy"]');r&&navigator.clipboard.writeText(r.value)}de(this,vt,li).call(this)}),this.setAttribute("noautohide",""),de(this,Ea,ln).call(this)}connectedCallback(){super.connectedCallback(),ee(this).addEventListener("contextmenu",Ce(this,Sr)),this.addEventListener("click",Ce(this,yr))}disconnectedCallback(){super.disconnectedCallback(),ee(this).removeEventListener("contextmenu",Ce(this,Sr)),this.removeEventListener("click",Ce(this,yr)),document.removeEventListener("mousedown",Ce(this,Zr)),document.removeEventListener("keydown",Ce(this,Yr))}};Ai=new WeakMap;Ea=new WeakSet;ln=function(){this.hidden=!Ce(this,Ai)};vt=new WeakSet;li=function(){Vu(this,Ai,!1),de(this,Ea,ln).call(this)};Co=new WeakSet;Ku=function(){document.querySelectorAll("media-context-menu").forEach(t=>{var i;t!==this&&de(i=t,vt,li).call(i)})};kr=new WeakSet;Ts=function(e){return e?e.hasAttribute("slot")&&e.getAttribute("slot")==="media"?!0:e.nodeName.includes("-")&&e.tagName.includes("-")?e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline"):!1:!1};Sr=new WeakMap;ks=new WeakSet;Gu=function(e){e.preventDefault(),de(this,Co,Ku).call(this),Vu(this,Ai,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,de(this,Ea,ln).call(this),document.addEventListener("mousedown",Ce(this,Zr),{once:!0}),document.addEventListener("keydown",Ce(this,Yr),{once:!0})};Zr=new WeakMap;Yr=new WeakMap;yr=new WeakMap;qu.getTemplateHTML=Qv;d.customElements.get("media-context-menu")||d.customElements.define("media-context-menu",qu);function zv(e){return`
    ${rt.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `}var Ro=class extends rt{};Ro.shadowRootOptions={mode:"open"};Ro.getTemplateHTML=zv;d.customElements.get("media-context-menu-item")||d.customElements.define("media-context-menu-item",Ro);var Tn,ad,Ss=(ad=(Tn=d.document)==null?void 0:Tn.createElement)==null?void 0:ad.call(Tn,"template");Ss&&(Ss.innerHTML=String.raw`
    <style>
      :host {
        --_primary-color: var(--media-primary-color, #fff);
        --_secondary-color: var(--media-secondary-color, rgb(0 0 0 / .75));

        --media-icon-color: var(--_primary-color);
        --media-range-thumb-background: var(--_primary-color);
        --media-range-bar-color: var(--_primary-color);
        --media-control-background: transparent;
        --media-control-hover-background: transparent;
        --media-range-track-border-radius: 3px;
        --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
        --media-range-track-background: rgba(255, 255, 255, 0.5);
        --media-range-thumb-opacity: 0;
        --media-preview-thumbnail-border-radius: 2px;
        --media-tooltip-display: none;

        color: var(--_primary-color);
      }

      @supports (color: color-mix(in srgb, red, blue)) {
        :host {
          --_secondary-color: color-mix(in srgb, var(--media-secondary-color, #000) 75%, transparent);
        }
      }

      media-control-bar {
        --media-control-padding: 2px;
        background: var(--_secondary-color);
        align-items: center;
        height: 30px;
        border-radius: 4px;
        margin: 0 5px 5px;
        padding-inline: 2px;
      }

      media-controller[breakpointsm] media-control-bar {
        --media-control-padding: 4px;
        height: 38px;
        border-radius: 8px;
        padding-inline: 5px;
      }

      media-controller[breakpointmd] media-control-bar {
        height: 46px;
        margin: 0 8px 8px;
      }

      media-controller[breakpointlg] media-control-bar,
      media-controller[breakpointxl] media-control-bar {
        padding-inline: 7px;
      }

      .live-controls-left {
        margin-right: auto;
      }

      media-time-range,
      media-live-button,
      media-time-display,
      media-text-display,
      media-playback-rate-button[role='button'] {
        color: inherit;
      }

      [disabled]:not(media-live-button) {
        opacity: 60%;
        cursor: not-allowed;
      }

      ${""}
      media-seek-backward-button {
        display: var(--media-control-display, var(--media-seek-backward-button-display, none));
      }

      media-seek-forward-button {
        display: var(--media-control-display, var(--media-seek-forward-button-display, none));
      }

      media-pip-button {
        display: var(--media-control-display, var(--media-pip-button-display, none));
      }
    </style>

    <template partial="PlayButton">
      <media-play-button part="play button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="play">
          <path d="m6.73 20.93 14.05-8.54a.46.46 0 0 0 0-.78L6.73 3.07a.48.48 0 0 0-.73.39v17.07a.48.48 0 0 0 .73.4Z" />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="pause">
          <path
            d="M6 19.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v15ZM14.5 4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3Z"
          />
        </svg>
      </media-play-button>
    </template>

    <template partial="MuteButton">
      <media-mute-button part="mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="high">
          <path
            d="m11.14 4.86-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.21a.5.5 0 0 0-.86-.35Zm2.74-1.56v1.52A7.52 7.52 0 0 1 19.47 12a7.52 7.52 0 0 1-5.59 7.18v1.52A9 9 0 0 0 21 12a9 9 0 0 0-7.12-8.7Zm3.56 8.7a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="medium">
          <path
            d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="low">
          <path
            d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="off">
          <path
            d="m3 4.05 4.48 4.47-.33.33a.49.49 0 0 1-.36.15H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.48.48 0 0 0 .36.15.5.5 0 0 0 .5-.5v-5.75l4.67 4.66a7.71 7.71 0 0 1-2.79 1.47v1.52a9.32 9.32 0 0 0 3.87-1.91L20 21l1-1L4.06 3 3 4.05Zm5.36 5.36 2.39 2.39V17L8 14.26a1.74 1.74 0 0 0-1.24-.51H4.25v-3.5h2.54A1.74 1.74 0 0 0 8 9.74l.36-.33ZM19.47 12a7.19 7.19 0 0 1-.89 3.47l1.11 1.1A8.64 8.64 0 0 0 21 12a9 9 0 0 0-7.12-8.7v1.52A7.52 7.52 0 0 1 19.47 12ZM12 8.88V5.21a.5.5 0 0 0-.5-.5.48.48 0 0 0-.36.15L9.56 6.44 12 8.88ZM15.91 12a4.284 4.284 0 0 1-.07.72l1.22 1.22a5.2 5.2 0 0 0 .38-1.94 5.49 5.49 0 0 0-3.56-5.1v1.66A4 4 0 0 1 15.91 12Z"
          />
        </svg>
      </media-mute-button>
    </template>

    <template partial="CaptionsButton">
      <media-captions-button part="captions button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="on">
          <path
            d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.41 10.1a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 4 4 0 0 1-1.28-.83 3.67 3.67 0 0 1-.84-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.53 3.53 0 0 1 .84-1.21 3.89 3.89 0 0 1 1.29-.8 4.76 4.76 0 0 1 1.63-.27 4.06 4.06 0 0 1 1.35.24c.225.091.44.205.64.34a2.7 2.7 0 0 1 .55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.35 2.35 0 0 0-.46.77 2.78 2.78 0 0 0-.16 1c-.009.34.046.68.16 1 .104.283.26.545.46.77.188.21.415.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.88 2.88 0 0 1-1.22 1.01Zm7.52 0a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 3.89 3.89 0 0 1-1.28-.83 3.55 3.55 0 0 1-.85-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.43 3.43 0 0 1 .85-1.25 3.75 3.75 0 0 1 1.28-.8 4.76 4.76 0 0 1 1.63-.27 4 4 0 0 1 1.35.24c.225.091.44.205.64.34.21.144.395.32.55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.352 2.352 0 0 0-.46.77 3.01 3.01 0 0 0-.16 1c-.003.34.05.678.16 1 .108.282.263.542.46.77.188.21.416.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.82 2.82 0 0 1-1.21 1.05Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="off">
          <path
            d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-1.81-.12-4.67-.18-7.53-.18-2.86 0-5.72.06-7.53.18a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c1.81.12 4.67.18 7.53.18 2.86 0 5.72-.06 7.53-.18a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.137-.21-8.283 0-12.42a1.11 1.11 0 0 1 .91-1.11c1.67-.11 4.43-.18 7.43-.18s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.137.21 8.283 0 12.42ZM10.843 14a1.55 1.55 0 0 1-.76.18 1.57 1.57 0 0 1-.71-.18 1.69 1.69 0 0 1-.57-.42 2.099 2.099 0 0 1-.38-.58 2.47 2.47 0 0 1 0-1.64 2 2 0 0 1 .39-.66 1.73 1.73 0 0 1 .58-.42c.23-.103.479-.158.73-.16.241-.004.48.044.7.14.199.088.373.222.51.39l1.08-.89a2.179 2.179 0 0 0-.47-.44 2.81 2.81 0 0 0-.54-.32 2.91 2.91 0 0 0-.58-.15 2.71 2.71 0 0 0-.56 0 4.08 4.08 0 0 0-1.38.15 3.27 3.27 0 0 0-1.09.67 3.14 3.14 0 0 0-.71 1.06 3.62 3.62 0 0 0-.26 1.39 3.57 3.57 0 0 0 .26 1.38 3 3 0 0 0 .71 1.06c.316.293.687.52 1.09.67.443.16.91.238 1.38.23a3.2 3.2 0 0 0 1.28-.27c.401-.183.747-.47 1-.83l-1.17-.88a1.42 1.42 0 0 1-.53.52Zm6.62 0a1.58 1.58 0 0 1-.76.18 1.54 1.54 0 0 1-.7-.18 1.69 1.69 0 0 1-.57-.42 2.12 2.12 0 0 1-.43-.58 2.29 2.29 0 0 1 .39-2.3 1.84 1.84 0 0 1 1.32-.58c.241-.003.48.045.7.14.199.088.373.222.51.39l1.08-.92a2.43 2.43 0 0 0-.47-.44 3.22 3.22 0 0 0-.53-.29 2.999 2.999 0 0 0-.57-.15 2.87 2.87 0 0 0-.57 0 4.06 4.06 0 0 0-1.36.15 3.17 3.17 0 0 0-1.09.67 3 3 0 0 0-.72 1.06 3.62 3.62 0 0 0-.25 1.39 3.57 3.57 0 0 0 .25 1.38c.16.402.405.764.72 1.06a3.17 3.17 0 0 0 1.09.67c.44.16.904.237 1.37.23.441 0 .877-.092 1.28-.27a2.45 2.45 0 0 0 1-.83l-1.15-.85a1.49 1.49 0 0 1-.54.49Z"
          />
        </svg>
      </media-captions-button>
    </template>

    <template partial="FullscreenButton">
      <media-fullscreen-button part="fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="enter">
          <path
            d="M20.25 14.5a.76.76 0 0 0-.75.75v4.25h-4.25a.75.75 0 1 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5a.76.76 0 0 0-.75-.75Zm0-11.5h-5a.76.76 0 0 0-.75.75.76.76 0 0 0 .75.75h4.25v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75ZM8.75 19.5H4.5v-4.25a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75h5a.75.75 0 1 0 0-1.5Zm0-16.5h-5a.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75.76.76 0 0 0 .75-.75V4.5h4.25a.76.76 0 0 0 .75-.75.76.76 0 0 0-.75-.75Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="exit">
          <path
            d="M20.25 14.5h-5a.76.76 0 0 0-.75.75v5a.75.75 0 1 0 1.5 0V16h4.25a.75.75 0 1 0 0-1.5Zm-5-5h5a.75.75 0 1 0 0-1.5H16V3.75a.75.75 0 1 0-1.5 0v5a.76.76 0 0 0 .75.75Zm-6.5 5h-5a.75.75 0 1 0 0 1.5H8v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75Zm0-11.5a.76.76 0 0 0-.75.75V8H3.75a.75.75 0 0 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5A.76.76 0 0 0 8.75 3Z"
          />
        </svg>
      </media-fullscreen-button>
    </template>

    <template partial="LiveButton">
      <media-live-button part="live seek-live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <span slot="text" style="font-weight: normal">Live</span>
        <svg
          slot="indicator"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          xmlns="http://www.w3.org/2000/svg"
          style="width: 8px; height: 8px; margin-right: 2px"
        >
          <rect width="8" height="8" rx="2" />
        </svg>
      </media-live-button>
    </template>

    <template partial="PipButton">
      <media-pip-button part="pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
          <path
            d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
          <path
            d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
          />
        </svg>
      </media-pip-button>
    </template>

    <template partial="SeekBackwardButton">
      <media-seek-backward-button
        seekoffset="{{backwardseekoffset ?? 10}}"
        part="seek-backward button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 22 24" slot="icon">
          <path d="M11 6V3L5.37 7 11 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 11 6Z" />
          <text class="value" transform="translate(2.5 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
            {{backwardseekoffset ?? 10}}
          </text>
        </svg>
      </media-seek-backward-button>
    </template>

    <template partial="SeekForwardButton">
      <media-seek-forward-button
        seekoffset="{{forwardseekoffset ?? 10}}"
        part="seek-forward button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 22 24" slot="icon">
          <path d="M11 6V3l5.61 4L11 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 11 6Z" />
          <text class="value" transform="translate(10 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset ?? 10}}
          </text>
        </svg>
      </media-seek-forward-button>
    </template>

    <template partial="AirplayButton">
      <media-airplay-button part="airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="icon">
          <path d="M13.19 14.22a.25.25 0 0 0-.38 0l-5.46 6.37a.25.25 0 0 0 .19.41h10.92a.25.25 0 0 0 .19-.41l-5.46-6.37Z" />
          <path
            d="M22 3H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2.94L8 16.75H4.25V4.25h17.5v12.5H18L19.06 18H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
          />
        </svg>
      </media-airplay-button>
    </template>

    <template partial="CastButton">
      <media-cast-button part="cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
          <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
          <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
          <path
            d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
          <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
          <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
          <path
            d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
          />
          <path d="M20.5 5.5h-15v5.811c3.52.906 6.283 3.67 7.189 7.19H20.5V5.5Z" />
        </svg>
      </media-cast-button>
    </template>

    <template partial="TimeRange">
      <media-time-range part="time range" disabled="{{disabled}}" aria-disabled="{{disabled}}"></media-time-range>
    </template>

    <template partial="VolumeRange">
      <media-volume-range part="volume range" disabled="{{disabled}}" aria-disabled="{{disabled}}"></media-volume-range>
    </template>

    <media-controller
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <div slot="top-chrome">
        <template if="videotitle">
          <template if="videotitle != true">
            <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
          </template>
        </template>
        <template if="!videotitle">
          <template if="title">
            <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
          </template>
        </template>
      </div>

      <template if="streamtype == 'on-demand'">
        <template if="!breakpointsm">
          <media-control-bar>
            {{>PlayButton}} {{>TimeRange}} {{>MuteButton}} {{>CaptionsButton}} {{>FullscreenButton}}
          </media-control-bar>
        </template>

        <template if="breakpointsm">
          <media-control-bar>
            {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeRange}}
            <template if="breakpointmd">
              <media-time-display></media-time-display>
            </template>
            {{>MuteButton}} {{>VolumeRange}} {{>CaptionsButton}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
            {{>FullscreenButton}}
          </media-control-bar>
        </template>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar>
          <div class="live-controls-left">
            {{>LiveButton}}
            <template if="!targetlivewindow">
              <template if="breakpointsm">
                <media-time-display></media-time-display>
              </template>
            </template>
          </div>
          <template if="targetlivewindow > 0">
            <template if="breakpointsm">{{>TimeRange}}</template>
          </template>
          <div class="live-controls-right">
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
            {{>MuteButton}} {{>VolumeRange}} {{>CaptionsButton}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
            {{>FullscreenButton}}
          </div>
        </media-control-bar>
      </template>

      <slot></slot>
    </media-controller>

  `);var Zu=class extends sn{};rc(Zu,"template",Ss);d.customElements&&!d.customElements.get("media-theme-minimal")&&d.customElements.define("media-theme-minimal",Zu);
