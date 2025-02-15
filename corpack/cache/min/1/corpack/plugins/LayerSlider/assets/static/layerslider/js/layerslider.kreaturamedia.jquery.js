!(function (te) {
  "use strict";
  (window._layerSliders = {}),
    (window._lsData = {
      $overflowWrapper: te("body").length ? te("body") : te("html"),
      isMobile:
        !!navigator.userAgent.match(
          /(iPhone|iPod|iPad|Android|BlackBerry|BB10|webOS|Windows Phone|IEMobile|mobi|opera mini|nexus 7)/i
        ) ||
        (navigator.maxTouchPoints &&
          2 < navigator.maxTouchPoints &&
          /Macintosh/.test(navigator.userAgent)),
      supportOrientation: !!window.DeviceOrientationEvent,
      screen: {},
      document: {},
      viewport: {},
      scroll: {},
      resize: {},
      getScreenSize: function () {
        window._lsData.screen = {
          width: screen.width,
          height: screen.height,
          ratio: screen.ratio,
        };
      },
    }),
    te(window).on("resize.lsGlobal", function () {
      window._lsData.documentIsAccessible &&
        ((window._lsData.document = {
          width: document.body.scrollWidth,
          height: document.body.scrollHeight,
        }),
        (window._lsData.viewport = {
          lastWidth: window._lsData.viewport.width || 0,
          lastHeight: window._lsData.viewport.height || 0,
          width: te(window).width(),
          height: te(window).height(),
        }),
        te(window).trigger("scroll.lsGlobal"),
        window._lsData.resize.timeout &&
          clearTimeout(window._lsData.resize.timeout),
        window._lsData.resize.once
          ? (window._lsData.resize.once = !1)
          : (window._lsData.resize.timeout = setTimeout(function () {
              (window._lsData.resize.once = !0),
                te(window).trigger("resize.lsGlobal");
            }, 100)));
    }),
    te(window).on("scroll.lsGlobal", function () {
      window._lsData.documentIsAccessible &&
        (window._lsData.scroll = {
          left: window.pageXOffset,
          top: window.pageYOffset,
          leftMax:
            window._lsData.document.width - window._lsData.viewport.width,
          topMax:
            window._lsData.document.height - window._lsData.viewport.height,
        });
    }),
    (te.fn.layerSlider = function (i, s, a, r) {
      (window._lsData.documentIsAccessible = !0), (i = i || {});
      var t,
        e = "1.8.0",
        o = te.fn.jquery;
      if (window._layerSlider.checkVersions(e, o, e))
        return (typeof i).match("object|undefined")
          ? this.each(function (e) {
              (t = "LS" + Math.random().toString(36).substr(2, 9)),
                te(this).data("lsSliderUID") ||
                  (window._layerSliders[t] = new n(this, te(this), i, t));
            })
          : "data" === i
          ? window._layerSliders[this.data("lsSliderUID")]
          : "eventData" === i
          ? window._layerSliders[this.data("lsSliderUID")].api.eventData()
          : "defaultInitOptions" === i
          ? window._layerSliders[this.data("lsSliderUID")].defaults.init
              .options || !1
          : "userInitOptions" === i
          ? window._layerSliders[this.data("lsSliderUID")].userInitOptions || !1
          : "sliderInitOptions" === i
          ? window._layerSliders[this.data("lsSliderUID")].o || !1
          : "originalMarkup" === i
          ? window._layerSliders[this.data("lsSliderUID")].originalMarkup || !1
          : this.each(function (e) {
              var t = window._layerSliders[te(this).data("lsSliderUID")];
              t && t.api.methods(i, s, a, r), (t = null);
            });
      window._layerSlider.showNotice(this, "oldjquery", o, e);
    });
  var n = function (I, $, i, B) {
    $.data("lsSliderUID", B).attr("data-layerslider-uid", B);
    var Z = this,
      J = (Z.gsap = window._layerSlider.GSAP || window),
      W = te(window),
      ee = window._lsData;
    (Z.defaults = {
      init: {
        lsDataArraySplitChar: "|",
        dataKey: "_LS",
        controls: [
          "#playmedia",
          "#pausemedia",
          "#unmute",
          "#unmutemedia",
          "#start",
          "#stop",
          "#prev",
          "#next",
          "#replay",
          "#reverse",
          "#reverse-replay",
          "#reversereplay",
        ],
        options: {
          silentMode: !1,
          getData: !1,
          destroyAfter: !0,
          type: "responsive",
          fullSizeMode: "normal",
          fitScreenWidth: !0,
          calculateOffsetFrom: !1,
          preventSliderClip: !0,
          allowFullscreen: !1,
          performanceMode: !0,
          performanceModeThreshold: "20sh",
          responsiveUnder: -1,
          layersContainerWidth: -1,
          layersContainerHeight: -1,
          maxRatio: -1,
          insertMethod: "prependTo",
          insertSelector: null,
          clipSlideTransition: !1,
          slideBGSize: "cover",
          slideBGPosition: "50% 50%",
          preferBlendMode: !1,
          scene: !1,
          sceneHeight: 2,
          sceneSpeed: 100,
          sceneDuration: null,
          smoothScrollDuration: 1e3,
          stickTo: "center",
          autoStart: !0,
          startInViewport: !0,
          playByScroll: !1,
          playByScrollSpeed: 1,
          playByScrollStart: !1,
          playByScrollSkipSlideBreaks: !1,
          pauseOnHover: !1,
          pauseLayers: !1,
          firstSlide: 1,
          sliderFadeInDuration: 0,
          cycles: -1,
          forceCycles: !0,
          twoWaySlideshow: !1,
          shuffleSlideshow: !1,
          forceLayersOutDuration: 750,
          slideDuration: !1,
          slideDurationWithoutLayers: 3e3,
          slideTransitionDuration: !1,
          slideTimeShift: 0,
          skin: "v6",
          skinsPath: "/layerslider/skins/",
          globalBGColor: "transparent",
          globalBGImage: !1,
          globalBGRepeat: "no-repeat",
          globalBGAttachment: "scroll",
          globalBGSize: "auto",
          globalBGPosition: "50% 50%",
          marginTop: !1,
          marginBottom: !1,
          navPrevNext: !0,
          navStartStop: !0,
          navButtons: !0,
          keybNav: !0,
          touchNav: !0,
          hoverPrevNext: !0,
          hoverBottomNav: !1,
          showBarTimer: !1,
          showCircleTimer: !0,
          showSlideBarTimer: !1,
          thumbnailNavigation: "hover",
          tnContainerWidth: "60%",
          tnWidth: 100,
          tnHeight: 60,
          tnActiveOpacity: 35,
          tnInactiveOpacity: 100,
          scrollModifier: 0,
          autoPlayVideos: !0,
          autoPauseSlideshow: "auto",
          youtubePreview: "maxresdefault.jpg",
          rememberUnmuteState: !0,
          parallaxCenterDegree: 40,
          parallaxSensitivity: 10,
          parallaxCenterLayers: "center",
          parallaxScrollReverse: !1,
          scrollCenterLayers: "center",
          yourLogo: !1,
          yourLogoStyle: "left: -10px; top: -10px;",
          yourLogoLink: !1,
          yourLogoTarget: "_self",
          optimizeForMobile: !0,
          hideOnMobile: !1,
          hideUnder: -1,
          hideOver: -1,
          slideOnSwipe: !0,
          allowRestartOnResize: !1,
          fixFloatedContainers: !1,
          useSrcset: !0,
          hashChange: !1,
          refreshWaypoint: !0,
          staticImage: "",
        },
      },
      slider: { errorText: "LayerSlider (UID: " + B + ") error:" },
      slide: {
        keys: {
          slidedelay: ["data", "duration"],
          duration: ["data", "duration"],
          timeshift: ["data", "timeShift"],
          transition2d: ["data", "transition2d"],
          transition3d: ["data", "transition3d"],
          transitionorigami: ["data", "transitionorigami"],
          customtransition2d: ["data", "customtransition2d"],
          customtransition3d: ["data", "customtransition3d"],
          transitionduration: ["data", "transitionDuration"],
          backgroundsize: ["data", "backgroundSize"],
          bgsize: ["data", "backgroundSize"],
          backgroundposition: ["data", "backgroundPosition"],
          bgposition: ["data", "backgroundPosition"],
          backgroundcolor: ["data", "backgroundColor"],
          bgcolor: ["data", "backgroundColor"],
          thumbnail: ["data", "thumbnail"],
          deeplink: ["data", "deeplink"],
          overflow: ["data", "overflow"],
          kenburnspan: ["kenBurns", "pan"],
          kenburnszoom: ["kenBurns", "zoom"],
          kenburnsrotation: ["kenBurns", "rotation"],
          kenburnsrotate: ["kenBurns", "rotation"],
          kenburnsscale: ["kenBurns", "scale"],
          filterfrom: ["filter", "from"],
          filterto: ["filter", "to"],
          parallaxtype: ["parallax", "type"],
          parallaxevent: ["parallax", "event"],
          parallaxpath: ["parallax", "path"],
          parallaxdirection: ["parallax", "direction"],
          parallaxduration: ["parallax", "duration"],
          parallaxcount: ["parallax", "count"],
          parallaxdelay: ["parallax", "startAt"],
          parallaxstartat: ["parallax", "startAt"],
          parallaxaxis: ["parallax", "axis"],
          parallaxtransformorigin: ["parallax", "transformOrigin"],
          parallaxdurationmove: ["parallax", "durationMove"],
          parallaxdurationleave: ["parallax", "durationLeave"],
          parallaxrotate: ["parallax", "rotation"],
          parallaxrotation: ["parallax", "rotation"],
          parallaxdistance: ["parallax", "distance"],
          parallaxtransformperspective: ["parallax", "transformPerspective"],
          globalhover: ["data", "globalhover"],
        },
        options: {
          $link: !1,
          index: -1,
          data: { duration: -1, timeShift: 0, calculatedTimeShift: 0 },
          parallax: {},
          kenBurns: { scale: 1.2 },
          filter: {},
        },
        registerPluginDefaults: function (e, t, i) {
          Z.defaults.slide.options.plugins ||
            (Z.defaults.slide.options.plugins = {}),
            (Z.defaults.slide.options.plugins[e] = t);
        },
      },
      layer: {
        keys: {
          keyframe: ["is"],
          responsive: ["is"],
          pinned: ["is"],
          position: ["settings"],
          static: ["settings"],
          minresponsiveratio: ["settings"],
          maxresponsiveratio: ["settings"],
          minfontsize: ["styleSettings"],
          minmobilefontsize: ["styleSettings"],
          overlay: ["styleSettings"],
          pointerevents: ["styleSettings"],
          autoplay: ["mediaSettings"],
          controls: ["mediaSettings"],
          showinfo: ["mediaSettings"],
          fillmode: ["mediaSettings"],
          thumbnail: ["poster", "mediaSettings"],
          poster: ["mediaSettings"],
          volume: ["mediaSettings"],
          muted: ["mediaSettings"],
          loopmedia: ["loop", "mediaSettings"],
          backgroundvideo: ["backgroundVideo", "mediaSettings"],
          fadein: ["opacity", "inLayerFromCSS"],
          opacityin: ["opacity", "inLayerFromCSS"],
          rotatein: ["rotation", "inLayerFromCSS"],
          rotatexin: ["rotationX", "inLayerFromCSS"],
          rotateyin: ["rotationY", "inLayerFromCSS"],
          rotationin: ["rotation", "inLayerFromCSS"],
          rotationxin: ["rotationX", "inLayerFromCSS"],
          rotationyin: ["rotationY", "inLayerFromCSS"],
          scalein: ["scale", "inLayerFromCSS"],
          scalexin: ["scaleX", "inLayerFromCSS"],
          scaleyin: ["scaleY", "inLayerFromCSS"],
          skewxin: ["skewX", "inLayerFromCSS"],
          skewyin: ["skewY", "inLayerFromCSS"],
          bgcolorin: ["backgroundColor", "inLayerStyleFromCSS"],
          colorin: ["color", "inLayerStyleFromCSS"],
          radiusin: ["borderRadius", "inLayerStyleShouldBeConvertedFrom"],
          widthin: ["width", "inLayerStyleShouldBeConvertedFrom"],
          heightin: ["height", "inLayerStyleShouldBeConvertedFrom"],
          filterin: ["filter", "inLayerStyleShouldBeConvertedFrom"],
          rotate: ["rotation", "inLayerToCSS"],
          rotatex: ["rotationX", "inLayerToCSS"],
          rotatey: ["rotationY", "inLayerToCSS"],
          rotation: ["rotation", "inLayerToCSS"],
          rotationx: ["rotationX", "inLayerToCSS"],
          rotationy: ["rotationY", "inLayerToCSS"],
          scale: ["scale", "inLayerToCSS"],
          scalex: ["scaleX", "inLayerToCSS"],
          scaley: ["scaleY", "inLayerToCSS"],
          skewx: ["skewX", "inLayerToCSS"],
          skewy: ["skewY", "inLayerToCSS"],
          transformoriginin: ["transformOrigin", "inLayerShouldBeConverted"],
          offsetxin: ["x", "inLayerShouldBeConverted"],
          offsetyin: ["y", "inLayerShouldBeConverted"],
          clipin: ["clip", "inClipShouldBeConverted"],
          delayin: ["startAt", "in"],
          startatin: ["startAt", "in"],
          instartat: ["startAt", "in"],
          durationin: ["duration", "in"],
          easein: ["ease", "in"],
          easingin: ["ease", "in"],
          transitionin: ["enabled", "in"],
          transformmirrorin: ["mirror", "in"],
          skipviewport: ["skipViewport", "settings"],
          textfadein: ["opacity", "textInNodesFrom"],
          textopacityin: ["opacity", "textInNodesFrom"],
          textrotatein: ["rotation", "textInNodesFrom"],
          textrotatexin: ["rotationX", "textInNodesFrom"],
          textrotateyin: ["rotationY", "textInNodesFrom"],
          textrotationin: ["rotation", "textInNodesFrom"],
          textrotationxin: ["rotationX", "textInNodesFrom"],
          textrotationyin: ["rotationY", "textInNodesFrom"],
          textscalein: ["scale", "textInNodesFrom"],
          textscalexin: ["scaleX", "textInNodesFrom"],
          textscaleyin: ["scaleY", "textInNodesFrom"],
          textskewxin: ["skewX", "textInNodesFrom"],
          textskewyin: ["skewY", "textInNodesFrom"],
          textcolorin: ["color", "textInNodesFrom"],
          textoverflowin: ["overflow", "textInLayerStyle"],
          texteasein: ["ease", "textInNodesTo"],
          texteasingin: ["ease", "textInNodesTo"],
          texttransformoriginin: ["transformOrigin", "textInShouldBeConverted"],
          textoffsetxin: ["x", "textInShouldBeConverted"],
          textoffsetyin: ["y", "textInShouldBeConverted"],
          texttypein: ["type", "textIn"],
          textshiftin: ["shiftNodes", "textIn"],
          textdelayin: ["startAt", "textIn"],
          textstartatin: ["startAt", "textIn"],
          textinstartat: ["startAt", "textIn"],
          textdurationin: ["duration", "textIn"],
          texttransitionin: ["enabled", "textIn"],
          texttransformmirrorin: ["mirror", "textIn"],
          fadeout: ["opacity", "outLayerToCSS"],
          opacityout: ["opacity", "outLayerToCSS"],
          rotateout: ["rotation", "outLayerToCSS"],
          rotatexout: ["rotationX", "outLayerToCSS"],
          rotateyout: ["rotationY", "outLayerToCSS"],
          rotationout: ["rotation", "outLayerToCSS"],
          rotationxout: ["rotationX", "outLayerToCSS"],
          rotationyout: ["rotationY", "outLayerToCSS"],
          scaleout: ["scale", "outLayerToCSS"],
          scalexout: ["scaleX", "outLayerToCSS"],
          scaleyout: ["scaleY", "outLayerToCSS"],
          skewxout: ["skewX", "outLayerToCSS"],
          skewyout: ["skewY", "outLayerToCSS"],
          bgcolorout: ["backgroundColor", "outLayerStyleToCSS"],
          colorout: ["color", "outLayerStyleToCSS"],
          radiusout: ["borderRadius", "outLayerStyleShouldBeConvertedTo"],
          widthout: ["width", "outLayerStyleShouldBeConvertedTo"],
          heightout: ["height", "outLayerStyleShouldBeConvertedTo"],
          filterout: ["filter", "outLayerStyleShouldBeConvertedTo"],
          transformoriginout: ["transformOrigin", "outLayerShouldBeConverted"],
          offsetxout: ["x", "outLayerShouldBeConverted"],
          offsetyout: ["y", "outLayerShouldBeConverted"],
          clipout: ["clip", "outClipShouldBeConverted"],
          showuntil: ["showUntil", "out"],
          startatout: ["startAt", "out"],
          outstartat: ["startAt", "out"],
          durationout: ["duration", "out"],
          easeout: ["ease", "out"],
          easingout: ["ease", "out"],
          transitionout: ["enabled", "out"],
          transformmirrorout: ["mirror", "out"],
          textfadeout: ["opacity", "textOutNodesTo"],
          textopacityout: ["opacity", "textOutNodesTo"],
          textrotateout: ["rotation", "textOutNodesTo"],
          textrotatexout: ["rotationX", "textOutNodesTo"],
          textrotateyout: ["rotationY", "textOutNodesTo"],
          textrotationout: ["rotation", "textOutNodesTo"],
          textrotationxout: ["rotationX", "textOutNodesTo"],
          textrotationyout: ["rotationY", "textOutNodesTo"],
          textscaleout: ["scale", "textOutNodesTo"],
          textscalexout: ["scaleX", "textOutNodesTo"],
          textscaleyout: ["scaleY", "textOutNodesTo"],
          textskewxout: ["skewX", "textOutNodesTo"],
          textskewyout: ["skewY", "textOutNodesTo"],
          textcolorout: ["color", "textOutNodesTo"],
          texteaseout: ["ease", "textOutNodesTo"],
          texteasingout: ["ease", "textOutNodesTo"],
          texttransformoriginout: [
            "transformOrigin",
            "textOutShouldBeConverted",
          ],
          textoffsetxout: ["x", "textOutShouldBeConverted"],
          textoffsetyout: ["y", "textOutShouldBeConverted"],
          textoverflowout: ["overflow", "textOutLayerStyle"],
          texttypeout: ["type", "textOut"],
          textshiftout: ["shiftNodes", "textOut"],
          textdelayout: ["startAt", "textOut"],
          textstartatout: ["startAt", "textOut"],
          textoutstartat: ["startAt", "textOut"],
          textdurationout: ["duration", "textOut"],
          texttransitionout: ["enabled", "textOut"],
          texttransformmirrorout: ["mirror", "textOut"],
          loopopacity: ["opacity", "loopToCSS"],
          looprotate: ["rotation", "loopToCSS"],
          looprotatex: ["rotationX", "loopToCSS"],
          looprotatey: ["rotationY", "loopToCSS"],
          looprotation: ["rotation", "loopToCSS"],
          looprotationx: ["rotationX", "loopToCSS"],
          looprotationy: ["rotationY", "loopToCSS"],
          loopscale: ["scale", "loopToCSS"],
          loopscalex: ["scaleX", "loopToCSS"],
          loopscaley: ["scaleY", "loopToCSS"],
          loopskewx: ["skewX", "loopToCSS"],
          loopskewy: ["skewY", "loopToCSS"],
          looptransformorigin: [
            "transformOrigin",
            "loopLayerShouldBeConverted",
          ],
          loopoffsetx: ["x", "loopLayerShouldBeConverted"],
          loopoffsety: ["y", "loopLayerShouldBeConverted"],
          loopfilter: ["filter", "loopLayerShouldBeConverted"],
          loopclip: ["clip", "loopClipShouldBeConverted"],
          loopdelay: ["startAt", "loop"],
          loopstartat: ["startAt", "loop"],
          loopduration: ["duration", "loop"],
          loopcount: ["count", "loop"],
          looprepeatdelay: ["repeatDelay", "loop"],
          loopyoyo: ["yoyo", "loop"],
          loopease: ["ease", "loop"],
          loopeasing: ["ease", "loop"],
          loop: ["enabled", "loop"],
          hoveropacity: ["opacity", "hoverToCSS"],
          hoverrotate: ["rotation", "hoverToCSS"],
          hoverrotatex: ["rotationX", "hoverToCSS"],
          hoverrotatey: ["rotationY", "hoverToCSS"],
          hoverrotation: ["rotation", "hoverToCSS"],
          hoverrotationx: ["rotationX", "hoverToCSS"],
          hoverrotationy: ["rotationY", "hoverToCSS"],
          hoverscale: ["scale", "hoverToCSS"],
          hoverscalex: ["scaleX", "hoverToCSS"],
          hoverscaley: ["scaleY", "hoverToCSS"],
          hoverskewx: ["skewX", "hoverToCSS"],
          hoverskewy: ["skewY", "hoverToCSS"],
          hoverbgcolor: ["backgroundColor", "hoverToCSS"],
          hovercolor: ["color", "hoverToCSS"],
          hoverease: ["easeIn", "hover"],
          hovereasing: ["easeIn", "hover"],
          hovereasein: ["easeIn", "hover"],
          hovereasingin: ["easeIn", "hover"],
          hovereaseout: ["easeOut", "hover"],
          hovereasingout: ["easeOut", "hover"],
          hoverduration: ["durationIn", "hover"],
          hoverdurationin: ["durationIn", "hover"],
          hoverdurationout: ["durationOut", "hover"],
          hoveralwaysontop: ["alwaysOnTop", "hover"],
          hoveroffsetx: ["x", "hoverShouldBeConverted"],
          hoveroffsety: ["y", "hoverShouldBeConverted"],
          hoverfilter: ["filter", "hoverShouldBeConverted"],
          hoverborderradius: ["borderRadius", "hoverShouldBeConverted"],
          hoverradius: ["borderRadius", "hoverShouldBeConverted"],
          hovertransformorigin: ["transformOrigin", "hoverShouldBeConverted"],
          hover: ["enabled", "hover"],
          kenburnspan: ["pan", "kenBurns"],
          kenburnszoom: ["zoom", "kenBurns"],
          kenburnsrotation: ["rotation", "kenBurns"],
          kenburnsrotate: ["rotation", "kenBurns"],
          kenburnsscale: ["scale", "kenBurns"],
          parallaxlevel: ["level", "parallax"],
          parallaxtype: ["type", "parallax"],
          parallaxevent: ["event", "parallax"],
          parallaxpath: ["path", "parallax"],
          parallaxdirection: ["direction", "parallax"],
          parallaxduration: ["duration", "parallax"],
          parallaxcount: ["count", "parallax"],
          parallaxdelay: ["startAt", "parallax"],
          parallaxstartat: ["startAt", "parallax"],
          parallaxaxis: ["axis", "parallax"],
          parallaxtransformorigin: ["transformOrigin", "parallax"],
          parallaxdurationmove: ["durationMove", "parallax"],
          parallaxdurationleave: ["durationLeave", "parallax"],
          parallaxrotate: ["rotation", "parallax"],
          parallaxrotation: ["rotation", "parallax"],
          parallaxdistance: ["distance", "parallax"],
          parallax: ["enabled", "parallax"],
          scroll: ["enabled", "scroll"],
          scrollduration: ["duration", "scroll"],
          scrollcenter: ["center", "scroll"],
          scrollopacity: ["opacity", "scroll"],
          scrollopacitymin: ["opacitymin", "scroll"],
          scrollopacitymax: ["opacitymax", "scroll"],
          scrollopacityyoyo: ["opacityyoyo", "scroll"],
          scrollopacityinvert: ["opacityinvert", "scroll"],
          scrollrotate: ["rotation", "scroll"],
          scrollrotatemin: ["rotationmin", "scroll"],
          scrollrotatemax: ["rotationmax", "scroll"],
          scrollrotateyoyo: ["rotationyoyo", "scroll"],
          scrollrotatex: ["rotationX", "scroll"],
          scrollrotatexmin: ["rotationXmin", "scroll"],
          scrollrotatexmax: ["rotationXmax", "scroll"],
          scrollrotatexyoyo: ["rotationXyoyo", "scroll"],
          scrollrotatey: ["rotationY", "scroll"],
          scrollrotateymin: ["rotationYmin", "scroll"],
          scrollrotateymax: ["rotationYmax", "scroll"],
          scrollrotateyyoyo: ["rotationYyoyo", "scroll"],
          scrollrotation: ["rotation", "scroll"],
          scrollrotationmin: ["rotationmin", "scroll"],
          scrollrotationmax: ["rotationmax", "scroll"],
          scrollrotationyoyo: ["rotationyoyo", "scroll"],
          scrollrotationx: ["rotationX", "scroll"],
          scrollrotationxmin: ["rotationXmin", "scroll"],
          scrollrotationxmax: ["rotationXmax", "scroll"],
          scrollrotationxyoyo: ["rotationXyoyo", "scroll"],
          scrollrotationy: ["rotationY", "scroll"],
          scrollrotationymin: ["rotationYmin", "scroll"],
          scrollrotationymax: ["rotationYmax", "scroll"],
          scrollrotationyyoyo: ["rotationYyoyo", "scroll"],
          scrollscalex: ["scaleX", "scroll"],
          scrollscalexmin: ["scaleXmin", "scroll"],
          scrollscalexmax: ["scaleXmax", "scroll"],
          scrollscalexyoyo: ["scaleXyoyo", "scroll"],
          scrollscaley: ["scaleY", "scroll"],
          scrollscaleymin: ["scaleYmin", "scroll"],
          scrollscaleymax: ["scaleYmax", "scroll"],
          scrollscaleyyoyo: ["scaleYyoyo", "scroll"],
          scrollskewx: ["skewX", "scroll"],
          scrollskewxmin: ["skewXmin", "scroll"],
          scrollskewxmax: ["skewXmax", "scroll"],
          scrollskewxyoyo: ["skewXyoyo", "scroll"],
          scrollskewy: ["skewY", "scroll"],
          scrollskewymin: ["skewYmin", "scroll"],
          scrollskewymax: ["skewYmax", "scroll"],
          scrollskewyyoyo: ["skewYyoyo", "scroll"],
          scrolloffsetx: ["x", "scroll"],
          scrolloffsetxmin: ["xmin", "scroll"],
          scrolloffsetxmax: ["xmax", "scroll"],
          scrolloffsetxyoyo: ["xyoyo", "scroll"],
          scrolloffsetxresponsive: ["xresponsive", "scroll"],
          scrolloffsety: ["y", "scroll"],
          scrolloffsetymin: ["ymin", "scroll"],
          scrolloffsetymax: ["ymax", "scroll"],
          scrolloffsetyyoyo: ["yyoyo", "scroll"],
          scrolloffsetyresponsive: ["yresponsive", "scroll"],
          scrolltransformorigin: ["transformOrigin", "scrollShouldBeConverted"],
          scrollgetposition: ["getPosition", "scroll"],
          transformperspective: ["layer", "transformPerspective"],
          transformperspectivein: ["layer", "transformPerspective"],
          transformperspectiveout: ["layer", "transformPerspective"],
          texttransformperspective: ["text", "transformPerspective"],
          texttransformperspectivein: ["text", "transformPerspective"],
          texttransformperspectiveout: ["text", "transformPerspective"],
          looptransformperspective: ["loop", "transformPerspective"],
          hovertransformperspective: ["hover", "transformPerspective"],
          parallaxtransformperspective: ["parallax", "transformPerspective"],
          scrolltransformperspective: ["scroll", "transformPerspective"],
        },
        splitTypeKeys: [
          "chars_asc",
          "chars_desc",
          "chars_rand",
          "chars_center",
          "chars_edge",
          "words_asc",
          "words_desc",
          "words_rand",
          "words_center",
          "words_edge",
          "lines_asc",
          "lines_desc",
          "lines_rand",
          "lines_center",
          "lines_edge",
        ],
        timelineHierarchy: {
          slidestart: [0],
          transitioninstart: [1],
          transitioninend: [2],
          textinstart: [3, [1, 2, 6, 7, 8]],
          textinend: [4],
          allinend: [5],
          loopstart: [6, [1, 2, 3, 4, 5]],
          loopend: [7],
          autoparallaxstart: [6.5, [0, 1, 2, 3, 4, 5, 6, 7]],
          autoparallaxend: [7.5],
          transitioninandloopend: [8],
          textinandloopend: [9],
          allinandloopend: [10],
          textoutstart: [11, [2, 3, 4, 5, 6, 7, 8, 9, 10]],
          textoutend: [12],
          textoutandloopend: [13],
          transitionoutstart: [14, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]],
          transitionoutend: [15],
          alloutend: [16],
          alloutandloopend: [17],
        },
        properties: {
          filter: function () {
            return {
              blur: 0,
              brightness: 100,
              contrast: 100,
              grayscale: 0,
              "hue-rotate": 0,
              invert: 0,
              saturate: 100,
              sepia: 0,
            };
          },
        },
        options: function (e, t) {
          t = {
            is: {
              slideBackground: !!e.is("img.ls-bg"),
              backgroundVideo: !!e.is(".ls-bg-video"),
              imageLayer: !!e.is("img.ls-layer"),
              layerGroup: !!e.is(".ls-layer-group"),
              insideLayerGroup: !!e.data("$layerGroup"),
              mediaLayer: !1,
              textLayer: !1,
              responsive: !0,
              onSlide: t,
            },
            should: {},
            elements: {},
            settings: { position: "relative", slideIn: t, slideOut: t },
            styleSettings: { minfontsize: 0, minmobilefontsize: 0 },
            mediaSettings: { fillmode: "cover", backgroundVideo: !1 },
            timeline: {
              slidestart: 0,
              transitioninstart: 0,
              transitioninend: 0,
              textinstart: 0,
              textinend: 0,
              allinend: function (e) {
                return Math.max(this.transitioninend, this.textinend);
              },
              loopstart: 0,
              loopend: 0,
              transitioninandloopend: function (e) {
                return (
                  0 === this.loopend &&
                  e.loop.enabled &&
                  ("number" == typeof e.loop.startAt ||
                    (-1 !== e.loop.startAt.indexOf("textinstart") &&
                      -1 !== e.loop.startAt.indexOf("textinend") &&
                      -1 !== e.loop.startAt.indexOf("allinend")))
                    ? ((this.loopstart =
                        Z.transitions.layers.timeline.getTiming(
                          e,
                          e.loop.startAt,
                          "loopstart"
                        )),
                      (this.loopend =
                        -1 !== e.loop.count &&
                        e.timeline.loopstart +
                          (e.loop.repeat + 1) * e.loop.duration +
                          e.loop.repeat * e.loop.repeatDelay))
                    : Z.debugMode &&
                      Z.debug.add(
                        "warn",
                        "layerTransition.infinite",
                        e.self[0].tagName +
                          "." +
                          e.self.attr("class") +
                          " [ " +
                          e.self.html().substr(0, 30) +
                          "... ]"
                      ),
                  Math.max(this.transitioninend, this.loopend)
                );
              },
              textinandloopend: function (e) {
                return Math.max(this.textinend, this.loopend);
              },
              allinandloopend: function (e) {
                return Math.max(this.allinend(), this.loopend);
              },
              textoutstart: 0,
              textoutend: 0,
              textoutandloopend: function (e) {
                return Math.max(this.textoutend, this.loopend);
              },
              transitionoutstart: function (e) {
                return Math.max(this.allinandloopend(), this.textoutend);
              },
              transitionoutend: 0,
              alloutend: function (e) {
                return Math.max(
                  this.transitionoutend,
                  this.textoutend,
                  this.allinend()
                );
              },
              alloutandloopend: function (e) {
                return Math.max(
                  this.transitionoutend,
                  this.textoutandloopend(),
                  this.allinend()
                );
              },
              staticfrom: !1,
              staticto: !1,
            },
            transitionProperties: {
              in: {
                enabled: !0,
                layerFrom: {
                  autoCSS: !1,
                  immediateRender: !1,
                  css: { opacity: 0 },
                },
                layerTo: {
                  autoCSS: !1,
                  onStart: function () {
                    Z.transitions.layers.in.onStart(e);
                  },
                  onComplete: function () {
                    Z.transitions.layers.in.onComplete(e);
                  },
                  css: {
                    display: "block",
                    opacity: 1,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scaleX: 1,
                    scaleY: 1,
                    skewX: 0,
                    skewY: 0,
                    x: 0,
                    y: 0,
                  },
                },
                layerStyleFrom: { autoCSS: !1, immediateRender: !1, css: {} },
                layerStyleTo: { autoCSS: !1, css: {} },
                clipFrom: { autoCSS: !1, immediateRender: !1, css: {} },
                clipTo: { autoCSS: !1, css: {} },
                layerShouldBeConverted: {
                  transformOrigin: "50% 50% 0",
                  x: 0,
                  y: 0,
                },
                layerStyleShouldBeConvertedFrom: {},
                layerStyleShouldBeConvertedTo: {},
                clipShouldBeConverted: {},
                startAt: 0,
                duration: 1,
                ease: "easeInOutQuint",
              },
              textIn: {
                enabled: null,
                nodesFrom: { cycle: {}, random: {}, opacity: 0 },
                nodesTo: {
                  ease: "easeInOutQuint",
                  css: {
                    opacity: 1,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scaleX: 1,
                    scaleY: 1,
                    skewX: 0,
                    skewY: 0,
                    x: 0,
                    y: 0,
                  },
                  onStart: function () {
                    Z.layers.set.dataAttribute("add", e, "text-animating-in");
                  },
                  onComplete: function () {
                    Z.layers.set.dataAttribute(
                      "remove",
                      e,
                      "text-animating-in"
                    ),
                      Z.layers.set.dataAttribute("add", e, "active");
                  },
                },
                shouldBeConverted: {
                  cycle: {},
                  random: {},
                  transformOrigin: "50% 50% 0",
                  x: 0,
                  y: 0,
                },
                layerStyle: {},
                split: "",
                shiftNodes: 0.05,
                startAt: "transitioninend",
                duration: 1,
              },
              out: {
                enabled: !0,
                layerFrom: { autoCSS: !1, immediateRender: !1, css: {} },
                layerTo: {
                  autoCSS: !1,
                  onStart: function () {
                    Z.transitions.layers.out.onStart(e);
                  },
                  onComplete: function () {
                    Z.transitions.layers.out.onComplete(e);
                  },
                  css: {
                    opacity: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scaleX: 1,
                    scaleY: 1,
                    skewX: 0,
                    skewY: 0,
                  },
                },
                layerStyleFrom: { autoCSS: !1, immediateRender: !1, css: {} },
                layerStyleTo: { autoCSS: !1, css: {} },
                clipFrom: { autoCSS: !1, immediateRender: !1, css: {} },
                clipTo: { autoCSS: !1, css: {} },
                layerShouldBeConverted: { x: 0, y: 0 },
                layerStyleShouldBeConvertedFrom: {},
                layerStyleShouldBeConvertedTo: {},
                clipShouldBeConverted: {},
                startAt: "slidechangeonly",
                duration: 1,
                ease: "easeInOutQuint",
              },
              textOut: {
                enabled: null,
                nodesFrom: { immediateRender: !1, cycle: {}, opacity: 1 },
                nodesTo: {
                  ease: "easeInOutQuint",
                  immediateRender: !1,
                  cycle: {},
                  random: {},
                  opacity: 0,
                  onStart: function () {
                    Z.layers.set.dataAttribute("add", e, "text-animating-out");
                  },
                  onComplete: function () {
                    Z.layers.set.dataAttribute(
                      "remove",
                      e,
                      "text-animating-out"
                    ),
                      Z.layers.set.dataAttribute("add", e, "hidden");
                  },
                },
                layerStyle: {},
                shouldBeConverted: { cycle: {}, random: {}, x: 0, y: 0 },
                split: "",
                startAt: "allinandloopend",
                shiftNodes: 0.05,
                duration: 1,
              },
              loop: {
                enabled: null,
                from: { autoCSS: !1, immediateRender: !1, css: {} },
                to: { autoCSS: !1, css: {} },
                clipTo: { autoCSS: !1, immediateRender: !1, css: {} },
                layerShouldBeConverted: {
                  transformOrigin: "50% 50% 0",
                  x: 0,
                  y: 0,
                },
                clipShouldBeConverted: {},
                ease: "linear",
                startAt: "allinend",
                repeatDelay: 0,
                duration: 1,
                count: 0,
                yoyo: !1,
              },
              hover: {
                enabled: null,
                from: { autoCSS: !1, immediateRender: !1, css: {} },
                to: { autoCSS: !1, css: {} },
                shouldBeConverted: { transformOrigin: "50% 50% 0" },
                alwaysOnTop: !0,
                easeIn: "easeInOutQuint",
                durationIn: 0.5,
              },
              parallax: { enabled: null },
              scroll: {
                enabled: null,
                xresponsive: !0,
                yresponsive: !0,
                shouldBeConverted: { transformOrigin: "50% 50% 0" },
              },
              kenBurns: { scale: 1.2 },
              clip: {
                enabled: !1,
                min: "0 0 0 0",
                max: "-9999 9999 9999 -9999",
              },
              filter: {
                values: {
                  style: {},
                  in: {},
                  out: {},
                  loop: {},
                  hover: {},
                  afterIn: {},
                  afterLoop: {},
                  bgFrom: {},
                  bgTo: {},
                },
                transitions: {
                  bg: null,
                  in: null,
                  out: null,
                  loop: null,
                  hover: null,
                },
              },
              init: {
                wrapper: {
                  autoCSS: !1,
                  immediateRender: !1,
                  css: { display: "block" },
                },
              },
              transformPerspective: {
                layer: 500,
                text: 500,
                loop: 500,
                hover: 500,
              },
              reset: {
                wrapperOnTimelineEnd: {
                  autoCSS: !1,
                  css: { opacity: 1, display: "none" },
                },
                wrapperOnSlideChange: {
                  autoCSS: !1,
                  css: {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scaleX: 1,
                    scaleY: 1,
                    skewX: 0,
                    skewY: 0,
                    opacity: 1,
                    display: "none",
                  },
                },
                loopWrapperOnSlideChange: {
                  autoCSS: !1,
                  css: {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scaleX: 1,
                    scaleY: 1,
                    skewX: 0,
                    skewY: 0,
                    opacity: 1,
                  },
                },
              },
            },
          };
          return {
            is: t.is,
            should: t.should,
            elements: t.elements,
            settings: t.settings,
            styleSettings: t.styleSettings,
            mediaSettings: t.mediaSettings,
            mediaProperties: t.mediaProperties,
            timeline: t.timeline,
            in: t.transitionProperties.in,
            inLayerFrom: t.transitionProperties.in.layerFrom,
            inLayerFromCSS: t.transitionProperties.in.layerFrom.css,
            inLayerStyleFrom: t.transitionProperties.in.layerStyleFrom,
            inLayerStyleFromCSS: t.transitionProperties.in.layerStyleFrom.css,
            inClipFrom: t.transitionProperties.in.clipFrom,
            inClipFromCSS: t.transitionProperties.in.clipFrom.css,
            inLayerTo: t.transitionProperties.in.layerTo,
            inLayerToCSS: t.transitionProperties.in.layerTo.css,
            inLayerStyleTo: t.transitionProperties.in.layerStyleTo,
            inLayerStyleToCSS: t.transitionProperties.in.layerStyleTo.css,
            inClipTo: t.transitionProperties.in.clipTo,
            inClipToCSS: t.transitionProperties.in.clipTo.css,
            inClipShouldBeConverted:
              t.transitionProperties.in.clipShouldBeConverted,
            inLayerShouldBeConverted:
              t.transitionProperties.in.layerShouldBeConverted,
            inLayerStyleShouldBeConvertedFrom:
              t.transitionProperties.in.layerStyleShouldBeConvertedFrom,
            inLayerStyleShouldBeConvertedTo:
              t.transitionProperties.in.layerStyleShouldBeConvertedTo,
            textIn: t.transitionProperties.textIn,
            textInLayerStyle: t.transitionProperties.textIn.layerStyle,
            textInNodesFrom: t.transitionProperties.textIn.nodesFrom,
            textInNodesTo: t.transitionProperties.textIn.nodesTo,
            textInNodesToCSS: t.transitionProperties.textIn.nodesTo.css,
            textInShouldBeConverted:
              t.transitionProperties.textIn.shouldBeConverted,
            out: t.transitionProperties.out,
            outLayerFrom: t.transitionProperties.out.layerFrom,
            outLayerFromCSS: t.transitionProperties.out.layerFrom.css,
            outLayerStyleFrom: t.transitionProperties.out.layerStyleFrom,
            outLayerStyleFromCSS: t.transitionProperties.out.layerStyleFrom.css,
            outLayerTo: t.transitionProperties.out.layerTo,
            outLayerToCSS: t.transitionProperties.out.layerTo.css,
            outLayerStyleTo: t.transitionProperties.out.layerStyleTo,
            outLayerStyleToCSS: t.transitionProperties.out.layerStyleTo.css,
            outClipTo: t.transitionProperties.out.clipTo,
            outClipToCSS: t.transitionProperties.out.clipTo.css,
            outClipShouldBeConverted:
              t.transitionProperties.out.clipShouldBeConverted,
            outLayerShouldBeConverted:
              t.transitionProperties.out.layerShouldBeConverted,
            outLayerStyleShouldBeConvertedFrom:
              t.transitionProperties.out.layerStyleShouldBeConvertedFrom,
            outLayerStyleShouldBeConvertedTo:
              t.transitionProperties.out.layerStyleShouldBeConvertedTo,
            textOut: t.transitionProperties.textOut,
            textOutLayerStyle: t.transitionProperties.textOut.layerStyle,
            textOutNodesFrom: t.transitionProperties.textOut.nodesFrom,
            textOutNodesTo: t.transitionProperties.textOut.nodesTo,
            textOutShouldBeConverted:
              t.transitionProperties.textOut.shouldBeConverted,
            loop: t.transitionProperties.loop,
            loopFrom: t.transitionProperties.loop.from,
            loopFromCSS: t.transitionProperties.loop.from.css,
            loopTo: t.transitionProperties.loop.to,
            loopToCSS: t.transitionProperties.loop.to.css,
            loopClipTo: t.transitionProperties.loop.clipTo,
            loopClipToCSS: t.transitionProperties.loop.clipTo.css,
            loopClipShouldBeConverted:
              t.transitionProperties.loop.clipShouldBeConverted,
            loopLayerShouldBeConverted:
              t.transitionProperties.loop.layerShouldBeConverted,
            hover: t.transitionProperties.hover,
            hoverFrom: t.transitionProperties.hover.from,
            hoverFromCSS: t.transitionProperties.hover.from.css,
            hoverTo: t.transitionProperties.hover.to,
            hoverToCSS: t.transitionProperties.hover.to.css,
            hoverShouldBeConverted:
              t.transitionProperties.hover.shouldBeConverted,
            parallax: t.transitionProperties.parallax,
            scroll: t.transitionProperties.scroll,
            scrollShouldBeConverted:
              t.transitionProperties.scroll.shouldBeConverted,
            kenBurns: t.transitionProperties.kenBurns,
            clip: t.transitionProperties.clip,
            filter: t.transitionProperties.filter,
            transformPerspective: t.transitionProperties.transformPerspective,
            init: t.transitionProperties.init,
            reset: t.transitionProperties.reset,
          };
        },
      },
    }),
      (Z.slides = {
        count: 0,
        first: {},
        last: {},
        prev: {},
        current: {},
        next: {},
        init: function () {
          if (!document.body.contains(I)) return !1;
          for (
            var e = $.find("> .ls-layer, > .ls-slide"),
              t = 0,
              i = Z.defaults.slide.keys,
              s = 0,
              a = e.length;
            s < a;
            s++
          ) {
            var r = te(e[s]),
              o = r[0].style,
              n = te.extend(!0, {}, Z.defaults.slide.options),
              l = !1;
            if (
              (Z.slides.count++,
              r
                .removeClass("ls-layer")
                .addClass("ls-slide")
                .css({
                  width: Z.slider.initial.originalWidth,
                  height: Z.slider.initial.originalHeight,
                })
                .appendTo(Z.slider.$hiddenWrapper),
              r.data("ls"))
            )
              for (var d = r.data("ls").split(";"), c = 0; c < d.length; c++) {
                var p,
                  u,
                  h = d[c].split(":");
                (h[0] = te.trim(h[0].toLowerCase())),
                  (h[1] = te.trim(h[1])),
                  -1 == ["thumbnail"].indexOf(h[0]) &&
                    (h[1] = h[1].toLowerCase()),
                  "" !== h[0] &&
                    (void 0 !== i[h[0]]
                      ? ((p = void 0 === i[h[0]][1] ? h[0] : i[h[0]][1]),
                        (u = Z.functions.convert.properties(h[1])),
                        (-1 === p.toLowerCase().indexOf("duration") &&
                          -1 === p.toLowerCase().indexOf("delay") &&
                          "timeShift" != p) ||
                          (u /= 1e3),
                        n[i[h[0]][0]] || (n[i[h[0]][0]] = {}),
                        (n[i[h[0]][0]][p] = u))
                      : (n.data[h[0]] = h[1]));
              }
            if (n.plugins && !te.isEmptyObject(n.plugins))
              for (var m in n.plugins)
                if (r.data("ls-plugin-" + m)) {
                  var f,
                    g = r
                      .data("ls-plugin-" + m)
                      .toLowerCase()
                      .split(";"),
                    y = {};
                  for (f in n.plugins[m]) y[f.toLowerCase()] = f;
                  for (var v = 0; v < g.length; v++) {
                    var w,
                      b = g[v].split(":");
                    (b[0] = te.trim(b[0])),
                      "" !== b[0] &&
                        ((w = Z.functions.convert.properties(te.trim(b[1]))),
                        (-1 === b[0].indexOf("duration") &&
                          -1 === b[0].indexOf("delay")) ||
                          (w /= 1e3),
                        y[b[0]]
                          ? (n.plugins[m][y[b[0]]] = w)
                          : (n.plugins[m][b[0]] = w));
                  }
                } else delete n.plugins[m];
            r.children("a.ls-link").length &&
              ((n.data.$link = r
                .children("a.ls-link")
                .first()
                .css({ zIndex: 5 })
                .attr("data-ls-slide-link", t + 1)
                .appendTo(Z.slider.$layersWrapper)),
              Z.layers.set.smartLinks(n.data.$link)),
              (n.data.$backgroundVideo = r
                .children('[data-ls*="backgroundvideo"]')
                .first()),
              n.data.$backgroundVideo.find("iframe, video, audio").length ||
                (n.data.$backgroundVideo = te()),
              n.data.$backgroundVideo.length &&
                (null !==
                n.data.$backgroundVideo
                  .attr("data-ls")
                  .split("backgroundvideo")[1]
                  .split(";")[0]
                  .match(/(true|enabled|on|1)/i)
                  ? (n.data.$backgroundVideo
                      .addClass("ls-bg-video")
                      .css({ width: "auto", height: "auto" })
                      .children("video, audio, iframe")
                      .css({ width: "100%", height: "100%" }),
                    n.data.$backgroundVideo.append(
                      te('<div class="ls-bg-video-overlay"></div>')
                    ))
                  : (n.data.$backgroundVideo = !1));
            for (var S = r.find("picture"), v = 0, x = S.length; v < x; v++)
              Z.layers.set.pictureElement(te(S[v]));
            r.find("> .ls-bg").length &&
              (n.data.$background = r.find("> .ls-bg").first()),
              n.data.thumbnail ||
                (r.find("> .ls-tn").length
                  ? (l = r.find("> .ls-tn").first())
                  : r.find("> .ls-bg").length &&
                    (l = r.find("> .ls-bg").first()),
                l
                  ? ((n.data.thumbnail = Z.functions.getURL(l)),
                    (n.data.tnAlt = Z.functions.getALT(l)))
                  : (n.data.thumbnail =
                      Z.o.skinsPath + Z.o.skin + "/nothumb.png")),
              (n.data.customtransition2d || n.data.customtransition3d) &&
                "undefined" == typeof layerSliderCustomTransitions &&
                (delete n.data.customtransition2d,
                delete n.data.customtransition3d,
                Z.debugMode &&
                  Z.debug.add("warn", "sliderInit.customTransitions", t + 1)),
              "visible" === o.overflow && (n.data.overflow = "visible"),
              n.data.backgroundColor
                ? n.data.$background ||
                  (n.data.$backgroundVideo && n.data.$backgroundVideo.length) ||
                  (n.data.$background = te("<img>")
                    .addClass("ls-bg")
                    .attr(
                      "src",
                      "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                    )
                    .appendTo(r))
                : (n.data.backgroundColor =
                    "" === r[0].style.backgroundColor
                      ? "transparent"
                      : r[0].style.backgroundColor),
              (Z.slides[++t] = {}),
              (Z.slides[t].data = te.extend(
                !0,
                {},
                Z.defaults.slide.options.data,
                n.data
              )),
              (Z.slides[t].parallax = n.parallax),
              (Z.slides[t].scroll = n.scroll),
              (Z.slides[t].kenBurns = n.kenBurns),
              (Z.slides[t].filter = n.filter),
              (Z.slides[t].index = t),
              (Z.slides[t].$layers = te()),
              (Z.slides[t].plugins = n.plugins),
              Z.slider.thumbnails.push(n.data.thumbnail),
              Z.layers.init(r, t);
          }
          Z.debugMode && Z.debug.groupEnd("sliderInit.style");
        },
        set: {
          slideIndexes: function () {
            var e = Z.slides;
            (e.prev.index = e.current.index),
              (e.current.index = e.next.index),
              (e.next.index = Z.slideshow.get.slideInSequence(
                Z.slideshow.direction
              )),
              e.set.slidesData(),
              Z.slider.set.attributes();
          },
          nextSlideIndex: function (e) {
            var t = Z.slides;
            (t.next.index = e), t.set.slidesData();
          },
          slidesData: function () {
            var e = Z.slides;
            (e.prev =
              -1 !== e.prev.index ? te.extend(!0, {}, e[e.prev.index]) : {}),
              (e.current =
                -1 !== e.current.index
                  ? te.extend(!0, {}, e[e.current.index])
                  : {}),
              (e.next =
                -1 !== e.next.index ? te.extend(!0, {}, e[e.next.index]) : {});
          },
          firstSlide: function () {
            var e,
              t = Z.slides;
            (t.first.index =
              "random" === Z.o.firstSlide
                ? Z.o.firstSlide
                : Math.max(
                    Z.functions.convert.properties(Z.o.firstSlide, !0),
                    1
                  )),
              Z.o.shuffleSlideshow && 2 < Z.slides.count
                ? (Z.o.twoWaySlideshow = !1)
                : (Z.o.shuffleSlideshow = !1),
              (t.first.index =
                "random" == t.first.index
                  ? Math.floor(Math.random() * Z.slides.count + 1)
                  : t.first.index),
              !document.location.hash ||
                ((e = Z.slides.deeplink(document.location.hash, !0)) &&
                  (Z.slides.first.index = e)),
              (t.first.index =
                t.first.index < 1 || t.first.index > Z.slides.count
                  ? 1
                  : t.first.index),
              Z.o.shuffleSlideshow &&
                "random" != Z.o.firstSlide &&
                (t.first.index = Z.o.firstSlide),
              t[t.first.index] &&
                t[t.first.index].data &&
                (t.first.data = te.extend(!0, {}, t[t.first.index].data)),
              Z.o.playByScroll && Z.slideshow.set.normalizedSequence(),
              Z.debugMode &&
                Z.debug.options.firstSlide &&
                (t.first.index = Z.debug.options.firstSlide);
          },
          actions: function (e, t) {},
        },
        get: {
          deeplink: function (e) {
            return e &&
              Z.slides[e] &&
              Z.slides[e].data &&
              Z.slides[e].data.deeplink
              ? Z.slides[e].data.deeplink
              : null;
          },
        },
        deeplink: function (e, t) {
          for (var i = !1, s = 1; s < Z.slides.count + 1; s++)
            if (Z.slides[s].data.deeplink == e.substring(1)) {
              if (((i = s), t)) return i;
              Z.slideshow.changeTo(i, !0, !0);
            }
          if (!i && t) return !1;
        },
        slide: [],
      }),
      (Z.layers = {
        $all: te(),
        getStyle: function (e, t) {
          return -1 != e.indexOf("em")
            ? e
            : (-1 != e.indexOf("%")
                ? parseFloat(e) * t
                : parseFloat(e) || 0
              ).toString();
        },
        toNum: function (e, t) {
          return (
            (t = parseFloat(t)),
            -1 != e.indexOf("em") ? parseFloat(e) * t : parseFloat(e)
          );
        },
        init: function (e, t) {
          if (!document.body.contains(I)) return !1;
          for (
            var i,
              s = e.find(".ls-bg, .ls-l, .ls-layer, .ls-lg, .ls-layer-group"),
              a = 0,
              r = s.length;
            a < r;
            a++
          ) {
            var o = te(s[a]),
              n = o[0],
              l = o.children();
            if ((o.data("slideIndex", t), o.hasClass("ls-l")))
              o.removeClass("ls-l").addClass("ls-layer");
            else if (o.hasClass("ls-lg"))
              o.removeClass("ls-lg").addClass("ls-layer-group");
            else if (!o.is(".ls-bg, .ls-layer, .ls-layer-group")) {
              o.remove();
              continue;
            }
            o.is("a") &&
              1 === l.length &&
              ((n = (o = o.children().first())[0]).setAttribute(
                "data-ls",
                n.parentNode.getAttribute("data-ls")
              ),
              n.parentNode.removeAttribute("data-ls"),
              o.parent().removeClass("ls-layer"),
              o.addClass("ls-layer")),
              o.is(".ls-layer-group") && o.children().data("$layerGroup", o),
              o.data(
                Z.defaults.init.dataKey,
                new Z.defaults.layer.options(o, t)
              ),
              -1 !== o.attr("class").indexOf("ls-linkto-") &&
                this.set.linkTo(o),
              o.parent().is("a")
                ? (o.parent().data("slideIndex") &&
                    o.data("slideIndex", o.parent().data("slideIndex")),
                  (i = o.parent()),
                  this.set.smartLinks(i))
                : (i = o),
              i.attr("data-ls-actions") &&
                this.set.actions(
                  i,
                  JSON.parse(i.attr("data-ls-actions")) || {}
                ),
              (Z.slides[t].$layers = Z.slides[t].$layers.add(i));
          }
        },
        set: {
          mirrorTransitions: function (e) {
            return (e = e.split(" "));
          },
          pictureElement: function (e) {
            var t =
                e.find("source").last().attr("srcset").split(" ")[0] ||
                "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
              i = e.find("img"),
              s = i.length ? i : te("<img>").attr("src", t),
              a = s[0],
              r =
                (e.attr("ls-data") || s.attr("ls-data"), e.attr("style") || !1),
              i = a.currentSrc || a.src,
              o = i.split(".").pop(),
              t = (i.indexOf("webp"), s.attr("data-src") ? "data-" : ""),
              a = "";
            e.hasClass("ls-bg")
              ? (a = "ls-bg")
              : e.hasClass("ls-tn")
              ? (a = "ls-tn")
              : (e.hasClass("ls-l") || e.hasClass("ls-layer")) &&
                (a = "ls-layer");
            for (
              var n, l, d, c = e.find("source"), p = 0;
              p < c.length &&
              ((n = c[p]),
              (l = (n = te(n)).attr("srcset")),
              (d = n.attr("sizes")),
              l.split(" ")[0].split(".").pop() != o);
              p++
            );
            s.removeAttr(
              "width height sizes src srcset data-src data-srcset loading"
            ),
              s
                .addClass(a)
                .attr(t + "src", i)
                .attr(t + "srcset", l)
                .attr("sizes", d),
              r && s.attr("style", r),
              s.insertAfter(e),
              e.remove();
          },
          actions: function (s, e) {
            e.length;
            te.each(e, function (e, t) {
              var i = te.extend(!0, {}, t),
                t = i.trigger;
              s.on(t, function (e) {
                setTimeout(
                  function (e) {
                    Z.actions.do(e);
                  },
                  i.delay || 0,
                  i
                );
              });
            });
          },
          smartLinks: function (e) {
            var s = e.attr("href"),
              t = e.attr("target"),
              i = "";
            if (t && -1 !== t.indexOf("ls-scroll")) {
              switch (s) {
                case "pagetop":
                  i = "Scroll to page top";
                  break;
                case "pagebottom":
                  i = "Scroll to page bottom";
                  break;
                case "slidertop":
                  i = "Scroll to the top of the slider";
                  break;
                case "":
                case "sliderbottom":
                  i = "Scroll to the bottom of the slider";
                  break;
                default:
                  i = "Scroll to a specified location on the page";
              }
              Z.layers.set.ariaLabel(e, i),
                e.on("click." + B, function (e) {
                  e.preventDefault();
                  var t,
                    i = document.body.scrollHeight - ee.viewport.height;
                  if (s)
                    switch (s) {
                      case "pagetop":
                        t = 0;
                        break;
                      case "pagebottom":
                        t = i;
                        break;
                      case "slidertop":
                        t = Z.slider.offset.top;
                        break;
                      case "":
                      case "sliderbottom":
                        t = Z.slider.offset.top + Z.slider.height;
                        break;
                      default:
                        t = te(s).filter(":visible").last().length
                          ? te(s).filter(":visible").last().offset().top
                          : Z.slider.offset.top + Z.slider.height;
                    }
                  (t += Z.o.scrollModifier),
                    (t = Math.min(t, i)),
                    (t = Math.max(0, t)),
                    J.TweenMax.to("html, body", 1, {
                      scrollTop: t,
                      ease: J.Quint.easeInOut,
                    });
                });
            }
            if (
              -1 !== Z.defaults.init.controls.indexOf(s.toLowerCase()) ||
              s.match(/^\#[0-9]/)
            ) {
              var a = te.trim(s.toLowerCase().split("#")[1]),
                r = parseInt(a);
              switch (a) {
                case "playmedia":
                  i = "play active media elements on current slide";
                  break;
                case "pausemedia":
                  i = "pause active media elements on current slide";
                  break;
                case "prev":
                  i = "jump to the previous slide";
                  break;
                case "next":
                  i = "jump to the next slide";
                  break;
                case "start":
                  i = "start slideshow";
                  break;
                case "stop":
                  i = "stop slideshow";
                  break;
                case "replay":
                  i = "replay slide";
                  break;
                case "reverse":
                  i = "reverse slide";
                  break;
                case "reverse-replay":
                case "reversereplay":
                  i = "reverse, than replay slide";
                  break;
                default:
                  "number" == typeof r && r == r && (i = "jump to slide " + r);
              }
              Z.layers.set.ariaLabel(e, i),
                e.on("click." + B, function (e) {
                  if (
                    (e.preventDefault(),
                    -1 !==
                      [
                        "prev",
                        "next",
                        "last",
                        "first",
                        "start",
                        "stop",
                      ].indexOf(a))
                  )
                    Z.navigation[a]("clicked");
                  else if ("number" == typeof r && r == r)
                    Z.slideshow.changeTo(r, !0, !0);
                  else if (!Z.slider.state.changingSlides)
                    switch (a) {
                      case "replay":
                        Z.api.methods("replay");
                        break;
                      case "reverse":
                        Z.api.methods("reverse");
                        break;
                      case "reverse-replay":
                      case "reversereplay":
                        Z.api.methods("reverse", !0);
                        break;
                      case "playmedia":
                        Z.media.functions.playActiveMedia();
                        break;
                      case "pausemedia":
                        Z.media.functions.pauseActiveMedia();
                        break;
                      case "unmute":
                      case "unmutemedia":
                        Z.media.unmute.multipleMediaElements();
                    }
                });
            }
          },
          ariaLabel: function (e, t) {
            e.attr("aria-label") || e.attr("aria-label", t);
          },
          linkTo: function (e) {
            for (
              var t = e.attr("class").split(" "), i = 1, s = 0;
              s < t.length;
              s++
            )
              -1 != t[s].indexOf("ls-linkto-") &&
                (i = parseInt(t[s].split("ls-linkto-")[1]));
            (e.data(Z.defaults.init.dataKey).settings.linkedToSlide = i),
              e.css({ cursor: "pointer" }).on("click." + B, function (e) {
                e.preventDefault(),
                  $.layerSlider(
                    te(this).data(Z.defaults.init.dataKey).settings
                      .linkedToSlide
                  );
              });
          },
          wrappers: function (e, t, i) {
            t.is.slideBackground || t.is.backgroundVideo
              ? ((t.elements.$bgWrapper = e.closest(".ls-bg-wrap")),
                (t.elements.$bgOuterWrapper = e.closest(".ls-bg-outer")))
              : ((t.elements.$wrapper = e.closest(".ls-in-out")),
                t.elements.$wrapper.data(Z.defaults.init.dataKey, {}),
                (t.settings.wrapperData = t.elements.$wrapper.data(
                  Z.defaults.init.dataKey
                )),
                (t.elements.$clipWrapper = e.closest(".ls-clip")),
                t.elements.$clipWrapper.data(Z.defaults.init.dataKey, {}),
                (t.settings.clipWrapperData = t.elements.$clipWrapper.data(
                  Z.defaults.init.dataKey
                )),
                (t.elements.$loopWrapper = e.closest(".ls-loop")),
                t.elements.$loopWrapper.data(Z.defaults.init.dataKey, {}),
                (t.settings.loopWrapperData = t.elements.$loopWrapper.data(
                  Z.defaults.init.dataKey
                ))),
              t.parallax.enabled &&
                ((t.elements.$parallaxWrapper = e.closest(".ls-parallax")),
                t.elements.$parallaxWrapper.data(Z.defaults.init.dataKey, {
                  parallax: {},
                }),
                (t.settings.parallaxWrapperData =
                  t.elements.$parallaxWrapper.data(Z.defaults.init.dataKey)),
                Z.transitions.layers.parallax.addLayer(
                  t.elements.$parallaxWrapper,
                  t.settings.parallaxWrapperData.parallax,
                  t,
                  i
                )),
              t.scroll.enabled &&
                ((t.elements.$scrollWrapper = e.closest(".ls-scroll")),
                (t.elements.$scrollTransformWrapper = e.closest(
                  ".ls-scroll-transform"
                )),
                t.elements.$scrollWrapper.data(Z.defaults.init.dataKey, {
                  scroll: {},
                }),
                (t.settings.scrollWrapperData = t.elements.$scrollWrapper.data(
                  Z.defaults.init.dataKey
                )),
                Z.transitions.layers.scroll.addLayer(
                  t.elements.$scrollWrapper,
                  t.settings.scrollWrapperData.scroll,
                  t,
                  i
                )),
              t.hover.enabled &&
                !Z.slides[i].data.globalhover &&
                Z.transitions.layers.hover.set(e, t),
              (t.elements.$outerWrapper = e.closest(".ls-z")),
              (t.elements.$outerStyleWrapper =
                t.elements.$outerWrapper.find("> .ls-wrapper")),
              t.elements.$outerWrapper.attr("data-slide-index", i),
              (t.elements.$innerWrapper = e
                .closest(".ls-wrapper")
                .addClass("ls-inner-wrapper")),
              (t.elements.$_innerWrappers =
                t.elements.$outerWrapper.find(".ls-wrapper")),
              (t.elements.$_allWrappers = t.elements.$outerWrapper.add(
                t.elements.$_innerWrappers
              )),
              (t.elements.$_outerWrappers = t.elements.$outerWrapper.add(
                t.elements.$outerWrapper.find(
                  ".ls-wrapper:not(.ls-inner-wrapper)"
                )
              ));
          },
          singleLayer: function (e, t) {
            Z.layers.set.style(e),
              Z.layers.set.properties(e, t),
              Z.layers.set.dataAttribute("add", e, "hidden"),
              e.data("hasBeenSet", !0);
          },
          style: function (e) {
            var t,
              i,
              s,
              a,
              r,
              o,
              n,
              l,
              d,
              c,
              p,
              u = e[0],
              h = e.data(Z.defaults.init.dataKey),
              m = u.style,
              f = Z.layers,
              g = 0,
              y = 0,
              v = !1,
              w = parseFloat(u.style.fontSize) || 36,
              b = u.getBoundingClientRect(),
              S =
                "" !== m.paddingLeft
                  ? f.getStyle(m.paddingLeft, Z.slider.initial.percW)
                  : f.getStyle(e.css("padding-left"), Z.slider.initial.percW),
              x =
                "" !== m.paddingRight
                  ? f.getStyle(m.paddingRight, Z.slider.initial.percW)
                  : f.getStyle(e.css("padding-right"), Z.slider.initial.percW),
              T =
                "" !== m.paddingTop
                  ? f.getStyle(m.paddingTop, Z.slider.initial.percH)
                  : f.getStyle(e.css("padding-top"), Z.slider.initial.percH),
              k =
                "" !== m.paddingBottom
                  ? f.getStyle(m.paddingBottom, Z.slider.initial.percH)
                  : f.getStyle(e.css("padding-bottom"), Z.slider.initial.percH),
              C =
                "" !== m.marginLeft
                  ? f.getStyle(m.marginLeft, Z.slider.initial.percW)
                  : f.getStyle(e.css("margin-left"), Z.slider.initial.percW),
              O =
                "" !== m.marginRight
                  ? f.getStyle(m.marginRight, Z.slider.initial.percW)
                  : f.getStyle(e.css("margin-right"), Z.slider.initial.percW),
              P =
                "" !== m.marginTop
                  ? f.getStyle(m.marginTop, Z.slider.initial.percH)
                  : f.getStyle(e.css("margin-top"), Z.slider.initial.percH),
              L =
                "" !== m.marginBottom
                  ? f.getStyle(m.marginBottom, Z.slider.initial.percH)
                  : f.getStyle(e.css("margin-bottom"), Z.slider.initial.percH);
            (u.style.margin = "0"),
              (r =
                "" !== m.borderLeftWidth
                  ? f.getStyle(m.borderLeftWidth, Z.slider.initial.percW)
                  : f.getStyle(
                      e.css("border-left-width"),
                      Z.slider.initial.percW
                    )),
              (n =
                "" !== m.borderRightWidth
                  ? f.getStyle(m.borderRightWidth, Z.slider.initial.percW)
                  : f.getStyle(
                      e.css("border-right-width"),
                      Z.slider.initial.percW
                    )),
              (o =
                "" !== m.borderTopWidth
                  ? f.getStyle(m.borderTopWidth, Z.slider.initial.percH)
                  : f.getStyle(
                      e.css("border-top-width"),
                      Z.slider.initial.percH
                    )),
              (l =
                "" !== m.borderBottomWidth
                  ? f.getStyle(m.borderBottomWidth, Z.slider.initial.percH)
                  : f.getStyle(
                      e.css("border-bottom-width"),
                      Z.slider.initial.percH
                    )),
              (1 !== Z.media.properties.$allMediaLayers.filter(e).length &&
                !e.children("iframe").length) ||
                ((p = (c = e.children()).attr("width")
                  ? c.attr("width")
                  : c.width()),
                (I = c.attr("height") ? c.attr("height") : c.height()),
                300 === parseInt(p) &&
                  150 === parseInt(I) &&
                  ((p = 640), (I = 360)),
                ("" !== u.style.width && "auto" !== u.style.width) ||
                  e.css("width", p),
                ("" !== u.style.height && "auto" !== u.style.height) ||
                  e.css("height", I),
                "100%" === m.width &&
                  "100%" === m.height &&
                  ((m.left = "50%"),
                  (m.top = "50%"),
                  (h.mediaSettings.fullsize = !0)),
                (v = p / I),
                c.css({ width: "100%", height: "100%" }));
            var I = h.attributes;
            e.is("img") &&
              ((d =
                (s = e.data("preloadedWidth")) /
                (a = e.data("preloadedHeight"))),
              ((!m.width && !m.height) ||
                ("auto" === m.width && "auto" === m.height)) &&
                I &&
                (I.width && I.height
                  ? ((t =
                      -1 === I.width.indexOf("%")
                        ? parseInt(I.width)
                        : ((g = parseInt(I.width)),
                          f.getStyle(I.width, Z.slider.initial.percW))),
                    (i =
                      -1 === I.height.indexOf("%")
                        ? parseInt(I.height)
                        : ((y = parseInt(I.height)),
                          f.getStyle(I.height, Z.slider.initial.percH))))
                  : I.maxWidth &&
                    ((e[0].style.width = I.maxWidth + "px"),
                    (t = I.maxWidth),
                    (i = e.height())))),
              (c = b.width
                ? b.width / (window.LS_previewZoom || 1)
                : (b.right - b.left) / (window.LS_previewZoom || 1)),
              (b = b.height
                ? b.height / (window.LS_previewZoom || 1)
                : (b.bottom - b.top) / (window.LS_previewZoom || 1)),
              t ||
                ((t = m.width),
                -1 !== m.width.indexOf("%") && (g = parseInt(m.width)),
                (t =
                  (t =
                    "" !== t && "auto" !== t
                      ? f.getStyle(t, Z.slider.initial.percW)
                      : c -
                        Z.layers.toNum(S, w) -
                        Z.layers.toNum(x, w) -
                        Z.layers.toNum(r, w) -
                        Z.layers.toNum(n, w)) || "auto")),
              i ||
                ((i = m.height),
                -1 !== m.height.indexOf("%") && (y = parseInt(m.height)),
                (i =
                  (i =
                    "" !== i && "auto" !== i
                      ? f.getStyle(i, Z.slider.initial.percH)
                      : b -
                        Z.layers.toNum(T, w) -
                        Z.layers.toNum(k, w) -
                        Z.layers.toNum(o, w) -
                        Z.layers.toNum(l, w)) || "auto")),
              (v = v || ("auto" !== t && "auto" !== i ? t / i : "auto")),
              !e.is("img") ||
                m.width ||
                m.height ||
                (I && (!I || I.width || I.height)) ||
                (s === t && a === i) ||
                (s !== t
                  ? (i = (t = 5 < s ? s : t) / (v = 5 < s ? d : v))
                  : a !== i && (t = (i = 5 < a ? a : i) * (v = 5 < a ? d : v))),
              parseFloat(e.css("opacity")),
              (a = "" !== m.clip && m.clip),
              (m.clip = ""),
              (d = m.webkitFilter || m.filter);
            var $, B, W, M;
            (h.original = {
              clip: a,
              clipShouldBeConverted: !1,
              left: m.left || "0",
              top: m.top || "0",
              width: "auto" !== t ? parseFloat(t) : "auto",
              height: "auto" !== i ? parseFloat(i) : "auto",
              sWidth: m.width,
              sHeight: m.height,
              percentWidth: g,
              percentHeight: y,
              backgroundImage: m.backgroundImage,
              backgroundSize: m.backgroundSize,
              backgroundRepeat: m.backgroundRepeat,
              backgroundPosition: m.backgroundPosition,
              ratio: v,
              paddingLeft: S,
              paddingTop: T,
              paddingRight: x,
              paddingBottom: k,
              marginLeft: C,
              marginRight: O,
              marginTop: P,
              marginBottom: L,
              borderLeftWidth: r,
              borderTopWidth: o,
              borderRightWidth: n,
              borderBottomWidth: l,
              borderRadius:
                (($ = e),
                (W = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ]),
                (M = ""),
                (B = m).borderRadius &&
                  (-1 === B.borderRadius.indexOf("/")
                    ? te.each(
                        [
                          "border-top-left-radius",
                          "border-top-right-radius",
                          "border-bottom-right-radius",
                          "border-bottom-left-radius",
                        ],
                        function (e, t) {
                          (e = B[W[e]]),
                            (t = $.css(t)),
                            (t = te.trim(void 0 !== e && e.length ? e : t));
                          -1 == t.indexOf(" ") &&
                            -1 == t.indexOf("em") &&
                            -1 == t.indexOf("%") &&
                            (t = parseInt(t)),
                            (M += t + " ");
                        }
                      )
                    : (M = B.borderRadius)),
                te.trim(M)),
              fontSize: w,
              lineHeight: u.style.lineHeight,
              letterSpacing: u.style.letterSpacing,
              textStrokeWidth:
                u.style.textStrokeWidth || u.style.webkitTextStrokeWidth,
              color: e.css("color"),
              zIndex: parseInt(e.css("z-index")) || "auto",
              filter: d,
              backgroundColor: e.css("background-color"),
              dataLS: e.attr("data-ls") || "",
              styles: e.attr("style") || "",
            }),
              (m.zIndex = "auto"),
              (h.responsive = {
                left: m.left || "0",
                top: m.top || "0",
                width: t,
                height: i,
              });
          },
          properties: function (e, t, i) {
            t = t || e.data("slideIndex");
            var s = e.data(Z.defaults.init.dataKey);
            e.data("ls");
            if (
              ((s.is.textLayer = !(
                e.is("img") ||
                s.is.mediaLayer ||
                s.is.backgroundVideo
              )),
              (s.self = e).data("ls"))
            )
              for (
                var a = Z.defaults.layer.keys,
                  r = e.data("ls").split(";"),
                  o = e.data("ls").split(";"),
                  n = 0;
                n < o.length;
                n++
              )
                if (te.trim(o[n])) {
                  var l = o[n].indexOf(":"),
                    d = [o[n].substring(0, l), o[n].substring(l + 1)],
                    c = null,
                    p = null,
                    u = null,
                    h = null,
                    m = null;
                  if (
                    ((d[0] = te.trim(d[0].toLowerCase())),
                    -1 == ["thumbnail", "poster"].indexOf(d[0]) &&
                      (d[1] = d[1].toLowerCase()),
                    "" !== (c = d[0]))
                  )
                    if (void 0 !== a[(c = c.replace("split", "text"))]) {
                      if (
                        ((p = a[c][0]),
                        (m =
                          "overlay" === c
                            ? te.trim(r[n].substring(l + 1))
                            : Z.functions.convert.properties(te.trim(d[1]))),
                        -1 !== c.indexOf("mirror") &&
                          (m = Z.layers.set.mirrorTransitions(te.trim(d[1]))),
                        d[1] &&
                          -1 !== d[1].indexOf("random") &&
                          (c.match(/(text)/) ||
                            (m = Z.functions.convert.randomProperties(m, p)),
                          s.should.update || (s.should.update = !0)),
                        "number" == typeof m &&
                          p.match(/(duration|startat|shift|delay)/i) &&
                          (m /= 1e3),
                        c.match(/(fade)(.+)/))
                      )
                        switch (m) {
                          case !0:
                            m = 0;
                            break;
                          case !1:
                            m = 1;
                        }
                      void 0 !== (h = a[c][1])
                        ? "" !== m
                          ? "object" == typeof m && -1 == c.indexOf("mirror")
                            ? c.match(/(text)/)
                              ? h.match(/(converted)/i)
                                ? (s[h][p] = m)
                                : (s[h].cycle[p] = m)
                              : ((u = Z.functions.convert.properties(
                                  te.trim(m[0])
                                )),
                                Z.debugMode &&
                                  Z.debug.add("warn", "layerInit.prop1", [
                                    c,
                                    m,
                                    u,
                                  ]),
                                "number" == typeof u &&
                                  p.match(/(duration|startat|shift|delay)/i) &&
                                  (u /= 1e3),
                                (s[h][p] = u))
                            : c.match(/(text)/) &&
                              -1 !== m.toString().indexOf("random")
                            ? (s[h].random[p] = m)
                            : (s[h][p] = m)
                          : Z.debugMode &&
                            Z.debug.add("warn", "layerInit.prop2", c)
                        : (s[p][c] = m);
                    } else
                      "clip" === c
                        ? ((s.original.clip = d[1]),
                          (s.original.clipShouldBeConverted = !0))
                        : Z.debugMode &&
                          Z.debug.add("warn", "layerInit.prop4", c);
                }
            if (
              (Z.browser.isOld &&
                ((s.in.enabled = !0),
                (s.textIn.enabled = !1),
                (s.textOut.enabled = !1),
                (s.textIn.type = null),
                (s.textOut.type = null)),
              s.in.enabled &&
                (s.inLayerTo.ease =
                  s.inLayerStyleTo.ease =
                  s.inClipTo.ease =
                    Z.functions.convert.easing(s.in.ease)),
              void 0 !== s.inLayerStyleShouldBeConvertedFrom.borderRadius &&
                (s.inLayerStyleShouldBeConvertedTo.borderRadius =
                  s.original.borderRadius),
              void 0 !== s.outLayerStyleShouldBeConvertedTo.borderRadius &&
                (s.outLayerStyleShouldBeConvertedFrom.borderRadius =
                  s.original.borderRadius),
              s.inLayerStyleFromCSS.backgroundColor &&
                (s.inLayerStyleToCSS.backgroundColor =
                  s.original.backgroundColor),
              s.outLayerStyleToCSS.backgroundColor &&
                (s.outLayerStyleFromCSS.backgroundColor =
                  s.original.backgroundColor),
              s.inLayerStyleFromCSS.color &&
                (s.inLayerStyleToCSS.color = s.original.color),
              s.outLayerStyleToCSS.color &&
                (s.outLayerStyleFromCSS.color = s.original.color),
              void 0 !== s.inLayerStyleShouldBeConvertedFrom.width &&
                (s.inLayerStyleShouldBeConvertedTo.width = s.original.width),
              void 0 !== s.outLayerStyleShouldBeConvertedTo.width &&
                (s.outLayerStyleShouldBeConvertedFrom.width = s.original.width),
              void 0 !== s.inLayerStyleShouldBeConvertedFrom.height &&
                (s.inLayerStyleShouldBeConvertedTo.height = s.original.height),
              void 0 !== s.outLayerStyleShouldBeConvertedTo.height &&
                (s.outLayerStyleShouldBeConvertedFrom.height =
                  s.original.height),
              void 0 !== s.out.showUntil &&
                0 !== s.out.showUntil &&
                (s.out.startAt = "transitioninend + " + s.out.showUntil),
              -1 !== s.out.startAt.indexOf("slidechangeonly") &&
                "slidechangeonly" !== s.out.startAt &&
                (s.out.startAt = "slidechangeonly"),
              s.out.enabled &&
                (s.outLayerTo.ease =
                  s.outLayerStyleTo.ease =
                  s.outClipTo.ease =
                    Z.functions.convert.easing(s.out.ease)),
              te.isNumeric(s.loop.count) &&
              (0 < s.loop.count || -1 === s.loop.count) &&
              !1 !== s.loop.enabled
                ? ((s.loop.enabled = !0),
                  (s.loopTo.ease = s.loopClipTo.ease =
                    Z.functions.convert.easing(s.loop.ease)),
                  -1 !== s.loop.count
                    ? s.loop.yoyo
                      ? (s.loop.repeat = 2 * s.loop.count - 1)
                      : (s.loop.repeat = s.loop.count - 1)
                    : (s.loop.repeat = -1))
                : (s.loop.enabled = !1),
              (!te.isEmptyObject(s.hoverToCSS) ||
                s.hoverShouldBeConverted.x ||
                s.hoverShouldBeConverted.y ||
                s.hoverShouldBeConverted.borderRadius ||
                s.hoverShouldBeConverted.filter) &&
              !1 !== s.hover.enabled
                ? ((s.hover.enabled = !0),
                  s.hover.easeOut || (s.hover.easeOut = s.hover.easeIn),
                  (s.hover.easeIn = Z.functions.convert.easing(s.hover.easeIn)),
                  (s.hover.easeOut = Z.functions.convert.easing(
                    s.hover.easeOut,
                    !0
                  )),
                  s.hover.durationOut ||
                    (s.hover.durationOut = s.hover.durationIn),
                  J.TweenMax.set(e[0], {
                    autoCSS: !1,
                    css: {
                      transformPerspective:
                        s.hoverShouldBeConverted.transformPerspective,
                    },
                  }))
                : (s.hover.enabled = !1),
              s.parallax.level &&
              te.isNumeric(s.parallax.level) &&
              0 !== s.parallax.level &&
              !1 !== s.parallax.enabled
                ? (s.parallax.enabled = !0)
                : (s.parallax.enabled = !1),
              s.is.slideBackground)
            ) {
              var f = { scale: 1, rotation: 0 };
              if (
                (Z.slides[t].kenBurns.zoom &&
                  (s.kenBurns = Z.slides[t].kenBurns),
                s.kenBurns.zoom)
              ) {
                switch (
                  ((s.kenBurns.from = {}),
                  (s.kenBurns.to = {}),
                  s.kenBurns.zoom)
                ) {
                  case "out":
                    (s.kenBurns.from.scale = s.kenBurns.scale || 1),
                      (s.kenBurns.from.rotation = s.kenBurns.rotation || 0),
                      (s.kenBurns.to = f);
                    break;
                  case "in":
                    (s.kenBurns.from = f),
                      (s.kenBurns.to.scale = s.kenBurns.scale || 1),
                      (s.kenBurns.to.rotation = s.kenBurns.rotation || 0);
                }
                delete s.kenBurns.scale, delete s.kenBurns.rotation;
              } else (s.kenBurns.from = f), (s.kenBurns.to = f);
              te.isEmptyObject(Z.slides[t].filter) ||
                (Z.slides[t].filter.from &&
                  (s.filter.values.bgFrom =
                    Z.transitions.layers.filters.convert(
                      Z.slides[t].filter.from
                    )),
                Z.slides[t].filter.to &&
                  (s.filter.values.bgTo = Z.transitions.layers.filters.convert(
                    Z.slides[t].filter.to
                  )));
            }
            if (
              (s.textIn.type &&
                -1 === Z.defaults.layer.splitTypeKeys.indexOf(s.textIn.type) &&
                (Z.debugMode &&
                  Z.debug.add("warn", "layerInit.splitType3a", [
                    e[0].tagName,
                    s.textIn.type,
                  ]),
                delete s.textIn.type,
                delete s.textIn.ns,
                (s.textIn.enabled = !1)),
              s.textOut.type &&
                -1 === Z.defaults.layer.splitTypeKeys.indexOf(s.textOut.type) &&
                (Z.debugMode &&
                  Z.debug.add("warn", "layerInit.splitType3b", [
                    e[0].tagName,
                    s.textOut.type,
                  ]),
                delete s.textOut.type,
                delete s.textOut.ns,
                (s.textOut.enabled = !1)),
              s.textIn.type || s.textOut.type)
            ) {
              var g = 0;
              if (
                (s.is.textLayer
                  ? (s.textIn.type &&
                      ((s.textIn.enabled = !0),
                      (s.textInNodesTo.ease = Z.functions.convert.easing(
                        s.textInNodesTo.ease
                      )),
                      (s.textIn.split = s.textIn.type.split("_")[0]),
                      e.children().length && Z.debugMode && (g = 1)),
                    s.textOut.type &&
                      !Z.o.inLayerPreview &&
                      (s.textOut.enabled = !0),
                    s.textOut.enabled &&
                      (s.textOutNodesTo.ease = Z.functions.convert.easing(
                        s.textOutNodesTo.ease
                      )),
                    s.textOut.enabled &&
                      s.textOut.type.split("_")[0] !== s.textIn.split &&
                      ((s.textIn.split += ", " + s.textOut.type.split("_")[0]),
                      e.children().length && Z.debugMode && (g = 1)),
                    -1 !== s.textIn.split.indexOf("chars") &&
                      -1 === s.textIn.split.indexOf("words") &&
                      (s.textIn.split += ", words"),
                    -1 !== s.textIn.split.indexOf("words") &&
                      -1 === s.textIn.split.indexOf("lines") &&
                      (s.textIn.split += ", lines"))
                  : (delete s.textIn.type,
                    delete s.textOut.type,
                    delete s.textIn.ns,
                    delete s.textOut.ns,
                    Z.debugMode && (g = 2)),
                Z.debugMode && 0 !== g && t && !i)
              )
                switch (g) {
                  case 1:
                    Z.debug.add("warn", "layerInit.splitType1", [
                      e.prop("nodeName"),
                      t,
                    ]);
                    break;
                  case 2:
                    Z.debug.add("warn", "layerInit.splitType2", [
                      t,
                      e.prop("nodeName"),
                    ]);
                }
            }
            (s.original.clip ||
              s.inClipShouldBeConverted.clip ||
              s.outClipShouldBeConverted.clip ||
              s.loopClipShouldBeConverted.clip) &&
              (s.clip.enabled = !0),
              s.in.enabled &&
                s.inLayerToCSS.scale &&
                (delete s.inLayerToCSS.scaleX, delete s.inLayerToCSS.scaleY),
              s.out.enabled &&
                s.outLayerToCSS.scale &&
                (delete s.outLayerToCSS.scaleX, delete s.outLayerToCSS.scaleY),
              s.inLayerStyleShouldBeConvertedFrom.filter &&
                (s.filter.values.in = Z.transitions.layers.filters.convert(
                  s.inLayerStyleShouldBeConvertedFrom.filter
                )),
              (s.filter.values.style = Z.transitions.layers.filters.convert(
                s.original.filter
              )),
              s.outLayerStyleShouldBeConvertedTo.filter &&
                (s.filter.values.out = Z.transitions.layers.filters.convert(
                  s.outLayerStyleShouldBeConvertedTo.filter
                )),
              s.loopLayerShouldBeConverted.filter &&
                (s.filter.values.loop = Z.transitions.layers.filters.convert(
                  s.loopLayerShouldBeConverted.filter
                )),
              s.hoverShouldBeConverted.filter &&
                (s.filter.values.hover = Z.transitions.layers.filters.convert(
                  s.hoverShouldBeConverted.filter
                )),
              s.in.enabled || (s.in.duration = 0),
              s.textIn.enabled || (s.textIn.duration = 0),
              s.loop.enabled || (s.loop.duration = 0),
              s.textOut.enabled || (s.textOut.duration = 0),
              s.out.enabled || (s.out.duration = 0),
              e.attr("data-ls-slidein", t),
              void 0 !== s.settings.static && "none" !== s.settings.static
                ? (0 !== (g = parseInt(s.settings.static)) &&
                  "forever" !== s.settings.static
                    ? (e.attr("data-ls-slideout", g), (s.settings.slideOut = g))
                    : (s.settings.slideOut = 0),
                  (s.is.static = !0),
                  e.attr("data-ls-static", "1"))
                : e.attr("data-ls-slideout", t),
              s.is.mediaLayer &&
                e.children("video, audio").length &&
                Z.media.html5.singleInit(e.children("video, audio").eq(0)),
              s.is.backgroundVideo &&
                s.styleSettings.overlay &&
                e
                  .find(".ls-bg-video-overlay")
                  .css({
                    backgroundImage: "url(" + s.styleSettings.overlay + ")",
                  }),
              s.styleSettings.minfontsize &&
                (s.styleSettings.minfontsize = parseFloat(
                  s.styleSettings.minfontsize
                )),
              s.styleSettings.minmobilefontsize &&
                (s.styleSettings.minmobilefontsize = parseFloat(
                  s.styleSettings.minmobilefontsize
                )),
              Z.slider.isPopup && (s.is.pinned = !1),
              s.is.pinned && (Z.slider.hasPinnedLayers = !0);
          },
          dataAttribute: function (e, t, i) {
            var s = t.add(t.closest(".ls-wrapper.ls-z"));
            switch (e) {
              case "remove":
                s.removeAttr("data-ls-" + i);
                break;
              case "add":
                "active" === i && s.removeAttr("data-ls-hidden"),
                  "hidden" === i &&
                    s.removeAttr(
                      "data-ls-active data-ls-animating-in data-ls-text-animating-in data-ls-animating-out data-ls-text-animating-out"
                    ),
                  (-1 === i.indexOf("in") && -1 === i.indexOf("out")) ||
                    (s.removeAttr("data-ls-active"),
                    s.removeAttr("data-ls-hidden")),
                  ("active" === i &&
                    t.is(
                      "[data-ls-animating-in], [data-ls-text-animating-in]"
                    )) ||
                    ("hidden" === i &&
                      t.is(
                        "[data-ls-animating-out], [data-ls-text-animating-out]"
                      )) ||
                    s.attr("data-ls-" + i, "");
            }
          },
        },
        get: function (e) {
          var t,
            i,
            s,
            a,
            r,
            o = this.$all;
          return (
            e &&
              ((t = "in"),
              (s = i = ""),
              (a = ':not(".ls-bg")'),
              (r = ':not(".ls-bg-video")'),
              (-1 == (e = e.toLowerCase()).indexOf("bgvideo") &&
                -1 == e.indexOf("backgroundvideo")) ||
                ((r = ""),
                (e = e.replace("bgvideo", "").replace("backgroundvideo", ""))),
              -1 != e.indexOf("video") &&
                ((s += ", > video"), (e = e.replace("video", ""))),
              -1 != e.indexOf("audio") &&
                ((s += ", > audio"), (e = e.replace("audio", ""))),
              -1 != e.indexOf("html5") &&
                ((s += ", > video, > audio"), (e = e.replace("html5", ""))),
              -1 != e.indexOf("youtube") &&
                ((s +=
                  ', > iframe[src*="youtube-nocookie.com"], > iframe[src*="youtube.com"], > iframe[src*="youtu.be"], > iframe[data-src*="youtube-nocookie.com"], > iframe[data-src*="youtube.com"], > iframe[data-src*="youtu.be"]'),
                (e = e.replace("youtube", ""))),
              -1 != e.indexOf("vimeo") &&
                ((s +=
                  ', > iframe[src*="player.vimeo"], > iframe[data-src*="player.vimeo"]'),
                (e = e.replace("vimeo", ""))),
              "," == s.charAt(0) && (s = s.substring(2, s.length)),
              -1 != e.indexOf("out") && (t = "out"),
              (-1 == e.indexOf("img") && -1 == e.indexOf("image")) ||
                (i = "img"),
              (-1 == e.indexOf("bg") &&
                -1 == e.indexOf("background") &&
                -1 == e.indexOf("bgonly")) ||
                (a = ""),
              (o =
                -1 != e.indexOf("current")
                  ? o.filter(
                      i +
                        "[data-ls-slide" +
                        t +
                        '="' +
                        Z.slides.current.index +
                        '"]' +
                        a +
                        r
                    )
                  : -1 != e.indexOf("next")
                  ? o.filter(
                      i +
                        "[data-ls-slide" +
                        t +
                        '="' +
                        Z.slides.next.index +
                        '"]' +
                        a +
                        r
                    )
                  : o.filter(i + a + r)),
              -1 != e.indexOf("notactive") &&
                ((o = o.filter(".ls-bg, .ls-bg-video, :hidden")),
                (e = e.replace("notactive", ""))),
              -1 != e.indexOf("active") &&
                ((o = o.filter(
                  ':visible:not(.ls-bg, .ls-bg-video), [data-ls-static="1"]:not([data-ls-hidden])'
                )),
                (e = e.replace("active", ""))),
              -1 != e.indexOf("notstatic") &&
                ((o = o.filter(':not([data-ls-static="1"])')),
                (e = e.replace("notstatic", ""))),
              -1 != e.indexOf("static") &&
                ((o = o.filter('[data-ls-static="1"]')),
                (e = e.replace("static", ""))),
              -1 != e.indexOf("bgonly") &&
                ((o = o.filter(".ls-bg")), (e = e.replace("bgonly", ""))),
              "" !== s && (o = o.find(s))),
            o
          );
        },
        update: {
          data: function (e, t, i) {
            var s, a, r;
            switch (
              (e instanceof jQuery || (e = te(e)),
              i && e.attr("data-ls", i).data("ls", i),
              (s = (a = e.data(Z.defaults.init.dataKey)).is.onSlide),
              (r = a.original),
              t)
            ) {
              default:
              case "transitions":
                (a.settings.timelineIsCalculated = !1),
                  Z.layers.set.properties(e, s, !0);
                break;
              case "all":
                e.data(
                  Z.defaults.init.dataKey,
                  new Z.defaults.layer.options(e, s)
                ),
                  ((a = e.data(Z.defaults.init.dataKey)).original = r),
                  Z.layers.set.properties(e, s, !0),
                  Z.layers.set.wrappers(e, a, s);
            }
          },
        },
        wrap: function (u, e) {
          var t, h;
          Z.slides[u].wrapped ||
            "wrapping" === Z.slides[u].wrapped ||
            ((Z.slides[u].wrapped = "wrapping"),
            (t = e ? 25 : 0),
            (e = Z.slides[u].$layers),
            0 === (h = e.length)
              ? (Z.slides[u].wrapped = !0)
              : e.each(function (c, p) {
                  Z.timeouts["slide-" + u + "-layer-" + c] = setTimeout(
                    function () {
                      delete Z.timeouts["slide-" + u + "-layer-" + c];
                      var e = te(p),
                        t = e,
                        i = "",
                        s = !1,
                        a = "";
                      e.hasClass("ls-hide-phone") && (a += " ls-hide-on-phone"),
                        e.hasClass("ls-hide-tablet") &&
                          (a += " ls-hide-on-tablet"),
                        e.hasClass("ls-hide-desktop") &&
                          (a += " ls-hide-on-desktop"),
                        e.removeClass(
                          "ls-hide-phone ls-hide-tablet ls-hide-desktop"
                        ),
                        t.is("a") &&
                          1 === t.children().length &&
                          ((s = !0), (e = t.find(".ls-layer")));
                      var r,
                        o,
                        n,
                        l = e.data(Z.defaults.init.dataKey);
                      if (!l) return !0;
                      (d = e.data("$layerGroup") || Z.slider.$layersWrapper),
                        l.is.backgroundVideo
                          ? (d = Z.slider.$bgVideosWrapper)
                          : l.is.slideBackground &&
                            (d = Z.slider.$slideBGWrapper),
                        e.data("hasBeenSet") || Z.layers.set.singleLayer(e, u),
                        l.textIn.split &&
                          ((n = new J.SplitType(e[0], {
                            split: l.textIn.split,
                          })),
                          l.textIn.type &&
                            (l.textIn.ns = n[l.textIn.type.split("_")[0]]),
                          l.textOut.type &&
                            (l.textOut.ns = n[l.textOut.type.split("_")[0]]),
                          -1 !== e.css("background-clip").indexOf("text") &&
                            ((r = e.find(".char")),
                            (o = e.find(".word")),
                            (n = e.find(".line")),
                            (l.textIn.$nodesForBackgroundClip = r.length
                              ? r
                              : o.length
                              ? o
                              : n),
                            r.length
                              ? e.addClass("ls-has-chars")
                              : o.length
                              ? e.addClass("ls-has-words")
                              : e.addClass("ls-has-lines"),
                            l.textIn.$nodesForBackgroundClip.each(function () {
                              var e = te(this),
                                t = te.trim(e.text()),
                                i = document.createTextNode(t),
                                t = te(i),
                                i = te(
                                  '<div class="ls-textnode-bgclip-wrap"><div class="ls-textnode"></div></div>'
                                ).css({
                                  backgroundColor: l.original.backgroundColor,
                                  backgroundImage: l.original.backgroundImage,
                                  backgroundSize: l.original.backgroundSize,
                                  backgroundRepeat: l.original.backgroundRepeat,
                                  backgroundPosition:
                                    l.original.backgroundPosition,
                                });
                              e.css({ verticalAlign: "top" }).text(""),
                                t
                                  .clone()
                                  .appendTo(e)
                                  .wrap(
                                    '<div class="ls-textnode-dummy"></div>'
                                  ),
                                t.appendTo(e).wrap(i);
                            }))),
                        (i =
                          l.is.slideBackground || l.is.backgroundVideo
                            ? '<div class="ls-wrapper ls-bg-outer"><div class="ls-wrapper ls-bg-wrap"></div></div>'
                            : (l.clip.enabled &&
                                (i = '<div class="ls-wrapper ls-clip"></div>'),
                              l.loop.enabled &&
                                (i =
                                  '<div class="ls-wrapper ls-loop">' +
                                  i +
                                  "</div>"),
                              l.scroll.enabled &&
                                (i =
                                  '<div class="ls-wrapper ls-scroll"><div class="ls-wrapper ls-scroll-transform">' +
                                  i +
                                  "</div></div>"),
                              '<div class="ls-wrapper ls-in-out">' +
                                i +
                                "</div>")),
                        l.parallax.enabled &&
                          (i =
                            '<div class="ls-wrapper ls-parallax">' +
                            i +
                            "</div>"),
                        "" !==
                        (i =
                          '<div class="ls-wrapper ls-z ' +
                          (l.is.pinned ? "ls-pinned" : "") +
                          '">' +
                          i +
                          "</div>")
                          ? e.appendTo(d).wrap(i)
                          : e.appendTo(d),
                        !0 === s &&
                          t.addClass("ls-layer-link").appendTo(e.parent());
                      var d = {},
                        s = e.css("mix-blend-mode");
                      s &&
                        "normal" !== s &&
                        ((d["mix-blend-mode"] = s),
                        e.css("mix-blend-mode", "normal")),
                        (l.original.customZIndex = 1);
                      s = parseInt(l.original.zIndex);
                      l.is.backgroundVideo || l.is.slideBackground
                        ? (d = { zIndex: l.original.customZIndex })
                        : ((s = s || c + 101),
                          (d.zIndex = s),
                          (l.original.customZIndex = s)),
                        Z.browser.isSafari && (d.transform = "translateZ(0)"),
                        Z.layers.set.wrappers(e, l, u),
                        l.elements.$outerWrapper.css(d).addClass(a),
                        l.styleSettings.pointerevents &&
                          l.elements.$innerWrapper.css(
                            "pointer-events",
                            "none"
                          ),
                        l.is.slideBackground &&
                          l.elements.$bgWrapper.css({
                            backgroundColor: Z.slides[u].data.backgroundColor,
                          }),
                        (Z.layers.$all = Z.layers.$all.add(e)),
                        (Z.slides[u].$layers = Z.slides[u].$layers.not(t)),
                        c === h - 1 &&
                          ($.children(".ls-slide")
                            .eq(u - 1)
                            .empty(),
                          (Z.slides[u].wrapped = !0));
                    },
                    t * (c + 1)
                  );
                }));
        },
      }),
      (Z.slideshow = {
        direction: "next",
        nextLoop: 0,
        firstStart: !0,
        forceFastChange: !1,
        sequence: { normal: [], randomized: [] },
        state: {
          changed: -1,
          running: !0,
          paused: !1,
          pausedByVideo: !1,
          pausedByHover: !1,
          pausedByLastCycle: !1,
        },
        should: { change: !1, start: !1, stop: !1 },
        isPaused: function () {
          return (
            this.state.paused ||
            this.state.pausedByVideo ||
            this.state.pausedByHover ||
            this.state.pausedByPerformance
          );
        },
        init: function () {
          1 == Z.slides.count &&
            te.extend(Z.o, {
              autoStart: !1,
              navPrevNext: !1,
              navStartStop: !1,
              navButtons: !1,
              cycles: -1,
              forceLoopNum: !1,
              autoPauseSlideshow: !0,
              firstSlide: 1,
              thumbnailNavigation: "disabled",
            }),
            (Z.o.autoStart && 1 != Z.slides.count) ||
              Z.functions.setStates(this, { running: !1, paused: !0 }),
            this.set.pauseOnHover(),
            this.set.sequences();
        },
        set: {
          pauseOnHover: function () {
            (Z.o.pauseOnHover =
              !0 === Z.o.pauseOnHover ? "slideshowOnly" : Z.o.pauseOnHover),
              !1 !== Z.o.pauseOnHover &&
                $.on("mouseenter." + B, function () {
                  Z.slider.state.inFullscreen ||
                    (Z.functions.setStates(Z.slideshow, { pausedByHover: !0 }),
                    "slideshowOnly" !== Z.o.pauseOnHover &&
                      Z.transitions.layers.timeline.pause());
                }).on("mouseleave." + B, function () {
                  var e = 1;
                  Z.transitions._slideTimeline &&
                    Z.transitions._slideTimeline.duration() >
                      Z.transitions.layers.timeline.totalDuration &&
                    (e =
                      Z.transitions.layers.timeline.totalDuration /
                      Z.transitions._slideTimeline.duration()),
                    Z.functions.setStates(Z.slideshow, { pausedByHover: !1 }),
                    te("body").hasClass("ls-unselectable") ||
                      "slideshowOnly" === Z.o.pauseOnHover ||
                      (Z.o.pauseLayers && Z.slideshow.isPaused()) ||
                      Z.transitions.layers.timeline.resume(),
                    Z.transitions._slideTimeline &&
                      Z.transitions.layers.timeline.state.finished &&
                      Z.transitions._slideTimeline.progress() < e &&
                      Z.functions.setStates(Z.transitions.layers.timeline, {
                        finished: !1,
                      }),
                    Z.slideshow.start();
                });
          },
          sequences: function () {
            for (var e = 0; e < Z.slides.count; e++)
              Z.slideshow.sequence.normal[e] = e + 1;
            Z.slideshow.sequence.randomized = Z.functions.shuffleArray(
              te.merge([], Z.slideshow.sequence.normal)
            );
          },
          normalizedSequence: function () {
            var e = Z.o.shuffleSlideshow ? "randomized" : "normal",
              t = Z.slideshow.sequence[e],
              i = Z.slideshow.sequence[e].length,
              s = t.indexOf(Z.slides.first.index);
            Z.slideshow.sequence.normalized = [];
            for (var a = s; a < i; a++)
              Z.slideshow.sequence.normalized.push(t[a]);
            for (var r = 0; r < s; r++)
              Z.slideshow.sequence.normalized.push(t[r]);
          },
          prevNext: function (e) {
            switch (
              (("prev" !== e && "first" !== e) || !Z.o.twoWaySlideshow
                ? (Z.slideshow.direction = "next")
                : (Z.slideshow.direction = "prev"),
              e)
            ) {
              case "prev":
                Z.slideshow.changeTo(
                  Z.slideshow.get.slideInSequence("prev"),
                  !0
                );
                break;
              case "next":
                Z.slideshow.changeTo(
                  Z.slideshow.get.slideInSequence("next"),
                  !0
                );
                break;
              case "first":
                Z.slideshow.changeTo(1, !0);
                break;
              case "last":
                Z.slideshow.changeTo(Z.slides.count, !0);
            }
          },
        },
        get: {
          sequence: function () {
            var e = "normal";
            return (
              Z.o.playByScroll
                ? (e = "normalized")
                : Z.o.shuffleSlideshow && (e = "randomized"),
              e
            );
          },
          slideInSequence: function (e) {
            var t = Z.slideshow.sequence[this.sequence()],
              i = t.indexOf(Z.slides.current.index);
            switch (e) {
              case "prev":
                return 0 === i ? t[t.length - 1] : t[i - 1];
              case "next":
                return i === t.length - 1 ? t[0] : t[i + 1];
              default:
                return t[e];
            }
          },
          indexOfSlideInSequence: function (e) {
            return Z.slideshow.sequence[this.sequence()].indexOf(e);
          },
        },
        cycles: {
          set: function () {
            0 < Z.o.cycles &&
              ((Z.slideshow.curCycle = 1),
              (Z.slideshow.cycleSlideIndex =
                Z.slideshow.get.indexOfSlideInSequence(Z.slides.first.index)));
          },
          check: function (e) {
            if (
              Z.slideshow.get.indexOfSlideInSequence(e) ===
              Z.slideshow.cycleSlideIndex
            )
              return ++Z.slideshow.curCycle === Z.o.cycles + 1;
          },
        },
        start: function (e) {
          !this.isPaused() &&
            Z.transitions._slideTimeline &&
            Z.transitions.layers.timeline.state.finished &&
            this.changeTo(Z.slides.next.index);
        },
        stop: function () {
          Z.functions.setStates(this, { running: !1, paused: !0 });
        },
        changeTo: function (e, t, i) {
          if (!document.body.contains(I)) return !1;
          if (Z.slides.current.index === e && !Z.slideshow.forceSlideChangeTo)
            return !1;
          if (
            ((Z.slideshow.forceSlideChangeTo = null),
            !this.firstStart && Z.api.hasEvent("slideChangeWillStart"))
          ) {
            var s = Z.api.triggerEvent(
              "slideChangeWillStart",
              Z.api.eventData()
            );
            if (!1 === s) return;
            te.isNumeric(s) && (e = parseInt(s));
          }
          e > Z.slides.count || e < 1
            ? Z.debugMode &&
              (Z.debug.add("group", "slideshow"),
              Z.debug.add("warn", "slideshow.invalidSlideIndex", [
                e,
                Z.slides.count,
              ]),
              Z.debug.groupEnd())
            : Z.slider.isBusy() || (Z.slideshow.state.pausedByVideo && !t)
            ? !Z.slider.state.preloadingImages &&
              Z.slider.state.animatingSlides &&
              Z.transitions._slideTransition &&
              ((Z.slideshow.forceSlideChangeTo = e),
              (Z.slideshow.should.change = !0),
              Z.transitions._slideTransition.progress(1),
              Z.transitions.timelines.set("currentforce", function (e, t) {
                e.progress(1);
              }))
            : (Z.functions.setStates(Z.transitions.layers.timeline, {
                finished: !1,
              }),
              (Z.slideshow.should.change = !1),
              Z.debugMode && Z.debug.add("group", "slideshow"),
              t
                ? ("prev" === Z.navigation.direction &&
                    Z.o.twoWaySlideshow &&
                    (Z.slideshow.direction = "prev"),
                  Z.debugMode &&
                    (Z.debug.add("log", "slideshow.changedByUser", !1),
                    Z.o.twoWaySlideshow &&
                      Z.debug.add(
                        "log",
                        "slideshow.setdir",
                        Z.slideshow.direction
                      )))
                : (Z.navigation.direction = Z.slideshow.direction),
              Z.transitions.timers.reverse(),
              Z.gui.media.hideUnmute(),
              Z.slides.set.nextSlideIndex(e),
              Z.debugMode &&
                (Z.debug.add("log", "slideshow.change", [
                  Z.slides.current.index,
                  Z.slides.next.index,
                  Z.slideshow.direction,
                  Z.navigation.direction,
                ]),
                Z.debug.groupEnd()),
              Z.functions.setStates(this, {
                pausedByVideo: !1,
                changed: ++this.state.changed,
              }),
              Z.functions.setStates(Z.slider, { changingSlides: !0 }),
              Z.slider.state.animatingSlides &&
                Z.transitions._slideTransition &&
                Z.transitions.timelines.set("currentforce", function (e, t) {
                  e.progress(1);
                }),
              Z.preload.imagesOfSlide(Z.slides.next.index, function () {
                Z.transitions.start();
              }));
        },
        forceStop: function () {
          Z.navigation.stop(),
            te.each(Z.timeouts, function (e, t) {
              clearTimeout(Z.timeouts[e]);
            }),
            Z.transitions.timers.stop(),
            Z.transitions._slideTimeline.stop(),
            Z.transitions._slideTimelineAlternate.stop(),
            Z.functions.setStates(Z.transitions.layers.timeline, {
              stopped: !0,
              running: !1,
            }),
            $.find("*").stop(!0, !1).dequeue();
        },
        restart: function () {
          $.find("*").stop(),
            Z.navigation.change(Z.slides.current.index, Z.slideshow.direction);
        },
      }),
      (Z.media = {
        properties: {
          $allMediaLayers: te(),
          playingInCurSlide: 0,
          endedInCurSlide: 0,
          userDidUnmute: !1,
        },
        init: function () {
          Z.functions.setStates(Z.slider, {
            waitingForYouTube: !1,
            waitingForVimeo: !1,
          }),
            (Z.media.properties.allowToUnmute = !0),
            Z.media.youtube.init(),
            Z.media.vimeo.init(),
            Z.media.html5.init();
        },
        isPlayable: function (e) {
          return !e.is("[data-ls-animating-out], [data-ls-hidden]");
        },
        get: function (e) {
          var t,
            i = Z.media.properties.$allMediaLayers;
          return (
            e &&
              (-1 !== (e = e.toLowerCase()).indexOf("notbg") &&
                (i = i.not(".ls-bg-video")),
              -1 !== e.indexOf("active") &&
                (i = i.filter(
                  "[data-ls-active], [data-ls-animating-in], [data-ls-text-animating-in]"
                )),
              -1 !== e.indexOf("notstatic") && (i = i.not("[data-ls-static]")),
              (t = i.find("video, audio, iframe")),
              -1 !== e.indexOf("notplaying")
                ? (t = t.filter("[data-ls-not-playing]"))
                : -1 !== e.indexOf("playing") &&
                  (t = t.filter("[data-ls-playing]")),
              -1 !== e.indexOf("allowtounmute") &&
                (t = t.filter("[data-ls-allow-to-unmute]")),
              -1 !== e.indexOf("mutedbybrowser") &&
                (t = t.filter("[data-ls-muted-by-browser]"))),
            t
          );
        },
        set: {
          backgroundVideo: function (e, t) {
            0 === e.children(".ls-vpcontainer").length &&
              ((e = te("<div>").addClass("ls-vpcontainer").appendTo(e)),
              t.mediaSettings.poster &&
                te("<div>")
                  .appendTo(e)
                  .addClass("ls-videopreview")
                  .attr({
                    style:
                      "background-image: url(" + t.mediaSettings.poster + ")",
                  }));
          },
          customPoster: function (e, t) {
            return t.mediaSettings.poster || !1;
          },
          dataAttribute: function (e, t) {
            e.removeAttr("data-ls-playing data-ls-not-playing"),
              e.attr("data-ls-" + t, ""),
              Z.media.functions.checkSlideshowWaiting();
          },
          mediaElements: function (e, t, i) {
            var s = te("<div>").addClass("ls-vpcontainer").appendTo(e);
            (!("autoplay" in i.mediaSettings) && Z.o.autoPlayVideos) ||
            i.mediaSettings.autoplay
              ? e.addClass("ls-autoplay")
              : te("<div>").appendTo(s).addClass("ls-playvideo"),
              t.is("iframe") &&
                i.mediaProperties.poster &&
                te("<div>")
                  .appendTo(s)
                  .addClass("ls-videopreview")
                  .attr({
                    style:
                      "background-image: url(" + i.mediaProperties.poster + ")",
                  }),
              t.is("video, audio") &&
                i.mediaProperties.poster &&
                te("<div>")
                  .appendTo(s)
                  .addClass("ls-videopreview")
                  .attr({
                    style:
                      "background-image: url(" + i.mediaProperties.poster + ")",
                  });
          },
          properties: function (e, t, i) {
            switch (((i.is.mediaLayer = !0), i.mediaProperties.type)) {
              case "youtube":
                i.is.backgroundVideo
                  ? ((i.mediaProperties.options = te.extend(
                      !0,
                      {
                        loop: 1,
                        playlist: i.mediaProperties.embedID,
                        controls: 0,
                        autoplay: 0,
                        showinfo: !1,
                        modestbranding: 1,
                        thumbnail: !1,
                      },
                      Z.media[i.mediaProperties.type].defaults,
                      i.mediaProperties.embedOptions
                    )),
                    Z.media.set.backgroundVideo(e, i))
                  : ((i.mediaProperties.options = te.extend(
                      !0,
                      {},
                      Z.media[i.mediaProperties.type].defaults,
                      i.mediaProperties.embedOptions,
                      { autoplay: 0 }
                    )),
                    Z.media.set.mediaElements(e, t, i));
                break;
              case "vimeo":
                i.is.backgroundVideo
                  ? ((i.mediaProperties.options = te.extend(
                      !0,
                      { loop: 1, byline: 0, portrait: 0, title: 0, fun: 0 },
                      Z.media[i.mediaProperties.type].defaults,
                      i.mediaProperties.embedOptions
                    )),
                    Z.media.set.backgroundVideo(e, i))
                  : ((i.mediaProperties.options = te.extend(
                      !0,
                      {},
                      Z.media[i.mediaProperties.type].defaults,
                      i.mediaProperties.embedOptions,
                      { autoplay: 0 }
                    )),
                    Z.media.set.mediaElements(e, t, i));
                break;
              case "html5":
                t.attr("autoplay") &&
                  (t.removeAttr("autoplay"),
                  e.attr("data-ls", e.attr("data-ls") + " autoplay: true;")),
                  i.is.backgroundVideo
                    ? (t.removeAttr("controls"),
                      (t[0].muted = !0),
                      t.attr("loop", ""))
                    : "controls" in i.mediaSettings &&
                      "auto" !== i.mediaSettings.controls &&
                      (i.mediaSettings.controls
                        ? (t.attr("controls", ""), t.removeAttr("nocontrols"))
                        : t.removeAttr("controls")),
                  "volume" in i.mediaSettings &&
                    (i.mediaSettings.volume < 0
                      ? (i.mediaSettings.volume = 0)
                      : 100 < i.mediaSettings.volume &&
                        (i.mediaSettings.volume = 100),
                    (t[0].volume = i.mediaSettings.volume / 100)),
                  "muted" in i.mediaSettings &&
                    (i.mediaSettings.muted
                      ? (t[0].muted = !0)
                      : (t[0].muted = !1)),
                  "loop" in i.mediaSettings &&
                    (i.mediaSettings.loop
                      ? t.attr("loop", "")
                      : t.removeAttr("loop")),
                  i.is.backgroundVideo
                    ? Z.media.set.backgroundVideo(e, i)
                    : Z.media.set.mediaElements(e, t, i);
            }
          },
          thumbnail: function (e, t) {
            switch (t) {
              case "show":
                e.stop(!0, !0).fadeIn(Z.transitions.media.defaults.fadeIn);
                break;
              case "hide":
                e.stop(!0, !0)
                  .delay(Z.transitions.media.defaults.delay)
                  .fadeOut(Z.transitions.media.defaults.fadeOut);
            }
          },
        },
        events: {
          start: function (e, t, i) {
            var s;
            Z.api.hasEvent("mediaDidStart") &&
              !i.mediaProperties.alreadyStarted &&
              Z.media.functions.allowedToPlay(e, i) &&
              (((s = Z.api.eventData()).event.target = e[0]),
              Z.api.triggerEvent("mediaDidStart", s),
              (i.mediaProperties.alreadyStarted = !0));
          },
          stop: function (e, t, i) {
            var s;
            Z.api.hasEvent("mediaDidStop") &&
              i.mediaProperties.alreadyStarted &&
              (((s = Z.api.eventData()).event.target = e[0]),
              Z.api.triggerEvent("mediaDidStop", s),
              (i.mediaProperties.alreadyStarted = !1));
          },
        },
        unmute: {
          set: function (e, t, i) {
            (("youtube" !== t && "vimeo" !== t) ||
              Z.media.properties.allowToUnmute) &&
              Z.gui.media.showUnmute(),
              e.attr("data-ls-allow-to-unmute", ""),
              i && e.attr("data-ls-muted-by-browser", "");
          },
          multipleMediaElements: function () {
            var e = $.find("[data-ls-allow-to-unmute]");
            (Z.o.rememberUnmuteState
              ? e
              : e.filter("[data-ls-playing], [data-ls-muted-by-browser]")
            ).each(function () {
              Z.media.unmute.singleMediaElement(te(this));
            }),
              Z.gui.media.hideUnmute(),
              (Z.media.properties.userDidUnmute = !0);
          },
          singleMediaElement: function (e) {
            var t,
              i = e.closest(".ls-layer").data(Z.defaults.init.dataKey),
              s = !1;
            switch (i.mediaProperties.type) {
              case "youtube":
                Z.media.properties.allowToUnmute &&
                  ((s = !0), i.mediaProperties.player.unMute());
                break;
              case "vimeo":
                Z.media.properties.allowToUnmute &&
                  ((s = !0),
                  (t = i.mediaSettings.volume
                    ? i.mediaSettings.volume / 100
                    : 1),
                  i.mediaProperties.player.setVolume(t));
                break;
              case "html5":
                (s = !0), (e[0].muted = !1);
            }
            s &&
              e.removeAttr("data-ls-muted-by-browser data-ls-allow-to-unmute");
          },
        },
        functions: {
          allowedToPlay: function (e, t) {
            e = e.closest(".ls-layer");
            return !!(
              Z.slides.current.index === parseInt(e.attr("data-ls-slidein")) ||
              (t.is.backgroundVideo &&
                Z.slides.next.index === parseInt(e.attr("data-ls-slidein"))) ||
              (e.attr("data-ls-static") && void 0 !== e.attr("data-ls-active"))
            );
          },
          playActiveMedia: function (e) {
            var t, i;
            Z.media.get("notbg,active").each(function () {
              if (
                ((t = te(this).closest(".ls-layer")),
                (i = t.data(Z.defaults.init.dataKey)),
                e)
              ) {
                if (!i.mediaProperties.pausedByPerformance) return !0;
                i.mediaProperties.pausedByPerformance = !1;
              }
              if (Z.media.isPlayable(t))
                if (i.mediaProperties.alreadyStarted)
                  switch (i.mediaProperties.type) {
                    case "youtube":
                      i.mediaProperties.player.playVideo();
                      break;
                    case "vimeo":
                      i.mediaProperties.player.play();
                      break;
                    case "html5":
                      i.mediaProperties.$media[0].play();
                  }
                else
                  te(this)
                    .parent()
                    .find(".ls-vpcontainer")
                    .trigger("playMedia");
            });
          },
          stopSingleMedia: function (e, t) {
            var i = t.mediaProperties.$media;
            Z.media[t.mediaProperties.type].stop(e, i, t, !0),
              Z.media.functions.mediaEnded(i, e, t);
          },
          pauseActiveMedia: function (e) {
            var t;
            Z.media.get("notbg,active,playing").each(function () {
              switch (
                ((t = te(this)
                  .closest(".ls-layer")
                  .data(Z.defaults.init.dataKey)),
                e && (t.mediaProperties.pausedByPerformance = !0),
                t.mediaProperties.type)
              ) {
                case "youtube":
                  t.mediaProperties.player.pauseVideo();
                  break;
                case "vimeo":
                  t.mediaProperties.player.pause();
                  break;
                case "html5":
                  this.pause();
              }
            });
          },
          urlToObject: function (e) {
            var s = {},
              e = e.split("?")[1];
            return (
              e &&
                e
                  .split("#")[0]
                  .replace(/([^=&]+)=([^&]*)/g, function (e, t, i) {
                    s[decodeURIComponent(t)] = te.isNumeric(
                      decodeURIComponent(i)
                    )
                      ? parseInt(decodeURIComponent(i))
                      : decodeURIComponent(i);
                  }),
              s
            );
          },
          checkSlideshowState: function (e, t) {
            !t.is.static &&
              Z.o.autoPauseSlideshow &&
              (Z.functions.setStates(Z.slideshow, { pausedByVideo: !0 }),
              "auto" == Z.o.autoPauseSlideshow &&
                Z.media.properties.playingInCurSlide++);
          },
          checkSlideshowWaiting: function () {
            var e = Z.media.properties.playingInCurSlide,
              t = Z.media.get("notbg,active,notstatic,notplaying"),
              i = t.length;
            i === e &&
            0 < i &&
            Z.slideshow.state.pausedByVideo &&
            Z.o.autoPauseSlideshow &&
            !Z.timeouts.pausedVideos &&
            Z.slideshow.state.running
              ? (Z.timeouts.pausedVideos = setTimeout(function () {
                  Z.slideshow.state.running
                    ? t.each(function () {
                        Z.media.functions.mediaEnded(
                          te(this),
                          te(this).closest(".ls-layer"),
                          te(this)
                            .closest(".ls-layer")
                            .data(Z.defaults.init.dataKey)
                        );
                      })
                    : (Z.slideshow.state.pausedByVideo = !1);
                }, 5e3))
              : Z.timeouts.pausedVideos &&
                (clearTimeout(Z.timeouts.pausedVideos),
                delete Z.timeouts.pausedVideos);
          },
          playIfAllowed: function (e) {
            var t = e.data(Z.defaults.init.dataKey);
            t.is.mediaLayer &&
              ((ee.isMobile &&
                (($.hasClass("ls-device-is-phone") &&
                  t.elements.$outerWrapper.hasClass("ls-hide-on-phone")) ||
                  ($.hasClass("ls-device-is-tablet") &&
                    t.elements.$outerWrapper.hasClass("ls-hide-on-tablet")))) ||
                (("autoplay" in t.mediaSettings || !Z.o.autoPlayVideos) &&
                  !t.mediaSettings.autoplay) ||
                e.find(".ls-vpcontainer").trigger("playMedia"));
          },
          stop: function (s) {
            s = void 0 === s || s;
            Z.layers.get("current,out,youtube").each(function () {
              var e = te(this),
                t = e.closest(".ls-layer"),
                i = t.data(Z.defaults.init.dataKey);
              Z.media.youtube.stop(t, e, i, s);
            }),
              Z.layers.get("current,out,vimeo").each(function () {
                var e = te(this),
                  t = e.closest(".ls-layer"),
                  i = t.data(Z.defaults.init.dataKey);
                Z.media.vimeo.stop(t, e, i, s);
              }),
              Z.layers.get("current,out,html5").each(function () {
                var e = te(this),
                  t = e.closest(".ls-layer"),
                  i = t.data(Z.defaults.init.dataKey);
                Z.media.html5.stop(t, e, i, s);
              }),
              (Z.media.properties.playingInCurSlide = 0),
              (Z.media.properties.endedInCurSlide = 0);
          },
          mediaEnded: function (e, t, i) {
            "auto" != Z.o.autoPauseSlideshow ||
              i.is.backgroundVideo ||
              (i.is.static || Z.media.properties.endedInCurSlide++,
              Z.media.properties.endedInCurSlide ==
                Z.media.properties.playingInCurSlide &&
                0 !== Z.media.properties.playingInCurSlide &&
                Z.functions.setStates(Z.slideshow, { pausedByVideo: !1 })),
              Z.media.set.dataAttribute(e, "not-playing"),
              Z.media.events.stop(e, t, i);
          },
          removeFromTimeline: function (e) {
            Z.transitions._slideTimeline.kill(null, e.closest(".ls-in-out")[0]),
              Z.transitions._slideTimelineAlternate.kill(
                null,
                e.closest(".ls-in-out")[0]
              );
          },
        },
        youtube: {
          defaults: {
            autoplay: 0,
            playsinline: 1,
            wmode: "opaque",
            html5: 1,
            enablejsapi: 1,
            version: 3,
            rel: 0,
          },
          init: function () {
            var f = 0;
            (this.$medias = Z.slider.$hiddenWrapper
              .find(
                'iframe[src*="youtube-nocookie.com"], iframe[src*="youtube.com"], iframe[src*="youtu.be"], iframe[data-src*="youtube-nocookie.com"], iframe[data-src*="youtube.com"], iframe[data-src*="youtu.be"]'
              )
              .each(function () {
                var e = te(this).attr({
                    id: "ls-youtube-" + ++f,
                    allow:
                      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen",
                    allowfullscreen: "",
                  }),
                  t = e.closest(".ls-layer");
                t.data("hasBeenSet") || Z.layers.set.singleLayer(t);
                var i,
                  s,
                  a,
                  r,
                  o,
                  n,
                  l,
                  d,
                  c = t.data(Z.defaults.init.dataKey),
                  p = e.attr("src") || e.attr("data-src"),
                  u = Z.media.functions.urlToObject(p),
                  h = (p = p.split("?")[0].split("//")[1]).split("/"),
                  m = h[h.length - 1],
                  h = Z.media.set.customPoster(t, c);
                (c.mediaProperties = {
                  type: "youtube",
                  $media: e,
                  embedURL: p,
                  embedID: m,
                  embedOptions: u,
                }),
                  h
                    ? ((c.mediaProperties.poster = h),
                      Z.media.set.properties(t, e, c))
                    : ((i = [
                        "default.jpg",
                        "mqdefault.jpg",
                        "hqdefault.jpg",
                        "sddefault.jpg",
                        "maxresdefault.jpg",
                      ]),
                      (s =
                        "https://img.youtube.com/vi/" +
                        p.split("embed/")[1].split("?")[0] +
                        "/"),
                      (a = s + Z.o.youtubePreview),
                      (o = r = 0),
                      (n = function () {
                        this.width > r && ((r = this.width), (a = this.src)),
                          d();
                      }),
                      (l = function () {
                        d();
                      }),
                      (d = function () {
                        (o += 1) === i.length &&
                          ((c.mediaProperties.poster = a),
                          Z.media.set.properties(t, e, c));
                      }),
                      i.forEach(function (e) {
                        var t = new Image();
                        t.addEventListener("error", l, !1),
                          t.addEventListener("load", n, !1),
                          (t.src = s + e);
                      }));
              })),
              this.$medias.length &&
                ((Z.media.properties.$allMediaLayers =
                  Z.media.properties.$allMediaLayers.add(
                    this.$medias.closest(".ls-layer")
                  )),
                (Z.timeouts.loadYouTube = Math.floor(Date.now() / 1e3)),
                window.YT ||
                  te("<script>")
                    .attr({
                      src: "https://www.youtube.com/iframe_api",
                      type: "text/javascript",
                    })
                    .appendTo("head"),
                (window.onYouTubeIframeAPIReady = function () {
                  window._layerSlider.globals.youTubeIsReady = !0;
                }),
                (Z.intervals.isYouTubeReady = setInterval(function () {
                  (window.YT && 1 === window.YT.loaded) ||
                  window._layerSlider.globals.youTubeIsReady ||
                  3 < Math.floor(Date.now() / 1e3) - Z.timeouts.loadYouTube
                    ? (clearInterval(Z.intervals.isYouTubeReady),
                      delete Z.intervals.isYouTubeReady,
                      delete Z.timeouts.loadYouTube,
                      Z.media.youtube.$medias
                        .closest(".ls-layer")
                        .each(function () {
                          var e = te(this),
                            t = e.find("iframe"),
                            i = e.data(Z.defaults.init.dataKey);
                          e.on(
                            "playMedia." + B + " click." + B,
                            ".ls-vpcontainer",
                            function () {
                              Z.media.set.thumbnail(te(this), "hide"),
                                Z.media.functions.checkSlideshowState(e, i),
                                t.hide(),
                                Z.media.youtube.play(
                                  e,
                                  i.mediaProperties.$media,
                                  i,
                                  i.mediaProperties.embedURL
                                ),
                                setTimeout(function () {
                                  t.show();
                                }, 10);
                            }
                          )
                            .on("playBackgroundVideo." + B, function () {
                              Z.media.youtube.play(
                                e,
                                i.mediaProperties.$media,
                                i,
                                i.mediaProperties.embedURL
                              ),
                                Z.layers.set.dataAttribute("add", e, "active");
                            })
                            .on("stopBackgroundVideo." + B, function () {
                              Z.media.youtube.stop(
                                e,
                                i.mediaProperties.$media,
                                i,
                                !0
                              ),
                                Z.layers.set.dataAttribute("add", e, "hidden");
                            })
                            .on("preloadBackgroundVideo." + B, function () {
                              Z.media.youtube.createPlayer(
                                e,
                                i.mediaProperties.$media,
                                i,
                                i.mediaProperties.embedURL,
                                !0
                              );
                            });
                        }),
                      Z.functions.setStates(Z.slider, {
                        waitingForYouTube: !1,
                      }))
                    : Z.functions.setStates(Z.slider, {
                        waitingForYouTube: !0,
                      });
                }, 25)));
          },
          createPlayer: function (t, i, s, a, r) {
            (s.mediaProperties.playerState = "initializing"),
              "controls" in s.mediaSettings &&
                (s.mediaProperties.options.controls = s.mediaSettings.controls
                  ? 1
                  : 0),
              "loop" in s.mediaSettings &&
                (s.mediaProperties.options.loop = s.mediaSettings.loop ? 1 : 0),
              "showinfo" in s.mediaSettings &&
                (s.mediaProperties.options.showinfo = s.mediaSettings.showinfo
                  ? 1
                  : 0),
              s.mediaProperties.options.loop
                ? (s.mediaProperties.options.playlist =
                    s.mediaProperties.embedID)
                : delete s.mediaProperties.options.playlist,
              0 === s.mediaProperties.options.showinfo &&
                (s.mediaProperties.options.modestbranding = 1),
              i
                .attr(
                  "src",
                  "https://" + a + "?" + jQuery.param(s.mediaProperties.options)
                )
                .on("load", function () {
                  s.mediaProperties.player = new YT.Player(i[0], {
                    events: {
                      onReady: function (e) {
                        (s.mediaProperties.playerState = "ready"),
                          s.mediaSettings.volume &&
                            s.mediaProperties.player.setVolume(
                              s.mediaSettings.volume
                            ),
                          (r && !s.mediaProperties.shouldPlay) ||
                            (Z.media.youtube.play(t, i, s, a),
                            (s.mediaProperties.shouldPlay = !1));
                      },
                      onStateChange: function (e) {
                        switch (e.data) {
                          case 0:
                            (s.mediaProperties.options.loop &&
                              1 === s.mediaProperties.options.loop) ||
                              Z.media.functions.mediaEnded(i, t, s);
                            break;
                          case 1:
                            Z.media.events.start(i, t, s),
                              (s.mediaProperties.lastStarted = Date.now());
                            break;
                          case 2:
                          case -1:
                            (s.mediaProperties.firstState &&
                              0 !== s.mediaProperties.lastState &&
                              1 !== s.mediaProperties.lastState) ||
                              (s.mediaProperties.lastStarted &&
                                (Date.now(), s.mediaProperties.lastStarted));
                        }
                        1 === e.data
                          ? Z.media.set.dataAttribute(i, "playing")
                          : Z.media.set.dataAttribute(i, "not-playing"),
                          Z.media.youtube.savePlayerState(s, e.data);
                      },
                    },
                  });
                });
          },
          savePlayerState: function (e, t) {
            e.mediaProperties.firstState || (e.mediaProperties.firstState = t),
              (e.mediaProperties.lastState = t);
          },
          play: function (e, t, i, s, a) {
            void 0 !== t.attr("data-ls-muted-by-browser") &&
              Z.media.unmute.singleMediaElement(t),
              i.mediaProperties.player
                ? i.mediaProperties.player.playVideo
                  ? (!i.is.backgroundVideo ||
                      "muted" in i.mediaSettings ||
                      i.mediaProperties.player.mute(),
                    i.mediaSettings.muted
                      ? (Z.o.rememberUnmuteState &&
                          Z.media.properties.userDidUnmute) ||
                        (i.mediaProperties.player.mute(),
                        "offertounmute" == i.mediaSettings.muted &&
                          Z.media.unmute.set(t, i.mediaProperties.type))
                      : a &&
                        (i.mediaProperties.player.mute(),
                        Z.media.unmute.set(t, i.mediaProperties.type, !0)),
                    Z.media.functions.allowedToPlay(t, i)
                      ? Z.media.isPlayable(e) &&
                        i.mediaProperties.player.playVideo()
                      : Z.media.youtube.stop(e, t, i, !0))
                  : (i.mediaProperties.shouldPlay = !0)
                : i.mediaProperties.playerState
                ? (i.mediaProperties.shouldPlay = !0)
                : this.createPlayer(e, t, i, s);
          },
          stop: function (e, t, i, s) {
            i.mediaProperties.player &&
              (i.mediaProperties.player.pauseVideo &&
                i.mediaProperties.player.pauseVideo(),
              s &&
                i.mediaProperties.player.seekTo &&
                (i.mediaProperties.player.seekTo(0),
                i.mediaProperties.player.pauseVideo()),
              i.is.backgroundVideo ||
                Z.media.set.thumbnail(e.find(".ls-vpcontainer"), "show"),
              Z.media.events.stop(t, e, i));
          },
        },
        vimeo: {
          defaults: {
            autoplay: 0,
            autopause: 0,
            wmode: "opaque",
            playsinline: 1,
          },
          init: function () {
            var d,
              e,
              t = (this.$medias = Z.slider.$hiddenWrapper.find(
                'iframe[src*="player.vimeo"], iframe[data-src*="player.vimeo"]'
              )),
              c = Z.slider.$hiddenWrapper.find(
                '.ls-slide:eq(0) iframe[src*="player.vimeo"], .ls-slide:eq(0) iframe[data-src*="player.vimeo"]'
              ).length;
            t.length &&
              ((Z.timeouts.loadVimeo = Math.floor(Date.now() / 1e3)),
              (Z.media.properties.$allMediaLayers =
                Z.media.properties.$allMediaLayers.add(t.closest(".ls-layer"))),
              (d = 0),
              te("<script>")
                .attr({
                  src: "https://player.vimeo.com/api/player.js",
                  type: "text/javascript",
                })
                .appendTo("head"),
              (Z.intervals.isVimeoReady = setInterval(function () {
                Z.functions.setStates(Z.slider, { waitingForVimeo: !0 }),
                  (window.Vimeo ||
                    3 < Math.floor(Date.now() / 1e3) - Z.timeouts.loadVimeo) &&
                    (clearInterval(Z.intervals.isVimeoReady),
                    delete Z.intervals.isVimeoReady,
                    delete Z.timeouts.loadVimeo,
                    e());
              }, 25)),
              (e = function () {
                var l = 0;
                Z.media.vimeo.$medias.each(function () {
                  var t = te(this).attr({
                      id: "ls-vimeo-" + ++d,
                      allow:
                        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen",
                      allowfullscreen: "",
                    }),
                    i = t.closest(".ls-layer");
                  i.data("hasBeenSet") || Z.layers.set.singleLayer(i);
                  var s = i.data(Z.defaults.init.dataKey),
                    e = t.attr("src") || t.attr("data-src"),
                    a = Z.media.functions.urlToObject(e),
                    r =
                      "https://vimeo.com/api/oembed.json?url=http://vimeo.com/" +
                      e.split("video/")[1].split("?")[0],
                    e = e.split("?")[0].split("//")[1];
                  Z.media.vimeo.defaults.player_id = "ls-vimeo-" + d;
                  var o = Z.media.set.customPoster(i, s);
                  s.mediaProperties = {
                    type: "vimeo",
                    $media: t,
                    embedURL: e,
                    embedOptions: a,
                  };
                  function n(e) {
                    (s.mediaProperties.poster = e),
                      (0 === c || (0 < c && ++l == c)) &&
                        (window._layerSlider.globals.vimeoIsReady = !0),
                      Z.media.set.properties(i, t, s);
                  }
                  o
                    ? n(o)
                    : te.getJSON(r, function (e) {
                        n(e.thumbnail_url);
                      }),
                    i
                      .on(
                        "playMedia." + B + " click." + B,
                        ".ls-vpcontainer",
                        function () {
                          Z.media.set.thumbnail(te(this), "hide"),
                            Z.media.functions.checkSlideshowState(i, s),
                            Z.media.vimeo.play(i, t, s, e);
                        }
                      )
                      .on("playBackgroundVideo." + B, function () {
                        Z.media.vimeo.play(i, t, s, e),
                          Z.layers.set.dataAttribute("add", i, "active");
                      })
                      .on("stopBackgroundVideo." + B, function () {
                        Z.media.vimeo.stop(i, t, s, !0),
                          Z.layers.set.dataAttribute("add", i, "hidden");
                      })
                      .on("preloadBackgroundVideo." + B, function () {
                        Z.media.vimeo.createPlayer(i, t, s, e, !0);
                      });
                }),
                  Z.functions.setStates(Z.slider, { waitingForVimeo: !1 });
              }));
          },
          createPlayer: function (e, t, i, s, a) {
            i.mediaProperties.playerState = "initializing";
            "controls" in i.mediaSettings && delete i.mediaSettings.controls,
              "loop" in i.mediaSettings &&
                (i.mediaProperties.options.loop = i.mediaSettings.loop ? 1 : 0),
              "showinfo" in i.mediaSettings &&
                (i.mediaSettings.showinfo
                  ? ((i.mediaProperties.options.byline = 1),
                    (i.mediaProperties.options.portrait = 1),
                    (i.mediaProperties.options.title = 1))
                  : ((i.mediaProperties.options.byline = 0),
                    (i.mediaProperties.options.portrait = 0),
                    (i.mediaProperties.options.title = 0)),
                delete i.mediaProperties.options.showinfo),
              "volume" in i.mediaSettings &&
                (0 === i.mediaSettings.volume
                  ? ((i.mediaSettings.volume = 100),
                    (i.mediaSettings.muted = !0))
                  : (i.mediaSettings.volume < 0 ||
                      100 < i.mediaSettings.volume) &&
                    (i.mediaSettings.volume = 100)),
              i.mediaSettings.muted && (i.mediaProperties.options.muted = 1),
              t.attr(
                "src",
                "https://" + s + "?" + jQuery.param(i.mediaProperties.options)
              ),
              (i.mediaProperties.player = new Vimeo.Player(t[0])),
              i.mediaProperties.player.on("play", function () {
                Z.media.set.dataAttribute(t, "playing"),
                  Z.media.events.start(t, e, i);
              }),
              i.mediaProperties.player.on("pause", function () {
                Z.media.set.dataAttribute(t, "not-playing");
              }),
              i.mediaProperties.player.on("ended", function () {
                Z.media.functions.mediaEnded(t, e, i);
              }),
              i.mediaProperties.player.ready().then(function () {
                (i.mediaProperties.playerState = "ready"),
                  i.mediaSettings.volume &&
                    !i.mediaSettings.muted &&
                    te.isNumeric(i.mediaSettings.volume) &&
                    0 <= i.mediaSettings.volume &&
                    i.mediaSettings.volume <= 100 &&
                    i.mediaProperties.player.setVolume(
                      i.mediaSettings.volume / 100
                    ),
                  a || Z.media.vimeo.play(e, t, i, s);
              });
          },
          play: function (t, i, s, a, e) {
            void 0 !== i.attr("data-ls-muted-by-browser") &&
              Z.media.unmute.singleMediaElement(i),
              s.mediaProperties.player
                ? (!s.is.backgroundVideo ||
                    "muted" in s.mediaSettings ||
                    s.mediaProperties.player.setVolume(0),
                  s.mediaSettings.muted &&
                    (Z.o.rememberUnmuteState && Z.media.properties.userDidUnmute
                      ? Z.o.rememberUnmuteState &&
                        Z.media.properties.userDidUnmute &&
                        (s.mediaProperties.player.setVolume(
                          s.mediaSettings.volume / 100 || 1
                        ),
                        delete s.mediaSettings.muted)
                      : (s.mediaProperties.player.setVolume(0),
                        "offertounmute" == s.mediaSettings.muted &&
                          Z.media.unmute.set(i, s.mediaProperties.type))),
                  e
                    ? (s.mediaProperties.player.setVolume(0),
                      Z.media.unmute.set(i, s.mediaProperties.type, !0))
                    : s.mediaProperties.player.getVolume().then(function (e) {
                        0 == e &&
                          "offertounmute" == s.mediaSettings.muted &&
                          Z.media.unmute.set(i, s.mediaProperties.type);
                      }),
                  Z.media.functions.allowedToPlay(i, s)
                    ? s.mediaProperties.player
                        .play()
                        .then(function () {})
                        .catch(function (e) {
                          switch (e.name) {
                            case "PasswordError":
                              window.console &&
                                (console.error(Z.defaults.slider.errorText),
                                console.error(
                                  "Vimeo video is password protected and may cause playback issues."
                                ));
                              break;
                            case "PrivacyError":
                              window.console &&
                                (console.error(Z.defaults.slider.errorText),
                                console.error(
                                  "Vimeo video is private and may cause playback issues."
                                ));
                              break;
                            default:
                              Z.media.vimeo.play(t, i, s, a, !0);
                          }
                        })
                    : Z.media.vimeo.stop(t, i, s, !0))
                : this.createPlayer(t, i, s, a);
          },
          stop: function (e, t, i, s) {
            i.mediaProperties.player &&
              (i.mediaProperties.player.pause(),
              s && i.mediaProperties.player.setCurrentTime(0),
              i.is.backgroundVideo ||
                Z.media.set.thumbnail(e.find(".ls-vpcontainer"), "show"),
              Z.media.events.stop(t, e, i));
          },
        },
        html5: {
          singleInit: function (t) {
            var e,
              i,
              s,
              a,
              r = t.closest(".ls-layer"),
              o = r.data(Z.defaults.init.dataKey),
              n = t.find("source"),
              l = Z.media.set.customPoster(r, o);
            (o.mediaProperties = {
              type: "html5",
              $media: t,
              poster: l || t.attr("poster"),
            }),
              t.removeAttr("poster"),
              0 < n.length
                ? n.each(function () {
                    (void 0 !== (e = te(this).attr("type")) && !1 !== e) ||
                      ((i = te(this).attr("src")),
                      (s = i.split(".")),
                      (a = s[s.length - 1].toLowerCase()),
                      te(this).attr(
                        "type",
                        te(this).parent()[0].tagName.toLowerCase() + "/" + a
                      )),
                      "" !== t[0].canPlayType(te(this).attr("type")) &&
                        (o.mediaProperties.canBePlayed = !0);
                  })
                : void 0 !== t.attr("src") &&
                  !1 !== t.attr("src") &&
                  ((i = t.attr("src")),
                  (s = i.split(".")),
                  (a = s[s.length - 1].toLowerCase()),
                  "" !==
                    t[0].canPlayType(t[0].tagName.toLowerCase() + "/" + a) &&
                    (o.mediaProperties.canBePlayed = !0)),
              o.mediaProperties.canBePlayed &&
                (Z.media.set.properties(r, t, o),
                t
                  .on("ended." + B, function () {
                    Z.media.functions.mediaEnded(t, r, o);
                  })
                  .on("play." + B, function () {})
                  .on("playing." + B, function () {
                    Z.media.events.start(t, r, o),
                      Z.media.set.dataAttribute(t, "playing");
                  })
                  .on("pause." + B, function () {
                    Z.media.set.dataAttribute(t, "not-playing");
                  }),
                r
                  .on(
                    "playMedia." + B + " click." + B,
                    ".ls-vpcontainer",
                    function (e) {
                      Z.media.set.thumbnail(te(this), "hide"),
                        Z.media.functions.checkSlideshowState(r, o),
                        Z.media.html5.play(r, t, o);
                    }
                  )
                  .on("playBackgroundVideo." + B, function () {
                    Z.media.html5.play(r, t, o),
                      Z.layers.set.dataAttribute("add", r, "active");
                  })
                  .on("stopBackgroundVideo." + B, function () {
                    Z.media.html5.stop(r, t, o, !0),
                      Z.layers.set.dataAttribute("add", r, "hidden");
                  }));
          },
          init: function () {
            var e,
              t = Z.slider.$hiddenWrapper.find("video, audio");
            (Z.media.properties.$allMediaLayers =
              Z.media.properties.$allMediaLayers.add(t.closest(".ls-layer"))),
              t.length &&
                ((e = 0),
                t.each(function () {
                  (te(this)
                    .closest(".ls-layer")
                    .data(Z.defaults.init.dataKey).is.mediaLayer = !0),
                    te(this)
                      .attr("id", "ls-html5-" + ++e)
                      .attr("playsinline", ""),
                    te(this)[0].pause();
                }));
          },
          play: function (e, t, i) {
            var s;
            i.mediaProperties.canBePlayed &&
              (void 0 !== t.attr("data-ls-muted-by-browser") &&
                Z.media.unmute.singleMediaElement(t),
              i.mediaSettings.muted &&
                (Z.o.rememberUnmuteState && Z.media.properties.userDidUnmute
                  ? Z.o.rememberUnmuteState &&
                    Z.media.properties.userDidUnmute &&
                    (t[0].muted = !1)
                  : ((t[0].muted = !0),
                    "offertounmute" == i.mediaSettings.muted &&
                      Z.media.unmute.set(t, i.mediaProperties.type))),
              void 0 !== (s = t[0].play()) &&
                s
                  .then(function (e) {})
                  .catch(function (e) {
                    (t[0].muted = !0),
                      t[0].play(),
                      t[0].paused &&
                        Z.functions.setStates(Z.slideshow, {
                          pausedByVideo: !1,
                        }),
                      Z.media.unmute.set(t, i.mediaProperties.type, !0);
                  }));
          },
          stop: function (e, t, i, s) {
            i.mediaProperties.canBePlayed &&
              (t[0].pause(),
              s && (t[0].currentTime = 0),
              i.is.backgroundVideo || Z.media.set.thumbnail(te(this), "show"),
              Z.media.events.stop(t, e, i));
          },
        },
      }),
      (Z.yourLogo = {
        init: function () {
          Z.o.yourLogo &&
            (this.$element = te("<img>")
              .addClass("ls-yourlogo")
              .appendTo($)
              .attr("style", Z.o.yourLogoStyle)
              .css({ visibility: "hidden", display: "bock" })
              .on("load." + B, function () {
                var e = Z.yourLogo.$element ? 500 : 0;
                Z.timeouts.yourLogo = setTimeout(function () {
                  delete Z.timeouts.yourLogo,
                    Z.yourLogo.$element.data(
                      "originalWidth",
                      Z.yourLogo.$element.width()
                    ),
                    Z.yourLogo.$element.data(
                      "originalHeight",
                      Z.yourLogo.$element.height()
                    ),
                    "auto" != Z.yourLogo.$element.css("left") &&
                      Z.yourLogo.$element.data(
                        "originalLeft",
                        Z.yourLogo.$element[0].style.left
                      ),
                    "auto" != Z.yourLogo.$element.css("right") &&
                      Z.yourLogo.$element.data(
                        "originalRight",
                        Z.yourLogo.$element[0].style.right
                      ),
                    "auto" != Z.yourLogo.$element.css("top") &&
                      Z.yourLogo.$element.data(
                        "originalTop",
                        Z.yourLogo.$element[0].style.top
                      ),
                    "auto" != Z.yourLogo.$element.css("bottom") &&
                      Z.yourLogo.$element.data(
                        "originalBottom",
                        Z.yourLogo.$element[0].style.bottom
                      ),
                    !1 !== Z.o.yourLogoLink &&
                      te("<a>")
                        .appendTo($)
                        .attr("href", Z.o.yourLogoLink)
                        .attr("target", Z.o.yourLogoTarget)
                        .css({ textDecoration: "none", outline: "none" })
                        .append(Z.yourLogo.$element),
                    Z.yourLogo.$element.css({
                      display: "none",
                      visibility: "visible",
                    }),
                    Z.yourLogo.resize();
                }, e);
              })
              .attr("src", Z.o.yourLogo));
        },
        resize: function () {
          this.$element.css({
            width: this.$element.data("originalWidth") * Z.resize.ratio,
            height: this.$element.data("originalHeight") * Z.resize.ratio,
          }),
            this.$element.fadeIn(300);
          var e = "auto",
            t = "auto",
            i = "auto",
            s = "auto",
            e =
              this.$element.data("originalLeft") &&
              -1 != this.$element.data("originalLeft").indexOf("%")
                ? ($.width() / 100) *
                    parseFloat(this.$element.data("originalLeft")) -
                  this.$element.width() / 2 +
                  parseInt($.css("padding-left"))
                : parseInt(this.$element.data("originalLeft")) * Z.resize.ratio,
            t =
              this.$element.data("originalRight") &&
              -1 != this.$element.data("originalRight").indexOf("%")
                ? ($.width() / 100) *
                    parseFloat(this.$element.data("originalRight")) -
                  this.$element.width() / 2 +
                  parseInt($.css("padding-right"))
                : parseInt(this.$element.data("originalRight")) *
                  Z.resize.ratio,
            i =
              this.$element.data("originalTop") &&
              -1 != this.$element.data("originalTop").indexOf("%")
                ? ($.height() / 100) *
                    parseFloat(this.$element.data("originalTop")) -
                  this.$element.height() / 2 +
                  parseInt($.css("padding-top"))
                : parseInt(this.$element.data("originalTop")) * Z.resize.ratio,
            s =
              this.$element.data("originalBottom") &&
              -1 != this.$element.data("originalBottom").indexOf("%")
                ? ($.height() / 100) *
                    parseFloat(this.$element.data("originalBottom")) -
                  this.$element.height() / 2 +
                  parseInt($.css("padding-bottom"))
                : parseInt(this.$element.data("originalBottom")) *
                  Z.resize.ratio;
          this.$element.css({ left: e, right: t, top: i, bottom: s });
        },
      }),
      (Z.gui = {
        navigation: {
          init: function () {
            Z.o.navPrevNext && this.prevNext.init(),
              (Z.o.navStartStop || Z.o.navButtons) && this.bottom.init();
          },
          prevNext: {
            init: function () {
              te(
                '<a class="ls-gui-element ls-nav-prev" aria-label="jump to the previous slide" href="#" />'
              )
                .on("click." + B, function (e) {
                  e.preventDefault(), $.layerSlider("prev");
                })
                .appendTo($),
                te(
                  '<a class="ls-gui-element ls-nav-next" aria-label="jump to the next slide" href="#" />'
                )
                  .on("click." + B, function (e) {
                    e.preventDefault(), $.layerSlider("next");
                  })
                  .appendTo($),
                Z.o.hoverPrevNext && this.setHover();
            },
            setHover: function () {
              $.find(".ls-nav-prev, .ls-nav-next").css({ display: "none" }),
                $.on("mouseenter." + B, function () {
                  Z.gui.navigation.forceHide ||
                    $.find(".ls-nav-prev, .ls-nav-next")
                      .stop(!0, !0)
                      .fadeIn(300);
                }).on("mouseleave." + B, function () {
                  $.find(".ls-nav-prev, .ls-nav-next")
                    .stop(!0, !0)
                    .fadeOut(300);
                });
            },
          },
          bottom: {
            init: function () {
              (this.wrapper = te(
                '<div class="ls-gui-element ls-bottom-nav-wrapper" />'
              ).appendTo($)),
                Z.o.navButtons &&
                  "always" != Z.o.thumbnailNavigation &&
                  this.bullets.init(),
                Z.o.navStartStop
                  ? this.createStartStop()
                  : "always" != Z.o.thumbnailNavigation && this.createSides(),
                Z.o.hoverBottomNav &&
                  "always" != Z.o.thumbnailNavigation &&
                  this.setHover(),
                "always" == Z.o.thumbnailNavigation &&
                  (this.wrapper.addClass("ls-above-thumbnails"),
                  this.thumbnails.init());
            },
            bullets: {
              init: function () {
                var t = this;
                te('<span class="ls-bottom-slidebuttons" />').appendTo(
                  $.find(".ls-bottom-nav-wrapper")
                );
                for (var e = 0; e < Z.slides.count; e++) {
                  var i = te(
                    '<a href="#" aria-label="jump to slide ' + (e + 1) + '" />'
                  )
                    .appendTo($.find(".ls-bottom-slidebuttons"))
                    .data("index", e + 1)
                    .on("click." + B, function (e) {
                      e.preventDefault(), $.layerSlider(te(this).data("index"));
                    });
                  "hover" == Z.o.thumbnailNavigation &&
                    i
                      .on("mouseenter." + B, function () {
                        var e = te(this);
                        $.find(".ls-thumbnail-hover-img").css({
                          left: parseInt(t.hoverWrapper.css("padding-left")),
                          top: parseInt(t.hoverWrapper.css("padding-top")),
                        }),
                          t.hoverImage
                            .on("load." + B, function () {
                              0 === te(this).width()
                                ? t.hoverImage.css({
                                    position: "relative",
                                    margin: "0 auto",
                                    left: "auto",
                                  })
                                : t.hoverImage.css({
                                    position: "absolute",
                                    marginLeft: -te(this).width() / 2,
                                    left: "50%",
                                  }),
                                t.hoverImage
                                  .css("display", "none")
                                  .stop(!0, !0)
                                  .fadeIn(250);
                            })
                            .attr(
                              "src",
                              Z.slides[e.data("index")].data.thumbnail
                            ),
                          t.hoverWrapper
                            .css({ display: "block" })
                            .stop()
                            .animate(
                              {
                                left:
                                  te(this).position().left +
                                  (te(this).width() -
                                    t.hoverWrapper.outerWidth()) /
                                    2,
                              },
                              250
                            ),
                          t.hoverWrapperInner
                            .css({ display: "none", visibility: "visible" })
                            .stop()
                            .fadeIn(250);
                      })
                      .on("mouseleave." + B, function () {
                        t.hoverWrapperInner.stop().fadeOut(250, function () {
                          t.hoverWrapper.css({
                            visibility: "hidden",
                            display: "block",
                          });
                        });
                      });
                }
                t.set.active(Z.slides.first.index),
                  "hover" == Z.o.thumbnailNavigation && t.set.hover();
              },
              set: {
                active: function (e) {
                  void 0 === e && (e = Z.slides.current.index),
                    e--,
                    $.find(".ls-bottom-slidebuttons a").removeClass(
                      "ls-nav-active"
                    ),
                    $.find(
                      ".ls-bottom-slidebuttons a:eq( " + e + " )"
                    ).addClass("ls-nav-active");
                },
                hover: function () {
                  var e = Z.gui.navigation.bottom.bullets,
                    t = te(
                      '<div class="ls-thumbnail-hover"><div class="ls-thumbnail-hover-inner"><div class="ls-thumbnail-hover-bg"></div><div class="ls-thumbnail-hover-img"><img></div><span></span></div></div>'
                    ).appendTo($.find(".ls-bottom-slidebuttons"));
                  $.find(".ls-thumbnail-hover, .ls-thumbnail-hover-img").css({
                    width: Z.o.tnWidth,
                    height: Z.o.tnHeight,
                  }),
                    (e.hoverWrapper = $.find(".ls-thumbnail-hover")),
                    (e.hoverImage = e.hoverWrapper
                      .find("img")
                      .css({ height: Z.o.tnHeight })),
                    (e.hoverWrapperInner = $.find(
                      ".ls-thumbnail-hover-inner"
                    ).css({ visibility: "hidden", display: "block" })),
                    t.appendTo($.find(".ls-bottom-slidebuttons"));
                },
              },
            },
            createStartStop: function () {
              (this.buttonStart = te(
                '<a class="ls-nav-start" aria-label="start slideshow" href="#" />'
              )
                .on("click." + B, function (e) {
                  e.preventDefault(), $.layerSlider("start");
                })
                .prependTo($.find(".ls-bottom-nav-wrapper"))),
                (this.buttonStop = te(
                  '<a class="ls-nav-stop" aria-label="stop slideshow" href="#" />'
                )
                  .on("click." + B, function (e) {
                    e.preventDefault(), $.layerSlider("stop");
                  })
                  .appendTo($.find(".ls-bottom-nav-wrapper"))),
                Z.o.autoStart
                  ? this.setStartStop("start")
                  : this.setStartStop("stop");
            },
            setStartStop: function (e) {
              if (Z.o.navStartStop)
                switch (e) {
                  case "start":
                    this.buttonStart.addClass("ls-nav-start-active"),
                      this.buttonStop.removeClass("ls-nav-stop-active");
                    break;
                  case "stop":
                    this.buttonStart.removeClass("ls-nav-start-active"),
                      this.buttonStop.addClass("ls-nav-stop-active");
                }
            },
            createSides: function () {
              te('<span class="ls-nav-sides ls-nav-sideleft" />').prependTo(
                $.find(".ls-bottom-nav-wrapper")
              ),
                te('<span class="ls-nav-sides ls-nav-sideright" />').appendTo(
                  $.find(".ls-bottom-nav-wrapper")
                );
            },
            setHover: function () {
              var e = this;
              e.wrapper.css({ display: "none" }),
                $.on("mouseenter." + B, function () {
                  Z.gui.navigation.forceHide ||
                    e.wrapper.stop(!0, !0).fadeIn(300);
                }).on("mouseleave." + B, function () {
                  e.wrapper.stop(!0, !0).fadeOut(300);
                });
            },
            switchHelper: function (e) {
              if (Z.o.hoverBottomNav && !$.hasClass("ls-hover"))
                switch (e) {
                  case "on":
                    Z.gui.navigation.bottom.thumbnails.wrapper.css({
                      visibility: "hidden",
                      display: "block",
                    });
                    break;
                  case "off":
                    Z.gui.navigation.bottom.thumbnails.wrapper.css({
                      visibility: "visible",
                      display: "none",
                    });
                }
            },
            thumbnails: {
              init: function () {
                (this.wrapper = te(
                  '<div class="ls-gui-element ls-thumbnail-wrapper"></div>'
                ).appendTo($)),
                  te(
                    '<div class="ls-thumbnail"><div class="ls-thumbnail-inner"><div class="ls-thumbnail-slide-container"><div class="ls-thumbnail-slide"></div></div></div></div>'
                  ).appendTo(this.wrapper),
                  (this.$element = $.find(".ls-thumbnail-slide-container")),
                  "ontouchstart" in window
                    ? this.$element.addClass("ls-touchscroll")
                    : this.$element
                        .on("mouseenter." + B, function () {
                          te(this).addClass("ls-thumbnail-slide-hover");
                        })
                        .on("mouseleave." + B, function () {
                          te(this).removeClass("ls-thumbnail-slide-hover"),
                            Z.gui.navigation.bottom.thumbnails.scroll();
                        })
                        .on("mousemove." + B, function (e) {
                          e =
                            (parseInt(e.pageX - te(this).offset().left) /
                              te(this).width()) *
                            (te(this).width() -
                              te(this).find(".ls-thumbnail-slide").width());
                          te(this)
                            .find(".ls-thumbnail-slide")
                            .stop()
                            .css({ marginLeft: e });
                        });
                for (var e = 0; e < Z.slides.count; e++) {
                  var t = e + 1,
                    i = te(
                      '<a href="#" class="ls-thumb-' +
                        (e + 1) +
                        '"  aria-label="jump to slide ' +
                        (e + 1) +
                        '"><img src="' +
                        Z.slides[t].data.thumbnail +
                        '"></a>'
                    );
                  Z.slides[t].data.tnAlt &&
                    i.find("img").attr("alt", Z.slides[t].data.tnAlt),
                    i
                      .data("index", t)
                      .on("click." + B, function (e) {
                        e.preventDefault(),
                          $.layerSlider(te(this).data("index"));
                      })
                      .appendTo($.find(".ls-thumbnail-slide")),
                    "ontouchstart" in window ||
                      i
                        .on("mouseenter." + B, function () {
                          te(this)
                            .children()
                            .stop()
                            .fadeTo(300, Z.o.tnActiveOpacity / 100);
                        })
                        .on("mouseleave." + B, function () {
                          te(this).children().hasClass("ls-thumb-active") ||
                            te(this)
                              .children()
                              .stop()
                              .fadeTo(300, Z.o.tnInactiveOpacity / 100);
                        });
                }
                Z.gui.navigation.bottom.buttonStart &&
                  Z.gui.navigation.bottom.buttonStop &&
                  ((Z.gui.navigation.bottom.wrapper = te(
                    '<div class="ls-bottom-nav-wrapper ls-below-thumbnails"></div>'
                  ).appendTo($)),
                  Z.gui.navigation.bottom.buttonStart
                    .clone()
                    .on("click." + B, function (e) {
                      e.preventDefault(), $.layerSlider("start");
                    })
                    .appendTo(Z.gui.navigation.bottom.wrapper),
                  Z.gui.navigation.bottom.buttonStop
                    .clone()
                    .on("click." + B, function (e) {
                      e.preventDefault(), $.layerSlider("stop");
                    })
                    .appendTo(Z.gui.navigation.bottom.wrapper)),
                  Z.o.hoverBottomNav && this.setHover();
              },
              setHover: function () {
                var e = this;
                e.wrapper.css("display", "none"),
                  Z.gui.navigation.bottom.wrapper &&
                    ((Z.gui.navigation.bottom.wrapper =
                      "block" == Z.gui.navigation.bottom.wrapper.css("display")
                        ? Z.gui.navigation.bottom.wrapper
                        : $.find(".ls-above-thumbnails")),
                    Z.gui.navigation.bottom.wrapper.css("display", "none")),
                  $.on("mouseenter." + B, function () {
                    $.addClass("ls-hover"),
                      Z.gui.navigation.forceHide ||
                        (e.wrapper.stop(!0, !0).fadeIn(300),
                        Z.gui.navigation.bottom.wrapper &&
                          Z.gui.navigation.bottom.wrapper
                            .stop(!0, !0)
                            .fadeIn(300));
                  }).on("mouseleave." + B, function () {
                    $.removeClass("ls-hover"),
                      e.wrapper.stop(!0, !0).fadeOut(300),
                      Z.gui.navigation.bottom.wrapper &&
                        Z.gui.navigation.bottom.wrapper
                          .stop(!0, !0)
                          .fadeOut(300);
                  });
              },
              change: function (e) {
                e = e || Z.slides.next.index;
                $.find(".ls-thumbnail-slide a:not(.ls-thumb-" + e + " )")
                  .children()
                  .each(function () {
                    te(this)
                      .removeClass("ls-thumb-active")
                      .stop()
                      .fadeTo(750, Z.o.tnInactiveOpacity / 100);
                  }),
                  $.find(".ls-thumbnail-slide a.ls-thumb-" + e)
                    .children()
                    .addClass("ls-thumb-active")
                    .stop()
                    .fadeTo(750, Z.o.tnActiveOpacity / 100);
              },
              scroll: function () {
                var e;
                $.find(".ls-thumbnail-slide-container").hasClass(
                  "ls-thumbnail-slide-hover"
                ) ||
                  ((e =
                    !!$.find(".ls-thumb-active").length &&
                    $.find(".ls-thumb-active").parent()) &&
                    ((e = e.position().left + e.width() / 2),
                    (e =
                      0 <
                      (e =
                        (e =
                          $.find(".ls-thumbnail-slide-container").width() / 2 -
                          e) <
                        $.find(".ls-thumbnail-slide-container").width() -
                          $.find(".ls-thumbnail-slide").width()
                          ? $.find(".ls-thumbnail-slide-container").width() -
                            $.find(".ls-thumbnail-slide").width()
                          : e)
                        ? 0
                        : e),
                    $.find(".ls-thumbnail-slide").animate(
                      { marginLeft: e },
                      600
                    )));
              },
              resize: function () {
                Z.gui.navigation.bottom.switchHelper("on");
                var e =
                    -1 == Z.slider.initial.width.indexOf("%")
                      ? parseInt(Z.slider.initial.originalWidth)
                      : $.width(),
                  t = $.find(".ls-thumbnail"),
                  e =
                    -1 == Z.o.tnContainerWidth.indexOf("%")
                      ? parseInt(Z.o.tnContainerWidth)
                      : parseInt((e / 100) * parseInt(Z.o.tnContainerWidth));
                $.find(".ls-thumbnail-slide a").css({
                  width: parseInt(Z.o.tnWidth * Z.resize.ratio),
                  height: parseInt(Z.o.tnHeight * Z.resize.ratio),
                }),
                  $.find(".ls-thumbnail-slide a:last").css({ margin: 0 }),
                  $.find(".ls-thumbnail-slide").css({
                    height: parseInt(Z.o.tnHeight * Z.resize.ratio),
                  }),
                  t.css({
                    width: (e * Math.floor(100 * Z.resize.ratio)) / 100,
                  }),
                  t.width() > $.find(".ls-thumbnail-slide").width() &&
                    t.css({ width: $.find(".ls-thumbnail-slide").width() }),
                  Z.gui.navigation.bottom.switchHelper("off");
              },
            },
          },
        },
        media: {
          init: function () {
            0 < Z.media.properties.$allMediaLayers.length &&
              te(
                '<div class="ls-gui-element ls-media-unmute" aria-label="Unmute"><div class="ls-media-unmute-bg"></div><div class="ls-icon-muted"></div><div class="ls-icon-unmuted"></div></div>'
              )
                .on("click." + B, function (e) {
                  e.preventDefault(), $.layerSlider("unmute");
                })
                .appendTo($);
          },
          showUnmute: function () {
            $.find(".ls-media-unmute").addClass("ls-media-unmute-active");
          },
          hideUnmute: function () {
            $.find(".ls-media-unmute").removeClass("ls-media-unmute-active");
          },
        },
        skin: {
          load: function () {
            $.addClass("ls-" + Z.o.skin);
            var e,
              t = Z.o.skinsPath + Z.o.skin + "/skin.css",
              i = te("head").length ? te("head") : te("body");
            te('link[href="' + t + '"]').length
              ? ((e = te('link[href="' + t + '"]')),
                Z.gui.skin.isLoaded ||
                  ((Z.gui.skin.isLoaded = !0),
                  (Z.timeouts.skinLoad1 = setTimeout(function () {
                    delete Z.timeouts.skinLoad1, Z.slider.init();
                  }, 150))))
              : (e = document.createStyleSheet
                  ? (document.createStyleSheet(t), te('link[href="' + t + '"]'))
                  : te(
                      '<link rel="stylesheet" href="' +
                        t +
                        '" type="text/css" />'
                    ).appendTo(i)),
              e.on("load." + B, function () {
                Z.gui.skin.isLoaded ||
                  ((Z.gui.skin.isLoaded = !0),
                  (Z.timeouts.skinLoad2 = setTimeout(function () {
                    delete Z.timeouts.skinLoad2, Z.slider.init();
                  }, 150)));
              }),
              W.on("load." + B, function () {
                Z.gui.skin.isLoaded ||
                  ((Z.gui.skin.isLoaded = !0),
                  (Z.timeouts.skinLoad3 = setTimeout(function () {
                    delete Z.timeouts.skinLoad3, Z.slider.init();
                  }, 150)));
              }),
              (Z.timeouts.skinLoad4 = setTimeout(function () {
                Z.gui.skin.isLoaded ||
                  ((Z.gui.skin.isLoaded = !0),
                  delete Z.timeouts.skinLoad4,
                  Z.slider.init());
              }, 1e3));
          },
        },
        shadow: {
          init: function () {
            this.set(), this.resize();
          },
          set: function () {
            (this.$element = te(
              '<div class="ls-gui-element ls-shadow"></div>'
            ).appendTo($)),
              "block" != this.$element.css("display") ||
                this.$element.find("img").length ||
                ((this.show = function () {
                  Z.gui.shadow.$element
                    .css({ display: "none", visibility: "visible" })
                    .fadeIn(500, function () {
                      Z.gui.shadow.show = !1;
                    });
                }),
                (this.image = te("<img>")
                  .attr("src", Z.o.skinsPath + Z.o.skin + "/shadow.png")
                  .appendTo(this.$element)),
                (this.btmMod =
                  "number" == typeof parseInt($.css("padding-bottom"))
                    ? parseInt($.css("padding-bottom"))
                    : 0));
          },
          resize: function () {
            this.image &&
              (0 < this.image.height()
                ? 0 < this.btmMod
                  ? this.$element.css({ height: this.image.height() / 2 })
                  : this.$element.css({
                      height: this.image.height(),
                      marginTop: -this.image.height() / 2,
                    })
                : (Z.timeouts.resizeShadow = setTimeout(function () {
                    delete Z.timeouts.resizeShadow, Z.gui.shadow.resize();
                  }, 50)));
          },
        },
        timers: {
          init: function () {
            Z.o.showBarTimer && this.bar.create(),
              Z.o.showCircleTimer && this.circle.create();
            var e = !1;
            (e = Z.o.showSlideBarTimer
              ? te("<div>").insertAfter($)
              : te(
                  '[data-slidebar-for="' +
                    $.attr("id") +
                    '"], [data-slidebar-for="' +
                    B +
                    '"]'
                )).length &&
              (e.addClass("ls-gui-element"), this.slidebar.create(e));
          },
          bar: {
            create: function () {
              this.$element = te("<div>")
                .addClass("ls-gui-element ls-bar-timer")
                .appendTo($);
            },
          },
          circle: {
            create: function () {
              (this.$element = te("<div>")
                .addClass("ls-gui-element ls-circle-timer")
                .appendTo($)),
                this.$element.append(
                  te(
                    '<div class="ls-ct-center"></div><div class="ls-ct-left"><div class="ls-ct-rotate"><div class="ls-ct-hider"><div class="ls-ct-half"></div></div></div></div><div class="ls-ct-right"><div class="ls-ct-rotate"><div class="ls-ct-hider"><div class="ls-ct-half"></div></div></div></div>'
                  )
                ),
                this.$element.data("original", {
                  opacity: this.$element.css("opacity"),
                });
            },
          },
          slidebar: {
            $containerElement: [],
            $element: [],
            $progressBarElement: [],
            $sliderContainerElement: [],
            $sliderElement: [],
            elementWidth: [],
            containerElementWidth: [],
            sliderContainerElementWidth: [],
            state: {},
            create: function (e) {
              function i(e, t) {
                (a =
                  (e.pageX || Z.device.touchX || 0) -
                  o.$element[t].offset().left -
                  o.sliderContainerElementWidth[t] / 2) < 0 && (a = 0),
                  a >
                    o.containerElementWidth[t] -
                      o.sliderContainerElementWidth[t] &&
                    (a =
                      "calc( 100% - " +
                      Z.gui.timers.slidebar.sliderContainerElementWidth[t] +
                      "px )"),
                  o.$sliderContainerElement[t].css({ left: a }),
                  Z.transitions._slideTimeline &&
                    Z.transitions._slideTimeline.progress(
                      "string" == typeof a
                        ? Z.transitions.layers.timeline.progress
                        : (a /
                            (o.containerElementWidth[t] -
                              o.sliderContainerElementWidth[t])) *
                            Z.transitions.layers.timeline.progress
                    );
              }
              function s(e) {
                "dragging" == Z.gui.timers.slidebar.state &&
                  (Z.transitions._slideTimeline &&
                    Z.transitions.layers.timeline.state.finished &&
                    Z.transitions._slideTimeline.progress() !==
                      Z.transitions.layers.timeline.progress &&
                    Z.functions.setStates(Z.transitions.layers.timeline, {
                      finished: !1,
                    }),
                  te(document).off("mousemove." + B),
                  te("body")
                    .prop("unselectable", !1)
                    .removeClass("ls-unselectable"),
                  (Z.o.pauseLayers && !Z.slideshow.state.running) ||
                    Z.slider.state.isPaused ||
                    !Z.transitions._slideTimeline ||
                    Z.o.playByScroll ||
                    (!0 === Z.transitions.layers.timeline.state.started
                      ? Z.transitions.layers.timeline.resume()
                      : Z.transitions.layers.timeline.play()),
                  (Z.gui.timers.slidebar.state = !1));
              }
              var a,
                r = te(document),
                o = this;
              te.each(e, function (t, e) {
                (o.$containerElement[t] = te(e).addClass(
                  "ls-slidebar-container " + B
                )),
                  (o.$element[t] = te("<div>")
                    .addClass("ls-slidebar")
                    .appendTo(o.$containerElement[t])),
                  (o.$progressBarElement[t] = te("<div>")
                    .addClass("ls-progressbar")
                    .appendTo(o.$element[t])),
                  (o.$sliderContainerElement[t] = te("<div>")
                    .addClass("ls-slidebar-slider-container")
                    .appendTo(o.$containerElement[t])),
                  (o.$sliderElement[t] = te("<div>")
                    .addClass("ls-slidebar-slider")
                    .appendTo(o.$sliderContainerElement[t])),
                  (o.sliderContainerElementWidth[t] =
                    o.$sliderContainerElement[t].width()),
                  o.$sliderContainerElement[t].css({
                    marginTop: -o.$sliderElement[t].outerHeight() / 2,
                  }),
                  o.$containerElement[t].on("touchmove." + B, function (e) {
                    i(e, t);
                  }),
                  o.$containerElement[t].on("touchend." + B, function (e) {
                    s();
                  }),
                  o.$containerElement[t].on(
                    "mousedown." + B + " touchstart." + B,
                    function (e) {
                      Z.transitions.layers.timeline.pause(0),
                        te("body")
                          .prop("unselectable", !0)
                          .addClass("ls-unselectable"),
                        te(document).on("mousemove." + B, function (e) {
                          i(e, t);
                        }),
                        i(e, t),
                        (Z.gui.timers.slidebar.state = "dragging");
                    }
                  ),
                  (r = r.add(o.$sliderElement[t]));
              }),
                te("body").on("mouseup." + B, function (e) {
                  s();
                });
            },
          },
        },
        loadingIndicator: {
          init: function () {
            (this.$element = te("<div>")
              .css({ display: "none" })
              .addClass("ls-gui-element ls-loading-container")
              .appendTo($)),
              te("<div>")
                .addClass("ls-loading-indicator")
                .appendTo(this.$element);
          },
          show: function () {
            this.$element.delay(400).fadeIn(300);
          },
          hide: function () {
            this.$element.stop(!0, !0).fadeOut(300);
          },
        },
      }),
      (Z.navigation = {
        direction: "next",
        init: function () {
          1 < Z.slides.count && (this.set.keyboard(), this.set.touch());
        },
        set: {
          keyboard: function () {
            Z.o.keybNav &&
              te("body").on("keydown." + B, function (e) {
                te(e.target).is(":input") ||
                  Z.slider.isAnimating ||
                  Z.slider.isPreloading ||
                  (37 == e.which
                    ? Z.navigation.prev()
                    : 39 == e.which && Z.navigation.next());
              });
          },
          touch: function () {
            "ontouchstart" in window &&
              Z.o.touchNav &&
              (Z.slider.$innerWrapper.on("touchstart." + B, function (e) {
                e = e.touches || e.originalEvent.touches;
                1 == e.length &&
                  (Z.device.touchStartX = Z.device.touchEndX = e[0].clientX);
              }),
              Z.slider.$innerWrapper.on("touchmove." + B, function (e) {
                var t = e.touches || e.originalEvent.touches;
                1 == t.length && (Z.device.touchEndX = t[0].clientX),
                  45 < Math.abs(Z.device.touchStartX - Z.device.touchEndX) &&
                    e.preventDefault();
              }),
              Z.slider.$innerWrapper.on("touchend." + B, function (e) {
                45 < Math.abs(Z.device.touchStartX - Z.device.touchEndX) &&
                  (0 < Z.device.touchStartX - Z.device.touchEndX
                    ? $.layerSlider("touchNext")
                    : $.layerSlider("touchPrev"));
              }));
          },
        },
        prev: function () {
          (!Z.slider.isPopup ||
            (Z.slider.isPopup && Z.slider.state.popupIsVisible)) &&
            ((this.direction = "prev"),
            (this.forceDirection = "prev"),
            Z.slideshow.set.prevNext("prev"));
        },
        next: function () {
          (!Z.slider.isPopup ||
            (Z.slider.isPopup && Z.slider.state.popupIsVisible)) &&
            ((this.direction = "next"),
            (this.forceDirection = "next"),
            Z.slideshow.set.prevNext("next"));
        },
        start: function () {
          Z.functions.setStates(Z.slideshow, { running: !0, paused: !1 }),
            !0 === Z.slideshow.state.pausedByLastCycle &&
              Z.functions.setStates(Z.slideshow, { pausedByLastCycle: !1 }),
            Z.gui.navigation.bottom.setStartStop("start"),
            Z.slideshow.state.pausedByHover ||
              (1 !== Z.transitions._slideTimeline.timeScale() &&
                Z.transitions.layers.timeline.resume()),
            Z.slideshow.start();
        },
        stop: function () {
          Z.gui.navigation.bottom.setStartStop("stop"),
            Z.o.pauseLayers && Z.transitions.layers.timeline.pause(),
            Z.slideshow.stop();
        },
      }),
      (Z.preload = {
        init: function () {
          Z.slider.$hiddenWrapper.find(".ls-slide img").each(function () {
            var e,
              t = te(this),
              i = t[0],
              s = {};
            t.is(".ls-layer, .ls-bg") &&
              (i.getAttribute("width") && (s.width = i.getAttribute("width")),
              i.getAttribute("height") && (s.height = i.getAttribute("height")),
              i.sizes && (s.sizes = i.sizes),
              Z.o.useSrcset &&
                (t.data("srcset") || i.srcset) &&
                ((s.srcSet = t.data("srcset") || i.srcset),
                (s.curSrc = i.currentSrc),
                (e = s.srcSet.split(",").map(function (e) {
                  return parseInt(te.trim(e).split(" ")[1]);
                })),
                (s.maxWidth = Math.max.apply(null, e))),
              t.removeAttr("width height sizes srcset loading"),
              te.isEmptyObject(s) ||
                (t.data(Z.defaults.init.dataKey).attributes = s)),
              t.data("lazy-src")
                ? t.data("src", t.data("lazy-src"))
                : t.attr("data-lazy-src")
                ? t.data("src", t.attr("data-lazy-src"))
                : t.attr("data-lazy")
                ? t.data("src", t.attr("data-lazy"))
                : t.data("src")
                ? s.curSrc && t.data("src", s.curSrc)
                : t.data("src", s.curSrc || i.src),
              t.attr("data-lazyset")
                ? t.attr("srcset", t.attr("data-lazyset"))
                : t.attr("data-lazy-srcset") &&
                  t.attr("srcset", t.attr("data-lazy-srcset")),
              t.removeAttr(
                "data-lazy-src data-lazy data-lazyset data-lazy-srcset"
              ),
              t.attr(
                "src",
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              );
          });
        },
        imagesOfSlide: function (e, t) {
          var i, s, a;
          !0 !== Z.slides[e].wrapped
            ? ((this.slideIndex = e),
              t
                ? ((this.onCompleteCallback = t),
                  Z.functions.setStates(Z.slider, { preloadingImages: !0 }),
                  Z.gui.loadingIndicator.show())
                : (this.onCompleteCallback = !1),
              Z.slider.canShow && $.css({ visibility: "visible" }),
              (this.preImages = []),
              (i = this),
              Z.slider.$hiddenWrapper
                .find(".ls-slide:eq(" + (i.slideIndex - 1) + ") *")
                .each(function () {
                  (s = te(this)), (a = this);
                  var e,
                    t = s.data(Z.defaults.init.dataKey);
                  s.is("img")
                    ? (s.data("src") && s.attr("src", s.data("src")),
                      t &&
                        t.attributes &&
                        t.attributes.srcSet &&
                        Z.o.useSrcset &&
                        (a.srcset = t.attributes.srcSet),
                      (e = a.src),
                      (t =
                        !!(t && t.attributes && t.attributes.curSrc) &&
                        t.attributes.curSrc) &&
                        e !== t &&
                        s.is(".ls-bg") &&
                        ((e = t),
                        Z.slides[i.slideIndex].data.$background.attr("src", e)),
                      Z.preload.preImages.push([e, s]))
                    : "none" !== s.css("background-image") &&
                      -1 !== s.css("background-image").indexOf("url") &&
                      Z.preload.preImages.push([
                        s
                          .css("background-image")
                          .match(/url\(['"]?(.+?)['"]?\)/)[1],
                        s,
                      ]);
                }),
              Z.transitions.firstSlide &&
                Z.o.globalBGImage &&
                Z.preload.preImages.push([Z.o.globalBGImage, te()]),
              this.thumbnailsAreLoaded || this.thumbnails(),
              0 === this.preImages.length ? this.onComplete() : this.start())
            : Z.slider.shouldResize && t
            ? (Z.resize.setLayers(Z.layers.get("next, bg")), Z.resize.layers(t))
            : t && t();
        },
        thumbnails: function () {
          for (
            var e = Z.slider.thumbnails.filter(function (e, t, i) {
                return i.indexOf(e) == t;
              }),
              t = e.length,
              i = 0;
            i < t;
            i++
          )
            new Image().src = e[i];
          this.thumbnailsAreLoaded = !0;
        },
        start: function () {
          Z.debugMode &&
            (Z.debug.add("group", "preload"),
            Z.debug.add("log", "preload.info", this.slideIndex)),
            (this.preloadedImagesCount = 0);
          for (
            var e,
              t = this,
              i = function () {
                ++t.preloadedImagesCount == t.preImages.length &&
                  (Z.debugMode && Z.debug.groupEnd(), t.onComplete());
              },
              s = function () {
                Z.debugMode &&
                  ((e = this.src.substring(
                    this.src.lastIndexOf("/") + 1,
                    this.src.length
                  )),
                  Z.debug.add("log", "preload.success", e)),
                  this.originalLayer.data("preloadedWidth", this.width),
                  this.originalLayer.data("preloadedHeight", this.height),
                  i();
              },
              a = function () {
                Z.debugMode &&
                  ((e = this.src.substring(
                    this.src.lastIndexOf("/") + 1,
                    this.src.length
                  )),
                  Z.debug.add("warn", "preload.fail", e)),
                  i();
              },
              r = 0;
            r < this.preImages.length;
            r++
          ) {
            var o = new Image();
            o.addEventListener("error", a, !1),
              o.addEventListener("load", s, !1),
              (o.src = this.preImages[r][0]),
              (o.originalLayer = this.preImages[r][1]);
          }
        },
        onComplete: function () {
          var a = this;
          this.onCompleteCallback
            ? (Z.layers.wrap(this.slideIndex),
              (function e() {
                var t, i, s;
                0 !== Z.slides[a.slideIndex].$layers.length
                  ? (Z.timeouts.waitForWrap = setTimeout(e, 100))
                  : (delete Z.timeouts.waitForWrap,
                    Z.functions.setStates(Z.transitions.layers.parallax, {
                      ready: !0,
                    }),
                    te(
                      ".ls-thumbnail-wrapper, .ls-nav-next, .ls-nav-prev, .ls-bottom-nav-wrapper"
                    ).css({ visibility: "visible" }),
                    (Z.slides[a.slideIndex].wrapped = !0),
                    (t = !(
                      !window._layerSlider.globals.youTubeIsReady &&
                      Z.layers.get("next,in,youtube,bgvideo").length
                    )),
                    (i = !(
                      !window._layerSlider.globals.vimeoIsReady &&
                      Z.layers.get("next,in,vimeo,bgvideo").length
                    )),
                    (s = function () {
                      Z.gui.loadingIndicator.hide(),
                        Z.slider.shouldResize
                          ? (Z.resize.setLayers(Z.layers.get("next, bg")),
                            Z.resize.layers(a.onCompleteCallback))
                          : a.onCompleteCallback();
                    }),
                    t && i
                      ? s()
                      : (Z.intervals.waitForJSApisLoaded = setInterval(
                          function () {
                            (t || window._layerSlider.globals.youTubeIsReady) &&
                              (i || window._layerSlider.globals.vimeoIsReady) &&
                              (clearInterval(Z.intervals.waitForJSApisLoaded),
                              delete Z.intervals.waitForJSApisLoaded,
                              s());
                          },
                          50
                        )));
              })())
            : Z.layers.wrap(this.slideIndex, !0),
            Z.functions.setStates(Z.slider, { preloadingImages: !1 });
        },
      }),
      (Z.resize = {
        setLayers: function (e) {
          (this.$responsiveLayers = e.add(Z.layers.get("active"))),
            Z.slides.next.data.$backgroundVideo.length &&
              (this.$responsiveLayers = this.$responsiveLayers.add(
                Z.slides.next.data.$backgroundVideo
              ));
        },
        all: function () {
          if (!document.body.contains(I)) return !1;
          Z.api.hasEvent("sliderWillResize") &&
            Z.api.triggerEvent("sliderWillResize", Z.api.eventData()),
            this.slider(),
            Z.o.performanceMode && this.performance(),
            Z.slider.isScene &&
              !Z.slider.$spacingWrapper.is("[data-disabled-scene]") &&
              this.scene(),
            this.navigation(),
            this.layers(),
            this.yourLogo(),
            this.shadow(),
            this.timers(),
            Z.transitions.layers.timeline.shouldRestart &&
              Z.o.allowRestartOnResize &&
              (Z.functions.resetSlideTimelines(),
              Z.transitions.layers.timeline.create(!0),
              Z.slider.isScrollScene &&
                Z.transitions._slideTimeline &&
                Z.transitions.scrollscene.animate()),
            Z.api.hasEvent("sliderDidResize") &&
              Z.api.triggerEvent("sliderDidResize", Z.api.eventData());
        },
        viewport: function () {
          W.scrollTop(
            Math.round(Z.slider.offset.top) -
              (ee.viewport.height - Z.slider.height) / 2
          );
        },
        slider: function () {
          if (!document.body.contains(I)) return !1;
          ee.viewport.width || W.trigger("resize.lsGlobal"),
            Z.o.fixFloatedContainers && $.css("display", "none");
          var e,
            t,
            i,
            s =
              Z.slider.$parentWithNumericWidthValue &&
              0 < Z.slider.$parentWithNumericWidthValue.width()
                ? Z.slider.$parentWithNumericWidthValue
                : Z.functions.getSliderClosestParentElementWithNumericValueOfProperty(
                    "width"
                  ),
            a = Z.slider.initial,
            r = Z.slider.$parentWithNumericWidthValuePercent
              ? (s.width() / 100) * Z.slider.$parentWithNumericWidthValuePercent
              : s.width(),
            o = a.type,
            n = 0 !== a.maxWidth ? a.maxWidth : r,
            l = "auto" === a.marginLeft ? 0 : a.marginLeft,
            d = "auto" === a.marginRight ? 0 : a.marginRight;
          switch (
            (Z.o.fixFloatedContainers && $.css("display", "block"),
            -1 !== n.indexOf("%")
              ? (n = (r / 100) * parseInt(n))
              : -1 !== n.indexOf("vw") &&
                (n = (ee.viewport.width / 100) * parseInt(n)),
            Z.slider.state.inFullscreen
              ? ($[0].style.maxWidth = "")
              : 0 !== a.maxWidth && ($[0].style.maxWidth = n),
            n < (r -= l + d) && 0 <= n && (r = n),
            Z.o.fitScreenWidth &&
              ("fullwidth" === o ||
                ("fullsize" === o &&
                  "fitheight" !== Z.o.fullSizeMode &&
                  "fitwidth" !== Z.o.fullSizeMode)) &&
              ((l = s.offset().left),
              (d = parseInt(s.css("padding-left")) || 0),
              (n = parseInt(s.css("border-left-width")) || 0),
              ($[0].style.maxWidth = "100vw"),
              ($[0].style.marginLeft = -(l + d + n) + "px"),
              (r = ee.viewport.width)),
            (r -= a.skinWidth),
            ee.getScreenSize(),
            Z.slider.state.inFullscreen && (r = ee.screen.width),
            o)
          ) {
            case "responsive":
              0 < Z.o.maxRatio && (r = Math.min(a.width * Z.o.maxRatio, r)),
                (e =
                  (Z.slider.state.inFullscreen
                    ? (ee.screen.ratio > a.ratio
                        ? (this.ratio = ee.screen.height / a.height)
                        : (this.ratio = ee.screen.width / a.width),
                      (r = Math.round(a.width * this.ratio)))
                    : (this.ratio = r / a.width),
                  Math.round(a.height * this.ratio)));
              break;
            case "fullwidth":
              e =
                r < Z.o.responsiveUnder
                  ? ((this.ratio = r / Z.o.responsiveUnder),
                    Math.round(a.height * this.ratio))
                  : Z.slider.state.inFullscreen
                  ? ee.screen.ratio > a.layersWidth / a.height
                    ? ((this.ratio = ee.screen.height / a.height),
                      ee.screen.height)
                    : ((this.ratio = ee.screen.width / a.layersWidth),
                      a.height * this.ratio)
                  : ((this.ratio = 1), a.height);
              break;
            case "fullsize":
              switch (Z.o.fullSizeMode.toLowerCase()) {
                case "normal":
                  e = ee.viewport.height - a.skinHeight;
                  break;
                case "hero":
                  var c = Math.max($.offset().top, 0),
                    p = Z.slider.isScene ? Z.slider.$spacingWrapper : $;
                  Z.slider.isScene && (c = 0);
                  var u = te(Z.o.calculateOffsetFrom).length
                    ? te(Z.o.calculateOffsetFrom).height() +
                      te(Z.o.calculateOffsetFrom)[0].getBoundingClientRect().top
                    : 0;
                  u && p.css("top", u),
                    (e = ee.viewport.height - a.skinHeight - (u || c)) <= 0 &&
                      (e = ee.viewport.height - a.skinHeight);
                  break;
                case "fitheight":
                  (r = s.width() - a.skinWidth),
                    (e = s.height() - a.skinHeight);
                  break;
                case "fitwidth":
                  (r = s.width() - a.skinWidth),
                    (e = ee.viewport.height - a.skinHeight);
              }
              r / e < a.ratio
                ? (this.ratio = r / a.layersWidth)
                : (this.ratio = e / a.layersHeight);
              break;
            case "fixed":
            case "fixedsize":
              (this.ratio = 1),
                (r = a.width),
                (e = a.height),
                (Z.o.maxRatio = 1),
                (I.style.maxWidth = "none");
          }
          (this.ratio =
            Z.o.maxRatio && 0 < Z.o.maxRatio && this.ratio > Z.o.maxRatio
              ? Z.o.maxRatio
              : this.ratio),
            (I.style.width = r + "px"),
            (I.style.height = e + "px"),
            (Z.slider.width = r),
            (Z.slider.height = e),
            ee.isMobile
              ? 768 <= ee.viewport.width ||
                ee.viewport.width > ee.viewport.height
                ? $.removeClass("ls-device-is-phone").addClass(
                    "ls-device-is-tablet"
                  )
                : $.removeClass("ls-device-is-tablet").addClass(
                    "ls-device-is-phone"
                  )
              : $.removeClass(
                  "ls-device-is-phone ls-device-is-tablet"
                ).addClass("ls-device-is-desktop"),
            Z.o.marginTop &&
              (t =
                -1 != Z.o.marginTop.indexOf("sh") ||
                -1 != Z.o.marginTop.indexOf("%")
                  ? (Z.slider.height / 100) * parseInt(Z.o.marginTop)
                  : Z.o.marginTop),
            Z.o.marginBottom &&
              (i =
                -1 != Z.o.marginBottom.indexOf("sh") ||
                -1 != Z.o.marginBottom.indexOf("%")
                  ? (Z.slider.height / 100) * parseInt(Z.o.marginBottom)
                  : Z.o.marginBottom),
            Z.slider.$spacingWrapper.css({ marginTop: t, marginBottom: i }),
            Z.slider.hasPinnedLayers &&
              Z.slider.$layersWrapper.css({
                clip:
                  "rect(0px " +
                  Z.slider.width +
                  "px " +
                  Z.slider.height +
                  "px 0px)",
              });
        },
        performance: function () {
          var e = parseInt(Z.o.performanceModeThreshold);
          -1 !== Z.o.performanceModeThreshold.indexOf("sh") ||
          -1 !== Z.o.performanceModeThreshold.indexOf("%")
            ? (Z.performance.threshold = Z.slider.height * (e / 100))
            : -1 !== Z.o.performanceModeThreshold.indexOf("vh")
            ? (Z.performance.threshold = ee.viewport.height * (e / 100))
            : -1 !== Z.o.performanceModeThreshold.indexOf("px")
            ? (Z.performance.threshold = e)
            : (Z.performance.threshold = Z.slider.height * e),
            (Z.performance.threshold = Math.max(
              parseInt(Z.performance.threshold),
              0
            ));
        },
        scene: function () {
          var e;
          Z.slider.isScrollScene && Z.o.sceneDuration
            ? (e =
                Math.round(
                  Z.slider.height +
                    (Z.o.sceneDuration * Z.slider.height) /
                      (Z.o.sceneSpeed / 100)
                ) + "px")
            : Z.slider.isSticky &&
              (-1 !== Z.o.sceneHeight.indexOf("sh") ||
              -1 !== Z.o.sceneHeight.indexOf("%")
                ? ((e = Z.slider.height * (parseInt(Z.o.sceneHeight) / 100)),
                  (e = Math.round(Math.max(Z.slider.height, e))),
                  (e += "px"))
                : -1 === Z.o.sceneHeight.indexOf("px") &&
                  -1 === Z.o.sceneHeight.indexOf("vh")
                ? ((e = Z.slider.height * (Z.o.sceneHeight || 2)),
                  (e = Math.round(Math.max(Z.slider.height, e))),
                  (e += "px"))
                : (e = Z.o.sceneHeight)),
            e && Z.slider.$spacingWrapper.css({ height: e }),
            $.css({ top: Z.transitions.scrollscene.stickLimit });
        },
        borderRadius: function (e, i) {
          te.isNumeric(e) && (e = e.toString());
          var s = "";
          return (
            te.each(e.split(" "), function (e, t) {
              -1 == t.indexOf("%") && -1 == t.indexOf("em")
                ? (s += Math.round(parseInt(t) * i) + "px ")
                : (s += t + " ");
            }),
            te.trim(s)
          );
        },
        convertSingleValue: function (e, t) {
          return -1 == e.indexOf("em")
            ? Math.round(parseInt(e) * t) + "px "
            : e;
        },
        layers: function (e) {
          if (this.$responsiveLayers) {
            Z.debugMode && Z.debug.add("group", "resize");
            for (
              var t,
                i = this.$responsiveLayers,
                s = Z.slider.initial,
                a = Z.slider.width,
                r = Z.slider.height,
                o = a / r,
                n = [],
                l = [],
                d = [],
                c = [],
                p = 0,
                u = 0,
                h = window.LS_previewZoom || 1,
                m = 0,
                f = i.length;
              m < f;
              m++
            ) {
              var g = i[m],
                y = te(g),
                v = y.data(Z.defaults.init.dataKey),
                w = !!v.is.insideLayerGroup && y.data("$layerGroup"),
                b = !!v.is.insideLayerGroup && w.data(Z.defaults.init.dataKey),
                S = v.original,
                x = this.ratio;
              v.settings.minresponsiveratio &&
                x < v.settings.minresponsiveratio &&
                (x = v.settings.minresponsiveratio),
                v.settings.maxresponsiveratio &&
                  x > v.settings.maxresponsiveratio &&
                  (x = v.settings.maxresponsiveratio),
                (v.settings.calculatedratio = x),
                !y.is("img") ||
                  ("auto" !== S.width && "auto" !== S.height) ||
                  ((W = v.elements.$_innerWrappers).addClass(
                    "ls-force-display-block ls-force-visibility-hidden"
                  ),
                  "auto" === S.width && (S.width = y.width()),
                  "auto" === S.height && (S.height = y.height()),
                  W.removeClass(
                    "ls-force-display-block ls-force-visibility-hidden"
                  )),
                (t =
                  "responsive" === s.type && -1 !== Z.o.maxRatio
                    ? s.width
                    : s.layersWidth),
                (P =
                  "responsive" === s.type && -1 !== Z.o.maxRatio
                    ? s.height
                    : s.layersHeight),
                (M = t),
                (u =
                  "fullsize" === s.type ||
                  "fullwidth" === s.type ||
                  "responsive" === s.type
                    ? ((p = 0 < t ? (a - t * x) / 2 : 0),
                      0 < P ? (r - P * x) / 2 : 0)
                    : ((p = p < 0 ? 0 : p), u < 0 ? 0 : u));
              var T =
                  "fixed" == v.settings.position ||
                  "fixedx" == v.settings.position,
                k =
                  "fixed" == v.settings.position ||
                  "fixedy" == v.settings.position,
                C = a,
                O = r,
                P = v.is.insideLayerGroup
                  ? ((k = T = !1),
                    (I = L = 0),
                    (t = C = b.responsive.width),
                    (O = b.responsive.height))
                  : ((t = M), P);
              v.is.pinned &&
                (Z.slider.get.offset(),
                s.width,
                s.height,
                ("responsive" !== s.type &&
                  "fixedsize" !== s.type &&
                  ("fullsize" !== s.type ||
                    ("fitheight" !== Z.o.fullSizeMode &&
                      !1 !== Z.o.fitScreenWidth))) ||
                  (T
                    ? ((t = C = ee.viewport.width), (p = 0))
                    : ((C = Z.slider.width),
                      (p = Z.slider.offset.left),
                      (t = s.width)),
                  k
                    ? ((P = O = ee.viewport.height), (u = 0))
                    : ((O = Z.slider.height),
                      (u = (ee.viewport.height - Z.slider.height) / 2 || 0),
                      (P = s.height))));
              var L = T ? 0 : p,
                I = k ? 0 : u,
                $ = {
                  width:
                    T && 0 !== S.percentWidth
                      ? (C / 100) * S.percentWidth
                      : S.width * x,
                  height:
                    k && 0 !== S.percentHeight
                      ? (O / 100) * S.percentHeight
                      : S.height * x,
                  paddingLeft: this.convertSingleValue(S.paddingLeft, x),
                  paddingTop: this.convertSingleValue(S.paddingTop, x),
                  paddingRight: this.convertSingleValue(S.paddingRight, x),
                  paddingBottom: this.convertSingleValue(S.paddingBottom, x),
                  borderLeftWidth: this.convertSingleValue(
                    S.borderLeftWidth,
                    x
                  ),
                  borderTopWidth: this.convertSingleValue(S.borderTopWidth, x),
                  borderRightWidth: this.convertSingleValue(
                    S.borderRightWidth,
                    x
                  ),
                  borderBottomWidth: this.convertSingleValue(
                    S.borderBottomWidth,
                    x
                  ),
                  borderRadius: this.borderRadius(S.borderRadius, x),
                },
                B = {
                  marginLeft: this.convertSingleValue(S.marginLeft, x),
                  marginTop: this.convertSingleValue(S.marginTop, x),
                  marginRight: this.convertSingleValue(S.marginRight, x),
                  marginBottom: this.convertSingleValue(S.marginBottom, x),
                },
                W = {},
                M = { borderRadius: $.borderRadius };
              if (
                ((T || k) &&
                  (S.percentHeight || S.percentWidth) &&
                  v.is.imageLayer &&
                  (S.percentHeight &&
                    !S.percentWidth &&
                    ($.width = S.width * ($.height / S.height)),
                  S.percentWidth &&
                    !S.percentHeight &&
                    ($.height = S.height * ($.width / S.width))),
                (("number" == typeof S.width && S.width < 0) ||
                  "auto" == S.width ||
                  "" == S.sWidth) &&
                  Z.debugMode &&
                  Z.debug.add("warn", "resize.width", [m + 1, S.width]),
                (("number" == typeof S.height && S.height < 0) ||
                  "auto" == S.height ||
                  "" == S.sHeight) &&
                  Z.debugMode &&
                  Z.debug.add("warn", "resize.height", [m + 1, S.height]),
                v.is.textLayer &&
                  (($.fontSize = S.fontSize * x),
                  ee.isMobile && $.fontSize < v.styleSettings.minmobilefontsize
                    ? ($.fontSize = v.styleSettings.minmobilefontsize)
                    : $.fontSize < v.styleSettings.minfontsize &&
                      ($.fontSize = v.styleSettings.minfontsize),
                  (_ = $.fontSize / S.fontSize),
                  ($.fontSize += "px"),
                  -1 !== S.lineHeight.indexOf("px") &&
                    ($.lineHeight = parseFloat(S.lineHeight) * _ + "px"),
                  -1 !== S.letterSpacing.indexOf("px") &&
                    ($.letterSpacing = parseFloat(S.letterSpacing) * _ + "px"),
                  -1 !== S.textStrokeWidth.indexOf("px") &&
                    ($.textStrokeWidth =
                      parseFloat(S.textStrokeWidth) * _ + "px"),
                  "" == S.sWidth &&
                    (($.width = "auto"),
                    v.elements.$innerWrapper.addClass("ls-force-width-auto"),
                    "nowrap" !== y.css("white-space") &&
                      (v.elements.$_innerWrappers.addClass("ls-force-left-0"),
                      v.elements.$_outerWrappers.addClass(
                        "ls-force-full-size"
                      ))),
                  "" == S.sHeight &&
                    (($.height = "auto"),
                    v.elements.$innerWrapper.addClass("ls-force-height-auto")),
                  ("" != S.sWidth && "" != S.sHeight) || y.css($)),
                v.is.slideBackground || v.is.backgroundVideo)
              )
                if (v.is.slideBackground) {
                  var _ = Z.slides[v.is.onSlide].data.backgroundSize;
                  switch (
                    (void 0 !== _ && "inherit" !== _
                      ? _
                      : Z.o.slideBGSize
                    ).replace("100% 100%", "stretch")
                  ) {
                    case "auto":
                      break;
                    case "cover":
                      S.ratio < o
                        ? (($.width = a), ($.height = $.width / S.ratio))
                        : (($.height = r), ($.width = $.height * S.ratio));
                      break;
                    case "contain":
                      S.ratio < o
                        ? (($.height = r), ($.width = $.height * S.ratio))
                        : (($.width = a), ($.height = $.width / S.ratio));
                      break;
                    case "stretch":
                      ($.width = a), ($.height = r);
                  }
                  ($.width = Math.round($.width)),
                    ($.height = Math.round($.height));
                  var z,
                    _ = Z.slides[v.is.onSlide].data.backgroundPosition;
                  switch (
                    (z = (void 0 !== _ ? _ : Z.o.slideBGPosition).split(" "))[0]
                  ) {
                    case "left":
                      $.x = 0;
                      break;
                    case "center":
                      $.x = (Z.slider.width - $.width) / 2;
                      break;
                    case "right":
                      $.x = Z.slider.width - $.width;
                      break;
                    default:
                      -1 !== z[0].indexOf("%")
                        ? ($.x =
                            ((Z.slider.width - $.width) / 100) * parseInt(z[0]))
                        : ($.x = parseInt(z[0]));
                  }
                  if (void 0 !== z[1])
                    switch (z[1]) {
                      case "top":
                        $.y = 0;
                        break;
                      case "center":
                        $.y = (Z.slider.height - $.height) / 2;
                        break;
                      case "bottom":
                        $.y = Z.slider.height - $.height;
                        break;
                      default:
                        -1 !== z[1].indexOf("%")
                          ? ($.y =
                              ((Z.slider.height - $.height) / 100) *
                              parseInt(z[1]))
                          : ($.y = parseInt(z[1]));
                    }
                  ($.transform =
                    "translateX(" + $.x + "px) translateY(" + $.y + "px)"),
                    ($["-ms-transform"] =
                      "translateX(" + $.x + "px) translateY(" + $.y + "px)"),
                    ($["-webkit-transform"] =
                      "translateX(" + $.x + "px) translateY(" + $.y + "px)");
                } else
                  v.is.backgroundVideo &&
                    (S.ratio < o
                      ? (($.width = a), ($.height = $.width / S.ratio))
                      : (($.height = r), ($.width = $.height * S.ratio)),
                    ($.x = (Z.slider.width - $.width) / 2),
                    ($.y = (Z.slider.height - $.height) / 2),
                    ($.width = Math.round($.width)),
                    ($.height = Math.round($.height)),
                    ($.transform =
                      "translateX(" + $.x + "px) translateY(" + $.y + "px)"),
                    ($["-ms-transform"] =
                      "translateX(" + $.x + "px) translateY(" + $.y + "px)"),
                    ($["-webkit-transform"] =
                      "translateX(" + $.x + "px) translateY(" + $.y + "px)"));
              else {
                if (v.mediaSettings.fullsize)
                  switch (v.mediaSettings.fillmode) {
                    default:
                    case "cover":
                      S.ratio < o
                        ? (($.width = a), ($.height = $.width / S.ratio))
                        : (($.height = r), ($.width = $.height * S.ratio));
                      break;
                    case "contain":
                      S.ratio > o
                        ? (($.width = a), ($.height = $.width / S.ratio))
                        : (($.height = r), ($.width = $.height * S.ratio));
                  }
                v.elements.$_innerWrappers.addClass(
                  "ls-force-display-block ls-force-no-transform"
                ),
                  y.addClass("ls-force-no-transform"),
                  v.is.insideLayerGroup &&
                    ((b = (w = y.data("$layerGroup")).data(
                      Z.defaults.init.dataKey
                    )).elements.$_innerWrappers.addClass(
                      "ls-force-display-block ls-force-no-transform"
                    ),
                    w.addClass("ls-force-no-transform")),
                  "auto" == $.width
                    ? ($.outerWidth = Math.ceil(y.outerWidth()))
                    : ($.outerWidth =
                        $.width +
                        Z.layers.toNum($.paddingLeft, $.fontSize) +
                        Z.layers.toNum($.paddingRight, $.fontSize) +
                        Z.layers.toNum($.borderLeftWidth, $.fontSize) +
                        Z.layers.toNum($.borderRightWidth, $.fontSize)),
                  "auto" == $.height
                    ? ($.outerHeight = Math.ceil(y.outerHeight()))
                    : ($.outerHeight =
                        $.height +
                        Z.layers.toNum($.paddingTop, $.fontSize) +
                        Z.layers.toNum($.paddingBottom, $.fontSize) +
                        Z.layers.toNum($.borderTopWidth, $.fontSize) +
                        Z.layers.toNum($.borderBottomWidth, $.fontSize)),
                  v.elements.$_allWrappers.removeClass(
                    "ls-force-display-block ls-force-no-transform ls-force-width-auto ls-force-height-auto ls-force-left-0 ls-force-full-size"
                  ),
                  y.removeClass("ls-force-no-transform"),
                  v.is.insideLayerGroup &&
                    (b.elements.$_allWrappers.removeClass(
                      "ls-force-display-block ls-force-no-transform ls-force-width-auto ls-force-height-auto ls-force-left-0 ls-force-full-size"
                    ),
                    w.removeClass("ls-force-no-transform")),
                  (B.width = W.width = $.outerWidth),
                  (B.height = W.height = $.outerHeight),
                  -1 != S.left.indexOf("%")
                    ? "100%" === S.left
                      ? ($.left =
                          0 === L
                            ? (C / 100) * parseFloat(S.left) - $.outerWidth
                            : L +
                              ((t * x) / 100) * parseFloat(S.left) -
                              $.outerWidth)
                      : "0%" === S.left
                      ? ($.left = 0 === L ? 0 : L)
                      : ($.left =
                          0 === L
                            ? (C / 100) * parseFloat(S.left) - $.outerWidth / 2
                            : L +
                              ((t * x) / 100) * parseFloat(S.left) -
                              $.outerWidth / 2)
                    : ($.left = L + parseFloat(S.left) * x),
                  (B.left = $.left),
                  -1 != S.top.indexOf("%")
                    ? "100%" === S.top
                      ? ($.top =
                          0 === I
                            ? (O / 100) * parseFloat(S.top) - $.outerHeight
                            : I +
                              ((P * x) / 100) * parseFloat(S.top) -
                              $.outerHeight)
                      : "0%" === S.top
                      ? ($.top = 0 === I ? 0 : I + 0)
                      : ($.top =
                          0 === I
                            ? (O / 100) * parseFloat(S.top) - $.outerHeight / 2
                            : I +
                              ((P * x) / 100) * parseFloat(S.top) -
                              $.outerHeight / 2)
                    : ($.top = I + parseFloat(S.top) * x),
                  (B.top = $.top);
              }
              v.textIn.$nodesForBackgroundClip &&
                v.textIn.$nodesForBackgroundClip.length &&
                ((O = v.elements.$outerStyleWrapper.add(
                  v.elements.$outerStyleWrapper.find(".ls-wrapper")
                )).addClass(
                  "ls-force-visibility-hidden ls-force-display-block"
                ),
                v.elements.$_innerWrappers.addClass("ls-force-no-transform"),
                (P = !1),
                "auto" === g.style.width &&
                  ((g.style.width =
                    Math.ceil(v.original.width * (h * x)) + "px"),
                  (P = !0)),
                v.textIn.$nodesForBackgroundClip.each(function (e, t) {
                  var i = te(t),
                    s = i.children(".ls-textnode-bgclip-wrap"),
                    t = s.children(".ls-textnode"),
                    i = (i.children(".ls-textnode-dummy"), i.position());
                  s.css({
                    width: Math.ceil(B.width),
                    height: Math.ceil(B.height),
                    transform:
                      "translate(" + -i.left / h + "px," + -i.top / h + "px)",
                  }),
                    t.css({ marginLeft: i.left / h, marginTop: i.top / h });
                }),
                (P = P && !(g.style.width = "auto")),
                v.elements.$_innerWrappers.removeClass("ls-force-no-transform"),
                O.removeClass(
                  "ls-force-visibility-hidden ls-force-display-block"
                )),
                ($.fontSize =
                  parseFloat($.fontSize) / ee.automaticFontSizeRatio + "px"),
                (v.responsive = $),
                (n[m] = $),
                v.is.slideBackground ||
                  v.is.backgroundVideo ||
                  ((v.settings.wrapperData.responsive = B),
                  (l[m] = B),
                  (d[m] = W),
                  (c[m] = M));
            }
            for (var D = 0, F = n.length; D < F; D++) {
              var A = te(i[D]),
                V = A.data(Z.defaults.init.dataKey);
              A.css(n[D]),
                V.is.slideBackground || V.is.backgroundVideo
                  ? (V.is.slideBackground || V.is.backgroundVideo) &&
                    (V.elements.$bgOuterWrapper.css({
                      width: Z.slider.width,
                      height: Z.slider.height,
                    }),
                    V.elements.$outerWrapper.css({
                      width: Z.slider.width,
                      height: Z.slider.height,
                    }))
                  : (A.find(".split-item").css(c[D]),
                    this.wrappers(A, V, l[D], d[D]));
            }
            void 0 !== e && e(), Z.debugMode && Z.debug.groupEnd("resize");
          }
        },
        wrappers: function (e, t, i, s) {
          i && t.elements.$outerStyleWrapper.css(i),
            s && t.loop.enabled && t.elements.$loopWrapper.css(s),
            J.TweenMax.set(t.elements.$wrapper[0], {
              autoCSS: !1,
              css: {
                transformPerspective:
                  t.transformPerspective.layer * Z.resize.ratio,
              },
            }),
            t.loop.enabled &&
              J.TweenMax.set(t.elements.$loopWrapper[0], {
                autoCSS: !1,
                css: {
                  transformPerspective:
                    t.transformPerspective.loop * Z.resize.ratio,
                },
              }),
            t.hover.enabled &&
              J.TweenMax.set(e[0], {
                autoCSS: !1,
                css: {
                  transformPerspective:
                    t.transformPerspective.hover * Z.resize.ratio,
                },
              }),
            t.textIn.nodes &&
              J.TweenMax.set(t.textIn.nodes, {
                autoCSS: !1,
                css: {
                  transformPerspective:
                    t.transformPerspective.text * Z.resize.ratio,
                },
              }),
            t.textOut.nodes &&
              J.TweenMax.set(t.textOut.nodes, {
                autoCSS: !1,
                css: {
                  transformPerspective:
                    t.transformPerspective.text * Z.resize.ratio,
                },
              }),
            t.parallax.enabled &&
              J.TweenMax.set(t.elements.$parallaxWrapper[0], {
                autoCSS: !1,
                css: {
                  transformPerspective:
                    t.transformPerspective.parallax * Z.resize.ratio,
                },
              }),
            t.scroll.enabled &&
              J.TweenMax.set(t.elements.$scrollTransformWrapper[0], {
                autoCSS: !1,
                css: {
                  transformPerspective:
                    t.transformPerspective.scroll * Z.resize.ratio,
                },
              });
        },
        performTransformOperations: function (e, t) {
          var i, s, a, r;
          for (r in t)
            if ("string" == typeof t[r] && -1 !== t[r].indexOf("="))
              if (
                ((s = (i = t[r].split("="))[0].trim() || !1),
                (a = parseFloat(i[1].trim()) || !1),
                s && a && te.isNumeric(a))
              )
                switch (s) {
                  case "+":
                    t[r] = e[r] + a;
                    break;
                  case "-":
                    t[r] = e[r] - a;
                    break;
                  case "*":
                    t[r] = e[r] * a;
                    break;
                  case "/":
                    t[r] = e[r] / a;
                }
              else t[r] = e[r];
        },
        mirrorTransitionProperties: function (o) {
          function n(e) {
            var t = e;
            switch (e) {
              case "left":
                t = "right";
                break;
              case "right":
                t = "left";
                break;
              case "top":
                t = "bottom";
                break;
              case "bottom":
                t = "top";
            }
            return (
              -1 !== e.indexOf("lw") ||
              -1 !== e.indexOf("lh") ||
              -1 !== e.indexOf("sw") ||
              -1 !== e.indexOf("sh")
                ? (t = "-" === e.charAt(0) ? e.substring(1) : "-" + e)
                : -1 !== e.indexOf("%")
                ? (t = -1 * parseFloat(e.split("%")[0]) + "%")
                : te.isNumeric(e) && 0 !== e && "0" !== e && (t = -1 * e),
              t
            );
          }
          function e(e) {
            var t, i, s, a;
            for (a in e)
              if (
                ((s = a.toLowerCase()), -1 !== o.mirrorProperties.indexOf(s))
              ) {
                if ("object" == typeof (t = e[a]))
                  for (var r in ((i = []), t)) i.push(n(t[r]));
                else i = n(t);
                e[a] = i;
              }
          }
          e(o.transitionProperties),
            o.transitionPropertiesShouldBeConverted &&
              e(o.transitionPropertiesShouldBeConverted);
        },
        transformProperties: function (e, t, i, s, a, r) {
          if ("object" == typeof s.x) {
            for (var o = [], n = 0; n < s.x.length; n++)
              "string" == typeof s.x[n]
                ? (o[n] = this.getXY(e, t, s.x[n], "Width"))
                : (o[n] = s.x[n] * t.settings.calculatedratio);
            i.cycle.x = o;
          } else
            "string" == typeof s.x
              ? (i.x = this.getXY(e, t, s.x, "Width"))
              : void 0 !== s.x && (i.x = s.x * t.settings.calculatedratio);
          if ("object" == typeof s.y) {
            for (var l = [], d = 0; d < s.y.length; d++)
              "string" == typeof s.y[d]
                ? (l[d] = this.getXY(e, t, s.y[d], "Height"))
                : (l[d] = s.y[d] * t.settings.calculatedratio);
            i.cycle.y = l;
          } else
            "string" == typeof s.y
              ? (i.y = this.getXY(e, t, s.y, "Height"))
              : void 0 !== s.y && (i.y = s.y * t.settings.calculatedratio);
          if ((a && (i = a), "object" == typeof s.transformOrigin || r)) {
            var c = [];
            if (r) {
              a = e
                .data(Z.defaults.init.dataKey)
                .elements.$outerStyleWrapper.add(
                  e
                    .data(Z.defaults.init.dataKey)
                    .elements.$outerStyleWrapper.find(".ls-wrapper")
                );
              a.addClass(
                "ls-force-visibility-hidden ls-force-display-block ls-fix-textnodes"
              ),
                (c = Z.functions.convert.nodesTransformOrigin(
                  s.transformOrigin,
                  r,
                  t,
                  e.data(Z.defaults.init.dataKey).elements.$outerStyleWrapper
                )),
                a.removeClass(
                  "ls-force-visibility-hidden ls-force-display-block ls-fix-textnodes"
                );
            } else
              for (var p = 0; p < s.transformOrigin.length; p++)
                c[p] = Z.functions.convert.transformOrigin(
                  s.transformOrigin[p],
                  e,
                  t,
                  e.data(Z.defaults.init.dataKey).elements.$outerStyleWrapper
                );
            i.cycle.transformOrigin = c;
          } else
            "string" == typeof s.transformOrigin &&
              (i.transformOrigin = Z.functions.convert.transformOrigin(
                s.transformOrigin,
                e,
                t,
                e.data(Z.defaults.init.dataKey).elements.$outerStyleWrapper
              ));
        },
        styleProperties: function (e, t, i) {
          void 0 !== i.width &&
            (te.isNumeric(i.width)
              ? (t.width = parseInt(i.width) * e.settings.calculatedratio)
              : "string" == typeof i.width &&
                -1 !== i.width.indexOf("%") &&
                (t.width = (Z.slider.width / 100) * parseInt(i.width))),
            void 0 !== i.height &&
              (te.isNumeric(i.height)
                ? (t.height = parseInt(i.height) * e.settings.calculatedratio)
                : "string" == typeof i.height &&
                  -1 !== i.height.indexOf("%") &&
                  (t.height = (Z.slider.height / 100) * parseInt(i.height))),
            i.borderRadius &&
              (t.borderRadius = Z.resize.borderRadius(
                i.borderRadius,
                e.settings.calculatedratio
              ));
        },
        clip: function (e, t, i, s) {
          i = te.trim(i.replace("rect(", "").replace(")", ""));
          for (
            var a,
              e = e.data(Z.defaults.init.dataKey).responsive,
              r = Math.ceil(e.outerWidth),
              o = Math.ceil(e.outerHeight),
              n = -1 === i.indexOf(",") ? i.split(" ") : i.split(","),
              l = "",
              d = 0;
            d < n.length;
            d++
          )
            if (-1 !== n[d].indexOf("%"))
              switch (d) {
                case 0:
                  l += parseInt((o / 100) * parseInt(n[d]) * 100) / 100 + "px ";
                  break;
                case 1:
                  l += s
                    ? parseInt(100 * (r - (r / 100) * parseInt(n[d]))) / 100 +
                      "px "
                    : parseInt((r / 100) * parseInt(n[d]) * 100) / 100 + "px ";
                  break;
                case 2:
                  l += s
                    ? parseInt(100 * (o - (o / 100) * parseInt(n[d]))) / 100 +
                      "px "
                    : parseInt((o / 100) * parseInt(n[d]) * 100) / 100 + "px ";
                  break;
                case 3:
                  l += parseInt((r / 100) * parseInt(n[d]) * 100) / 100 + "px";
              }
            else
              switch (((a = parseInt(n[d]) * t.settings.calculatedratio), d)) {
                case 0:
                  l += a + "px ";
                  break;
                case 1:
                  l += s ? r - a + "px " : a + "px ";
                  break;
                case 2:
                  l += s ? o - a + "px " : a + "px ";
                  break;
                case 3:
                  l += a + "px";
              }
          return "rect(" + l + ")";
        },
        getXY: function (e, t, i, s) {
          var a = 0,
            r = t.original,
            o = t.responsive,
            n = t.settings.wrapperData.responsive;
          if (r && o && n)
            switch (i) {
              case "left":
                a =
                  -1 == r.left.indexOf("%") || "100%" === r.left
                    ? -o.left - o.outerWidth - parseInt(n.marginLeft)
                    : (-parseInt(r.left) / 100) * Z.slider.width -
                      o.outerWidth / 2 -
                      parseInt(n.marginLeft);
                break;
              case "right":
                a =
                  -1 == r.left.indexOf("%") || "100%" === r.left
                    ? Z.slider.width - o.left - parseInt(n.marginLeft)
                    : (1 - parseInt(r.left) / 100) * Z.slider.width +
                      o.outerWidth / 2 -
                      parseInt(n.marginLeft);
                break;
              case "top":
                a =
                  -1 == r.top.indexOf("%") || "100%" === r.top
                    ? -o.top - o.outerHeight - parseInt(n.marginTop)
                    : (-parseInt(r.top) / 100) * Z.slider.height -
                      o.outerHeight / 2 -
                      parseInt(n.marginTop);
                break;
              case "bottom":
                a =
                  -1 == r.top.indexOf("%") || "100%" === r.top
                    ? Z.slider.height - o.top - parseInt(n.marginTop)
                    : (1 - parseInt(r.top) / 100) * Z.slider.height +
                      o.outerHeight / 2 -
                      parseInt(n.marginTop);
                break;
              case "width":
                a = o.outerWidth;
                break;
              case "-width":
                a = -o.outerWidth;
                break;
              case "height":
                a = o.outerHeight;
                break;
              case "-height":
                a = -o.outerHeight;
                break;
              default:
                a =
                  -1 !== i.indexOf("%")
                    ? (o["outer" + s] / 100) * parseInt(i)
                    : -1 !== i.indexOf("sw")
                    ? (parseInt(i.split("sw")[0]) / 100) * Z.slider.width
                    : -1 !== i.indexOf("sh")
                    ? (parseInt(i.split("sh")[0]) / 100) * Z.slider.height
                    : -1 !== i.indexOf("lw")
                    ? (o.outerWidth / 100) * parseInt(i.split("lw")[0])
                    : -1 !== i.indexOf("lh")
                    ? (o.outerHeight / 100) * parseInt(i.split("lh")[0])
                    : parseInt(i) * t.settings.calculatedratio;
            }
          return a;
        },
        navigation: function () {
          "always" == Z.o.thumbnailNavigation &&
            Z.gui.navigation.bottom.thumbnails.resize();
        },
        shadow: function () {
          Z.gui.shadow.show && Z.gui.shadow.show(),
            Z.gui.shadow.$element && Z.gui.shadow.resize();
        },
        yourLogo: function () {
          Z.yourLogo.$element && Z.yourLogo.resize();
        },
        timers: function () {
          if (0 < Z.gui.timers.slidebar.$containerElement.length)
            for (
              var e = 0, t = Z.gui.timers.slidebar.$containerElement.length;
              e < t;
              e++
            )
              (Z.gui.timers.slidebar.containerElementWidth[e] =
                Z.gui.timers.slidebar.$containerElement[e].width()),
                (Z.gui.timers.slidebar.elementWidth[e] =
                  Z.gui.timers.slidebar.$element[e].width());
        },
      }),
      (Z.transitions = {
        firstSlide: !0,
        timelines: {
          all: [
            "_slideTransition",
            "_slideTimeline",
            "_slideTimelineAlternate",
            "_forceLayersOut",
            "_forceLayersOutMirror",
            "_forceLayersOutPrevious",
            "_forceLayersOutMirrorPrevious",
          ],
          slide: ["_slideTransition"],
          layers: ["_slideTimeline", "_slideTimelineAlternate"],
          allforce: [
            "_forceLayersOut",
            "_forceLayersOutMirror",
            "_forceLayersOutPrevious",
            "_forceLayersOutMirrorPrevious",
          ],
          prevforce: [
            "_forceLayersOutPrevious",
            "_forceLayersOutMirrorPrevious",
          ],
          currentforce: ["_forceLayersOut", "_forceLayersOutMirror"],
          mirrorforce: [
            "_forceLayersOutMirror",
            "_forceLayersOutMirrorPrevious",
          ],
          set: function (e, t) {
            for (var i in this[e])
              Z.transitions[this[e][i]] &&
                t(Z.transitions[this[e][i]], this[e][i]);
          },
        },
        start: function () {
          return (
            !!document.body.contains(I) &&
            (Z.slider.isPopup && Z.slider.state.popupIsWaitingForDelay
              ? !(Z.slider.state.waitingForPopupTimer = !0)
              : ((Z.device.scroll.directionAtSlideTransitionStart =
                  Z.device.scroll.direction),
                "always" == Z.o.thumbnailNavigation &&
                  (Z.gui.navigation.bottom.thumbnails.change(),
                  "ontouchstart" in window ||
                    Z.gui.navigation.bottom.thumbnails.scroll()),
                this.layers.out.forced(),
                void this.slide.init()))
          );
        },
        slide: {
          $wrapper: te(),
          init: function () {
            var e, t, i;
            Z.functions.setStates(Z.slider, { animatingSlides: !0 }),
              Z.transitions.layers.parallax.reset(),
              Z.slider.$layersWrapper
                .children('.ls-parallax[data-ls-parallax="active"]')
                .each(function () {
                  te(this).find(".ls-layer").data(Z.defaults.init.dataKey)
                    .settings.slideOut === Z.slides.current.index &&
                    te(this).attr("data-ls-parallax", "disbaled");
                }),
              (Z.transitions.curSlide = Z.slides.current),
              (Z.transitions.nextSlide = Z.slides.next),
              (Z.transitions._slideTransition = new J.TimelineMax({
                paused: !0,
                onComplete: function () {
                  Z.transitions.slide.onComplete();
                },
              })),
              Z.transitions.firstSlide
                ? (void 0 !== Z.transitions.nextSlide.data.$background &&
                    ((e = (i = Z.transitions.nextSlide.data.$background.data(
                      Z.defaults.init.dataKey
                    )).kenBurns.zoom
                      ? i.kenBurns.from.scale
                      : 1),
                    (t = i.kenBurns.zoom ? i.kenBurns.from.rotation : 0),
                    (i = Z.transitions.nextSlide.filter.from || "none"),
                    Z.transitions._slideTransition.set(
                      Z.transitions.nextSlide.data.$background[0],
                      { "-webkit-filter": i, filter: i },
                      0
                    ),
                    Z.transitions._slideTransition.fromTo(
                      Z.transitions.nextSlide.data.$background.closest(
                        ".ls-bg-wrap"
                      )[0],
                      Z.o.sliderFadeInDuration,
                      {
                        autoCSS: !1,
                        css: {
                          scale: e,
                          rotation: t,
                          opacity: 0,
                          display: "block",
                        },
                      },
                      { autoCSS: !1, css: { opacity: 1 } },
                      0
                    )),
                  this.start(!0))
                : "undefined" == typeof layerSliderTransitions &&
                  "undefined" == typeof layerSliderCustomTransitions
                ? (this.start(!0),
                  Z.debugMode &&
                    Z.debug.add(
                      "warn",
                      "slideTransition.noSlideTransition",
                      Z.transitions.nextSlide.index
                    ))
                : void 0 === Z.transitions.curSlide.data.$background &&
                  void 0 === Z.transitions.nextSlide.data.$background &&
                  "transparent" ==
                    Z.transitions.curSlide.data.backgroundColor &&
                  "transparent" == Z.transitions.nextSlide.data.backgroundColor
                ? this.start(!0)
                : ("x" === Z.o.clipSlideTransition
                    ? ee.$overflowWrapper.addClass("ls-overflowx-hidden")
                    : "y" === Z.o.clipSlideTransition
                    ? ee.$overflowWrapper.addClass("ls-overflowy-hidden")
                    : !0 === Z.o.clipSlideTransition &&
                      ee.$overflowWrapper.addClass("ls-overflow-hidden"),
                  void 0 !== Z.transitions.curSlide.data.$background &&
                    ((e =
                      Z.transitions.curSlide.data.$background.closest(
                        ".ls-bg-wrap"
                      )[0]._gsTransform),
                    ((t = Z.transitions.curSlide.data.$background.data(
                      Z.defaults.init.dataKey
                    )).responsive.filter =
                      Z.transitions.curSlide.data.$background[0].style.filter),
                    (t.responsive.kbRotation =
                      void 0 !== e
                        ? " rotate(" + e.rotation + "deg)"
                        : " rotate(0deg)"),
                    (t.responsive.kbScale =
                      void 0 !== e ? " scale(" + e.scaleX + ")" : " scale(1)")),
                  (Z.transitions.slide.$wrapper = te("<div>")
                    .addClass("ls-slide-transition-wrapper")
                    .css({ width: Z.slider.width, height: Z.slider.height })),
                  this.select.slideTransitionType());
          },
          select: {
            slideTransitionType: function () {
              Z.transitions.slide.normal.select.transitionType();
            },
          },
          start: function (e) {
            var t,
              i = !(
                !Z.slides.current.index ||
                !Z.slides.current.data.$backgroundVideo.length
              ),
              s = !(
                !Z.slides.next.index ||
                !Z.slides.next.data.$backgroundVideo.length
              );
            !Z.slideshow.firstStart &&
              Z.api.hasEvent("slideChangeDidStart") &&
              Z.api.triggerEvent("slideChangeDidStart", Z.api.eventData()),
              e ||
                (void 0 !== Z.transitions.nextSlide.data.transitionDuration
                  ? (a = Z.transitions.nextSlide.data.transitionDuration)
                  : void 0 !== Z.o.slideTransitionDuration &&
                    te.isNumeric(Z.o.slideTransitionDuration) &&
                    -1 < Z.o.slideTransitionDuration &&
                    (a = Z.o.slideTransitionDuration / 1e3),
                te.isNumeric(a) &&
                  (0 === a && (a += 1e-5),
                  Z.transitions._slideTransition.duration(a)),
                Z.debugMode &&
                  Z.debug.options.transitionDuration &&
                  Z.transitions._slideTransition.duration(
                    Z.debug.options.transitionDuration
                  ),
                0.25 < Z.transitions.layers.timeline.timeScaleModifier &&
                  ((r =
                    (r =
                      Z.transitions._slideTransition.duration() /
                      (0.75 +
                        Z.transitions.layers.timeline.timeScaleModifier)) < 0.5
                      ? 0.5
                      : r),
                  Z.transitions._slideTransition.duration(r)));
            var e =
                Z.transitions._slideTransition.duration() /
                Z.transitions._slideTransition.timeScale(),
              a = e,
              r =
                Z.transitions.nextSlide.data.timeShift ||
                (void 0 !== Z.o.slideTimeShift &&
                te.isNumeric(Z.o.slideTimeShift) &&
                Z.o.slideTimeShift < 0
                  ? Z.o.slideTimeShift / 1e3
                  : 0);
            0 < r ? (r = 0) : Math.abs(r) > e && (r = -e),
              (Z.transitions.nextSlide.data.calculatedTimeShift = r),
              (r = Z.transitions.firstSlide
                ? Z.o.sliderFadeInDuration + 0.01
                : (a + r) * Z.transitions._slideTransition.timeScale()),
              (i || s) &&
                Z.transitions.media.changeBackgroundVideo(
                  Z.transitions.firstSlide,
                  i && s
                ),
              Z.transitions._slideTransition.call(
                function () {
                  !Z.slideshow.firstStart &&
                    Z.api.hasEvent("slideChangeWillComplete") &&
                    Z.api.triggerEvent(
                      "slideChangeWillComplete",
                      Z.api.eventData()
                    ),
                    Z.slideshow.should.change ||
                      Z.transitions.layers.timeline.prepare(),
                    Z.media.functions.stop(!0),
                    Z.slides.set.slideIndexes(),
                    Z.o.hashChange &&
                      (document.location.hash =
                        Z.slides[Z.slides.current.index].data.deeplink ||
                        "_no-deeplink-found_"),
                    Z.slideshow.start(),
                    !Z.transitions.firstSlide &&
                      Z.slides.prev.index &&
                      Z.slides.prev.data.$backgroundVideo.length &&
                      !Z.slides.prev.data.$backgroundVideo.data(
                        Z.defaults.init.dataKey
                      ).mediaProperties.willBePaused &&
                      (Z.slides.prev.data.$backgroundVideo.trigger(
                        "stopBackgroundVideo"
                      ),
                      Z.slides.prev.data.$backgroundVideo
                        .data(Z.defaults.init.dataKey)
                        .elements.$bgWrapper.css({ display: "none" })),
                    Z.slideshow.should.change ||
                      (Z.slides.next.data.$backgroundVideo.length &&
                        Z.slides.next.data.$backgroundVideo.data(
                          Z.defaults.init.dataKey
                        ).mediaProperties &&
                        !Z.slides.next.data.$backgroundVideo.data(
                          Z.defaults.init.dataKey
                        ).mediaProperties.isPreloaded &&
                        (Z.slides.next.data.$backgroundVideo.trigger(
                          "preloadBackgroundVideo"
                        ),
                        (Z.slides.next.data.$backgroundVideo.data(
                          Z.defaults.init.dataKey
                        ).mediaProperties.isPreloaded = !0))),
                    (Z.transitions.firstSlide = !1);
                },
                [],
                this,
                r
              ),
              Z.transitions._slideTransition.play(),
              Z.slideshow.forceFastChange &&
                Z.transitions._slideTransition.progress(1),
              void 0 !== Z.transitions.curSlide.data &&
                void 0 !== Z.transitions.curSlide.data.$background &&
                ((t = Z.transitions.curSlide.data.$background.data(
                  Z.defaults.init.dataKey
                )),
                (Z.timeouts.applyBG = setTimeout(function () {
                  delete Z.timeouts.applyBG,
                    Z.transitions.curSlide.data.$background
                      .closest(".ls-bg-wrap")
                      .hide(),
                    t.kenBurns.zoom &&
                      J.TweenMax.set(
                        Z.transitions.curSlide.data.$background[0],
                        { autoCSS: !1, css: t.kenBurns.from }
                      );
                }, 5)));
          },
          onComplete: function () {
            var e;
            void 0 !== Z.transitions.nextSlide.data.$background &&
              Z.transitions.nextSlide.data.$background
                .closest(".ls-bg-wrap")
                .show(),
              "transparent" !== Z.transitions.nextSlide.data.backgroundColor
                ? Z.slider.$slideBGColorWrapper.css(
                    "background-color",
                    Z.transitions.nextSlide.data.backgroundColor
                  )
                : Z.slider.$slideBGColorWrapper.css(
                    "background-color",
                    "transparent"
                  ),
              Z.o.leaveOverflow ||
                ee.$overflowWrapper.removeClass(
                  "ls-overflowx-hidden ls-overflowy-hidden ls-overflow-hidden"
                ),
              this.$wrapper &&
                (this.$wrapper.html("").remove(), (this.$wrapper = !1)),
              Z.gui.navigation.bottom.bullets.set.active(),
              0 < Z.o.cycles &&
                (Z.slideshow.hasOwnProperty("cycleSlideIndex")
                  ? Z.slideshow.cycles.check(Z.transitions.nextSlide.index) &&
                    (Z.navigation.stop(),
                    Z.functions.setStates(Z.slideshow, {
                      pausedByLastCycle: !0,
                    }),
                    Z.o.forceCycles && (Z.slideshow.curCycle = 1))
                  : Z.slideshow.cycles.set()),
              Z.functions.setStates(Z.slider, {
                animatingSlides: !1,
                changingSlides: !1,
              }),
              !Z.slideshow.firstStart &&
                Z.api.hasEvent("slideChangeDidComplete") &&
                Z.api.triggerEvent("slideChangeDidComplete", Z.api.eventData()),
              (Z.slideshow.firstStart = !1),
              (Z.slideshow.forceFastChange = !1),
              Z.slideshow.forceFastChangeCallback &&
                (Z.slideshow.forceFastChangeCallback(),
                (Z.slideshow.forceFastChangeCallback = !1)),
              Z.slideshow.should.change
                ? Z.navigation.forceDirection
                  ? (void 0 !== Z.transitions.curSlide.data &&
                      void 0 !== Z.transitions.curSlide.data.$background &&
                      ((e = Z.transitions.curSlide.data.$background.data(
                        Z.defaults.init.dataKey
                      )),
                      Z.transitions.curSlide.data.$background
                        .closest(".ls-bg-wrap")
                        .hide(),
                      e.kenBurns.zoom &&
                        J.TweenMax.set(
                          Z.transitions.curSlide.data.$background[0],
                          { autoCSS: !1, css: e.kenBurns.from }
                        )),
                    Z.slideshow.changeTo(
                      Z.slideshow.get.slideInSequence(
                        Z.navigation.forceDirection
                      ),
                      !0
                    ))
                  : Z.slideshow.forceSlideChangeTo
                  ? Z.slideshow.changeTo(Z.slideshow.forceSlideChangeTo)
                  : Z.preload.imagesOfSlide(Z.slides.next.index)
                : Z.preload.imagesOfSlide(Z.slides.next.index);
          },
          normal: {
            select: {
              transitionType: function () {
                var e, t, i;
                Z.o.slideTransition
                  ? Z.transitions.slide.normal.setTransition(
                      Z.o.slideTransition.type,
                      Z.o.slideTransition.obj
                    )
                  : ((i =
                      !!Z.transitions.nextSlide.data.transition2d &&
                      Z.transitions.nextSlide.data.transition2d
                        .toString()
                        .split(",")),
                    Z.device.touchPrev && Z.o.slideOnSwipe
                      ? ((Z.device.touchPrev = !1), this.transition("2d", "1"))
                      : Z.device.touchNext && Z.o.slideOnSwipe
                      ? ((Z.device.touchNext = !1), this.transition("2d", "1"))
                      : Z.slides.next.data.$background ||
                        (i &&
                          (!i ||
                            -1 != i.indexOf("1") ||
                            -1 != i.indexOf("2") ||
                            -1 != i.indexOf("3") ||
                            -1 != i.indexOf("4")))
                      ? Z.browser.supports3D() &&
                        (Z.transitions.nextSlide.data.transition3d ||
                          Z.transitions.nextSlide.data.customtransition3d)
                        ? Z.transitions.nextSlide.data.transition3d &&
                          Z.transitions.nextSlide.data.customtransition3d
                          ? ((e = Math.floor(2 * Math.random())),
                            (t = [
                              ["3d", Z.transitions.nextSlide.data.transition3d],
                              [
                                "custom3d",
                                Z.transitions.nextSlide.data.customtransition3d,
                              ],
                            ]),
                            this.transition(t[e][0], t[e][1]))
                          : Z.transitions.nextSlide.data.transition3d
                          ? this.transition(
                              "3d",
                              Z.transitions.nextSlide.data.transition3d
                            )
                          : this.transition(
                              "custom3d",
                              Z.transitions.nextSlide.data.customtransition3d
                            )
                        : Z.transitions.nextSlide.data.transition2d &&
                          Z.transitions.nextSlide.data.customtransition2d
                        ? ((e = Math.floor(2 * Math.random())),
                          (t = [
                            ["2d", Z.transitions.nextSlide.data.transition2d],
                            [
                              "custom2d",
                              Z.transitions.nextSlide.data.customtransition2d,
                            ],
                          ]),
                          this.transition(t[e][0], t[e][1]))
                        : Z.transitions.nextSlide.data.transition2d
                        ? this.transition(
                            "2d",
                            Z.transitions.nextSlide.data.transition2d
                          )
                        : Z.transitions.nextSlide.data.customtransition2d
                        ? this.transition(
                            "custom2d",
                            Z.transitions.nextSlide.data.customtransition2d
                          )
                        : this.transition("2d", "1")
                      : this.transition("2d", "5"));
              },
              transition: function (e, t) {
                Z.debugMode && Z.debug.add("group", "slideTransition.info"),
                  (t += "");
                var i,
                  s,
                  a = -1 == e.indexOf("custom") ? Z.t : Z.ct,
                  r = "3d";
                -1 != e.indexOf("2d") && (r = "2d"),
                  (s =
                    -1 != t.indexOf("last")
                      ? a["t" + r].length - 1
                      : -1 != t.indexOf("all")
                      ? Math.floor(
                          Math.random() * Z.functions.countProp(a["t" + r])
                        )
                      : ((t = (i = t.split(",")).length),
                        parseInt(i[Math.floor(Math.random() * t)]) - 1)),
                  void 0 === a["t" + r][s] &&
                    (Z.debugMode &&
                      Z.debug.add("warn", "slideTransition.customTransition", [
                        r.toUpperCase() +
                          (-1 === e.indexOf("custom") ? "" : " (CUSTOM)"),
                        s + 1,
                      ]),
                    (a = Z.t),
                    (e = r = "2d"),
                    (s = 0)),
                  Z.debugMode &&
                    Z.debug.add("log", "slideTransition.info", [
                      r.toUpperCase() +
                        (-1 === e.indexOf("custom") ? "" : " (CUSTOM)"),
                      s + 1,
                      a["t" + r][s].name,
                    ]),
                  Z.transitions.slide.normal.setTransition(r, a["t" + r][s]);
              },
            },
            setTransition: function (e, t) {
              var i,
                s,
                a,
                r,
                o = te.extend(!0, { cols: 1, rows: 1 }, t),
                n = typeof o.cols,
                l = typeof o.rows,
                d = [],
                c = Z.navigation.direction,
                p = 0,
                u = 0,
                h =
                  !!Z.transitions.curSlide.data.$background &&
                  Z.functions.getURL(Z.transitions.curSlide.data.$background),
                m =
                  !!Z.transitions.nextSlide.data.$background &&
                  Z.functions.getURL(Z.transitions.nextSlide.data.$background),
                f =
                  Z.o.playByScroll && "up" === Z.device.scroll.direction
                    ? "to"
                    : "from";
              switch (n) {
                case "number":
                  n = o.cols;
                  break;
                case "string":
                  n =
                    Math.floor(
                      Math.random() *
                        (parseInt(o.cols.split(",")[1]) -
                          parseInt(o.cols.split(",")[0]) +
                          1)
                    ) + parseInt(o.cols.split(",")[0]);
                  break;
                default:
                  n =
                    Math.floor(Math.random() * (o.cols[1] - o.cols[0] + 1)) +
                    o.cols[0];
              }
              switch (l) {
                case "number":
                  l = o.rows;
                  break;
                case "string":
                  l =
                    Math.floor(
                      Math.random() *
                        (parseInt(o.rows.split(",")[1]) -
                          parseInt(o.rows.split(",")[0]) +
                          1)
                    ) + parseInt(o.rows.split(",")[0]);
                  break;
                default:
                  l =
                    Math.floor(Math.random() * (o.rows[1] - o.rows[0] + 1)) +
                    o.rows[0];
              }
              ee.isMobile && Z.o.optimizeForMobile
                ? (15 <= n
                    ? (n = 7)
                    : 5 <= n
                    ? (n = 4)
                    : 4 <= n
                    ? (n = 3)
                    : 2 < n && (n = 2),
                  15 <= l
                    ? (l = 7)
                    : 5 <= l
                    ? (l = 4)
                    : 4 <= l
                    ? (l = 3)
                    : 2 < l && (l = 2),
                  2 < l && 2 < n && ((l = 2), 4 < n && (n = 4)))
                : ((n = 35 < n ? 35 : n), (l = 35 < l ? 35 : l)),
                Z.debugMode &&
                  !Z.o.slideTransition &&
                  (Z.debug.add("log", "slideTransition.properties", [
                    [n, l],
                    n * l,
                  ]),
                  Z.debug.groupEnd()),
                (i = Math.floor(Z.slider.width / n)),
                (s = Math.floor(Z.slider.height / l)),
                (a = Z.slider.width - i * n),
                (r = Z.slider.height - s * l),
                "prev" == c &&
                  ((t = {
                    random: "random",
                    forward: "reverse",
                    reverse: "forward",
                    center: "center",
                    edge: "edge",
                    mirror: "mirror",
                    "col-forward": "col-reverse",
                    "col-reverse": "col-forward",
                  }),
                  "2d" === e &&
                    o.transition &&
                    "scale" === o.transition.type &&
                    ((t.forward = "forward"), (t.reverse = "reverse")),
                  o.tile &&
                    o.tile.sequence &&
                    (o.tile.sequence = t[o.tile.sequence]),
                  te.each(["animation", "before", "after"], function (e, t) {
                    o[t] &&
                      o[t].transition &&
                      ((t = o[t].transition).rotateX &&
                        44 < Math.abs(t.rotateX) &&
                        (t.rotateX *= -1),
                      t.rotateY &&
                        44 < Math.abs(t.rotateY) &&
                        (t.rotateY *= -1),
                      t.rotate && (t.rotate *= -1));
                  }));
              for (var g, y, v = 0; v < n * l; v++) d.push(v);
              switch (o.tile.sequence) {
                case "reverse":
                  d.reverse();
                  break;
                case "col-forward":
                  d = Z.functions.sortArray(l, n, "forward");
                  break;
                case "col-reverse":
                  d = Z.functions.sortArray(l, n, "reverse");
                  break;
                case "random":
                  d = Z.functions.shuffleArray(d);
                  break;
                case "center":
                  d = Z.functions.sortArray(l, n, "center");
                  break;
                case "edge":
                case "mirror":
                  d = Z.functions.sortArray(l, n, "edge");
              }
              ("transparent" === Z.transitions.nextSlide.data.backgroundColor ||
                "3d" == e ||
                (void 0 !== Z.transitions.curSlide.data.$background &&
                  void 0 !== Z.transitions.nextSlide.data.$background)) &&
                Z.slider.$slideBGColorWrapper.css(
                  "background-color",
                  "transparent"
                ),
                "2d" == e &&
                  ((g = -1 != o.name.toLowerCase().indexOf("carousel")),
                  (y = -1 != o.name.toLowerCase().indexOf("crossfad")),
                  (this.$curTiles = te("<div>")
                    .addClass("ls-curtiles")
                    .appendTo(Z.transitions.slide.$wrapper)),
                  (this.$nextTiles = te("<div>")
                    .addClass("ls-nexttiles")
                    .appendTo(Z.transitions.slide.$wrapper)));
              for (var w = 0; w < n * l; w++) {
                var b,
                  S = (w + 1) % n == 0 ? a : 0,
                  x = (l - 1) * n - 1 < w ? r : 0,
                  T = te("<div>")
                    .addClass("ls-slide-transition-tile")
                    .css({ width: i + S, height: s + x })
                    .data("style", { width: i + S, height: s + x })
                    .appendTo(Z.transitions.slide.$wrapper),
                  p = (d[w], w % n == 0 ? p + 1 : p),
                  u = w % n == 0 ? 1 : u + 1;
                if ("3d" == e) {
                  T.addClass("ls-3d-container");
                  var k,
                    C,
                    O = i + S,
                    P = s + x,
                    L = new J.TimelineMax(),
                    I =
                      Math.abs(Math.abs(u - n / 2 - 0.5) - n / 2 - 0.5) *
                      Math.abs(Math.abs(p - l / 2 - 0.5) - l / 2 - 0.5);
                  T.css({ zIndex: I }),
                    (k = O / 2),
                    (C = P / 2),
                    (x =
                      (I =
                        "horizontal" == o.animation.direction
                          ? 90 < Math.abs(o.animation.transition.rotateY) &&
                            "large" != o.tile.depth
                            ? Math.floor(O / 7) + S
                            : O
                          : 90 < Math.abs(o.animation.transition.rotateX) &&
                            "large" != o.tile.depth
                          ? Math.floor(P / 7) + x
                          : P) / 2),
                    this.createCuboids(
                      "ls-3d-box",
                      T,
                      0,
                      0,
                      0,
                      0,
                      -x,
                      0,
                      0,
                      k + "px " + C + "px 0px"
                    ),
                    this.createCuboids(
                      "ls-3d-front",
                      T.find(".ls-3d-box"),
                      O,
                      P,
                      0,
                      0,
                      x,
                      0,
                      0
                    ),
                    "vertical" == o.animation.direction &&
                    90 < Math.abs(o.animation.transition.rotateX)
                      ? this.createCuboids(
                          "ls-3d-back",
                          T.find(".ls-3d-box"),
                          O,
                          P,
                          0,
                          0,
                          -x,
                          180,
                          0
                        )
                      : this.createCuboids(
                          "ls-3d-back",
                          T.find(".ls-3d-box"),
                          O,
                          P,
                          0,
                          0,
                          -x,
                          0,
                          180
                        ),
                    this.createCuboids(
                      "ls-3d-left",
                      T.find(".ls-3d-box"),
                      I,
                      P,
                      -x,
                      0,
                      0,
                      0,
                      -90
                    ),
                    this.createCuboids(
                      "ls-3d-right",
                      T.find(".ls-3d-box"),
                      I,
                      P,
                      O - x,
                      0,
                      0,
                      0,
                      90
                    ),
                    this.createCuboids(
                      "ls-3d-top",
                      T.find(".ls-3d-box"),
                      O,
                      I,
                      0,
                      -x,
                      0,
                      90,
                      0
                    ),
                    this.createCuboids(
                      "ls-3d-bottom",
                      T.find(".ls-3d-box"),
                      O,
                      I,
                      0,
                      P - x,
                      0,
                      -90,
                      0
                    ),
                    (O = T.find(".ls-3d-front")),
                    (I =
                      "horizontal" == o.animation.direction
                        ? 90 < Math.abs(o.animation.transition.rotateY)
                          ? T.find(".ls-3d-back")
                          : 0 < o.animation.transition.rotateY
                          ? T.find(".ls-3d-left")
                          : T.find(".ls-3d-right")
                        : 90 < Math.abs(o.animation.transition.rotateX)
                        ? T.find(".ls-3d-back")
                        : 0 < o.animation.transition.rotateX
                        ? T.find(".ls-3d-bottom")
                        : T.find(".ls-3d-top")),
                    (P = d[w] * o.tile.delay),
                    (x = Z.transitions.slide.$wrapper.find(
                      ".ls-3d-container:eq( " + w + " ) .ls-3d-box"
                    )),
                    o.before && o.before.transition
                      ? ((o.before.transition.delay = o.before.transition.delay
                          ? (o.before.transition.delay + P) / 1e3
                          : P / 1e3),
                        L.to(
                          x[0],
                          o.before.duration / 1e3,
                          Z.functions.convert.transition(
                            o.before.transition,
                            o.before.easing
                          )
                        ))
                      : (o.animation.transition.delay = o.animation.transition
                          .delay
                          ? (o.animation.transition.delay + P) / 1e3
                          : P / 1e3),
                    L.to(
                      x[0],
                      o.animation.duration / 1e3,
                      Z.functions.convert.transition(
                        o.animation.transition,
                        o.animation.easing
                      )
                    ),
                    o.after &&
                      (o.after.transition || (o.after.transition = {}),
                      L.to(
                        x[0],
                        o.after.duration / 1e3,
                        Z.functions.convert.transition(
                          o.after.transition,
                          o.after.easing,
                          "after"
                        )
                      )),
                    Z.transitions._slideTransition.add(L, 0);
                } else {
                  var $,
                    B,
                    W,
                    M,
                    _,
                    z = "auto",
                    D = "auto",
                    F = "auto",
                    A = "auto",
                    V = 1,
                    R = 1,
                    E = null,
                    N = null,
                    Y = null,
                    X = null,
                    H = "50% 50%",
                    K = "50% 50%",
                    U = 0,
                    j = 100,
                    q = {},
                    G = o.transition.intensity || 2,
                    Q =
                      "random" == o.transition.direction
                        ? (W =
                            "scale" == o.transition.type
                              ? [
                                  "top",
                                  "bottom",
                                  "middle",
                                  "right",
                                  "left",
                                  "center",
                                ]
                              : ["top", "bottom", "right", "left"])[
                            Math.floor(Math.random() * W.length)
                          ]
                        : o.transition.direction;
                  switch (
                    (-1 != o.name.toLowerCase().indexOf("mirror") &&
                      w % 2 == 0 &&
                      (c = "prev" == c ? "next" : "prev"),
                    "prev" == c &&
                      (Q = {
                        top: "bottom",
                        bottom: "top",
                        middle: "middle",
                        left: "right",
                        right: "left",
                        center: "center",
                        topleft: "bottomright",
                        topright: "bottomleft",
                        bottomleft: "topright",
                        bottomright: "topleft",
                      }[Q]),
                    Q)
                  ) {
                    case "top":
                      (z = F = -T.data("style").height), (D = A = 0);
                      break;
                    case "bottom":
                      (z = F = T.data("style").height), (D = A = 0);
                      break;
                    case "left":
                      (z = F = 0), (D = A = -T.data("style").width);
                      break;
                    case "right":
                      (z = F = 0), (D = A = T.data("style").width);
                      break;
                    case "topleft":
                      (z = T.data("style").height),
                        (F = 0),
                        (D = T.data("style").width),
                        (A = 0);
                      break;
                    case "topright":
                      (z = T.data("style").height),
                        (F = 0),
                        (D = -T.data("style").width),
                        (A = 0);
                      break;
                    case "bottomleft":
                      (z = -T.data("style").height),
                        (F = 0),
                        (D = T.data("style").width),
                        (A = 0);
                      break;
                    case "bottomright":
                      (z = -T.data("style").height),
                        (F = 0),
                        (D = -T.data("style").width),
                        (A = 0);
                  }
                  switch (
                    ((this.scale2D = o.transition.scale || 1),
                    1 == g &&
                      1 != this.scale2D &&
                      ((z /= 2), (F /= 2), (D /= 2), (A /= 2)),
                    (o.transition.rotate ||
                      o.transition.rotateX ||
                      o.transition.rotateY ||
                      1 != this.scale2D) &&
                    "slide" != o.transition.type
                      ? T.css({ overflow: "visible" })
                      : T.css({ overflow: "hidden" }),
                    1 == g
                      ? this.$curTiles.css({ overflow: "visible" })
                      : this.$curTiles.css({ overflow: "hidden" }),
                    !0 === y ||
                    "slide" == o.transition.type ||
                    "scale" == o.transition.type ||
                    !0 === g
                      ? ((M = T.appendTo(this.$curTiles)),
                        ($ = T.clone().appendTo(this.$nextTiles)),
                        (O = te("<div>").addClass("ls-curtile").appendTo(M)))
                      : ($ = T.appendTo(this.$nextTiles)),
                    (I = te("<div>").addClass("ls-nexttile").appendTo($)),
                    (B = (d[w] * o.tile.delay) / 1e3),
                    (L = o.transition.rotate || 0),
                    (W = o.transition.rotateX || 0),
                    (M = o.transition.rotateY || 0),
                    "prev" == c && ((L = -L), (W = -W), (M = -M)),
                    o.transition.type)
                  ) {
                    case "fade":
                      (V = z = F = D = A = 0), (R = 1);
                      break;
                    case "mixed":
                      (V = 0), (R = 1) == this.scale2D && (F = A = 0);
                      break;
                    case "scale":
                      switch (((V = z = F = D = A = 0), (N = E = R = 1), Q)) {
                        case "left":
                        case "right":
                          E = 1 + d[w] / (50 / G);
                          break;
                        case "top":
                        case "bottom":
                          N = 1 + d[w] / (50 / G);
                          break;
                        case "center":
                          E = 1 + d[w] / (50 / G);
                          break;
                        case "middle":
                          N = 1 + d[w] / (50 / G);
                      }
                      switch (
                        ("mirror" === o.tile.sequence &&
                          (n * l) / 2 < w &&
                          ((U = 100), (j = 0)),
                        Q)
                      ) {
                        case "left":
                          (H = U + "% 50%"), (K = j + "% 0");
                          break;
                        case "right":
                          (H = j + "% 50%"), (K = U + "% 50%");
                          break;
                        case "center":
                        case "middle":
                          X = Y = 1;
                          break;
                        case "top":
                          (H = "50% " + U + "%"), (K = "50% " + j + "%");
                          break;
                        case "bottom":
                          (H = "50% " + j + "%"), (K = "50% " + U + "%");
                      }
                  }
                  Z.transitions._slideTransition.fromTo(
                    I[0],
                    o.transition.duration / 1e3,
                    {
                      immediateRender: !1,
                      autoCSS: !1,
                      css: {
                        x: -D,
                        y: -z,
                        display: "block",
                        opacity: V,
                        rotation: L,
                        rotationX: W,
                        rotationY: M,
                        scaleX: E || this.scale2D,
                        scaleY: N || this.scale2D,
                        transformOrigin: H,
                      },
                    },
                    {
                      autoCSS: !1,
                      css: {
                        x: 0,
                        y: 0,
                        opacity: R,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scaleX: 1,
                        scaleY: 1,
                      },
                      ease: Z.functions.convert.easing(o.transition.easing),
                    },
                    B
                  ),
                    1 == y &&
                      (void 0 === Z.transitions.nextSlide.data.$background ||
                        (void 0 !== Z.transitions.nextSlide.data.$background &&
                          (-1 !=
                            Z.transitions.nextSlide.data.$background
                              .attr("src")
                              .toLowerCase()
                              .indexOf("png") ||
                            Z.transitions.nextSlide.data.$background.width() <
                              Z.slider.width ||
                            Z.transitions.nextSlide.data.$background.height() <
                              Z.slider.height))) &&
                      (q.opacity = 0),
                    ("slide" != o.transition.type && 1 != g) ||
                    -1 != o.name.toLowerCase().indexOf("mirror")
                      ? "scale" == o.transition.type &&
                        ((q.scaleX = Y || E),
                        (q.scaleY = X || N),
                        (q.transformOrigin = K))
                      : ((_ = 0 !== L ? -L : 0),
                        (q.x = A),
                        (q.y = F),
                        (q.rotation = _),
                        (q.scale = this.scale2D),
                        (q.opacity = V)),
                    void 0 !== O &&
                      Z.transitions._slideTransition.to(
                        O[0],
                        o.transition.duration / 1e3,
                        {
                          autoCSS: !1,
                          css: q,
                          ease: Z.functions.convert.easing(o.transition.easing),
                        },
                        B
                      );
                }
                (_ = (w % n) * i),
                  (q = Math.floor(w / n) * s),
                  void 0 !== Z.transitions.curSlide.data.$background &&
                    ((b = Z.transitions.curSlide.data.$background.data(
                      Z.defaults.init.dataKey
                    )),
                    "3d" === e ||
                    ("2d" === e &&
                      (!0 === y ||
                        "slide" === o.transition.type ||
                        "scale" === o.transition.type ||
                        !0 === g))
                      ? O.append(
                          te('<div style="position: absolute;">')
                            .css({
                              width: Z.slider.width,
                              height: Z.slider.height,
                              left: -_,
                              top: -q,
                              transform:
                                b.responsive.kbRotation + b.responsive.kbScale,
                            })
                            .append(
                              te("<img>")
                                .attr("src", h)
                                .css({
                                  width: b.responsive.width,
                                  height: b.responsive.height,
                                  filter: b.responsive.filter,
                                  transform:
                                    "translateX(" +
                                    b.responsive.x +
                                    "px) translateY(" +
                                    b.responsive.y +
                                    "px)",
                                })
                            )
                        )
                      : 0 === this.$curTiles.children().length &&
                        this.$curTiles.append(
                          te('<div style="position: absolute;">')
                            .css({
                              width: Z.slider.width,
                              height: Z.slider.height,
                              left: -_,
                              top: -q,
                              transform:
                                b.responsive.kbRotation + b.responsive.kbScale,
                            })
                            .append(
                              te("<img>")
                                .attr("src", h)
                                .css({
                                  width: b.responsive.width,
                                  height: b.responsive.height,
                                  filter: b.responsive.filter,
                                  transform:
                                    "translateX(" +
                                    b.responsive.x +
                                    "px) translateY(" +
                                    b.responsive.y +
                                    "px)",
                                })
                            )
                        )),
                  "transparent" ===
                    Z.transitions.curSlide.data.backgroundColor ||
                    Z.transitions.curSlide.data.$backgroundVideo.length ||
                    ("3d" === e ||
                    ("2d" === e &&
                      (!0 === y || "slide" === o.transition.type || !0 === g))
                      ? O
                      : this.$curTiles
                    ).css(
                      "background-color",
                      Z.transitions.curSlide.data.backgroundColor
                    ),
                  void 0 !== Z.transitions.nextSlide.data.$background &&
                    ((b = (B = Z.transitions.nextSlide.data.$background.data(
                      Z.defaults.init.dataKey
                    )).kenBurns[f]),
                    I.append(
                      te('<div style="position: absolute;">')
                        .css({
                          width: Z.slider.width,
                          height: Z.slider.height,
                          left: -_,
                          top: -q,
                          transform:
                            "rotate(" +
                            b.rotation +
                            "deg) scale(" +
                            b.scale +
                            ")",
                        })
                        .append(
                          te("<img>")
                            .attr("src", m)
                            .css({
                              width: B.responsive.width,
                              height: B.responsive.height,
                              filter:
                                Z.transitions.nextSlide.filter.from || "none",
                              transform:
                                "translateX(" +
                                B.responsive.x +
                                "px) translateY(" +
                                B.responsive.y +
                                "px)",
                            })
                        )
                    )),
                  "transparent" ===
                    Z.transitions.nextSlide.data.backgroundColor ||
                    Z.transitions.nextSlide.data.$backgroundVideo.length ||
                    I.css(
                      "background-color",
                      Z.transitions.nextSlide.data.backgroundColor
                    );
              }
              Z.transitions.slide.$wrapper.prependTo(
                Z.o.preferBlendMode
                  ? Z.slider.$layersWrapper
                  : Z.slider.$innerWrapper
              ),
                Z.transitions.slide.start();
            },
            createCuboids: function (e, t, i, s, a, r, o, n, l, d) {
              o = "translate3d( " + a + "px, " + r + "px, " + o + "px)";
              0 !== n && (o += "rotateX( " + n + "deg)"),
                0 !== l && (o += "rotateY( " + l + "deg)");
              o = {
                width: i,
                height: s,
                transform: o,
                "-ms-transform": o,
                "-webkit-transform": o,
              };
              d &&
                ((o["transform-origin"] = d),
                (o["-ms-transform-origin"] = d),
                (o["-webkit-transform-origin"] = d)),
                te("<div>").addClass(e).css(o).appendTo(t);
            },
          },
        },
        layers: {
          in: {
            onStart: function (e) {
              e.data(Z.defaults.init.dataKey).hover.enabled &&
                Z.transitions.layers.hover.enable(e),
                Z.layers.set.dataAttribute("add", e, "animating-in");
            },
            onComplete: function (e) {
              Z.media.functions.playIfAllowed(e),
                Z.layers.set.dataAttribute("remove", e, "animating-in"),
                Z.layers.set.dataAttribute("add", e, "active");
            },
          },
          out: {
            forced: function () {
              var a, r, o, n, e, t, i;
              Z.transitions._forceLayersOut &&
                (Z.transitions._slideTimeline &&
                  ((a = new J.TimelineMax({
                    paused: !0,
                    autoRemoveChildren: !0,
                  })),
                  (n = []),
                  (e = Z.layers
                    .get("current, in, static, active")
                    .add(Z.layers.get("current, out, static, active"))),
                  (i = Z.layers.get("current, out, notstatic, active")),
                  (t = Z.layers.get("current, out, active")),
                  (i = te().add(e).add(i)),
                  i.each(function () {
                    var e,
                      t = te(this).data(Z.defaults.init.dataKey);
                    if (
                      (t.loop._timeline &&
                        (Z.transitions._slideTimeline.remove(t.loop._timeline),
                        t.loop._timeline.play()),
                      t.is.static)
                    ) {
                      (r = [t.elements.$wrapper[0]]),
                        t.elements.$clipWrapper &&
                          (r = r.concat(t.elements.$clipWrapper[0])),
                        t.textIn.nodes && (r = r.concat(t.textIn.nodes));
                      for (var i = 0; i < r.length; i++)
                        n = n.concat(
                          Z.transitions._slideTimeline.getTweensOf(r[i], !0),
                          Z.transitions._slideTimelineAlternate.getTweensOf(
                            r[i],
                            !0
                          )
                        );
                      for (var s = 0; s < n.length; s++)
                        n[s].duration &&
                          0 !== n[s].duration() &&
                          ((o = n[s]),
                          (e = o),
                          a.add(e, 100 - e.duration() * e.progress()));
                    }
                  }),
                  t.each(function () {
                    te(this).data(Z.defaults.init.dataKey).should.reset = !0;
                  }),
                  a.play().seek(100),
                  Z.transitions._slideTimeline.eventCallback("onStart", null),
                  Z.transitions._slideTimeline.eventCallback(
                    "onComplete",
                    null
                  ),
                  Z.transitions._slideTimeline.eventCallback(
                    "onReverseComplete",
                    null
                  ),
                  Z.transitions._slideTimeline.eventCallback("onUpdate", null),
                  Z.transitions._slideTimeline.stop().clear(),
                  Z.transitions._slideTimelineAlternate.stop().clear()),
                ("prev" === Z.navigation.direction
                  ? Z.transitions._forceLayersOutMirror
                  : Z.transitions._forceLayersOut
                ).play(),
                Z.slideshow.forceFastChange &&
                  (Z.transitions._forceLayersOut.progress(1),
                  Z.transitions._forceLayersOutMirror.progress(1))),
                Z.slider.$layersWrapper
                  .find(".ls-link")
                  .css({ display: "none" });
            },
            onStart: function (e) {
              Z.layers.set.dataAttribute("add", e, "animating-out");
            },
            onComplete: function (e) {
              var t = e.data(Z.defaults.init.dataKey);
              (!Z.slider.state.changingSlides &&
                t.settings.slideOut === Z.slides.current.index) ||
                Z.transitions.layers.reset(e, t),
                t.hover.enabled && Z.transitions.layers.hover.disable(e),
                Z.layers.set.dataAttribute("remove", e, "animating-out"),
                Z.layers.set.dataAttribute("add", e, "hidden");
            },
          },
          reset: function (e, t) {
            t.loop._timeline &&
              (t.loop._timeline.stop().clear(),
              delete t.loop._timeline,
              J.TweenMax.set(
                t.elements.$loopWrapper[0],
                t.reset.loopWrapperOnSlideChange
              )),
              J.TweenMax.set(
                t.elements.$wrapper[0],
                t.reset.wrapperOnSlideChange
              ),
              J.TweenMax.set(e[0], {
                "-webkit-filter": "none",
                filter: "none",
              }),
              t.should.update &&
                ((t.textInNodesFrom.random = {}),
                (t.textOutNodesTo.random = {}),
                Z.layers.update.data(e)),
              (t.should.reset = !1);
          },
          timeline: {
            shouldRestart: !1,
            create: function (e) {
              var t,
                i,
                s,
                a = e ? "current" : "next";
              if (
                ((Z.transitions.curNext = a),
                Z.o.allowRestartOnResize ||
                  (Z.transitions.layers.timeline.shouldRestart = !1),
                Z.transitions.layers.timeline.resetStates(),
                Z.transitions.timelines.set("layers", function (e, t) {
                  e.pause().progress(0).kill().clear(!0), (e = null);
                }),
                (Z.transitions._slideTimeline = new J.TimelineMax({
                  paused: !0,
                  onStart: function () {
                    Z.api.hasEvent("slideTimelineDidStart") &&
                      Z.api.triggerEvent(
                        "slideTimelineDidStart",
                        Z.api.eventData()
                      );
                  },
                  onComplete: function () {
                    Z.o.playByScroll &&
                      Z.o.playByScrollSkipSlideBreaks &&
                      ("next" === Z.slideshow.direction
                        ? Z.transitions.layers.timeline.scrollForward(!0)
                        : Z.transitions.layers.timeline.scrollBackwards(
                            !0,
                            !0
                          ));
                  },
                  onReverseComplete: function () {
                    Z.api.hasEvent("slideTimelineDidReverseComplete") &&
                      Z.api.triggerEvent(
                        "slideTimelineDidReverseComplete",
                        Z.api.eventData()
                      ),
                      Z.transitions.layers.timeline.shouldReplay &&
                        ((Z.transitions.layers.timeline.shouldRestart = !1),
                        Z.transitions._slideTimeline.play()),
                      Z.o.playByScroll &&
                        Z.o.playByScrollSkipSlideBreaks &&
                        Z.transitions.layers.timeline.scrollBackwards(!0, !1);
                  },
                  onUpdate: function (e) {
                    Z.api.hasEvent("slideTimelineDidUpdate") &&
                      Z.api.triggerEvent("slideTimelineDidUpdate", e);
                  },
                  onUpdateParams: ["{self}"],
                })),
                (Z.transitions._slideTimelineAlternate = new J.TimelineMax({
                  paused: !0,
                })),
                (this.totalDuration = 0),
                (this.progress = 1),
                Z.transitions.timelines.set("prevforce", function (e, t) {
                  e.progress(1).kill().clear(!0), (e = null);
                }),
                Z.transitions._forceLayersOut &&
                  (Z.transitions._forceLayersOutPrevious =
                    Z.transitions._forceLayersOut),
                Z.transitions._forceLayersOutMirror &&
                  (Z.transitions._forceLayersOutMirrorPrevious =
                    Z.transitions._forceLayersOutMirror),
                (Z.transitions._forceLayersOut = new J.TimelineMax({
                  paused: !0,
                  autoRemoveChildren: !0,
                })),
                (Z.transitions._forceLayersOutMirror = new J.TimelineMax({
                  paused: !0,
                  autoRemoveChildren: !0,
                })),
                (t = Z.layers.get(a + ", in, notactive")),
                (i = Z.layers
                  .get(a + ", out, notstatic")
                  .add(Z.layers.get(a + ", out, active, static"))),
                (e = Z.layers.get(a + ", in, bgonly, notactive")),
                (s = te().add(t).add(i).add(e)),
                this.addLayers(
                  t,
                  "in",
                  Z.transitions._slideTimeline,
                  Z.transitions._forceLayersOut,
                  Z.transitions._slideTimelineAlternate,
                  Z.transitions._forceLayersOutMirror
                ),
                this.addLayers(
                  i,
                  "out",
                  Z.transitions._slideTimeline,
                  Z.transitions._forceLayersOut,
                  Z.transitions._slideTimelineAlternate,
                  Z.transitions._forceLayersOutMirror
                ),
                Z.slides[a].data &&
                -1 !== Z.slides[a].data.duration &&
                Z.slides[a].data.duration < this.totalDuration
                  ? ((this.progress =
                      Z.slides[a].data.duration / this.totalDuration),
                    Z.debugMode &&
                      Z.debug.add("warn", "slideTimeline.duration", [
                        Z.slides[a].data.duration,
                        this.totalDuration,
                      ]))
                  : Z.transitions._slideTimeline.duration() >
                      this.totalDuration &&
                    (this.progress =
                      this.totalDuration /
                      Z.transitions._slideTimeline.duration()),
                -1 === Z.slides[a].data.duration
                  ? (Z.o.slideDuration &&
                    te.isNumeric(Z.o.slideDuration) &&
                    -1 < Z.o.slideDuration
                      ? (this.totalDuration = Z.o.slideDuration / 1e3)
                      : 0 === this.totalDuration &&
                        (this.totalDuration =
                          Z.o.slideDurationWithoutLayers / 1e3),
                    Z.o.inLayerPreview &&
                      (Z.o.hasInfiniteLoop &&
                      "loop-transition" === Z.o.layerPreviewPresetType
                        ? (this.totalDuration += 5)
                        : "ending-transition" === Z.o.layerPreviewPresetType
                        ? (this.totalDuration += 0.25)
                        : "hover-transition" !== Z.o.layerPreviewPresetType &&
                          (this.totalDuration += 0.5)),
                    (Z.slides[a].data.duration = this.totalDuration),
                    (Z.slides[Z.slides[a].index].data.duration =
                      this.totalDuration))
                  : (this.totalDuration = Z.slides[a].data.duration),
                !Z.functions.getData("slideDuration", this.totalDuration))
              )
                return !1;
              Z.slider.isScrollScene &&
                (Z.o.sceneDuration ||
                  ((Z.o.sceneDuration = this.totalDuration), Z.resize.scene()),
                Z.slider.$spacingWrapper.attr(
                  "data-scene-duration",
                  Z.o.sceneDuration
                )),
                this.addLayers(
                  e,
                  "in",
                  Z.transitions._slideTimeline,
                  Z.transitions._forceLayersOut,
                  Z.transitions._slideTimelineAlternate
                ),
                !0 === Z.transitions.layers.timeline.shouldRestart &&
                  Z.debugMode &&
                  Z.debug.add(
                    "warn",
                    "slideTimeline.restart",
                    Z.o.allowRestartOnResize ? "enabled" : "disabled"
                  );
              for (var r, o = 0; o < s.length; o++)
                te(s[o]).data(Z.defaults.init.dataKey).parallax.enabled &&
                  te(s[o])
                    .data(Z.defaults.init.dataKey)
                    .elements.$parallaxWrapper.attr(
                      "data-ls-parallax",
                      "active"
                    );
              Z.transitions.layers.parallax.trigger(),
                Z.transitions.layers.scroll.reset(),
                Z.transitions.layers.scroll.trigger(),
                Z.api.hasEvent("slideTimelineDidCreate") &&
                  Z.api.triggerEvent("slideTimelineDidCreate", {
                    slideTimeline: Z.transitions._slideTimeline,
                    layersOnSlideTimeline: s,
                    slideTimelineDuration: this.totalDuration,
                  }),
                Z.transitions.timers.create(),
                Z.transitions.timers.bar._transition &&
                  Z.transitions._slideTimeline.add(
                    Z.transitions.timers.bar._transition.play(),
                    0
                  ),
                Z.transitions.timers.circle._transition &&
                  Z.transitions._slideTimeline.add(
                    Z.transitions.timers.circle._transition.play(),
                    0
                  ),
                Z.transitions.timers.slidebar._transition &&
                  Z.transitions._slideTimeline.add(
                    Z.transitions.timers.slidebar._transition.play(),
                    0
                  ),
                Z.transitions._slideTimeline.call(
                  function () {
                    if (!Z.transitions._slideTimeline.reversed()) {
                      var e;
                      if (Z.api.hasEvent("slideTimelineDidComplete"))
                        if (
                          (Z.o.inLayerPreview &&
                            Z.o.hasInfiniteLoop &&
                            Z.layers.get("current, in").each(function () {
                              (e = te(this).data(Z.defaults.init.dataKey))
                                .loop &&
                                e.loop._timeline &&
                                e.loop._timeline.stop().progress(0);
                            }),
                          !1 ===
                            Z.api.triggerEvent(
                              "slideTimelineDidComplete",
                              Z.api.eventData()
                            ))
                        )
                          return;
                      Z.functions.setStates(Z.transitions.layers.timeline, {
                        finished: !0,
                      }),
                        !Z.slideshow.isPaused() && Z.slideshow.state.running
                          ? Z.slideshow.changeTo(Z.slides.next.index)
                          : Z.slideshow.state.pausedByLastCycle &&
                            Z.transitions.timers.reverse();
                    }
                  },
                  [],
                  this,
                  Z.slides[a].data.duration
                ),
                Z.slides.next.data.$link &&
                  Z.slides.next.data.$link.css({ display: "block" }),
                ((!Z.o.startInViewport ||
                  ("inside" !== Z.slider.position.toViewport &&
                    !Z.o.playByScrollStart &&
                    Z.slider.state.waitForGettingInViewport)) &&
                  Z.o.startInViewport) ||
                  (!(
                    Z.slider.isPopup &&
                    Z.slider.state.popupIsVisible &&
                    Z.slider.state.popupShouldStart
                  ) &&
                    Z.slider.isPopup) ||
                  (Z.o.pauseLayers &&
                    Z.slideshow.isPaused() &&
                    Z.transitions._slideTimeline.timeScale(0),
                  Z.slider.isScrollScene ||
                    Z.transitions.layers.timeline.play(),
                  Z.o.playByScroll &&
                    "up" === Z.device.scroll.directionAtSlideTransitionStart &&
                    Z.transitions._slideTimeline.progress(1)),
                Z.transitions._slideTimelineAlternate.play(),
                Z.slider.isScrollScene && Z.slider.set.offset(),
                $.trigger("mouseleave.globalhover" + B),
                $.off(
                  "mouseenter.globalhover" +
                    B +
                    " mouseleave.globalhover" +
                    B +
                    " mousemove.globalhover" +
                    B
                ),
                Z.slides[a].data.globalhover &&
                  ((r = Z.layers
                    .get(a + ",in,notactive")
                    .add(Z.layers.get("static,active"))),
                  $.on("mouseenter.globalhover" + B, function () {
                    r.each(function () {
                      Z.transitions.layers.hover.mouseEnter(
                        te(this),
                        te(this).data(Z.defaults.init.dataKey)
                      );
                    });
                  }),
                  $.on("mouseleave.globalhover" + B, function () {
                    r.each(function () {
                      Z.transitions.layers.hover.mouseLeave(
                        te(this),
                        te(this).data(Z.defaults.init.dataKey)
                      );
                    });
                  }),
                  $.on("mousemove.globalhover" + B, function () {
                    r.each(function () {
                      Z.transitions.layers.hover.mouseMove(
                        te(this),
                        te(this).data(Z.defaults.init.dataKey)
                      );
                    });
                  }));
            },
            prepare: function () {
              Z.slides.next.data.overflow &&
              "hidden" !== Z.slides.next.data.overflow
                ? (Z.slider.$layersWrapper.addClass("ls-visible"),
                  Z.slider.$slideBGWrapper.addClass("ls-visible"))
                : (Z.slider.$layersWrapper.removeClass("ls-visible"),
                  Z.slider.$slideBGWrapper.removeClass("ls-visible")),
                this.create();
            },
            getTiming: function (e, t, i, s) {
              if ("number" == typeof t) return t;
              t = t.toLowerCase();
              var a,
                r,
                o,
                n,
                l,
                d = Z.defaults.layer.timelineHierarchy,
                c = 0;
              if (
                (-1 !== t.indexOf("*") && (l = "*"),
                -1 !== t.indexOf("/") && (l = "/"),
                -1 !== t.indexOf("+") && (l = "+"),
                -1 !== t.indexOf("-") && (l = "-"),
                l)
              )
                if (
                  ((n = t.split(l)),
                  (a = te.trim(n[0])),
                  (o = parseInt(te.trim(n[1]))),
                  d[a] && -1 !== d[i][1].indexOf(d[a][0]))
                ) {
                  if (!e.timeline[a] && 1 < d[a][0]) {
                    var p,
                      u,
                      h = d[a][0] - 1 || 1;
                    for (u in d) d[u][0] === h && (p = u);
                    a = p;
                  }
                  if (
                    ((r =
                      "number" == typeof e.timeline[a]
                        ? e.timeline[a]
                        : e.timeline[a](e)),
                    s)
                  )
                    c = o / 1e3;
                  else
                    switch (l) {
                      case "*":
                        c = r * o;
                        break;
                      case "/":
                        c = r / o;
                        break;
                      case "+":
                        c = r + o / 1e3;
                        break;
                      case "-":
                        c = r - o / 1e3;
                    }
                } else
                  Z.debugMode &&
                    (d[a] || Z.debug.add("warn", "layerTransition.timing1", a),
                    -1 === d[i][1].indexOf(d[a][0]) &&
                      Z.debug.add("warn", "layerTransition.timing3", [
                        a,
                        d[a],
                        i,
                        d[i],
                      ])),
                    ("+" !== l && !s) || (c = o / 1e3);
              else
                d[(a = te.trim(t))] && -1 !== d[i][1].indexOf(d[a][0])
                  ? (c = s
                      ? 0
                      : "number" == typeof e.timeline[a]
                      ? e.timeline[a]
                      : e.timeline[a](e))
                  : Z.debugMode &&
                    (d[a]
                      ? -1 === d[i][1].indexOf(d[a][0]) &&
                        Z.debug.add("warn", "layerTransition.timing3", [
                          a,
                          d[a],
                          i,
                          d[i],
                        ])
                      : Z.debug.add("warn", "layerTransition.timing1", a));
              return (
                (c != c || c < 0) &&
                  (Z.debugMode &&
                    Z.debug.add("warn", "layerTransition.timing2", [i, a, c]),
                  (c = 0)),
                c
              );
            },
            addLayers: function (e, t, i, s, a, r) {
              for (var o = 0, n = e.length; o < n; o++) {
                var l,
                  d,
                  c,
                  p,
                  u = e[o],
                  h = te(u),
                  m = h.data(Z.defaults.init.dataKey),
                  f = m.elements.$wrapper,
                  g = m.elements.$clipWrapper,
                  y = m.elements.$loopWrapper,
                  v = m.elements.$parallaxWrapper,
                  w =
                    (m.elements.$scrollWrapper,
                    m.elements.$scrollTransformWrapper,
                    m.settings.skipViewport && Z.slideshow.state.changed < 1
                      ? a
                      : i),
                  b =
                    "loop" == m.settings.skipViewport &&
                    Z.slideshow.state.changed < 1
                      ? a
                      : i,
                  S = te.extend(!0, {}, m.inLayerFrom),
                  x = S.css,
                  T = te.extend({}, m.inLayerShouldBeConverted),
                  k = te.extend(!0, {}, m.outLayerTo),
                  C = k.css,
                  O = te.extend({}, m.outLayerShouldBeConverted),
                  P = te.extend(!0, {}, m.textInNodesFrom),
                  L = te.extend(!0, {}, m.textInShouldBeConverted),
                  I = te.extend(!0, {}, m.textOutNodesTo),
                  $ = te.extend(!0, {}, m.textOutShouldBeConverted);
                if (
                  (m.should.reset && Z.transitions.layers.reset(h, m),
                  h.hasClass("ls-bg"))
                )
                  m.kenBurns.zoom &&
                    i.fromTo(
                      h.closest(".ls-bg-wrap"),
                      Z.transitions.nextSlide.data.duration +
                        Z.transitions.nextSlide.data.calculatedTimeShift,
                      { autoCSS: !1, css: m.kenBurns.from },
                      {
                        autoCSS: !1,
                        css: m.kenBurns.to,
                        ease: J.Quad.easeInOut,
                      },
                      -Z.transitions.nextSlide.data.calculatedTimeShift
                    ),
                    (te.isEmptyObject(m.filter.values.bgFrom) &&
                      te.isEmptyObject(m.filter.values.bgTo)) ||
                      (m.filter.transitions.bg ||
                        (m.filter.transitions.bg =
                          Z.transitions.layers.filters.createTransition(
                            m,
                            "bg",
                            m.filter.values.bgFrom,
                            m.filter.values.bgTo
                          )),
                      w.to(
                        [{ p: 0 }, u],
                        Z.transitions.nextSlide.data.duration,
                        {
                          p: 1,
                          autoCSS: !1,
                          ease: J.Sine.easeInOut,
                          onUpdate: Z.transitions.layers.filters.animate,
                          onUpdateParams: ["{self}", m.filter.transitions.bg],
                        },
                        0
                      ));
                else
                  switch (t) {
                    case "in":
                      if (
                        (m.in.enabled
                          ? (m.settings.timelineIsCalculated ||
                              ("number" != typeof m.in.startAt &&
                                (m.in.startAt = 0),
                              (m.timeline.transitioninstart = m.in.startAt),
                              (m.timeline.transitioninend =
                                m.timeline.transitioninstart + m.in.duration)),
                            Z.resize.performTransformOperations(
                              m.inLayerToCSS,
                              x
                            ),
                            m.in.mirror &&
                              "prev" === Z.navigation.direction &&
                              Z.resize.mirrorTransitionProperties({
                                transitionProperties: x,
                                transitionPropertiesShouldBeConverted: T,
                                transitionType: "normal",
                                mirrorProperties: m.in.mirror,
                              }),
                            Z.resize.transformProperties(h, m, x, T),
                            Z.resize.styleProperties(
                              m,
                              m.inLayerStyleFromCSS,
                              m.inLayerStyleShouldBeConvertedFrom
                            ),
                            Z.resize.styleProperties(
                              m,
                              m.inLayerStyleToCSS,
                              m.inLayerStyleShouldBeConvertedTo
                            ),
                            (x.transformPerspective =
                              m.transformPerspective.layer *
                              m.settings.calculatedratio),
                            m.clip.enabled &&
                              (m.original.clip ||
                                ((m.original.clip = m.clip.min),
                                (m.original.clipShouldBeConverted = !0)),
                              m.inClipShouldBeConverted.clip
                                ? ((m.inClipFromCSS.clip = Z.resize.clip(
                                    h,
                                    m,
                                    m.inClipShouldBeConverted.clip,
                                    !0
                                  )),
                                  (m.inClipToCSS.clip = Z.resize.clip(
                                    h,
                                    m,
                                    m.original.clip,
                                    m.original.clipShouldBeConverted
                                  )),
                                  w.fromTo(
                                    g[0],
                                    m.in.duration,
                                    m.inClipFrom,
                                    m.inClipTo,
                                    m.timeline.transitioninstart
                                  ))
                                : J.TweenMax.set(g[0], {
                                    clip: Z.resize.clip(
                                      h,
                                      m,
                                      m.original.clip,
                                      m.original.clipShouldBeConverted
                                    ),
                                  }),
                              (Z.transitions.layers.timeline.shouldRestart =
                                !0)),
                            te.isEmptyObject(m.filter.values.in)
                              ? te.isEmptyObject(m.filter.values.out) ||
                                h.css("filter", m.original.filter)
                              : (m.filter.transitions.in ||
                                  (m.filter.transitions.in =
                                    Z.transitions.layers.filters.createTransition(
                                      m,
                                      "in",
                                      m.filter.values.in,
                                      m.filter.values.style
                                    )),
                                w.to(
                                  [{ p: 0 }, u],
                                  m.in.duration,
                                  {
                                    p: 1,
                                    autoCSS: !1,
                                    ease: m.inLayerTo.ease,
                                    onUpdate:
                                      Z.transitions.layers.filters.animate,
                                    onUpdateParams: [
                                      "{self}",
                                      m.filter.transitions.in,
                                    ],
                                  },
                                  m.timeline.transitioninstart
                                )),
                            0 === m.timeline.transitioninstart &&
                            0 === m.in.duration
                              ? ((m.inLayerTo.css.transformOrigin =
                                  S.css.transformOrigin),
                                (m.inLayerTo.css.transformPerspective =
                                  S.css.transformPerspective),
                                w.set(
                                  f[0],
                                  m.inLayerTo,
                                  m.timeline.transitioninstart
                                ),
                                w.set(
                                  u,
                                  m.inLayerStyleTo,
                                  m.timeline.transitioninstart
                                ))
                              : (w.fromTo(
                                  f[0],
                                  m.in.duration,
                                  S,
                                  m.inLayerTo,
                                  m.timeline.transitioninstart
                                ),
                                w.fromTo(
                                  u,
                                  m.in.duration,
                                  m.inLayerStyleFrom,
                                  m.inLayerStyleTo,
                                  m.timeline.transitioninstart
                                )))
                          : ((m.timeline.transitioninstart = 0),
                            (m.timeline.transitioninend = 0)),
                        m.is.textLayer &&
                          ((m.textIn.type || m.textOut.type) &&
                            Z.transitions.layers.splitType.resetNodes(h, m),
                          m.textIn.enabled &&
                            ((B = !(
                              !m.textIn.mirror ||
                              "prev" !== Z.navigation.direction
                            )),
                            m.in.enabled ||
                              w.to(
                                f[0],
                                0,
                                te.extend(!0, {}, m.inLayerTo, m.init.wrapper),
                                m.timeline.textinstart
                              ),
                            (d =
                              Z.transitions.layers.splitType.setNodesSequence(
                                m.textIn.type.split("_"),
                                m.textIn.ns
                              )),
                            (m.textIn.nodes = B ? d[1] : d[0]),
                            B &&
                              Z.resize.mirrorTransitionProperties({
                                transitionProperties: P,
                                transitionPropertiesShouldBeConverted: L,
                                transitionType: "text",
                                mirrorProperties: m.textIn.mirror,
                              }),
                            Z.resize.transformProperties(
                              h,
                              m,
                              P,
                              L,
                              !1,
                              m.textIn.nodes
                            ),
                            (P.transformPerspective =
                              m.transformPerspective.text *
                              m.settings.calculatedratio),
                            te.isEmptyObject(L.random) ||
                              Z.transitions.layers.splitType.setRandomProperties(
                                m,
                                L.random,
                                P,
                                "In"
                              ),
                            te.isEmptyObject(P.random) ||
                              Z.transitions.layers.splitType.setRandomProperties(
                                m,
                                P.random,
                                P,
                                "In"
                              ),
                            delete P.random,
                            m.settings.timelineIsCalculated ||
                              ((m.timeline.textinstart = this.getTiming(
                                m,
                                m.textIn.startAt,
                                "textinstart"
                              )),
                              (m.timeline.textinend =
                                m.timeline.textinstart +
                                (m.textIn.nodes.length - 1) *
                                  m.textIn.shiftNodes +
                                m.textIn.duration)),
                            P.color
                              ? (m.textInNodesToCSS.color = m.original.color)
                              : m.textOutNodesTo.color &&
                                (P.color = m.original.color),
                            w.set(
                              u,
                              m.textIn.layerStyle,
                              m.timeline.textinstart
                            ),
                            window.getSelection &&
                              Z.browser.isSafari &&
                              w.addCallback(
                                function (e) {
                                  window
                                    .getSelection()
                                    .setBaseAndExtent(e, 0, e, 1e3),
                                    window.getSelection().removeAllRanges();
                                },
                                m.timeline.textinstart + 0.001,
                                [u]
                              ),
                            w.staggerFromTo(
                              m.textIn.nodes,
                              m.textIn.duration,
                              P,
                              m.textInNodesTo,
                              m.textIn.shiftNodes,
                              m.timeline.textinstart,
                              function (e) {
                                Z.transitions.layers.in.onComplete(e);
                              },
                              [h]
                            ))),
                        m.is.keyframe &&
                          Z.o.playByScroll &&
                          i.addPause(m.timeline.allinend(), function () {
                            setTimeout(function () {
                              delete Z.timeouts.scroll,
                                (Z.transitions.layers.timeline.timeScaleModifier = 0),
                                (Z.device.scroll.timeout = 250);
                            }, 500);
                          }),
                        m.parallax.enabled && "auto" == m.parallax.event)
                      ) {
                        Z.transitions.layers.parallax.auto();
                        var B = new J.TimelineMax({ paused: !0 }),
                          W = {
                            repeat:
                              -1 == m.parallax.count
                                ? -1
                                : m.parallax.count - 1,
                            ease: J.Linear.easeNone,
                          };
                        switch (
                          ((m.settings.timelineIsCalculated && !m.is.static) ||
                            ((m.timeline.autoparallaxstart = this.getTiming(
                              m,
                              m.parallax.startAt,
                              "autoparallaxstart"
                            )),
                            (m.timeline.autoparallaxend =
                              -1 !== m.parallax.count &&
                              m.timeline.autoparallaxstart +
                                m.parallax.duration * m.parallax.count)),
                          (m.parallax._timeline = B),
                          (m.parallax.dummy = { x: 0, y: -10 }),
                          m.parallax.path)
                        ) {
                          default:
                          case "circle":
                            W.bezier = {
                              curviness: 1.5,
                              values: [
                                { x: 10, y: 0 },
                                { x: 0, y: 10 },
                                { x: -10, y: 0 },
                                { x: 0, y: -10 },
                              ],
                            };
                            break;
                          case "oval-h":
                            W.bezier = {
                              type: "thru",
                              curviness: 1,
                              values: [
                                { x: 20, y: 0 },
                                { x: 0, y: 10 },
                                { x: -20, y: 0 },
                                { x: 0, y: -10 },
                              ],
                            };
                            break;
                          case "oval-v":
                            (m.parallax.dummy = { x: 0, y: -20 }),
                              (W.bezier = {
                                type: "thru",
                                curviness: 1,
                                values: [
                                  { x: 10, y: 0 },
                                  { x: 0, y: 20 },
                                  { x: -10, y: 0 },
                                  { x: 0, y: -20 },
                                ],
                              });
                            break;
                          case "infinity":
                            (m.parallax.dummy = { x: 0, y: 0 }),
                              (W.bezier = {
                                type: "thru",
                                curviness: 1,
                                values: [
                                  { x: 20, y: -10 },
                                  { x: 40, y: 0 },
                                  { x: 20, y: 10 },
                                  { x: 0, y: 0 },
                                  { x: -20, y: -10 },
                                  { x: -40, y: 0 },
                                  { x: -20, y: 10 },
                                  { x: 0, y: 0 },
                                ],
                              });
                            break;
                          case "linear-h":
                            (m.parallax.dummy = { x: -10, y: 0 }),
                              (W.x = 10),
                              (W.ease = J.Quad.easeInOut),
                              (W.yoyo = !0),
                              (W.repeat =
                                -1 == m.parallax.count
                                  ? -1
                                  : 2 * m.parallax.count - 1);
                            break;
                          case "linear-v":
                            (m.parallax.dummy = { x: 0, y: -10 }),
                              (W.y = 10),
                              (W.ease = J.Quad.easeInOut),
                              (W.yoyo = !0),
                              (W.repeat =
                                -1 == m.parallax.count
                                  ? -1
                                  : 2 * m.parallax.count - 1);
                        }
                        (W.onUpdate = function (e, t, i, s, a, r, o) {
                          J.TweenMax.set(i, {
                            x: -t.x * (s / 50) * parseInt(a),
                            y: -t.y * (s / 50) * parseInt(a),
                            rotationX: "3d" == r ? t.y / (100 / o) : 0,
                            rotationY: "3d" == r ? -t.x / (100 / o) : 0,
                          });
                        }),
                          (W.onUpdateParams = [
                            "{self}",
                            m.parallax.dummy,
                            v[0],
                            m.parallax.distance,
                            m.parallax.level,
                            m.parallax.type,
                            m.parallax.rotation,
                          ]),
                          B.to(
                            m.parallax.dummy,
                            -1 == m.parallax.path.indexOf("linear")
                              ? m.parallax.duration
                              : m.parallax.duration / 2,
                            W
                          ),
                          i.addCallback(
                            function (e) {
                              e.play();
                            },
                            m.timeline.autoparallaxstart,
                            [B]
                          );
                      }
                      m.loop.enabled &&
                        ((c = new J.TimelineMax({
                          repeat: m.loop.repeat,
                          repeatDelay: m.loop.repeatDelay,
                          yoyo: m.loop.yoyo,
                          paused: !0,
                        })),
                        (m.settings.timelineIsCalculated && !m.is.static) ||
                          ((m.timeline.loopstart = this.getTiming(
                            m,
                            m.loop.startAt,
                            "loopstart"
                          )),
                          (m.timeline.loopend =
                            -1 !== m.loop.count &&
                            m.timeline.loopstart +
                              (m.loop.repeat + 1) * m.loop.duration +
                              m.loop.repeat * m.loop.repeatDelay)),
                        (m.loop._timeline = c),
                        Z.resize.transformProperties(h, m, m.loopToCSS, {
                          x: m.loopLayerShouldBeConverted.x,
                          y: m.loopLayerShouldBeConverted.y,
                        }),
                        ((m.loopToCSS.x && 0 !== m.loopToCSS.x) ||
                          (m.loopToCSS.y && 0 !== m.loopToCSS.y)) &&
                          (Z.transitions.layers.timeline.shouldRestart = !0),
                        (m.loopFromCSS.transformOrigin =
                          Z.functions.convert.transformOrigin(
                            m.loopLayerShouldBeConverted.transformOrigin,
                            h,
                            m,
                            h.data(Z.defaults.init.dataKey).elements
                              .$outerStyleWrapper
                          )),
                        (m.loopFromCSS.transformPerspective =
                          m.transformPerspective.loop *
                          m.settings.calculatedratio),
                        te.isEmptyObject(m.filter.values.loop) ||
                          (m.filter.transitions.loop ||
                            (m.filter.transitions.loop =
                              Z.transitions.layers.filters.createTransition(
                                m,
                                "loop",
                                te.isEmptyObject(m.filter.values.afterIn)
                                  ? m.filter.values.style
                                  : m.filter.values.afterIn,
                                m.filter.values.loop
                              )),
                          c.to(
                            [{ p: 0 }, u],
                            m.loop.duration,
                            {
                              p: 1,
                              autoCSS: !1,
                              ease: m.loopTo.ease,
                              onUpdate: Z.transitions.layers.filters.animate,
                              onUpdateParams: [
                                "{self}",
                                m.filter.transitions.loop,
                              ],
                            },
                            0
                          )),
                        c.fromTo(
                          y[0],
                          m.loop.duration,
                          m.loopFrom,
                          m.loopTo,
                          0
                        ),
                        m.loopClipShouldBeConverted.clip &&
                          ((m.loopClipToCSS.clip = Z.resize.clip(
                            h,
                            m,
                            m.loopClipShouldBeConverted.clip,
                            !0
                          )),
                          c.to(g[0], m.loop.duration, m.loopClipTo, 0),
                          (Z.transitions.layers.timeline.shouldRestart = !0)),
                        -1 !== m.loop.repeat &&
                        ("looplayers" === Z.o.pauseOnHover ||
                          Z.gui.timers.slidebar.$element ||
                          Z.o.playByScroll)
                          ? (b.add(c, m.timeline.loopstart), c.play())
                          : b.addCallback(
                              function (e) {
                                e.play();
                              },
                              m.timeline.loopstart,
                              [c]
                            )),
                        m.is.static &&
                          ((m.timeline.staticfrom = m.timeline.transitioninend),
                          (m.timeline.staticto = "100%"),
                          m.settings.timelineIsCalculated ||
                            ((l = Math.max(m.timeline.allinandloopend(), 0)),
                            (this.totalDuration = Math.max(
                              this.totalDuration,
                              l
                            ))));
                      break;
                    case "out":
                      m.is.textLayer &&
                        m.textOut.enabled &&
                        ((c = Z.transitions.layers.splitType.setNodesSequence(
                          m.textOut.type.split("_"),
                          m.textOut.ns
                        )),
                        (m.textOut.nodes = c[0]),
                        Z.resize.transformProperties(
                          h,
                          m,
                          m.textOutNodesTo,
                          m.textOutShouldBeConverted,
                          m.textOutNodesFrom,
                          m.textOut.nodes
                        ),
                        m.textOut.mirror
                          ? ((m.textOut.nodesMirror = c[1]),
                            Z.resize.mirrorTransitionProperties({
                              transitionProperties: I,
                              transitionPropertiesShouldBeConverted: $,
                              transitionType: "text",
                              mirrorProperties: m.textOut.mirror,
                            }),
                            Z.resize.transformProperties(
                              h,
                              m,
                              I,
                              $,
                              m.textOutNodesFrom,
                              m.textOut.nodes
                            ))
                          : (m.textOut.nodesMirror = c[0]),
                        (m.textOutNodesFrom.transformPerspective =
                          m.transformPerspective.text *
                          m.settings.calculatedratio),
                        te.isEmptyObject(m.textOutShouldBeConverted.random) ||
                          Z.transitions.layers.splitType.setRandomProperties(
                            m,
                            m.textOutShouldBeConverted.random,
                            m.textOutNodesTo,
                            "Out"
                          ),
                        te.isEmptyObject(m.textOutNodesTo.random) ||
                          Z.transitions.layers.splitType.setRandomProperties(
                            m,
                            m.textOutNodesTo.random,
                            m.textOutNodesTo,
                            "Out"
                          ),
                        delete m.textOutNodesTo.random,
                        m.textOut.mirror &&
                          (te.isEmptyObject($.random) ||
                            Z.transitions.layers.splitType.setRandomProperties(
                              m,
                              $.random,
                              I,
                              "Out"
                            ),
                          te.isEmptyObject(I.random) ||
                            Z.transitions.layers.splitType.setRandomProperties(
                              m,
                              I.random,
                              I,
                              "Out"
                            ),
                          delete I.random),
                        m.settings.timelineIsCalculated ||
                          ((m.timeline.textoutstart = this.getTiming(
                            m,
                            m.textOut.startAt,
                            "textoutstart"
                          )),
                          (m.timeline.textoutend =
                            m.timeline.textoutstart +
                            (m.textOut.nodes.length - 1) *
                              m.textOut.shiftNodes +
                            m.textOut.duration)),
                        m.clip.enabled &&
                          (void 0 === m.outClipShouldBeConverted.clip &&
                            i.to(
                              g[0],
                              0,
                              {
                                immediateRender: !1,
                                css: { clip: Z.resize.clip(h, m, m.clip.max) },
                              },
                              m.timeline.textoutstart
                            ),
                          (Z.transitions.layers.timeline.shouldRestart = !0)),
                        m.textOutNodesTo.color &&
                          (m.textOutNodesFrom.color = m.original.color),
                        -1 !== m.textOut.startAt.indexOf("slidechangeonly") &&
                        (!m.is.static ||
                          (m.is.static &&
                            m.settings.slideOut === Z.slides.next.index))
                          ? (s.set(u, m.textOut.layerStyle, 0),
                            r.set(u, m.textOut.layerStyle, 0),
                            (p = new J.TimelineMax()).staggerFromTo(
                              m.textOut.nodes,
                              m.textOut.duration,
                              m.textOutNodesFrom,
                              m.textOutNodesTo,
                              m.textOut.shiftNodes,
                              0
                            ),
                            p.timeScale(
                              p.duration() / Z.o.forceLayersOutDuration
                            ),
                            s.add(p, 0),
                            s.to(
                              f[0],
                              0,
                              m.reset.wrapperOnTimelineEnd,
                              Z.o.forceLayersOutDuration
                            ),
                            (p = new J.TimelineMax()).staggerFromTo(
                              m.textOut.nodesMirror,
                              m.textOut.duration,
                              m.textOutNodesFrom,
                              I,
                              m.textOut.shiftNodes,
                              0
                            ),
                            p.timeScale(
                              p.duration() / Z.o.forceLayersOutDuration
                            ),
                            r.add(p, 0))
                          : (i.set(
                              u,
                              m.textOut.layerStyle,
                              m.timeline.textoutstart
                            ),
                            i.staggerFromTo(
                              m.textOut.nodes,
                              m.textOut.duration,
                              m.textOutNodesFrom,
                              m.textOutNodesTo,
                              m.textOut.shiftNodes,
                              m.timeline.textoutstart
                            ),
                            s.to(
                              f[0],
                              Z.o.forceLayersOutDuration,
                              { opacity: 0 },
                              0
                            ),
                            r.to(
                              f[0],
                              Z.o.forceLayersOutDuration,
                              { opacity: 0 },
                              0
                            ),
                            s.to(
                              f[0],
                              0,
                              m.reset.wrapperOnTimelineEnd,
                              Z.o.forceLayersOutDuration
                            )),
                        r.to(
                          f[0],
                          0,
                          m.reset.wrapperOnTimelineEnd,
                          Z.o.forceLayersOutDuration
                        )),
                        m.out.enabled &&
                          (Z.resize.performTransformOperations(
                            m.inLayerToCSS,
                            m.outLayerToCSS
                          ),
                          Z.resize.transformProperties(
                            h,
                            m,
                            m.outLayerToCSS,
                            m.outLayerShouldBeConverted,
                            m.outLayerFromCSS
                          ),
                          Z.resize.styleProperties(
                            m,
                            m.outLayerStyleFromCSS,
                            m.outLayerStyleShouldBeConvertedFrom
                          ),
                          Z.resize.styleProperties(
                            m,
                            m.outLayerStyleToCSS,
                            m.outLayerStyleShouldBeConvertedTo
                          ),
                          (m.outLayerFromCSS.transformPerspective =
                            m.transformPerspective.layer *
                            m.settings.calculatedratio),
                          m.out.mirror &&
                            (Z.resize.performTransformOperations(
                              m.inLayerToCSS,
                              C
                            ),
                            Z.resize.mirrorTransitionProperties({
                              transitionProperties: C,
                              transitionPropertiesShouldBeConverted: O,
                              transitionType: "normal",
                              mirrorProperties: m.out.mirror,
                            }),
                            Z.resize.transformProperties(
                              h,
                              m,
                              C,
                              O,
                              m.outLayerFromCSS
                            )),
                          "slidechangeonly" !== m.out.startAt
                            ? ((m.settings.timelineIsCalculated &&
                                !m.is.static) ||
                                (m.is.static
                                  ? ((m.timeline.staticfrom = 0),
                                    (m.timeline.transitionoutstart =
                                      this.getTiming(
                                        m,
                                        m.out.startAt,
                                        "transitionoutstart",
                                        !0
                                      )),
                                    (m.timeline.staticto =
                                      m.timeline.transitionoutstart))
                                  : (m.timeline.transitionoutstart = Math.max(
                                      this.getTiming(
                                        m,
                                        m.out.startAt,
                                        "transitionoutstart"
                                      ),
                                      m.timeline.transitioninend
                                    )),
                                (m.timeline.transitionoutend =
                                  m.timeline.transitionoutstart +
                                  m.out.duration)),
                              m.clip.enabled &&
                                (void 0 === m.outClipShouldBeConverted.clip
                                  ? i.to(
                                      g[0],
                                      0,
                                      {
                                        immediateRender: !1,
                                        css: {
                                          clip: Z.resize.clip(h, m, m.clip.max),
                                        },
                                      },
                                      m.timeline.transitionoutstart
                                    )
                                  : ((m.outClipToCSS.clip = Z.resize.clip(
                                      h,
                                      m,
                                      m.outClipShouldBeConverted.clip,
                                      !0
                                    )),
                                    i.to(
                                      g[0],
                                      m.out.duration,
                                      m.outClipTo,
                                      m.timeline.transitionoutstart
                                    )),
                                (Z.transitions.layers.timeline.shouldRestart =
                                  !0)),
                              te.isEmptyObject(m.filter.values.out) ||
                                (m.filter.transitions.out ||
                                  (m.filter.transitions.out =
                                    Z.transitions.layers.filters.createTransition(
                                      m,
                                      "out",
                                      te.isEmptyObject(
                                        m.filter.values.afterLoop
                                      )
                                        ? te.isEmptyObject(
                                            m.filter.values.afterIn
                                          )
                                          ? m.filter.values.style
                                          : m.filter.values.afterIn
                                        : m.filter.values.afterLoop,
                                      m.filter.values.out
                                    )),
                                i.to(
                                  [{ p: 0 }, u],
                                  m.out.duration,
                                  {
                                    p: 1,
                                    autoCSS: !1,
                                    ease: m.outLayerTo.ease,
                                    onUpdate:
                                      Z.transitions.layers.filters.animate,
                                    onUpdateParams: [
                                      "{self}",
                                      m.filter.transitions.out,
                                    ],
                                  },
                                  m.timeline.transitionoutstart
                                )),
                              (m.outLayerStyleTo.onComplete = function (e, t) {
                                t.is.mediaLayer &&
                                  t.mediaProperties.$media[0].hasAttribute(
                                    "data-ls-playing"
                                  ) &&
                                  Z.media.functions.stopSingleMedia(e, t);
                              }),
                              (m.outLayerStyleTo.onCompleteParams = [h, m]),
                              i.fromTo(
                                f[0],
                                m.out.duration,
                                m.outLayerFrom,
                                m.outLayerTo,
                                m.timeline.transitionoutstart
                              ),
                              i.fromTo(
                                u,
                                m.out.duration,
                                m.outLayerStyleFrom,
                                m.outLayerStyleTo,
                                m.timeline.transitionoutstart
                              ),
                              i.fromTo(
                                f[0],
                                0,
                                m.init.wrapper,
                                m.reset.wrapperOnTimelineEnd,
                                m.timeline.transitionoutend
                              ))
                            : ((m.timeline.staticfrom = 0),
                              (m.timeline.staticto = "100%")),
                          (p = Math.min(
                            Z.o.forceLayersOutDuration,
                            m.out.duration
                          )),
                          (!m.is.static ||
                            (m.is.static &&
                              m.settings.slideOut === Z.slides.next.index)) &&
                            (s.fromTo(f[0], p, m.outLayerFrom, m.outLayerTo, 0),
                            s.fromTo(
                              u,
                              p,
                              m.outLayerStyleFrom,
                              m.outLayerStyleTo,
                              0
                            ),
                            r.fromTo(
                              f[0],
                              p,
                              m.outLayerFrom,
                              m.out.mirror ? k : m.outLayerTo,
                              0
                            ),
                            r.fromTo(
                              u,
                              p,
                              m.outLayerStyleFrom,
                              m.outLayerStyleTo,
                              0
                            ),
                            m.clip.enabled &&
                              void 0 !== m.outClipShouldBeConverted.clip &&
                              ((m.outClipToCSS.clip = Z.resize.clip(
                                h,
                                m,
                                m.outClipShouldBeConverted.clip,
                                !0
                              )),
                              s.to(g[0], p, m.outClipTo, 0),
                              r.to(g[0], p, m.outClipTo, 0)))),
                        (l = Math.max(m.timeline.alloutandloopend(), 0)),
                        (this.totalDuration = Math.max(this.totalDuration, l)),
                        (m.settings.timelineIsCalculated = !0);
                  }
              }
            },
            play: function () {
              Z.transitions._slideTimeline &&
                (Z.transitions._slideTimeline.play(),
                Z.functions.setStates(this, {
                  started: !0,
                  running: !0,
                  stopped: !1,
                  paused: !1,
                }));
            },
            pause: function (e) {
              e = te.isNumeric(e) ? e : 0.75;
              Z.transitions._slideTimeline &&
                (J.TweenMax.to(Z.transitions._slideTimeline, e, {
                  timeScale: 0,
                }),
                Z.functions.setStates(this, { paused: !0, stopped: !1 }));
            },
            resume: function () {
              Z.transitions._slideTimeline &&
                (J.TweenMax.to(Z.transitions._slideTimeline, 0.75, {
                  timeScale: 1,
                }),
                Z.functions.setStates(this, { paused: !1, stopped: !1 }));
            },
            reverse: function () {
              Z.transitions._slideTimeline &&
                Z.transitions._slideTimeline.reverse();
            },
            scrollForward: function (e) {
              e || (this.play(), this.modifyTimeScale()),
                Z.transitions._slideTimeline &&
                  (Z.slider.isBusy() ||
                    (0 !== Z.transitions._slideTimeline.totalDuration() &&
                      1 !== Z.transitions._slideTimeline.progress()) ||
                    "down" !== Z.device.scroll.direction ||
                    ((Z.slideshow.direction = "next"),
                    (e = Z.slideshow.sequence.normalized).indexOf(
                      Z.slides.current.index
                    ) ===
                    e.length - 1
                      ? ((Z.slider.positionToViewport = "under"),
                        Z.device.scroll.enable(),
                        (Z.slideshow.direction = "prev"))
                      : Z.navigation.next()));
            },
            scrollBackwards: function (e, t) {
              (e && !t) || (this.reverse(), this.modifyTimeScale()),
                Z.transitions._slideTimeline &&
                  (Z.slider.isBusy() ||
                    (0 !== Z.transitions._slideTimeline.totalDuration() &&
                      0 !== Z.transitions._slideTimeline.progress()) ||
                    "up" !== Z.device.scroll.direction ||
                    ((Z.slideshow.direction = "prev"),
                    0 ===
                    Z.slideshow.sequence.normalized.indexOf(
                      Z.slides.current.index
                    )
                      ? ((Z.slider.positionToViewport = "over"),
                        Z.device.scroll.enable(),
                        (Z.slideshow.direction = "next"))
                      : Z.navigation.prev()));
            },
            modifyTimeScale: function () {
              Z.transitions._slideTimeline &&
                J.TweenMax.to(Z.transitions._slideTimeline, 0.25, {
                  timeScale: 1 + this.timeScaleModifier,
                });
            },
            resetStates: function () {
              this.state = {
                started: !1,
                running: !1,
                paused: !1,
                stopped: !1,
                finished: !1,
              };
            },
          },
          hover: {
            enable: function (e) {
              e.attr("data-ls-canhover", "1");
            },
            disable: function (e) {
              e.attr("data-ls-canhover", "0");
            },
            set: function (e, t) {
              t.elements.$wrapper.on("mouseenter." + B, function () {
                Z.transitions.layers.hover.mouseEnter(e, t);
              }),
                t.elements.$wrapper.on("mouseleave." + B, function () {
                  Z.transitions.layers.hover.mouseLeave(e, t);
                }),
                t.elements.$wrapper.on("mousemove." + B, function () {
                  Z.transitions.layers.hover.mouseMove(e, t);
                });
            },
            createTimeline: function (e, t) {
              var i, s, a;
              (t.hover._timeline = new J.TimelineMax({
                paused: !0,
                onReverseComplete: function (e, t) {
                  t.hover._timeline._reversed &&
                    (t.hover._timeline.stop().clear(),
                    delete t.hover._timeline);
                },
                onReverseCompleteParams: [e, t],
              })),
                Z.resize.transformProperties(
                  e,
                  t,
                  t.hoverToCSS,
                  t.hoverShouldBeConverted,
                  t.hoverFromCSS
                ),
                Z.resize.styleProperties(
                  t,
                  t.hoverToCSS,
                  t.hoverShouldBeConverted
                ),
                (t.hoverFromCSS.transformPerspective =
                  t.transformPerspective.hover * t.settings.calculatedratio),
                (t.hover._tween = J.TweenMax.fromTo(
                  e[0],
                  t.hover.durationIn,
                  t.hoverFrom,
                  t.hoverTo
                )),
                t.hover._timeline.add(t.hover._tween, 0),
                e.next().is(".ls-layer-link")
                  ? ((i = e.next()),
                    (s = te.extend(!0, {}, t.hoverFrom, {
                      css: {
                        opacity: 1,
                        color: "transparent",
                        background: "transparent",
                        z: 0,
                      },
                    })),
                    (a = te.extend(!0, {}, t.hoverTo, {
                      css: {
                        opacity: 1,
                        color: "transparent",
                        background: "transparent",
                        z: 0,
                      },
                    })),
                    (t.hover._linkTween = J.TweenMax.fromTo(
                      i[0],
                      t.hover.durationIn,
                      s,
                      a
                    )),
                    t.hover._timeline.add(t.hover._linkTween, 0))
                  : (t.hover._linkTween = null),
                t.hover.alwaysOnTop &&
                  ((a = { zIndex: 9999 }),
                  Z.browser.isSafari && (a.transform = "translateZ(999999px)"),
                  t.hover._timeline.to(
                    t.elements.$outerWrapper[0],
                    t.hover.durationIn,
                    { autoCSS: !1, css: a },
                    0
                  )),
                (t.hover.reverseTimeScale =
                  t.hover.durationIn / t.hover.durationOut == 1
                    ? 1
                    : t.hover.durationIn / t.hover.durationOut),
                this.hoverIn(e, t);
            },
            mouseEnter: function (e, t) {
              "1" === e.attr("data-ls-canhover") &&
                (e.attr("data-ls-hovered", 1),
                t.elements.$wrapper.off("mousemove." + B),
                t.hover._timeline
                  ? (t.hover._timeline.play().stop().progress(0),
                    this.hoverIn(e, t))
                  : this.createTimeline(e, t));
            },
            mouseLeave: function (e, t) {
              t.hover._timeline &&
                (t.hover._timeline.stop().progress(1), this.hoverOut(e, t)),
                e.removeAttr("data-ls-hovered");
            },
            mouseMove: function (e, t) {
              e.attr("data-ls-hovered") || this.mouseEnter(e, t);
            },
            hoverIn: function (e, t) {
              t.hover._tween.updateTo({ ease: t.hover.easeIn }),
                t.hover._linkTween &&
                  t.hover._linkTween.updateTo({ ease: t.hover.easeIn }),
                t.hover._timeline.play().timeScale(1);
            },
            hoverOut: function (e, t) {
              t.hover._tween.updateTo({ ease: t.hover.easeOut }),
                t.hover._linkTween &&
                  t.hover._linkTween.updateTo({ ease: t.hover.easeOut }),
                t.hover._timeline.reverse().timeScale(t.hover.reverseTimeScale);
            },
          },
          parallax: {
            defaultProperties: {
              type: "2d",
              event: "cursor",
              path: "circle",
              direction: "clockwise",
              duration: 5,
              count: -1,
              startAt: "slidestart",
              x: !0,
              y: !0,
              rotation: 10,
              distance: 10,
              durationMove: 1.5,
              durationLeave: 1.2,
              transformOrigin: "slidercenter slidermiddle 0",
              transformPerspective: 500,
            },
            defaults: {
              scrollModifier: 5,
              centerLayers: "center",
              centerDegree: 40,
              sensitive: 10,
            },
            state: { enabled: !1, ready: !1 },
            wrappers: {
              cursor: { $2d: te(), $3d: te() },
              scroll: { $2d: te(), $3d: te() },
              auto: { $2d: te(), $3d: te() },
            },
            init: function () {
              var t = this;
              $.on("mouseenter." + B, function () {
                (t.wrappers.cursor.$2d.length ||
                  t.wrappers.cursor.$3d.length) &&
                  t.calculateTransformProperties();
              }),
                $.on("mousemove." + B, function (e) {
                  (t.wrappers.cursor.$2d.length ||
                    t.wrappers.cursor.$3d.length) &&
                    t.mouseMove(e);
                }),
                $.on("mouseleave." + B, function () {
                  (t.wrappers.cursor.$2d.length ||
                    t.wrappers.cursor.$3d.length) &&
                    t.reset();
                }),
                W.on(
                  "scroll.parallax" + B + " touchmove.parallax" + B,
                  function () {
                    (t.wrappers.scroll.$2d.length ||
                      t.wrappers.scroll.$3d.length) &&
                      (t.state.paused || t.scroll());
                  }
                ),
                W.on("resize.parallax" + B, function () {
                  (t.wrappers.auto.$2d.length ||
                    t.wrappers.auto.$3d.length ||
                    t.wrappers.scroll.$2d.length ||
                    t.wrappers.scroll.$3d.length ||
                    t.wrappers.cursor.$2d.length ||
                    t.wrappers.cursor.$3d.length) &&
                    t.calculateTransformProperties();
                }),
                (t.defaults.scrollModifier *= Z.o.parallaxScrollReverse
                  ? -1
                  : 1);
            },
            addLayer: function (e, t, i, s) {
              switch (
                (this.state.enabled ||
                  (Z.functions.setStates(this, { enabled: !0 }), this.init()),
                te.extend(
                  !0,
                  t,
                  this.defaultProperties,
                  Z.slides[s].parallax,
                  i.parallax
                ),
                i.transformPerspective.parallax
                  ? (t.transformPerspective = i.transformPerspective.parallax)
                  : (i.transformPerspective.parallax = t.transformPerspective),
                t.event.match(/(cursor|scroll|auto)/) || (t.event = "cursor"),
                t.path.match(
                  /(circle|oval-h|oval-v|infinity|linear-h|linear-v)/
                ) || (t.path = "circle"),
                t.direction.match(/(clockwise|counterclockwise)/) ||
                  (t.direction = "clockwise"),
                t.type.match(/(2d,3d)/) && (t.type = "2d"),
                (i.parallax = t).axis)
              ) {
                case "none":
                  (t.x = !1), (t.y = !1);
                  break;
                case "x":
                  t.y = !1;
                  break;
                case "y":
                  t.x = !1;
              }
              this.wrappers[t.event]["$" + t.type] =
                this.wrappers[t.event]["$" + t.type].add(e);
            },
            addShadow: function () {
              var e,
                t,
                i,
                s = Z.gui.shadow.$element,
                a = (
                  Z.slides.current && Z.slides.current.parallax
                    ? Z.slides.current
                    : Z.slides.next
                ).index;
              Z.slides[a].data.$background &&
                Z.slides[a].data.$background.data(Z.defaults.init.dataKey)
                  .parallax.enabled &&
                Z.slides[a].data.overflow &&
                "hidden" !== Z.slides[a].data.overflow &&
                ((e = "50% -" + 0.25 * Z.slider.height + "px 0"),
                (i =
                  void 0 !==
                  (t = Z.slides[a].data.$background.data(
                    Z.defaults.init.dataKey
                  ).parallax).rotation
                    ? 2 * t.rotation
                    : void 0 !== Z.slides[a].parallax.rotation
                    ? 2 * Z.slides[a].parallax.rotation
                    : 2 * this.defaultProperties.rotation),
                s.data(Z.defaults.init.dataKey, {
                  parallax: te.extend(
                    !0,
                    {},
                    this.defaultProperties,
                    Z.slides[a].parallax,
                    { level: t.level, transformOrigin: e, rotation: i }
                  ),
                }),
                s.attr("data-ls-parallax", "active"),
                J.TweenMax.set(s[0], {
                  transformOrigin: e,
                  transformPerspective:
                    s.data(Z.defaults.init.dataKey).parallax
                      .transformPerspective * Z.resize.ratio,
                }),
                "3d" === Z.slides[a].parallax.type || "3d" === t.type
                  ? (this.wrappers.cursor.$3d = this.wrappers.cursor.$3d.add(s))
                  : (this.wrappers.cursor.$2d =
                      this.wrappers.cursor.$2d.add(s))),
                (this.shadowIsChecked = !0);
            },
            removeShadow: function () {
              var e = Z.gui.shadow.$element;
              (this.wrappers.cursor.$2d = this.wrappers.cursor.$2d.not(e)),
                (this.wrappers.cursor.$3d = this.wrappers.cursor.$3d.not(e)),
                e.attr("data-ls-parallax", "disabled"),
                (this.shadowIsChecked = !1);
            },
            calculateTransformProperties: function () {
              te()
                .add(this.wrappers.cursor.$2d)
                .add(this.wrappers.cursor.$3d)
                .add(this.wrappers.scroll.$2d)
                .add(this.wrappers.scroll.$3d)
                .add(this.wrappers.auto.$2d)
                .add(this.wrappers.auto.$3d)
                .each(function () {
                  var e = te(this),
                    t = e.data(Z.defaults.init.dataKey).parallax,
                    i = e.find(".ls-layer"),
                    s = i.data(Z.defaults.init.dataKey);
                  J.TweenMax.set(te(this)[0], {
                    transformOrigin: Z.functions.convert.transformOrigin(
                      t.transformOrigin,
                      i.data(Z.defaults.init.dataKey).elements.$wrapper,
                      s,
                      e
                    ),
                    transformPerspective:
                      t.transformPerspective * s.settings.calculatedratio,
                  });
                }),
                (this.transformPropertiesCalculated = !0);
            },
            trigger: function () {
              W.trigger("scroll.parallax" + B),
                W.trigger("touchmove.parallax" + B);
            },
            auto: function () {
              this.transformPropertiesCalculated ||
                this.calculateTransformProperties();
            },
            scroll: function () {
              var e =
                (("top" === this.defaults.centerLayers
                  ? ee.scroll.top
                  : ee.scroll.top +
                    (ee.viewport.height - Z.slider.height) / 2) -
                  Z.slider.offset.top) *
                Z.resize.ratio *
                this.defaults.scrollModifier;
              Z.slider.state.inFullscreen && (e = 0),
                this.transformPropertiesCalculated ||
                  this.calculateTransformProperties(),
                this.animate2D(0, e, "scroll"),
                this.animate3D(0, e, "scroll");
            },
            mouseMove: function (e) {
              var t, i;
              this.transformPropertiesCalculated
                ? (Z.slider.state.animatingSlides ||
                    this.shadowIsChecked ||
                    !Z.gui.shadow.$element ||
                    this.addShadow(),
                  (t = Z.slider.offset.left + Z.slider.width / 2),
                  (i = Z.slider.offset.top + Z.slider.height / 2),
                  (t = e.pageX - t),
                  (i = e.pageY - i),
                  this.animate2D(t, i, "cursor"),
                  this.animate3D(t, i, "cursor"))
                : this.calculateTransformProperties();
            },
            animate2D: function (a, r, e) {
              this.wrappers[e].$2d.each(function () {
                var e,
                  t,
                  i,
                  s = te(this);
                "active" === s.attr("data-ls-parallax") &&
                  ((t = (e = s.data(Z.defaults.init.dataKey).parallax).x
                    ? -a * (e.distance / 2e3) * parseInt(e.level)
                    : 0),
                  (i = e.y ? -r * (e.distance / 2e3) * parseInt(e.level) : 0),
                  J.TweenMax.to(s[0], e.durationMove, { x: t, y: i }));
              });
            },
            animate3D: function (o, n, e) {
              this.wrappers[e].$3d.each(function () {
                var e,
                  t,
                  i,
                  s,
                  a,
                  r = te(this);
                "active" === r.attr("data-ls-parallax") &&
                  ((s = (e = r.data(Z.defaults.init.dataKey).parallax).x
                    ? ((i = -o / (4e3 / e.rotation)),
                      -o * (e.distance / 2e3) * parseInt(e.level))
                    : (i = 0)),
                  (a = e.y
                    ? ((t = n / (4e3 / e.rotation)),
                      -n * (e.distance / 2e3) * parseInt(e.level))
                    : (t = 0)),
                  J.TweenMax.to(r[0], e.durationMove, {
                    rotationX: t,
                    rotationY: i,
                    x: s,
                    y: a,
                  }));
              });
            },
            reset: function () {
              te()
                .add(this.wrappers.cursor.$2d)
                .add(this.wrappers.cursor.$3d)
                .each(function () {
                  var e = te(this);
                  "active" === e.attr("data-ls-parallax")
                    ? J.TweenMax.to(
                        e[0],
                        te(this).data(Z.defaults.init.dataKey).parallax
                          .durationLeave,
                        { x: 0, y: 0, rotationX: 0, rotationY: 0 }
                      )
                    : J.TweenMax.set(e[0], {
                        x: 0,
                        y: 0,
                        rotationX: 0,
                        rotationY: 0,
                      });
                }),
                Z.gui.shadow.$element && this.removeShadow(),
                (this.transformPropertiesCalculated = !1);
            },
          },
          scroll: {
            defaultProperties: {
              shouldBeConverted: { transformOrigin: "50% 50% 0" },
              transformPerspective: 500,
              duration: 0.5,
            },
            defaults: { centerLayers: "center" },
            state: { enabled: !1 },
            $wrappers: te(),
            init: function () {
              var e = this;
              W.on("scroll.scroll" + B + " touchmove.scroll" + B, function () {
                e.$wrappers.length && e.scroll();
              }),
                W.on("resize.scroll" + B, function () {
                  e.$wrappers.length && e.calculateTransformProperties();
                });
            },
            addLayer: function (e, t, i, s) {
              this.state.enabled ||
                (Z.functions.setStates(this, { enabled: !0 }), this.init()),
                te.extend(!0, t, this.defaultProperties, i.scroll),
                i.transformPerspective.scroll
                  ? (t.transformPerspective = i.transformPerspective.scroll)
                  : (i.transformPerspective.scroll = t.transformPerspective),
                i.settings.skipViewport && (t.skipViewport = !0),
                (i.scroll = t),
                (this.$wrappers = this.$wrappers.add(e));
            },
            getCenter: function (e, t) {
              var i = "project";
              switch (
                ((((Z.slider.isScrollScene || Z.slider.isSticky) &&
                  "scene" === t) ||
                  "document" === t) &&
                  (i = t),
                e)
              ) {
                case "top":
                  switch (i) {
                    case "scene":
                      e =
                        Z.slider.wrapperPosition.top -
                        (ee.viewport.height - Z.slider.height) / 2;
                      break;
                    case "document":
                    default:
                      e = ee.scroll.top;
                  }
                  break;
                case "center":
                  switch (i) {
                    case "scene":
                      e = Z.slider.wrapperPosition.middleForScrollTransition;
                      break;
                    case "document":
                      e = ee.scroll.top;
                      break;
                    default:
                      e =
                        ee.scroll.top +
                        (ee.viewport.height - Z.slider.height) / 2;
                  }
                  break;
                case "bottom":
                  switch (i) {
                    case "scene":
                      e =
                        Z.slider.wrapperPosition.top +
                        Z.slider.wrapperOffset.height -
                        ee.viewport.height +
                        (ee.viewport.height - Z.slider.height) / 2;
                      break;
                    case "document":
                      e = ee.scroll.top;
                      break;
                    default:
                      e = ee.scroll.top + ee.viewport.height - Z.slider.height;
                  }
              }
              return e;
            },
            scroll: function (o) {
              var n,
                l = this,
                d = this.getCenter(this.defaults.centerLayers);
              this.transformPropertiesCalculated ||
                this.calculateTransformProperties(),
                this.$wrappers.each(function () {
                  var e,
                    t,
                    i,
                    s = te(this),
                    a = s.find(".ls-scroll-transform"),
                    r = s.data(Z.defaults.init.dataKey).scroll;
                  ((-1 !==
                    Z.slider.position.toViewportYForSkipViewportLayers.indexOf(
                      "inside"
                    ) &&
                    r.skipViewport) ||
                    !l.state.paused) &&
                    ((n =
                      "project" !== r.getPosition ||
                      (r.center && l.defaults.centerLayers !== r.center)
                        ? l.getCenter(
                            r.center || l.defaults.centerLayers,
                            r.getPosition
                          )
                        : d),
                    (e =
                      (Z.slider.isScrollScene || Z.slider.isSticky) &&
                      "scene" === r.getPosition
                        ? -n
                        : "document" === r.getPosition
                        ? n
                        : Z.slider.state.inFullscreen
                        ? 0
                        : n - Z.slider.offset.top),
                    (t = { overwrite: "all" }),
                    (i = { overwrite: "all" }),
                    r.x &&
                      (i.x = l.calculateTransformations(
                        (-e * r.x) / 20,
                        "x",
                        r,
                        -e
                      )),
                    r.y &&
                      (i.y = l.calculateTransformations(
                        (-e * r.y) / 20,
                        "y",
                        r,
                        -e
                      )),
                    r.rotation &&
                      (i.rotation = l.calculateTransformations(
                        (e * r.rotation) / 40,
                        "rotation",
                        r,
                        -e
                      )),
                    r.rotationX &&
                      (i.rotationX = l.calculateTransformations(
                        (e * r.rotationX) / 40,
                        "rotationX",
                        r,
                        -e
                      )),
                    r.rotationY &&
                      (i.rotationY = l.calculateTransformations(
                        (e * r.rotationY) / 40,
                        "rotationY",
                        r,
                        -e
                      )),
                    r.skewX &&
                      (i.skewX = l.calculateTransformations(
                        (-e * r.skewX) / 40,
                        "skewX",
                        r,
                        -e
                      )),
                    r.skewY &&
                      (i.skewY = l.calculateTransformations(
                        (-e * r.skewY) / 40,
                        "skewY",
                        r,
                        -e
                      )),
                    r.scaleX &&
                      (i.scaleX = l.calculateTransformations(
                        1 - (e * r.scaleX) / -4e3,
                        "scaleX",
                        r,
                        e
                      )),
                    r.scaleY &&
                      (i.scaleY = l.calculateTransformations(
                        1 - (e * r.scaleY) / -4e3,
                        "scaleY",
                        r,
                        e
                      )),
                    r.opacity &&
                      (i.opacity = l.calculateTransformations(
                        1 -
                          (e *
                            (r.opacityyoyo ? Math.abs(r.opacity) : r.opacity)) /
                            1e3,
                        "opacity",
                        r,
                        e
                      )),
                    o || 0 == r.duration
                      ? (J.TweenMax.set(s[0], t), J.TweenMax.set(a[0], i))
                      : (J.TweenMax.to(s[0], r.duration, t),
                        J.TweenMax.to(a[0], r.duration, i)));
                });
            },
            calculateTransformations: function (e, t, i, s) {
              if (i[t + "yoyo"])
                switch (t) {
                  case "scaleX":
                  case "scaleY":
                    s < 0 && (e = 1 - (e - 1));
                    break;
                  case "opacity":
                    s < 1 && (e = 1 - (e - 1));
                    break;
                  default:
                    s < 1 && (e = -e);
                }
              return (
                "opacity" == t && i.opacityinvert && (e = 1 - e),
                void 0 !== i[t + "min"] &&
                  e < i[t + "min"] &&
                  (e = i[t + "min"]),
                void 0 !== i[t + "max"] &&
                  e > i[t + "max"] &&
                  (e = i[t + "max"]),
                (("x" === t && i.xresponsive) ||
                  ("y" === t && i.yresponsive)) &&
                  (e *= Z.resize.ratio),
                e
              );
            },
            calculateTransformProperties: function () {
              this.$wrappers.each(function () {
                var e = te(this).data(Z.defaults.init.dataKey).scroll,
                  t = te(this).find(".ls-layer"),
                  i = t.data(Z.defaults.init.dataKey);
                J.TweenMax.set(te(this).find(".ls-scroll-transform")[0], {
                  transformOrigin: Z.functions.convert.transformOrigin(
                    e.shouldBeConverted.transformOrigin,
                    te(this),
                    i,
                    t
                  ),
                  transformPerspective:
                    e.transformPerspective * i.settings.calculatedratio,
                });
              }),
                (this.transformPropertiesCalculated = !0);
            },
            trigger: function () {
              this.scroll(!0);
            },
            reset: function () {
              this.transformPropertiesCalculated = !1;
            },
          },
          filters: {
            createTransition: function (e, t, i, s) {
              var a,
                r = new Z.defaults.layer.properties.filter(),
                o = {};
              for (a in r)
                switch (t) {
                  case "in":
                    (o[a] = [r[a], r[a]]),
                      (o[a][0] = (
                        i.hasOwnProperty(a) ? i : s.hasOwnProperty(a) ? s : r
                      )[a]),
                      (o[a][1] = (s.hasOwnProperty(a) ? s : r)[a]),
                      (e.filter.values.afterIn[a] = o[a][1]);
                    break;
                  case "hover":
                  case "loop":
                  case "out":
                    (o[a] = []),
                      (o[a][0] = (i.hasOwnProperty(a) ? i : r)[a]),
                      (o[a][1] = (
                        s.hasOwnProperty(a)
                          ? s
                          : i.hasOwnProperty(a) && i[a] !== r[a]
                          ? i
                          : r
                      )[a]),
                      "loop" === t &&
                        !0 !== e.loop.yoyo &&
                        -1 !== e.loop.count &&
                        (e.filter.values.afterLoop[a] = o[a][1]);
                    break;
                  case "bg":
                    (o[a] = [r[a], r[a]]),
                      i.hasOwnProperty(a) && (o[a][0] = i[a]),
                      s.hasOwnProperty(a) && (o[a][1] = s[a]);
                }
              return o;
            },
            convert: function (e) {
              for (
                var t,
                  i,
                  s = {},
                  a =
                    /(blur|brightness|contrast|grayscale|hue-rotate|invert|saturate|sepia)/i,
                  r = 0,
                  o = (e = e.split(" ")).length;
                r < o;
                r++
              )
                (t = (i = e[r].split("("))[0]).match(a) &&
                  ((i = parseInt(i[1])), (s[t] = i));
              return s;
            },
            animate: function (e, t) {
              var i = 100 * e.target[0].p;
              if ("object" == typeof t) {
                var s,
                  a = "";
                for (s in t)
                  if ("object" == typeof t[s] && 2 === t[s].length)
                    switch (s) {
                      case "blur":
                        a +=
                          " blur( " +
                          (t[s][0] < t[s][1]
                            ? t[s][0] + (Math.abs(t[s][0] - t[s][1]) / 100) * i
                            : t[s][0] -
                              (Math.abs(t[s][0] - t[s][1]) / 100) * i) +
                          "px )";
                        break;
                      case "hue-rotate":
                        a +=
                          " hue-rotate( " +
                          (t[s][0] < t[s][1]
                            ? t[s][0] + (Math.abs(t[s][0] - t[s][1]) / 100) * i
                            : t[s][0] -
                              (Math.abs(t[s][0] - t[s][1]) / 100) * i) +
                          "deg )";
                        break;
                      default:
                        a +=
                          " " +
                          s +
                          "( " +
                          (t[s][0] < t[s][1]
                            ? t[s][0] + (Math.abs(t[s][0] - t[s][1]) / 100) * i
                            : t[s][0] -
                              (Math.abs(t[s][0] - t[s][1]) / 100) * i) +
                          "% )";
                    }
                J.TweenMax.set(e.target, { "-webkit-filter": a, filter: a });
              }
            },
          },
          splitType: {
            setNodesSequence: function (e, o) {
              function t(e, t) {
                if ("desc" == t) e = o.slice(0).reverse();
                else if ("rand" == t)
                  e = o.slice(0).sort(function () {
                    return 0.5 - Math.random();
                  });
                else if ("center" == t) {
                  var i,
                    s = Math.floor(o.length / 2);
                  for (e = [o[s]], i = 1; i <= s; i++)
                    e.push(o[s - i], o[s + i]);
                  e.length = o.length;
                } else if ("edge" == t) {
                  var a,
                    r = Math.floor(o.length / 2);
                  for (e = [o[0]], a = 1; a <= r; a++)
                    e.push(o[o.length - a], o[a]);
                  e.length = o.length;
                }
                return e || o;
              }
              var i = t(o, e[1]),
                e = { asc: "desc", desc: "asc" }[e[1]] || e[1];
              return [i, t(o, e)];
            },
            resetNodes: function (e, t) {
              te(".char, .word, .line", e)
                .add(t.elements.$wrapper)
                .css({ transform: "none", opacity: 1 })
                .each(function () {
                  delete this._gsTransform;
                });
            },
            setRandomProperties: function (e, t, i, s) {
              for (var a in t) {
                for (
                  var r = [], o = 0, n = e["text" + s].nodes.length;
                  o < n;
                  o++
                )
                  r[o] = Z.functions.convert.randomProperties(t[a], a);
                delete i[a], (i.cycle[a] = r);
              }
              t = null;
            },
          },
        },
        media: {
          defaults: { delay: 500, fadeIn: 500, fadeOut: 750 },
          changeBackgroundVideo: function (e, t) {
            var i, s, a, r;
            Z.slides.current.index &&
              Z.slides.current.data.$backgroundVideo.length &&
              ((r = (i = Z.slides.current.data.$backgroundVideo).data(
                Z.defaults.init.dataKey
              ).elements.$bgWrapper),
              t &&
                ((i.data(Z.defaults.init.dataKey).mediaProperties.willBePaused =
                  !0),
                r.fadeOut(Z.transitions.media.defaults.fadeOut, function () {
                  i.trigger("stopBackgroundVideo"),
                    (i.data(
                      Z.defaults.init.dataKey
                    ).mediaProperties.willBePaused = !1);
                }))),
              Z.slides.next.data.$backgroundVideo.length &&
                ((a = (s = Z.slides.next.data.$backgroundVideo).data(
                  Z.defaults.init.dataKey
                ).elements.$bgWrapper),
                (r = s.data(Z.defaults.init.dataKey).elements.$bgOuterWrapper),
                (ee.isMobile &&
                  (($.hasClass("ls-device-is-phone") &&
                    r.hasClass("ls-hide-on-phone")) ||
                    ($.hasClass("ls-device-is-tablet") &&
                      r.hasClass("ls-hide-on-tablet")))) ||
                  setTimeout(
                    function () {
                      s.trigger("playBackgroundVideo");
                    },
                    e ? 50 : 0
                  ),
                e || t
                  ? a.fadeIn(Z.transitions.media.defaults.fadeOut)
                  : a.css({ display: "block" }),
                (s.data(Z.defaults.init.dataKey).mediaProperties.isPreloaded =
                  !0));
          },
        },
        timers: {
          defaults: { fadeInDuration: 0.35, reverseDuration: 0.3 },
          create: function (e) {
            (this.curNext = e || "next"),
              this.reset(),
              Z.gui.timers.bar.$element && this.bar.createTransition(),
              Z.gui.timers.circle.$element && this.circle.createTransition(),
              Z.gui.timers.slidebar.$element &&
                this.slidebar.createTransition();
          },
          reverse: function () {
            var e;
            Z.slides.current &&
              Z.slides.current.data &&
              Z.transitions._slideTimeline &&
              ((e = Z.transitions._slideTimeline.progress()),
              (e =
                (Z.slides.current.data.duration * e) /
                this.defaults.reverseDuration),
              Z.gui.timers.bar.$element &&
                this.bar._transition &&
                (Z.transitions._slideTimeline.remove(
                  Z.transitions.timers.bar._transition
                ),
                this.bar._transition.reverse().timeScale(e)),
              Z.gui.timers.circle.$element &&
                this.circle._transition &&
                (Z.transitions._slideTimeline.remove(
                  Z.transitions.timers.circle._transition
                ),
                this.circle._transition.reverse().timeScale(e)),
              Z.gui.timers.slidebar.$element &&
                this.slidebar._transition &&
                (Z.transitions._slideTimeline.remove(
                  Z.transitions.timers.slidebar._transition
                ),
                this.slidebar._transition.reverse().timeScale(e)));
          },
          reset: function () {
            Z.gui.timers.bar.$element &&
              this.bar._transition &&
              this.bar.reset(),
              Z.gui.timers.circle.$element &&
                this.circle._transition &&
                this.circle.reset(),
              Z.gui.timers.slidebar.$element &&
                this.slidebar._transition &&
                this.slidebar.reset();
          },
          bar: {
            reset: function () {
              this._transition &&
                (this._transition.kill(), (this._transition = !1));
            },
            createTransition: function () {
              this._transition = J.TweenMax.fromTo(
                Z.gui.timers.bar.$element[0],
                Z.slides[Z.transitions.curNext].data.duration,
                { autoCSS: !1, paused: !0, css: { width: 0 } },
                {
                  autoCSS: !1,
                  css: {},
                  ease: J.Linear.easeNone,
                  onReverseComplete: function () {
                    Z.transitions.timers.bar._transition = !1;
                  },
                  onComplete: function (e) {
                    (e.target.style.width = "100%"),
                      (e.target.style.width =
                        "calc( 100% - " + Z.slider.initial.skinWidth + "px )");
                  },
                  onCompleteParams: ["{self}"],
                  onUpdate: function (e) {
                    e.target.style.width =
                      Math.min(Z.slider.width, Z.slider.width * e.progress()) +
                      "px";
                  },
                  onUpdateParams: ["{self}"],
                }
              );
            },
          },
          circle: {
            reset: function () {
              this._transition &&
                (Z.gui.timers.circle.$element.stop(!0, !0),
                this._transition.kill(),
                (this._transition = !1));
            },
            createTransition: function () {
              var e = Z.gui.timers.circle.$element.find(
                  ".ls-ct-right .ls-ct-rotate"
                )[0],
                t = Z.gui.timers.circle.$element.find(
                  ".ls-ct-left .ls-ct-rotate"
                )[0],
                i = Z.slides[Z.transitions.curNext].data.duration;
              this._transition = new J.TimelineMax({ paused: !0 })
                .fromTo(
                  Z.gui.timers.circle.$element[0],
                  Z.transitions.timers.defaults.fadeInDuration,
                  {
                    autoCSS: !1,
                    immediateRender: !0,
                    css: { opacity: 0, display: "block" },
                  },
                  {
                    autoCSS: !1,
                    css: {
                      opacity:
                        Z.gui.timers.circle.$element.data("original").opacity,
                    },
                  }
                )
                .fromTo(
                  e,
                  i / 2,
                  { autoCSS: !1, css: { rotation: 0 } },
                  {
                    autoCSS: !1,
                    css: { rotation: 180 },
                    ease: J.Linear.easeNone,
                  },
                  0
                )
                .fromTo(
                  t,
                  i / 2,
                  { autoCSS: !1, css: { rotation: 0 } },
                  {
                    autoCSS: !1,
                    css: { rotation: 180 },
                    ease: J.Linear.easeNone,
                  },
                  i / 2
                );
            },
          },
          slidebar: {
            reset: function () {
              this._transition &&
                (this._transition.kill(), (this._transition = !1));
            },
            createTransition: function () {
              var i = this;
              (i._transition = new J.TimelineMax({
                paused: !0,
                onReverseComplete: function () {
                  Z.transitions.timers.slidebar._transition = !1;
                },
              })),
                te.each(
                  Z.gui.timers.slidebar.$sliderContainerElement,
                  function (t, e) {
                    i._transition.add(
                      J.TweenMax.fromTo(
                        Z.gui.timers.slidebar.$sliderContainerElement[t][0],
                        Z.slides[Z.transitions.curNext].data.duration,
                        { autoCSS: !1, css: { left: 0 } },
                        {
                          autoCSS: !1,
                          css: {},
                          ease: J.Linear.easeNone,
                          onComplete: function (e) {
                            e.target.style.left =
                              "calc( 100% - " +
                              Z.gui.timers.slidebar.sliderContainerElementWidth[
                                t
                              ] +
                              "px )";
                          },
                          onCompleteParams: ["{self}"],
                          onUpdate: function (e) {
                            e.target.style.left =
                              (Z.gui.timers.slidebar.containerElementWidth[t] -
                                Z.gui.timers.slidebar
                                  .sliderContainerElementWidth[t]) *
                                e.progress() +
                              "px";
                          },
                          onUpdateParams: ["{self}"],
                        }
                      ),
                      0
                    ),
                      i._transition.add(
                        J.TweenMax.fromTo(
                          Z.gui.timers.slidebar.$progressBarElement[t][0],
                          Z.slides[Z.transitions.curNext].data.duration,
                          { autoCSS: !1, css: { width: 0 } },
                          {
                            autoCSS: !1,
                            css: {},
                            ease: J.Linear.easeNone,
                            onComplete: function (e) {
                              e.target.style.width = "100%";
                            },
                            onCompleteParams: ["{self}"],
                            onUpdate: function (e) {
                              e.target.style.width =
                                Z.gui.timers.slidebar.elementWidth[t] *
                                  e.progress() +
                                "px";
                            },
                            onUpdateParams: ["{self}"],
                          }
                        ),
                        0
                      );
                  }
                );
            },
          },
        },
        scrollscene: {
          animate: function (e) {
            var t, i;
            Z.transitions._slideTimeline &&
              ((t = Z.slider.wrapperOffset.height - Z.slider.height),
              (i =
                ee.scroll.top + this.stickLimit - Z.slider.wrapperOffset.top),
              (e = Math.max(1e-4, (Z.o.sceneDuration / t) * i)),
              (t = J.Quart.easeOut),
              (i =
                this.initialized && !this.immediateRender
                  ? Z.o.smoothScrollDuration / 1e3
                  : 0),
              Z.transitions._slideTimeline.tweenTo(e, { ease: t }).duration(i),
              (this.initialized = !0),
              (this.immediateRender = !1));
          },
        },
      }),
      (Z.plugins = {
        load: function () {
          var e, s;
          Z.o.plugins && 0 !== Z.o.plugins.length
            ? ((e = Z.o.plugins[0]),
              (s = "object" == typeof e ? e.namespace : e),
              window._layerSlider.plugins[s]
                ? (Z.plugins.init(s, e, !0), Z.plugins.load())
                : Z.browser.usesFileProtocol || "object" != typeof e
                ? (Z.browser.usesFileProtocol
                    ? window.console &&
                      (console.error(
                        Z.defaults.slider.errorText,
                        "Cannot load plugins on file:// protocol."
                      ),
                      console.info("Please include the plugin files manually."))
                    : window.console &&
                      (console.error(
                        Z.defaults.slider.errorText,
                        "Plugin files are missing!"
                      ),
                      console.info(
                        'Plugin "' +
                          s +
                          '" has been added in slider init options, but the source files are not found on page.'
                      )),
                  Z.o.plugins.splice(0, 1),
                  Z.plugins.load())
                : -1 === window._layerSlider.pluginsBeingLoaded.indexOf(s)
                ? -1 === window._layerSlider.pluginsLoaded.indexOf(s) &&
                  -1 === window._layerSlider.pluginsNotLoaded.indexOf(s)
                  ? (window._layerSlider.pluginsBeingLoaded.push(s),
                    te.ajax({
                      url:
                        -1 === e.js.indexOf("http://") &&
                        -1 === e.js.indexOf("https://")
                          ? (window._layerSlider.pluginsPath ||
                              window._layerSlider.scriptPath + "/../plugins/") +
                            e.js
                          : e.js,
                      dataType: "script",
                      success: function () {
                        Z.plugins.init(e.namespace, e, !0),
                          window._layerSlider.pluginsLoaded.push(s);
                      },
                      error: function (e, t, i) {
                        window.console &&
                          (console.error(
                            Z.defaults.slider.errorText,
                            s,
                            "plugin has not been loaded!"
                          ),
                          console.error("Additional error info:", i)),
                          window._layerSlider.pluginsNotLoaded.push(s);
                      },
                      complete: function () {
                        window._layerSlider.pluginsBeingLoaded.splice(
                          window._layerSlider.pluginsBeingLoaded.indexOf(s),
                          1
                        ),
                          Z.plugins.load();
                      },
                    }))
                  : (Z[s] ||
                    -1 !== window._layerSlider.pluginsNotLoaded.indexOf(s)
                      ? Z.o.plugins.splice(0, 1)
                      : Z.plugins.init(s, e),
                    Z.plugins.load())
                : Z.plugins.checkLoaded(s))
            : Z.slider.check.initialized();
        },
        init: function (e, t, i) {
          (Z.initializedPlugins[e] = new window._layerSlider.plugins[e](
            Z,
            $,
            B,
            t.settings
          )),
            window._layerSlider.checkVersions(
              Z.initializedPlugins[e].pluginData.requiredLSVersion,
              Z.plugin.version
            )
              ? (t.css &&
                  i &&
                  te(
                    '<link rel="stylesheet" href="' +
                      (-1 === t.css.indexOf("http://") &&
                      -1 === t.css.indexOf("https://")
                        ? (window._layerSlider.pluginsPath ||
                            window._layerSlider.scriptPath + "/../plugins/") +
                          t.css
                        : t.css) +
                      '">'
                  ).appendTo("head"),
                Z.initializedPlugins[e].init && Z.initializedPlugins[e].init())
              : window.console &&
                console.error(
                  Z.defaults.slider.errorText,
                  e,
                  "plugin has not been loaded! Required LayerSlider version:",
                  Z.initializedPlugins[e].pluginData.requiredLSVersion,
                  "(you have:",
                  Z.plugin.version + ")"
                ),
            Z.o.plugins.splice(0, 1);
        },
        checkLoaded: function (e) {
          Z.intervals.pluginLoaded = setInterval(function () {
            (-1 === window._layerSlider.pluginsLoaded.indexOf(e) &&
              -1 === window._layerSlider.pluginsNotLoaded.indexOf(e)) ||
              -1 !== window._layerSlider.pluginsBeingLoaded.indexOf(e) ||
              (clearInterval(Z.intervals.pluginLoaded),
              delete Z.intervals.pluginLoaded,
              Z.plugins.load());
          }, 100);
        },
      }),
      (Z.performance = {}),
      (Z.slider = {
        shouldResize: !0,
        thumbnails: [],
        state: {
          isHidden: !1,
          isPaused: !1,
          preloadingImages: !1,
          changingSlides: !1,
          animatingSlides: !1,
        },
        offset: {},
        position: {},
        isBusy: function () {
          return (
            this.state.preloadingImages ||
            this.state.changingSlides ||
            this.state.animatingSlides
          );
        },
        load: function () {
          if (!document.body.contains(I)) return !1;
          Z.api.hasEvent("sliderWillLoad") &&
            Z.api.triggerEvent("sliderWillLoad"),
            Z.slider.set.global();
        },
        set: {
          global: function () {
            var e;
            (Z.originalMarkup = $[0].outerHTML),
              (Z.userInitOptions = Z.functions.convert.properties(
                Z.functions.convert.oldProperties(i)
              )),
              (Z.meta = {}),
              (Z.o = te.extend(
                !0,
                {},
                Z.defaults.init.options,
                Z.userInitOptions
              )),
              (Z.o.forceLayersOutDuration /= 1e3),
              (Z.o.forceLayersOutDuration =
                0 < Z.o.forceLayersOutDuration
                  ? Z.o.forceLayersOutDuration
                  : 0.75),
              (Z.o.sliderFadeInDuration /= 1e3),
              window.console &&
                !0 !== Z.o.hideWelcomeMessage &&
                !0 !== window._layerSlider.hideWelcomeMessage &&
                ((window._layerSlider.hideWelcomeMessage = !0),
                (t = window.console.info ? "info" : "log"),
                (e =
                  window.LS_Meta && window.LS_Meta.v
                    ? " | WP Plugin: " + window.LS_Meta.v
                    : ""),
                console[t](
                  "LayerSlider initialized | core: " +
                    Z.plugin.version +
                    "-" +
                    Z.plugin.release +
                    e
                ),
                console[t]("Find updates and docs @ https://layerslider.com/"));
            var t = {
              namespace: "debug",
              js: "debug/layerslider.debug.js",
              css: "debug/layerslider.debug.css",
            };
            -1 !== document.location.hash.indexOf("debug") &&
              window.console &&
              (-1 !== document.location.hash.indexOf("url=") &&
                ((window._layerSlider.pluginsPath = document.location.hash
                  .split("url=")[1]
                  .split("&")[0]),
                (t.js =
                  window._layerSlider.pluginsPath +
                  "debug/layerslider.debug.js"),
                (t.css =
                  window._layerSlider.pluginsPath +
                  "debug/layerslider.debug.css")),
              "object" == typeof Z.o.plugins
                ? Z.o.plugins.push(t)
                : (Z.o.plugins = [t])),
              (window._layerSlider.currentScript ||
                window._layerSlider.lsScript) &&
                (window._layerSlider.scriptPath = (
                  window._layerSlider.currentScript ||
                  window._layerSlider.lsScript
                ).src
                  .replace(/\\/g, "/")
                  .replace(/\/[^\/]*$/, "")),
              Z.o.silentMode &&
                ((Z.slider.$silentWrapper = te(
                  "<ls-silent-wrapper></ls-silent-wrapper>"
                )),
                Z.slider.$silentWrapper.append($).prependTo("body")),
              "string" == typeof Z.o.getData && (Z.o.getData = [Z.o.getData]),
              "object" == typeof Z.o.plugins
                ? Z.plugins.load()
                : Z.slider.check.initialized();
          },
          styles: function () {
            var e,
              t,
              i,
              s,
              a,
              r,
              o,
              n,
              l,
              d,
              c,
              p,
              u,
              h,
              m,
              f,
              g,
              y,
              v = Z.slider,
              w = $.parent(),
              b = I.style,
              S = window.getComputedStyle(I, null),
              x = parseInt(I.clientWidth),
              T = parseInt(I.clientHeight),
              k = parseInt(w.width()),
              C = parseInt(w.height()),
              O = Z.o.layersContainerWidth,
              P = Z.o.layersContainerHeight,
              L = Z.o.type.toLowerCase();
            switch (
              (Z.debugMode && Z.debug.add("group", "sliderInit.style"),
              Z.o.width
                ? (e =
                    -1 == Z.o.width.indexOf("%")
                      ? parseInt(Z.o.width)
                      : Z.o.width)
                : b.width
                ? (e = -1 == b.width.indexOf("%") ? parseInt(b.width) : b.width)
                : 0 < O
                ? ((e = O),
                  Z.debugMode && Z.debug.add("warn", "sliderInit.noWidth", O))
                : ((e = x),
                  Z.debugMode && Z.debug.add("warn", "sliderInit.noWidth2", x)),
              (i = e),
              Z.o.height
                ? (t =
                    -1 == Z.o.height.indexOf("%")
                      ? parseInt(Z.o.height)
                      : Z.o.height)
                : b.height
                ? (t =
                    -1 == b.height.indexOf("%") ? parseInt(b.height) : b.height)
                : 0 < P
                ? ((t = P),
                  Z.debugMode && Z.debug.add("warn", "sliderInit.noHeight", P))
                : ((t = T),
                  Z.debugMode &&
                    Z.debug.add("warn", "sliderInit.noHeight2", C)),
              (s = t),
              (a =
                "" !== b.maxWidth
                  ? -1 !== b.maxWidth.indexOf("px")
                    ? parseInt(b.maxWidth)
                    : b.maxWidth
                  : 0),
              void 0 === Z.userInitOptions.type &&
                ((0 < O && 0 < P) || ("100%" === e && "100%" === t)
                  ? (L = "fullsize")
                  : O <= 0 &&
                    P <= 0 &&
                    (Z.o.responsiveUnder <= 0 ||
                      (0 < Z.o.responsiveUnder && Z.o.sliderVersion))
                  ? (L =
                      void 0 !== Z.o.responsive && !1 === Z.o.responsive
                        ? "fixedsize"
                        : "responsive")
                  : 0 < Z.o.responsiveUnder && (L = "fullwidth")),
              L)
            ) {
              case "fullwidth":
                -1 !== e.indexOf("%") &&
                  (Z.debugMode &&
                    Z.debug.add("warn", "sliderInit.percWidth", [L, e, x]),
                  (e = x)),
                  O <= 0 &&
                    ((O = e),
                    Z.debugMode &&
                      Z.debug.add("warn", "sliderInit.conWidth", [L, e])),
                  Z.o.responsiveUnder <= 0 &&
                    ((Z.o.responsiveUnder = O),
                    Z.debugMode &&
                      Z.debug.add("warn", "sliderInit.fullwidth", O)),
                  -1 !== t.indexOf("%") &&
                    ((o = C / (100 / parseInt(t))),
                    Z.debugMode &&
                      Z.debug.add("warn", "sliderInit.fullwidth2", [L, t, o]),
                    (t = o)),
                  P <= 0 && (P = t);
                break;
              case "fullsize":
                -1 !== e.indexOf("%") &&
                  ((r = 0 < O ? O : k),
                  Z.debugMode &&
                    Z.debug.add("warn", "sliderInit.fullsize", [L, e, r, k, O]),
                  (e = r)),
                  O <= 0 &&
                    ((O = e),
                    Z.debugMode &&
                      Z.debug.add("warn", "sliderInit.conWidth", [L, e])),
                  -1 !== t.indexOf("%") &&
                    ((o = 0 < P ? P : W.height() / (100 / parseInt(t))),
                    Z.debugMode &&
                      Z.debug.add("warn", "sliderInit.fullsize2", [
                        L,
                        t,
                        o,
                        W.height(),
                        P,
                      ]),
                    (t = o)),
                  P <= 0 &&
                    ((P = t),
                    Z.debugMode &&
                      Z.debug.add("warn", "sliderInit.conHeight", [L, t]));
                break;
              case "fixedsize":
                break;
              default:
                (Z.userInitOptions.type = Z.o.type = L = "responsive"),
                  (Z.o.responsiveUnder = -1) !== e.indexOf("%") &&
                    ((e = x),
                    Z.debugMode &&
                      Z.debug.add("warn", "sliderInit.percWidth", [L, e, x])),
                  -1 !== t.indexOf("%") &&
                    ((e = T),
                    Z.debugMode &&
                      Z.debug.add("warn", "sliderInit.responsive", [L, t, T])),
                  Z.debugMode &&
                    0 < O &&
                    Z.debug.add("warn", "sliderInit.conWidth2", [L, O]),
                  Z.debugMode &&
                    0 < P &&
                    Z.debug.add("warn", "sliderInit.conHeight2", [L, P]);
            }
            $.addClass("ls-container ls-" + L),
              $.parent().addClass("ls-direction-fix"),
              Z.userInitOptions.slideBGSize ||
                "responsive" !== L ||
                !Z.userInitOptions.hasOwnProperty("sliderVersion") ||
                Z.userInitOptions.sliderVersion ||
                ((Z.o.slideBGSize = "auto"),
                Z.debugMode && Z.debug.add("warn", "sliderInit.bgCover", L)),
              (Z.o.slideBGSize = Z.o.slideBGSize.replace(
                "100% 100%",
                "stretch"
              )),
              (n = 0 < O ? O : e),
              (l = 0 < P ? P : t),
              (d =
                "auto" === (y = I.style.marginLeft)
                  ? "auto"
                  : "" === y
                  ? parseInt(S.getPropertyValue("margin-left"))
                  : parseInt(I.style.marginLeft)) ===
                (c =
                  "auto" === (g = I.style.marginRight)
                    ? "auto"
                    : "" === g
                    ? parseInt(S.getPropertyValue("margin-right"))
                    : parseInt(I.style.marginRight)) &&
                ("" === y && "" === g && ((p = d), (c = d = "auto")),
                $.css({ marginLeft: "auto", marginRight: "auto" })),
              (u =
                "" !== b.paddingLeft
                  ? parseInt(b.paddingLeft)
                  : parseInt($.css("padding-left"))),
              (m =
                "" !== b.paddingRight
                  ? parseInt(b.paddingRight)
                  : parseInt($.css("padding-right"))),
              (h =
                "" !== b.paddingTop
                  ? parseInt(b.paddingTop)
                  : parseInt($.css("padding-top"))),
              (f =
                "" !== b.paddingBottom
                  ? parseInt(b.paddingBottom)
                  : parseInt($.css("padding-bottom"))),
              (w =
                "" !== b.borderLeftWidth
                  ? parseInt(b.borderLeftWidth)
                  : parseInt($.css("border-left-width"))),
              (y =
                "" !== b.borderRightWidth
                  ? parseInt(b.borderRightWidth)
                  : parseInt($.css("border-right-width"))),
              (g =
                "" !== b.borderTopWidth
                  ? parseInt(b.borderTopWidth)
                  : parseInt($.css("border-top-width"))),
              (b =
                "" !== b.borderBottomWidth
                  ? parseInt(b.borderBottomWidth)
                  : parseInt($.css("border-bottom-width"))),
              (v.initial = {
                type: L,
                width: e,
                height: t,
                originalWidth: i,
                originalHeight: s,
                percW: e / 100,
                percH: t / 100,
                layersWidth: O,
                layersHeight: P,
                ratio: n / l,
                maxWidth: a,
                marginLeft: d,
                marginRight: c,
                marginTop: Z.o.marginTop,
                marginBottom: Z.o.marginBottom,
                paddingLeft: u,
                paddingTop: h,
                paddingRight: m,
                paddingBottom: f,
                borderLeftWidth: w,
                borderTopWidth: g,
                borderRightWidth: y,
                borderBottomWidth: b,
                skinWidth: u + m + w + y,
                skinHeight: h + f + g + b,
              }),
              Z.debugMode &&
                (Z.debug.add("log", "sliderInit.style", [
                  e,
                  t,
                  i,
                  s,
                  O,
                  P,
                  parseInt((n / l) * 100) / 100,
                  0 < a ? a : void 0,
                  [d, c],
                ]),
                p && Z.debug.add("warn", "sliderInit.margin", p)),
              te("html").attr("id")
                ? te("body").attr("id") || te("body").attr("id", "ls-global")
                : te("html").attr("id", "ls-global"),
              "static" !== S.getPropertyValue("position") &&
                "absolute" !== S.getPropertyValue("position") &&
                (I.style.position = "relative"),
              Z.o.insertSelector && $[Z.o.insertMethod](Z.o.insertSelector),
              (Z.slider.$hiddenWrapper = te(
                '<div class="ls-wp-container fitvidsignore ls-hidden" data-layerslider-uid="' +
                  B +
                  '"></div>'
              )
                .addClass($.attr("class"))
                .prependTo("body")),
              (Z.slider.$innerWrapper = te('<div class="ls-inner"></div>')),
              (Z.slider.$slideBGColorWrapper = te(
                '<div class="ls-slide-bgcolor"></div>'
              ).appendTo(Z.slider.$innerWrapper)),
              (Z.slider.$layersWrapper = te(
                '<div class="ls-layers"></div>'
              ).appendTo(Z.slider.$innerWrapper)),
              (Z.slider.$bgVideosWrapper = te(
                '<div class="ls-background-videos"></div>'
              ).appendTo(Z.slider.$layersWrapper)),
              (Z.slider.$slideBGWrapper = te(
                '<div class="ls-slide-backgrounds"></div>'
              ).appendTo(Z.slider.$layersWrapper)),
              Z.slider.$innerWrapper.appendTo($),
              !0 === Z.o.hideOnMobile && ee.isMobile
                ? ($.addClass("ls-forcehide"),
                  $.closest(".ls-wp-fullwidth-container").addClass(
                    "ls-forcehide"
                  ),
                  (Z.o.autoStart = !1))
                : Z.slider.check.showHide();
            S = !1;
            if (
              (-1 == Z.o.globalBGColor.indexOf("gradient")
                ? Z.slider.$innerWrapper.css({
                    backgroundColor: Z.o.globalBGColor,
                  })
                : ((S = Z.o.globalBGColor),
                  (Z.o.globalBGColor = "transparent")),
              Z.o.globalBGImage
                ? Z.slider.$innerWrapper.css({
                    backgroundImage:
                      "url( " + Z.o.globalBGImage + " )" + (S ? ", " + S : ""),
                    backgroundRepeat: Z.o.globalBGRepeat,
                    backgroundAttachment: Z.o.globalBGAttachment,
                    backgroundSize: Z.o.globalBGSize,
                    backgroundPosition: Z.o.globalBGPosition,
                  })
                : S && Z.slider.$innerWrapper.css({ backgroundImage: S }),
              "transparent" != Z.o.globalBGColor ||
                !1 !== Z.o.globalBGImage ||
                S ||
                Z.slider.$innerWrapper.css({ background: "none transparent" }),
              "sticky" === Z.o.scene || "scroll" === Z.o.scene)
            ) {
              if (Z.o.scene)
                switch (((Z.slider.isScene = !0), Z.o.scene)) {
                  case "scroll":
                    Z.slider.isScrollScene = !0;
                  case "sticky":
                    Z.slider.isSticky = !0;
                }
              $.parent().is("ls-scene-wrapper")
                ? $.parent()
                    .attr("data-scene", Z.o.scene)
                    .attr("data-layerslider-uid", B)
                : $.wrap(
                    '<ls-scene-wrapper data-scene="' +
                      Z.o.scene +
                      '" data-layerslider-uid="' +
                      B +
                      '"></ls-scene-wrapper>'
                  ),
                (Z.slider.$spacingWrapper = te(
                  'ls-scene-wrapper[data-layerslider-uid="' + B + '"]'
                ).css("max-width", $.css("max-width"))),
                $.attr("data-scene", Z.o.scene);
            } else Z.slider.$spacingWrapper = $;
            ((Z.o.preventSliderClip &&
              Z.o.fitScreenWidth &&
              ("fullwidth" === L ||
                ("fullsize" === L && "fitheight" !== Z.o.fullSizeMode))) ||
              Z.slider.isScrollScene ||
              Z.slider.isSticky) &&
              $.parents(":not(body, html)").each(function () {
                te(this).addClass("ls-overflow-visible");
              });
          },
          options: function () {
            var t, i, s, a, r, e;
            te("html").find('meta[content*="WordPress"]').length &&
              (Z.meta.wpVersion = te("html")
                .find('meta[content*="WordPress"]')
                .attr("content")
                .split("WordPress")[1]),
              window.LS_Meta && window.LS_Meta.v
                ? (Z.meta.lswpVersion = window.LS_Meta.v)
                : te("html").find('script[src*="layerslider"]').length &&
                  -1 !=
                    te("html")
                      .find('script[src*="layerslider"]')
                      .attr("src")
                      .indexOf("?") &&
                  (Z.meta.lswpVersion = te("html")
                    .find('script[src*="layerslider"]')
                    .attr("src")
                    .split("?")[1]
                    .split("=")[1]),
              "undefined" != typeof layerSliderTransitions &&
                (Z.t = te.extend({}, layerSliderTransitions)),
              "undefined" != typeof layerSliderCustomTransitions &&
                (Z.ct = te.extend({}, layerSliderCustomTransitions)),
              Z.debugMode &&
                ("undefined" != typeof layerCustomSliderTransitions
                  ? (Z.debug.add("log", "sliderInit.customTransitions", !1),
                    "undefined" == typeof layerSliderTransitions &&
                      Z.debug.add("warn", "sliderInit.slideTransitions"))
                  : "undefined" == typeof layerSliderTransitions &&
                    Z.debug.add("warn", "sliderInit.noSlideTransitions")),
              "number" == typeof Z.o.parallaxCenterDegree &&
                (Z.transitions.layers.parallax.defaults.centerDegree =
                  Z.o.parallaxCenterDegree),
              "number" == typeof Z.o.parallaxSensitivity &&
                (Z.transitions.layers.parallax.defaults.sensitive =
                  Z.o.parallaxSensitivity),
              Z.o.parallaxCenterLayers &&
                (Z.transitions.layers.parallax.defaults.centerLayers =
                  Z.o.parallaxCenterLayers),
              Z.o.scrollCenterLayers &&
                (Z.transitions.layers.scroll.defaults.centerLayers =
                  Z.o.scrollCenterLayers),
              Z.slider.isSticky &&
                (te.extend(Z.o, { allowFullscreen: !1, playByScroll: !1 }),
                Z.slider.isScrollScene &&
                  te.extend(Z.o, {
                    autoPauseSlideshow: !1,
                    autoStart: !1,
                    pauseLayers: !1,
                    pauseOnHover: !1,
                    startInViewport: !1,
                  })),
              Z.o.playByScroll &&
                te.extend(Z.o, {
                  cycles: -1,
                  startInViewport: !0,
                  pauseOnHover: !1,
                  autoStart: !1,
                }),
              ee.isMobile && (Z.o.pauseOnHover = !1),
              Z.o.startInViewport &&
                ((Z.slider.state.waitForGettingInViewport = !0),
                Z.o.playByScroll &&
                  ((Z.slider.positionToViewport =
                    ee.scroll.top >
                    Z.slider.offset.top -
                      (ee.viewport.height - Z.slider.height) / 2
                      ? "under"
                      : "over"),
                  (t = !0),
                  (i = 4 * Z.o.playByScrollSpeed),
                  (Z.device.scroll.timeout = 250),
                  (Z.transitions.layers.timeline.timeScaleModifier = 0),
                  te(document).on(
                    "wheel." + B + " touchmove." + B,
                    function (e) {
                      ee.isMobile
                        ? ((s = e.originalEvent.touches[0].clientY),
                          a < s
                            ? (Z.device.scroll.direction = "up")
                            : s < a && (Z.device.scroll.direction = "down"),
                          (r = a - s),
                          (a = s))
                        : (0 < e.originalEvent.deltaY
                            ? (Z.device.scroll.direction = "down")
                            : (Z.device.scroll.direction = "up"),
                          (r = e.originalEvent.deltaY)),
                        0 !== Math.abs(r) &&
                          (Z.device.scroll.lastDirection
                            ? Z.device.scroll.lastDirection !==
                                Z.device.scroll.direction &&
                              ((Z.device.scroll.lastDirection =
                                Z.device.scroll.direction),
                              (Z.transitions.layers.timeline.timeScaleModifier = 0))
                            : (Z.device.scroll.lastDirection =
                                Z.device.scroll.direction),
                          "inside" === Z.slider.positionToViewport &&
                            (Z.resize.viewport(),
                            0 <= r
                              ? Z.transitions.layers.timeline.scrollForward()
                              : Z.transitions.layers.timeline.scrollBackwards(),
                            t &&
                              (clearTimeout(Z.timeouts.scroll),
                              (t = !1),
                              (Z.transitions.layers.timeline.timeScaleModifier =
                                Z.transitions.layers.timeline
                                  .timeScaleModifier < i
                                  ? Z.transitions.layers.timeline
                                      .timeScaleModifier + 0.25
                                  : i),
                              (Z.timeouts.scroll2 = setTimeout(function () {
                                delete Z.timeouts.scroll2,
                                  (t = !0),
                                  (Z.device.scroll.timeout =
                                    50 < Z.device.scroll.timeout
                                      ? Z.device.scroll.timeout - 50
                                      : 50);
                              }, Z.device.scroll.timeout)))),
                          Z.slider.check.positionToViewport(),
                          (Z.timeouts.checkPosition = setTimeout(function () {
                            Z.slider.check.positionToViewport();
                          }, 25)));
                    }
                  ))),
              (Z.slider.canShow = !0),
              ee.automaticFontSizeRatio ||
                ((e = te(
                  '<ls-dummy style="font-size: 100px; width: 0; height: 0; opacity: 0; position: absolute; overflow: hidden; pointer-events: none;">Lorem</ls-dummy>'
                ).appendTo("body")),
                (ee.automaticFontSizeRatio =
                  parseFloat(e.css("font-size")) /
                    parseFloat(e[0].style.fontSize) || 1),
                e.remove());
          },
          events: function () {
            W.on("scroll." + B, function () {
              Z.slider.set.offset();
            }),
              W.on("touchmove." + B, function (e) {
                e = e.touches || e.originalEvent.touches;
                1 == e.length && (self.touchX = e[0].clientX);
              }),
              W.on("resize." + B, function () {
                Z.slider.check.showHide(),
                  (Z.transitions.scrollscene.immediateRender = !0),
                  "inside" === Z.slider.positionToViewport &&
                    Z.o.playByScroll &&
                    Z.resize.viewport(),
                  Z.slider.shouldResize &&
                    (!ee.isMobile ||
                      (ee.isMobile &&
                        ee.viewport.width !== ee.viewport.lastWidth) ||
                      Z.slider.isPopup) &&
                    Z.resize.all(),
                  Z.slider.set.offset(),
                  Z.slider.isScene && Z.resize.scene(),
                  Z.slider.isPopup ||
                    (Z.timeouts.resize && clearTimeout(Z.timeouts.resize),
                    Z.resize.once
                      ? (Z.resize.once = !1)
                      : (Z.timeouts.resize = setTimeout(function () {
                          (Z.resize.once = !0),
                            W.trigger("resize." + B),
                            Z.api.methods("resetScroll");
                        }, 100)));
              }),
              Z.debugMode &&
                (W.off(".debug" + B),
                W.on("resize.debug" + B, function () {
                  Z.debug.add("log", "resize.window", ee.viewport.width, !0);
                })),
              W.on("hashchange." + B, function () {
                document.location.hash &&
                  Z.slides.deeplink(document.location.hash);
              }),
              Z.slider.set.offset(),
              W.trigger("resize." + B),
              Z.o.refreshWaypoint && window.Waypoint && Waypoint.refreshAll();
          },
          offset: function () {
            if ("none" !== $.css("display")) {
              var e = I.getBoundingClientRect(),
                t = Z.slider.position.toViewportForPerformance;
              Z.slider.position.toViewport;
              if (
                (Z.slider.get.offset(e),
                Z.slider.get.position(e),
                0 < Z.slider.position.left - ee.viewport.width
                  ? Z.slider.position.left - ee.viewport.width >
                    Z.performance.threshold
                    ? (Z.slider.position.toViewportX = "after")
                    : (Z.slider.position.toViewportX = "insideLimit")
                  : Z.slider.position.right < 0
                  ? Z.slider.position.right < -Z.performance.threshold
                    ? (Z.slider.position.toViewportX = "before")
                    : (Z.slider.position.toViewportX = "insideLimit")
                  : (Z.slider.position.toViewportX = "inside"),
                0 < Z.slider.position.top - ee.viewport.height
                  ? Z.slider.position.top - ee.viewport.height >
                    Z.performance.threshold
                    ? (Z.slider.position.toViewportY = "below")
                    : (Z.slider.position.toViewportY = "insideLimit")
                  : Z.slider.position.bottom < 0
                  ? Z.slider.position.bottom < -Z.performance.threshold
                    ? (Z.slider.position.toViewportY = "above")
                    : (Z.slider.position.toViewportY = "insideLimit")
                  : (Z.slider.position.toViewportY = "inside"),
                (Z.slider.position.toViewportYForSkipViewportLayers =
                  Z.slider.position.toViewportY),
                Z.slider.state.waitForGettingInViewport &&
                  (Z.slider.position.middle < ee.viewport.height &&
                  0 < Z.slider.position.middle
                    ? ((Z.slider.position.toViewportY = "inside"),
                      (Z.slider.state.waitForGettingInViewport = !1),
                      Z.transitions._slideTimeline &&
                        Z.transitions._slideTimeline.play(),
                      Z.debugMode &&
                        Z.debug.add("log", "slideshow.inviewport", !1))
                    : (Z.slider.position.toViewportY = "outside")),
                (-1 !== Z.slider.position.toViewportX.indexOf("inside") &&
                  "insideLimit" == Z.slider.position.toViewportY) ||
                (-1 !== Z.slider.position.toViewportY.indexOf("inside") &&
                  "insideLimit" == Z.slider.position.toViewportX)
                  ? ((Z.slider.position.toViewport = "insideLimit"),
                    (Z.slider.position.toViewportForPerformance = "inside"))
                  : "inside" == Z.slider.position.toViewportX &&
                    "inside" == Z.slider.position.toViewportY
                  ? ((Z.slider.position.toViewport = "inside"),
                    (Z.slider.position.toViewportForPerformance = "inside"))
                  : ((Z.slider.position.toViewport = "outside"),
                    (Z.slider.position.toViewportForPerformance = "outside")),
                Z.o.performanceMode &&
                  t !== Z.slider.position.toViewportForPerformance &&
                  ("inside" === Z.slider.position.toViewportForPerformance
                    ? ((Z.performance.sliderIsInviewport = !0),
                      Z.api.methods("resumeSlider", "performanceMode"))
                    : ((Z.performance.sliderIsInviewport = !1),
                      Z.api.methods("pauseSlider", "performanceMode"))),
                (Z.slider.isScrollScene || Z.slider.isSticky) &&
                  !Z.slider.$spacingWrapper.is("[data-disabled-scene]"))
              ) {
                var t = Z.slider.$spacingWrapper[0].getBoundingClientRect(),
                  i = (ee.viewport.height - Z.slider.height) / 2,
                  s = 0;
                switch (Z.o.stickTo || "center") {
                  case "top":
                    break;
                  case "center":
                    s = i;
                    break;
                  case "bottom":
                    s = 2 * i;
                }
                (Z.transitions.scrollscene.stickLimit = s),
                  (Z.slider.wrapperPosition = {
                    left: t.left,
                    top: t.top,
                    middleForScrollTransition:
                      t.top + t.height / 2 - ee.viewport.height / 2,
                  }),
                  (Z.slider.wrapperOffset = {
                    left: t.left + ee.scroll.left,
                    right: t.left + Z.slider.width + ee.scroll.left,
                    top: t.top + ee.scroll.top,
                    bottom: t.bottom + Z.slider.height + ee.scroll.top,
                    width: t.width,
                    height: t.height,
                  }),
                  (Z.slider.state.shouldAnimateScrollSnene = !1),
                  t.top > s
                    ? ("disabled" !== Z.slider.state.sticky ||
                        (Z.slider.isScrollScene &&
                          !Z.transitions.scrollscene.initialized)) &&
                      ((Z.slider.state.sticky = "disabled"),
                      (Z.slider.state.shouldAnimateScrollSnene = !0))
                    : t.bottom - Z.slider.height - s < 0
                    ? ("over" !== Z.slider.state.sticky ||
                        (Z.slider.isScrollScene &&
                          !Z.transitions.scrollscene.initialized)) &&
                      ((Z.slider.state.sticky = "over"),
                      (Z.slider.state.shouldAnimateScrollSnene = !0))
                    : t.top <= s &&
                      t.bottom > -s &&
                      ("enabled" !== Z.slider.state.sticky &&
                        (Z.slider.state.sticky = "enabled"),
                      (Z.slider.state.shouldAnimateScrollSnene = !0)),
                  Z.slider.isScrollScene &&
                    Z.transitions._slideTimeline &&
                    Z.slider.state.shouldAnimateScrollSnene &&
                    Z.transitions.scrollscene.animate();
              }
              Z.slider.state.isNotDisplayed &&
                ((Z.slider.state.isNotDisplayed = !1),
                Z.resize.all(),
                Z.slider.check.positionToViewport(),
                W.trigger("scroll"));
            } else Z.slider.state.isNotDisplayed = !0;
          },
          attributes: function () {
            $.attr("data-current-slide", Z.slides.current.index);
          },
        },
        get: {
          offset: function (e) {
            (e = e || I.getBoundingClientRect()),
              (Z.slider.offset = {
                left: e.left + ee.scroll.left,
                right: e.left + Z.slider.width + ee.scroll.left,
                top: e.top + ee.scroll.top,
                bottom: e.bottom + Z.slider.height + ee.scroll.top,
              });
          },
          position: function (e) {
            (e = e || I.getBoundingClientRect()),
              (Z.slider.position = {
                left: e.left,
                center: e.left + Z.slider.width / 2,
                right: e.right,
                top: e.top,
                middle: e.top + Z.slider.height / 2,
                bottom: e.bottom,
              });
          },
        },
        check: {
          initialized: function () {
            Z.debugMode &&
              Z.debug.add(
                "log",
                "sliderInit.info",
                [
                  Z.plugin.version,
                  Z.plugin.releaseDate,
                  Z.userInitOptions.sliderVersion ||
                    "n/a or slider version is pre 6.0.0",
                  $.attr("id"),
                  B,
                  te.fn.jquery,
                  Z.meta.lswpVersion,
                  Z.meta.wpVersion,
                ],
                !0
              ),
              Z.slider.initialized ||
                ((Z.slider.initialized = !0), this.skins());
          },
          skins: function () {
            Z.o.skin && "" !== Z.o.skin && Z.o.skinsPath && "" !== Z.o.skinsPath
              ? Z.gui.skin.load()
              : Z.slider.init();
          },
          showHide: function () {
            (ee.isMobile && !1 !== Z.o.hideOnMobile) ||
              (ee.viewport.width < Z.o.hideUnder ||
              (ee.viewport.width > Z.o.hideOver && 0 < Z.o.hideOver)
                ? Z.slider.hide()
                : Z.slider.show());
          },
          visibility: function () {
            !!Z.slider.$innerWrapper.width()
              ? (Z.slider.state.isHidden && Z.resize.all(),
                (Z.slider.state.isHidden = !1))
              : (Z.slider.state.isHidden = !0);
          },
          positionToViewport: function () {
            var e;
            delete Z.timeouts.checkPosition,
              Z.o.playByScroll &&
                Z.device.scroll.direction &&
                ((e =
                  "down" === Z.device.scroll.direction
                    ? ee.scroll.top
                    : Z.slider.offset.top -
                      (ee.viewport.height - Z.slider.height) / 2),
                ((("down" === Z.device.scroll.direction
                  ? Z.slider.offset.top -
                    (ee.viewport.height - Z.slider.height) / 2
                  : ee.scroll.top) < e &&
                  (("up" === Z.device.scroll.direction &&
                    "under" === Z.slider.positionToViewport) ||
                    ("down" === Z.device.scroll.direction &&
                      "over" === Z.slider.positionToViewport))) ||
                  ee.document.height <= ee.viewport.height ||
                  (Z.slider.height < ee.viewport.height &&
                    (("up" === Z.device.scroll.direction &&
                      ee.scroll.top <= 0 &&
                      Z.slider.offset.top + Z.slider.height / 2 <
                        ee.viewport.height / 2) ||
                      ("down" === Z.device.scroll.direction &&
                        ee.scroll.top >=
                          ee.document.height - ee.viewport.height &&
                        Z.slider.offset.top + Z.slider.height / 2 >
                          ee.scroll.top + ee.viewport.height / 2)))) &&
                  ((Z.slider.positionToViewport = "inside"),
                  Z.resize.viewport(),
                  Z.device.scroll.disable()));
          },
        },
        init: function () {
          clearTimeout(Z.timeouts.skinLoad1),
            clearTimeout(Z.timeouts.skinLoad2),
            clearTimeout(Z.timeouts.skinLoad3),
            clearTimeout(Z.timeouts.skinLoad4),
            Z.slider.set.styles(),
            Z.slider.set.options(),
            Z.slides.init(),
            Z.device.fullscreen.set(),
            Z.media.init(),
            Z.gui.timers.init(),
            Z.gui.loadingIndicator.init(),
            Z.preload.init(),
            Z.gui.shadow.init(),
            Z.navigation.init(),
            Z.slideshow.init(),
            Z.slides.set.firstSlide(),
            Z.gui.navigation.init(),
            Z.gui.media.init(),
            Z.resize.slider(),
            Z.yourLogo.init(),
            Z.slider.set.events(),
            Z.api.hasEvent("sliderDidLoad") &&
              Z.api.triggerEvent("sliderDidLoad", Z.api.eventData()),
            Z.functions.setStates(Z.slider, { isLoaded: !0 }),
            Z.slider.state.shouldBeDestroyed
              ? Z.api.methods("destroy")
              : ((Z.intervals.checkSliderVisibility = setInterval(function () {
                  Z.slider.check.visibility();
                }, 500)),
                Z.slideshow.changeTo(Z.slides.first.index));
        },
        hide: function () {
          $.addClass("ls-forcehide"),
            $.closest(".ls-wp-fullwidth-container").addClass("ls-forcehide"),
            $.closest(".ls-popup").addClass("ls-forcehide"),
            $.closest(".ls-popup")
              .prev(".ls-popup-overlay")
              .addClass("ls-forcehide");
        },
        show: function () {
          $.removeClass("ls-forcehide"),
            $.closest(".ls-wp-fullwidth-container").removeClass("ls-forcehide"),
            $.closest(".ls-popup").removeClass("ls-forcehide"),
            $.closest(".ls-popup")
              .prev(".ls-popup-overlay")
              .removeClass("ls-forcehide");
        },
      }),
      (Z.functions = {
        getData: function (e, t) {
          return (
            !Z.o.getData ||
            -1 === Z.o.getData.indexOf(e) ||
            (Z.api.triggerEvent("getData", { property: e, value: t }),
            !Z.o.destroyAfter) ||
            (Z.api.methods("destroy", !0), !1)
          );
        },
        convert: {
          transformOrigin: function (e, t, i, s) {
            for (
              var a = (d = te.trim(e)).split(" "),
                r = s[0].style,
                o = "",
                n = ["Left", "Top"],
                l = [Z.slider.width, Z.slider.height],
                d = d
                  .replace("sliderleft", "0")
                  .replace("sliderright", "100%")
                  .replace("slidercenter", "50%")
                  .replace("slidermiddle", "50%")
                  .replace("slidertop", "0")
                  .replace("sliderbottom", "100%")
                  .replace("left", "0")
                  .replace("right", "100%")
                  .replace("center", "50%")
                  .replace("middle", "50%")
                  .replace("top", "0")
                  .replace("bottom", "100%")
                  .split(" "),
                c = 0;
              c < d.length;
              c++
            )
              -1 !== a[c].indexOf("slider")
                ? ((Z.transitions.layers.timeline.shouldRestart = !0),
                  (o +=
                    c < 2
                      ? l[c] / (100 / parseInt(d[c])) -
                        parseInt(r[n[c].toLowerCase()]) -
                        parseInt(r["margin" + n[c]]) +
                        "px "
                      : "0px"))
                : -1 !== d[c].indexOf("%")
                ? (o += d[c] + " ")
                : -1 !== d[c].indexOf("em")
                ? (o += parseFloat(d[c]) * parseInt(t.css("font-size")) + "px ")
                : (o += parseInt(d[c]) * i.settings.calculatedratio + "px ");
            return te.trim(o);
          },
          specialValuesOfTransformOrigin: function (e) {
            return (e = e
              .replace("sliderleft", "0")
              .replace("sliderright", "100%")
              .replace("slidercenter", "50%")
              .replace("slidermiddle", "50%")
              .replace("slidertop", "0")
              .replace("sliderbottom", "100%")
              .replace("left", "0")
              .replace("right", "100%")
              .replace("center", "50%")
              .replace("middle", "50%")
              .replace("top", "0")
              .replace("bottom", "100%")
              .split(" "));
          },
          nodesTransformOrigin: function (e, d, c, t) {
            for (
              var i = "object" == typeof e,
                p = (d.length, []),
                u = t[0].style,
                h = ["left", "top"],
                s = function (e, t) {
                  for (
                    var t = te(d[t]),
                      i = parseInt(t.css("font-size")),
                      s = t.position(),
                      a = (n = te.trim(e)).split(" "),
                      r = "",
                      o = [Z.slider.width, Z.slider.height],
                      n = Z.functions.convert.specialValuesOfTransformOrigin(n),
                      l = 0;
                    l < n.length;
                    l++
                  )
                    -1 !== a[l].indexOf("slider")
                      ? ((Z.transitions.layers.timeline.shouldRestart = !0),
                        (r +=
                          l < 2
                            ? o[l] / (100 / parseInt(n[l])) -
                              parseInt(s[h[l]]) -
                              parseInt(u[h[l].toLowerCase()]) +
                              "px "
                            : "0px"))
                      : -1 !== n[l].indexOf("%")
                      ? (r += n[l] + " ")
                      : -1 !== n[l].indexOf("em")
                      ? (r += parseFloat(n[l]) * i + "px ")
                      : (r +=
                          parseInt(n[l]) * c.settings.calculatedratio + "px ");
                  p.push(te.trim(r));
                },
                a = 0,
                r = i && e.length,
                o = 0;
              o < d.length;
              o++
            )
              i ? (s(e[a], o), ++a == r && (a = 0)) : s(e, o);
            return p;
          },
          easing: function (e, t) {
            return "string" != typeof e
              ? e
              : (-1 !== (e = e.toLowerCase()).indexOf("swing") ||
                -1 !== e.indexOf("linear")
                  ? (i = J.Linear.easeNone)
                  : ((s = e.match(/(easeinout|easein|easeout)(.+)/)[2]),
                    (s = J[s.charAt(0).toUpperCase() + s.slice(1)]),
                    -1 !== e.indexOf("easeinout")
                      ? (i = s.easeInOut)
                      : -1 !== e.indexOf("easeout")
                      ? (i = t ? s.easeIn : s.easeOut)
                      : -1 !== e.indexOf("easein") &&
                        (i = t ? s.easeOut : s.easeIn)),
                i);
            var i, s;
          },
          transition: function (e, t, i, s) {
            var a = te.extend({}, e);
            return (
              te.each(
                {
                  rotate: "rotation",
                  rotateX: "rotationX",
                  rotateY: "rotationY",
                },
                function (e, t) {
                  e in a && ((a[t] = a[e]), delete a[e]);
                }
              ),
              "after" === i
                ? (a.scaleX = a.scaleY = a.scaleZ = 1)
                : a.scale3d !== s &&
                  ((a.scaleX = a.scaleY = a.scaleZ = a.scale3d),
                  delete a.scale3d),
              a.delay && (a.delay = "after" === i ? a.delay / 1e3 : a.delay),
              void 0 === t && (t = "easeInOutQuart"),
              (a.ease = Z.functions.convert.easing(t)),
              a
            );
          },
          randomProperties: function (e, t) {
            if (
              e &&
              -1 !== e.indexOf("(") &&
              -1 !== e.indexOf(",") &&
              -1 !== e.indexOf(")")
            ) {
              var i = e.split("(")[1].split(")")[0].split(","),
                s = 1;
              return (
                (i[0] = parseFloat(i[0])),
                (i[1] = parseFloat(i[1])),
                -1 !== t.indexOf("scale") &&
                  ((s = 100), (i[0] *= s), (i[1] *= s)),
                Math.floor(Math.random() * (i[1] - i[0] + 1) + i[0]) / s
              );
            }
            return e;
          },
          properties: function (e, t) {
            if ("string" == typeof e)
              return Z.functions.convert._properties(e, t);
            if ("object" != typeof e) return e;
            for (var i in e) e[i] = Z.functions.convert._properties(e[i], t);
            return e;
          },
          _properties: function (e, t) {
            if ("enable" == e || "enabled" == e || "true" == e) return !0;
            if ("disable" == e || "disabled" == e || "false" == e) return !1;
            if (
              "string" != typeof e ||
              -1 === e.indexOf(Z.defaults.init.lsDataArraySplitChar)
            )
              return t
                ? "" + parseInt(e) == "NaN"
                  ? 0
                  : parseInt(e)
                : te.isNumeric(e)
                ? parseFloat(e)
                : e;
            for (
              var i = e.split(Z.defaults.init.lsDataArraySplitChar),
                s = [],
                a = 0;
              a < i.length;
              a++
            )
              s[a] = te.isNumeric(i[a])
                ? parseFloat(te.trim(i[a]))
                : te.trim(i[a]);
            return s;
          },
          oldProperties: function (i) {
            return (
              te.each(
                {
                  firstLayer: "firstSlide",
                  loops: "cycles",
                  forceLoopNum: "forceCycles",
                  layersContainer: "layersContainerWidth",
                  sublayerContainer: "layersContainerWidth",
                  randomSlideshow: "shuffleSlideshow",
                },
                function (e, t) {
                  e in i && ((i[t] = i[e]), delete i[e]);
                }
              ),
              i
            );
          },
        },
        getSliderClosestParentElementWithNumericValueOfProperty: function (e) {
          for (
            var t,
              i = $.parents().not(".ls-fullscreen-wrapper"),
              s = i.length,
              a = 100,
              r = 0;
            r < s;
            r++
          )
            if (
              "auto" !== (t = window.getComputedStyle(i[r]).getPropertyValue(e))
            ) {
              if (-1 !== t.indexOf("px"))
                return (
                  (Z.slider.$parentWithNumericWidthValue = te(i[r])), te(i[r])
                );
              -1 !== t.indexOf("%") &&
                ((a = (a / 100) * parseInt(t)),
                (Z.slider.$parentWithNumericWidthValuePercent = a));
            }
        },
        sortArray: function (e, t, i) {
          var s,
            a,
            r,
            o,
            n,
            l = [],
            d = e * t;
          switch (i) {
            case "forward":
              for (s = 0; s < e; s++) for (a = 0; a < t; a++) l.push(s + a * e);
              break;
            case "reverse":
              for (s = e - 1; -1 < s; s--)
                for (a = t - 1; -1 < a; a--) l.push(s + a * e);
              break;
            case "center":
              for (n = Math.floor(d / 2), r = 0; r < n; r++) l.push(r);
              for (o = n; 0 <= o; o--) l.push(o);
              break;
            case "edge":
            case "mirror":
              for (r = n = Math.floor(d / 2); 0 < r; r--) l.push(r);
              for (o = 0; o <= n; o++) l.push(o);
          }
          return l;
        },
        shuffleArray: function (e) {
          for (var t, i, s = e.length; 0 !== s; )
            (i = Math.floor(Math.random() * s)),
              (t = e[--s]),
              (e[s] = e[i]),
              (e[i] = t);
          return e;
        },
        countProp: function (e) {
          var t,
            i = 0;
          for (t in e) e.hasOwnProperty(t) && ++i;
          return i;
        },
        getURL: function (e) {
          return (
            e[0].currentSrc || (e.data("src") ? e.data("src") : e.attr("src"))
          );
        },
        getALT: function (e) {
          return !!e.attr("alt") && e.attr("alt");
        },
        setStates: function (e, t, i) {
          if (e && e.state) {
            var s = Z.slideshow.isPaused();
            if (i) e.state[t] = i;
            else for (var a in t) e.state[a] = t[a];
            i = Z.slideshow.isPaused();
            e == Z.slideshow &&
              (Z.api.hasEvent("slideshowStateDidChange") &&
                Z.api.triggerEvent(
                  "slideshowStateDidChange",
                  Z.api.eventData()
                ),
              i != s &&
                (i
                  ? Z.api.hasEvent("slideshowDidPause") &&
                    Z.api.triggerEvent("slideshowDidPause", Z.api.eventData())
                  : (Z.slideshow.start(),
                    Z.api.hasEvent("slideshowDidResume") &&
                      Z.api.triggerEvent(
                        "slideshowDidResume",
                        Z.api.eventData()
                      ))));
          }
        },
        clearTimers: function () {
          for (var e in Z.timeouts)
            clearTimeout(Z.timeouts[e]), delete Z.timeouts[e];
          for (var t in Z.intervals)
            clearInterval(Z.intervals[t]), delete Z.intervals[t];
        },
        clearTimelines: function () {
          Z.transitions.timelines.set("all", function (e, t) {
            e.pause().clear().kill(), delete Z.transitions[t];
          }),
            J.TweenMax.killTweensOf(
              $.find(
                ".ls-bg, .ls-layer, .ls-wrapper, .ls-curtile, .ls-nexttile"
              ).get()
            );
        },
        resetSlideTimelines: function () {
          Z.transitions.timelines.set("layers", function (e, t) {
            e.pause().progress(0).clear().kill(), delete Z.transitions[t];
          }),
            Z.transitions.timelines.set("allforce", function (e, t) {
              e.pause().progress(1).clear().kill(), delete Z.transitions[t];
            }),
            $.find(".ls-layer:not(.ls-bg-video)").each(function () {
              var e = te(this);
              if (
                void 0 !== e.attr("data-ls-active") &&
                !1 !== e.attr("data-ls-active") &&
                void 0 !== e.attr("data-ls-static") &&
                !1 !== e.attr("data-ls-static") &&
                parseInt(e.attr("data-ls-slidein")) !== Z.slides.current.index
              )
                return !0;
              e = e.data(Z.defaults.init.dataKey);
              e.loop._timeline &&
                (e.loop._timeline.stop().clear(),
                delete e.loop._timeline,
                J.TweenMax.set(
                  e.elements.$loopWrapper[0],
                  e.reset.loopWrapperOnSlideChange
                )),
                J.TweenMax.set(
                  e.elements.$wrapper[0],
                  e.reset.wrapperOnSlideChange
                );
            });
        },
        clearEvents: function () {
          W.add("body")
            .add(document)
            .add($)
            .add($.find("*"))
            .add("." + B)
            .off("." + B + " .debug" + B + " .parallax" + B + " .scroll" + B),
            $.off();
        },
      }),
      (Z.device = {
        scroll: {
          keys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
          disable: function () {
            window.addEventListener("scroll", this.preventDefault, {
              passive: !1,
              capture: !0,
            }),
              window.addEventListener("wheel", this.preventDefault, {
                passive: !1,
                capture: !0,
              }),
              window.addEventListener("mousewheel", this.preventDefault, {
                passive: !1,
                capture: !0,
              }),
              window.addEventListener("touchmove", this.preventDefault, {
                passive: !1,
                capture: !0,
              }),
              window.addEventListener(
                "keydown",
                this.preventDefaultForScrollKeys,
                { capture: !0 }
              );
          },
          enable: function () {
            window.removeEventListener("scroll", this.preventDefault, {
              passive: !1,
              capture: !0,
            }),
              window.removeEventListener("wheel", this.preventDefault, {
                passive: !1,
                capture: !0,
              }),
              window.removeEventListener("mousewheel", this.preventDefault, {
                passive: !1,
                capture: !0,
              }),
              window.removeEventListener("touchmove", this.preventDefault, {
                passive: !1,
                capture: !0,
              }),
              window.removeEventListener(
                "keydown",
                this.preventDefaultForScrollKeys,
                { capture: !0 }
              );
          },
          preventDefault: function (e) {
            (e = e || window.event).preventDefault && e.preventDefault(),
              (e.returnValue = !1);
          },
          preventDefaultForScrollKeys: function (e) {
            if (-1 !== Z.device.scroll.keys.indexOf(e.keyCode))
              return Z.device.scroll.preventDefault(e), !1;
          },
        },
        removeSelection: function () {
          window.getSelection
            ? window.getSelection().empty
              ? window.getSelection().empty()
              : window.getSelection().removeAllRanges &&
                window.getSelection().removeAllRanges()
            : document.selection && document.selection.empty();
        },
        fullscreen: {
          enter: function () {
            Z.functions.setStates(Z.slider, { inFullscreen: !0 }),
              te("body, html").addClass("ls-fullscreen"),
              Z.slider.fullscreenWrapper.requestFullscreen(),
              $.trigger("mouseleave"),
              Z.device.removeSelection();
          },
          exit: function () {
            Z.functions.setStates(Z.slider, { inFullscreen: !1 }),
              Z.resize.all(),
              te("body, html").removeClass("ls-fullscreen"),
              Z.device.removeSelection();
          },
          toggle: function () {
            Z.device.fullscreen.element()
              ? (Z.device.fullscreen.exit(), document.exitFullscreen())
              : Z.device.fullscreen.enter();
          },
          set: function () {
            Z.o.allowFullscreen &&
              (document.fullscreenEnabled ||
                document.webkitFullscreenEnabled ||
                document.mozFullScreenEnabled ||
                document.msFullscreenEnabled) &&
              ($.wrap('<div class="ls-fullscreen-wrapper"></div>'),
              (Z.slider.$fullscreenWrapper = $.closest(
                ".ls-fullscreen-wrapper"
              )),
              (Z.slider.fullscreenWrapper = Z.slider.$fullscreenWrapper[0]),
              (Z.slider.$spacingWrapper = Z.slider.$fullscreenWrapper),
              (Z.slider.fullscreenWrapper.requestFullscreen =
                Z.slider.fullscreenWrapper.requestFullscreen ||
                Z.slider.fullscreenWrapper.webkitRequestFullscreen ||
                Z.slider.fullscreenWrapper.mozRequestFullScreen ||
                Z.slider.fullscreenWrapper.msRequestFullscreen),
              (document.exitFullscreen =
                document.exitFullscreen ||
                document.webkitExitFullscreen ||
                document.mozCancelFullScreen ||
                document.msExitFullscreen),
              te(document).on(
                "fullscreenchange." +
                  B +
                  " webkitfullscreenchange." +
                  B +
                  " mozfullscreenchange." +
                  B +
                  " msfullscreenchange." +
                  B,
                function () {
                  Z.device.fullscreen.element() || Z.device.fullscreen.exit();
                }
              ),
              Z.slider.$fullscreenWrapper.on("dblclick." + B, function () {
                Z.device.fullscreen.toggle();
              }));
          },
          element: function () {
            return (
              document.fullscreenElement ||
              document.webkitFullscreenElement ||
              document.mozFullScreenElement ||
              document.msFullscreenElement
            );
          },
        },
      }),
      (Z.actions = {
        do: function (t) {
          var e,
            i,
            s = !1,
            a = "";
          switch (t.action) {
            case "scrollBelowProject":
            case "scrollToNextProject":
            case "scrollToPrevProject":
            case "scrollToElement":
            case "scrollToScenePosition":
              Z.slider.isScene || $.addClass("ls-action-trigger");
              var r,
                o,
                n,
                l,
                d = te(
                  ".ls-wp-container:not(.ls-hidden):not([data-scene]), ls-scene-wrapper"
                ),
                c = te("ls-scene-wrapper, .ls-action-trigger"),
                p = te([]),
                u = Z.slider.isScene ? Z.slider.$spacingWrapper : $,
                h = c.length,
                m = c.index(u);
              if (
                (Z.slider.isScene || $.removeClass("ls-action-trigger"),
                "scrollBelowProject" === t.action)
              )
                g =
                  Z.slider.$spacingWrapper.offset().top +
                  Z.slider.$spacingWrapper.height() +
                  (t.offset || 0);
              else if ("scrollToPrevProject" === t.action)
                0 !== d.index(u)
                  ? ((n = (p = d.eq(d.index(u) - 1)).is("ls-scene-wrapper")
                      ? p.find(".ls-container")
                      : p),
                    (g =
                      parseFloat(p.offset().top) -
                      parseFloat(n.css("top")) +
                      (t.offset || 0)))
                  : (s = "There’s no previous project to scroll to.");
              else if ("scrollToNextProject" === t.action)
                d.index(u) < d.length - 1
                  ? ((n = (p = d.eq(d.index(u) + 1)).is("ls-scene-wrapper")
                      ? p.find(".ls-container")
                      : p),
                    (g =
                      parseFloat(p.offset().top) -
                      parseFloat(n.css("top")) +
                      (t.offset || 0)))
                  : (s = "There’s no next project to scroll to.");
              else if ("scrollToElement" === t.action) {
                try {
                  p = te(t.selector.toString()).not(
                    ".ls-wp-container.ls-hidden"
                  );
                } catch (e) {
                  a = e;
                }
                p.size()
                  ? (g = parseFloat(p.offset().top) + (t.offset || 0))
                  : (s =
                      'Couldn’t find the scroll target element "' +
                      t.selector +
                      '". Please verify the selector you’ve entered.');
              } else if ("scrollToScenePosition" === t.action) {
                switch (t.target) {
                  case "currentScene":
                    Z.slider.isScene
                      ? (p = u)
                      : (s = "Current project is not a scene.");
                    break;
                  case "nextScene":
                    m + 1 < h
                      ? (p = te(c[m + 1]))
                      : (s = "There are no next scenes in the DOM.");
                    break;
                  case "previousScene":
                    0 <= m - 1
                      ? (p = te(c[m - 1]))
                      : (s = "There are no previous scenes in the DOM.");
                }
                p.length &&
                  ((r = parseFloat(p.attr("data-scene-duration"))),
                  (o = p.height()),
                  (d = (n = p.find(".ls-container")).height()),
                  (t.position = t.position || "0ms"),
                  (g = p.is('[data-scene="scroll"]')
                    ? ((l =
                        -1 !== t.position.indexOf("%") ||
                        -1 === t.position.indexOf("ms")
                          ? r *
                            (Math.min(
                              100,
                              Math.max(0, parseFloat(t.position))
                            ) /
                              100)
                          : Math.min(
                              Math.max(0, parseFloat(t.position) / 1e3),
                              r
                            )),
                      Math.round(
                        parseFloat(p.offset().top) -
                          parseFloat(n.css("top")) +
                          (l / r) * (o - d)
                      ))
                    : ((l =
                        Math.min(100, Math.max(0, parseFloat(t.position))) /
                        100),
                      Math.round(
                        parseFloat(p.offset().top) -
                          parseFloat(n.css("top")) +
                          (o - d) * l
                      ))));
              }
              s ||
                ((t.duration = te.isNumeric(t.duration) ? t.duration : 1e3),
                J.TweenMax.to("html, body", t.duration / 1e3, {
                  scrollTop: g,
                  ease: Z.functions.convert.easing(t.easing),
                }));
              break;
            case "switchSlide":
              Z.slideshow.changeTo(t.slide, !0, !0);
              break;
            case "nextSlide":
            case "prevSlide":
            case "lastSlide":
            case "firstSlide":
            case "stopSlideshow":
            case "startSlideshow":
              "nextSlide" === t.action && (y = "next"),
                "prevSlide" === t.action && (y = "prev"),
                "lastSlide" === t.action && (y = "last"),
                "firstSlide" === t.action && (y = "first"),
                "stopSlideshow" === t.action && (y = "stop"),
                "startSlideshow" === t.action && (y = "start"),
                Z.navigation[y]("clicked");
              break;
            case "replaySlide":
              Z.api.methods("replay");
              break;
            case "reverseSlide":
              Z.api.methods("reverse", t.replay);
              break;
            case "resetSlide":
              Z.api.methods("resetSlide");
              break;
            case "pauseProject":
              Z.api.methods("pauseSlider");
              break;
            case "resumeProject":
              Z.api.methods("resumeSlider");
              break;
            case "toggleProject":
              Z.api.methods("toggleSlider");
              break;
            case "playMedia":
              Z.media.functions.playActiveMedia();
              break;
            case "pauseMedia":
              Z.media.functions.pauseActiveMedia();
              break;
            case "unmuteMedia":
              Z.media.unmute.multipleMediaElements();
              break;
            case "openPopup":
              var f,
                g = te("[id^=layerslider_" + t.popup + "]").first(),
                y = g.data("lsSliderUID");
              g.length
                ? (((f =
                    window._layerSliders[y].initializedPlugins
                      .popup).plugin.settings.showOnce = !1),
                  "opened" == f.state.is
                    ? t.toggle && f.events.hide()
                    : t.slide
                    ? g.layerSlider("fastChangeTo", t.slide, function () {
                        f.events.show();
                      })
                    : f.events.show())
                : ((g = {
                    action: "ls_get_popup_markup",
                    id: t.popup,
                    slide: t.slide,
                  }),
                  te.get(
                    Z.o.ajaxURL || window.ajaxurl || "/logmo/admin-ajax.php",
                    g,
                    function (e) {
                      te(e).appendTo("body");
                    }
                  ));
              break;
            case "launchPopups":
              for (i in window._layerSliders)
                (e = window._layerSliders[i]).initializedPlugins.popup &&
                  e.api.methods("openPopup");
              break;
            case "closePopup":
              Z.api.methods("closePopup");
              break;
            case "closeAllPopups":
              Z.api.methods("closeAllPopups");
              break;
            case "jsFunction":
              try {
                window[t.function]();
              } catch (e) {
                (a = e),
                  (s =
                    "The browser thrown the following error after calling " +
                    t.function +
                    "() JavaScript function.");
              }
          }
          s &&
            console.error(
              'LayerSlider: Error while calling layer action "' +
                t.action +
                '". ' +
                s +
                ("" !== a ? "\n\r\n\r" : ""),
              a
            );
        },
      }),
      (Z.api = {
        hasEvent: function (e, t) {
          t = te._data(t || I, "events");
          return !(!t || !t[e]);
        },
        methods: function (e, t, i, s) {
          if (!Z.slider.isBusy())
            if ("number" == typeof e)
              0 < e &&
                e < Z.slides.count + 1 &&
                e != Z.slides.current.index &&
                Z.slideshow.changeTo(e, !0, !0);
            else
              switch (e) {
                case "touchPrev":
                  Z.device.touchPrev = !0;
                case "previousSlide":
                case "prev":
                  Z.navigation.prev();
                  break;
                case "touchNext":
                  Z.device.touchNext = !0;
                case "nextSlide":
                case "next":
                  Z.navigation.next();
                  break;
                case "startSlideshow":
                case "start":
                  Z.navigation.start();
              }
          switch (e) {
            case "openPopup":
              Z.initializedPlugins.popup &&
                (t && te.isNumeric(t)
                  ? $.layerSlider("fastChangeTo", t, function () {
                      Z.initializedPlugins.popup.events.show();
                    })
                  : Z.initializedPlugins.popup.events.show());
              break;
            case "launchPopups":
              Z.actions.do("launchPopups");
              break;
            case "fastChangeTo":
              t &&
                te.isNumeric(t) &&
                (Z.slides.current.index !== t
                  ? ((Z.slideshow.forceFastChange = !0),
                    i &&
                      "function" == typeof i &&
                      (Z.slideshow.forceFastChangeCallback = i),
                    Z.slideshow.changeTo(t, !0, !0))
                  : i && i());
              break;
            case "resetScroll":
              Z.slider.set.offset(),
                W.trigger("scroll.scroll" + B)
                  .trigger("touchmove.scroll" + B)
                  .trigger("scroll.parallax" + B)
                  .trigger("touchmove.parallax" + B);
              break;
            case "enableScene":
              Z.slider.isScene &&
                (Z.slider.$spacingWrapper.removeAttr("data-disabled-scene"),
                Z.api.methods("resetScroll"));
              break;
            case "disableScene":
              Z.slider.isScene &&
                (Z.slider.$spacingWrapper.attr("data-disabled-scene", ""),
                $.css({ top: "auto", bottom: "auto" }),
                Z.transitions.scrollscene.animate("start"),
                Z.api.methods("resetScroll"));
              break;
            case "closePopup":
              Z.initializedPlugins.popup &&
                Z.initializedPlugins.popup.events.hide();
              break;
            case "closeAllPopups":
              te('<div class="ls-close-all-popups-button"></div>')
                .css("display", "none")
                .appendTo("body")
                .trigger("click")
                .remove();
              break;
            case "updateLayerData":
              t && Z.layers.update.data(t, i, s);
              break;
            case "redrawSlider":
            case "redraw":
              Z.resize.all(), Z.api.methods("resetScroll");
              break;
            case "replaySlide":
            case "replay":
              Z.transitions._slideTimeline &&
                Z.transitions._slideTimeline.restart();
              break;
            case "reverseSlide":
            case "reverse":
              Z.transitions._slideTimeline &&
                (Z.transitions._slideTimeline.reversed()
                  ? Z.transitions._slideTimeline.play()
                  : Z.transitions._slideTimeline.reverse(),
                t && (Z.transitions.layers.timeline.shouldReplay = !0));
              break;
            case "unmute":
            case "unmuteMedia":
              Z.media.unmute.multipleMediaElements();
              break;
            case "stopSlideshow":
            case "stop":
              Z.navigation.stop();
              break;
            case "pauseSlider":
            case "pause":
              t &&
                "performanceMode" === t &&
                Z.functions.setStates(Z.slideshow, { pausedByPerformance: !0 }),
                Z.transitions._slideTimeline &&
                  !Z.slider.isScrollScene &&
                  Z.transitions._slideTimeline.stop(),
                Z.layers.get("active").each(function () {
                  var e = te(this).data(Z.defaults.init.dataKey);
                  e.loop._timeline && e.loop._timeline.stop();
                }),
                (Z.transitions.layers.parallax.state.paused = !0),
                (Z.transitions.layers.scroll.state.paused = !0),
                Z.transitions._slideTransition &&
                  Z.transitions._slideTransition.stop(),
                Z.media.functions.pauseActiveMedia(!0);
              break;
            case "resumePopup":
              Z.layers.get("active").each(function () {
                Z.media.functions.playIfAllowed(te(this));
              }),
                Z.transitions._slideTimeline &&
                  (Z.transitions._slideTimeline.timeScale() < 0.001 &&
                    Z.transitions.layers.timeline.resume(),
                  Z.transitions._slideTimeline.play()),
                Z.transitions._slideTransition &&
                  Z.transitions._slideTransition.play();
              break;
            case "resumeSlider":
            case "resume":
              Z.transitions._slideTimeline &&
                (Z.transitions._slideTimeline.timeScale() < 0.001 &&
                  Z.transitions.layers.timeline.resume(),
                Z.slider.isScrollScene || Z.transitions._slideTimeline.play()),
                Z.media.functions.playActiveMedia(!0),
                Z.layers.get("active").each(function () {
                  var e = te(this).data(Z.defaults.init.dataKey);
                  e.loop._timeline && e.loop._timeline.play();
                }),
                (Z.transitions.layers.parallax.state.paused = !1),
                (Z.transitions.layers.scroll.state.paused = !1),
                Z.transitions._slideTransition &&
                  Z.transitions._slideTransition.play(),
                t &&
                  "performanceMode" === t &&
                  Z.functions.setStates(Z.slideshow, {
                    pausedByPerformance: !1,
                  });
              break;
            case "playMedia":
              Z.media.functions.playActiveMedia();
              break;
            case "pauseMedia":
              Z.media.functions.pauseActiveMedia();
              break;
            case "toggleSlider":
            case "toggle":
              Z.slider.state.isPaused
                ? ($.layerSlider("resume"), (Z.slider.state.isPaused = !1))
                : ($.layerSlider("pause"), (Z.slider.state.isPaused = !0));
              break;
            case "reset":
            case "resetSlider":
              break;
            case "resetSlide":
            case "resetCurrentSlide":
              Z.transitions.timelines.set("layers", function (e, t) {
                e.progress(0), e.stop();
              }),
                Z.media.functions.stop(!0);
              break;
            case "destroy":
            case "kill":
              if (Z.slider.state.isLoaded) {
                if (
                  (Z.functions.clearTimers(),
                  Z.functions.clearTimelines(),
                  Z.layers.$all.removeData(),
                  Z.api.hasEvent("sliderDidDestroy") &&
                    Z.api.triggerEvent("sliderDidDestroy"),
                  Z.slider.state.sholudBeRemoved || t)
                ) {
                  if (
                    (Z.slider.$hiddenWrapper.remove(),
                    Z.gui.timers.slidebar.$containerElement)
                  )
                    for (
                      var a = 0;
                      a < Z.gui.timers.slidebar.$containerElement.length;
                      a++
                    )
                      Z.gui.timers.slidebar.$containerElement[a] instanceof
                        jQuery &&
                        Z.gui.timers.slidebar.$containerElement[a].remove();
                  Z.api.hasEvent("sliderDidRemove") &&
                    Z.api.triggerEvent("sliderDidRemove");
                  var r = Z.slider.$spacingWrapper;
                  r.closest(".ls-popup").length &&
                    (r = r.closest(".ls-popup"))
                      .prev(".ls-popup-overlay")
                      .remove(),
                    r.remove(),
                    Z.slider.$silentWrapper && Z.slider.$silentWrapper.remove();
                }
                Z.functions.clearEvents(), window._layerSlider.removeSlider(B);
              } else
                Z.functions.setStates(Z.slider, {
                  shouldBeDestroyed: !0,
                  sholudBeRemoved: t || !1,
                });
              (Z.slider.positionToViewport = "under"), Z.device.scroll.enable();
          }
        },
        eventData: function () {
          return {
            data: Z,
            userData: Z.o,
            uid: B,
            target: I,
            slider: $,
            state: Z.slider.state,
            isBusy: Z.slider.isBusy(),
            event: { target: I },
            api: function (e, t, i, s) {
              $.layerSlider(e, t, i, s);
            },
            navigation: { direction: Z.navigation.direction },
            slides: {
              first: {
                index: Z.slides.first.index,
                deeplink: Z.slides.get.deeplink(Z.slides.first.index),
                data: Z.slides.first.data,
              },
              prev: {
                index: Z.slides.prev.index,
                deeplink: Z.slides.get.deeplink(Z.slides.prev.index),
                data: Z.slides.prev.data,
              },
              current: {
                index: Z.slides.current.index || Z.slides.first.index,
                deeplink: Z.slides.get.deeplink(Z.slides.current.index),
                layersIn: Z.layers.get("current,in"),
                layersOut: Z.layers.get("current,out"),
                timeline: Z.transitions._slideTimeline,
                data: Z.slides.current.data,
              },
              next: {
                index: Z.slides.next.index,
                deeplink: Z.slides.get.deeplink(Z.slides.next.index),
                layersIn: Z.layers.get("next,in"),
                layersOut: Z.layers.get("next,out"),
                data: Z.slides.next.data,
              },
              count: Z.slides.count,
            },
            slideChangeTimeline: Z.transitions._slideTransition,
            slideshow: {
              state: Z.slideshow.state,
              sequence: Z.slideshow.sequence,
              direction: Z.slideshow.direction,
              isPaused: Z.slideshow.isPaused(),
            },
            cycles: { max: Z.o.cycles, current: Z.slideshow.curCycle },
          };
        },
        triggerEvent: function (t, e) {
          var i, s;
          try {
            i = e
              ? ((s = $.triggerHandler(t + ".layerSlider", e)),
                $.triggerHandler(t + ".$", e))
              : ((s = $.triggerHandler(t + ".layerSlider")),
                $.triggerHandler(t + ".$"));
          } catch (e) {
            console.error(
              'LayerSlider: Error while calling event "' + t + '":\n\r\n\r',
              e
            );
          }
          return null != s
            ? s
            : "undefinded" != typeof i && null !== i
            ? i
            : void 0;
        },
      }),
      (Z.browser = {
        isSafari:
          !!navigator.userAgent.match(/(iPhone|iPod|iPad|Safari)/i) &&
          !navigator.userAgent.match(/(Opera|Chrome|Edge)/i),
        isChrome: function () {
          var e = window.chrome,
            t = window.navigator,
            i = t.vendor,
            s = void 0 !== window.opr,
            a = -1 < t.userAgent.indexOf("Edge"),
            a =
              !!t.userAgent.match("CriOS") ||
              (null != e && "Google Inc." === i && !1 == s && !1 == a);
          return a;
        },
        usesFileProtocol: -1 !== document.location.href.indexOf("file://"),
        supports3D: function () {
          for (
            var e = te("<div>"),
              t = !1,
              i = !1,
              s = [
                "perspective",
                "OPerspective",
                "msPerspective",
                "MozPerspective",
                "WebkitPerspective",
              ],
              a = [
                "transformStyle",
                "OTransformStyle",
                "msTransformStyle",
                "MozTransformStyle",
                "WebkitTransformStyle",
              ],
              r = s.length - 1;
            0 <= r;
            r--
          )
            t = t || void 0 !== e[0].style[s[r]];
          for (var o = a.length - 1; 0 <= o; o--)
            e.css("transform-style", "preserve-3d"),
              (i = i || "preserve-3d" == e[0].style[a[o]]);
          return (
            t &&
              void 0 !== e[0].style[s[4]] &&
              (e.attr("id", "ls-test3d").appendTo($),
              (t = 3 === e[0].offsetHeight && 9 === e[0].offsetLeft),
              e.remove()),
            t && i
          );
        },
        isOld: -1 !== navigator.userAgent.indexOf("rident/5"),
      }),
      (Z.initializedPlugins = {}),
      (Z.timeouts = {}),
      (Z.intervals = {}),
      (Z.debug = { options: {} }),
      (Z.plugin = {
        version: "7.7.6",
        release: "stable",
        releaseDate: "2023. 05. 23.",
      }),
      Z.slider.load();
  };
})(jQuery);
