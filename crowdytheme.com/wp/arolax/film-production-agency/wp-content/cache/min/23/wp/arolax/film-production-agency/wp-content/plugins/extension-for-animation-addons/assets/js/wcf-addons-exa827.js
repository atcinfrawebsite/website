function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}!function(t){t(window).on("elementor/frontend/init",(function(){var e=t(window).width(),n=elementorFrontend.config.responsive.activeBreakpoints,i=elementorModules.frontend.handlers.Base,o=1.35,s=!1;if(null!==WCF_ADDONS_JS.smoothScroller&&(o=WCF_ADDONS_JS.smoothScroller.smooth,s="on"===WCF_ADDONS_JS.smoothScroller.mobile),"function"==typeof ScrollSmoother&&"object"===("undefined"==typeof gsap?"undefined":_typeof(gsap))){var a=gsap.matchMedia();if(s)ScrollSmoother.create({smooth:o,effects:!0,smoothTouch:.1,normalizeScroll:!1,ignoreMobileResize:!0});else a.add("(min-width: 768px)",(function(){ScrollSmoother.create({smooth:o,effects:!0,smoothTouch:.1,normalizeScroll:!1,ignoreMobileResize:!0})}))}if("object"===("undefined"==typeof gsap?"undefined":_typeof(gsap))){var r=gsap.matchMedia(),l=i.extend({bindEvents:function(){this.run()},run:function(){this.fade_animation(),"widget"===this.getElementType()&&(this.text_animation(),this.image_animation()),this.button_move_animation()},text_animation:function(){var e="all";if(this.getElementSettings("text_animation_breakpoint")){var i=n[this.getElementSettings("text_animation_breakpoint")].value;e="min"===this.getElementSettings("text_breakpoint_min_max")?"min-width: "+i+"px":"max-width: "+i+"px"}if("char"===this.getElementSettings("wcf_text_animation")||"word"===this.getElementSettings("wcf_text_animation")){var o=this.getElementSettings("text_duration"),s=this.getElementSettings("text_stagger"),a=this.getElementSettings("text_translate_x"),l=this.getElementSettings("text_translate_y"),c=this.getElementSettings("text_on_scroll"),g=this.getElementSettings("text_delay"),m=this.findElement(".elementor-widget-container").children().length,d=t(this.findElement(".elementor-widget-container").children()[m-1]),f={duration:o,autoAlpha:0,delay:g,stagger:s};a&&(f.x=a),l&&(f.y=l),c&&(f.scrollTrigger={trigger:d,start:"top 90%"});var h=new SplitText(d,{type:"chars, words"}),p=h.chars;"word"===this.getElementSettings("wcf_text_animation")&&(p=h.words),"all"===e?gsap.from(p,f):r.add("(".concat(e,")"),(function(){return gsap.from(p,f),function(){p.revert()}}))}if("text_move"===this.getElementSettings("wcf_text_animation")){var u=this.getElementSettings("text_duration"),_=this.getElementSettings("text_delay"),S=this.getElementSettings("text_stagger"),v=this.getElementSettings("text_on_scroll"),E=this.getElementSettings("text_rotation_di"),w=this.getElementSettings("text_rotation"),y=this.getElementSettings("text_transform_origin"),x={},b=this.findElement(".elementor-widget-container").children().length,k=t(this.findElement(".elementor-widget-container").children()[b-1]);k.hasClass("wcf--text")&&k.children().length&&(k=k.children());var T={duration:u,delay:_,opacity:0,force3D:!0,transformOrigin:y,stagger:S};if("x"===E&&(T.rotationX=w),"y"===E&&(T.rotationY=w),v&&(x.scrollTrigger={trigger:k,duration:2,start:"top 90%",end:"bottom 60%",scrub:!1,markers:!1,toggleActions:"play none none none"}),"all"===e){var F=gsap.timeline(x),C=new SplitText(k,{type:"lines"});gsap.set(k,{perspective:400}),C.split({type:"lines"}),F.from(C.lines,T)}else r.add("(".concat(e,")"),(function(){var t=gsap.timeline(x),e=new SplitText(k,{type:"lines"});return gsap.set(k,{perspective:400}),e.split({type:"lines"}),t.from(e.lines,T),function(){e.revert(),t.revert()}}))}if("text_reveal"===this.getElementSettings("wcf_text_animation")){var D=this.getElementSettings("text_duration"),A=this.getElementSettings("text_on_scroll"),$=this.getElementSettings("text_stagger"),O=this.getElementSettings("text_delay"),P=this.findElement(".elementor-widget-container").children().length,j=t(this.findElement(".elementor-widget-container").children()[P-1]),H=new SplitText(j,{type:"lines,words,chars",linesClass:"anim-reveal-line"}),M={duration:D,delay:O,ease:"circ.out",y:80,stagger:$,opacity:0};A&&(M.scrollTrigger={trigger:j,start:"top 85%"}),"all"===e?gsap.from(H.chars,M):r.add("(".concat(e,")"),(function(){return gsap.from(H.chars,M),function(){H.revert()}}))}if("text_invert"===this.getElementSettings("wcf_text_animation")){var z=this.findElement(".elementor-widget-container").children().length,J=t(this.findElement(".elementor-widget-container").children()[z-1]),N=J.css("color");if(N=function(t,e,n){t/=255,e/=255,n/=255;var i=Math.max(t,e,n),o=i-Math.min(t,e,n),s=o?i===t?(e-n)/o:i===e?2+(n-t)/o:4+(t-e)/o:0;return[60*s<0?60*s+360:60*s,100*(o?i<=.5?o/(2*i-o):o/(2-(2*i-o)):0),100*(2*i-o)/2]}((N=(N=N.toString()).match(/(\d+)/g))[0],N[1],N[2]),N="".concat(N[0].toFixed(1),", ").concat(N[1].toFixed(1),"%, ").concat(N[2].toFixed(1),"%"),J.css("--text-color",N),"all"===e)new SplitText(J,{type:"lines",linesClass:"invert-line"}).lines.forEach((function(t){gsap.to(t,{backgroundPositionX:0,ease:"none",scrollTrigger:{trigger:t,scrub:1,start:"top 85%",end:"bottom center"}})}));else r.add("(".concat(e,")"),(function(){var t=new SplitText(J,{type:"lines",linesClass:"invert-line"});return t.lines.forEach((function(t){gsap.to(t,{backgroundPositionX:0,ease:"none",scrollTrigger:{trigger:t,scrub:1,start:"top 85%",end:"bottom center"}})})),function(){t.revert()}}))}},image_animation:function(){if("reveal"===this.getElementSettings("wcf-image-animation")){var e=this.findElement("img").parent(),n=this.$element;this.findElement("img").parent().parent().css("overflow","hidden"),e.css({overflow:"hidden",display:"block",visibility:"hidden",transition:"none"});var i=this.getElementSettings("image-ease"),o=!1,s="";t.each(["effect-zoom-in","effect-zoom-out","left-move","right-move"],(function(t,e){n.hasClass("wcf--image-".concat(e))&&(o=!0,s="wcf--image-".concat(e),n.removeClass(s))})),e.each((function(){var e=t(this).find("img"),a=gsap.timeline({scrollTrigger:{trigger:t(this),start:"top 50%"}});a.set(t(this),{autoAlpha:1}),a.from(t(this),1.5,{xPercent:-100,ease:i,onComplete:function(){o&&(n.addClass(s),o=!1)}}),a.from(e,1.5,{xPercent:100,scale:1.3,delay:-1.5,ease:i})}))}if("scale"===this.getElementSettings("wcf-image-animation")){var a=this.findElement("img"),r=this.getElementSettings("wcf-animation-start");"custom"===this.getElementSettings("wcf-animation-start")&&(r=this.getElementSettings("wcf_animation_custom_start")),gsap.set(a,{scale:this.getElementSettings("wcf-scale-start")}),gsap.to(a,{scrollTrigger:{trigger:this.$element,start:r,scrub:!0},scale:this.getElementSettings("wcf-scale-end"),ease:this.getElementSettings("image-ease")}),a.parent().css("overflow","hidden")}if("stretch"===this.getElementSettings("wcf-image-animation")){var l=this.findElement("img"),c=this.findElement("img").parent();c.css("padding-bottom","395px"),gsap.timeline({scrollTrigger:{trigger:c,start:"top top",pin:!0,scrub:1,pinSpacing:!1,end:"bottom bottom+=100"}}).to(l,{width:"100%",borderRadius:"0px"}),c.css("transition","none")}},fade_animation:function(){var t=this;if("fade"===this.getElementSettings("wcf-animation")&&(!this.isEdit||this.getElementSettings("wcf_enable_animation_editor"))){var e=this.getElementSettings("fade-from"),i=this.getElementSettings("on-scroll"),o=this.getElementSettings("data-duration"),s=this.getElementSettings("fade-offset"),a=this.getElementSettings("delay"),l=this.getElementSettings("ease"),c="all";if(this.getElementSettings("fade_animation_breakpoint")){var g=n[this.getElementSettings("fade_animation_breakpoint")].value;c="min"===this.getElementSettings("fade_breakpoint_min_max")?"min-width: "+g+"px":"max-width: "+g+"px"}var m={opacity:0,ease:l,duration:o,delay:a};"top"===e&&(m.y=-s),"bottom"===e&&(m.y=s),"left"===e&&(m.x=-s),"right"===e&&(m.x=s),i&&(m.scrollTrigger={trigger:this.$element,start:"top 85%"}),this.$element.css("transition","none"),"all"===c?gsap.from(this.$element,m):r.add("(".concat(c,")"),(function(){return gsap.from(t.$element,m),function(){}}))}},button_move_animation:function(){var e=this.findElement(".btn-wrapper"),n=this.findElement(".btn-item");if(e.length){var i=function(t,n,i){var o=t.pageX-e.offset().left,s=t.pageY-e.offset().top;gsap.to(n,.5,{x:(o-e.width()/2)/e.width()*i,y:(s-e.height()/2)/e.height()*i,ease:Power2.easeOut})};e.mousemove((function(t){!function(t){i(t,n,80)}(t)})),e.mouseleave((function(t){gsap.to(n,.5,{x:0,y:0,ease:Power2.easeOut})}))}var o=this.findElement(".btn-hover-bgchange");if(o.length){var s=document.createElement("span");o.append(s),o.on("mouseenter",(function(e){var n=e.pageX-t(this).offset().left,i=e.pageY-t(this).offset().top;t(this).find("span").css({top:i,left:n})})),o.on("mouseout",(function(e){var n=e.pageX-t(this).offset().left,i=e.pageY-t(this).offset().top;t(this).find("span").css({top:i,left:n})}))}}});elementorFrontend.hooks.addAction("frontend/element_ready/widget",(function(t){elementorFrontend.elementsHandler.addHandler(l,{$element:t})})),elementorFrontend.hooks.addAction("frontend/element_ready/container",(function(t){elementorFrontend.elementsHandler.addHandler(l,{$element:t})}));var c=i.extend({bindEvents:function(){this.isEdit||"section"!==this.getElementType()&&"container"!==this.getElementType()||"yes"===this.getElementSettings("wcf_enable_pin_area")&&(this.getElementSettings("wcf_pin_breakpoint")?e>n[this.getElementSettings("wcf_pin_breakpoint")].value&&this.run():this.run())},run:function(){var t=this.$element,e=this.getElementSettings("wcf_pin_area_start"),n=this.getElementSettings("wcf_pin_area_end");"custom"===e&&(e=this.getElementSettings("wcf_pin_area_start_custom")),"custom"===n&&(n=this.getElementSettings("wcf_pin_area_end_custom")),this.getElementSettings("wcf_custom_pin_area")&&(t=this.getElementSettings("wcf_custom_pin_area")),gsap.to(this.$element,{scrollTrigger:{trigger:t,pin:this.$element,pinSpacing:!1,start:e,end:n,delay:.5}}),this.$element.css("transition","none")}});elementorFrontend.hooks.addAction("frontend/element_ready/global",(function(t){elementorFrontend.elementsHandler.addHandler(c,{$element:t})}))}var g=i.extend({bindEvents:function(){this.run()},run:function(){var e=this;this.getElementSettings("wcf_enable_popup")&&(this.isEdit&&!this.getElementSettings("wcf_enable_popup_editor")&&t.magnificPopup.close({items:{src:t('<div id="wcf--popup" class="wcp--popup"></div>'),type:"inline"}}),this.$element.on("click",(function(t){t.preventDefault(),e.isEdit&&!e.getElementSettings("wcf_enable_popup_editor")||e.ajax_call()})))},ajax_call:function(){var e=this.getElementSettings("popup_animation"),n=this.getElementSettings("popup_animation_delay");t.ajax({url:WCF_ADDONS_JS.ajaxUrl,data:{action:"wcf_load_popup_content",widget_id:this.getID(),post_id:WCF_ADDONS_JS.post_id,nonce:WCF_ADDONS_JS._wpnonce},dataType:"json",type:"POST",success:function(i){var o={removalDelay:n,items:{src:t('<div id="wcf--popup" class="wcp--popup  mfp-with-anim" >'.concat(i.html,"</div>")),type:"inline"},callbacks:{beforeOpen:function(){this.st.mainClass=e}}};t.magnificPopup.open(o)}})}});elementorFrontend.hooks.addAction("frontend/element_ready/container",(function(t){elementorFrontend.elementsHandler.addHandler(g,{$element:t})}));elementorFrontend.hooks.addAction("frontend/element_ready/wcf--video-mask.default",(function(e){t(".video--btn",e).on("click",(function(){e.toggleClass("mask-open"),t(".open-title",e).toggle(),t(".close-title",e).toggle();var n=e.data("id");e.closest(".wcf-video-mask-content").toggleClass("wcf-video-mask-content-".concat(n)),t("video",e).each((function(){this.autoplay||(this.paused?this.play():this.pause())}))}))}));for(var m=function(e){t(".wcf-popup-btn",e).magnificPopup({type:"iframe"});var n=t(".thumb video",e);n.length&&t(".wcf--video-box",e).hover((function(){n.get(0).play()}),(function(){n.get(0).pause(),n.get(0).currentTime=0}))},d=0,f=["video-popup","video-box","video-box-slider"];d<f.length;d++){var h=f[d];elementorFrontend.hooks.addAction("frontend/element_ready/wcf--".concat(h,".default"),m)}}))}(jQuery)