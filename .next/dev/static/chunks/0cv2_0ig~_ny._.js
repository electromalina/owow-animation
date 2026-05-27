(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/gsap/gsap-core.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Animation",
    ()=>Animation,
    "Back",
    ()=>Back,
    "Bounce",
    ()=>Bounce,
    "Circ",
    ()=>Circ,
    "Cubic",
    ()=>Cubic,
    "Elastic",
    ()=>Elastic,
    "Expo",
    ()=>Expo,
    "GSCache",
    ()=>GSCache,
    "Linear",
    ()=>Linear,
    "Power0",
    ()=>Power0,
    "Power1",
    ()=>Power1,
    "Power2",
    ()=>Power2,
    "Power3",
    ()=>Power3,
    "Power4",
    ()=>Power4,
    "PropTween",
    ()=>PropTween,
    "Quad",
    ()=>Quad,
    "Quart",
    ()=>Quart,
    "Quint",
    ()=>Quint,
    "Sine",
    ()=>Sine,
    "SteppedEase",
    ()=>SteppedEase,
    "Strong",
    ()=>Strong,
    "Timeline",
    ()=>Timeline,
    "TimelineLite",
    ()=>Timeline,
    "TimelineMax",
    ()=>Timeline,
    "Tween",
    ()=>Tween,
    "TweenLite",
    ()=>Tween,
    "TweenMax",
    ()=>Tween,
    "_checkPlugin",
    ()=>_checkPlugin,
    "_colorExp",
    ()=>_colorExp,
    "_colorStringFilter",
    ()=>_colorStringFilter,
    "_config",
    ()=>_config,
    "_forEachName",
    ()=>_forEachName,
    "_getCache",
    ()=>_getCache,
    "_getProperty",
    ()=>_getProperty,
    "_getSetter",
    ()=>_getSetter,
    "_isString",
    ()=>_isString,
    "_isUndefined",
    ()=>_isUndefined,
    "_missingPlugin",
    ()=>_missingPlugin,
    "_numExp",
    ()=>_numExp,
    "_numWithUnitExp",
    ()=>_numWithUnitExp,
    "_parseRelative",
    ()=>_parseRelative,
    "_plugins",
    ()=>_plugins,
    "_relExp",
    ()=>_relExp,
    "_removeLinkedListItem",
    ()=>_removeLinkedListItem,
    "_renderComplexString",
    ()=>_renderComplexString,
    "_replaceRandom",
    ()=>_replaceRandom,
    "_round",
    ()=>_round,
    "_roundModifier",
    ()=>_roundModifier,
    "_setDefaults",
    ()=>_setDefaults,
    "_sortPropTweensByPriority",
    ()=>_sortPropTweensByPriority,
    "_ticker",
    ()=>_ticker,
    "clamp",
    ()=>clamp,
    "default",
    ()=>gsap,
    "distribute",
    ()=>distribute,
    "getUnit",
    ()=>getUnit,
    "gsap",
    ()=>gsap,
    "interpolate",
    ()=>interpolate,
    "mapRange",
    ()=>mapRange,
    "normalize",
    ()=>normalize,
    "pipe",
    ()=>pipe,
    "random",
    ()=>random,
    "selector",
    ()=>selector,
    "shuffle",
    ()=>shuffle,
    "snap",
    ()=>snap,
    "splitColor",
    ()=>splitColor,
    "toArray",
    ()=>toArray,
    "unitize",
    ()=>unitize,
    "wrap",
    ()=>wrap,
    "wrapYoyo",
    ()=>wrapYoyo
]);
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
}, _suppressOverwrites, _reverting, _context, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
    return typeof value === "string";
}, _isFunction = function _isFunction(value) {
    return typeof value === "function";
}, _isNumber = function _isNumber(value) {
    return typeof value === "number";
}, _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
}, _isObject = function _isObject(value) {
    return typeof value === "object";
}, _isNotFalse = function _isNotFalse(value) {
    return value !== false;
}, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
}, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {}, // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray, _randomExp = /random\([^)]+\)/g, _commaDelimExp = /,\s*/g, _strictNumExp = /(?:-?\.?\d|\.)+/gi, //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {}, _installScope = {}, _coreReady, _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
}, _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
}, _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
}, _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
}, _emptyFunc = function _emptyFunc() {
    return 0;
}, _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
}, _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
}, _revertConfig = {
    suppressEvents: true
}, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [
        targets
    ]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
        // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
        i = _harnessPlugins.length;
        while(i-- && !_harnessPlugins[i].targetTest(target)){}
        harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while(i--){
        targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
}, _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
}, _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
}, _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
}, //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, _roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
}, // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
}, _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
    var l = toFind.length, i = 0;
    for(; toSearch.indexOf(toFind[i]) < 0 && ++i < l;){}
    return i < l;
}, _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for(i = 0; i < l; i++){
        tween = a[i];
        tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
}, _isRevertWorthy = function _isRevertWorthy(animation) {
    return !!(animation._initted || animation._startAt || animation.add);
}, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || !!(_reverting && time < 0 && _isRevertWorthy(animation)));
    _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
}, _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
}, _passThrough = function _passThrough(p) {
    return p;
}, _setDefaults = function _setDefaults(obj, defaults) {
    for(var p in defaults){
        p in obj || (obj[p] = defaults[p]);
    }
    return obj;
}, _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function(obj, defaults) {
        for(var p in defaults){
            p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
        }
    };
}, _merge = function _merge(base, toMerge) {
    for(var p in toMerge){
        base[p] = toMerge[p];
    }
    return base;
}, _mergeDeep = function _mergeDeep(base, toMerge) {
    for(var p in toMerge){
        p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
}, _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {}, p;
    for(p in obj){
        p in excluding || (copy[p] = obj[p]);
    }
    return copy;
}, _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
        while(parent){
            func(vars, parent.vars.defaults);
            parent = parent.parent || parent._dp;
        }
    }
    return vars;
}, _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while(match && i-- && a1[i] === a2[i]){}
    return i < 0;
}, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
        firstProp = "_first";
    }
    if (lastProp === void 0) {
        lastProp = "_last";
    }
    var prev = parent[lastProp], t;
    if (sortBy) {
        t = child[sortBy];
        while(prev && prev[sortBy] > t){
            prev = prev._prev;
        }
    }
    if (prev) {
        child._next = prev._next;
        prev._next = child;
    } else {
        child._next = parent[firstProp];
        parent[firstProp] = child;
    }
    if (child._next) {
        child._next._prev = child;
    } else {
        parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
}, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
        firstProp = "_first";
    }
    if (lastProp === void 0) {
        lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
        prev._next = next;
    } else if (parent[firstProp] === child) {
        parent[firstProp] = next;
    }
    if (next) {
        next._prev = prev;
    } else if (parent[lastProp] === child) {
        parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
}, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
}, _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
        // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
        var a = animation;
        while(a){
            a._dirty = 1;
            a = a.parent;
        }
    }
    return animation;
}, _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while(parent && parent.parent){
        //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
        parent._dirty = 1;
        parent.totalDuration();
        parent = parent.parent;
    }
    return animation;
}, _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
}, _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
}, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
}, // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
    return tTime && whole === tTime ? whole - 1 : whole;
}, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
}, _setEnd = function _setEnd(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
}, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
        animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
        _setEnd(animation);
        parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
    }
    return animation;
}, /*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/ _postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
        // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
        t = _parentToChildTotalTime(timeline.rawTime(), child);
        if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
            child.render(t, true);
        }
    } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
        //in case any of the ancestors had completed but should now be enabled...
        if (timeline._dur < timeline.duration()) {
            t = timeline;
            while(t._dp){
                t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.
                t = t._dp;
            }
        }
        timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
    }
}, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || _postAddChecks(timeline, child);
    timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)
    return timeline;
}, _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
}, _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
        return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
        _lazyTweens.push(tween);
        tween._lazy = [
            tTime,
            suppressEvents
        ];
        return 1;
    }
}, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
}, // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
}, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
    repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
        // in case there's a zero-duration tween that has a repeat with a repeatDelay
        tTime = _clamp(0, tween._tDur, totalTime);
        iteration = _animationCycle(tTime, repeatDelay);
        tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
        if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
            // if iteration changed
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
        }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
        if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
            // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
            return;
        }
        prevIteration = tween._zTime;
        tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
        suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.
        tween.ratio = ratio;
        tween._from && (ratio = 1 - ratio);
        tween._time = 0;
        tween._tTime = tTime;
        pt = tween._pt;
        while(pt){
            pt.r(ratio, pt.d);
            pt = pt._next;
        }
        totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
        tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
        tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
        if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents && !_reverting) {
                _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                tween._prom && tween._prom();
            }
        }
    } else if (!tween._zTime) {
        tween._zTime = totalTime;
    }
}, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
        child = animation._first;
        while(child && child._start <= time){
            if (child.data === "isPause" && child._start > prevTime) {
                return child;
            }
            child = child._next;
        }
    } else {
        child = animation._last;
        while(child && child._start >= time){
            if (child.data === "isPause" && child._start < prevTime) {
                return child;
            }
            child = child._prev;
        }
    }
}, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
}, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
}, _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
}, _parsePosition = function _parsePosition(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
    i, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
        //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
        offset = position.charAt(0);
        isPercent = position.substr(-1) === "%";
        i = position.indexOf("=");
        if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
        }
        if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
        }
        offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
        if (isPercent && percentAnimation) {
            offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
        }
        return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
}, _createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;
    if (type) {
        irVars = vars;
        parent = timeline;
        while(parent && !("immediateRender" in irVars)){
            // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
            irVars = parent.vars.defaults || {};
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
        }
        vars.immediateRender = _isNotFalse(irVars.immediateRender);
        type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
}, _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
}, _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
}, getUnit = function getUnit(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
}, // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function(v) {
        return _clamp(min, max, v);
    });
}, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
}, _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
        accumulator = [];
    }
    return ar.forEach(function(value) {
        var _accumulator;
        return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
}, // takes any value and returns an Array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [
        value
    ] : [];
}, selector = function selector(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
        var el = value.current || value.nativeElement || value;
        return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
}, shuffle = function shuffle(a) {
    return a.sort(function() {
        return .5 - Math.random();
    });
}, // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = (Math.random() * i) | 0, v = a[--i], a[i] = a[j], a[j] = v); return a;
// for distributing values across an Array. Can accept a number, a function or (most commonly) an object which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array.
distribute = function distribute(v) {
    if (_isFunction(v)) {
        return v;
    }
    var vars = _isObject(v) ? v : {
        each: v
    }, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
    ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
        ratioX = ratioY = ({
            center: .5,
            edges: .5,
            end: 1
        })[from] || 0;
    } else if (!isDecimal && ratios) {
        ratioX = from[0];
        ratioY = from[1];
    }
    return function(i, target, a) {
        var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
        if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [
                1,
                _bigNum
            ])[1];
            if (!wrapAt) {
                max = -_bigNum;
                while(max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l){}
                wrapAt < l && wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
            originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
            max = 0;
            min = _bigNum;
            for(j = 0; j < l; j++){
                x = j % wrapAt - originX;
                y = originY - (j / wrapAt | 0);
                distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                d > max && (max = d);
                d < min && (min = d);
            }
            from === "random" && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0; //unit
            ease = ease && l < 0 ? _invertEase(ease) : ease;
        }
        l = (distances[i] - distances.min) / distances.max || 0;
        return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
    };
}, _roundModifier = function _roundModifier(v) {
    //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())
    return function(raw) {
        var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
        return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
    };
}, snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
        radius = isArray = snapTo.radius || _bigNum;
        if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if (is2D = !_isNumber(snapTo[0])) {
                radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
            }
        } else {
            snapTo = _roundModifier(snapTo.increment);
        }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
        is2D = snapTo(raw);
        return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
        var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
        while(i--){
            if (is2D) {
                dx = snapTo[i].x - x;
                dy = snapTo[i].y - y;
                dx = dx * dx + dy * dy;
            } else {
                dx = Math.abs(snapTo[i] - x);
            }
            if (dx < min) {
                min = dx;
                closest = i;
            }
        }
        closest = !radius || min <= radius ? snapTo[closest] : raw;
        return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
}, random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
        return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
}, pipe = function pipe() {
    for(var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++){
        functions[_key] = arguments[_key];
    }
    return function(value) {
        return functions.reduce(function(v, f) {
            return f(v);
        }, value);
    };
}, unitize = function unitize(func, unit) {
    return function(value) {
        return func(parseFloat(value)) + (unit || getUnit(value));
    };
}, normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
}, _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
        return a[~~wrapper(index)];
    });
}, wrap = function wrap(min, max, value) {
    // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function(value) {
        return (range + (value - min) % range) % range + min;
    });
}, wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function(value) {
        value = (total + (value - min) % total) % total || 0;
        return min + (value > range ? total - value : value);
    });
}, _replaceRandom = function _replaceRandom(s) {
    return s.replace(_randomExp, function(match) {
        //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
        var arIndex = match.indexOf("[") + 1, values = match.substring(arIndex || 7, arIndex ? match.indexOf("]") : match.length - 1).split(_commaDelimExp);
        return random(arIndex ? values : +values[0], arIndex ? 0 : +values[1], +values[2] || 1e-5);
    });
}, mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value) {
        return outMin + ((value - inMin) / inRange * outRange || 0);
    });
}, interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p) {
        return (1 - p) * start + p * end;
    };
    if (!func) {
        var isString = _isString(start), master = {}, p, i, interpolators, l, il;
        progress === true && (mutate = 1) && (progress = null);
        if (isString) {
            start = {
                p: start
            };
            end = {
                p: end
            };
        } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for(i = 1; i < l; i++){
                interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
            }
            l--;
            func = function func(p) {
                p *= l;
                var i = Math.min(il, ~~p);
                return interpolators[i](p - i);
            };
            progress = end;
        } else if (!mutate) {
            start = _merge(_isArray(start) ? [] : {}, start);
        }
        if (!interpolators) {
            for(p in end){
                _addPropTween.call(master, start, p, "get", end[p]);
            }
            func = function func(p) {
                return _renderPropTweens(p, master) || (isString ? start.p : start);
            };
        }
    }
    return _conditionalReturn(progress, func);
}, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    //used for nextLabel() and previousLabel()
    var labels = timeline.labels, min = _bigNum, p, distance, label;
    for(p in labels){
        distance = labels[p] - fromTime;
        if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
        }
    }
    return label;
}, _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context = animation._ctx, params, scope, result;
    if (!callback) {
        return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
    context && (_context = context);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
}, _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
}, _quickTween, _registerPluginQueue = [], _createPlugin = function _createPlugin(config) {
    if (!config) return;
    config = !config.name && config["default"] || config; // UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.
    if (_windowExists() || config.headless) {
        // edge case: some build tools may pass in a null/undefined value
        var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
            this._props = [];
        } : config, //in case someone passes in an object that's not a plugin, like CustomEase
        instanceDefaults = {
            init: _emptyFunc,
            render: _renderPropTweens,
            add: _addPropTween,
            kill: _killPropTweensOf,
            modifier: _addPluginModifier,
            rawVars: 0
        }, statics = {
            targetTest: 0,
            get: 0,
            getSetter: _getSetter,
            aliases: {},
            register: 0
        };
        _wake();
        if (config !== Plugin) {
            if (_plugins[name]) {
                return;
            }
            _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods
            _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods
            _plugins[Plugin.prop = name] = Plugin;
            if (config.targetTest) {
                _harnessPlugins.push(Plugin);
                _reservedProps[name] = 1;
            }
            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
        }
        _addGlobal(name, Plugin);
        config.register && config.register(gsap, Plugin, PropTween);
    } else {
        _registerPluginQueue.push(config);
    }
}, /*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */ _255 = 255, _colorLookup = {
    aqua: [
        0,
        _255,
        _255
    ],
    lime: [
        0,
        _255,
        0
    ],
    silver: [
        192,
        192,
        192
    ],
    black: [
        0,
        0,
        0
    ],
    maroon: [
        128,
        0,
        0
    ],
    teal: [
        0,
        128,
        128
    ],
    blue: [
        0,
        0,
        _255
    ],
    navy: [
        0,
        0,
        128
    ],
    white: [
        _255,
        _255,
        _255
    ],
    olive: [
        128,
        128,
        0
    ],
    yellow: [
        _255,
        _255,
        0
    ],
    orange: [
        _255,
        165,
        0
    ],
    gray: [
        128,
        128,
        128
    ],
    purple: [
        128,
        0,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    red: [
        _255,
        0,
        0
    ],
    pink: [
        _255,
        192,
        203
    ],
    cyan: [
        0,
        _255,
        _255
    ],
    transparent: [
        _255,
        _255,
        _255,
        0
    ]
}, // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
}, splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [
        v >> 16,
        v >> 8 & _255,
        v & _255
    ] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
        if (v.substr(-1) === ",") {
            //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
            v = v.substr(0, v.length - 1);
        }
        if (_colorLookup[v]) {
            a = _colorLookup[v];
        } else if (v.charAt(0) === "#") {
            if (v.length < 6) {
                //for shorthand like #9F0 or #9F0F (could have alpha)
                r = v.charAt(1);
                g = v.charAt(2);
                b = v.charAt(3);
                v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
            if (v.length === 9) {
                // hex with alpha, like #fd5e53ff
                a = parseInt(v.substr(1, 6), 16);
                return [
                    a >> 16,
                    a >> 8 & _255,
                    a & _255,
                    parseInt(v.substr(7), 16) / 255
                ];
            }
            v = parseInt(v.substr(1), 16);
            a = [
                v >> 16,
                v >> 8 & _255,
                v & _255
            ];
        } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match(_strictNumExp);
            if (!toHSL) {
                h = +a[0] % 360 / 360;
                s = +a[1] / 100;
                l = +a[2] / 100;
                g = l <= .5 ? l * (s + 1) : l + s - l * s;
                r = l * 2 - g;
                a.length > 3 && (a[3] *= 1); //cast as number
                a[0] = _hue(h + 1 / 3, r, g);
                a[1] = _hue(h, r, g);
                a[2] = _hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
                //if relative values are found, just return the raw strings with the relative prefixes in place.
                a = v.match(_numExp);
                forceAlpha && a.length < 4 && (a[3] = 1);
                return a;
            }
        } else {
            a = v.match(_strictNumExp) || _colorLookup.transparent;
        }
        a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
        r = a[0] / _255;
        g = a[1] / _255;
        b = a[2] / _255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;
        if (max === min) {
            h = s = 0;
        } else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
        }
        a[0] = ~~(h + .5);
        a[1] = ~~(s * 100 + .5);
        a[2] = ~~(l * 100 + .5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
}, _colorOrderData = function _colorOrderData(v) {
    // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function(v) {
        var a = v.match(_numWithUnitExp) || [];
        values.push.apply(values, a);
        c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
}, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) {
        return s;
    }
    colors = colors.map(function(color) {
        return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
        d = _colorOrderData(s);
        c = orderMatchData.c;
        if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
            l = shell.length - 1;
            for(; i < l; i++){
                result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
            }
        }
    }
    if (!shell) {
        shell = s.split(_colorExp);
        l = shell.length - 1;
        for(; i < l; i++){
            result += shell[i] + colors[i];
        }
    }
    return result + shell[l];
}, _colorExp = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
    p;
    for(p in _colorLookup){
        s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
}(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
        toHSL = _hslExp.test(combined);
        a[1] = _formatColors(a[1], toHSL);
        a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.
        return true;
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */ _tickerActive, _ticker = function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
        var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
        (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time = _lastUpdate - _startTime;
        overlap = time - _nextTime;
        if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1000;
            _self.time = time = time / 1000;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
        }
        manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
        if (dispatch) {
            for(_i = 0; _i < _listeners.length; _i++){
                // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
                _listeners[_i](time, _delta, frame, v);
            }
        }
    };
    _self = {
        time: 0,
        frame: 0,
        tick: function tick() {
            _tick(true);
        },
        deltaRatio: function deltaRatio(fps) {
            return _delta / (1000 / (fps || 60));
        },
        wake: function wake() {
            if (_coreReady) {
                if (!_coreInitted && _windowExists()) {
                    _win = _coreInitted = window;
                    _doc = _win.document || {};
                    _globals.gsap = gsap;
                    (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                    _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                    _registerPluginQueue.forEach(_createPlugin);
                }
                _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
                _id && _self.sleep();
                _req = _raf || function(f) {
                    return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
                };
                _tickerActive = 1;
                _tick(2);
            }
        },
        sleep: function sleep() {
            (_raf ? cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
        },
        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited
            _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
        },
        fps: function fps(_fps) {
            _gap = 1000 / (_fps || 240);
            _nextTime = _self.time * 1000 + _gap;
        },
        add: function add(callback, once, prioritize) {
            var func = once ? function(t, d, f, v) {
                callback(t, d, f, v);
                _self.remove(func);
            } : callback;
            _self.remove(callback);
            _listeners[prioritize ? "unshift" : "push"](func);
            _wake();
            return func;
        },
        remove: function remove(callback, i) {
            ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
        },
        _listeners: _listeners
    };
    return _self;
}(), _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
}, //also ensures the core classes are initialized.
/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/ _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
    //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for(; i < l; i++){
        val = split[i];
        index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
        parsedVal = val.substr(0, index);
        obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
        key = val.substr(index + 1).trim();
    }
    return obj;
}, _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
}, _configEaseFromString = function _configEaseFromString(name) {
    //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [
        _parseObjectInString(split[1])
    ] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
}, _invertEase = function _invertEase(ease) {
    return function(p) {
        return 1 - ease(1 - p);
    };
}, _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
}, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
        easeOut = function easeOut(p) {
            return 1 - easeIn(1 - p);
        };
    }
    if (easeInOut === void 0) {
        easeInOut = function easeInOut(p) {
            return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
        };
    }
    var ease = {
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
        _easeMap[name] = _globals[name] = ease;
        _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
        for(var p in ease){
            _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
        }
    });
    return ease;
}, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function(p) {
        return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
}, _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
    p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2; //precalculate to optimize
    ease.config = function(amplitude, period) {
        return _configElastic(type, amplitude, period);
    };
    return ease;
}, _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) {
        overshoot = 1.70158;
    }
    var easeOut = function easeOut(p) {
        return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot) {
        return _configBack(type, overshoot);
    };
    return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
        return Math.pow(p, power);
    } : function(p) {
        return p;
    }, function(p) {
        return 1 - Math.pow(1 - p, power);
    }, function(p) {
        return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
        return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };
    _insertEase("Bounce", function(p) {
        return 1 - easeOut(1 - p);
    }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
    return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
}); // previously 2 ** (10 * (p - 1)) but that doesn't end up with the value quite at the right spot so we do a blended ease to ensure it lands where it should perfectly.
_insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
        if (steps === void 0) {
            steps = 1;
        }
        var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
        return function(p) {
            return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
        };
    }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
};
var Animation = /*#__PURE__*/ function() {
    function Animation(vars) {
        this.vars = vars;
        this._delay = +vars.delay || 0;
        if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }
        this._ts = 1;
        _setDuration(this, +vars.duration, 1, 1);
        this.data = vars.data;
        if (_context) {
            this._ctx = _context;
            _context.data.push(this);
        }
        _tickerActive || _ticker.wake();
    }
    var _proto = Animation.prototype;
    _proto.delay = function delay(value) {
        if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
        }
        return this._delay;
    };
    _proto.duration = function duration(value) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) {
            return this._tDur;
        }
        this._dirty = 0;
        return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        _wake();
        if (!arguments.length) {
            return this._tTime;
        }
        var parent = this._dp;
        if (parent && parent.smoothChildTiming && this._ts) {
            _alignPlayhead(this, _totalTime);
            !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
            //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
            while(parent && parent.parent){
                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
                    parent.totalTime(parent._tTime, true);
                }
                parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
                //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
                _addToTimeline(this._dp, this, this._start - this._delay);
            }
        }
        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !this._initted && this._dur && _totalTime || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
            this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
            //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
            //   this._lock = 1;
            _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
        //}
        }
        return this;
    };
    _proto.time = function time(value, suppressEvents) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
    };
    _proto.progress = function progress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    } // potential future addition:
    ;
    _proto.timeScale = function timeScale(value, suppressEvents) {
        if (!arguments.length) {
            return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
        }
        if (this._rts === value) {
            return this;
        }
        var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
        // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
        //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
        // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
        this._rts = +value || 0;
        this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.
        this.totalTime(_clamp(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);
        _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.
        return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
        if (!arguments.length) {
            return this._ps;
        } // possible future addition - if an animation is removed from its parent and then .restart() or .play() or .resume() is called, perhaps we should force it back into the globalTimeline but be careful because what if it's already at its end? We don't want it to just persist forever and not get released for GC.
        // !this.parent && !value && this._tTime < this._tDur && this !== _globalTimeline && _globalTimeline.add(this);
        if (this._ps !== value) {
            this._ps = value;
            if (value) {
                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.
                this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
            } else {
                _wake();
                this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
            }
        }
        return this;
    };
    _proto.startTime = function startTime(value) {
        if (arguments.length) {
            this._start = _roundPrecise(value);
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, this._start - this._delay);
            return this;
        }
        return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
        return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp; // _dp = detached parent
        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config) {
        if (config === void 0) {
            config = _revertConfig;
        }
        var prevIsReverting = _reverting;
        _reverting = config;
        if (_isRevertWorthy(this)) {
            this.timeline && this.timeline.revert(config);
            this.totalTime(-0.01, config.suppressEvents);
        }
        this.data !== "nested" && config.kill !== false && this.kill();
        _reverting = prevIsReverting;
        return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
        var animation = this, time = arguments.length ? rawTime : animation.rawTime();
        while(animation){
            time = animation._start + time / (Math.abs(animation._ts) || 1);
            animation = animation._dp;
        }
        return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
    };
    _proto.repeat = function repeat(value) {
        if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return _onUpdateTotalDuration(this);
        }
        return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
            _onUpdateTotalDuration(this);
            return time ? this.time(time) : this;
        }
        return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
            this._yoyo = value;
            return this;
        }
        return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
        this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
        this._dur || (this._zTime = -_tinyNum); // ensures onComplete fires on a zero-duration animation that gets restarted.
        return this;
    };
    _proto.play = function play(from, suppressEvents) {
        from != null && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
        from != null && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
    };
    _proto.resume = function resume() {
        return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
        if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.
            return this;
        }
        return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -_tinyNum;
        return this;
    };
    _proto.isActive = function isActive() {
        var parent = this.parent || this._dp, start = this._start, rawTime;
        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;
        if (arguments.length > 1) {
            if (!callback) {
                delete vars[type];
            } else {
                vars[type] = callback;
                params && (vars[type + "Params"] = params);
                type === "onUpdate" && (this._onUpdate = callback);
            }
            return this;
        }
        return vars[type];
    };
    _proto.then = function then(onFulfilled) {
        var self = this, prevProm = self._prom;
        return new Promise(function(resolve) {
            var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
                var _then = self.then;
                self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)
                prevProm && prevProm();
                _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                resolve(f);
                self.then = _then;
            };
            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
                _resolve();
            } else {
                self._prom = _resolve;
            }
        });
    };
    _proto.kill = function kill() {
        _interrupt(this);
    };
    return Animation;
}();
_setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
});
var Timeline = /*#__PURE__*/ function(_Animation) {
    _inheritsLoose(Timeline, _Animation);
    function Timeline(vars, position) {
        var _this;
        if (vars === void 0) {
            vars = {};
        }
        _this = _Animation.call(this, vars) || this;
        _this.labels = {};
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = _isNotFalse(vars.sortChildren);
        _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
        vars.reversed && _this.reverse();
        vars.paused && _this.paused(true);
        vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
    }
    var _proto2 = Timeline.prototype;
    _proto2.to = function to(targets, vars, position) {
        _createTweenType(0, arguments, this);
        return this;
    };
    _proto2.from = function from(targets, vars, position) {
        _createTweenType(1, arguments, this);
        return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        _createTweenType(2, arguments, this);
        return this;
    };
    _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new Tween(targets, vars, _parsePosition(this, position), 1);
        return this;
    };
    _proto2.call = function call(callback, params, position) {
        return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    } //ONLY for backward compatibility! Maybe delete?
    ;
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new Tween(targets, vars, _parsePosition(this, position));
        return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.runBackwards = 1;
        _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
        toVars.startAt = fromVars;
        _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
        crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
        this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
        if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
                //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
                tTime += this._time - prevTime;
                totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
                dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
                (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                yoyo = this._yoyo;
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) {
                    return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                }
                time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    prevIteration = _roundPrecise(tTime / cycleDuration); // full decimal version of iterations, not the previous iteration (we're reusing prevIteration variable for efficiency)
                    iteration = ~~prevIteration;
                    if (iteration && iteration === prevIteration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://gsap.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion
                if (yoyo && iteration & 1) {
                    time = dur - time;
                    isYoyo = 1;
                }
                /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */ if (iteration !== prevIteration && !this._lock) {
                    var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                    iteration < prevIteration && (rewinding = !rewinding);
                    prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.
                    this._lock = 1;
                    this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                    this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.
                    !suppressEvents && this.parent && _callback(this, "onRepeat");
                    if (this.vars.repeatRefresh && !isYoyo) {
                        this.invalidate()._lock = 1;
                        prevIteration = iteration; // otherwise, the onStart() may fire on the 2nd iteration.
                    }
                    if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
                        // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
                        return this;
                    }
                    dur = this._dur; // in case the duration changed in the onRepeat
                    tDur = this._tDur;
                    if (doesWrap) {
                        this._lock = 2;
                        prevTime = rewinding ? dur : -0.0001;
                        this.render(prevTime, true);
                        this.vars.repeatRefresh && !isYoyo && this.invalidate();
                    }
                    this._lock = 0;
                    if (!this._ts && !prevPaused) {
                        return this;
                    }
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
                pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
                if (pauseTween) {
                    tTime -= time - (time = pauseTween._start);
                }
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !!timeScale; // as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
            if (!this._initted) {
                this._onUpdate = this.vars.onUpdate;
                this._initted = 1;
                this._zTime = totalTime;
                prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
            }
            if (!prevTime && tTime && dur && !suppressEvents && !prevIteration) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) {
                    // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                    return this;
                }
            }
            if (time >= prevTime && totalTime >= 0) {
                child = this._first;
                while(child){
                    next = child._next;
                    if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) {
                            // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                            return this.render(totalTime, suppressEvents, force);
                        }
                        child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            } else {
                child = this._last;
                var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.
                while(child){
                    next = child._prev;
                    if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) {
                            // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                            return this.render(totalTime, suppressEvents, force);
                        }
                        child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && _isRevertWorthy(child)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            }
            if (pauseTween && !suppressEvents) {
                this.pause();
                pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                if (this._ts) {
                    //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
                    this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.
                    _setEnd(this);
                    return this.render(totalTime, suppressEvents, force);
                }
            }
            this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
            if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
                if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                    if (!this._lock) {
                        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
                        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                            _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
            }
        }
        return this;
    };
    _proto2.add = function add(child, position) {
        var _this2 = this;
        _isNumber(position) || (position = _parsePosition(this, position, child));
        if (!(child instanceof Animation)) {
            if (_isArray(child)) {
                child.forEach(function(obj) {
                    return _this2.add(obj, position);
                });
                return this;
            }
            if (_isString(child)) {
                return this.addLabel(child, position);
            }
            if (_isFunction(child)) {
                child = Tween.delayedCall(0, child);
            } else {
                return this;
            }
        }
        return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
        if (nested === void 0) {
            nested = true;
        }
        if (tweens === void 0) {
            tweens = true;
        }
        if (timelines === void 0) {
            timelines = true;
        }
        if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = -_bigNum;
        }
        var a = [], child = this._first;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                if (child instanceof Tween) {
                    tweens && a.push(child);
                } else {
                    timelines && a.push(child);
                    nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                }
            }
            child = child._next;
        }
        return a;
    };
    _proto2.getById = function getById(id) {
        var animations = this.getChildren(1, 1, 1), i = animations.length;
        while(i--){
            if (animations[i].vars.id === id) {
                return animations[i];
            }
        }
    };
    _proto2.remove = function remove(child) {
        if (_isString(child)) {
            return this.removeLabel(child);
        }
        if (_isFunction(child)) {
            return this.killTweensOf(child);
        }
        child.parent === this && _removeLinkedListItem(this, child);
        if (child === this._recent) {
            this._recent = this._last;
        }
        return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) {
            return this._tTime;
        }
        this._forcing = 1;
        if (!this._dp && this._ts) {
            //special case for the global timeline (or any other that has no parent or detached parent).
            this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
        }
        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
        this._forcing = 0;
        return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = _parsePosition(this, position);
        return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
        var t = Tween.delayedCall(0, callback || _emptyFunc, params);
        t.data = "isPause";
        this._hasPause = 1;
        return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = _parsePosition(this, position);
        while(child){
            if (child._start === position && child.data === "isPause") {
                _removeFromParent(child);
            }
            child = child._next;
        }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
        while(i--){
            _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        }
        return this;
    };
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
        var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), // a number is interpreted as a global time. If the animation spans
        children;
        while(child){
            if (child instanceof Tween) {
                if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
                    // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
                    a.push(child);
                }
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
                a.push.apply(a, children);
            }
            child = child._next;
        }
        return a;
    } // potential future feature - targets() on timelines
    ;
    _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {};
        var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
            onStart: function onStart() {
                tl.pause();
                if (!initted) {
                    var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                    tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                    initted = 1;
                }
                _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
            }
        }, vars));
        return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
        return this.tweenTo(toPosition, _setDefaults({
            startAt: {
                time: _parsePosition(this, fromPosition)
            }
        }, vars));
    };
    _proto2.recent = function recent() {
        return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) {
            afterTime = this._time;
        }
        return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) {
            beforeTime = this._time;
        }
        return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
        if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = 0;
        }
        var child = this._first, labels = this.labels, p;
        amount = _roundPrecise(amount);
        while(child){
            if (child._start >= ignoreBeforeTime) {
                child._start += amount;
                child._end += amount;
            }
            child = child._next;
        }
        if (adjustLabels) {
            for(p in labels){
                if (labels[p] >= ignoreBeforeTime) {
                    labels[p] += amount;
                }
            }
        }
        return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
        var child = this._first;
        this._lock = 0;
        while(child){
            child.invalidate(soft);
            child = child._next;
        }
        return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) {
            includeLabels = true;
        }
        var child = this._first, next;
        while(child){
            next = child._next;
            this.remove(child);
            child = next;
        }
        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {});
        return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
        var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
        if (arguments.length) {
            return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
        }
        if (self._dirty) {
            parent = self.parent;
            while(child){
                prev = child._prev; //record it here in case the tween changes position in the sequence...
                child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.
                start = child._start;
                if (start > prevStart && self._sort && child._ts && !self._lock) {
                    //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
                    self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().
                    _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                } else {
                    prevStart = start;
                }
                if (start < 0 && child._ts) {
                    //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
                    max -= start;
                    if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                        self._start += _roundPrecise(start / self._ts);
                        self._time -= start;
                        self._tTime -= start;
                    }
                    self.shiftChildren(-start, false, -1e999);
                    prevStart = 0;
                }
                child._end > max && child._ts && (max = child._end);
                child = prev;
            }
            _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
            self._dirty = 0;
        }
        return self._tDur;
    };
    Timeline.updateRoot = function updateRoot(time) {
        if (_globalTimeline._ts) {
            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
            _lastRenderedFrame = _ticker.frame;
        }
        if (_ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var child = _globalTimeline._first;
            if (!child || !child._ts) {
                if (_config.autoSleep && _ticker._listeners.length < 2) {
                    while(child && !child._ts){
                        child = child._next;
                    }
                    child || _ticker.sleep();
                }
            }
        }
    };
    return Timeline;
}(Animation);
_setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
        end = _replaceRandom(end);
    }
    if (stringFilter) {
        a = [
            start,
            end
        ];
        stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
        start = a[0];
        end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while(result = _complexStringNumExp.exec(end)){
        endNum = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
            color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(") {
            color = 1;
        }
        if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
            pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
                m: color && color < 4 ? Math.round : 0
            };
            index = _complexStringNumExp.lastIndex;
        }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
        pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    }
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    return pt;
}, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
        if (~end.indexOf("random(")) {
            end = _replaceRandom(end);
        }
        if (end.charAt(1) === "=") {
            pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
            if (pt || pt === 0) {
                // to avoid isNaN, like if someone passes in a value like "!= whatever"
                end = pt;
            }
        }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
        if (!isNaN(parsedStart * end) && end !== "") {
            // fun fact: any number multiplied by "" is evaluated as the number 0!
            pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
        }
        !currentValue && !(prop in target) && _missingPlugin(prop, end);
        return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
}, //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
        return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p;
    for(p in vars){
        copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
}, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
        if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.
            i = plugin._props.length;
            while(i--){
                ptLookup[plugin._props[i]] = pt;
            }
        }
    }
    return plugin;
}, _overwritingTween, //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens, _initTween = function _initTween(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, reverseEase = vars.easeReverse || yoyoEase, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._rEase = reverseEase && (_parseEase(reverseEase) || tween._ease);
    tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.
    if (tween._from) tween.ratio = 1;
    if (!tl || keyframes && !vars.stagger) {
        //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
        harness = targets[0] ? _getCache(targets[0]).harness : 0;
        harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.
        cleanVars = _copyExcluding(vars, _reservedProps);
        if (prevStartAt) {
            prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.
            time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
            // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.
            prevStartAt._lazy = 0;
        }
        if (startAt) {
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                data: "isStart",
                overwrite: false,
                parent: parent,
                immediateRender: true,
                lazy: !prevStartAt && _isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate: onUpdate && function() {
                    return _callback(tween, "onUpdate");
                },
                stagger: 0
            }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);
            tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.
            tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween
            time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.
            if (immediateRender) {
                if (dur && time <= 0 && tTime <= 0) {
                    // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
                    time && (tween._zTime = time);
                    return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                }
            }
        } else if (runBackwards && dur) {
            // from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
            if (!prevStartAt) {
                time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                p = _setDefaults({
                    overwrite: false,
                    data: "isFromStart",
                    //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                    lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
                    immediateRender: immediateRender,
                    //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                    stagger: 0,
                    parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
                }, cleanVars);
                harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})
                _removeFromParent(tween._startAt = Tween.set(targets, p));
                tween._startAt._dp = 0; // don't allow it to get put back into root timeline!
                tween._startAt._sat = tween; // used in globalTime()
                time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
                tween._zTime = time;
                if (!immediateRender) {
                    _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded
                } else if (!time) {
                    return;
                }
            }
        }
        tween._pt = tween._ptCache = 0;
        lazy = dur && _isNotFalse(lazy) || lazy && !dur;
        for(i = 0; i < targets.length; i++){
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                plugin._props.forEach(function(name) {
                    ptLookup[name] = pt;
                });
                plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
                for(p in cleanVars){
                    if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                        plugin.priority && (hasPriority = 1);
                    } else {
                        ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                    }
                }
            }
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
                _overwritingTween = tween;
                _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!
                overwritten = !tween.parent;
                _overwritingTween = 0;
            }
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
        }
        hasPriority && _sortPropTweensByPriority(tween);
        tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
    keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
}, _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
    if (!ptCache) {
        ptCache = tween._ptCache[property] = [];
        lookup = tween._ptLookup;
        i = tween._targets.length;
        while(i--){
            pt = lookup[i][property];
            if (pt && pt.d && pt.d._pt) {
                // it's a plugin, so find the nested PropTween
                pt = pt.d._pt;
                while(pt && pt.p !== property && pt.fp !== property){
                    // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
                    pt = pt._next;
                }
            }
            if (!pt) {
                // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
                // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
                _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.
                tween.vars[property] = "+=0";
                _initTween(tween, time);
                _forceAllPropTweens = 0;
                return skipRecursion ? _warn(property + " not eligible for reset. Try splitting into individual properties") : 1; // if someone tries to do a quickTo() on a special property like borderRadius which must get split into 4 different properties, that's not eligible for .resetTo().
            }
            ptCache.push(pt);
        }
    }
    i = ptCache.length;
    while(i--){
        rootPT = ptCache[i];
        pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.
        pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
        pt.c = value - pt.s;
        rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)
        rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
    }
}, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) {
        return vars;
    }
    copy = _merge({}, vars);
    for(p in propertyAliases){
        if (p in copy) {
            aliases = propertyAliases[p].split(",");
            i = aliases.length;
            while(i--){
                copy[aliases[i]] = copy[p];
            }
        }
    }
    return copy;
}, // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
        a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease
        obj.forEach(function(value, i) {
            return a.push({
                t: i / (obj.length - 1) * 100,
                v: value,
                e: ease
            });
        });
    } else {
        for(p in obj){
            a = allProps[p] || (allProps[p] = []);
            p === "ease" || a.push({
                t: parseFloat(prop),
                v: obj[p],
                e: ease
            });
        }
    }
}, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
}, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
});
var Tween = /*#__PURE__*/ function(_Animation2) {
    _inheritsLoose(Tween, _Animation2);
    function Tween(targets, vars, position, skipInherit) {
        var _this3;
        if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
        }
        _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
        var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [
            targets
        ] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
        _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
        _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property
        _this3._overwrite = overwrite;
        if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            vars = _this3.vars;
            var easeReverse = vars.easeReverse || vars.yoyoEase;
            tl = _this3.timeline = new Timeline({
                data: "nested",
                defaults: defaults || {},
                targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
            }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.
            tl.kill();
            tl.parent = tl._dp = _assertThisInitialized(_this3);
            tl._start = 0;
            if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                l = parsedTargets.length;
                staggerFunc = stagger && distribute(stagger);
                if (_isObject(stagger)) {
                    //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
                    for(p in stagger){
                        if (~_staggerTweenProps.indexOf(p)) {
                            staggerVarsToMerge || (staggerVarsToMerge = {});
                            staggerVarsToMerge[p] = stagger[p];
                        }
                    }
                }
                for(i = 0; i < l; i++){
                    copy = _copyExcluding(vars, _staggerPropsToSkip);
                    copy.stagger = 0;
                    easeReverse && (copy.easeReverse = easeReverse);
                    staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                    curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.
                    copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                    copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                    if (!stagger && l === 1 && copy.delay) {
                        // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
                        _this3._delay = delay = copy.delay;
                        _this3._start += delay;
                        copy.delay = 0;
                    }
                    tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                    tl._ease = _easeMap.none;
                }
                tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
            } else if (keyframes) {
                _inheritDefaults(_setDefaults(tl.vars.defaults, {
                    ease: "none"
                }));
                tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
                var time = 0, a, kf, v;
                if (_isArray(keyframes)) {
                    keyframes.forEach(function(frame) {
                        return tl.to(parsedTargets, frame, ">");
                    });
                    tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
                } else {
                    copy = {};
                    for(p in keyframes){
                        p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                    }
                    for(p in copy){
                        a = copy[p].sort(function(a, b) {
                            return a.t - b.t;
                        });
                        time = 0;
                        for(i = 0; i < a.length; i++){
                            kf = a[i];
                            v = {
                                ease: kf.e,
                                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                            };
                            v[p] = kf.v;
                            tl.to(parsedTargets, v, time);
                            time += v.duration;
                        }
                    }
                    tl.duration() < duration && tl.to({}, {
                        duration: duration - tl.duration()
                    }); // in case keyframes didn't go to 100%
                }
            }
            duration || _this3.duration(duration = tl.duration());
        } else {
            _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
        }
        if (overwrite === true && !_suppressOverwrites) {
            _overwritingTween = _assertThisInitialized(_this3);
            _globalTimeline.killTweensOf(parsedTargets);
            _overwritingTween = 0;
        }
        _addToTimeline(parent, _assertThisInitialized(_this3), position);
        vars.reversed && _this3.reverse();
        vars.paused && _this3.paused(true);
        if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
            _this3.render(Math.max(0, -delay) || 0); //in case delay is negative
        }
        scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
    }
    var _proto3 = Tween.prototype;
    _proto3.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline;
        if (!dur) {
            _renderZeroDurationTween(this, totalTime, suppressEvents, force);
        } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
            // this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
            time = tTime;
            timeline = this.timeline;
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && isNegative) {
                    return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                }
                time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    prevIteration = _roundPrecise(tTime / cycleDuration); // full decimal version of iterations, not the previous iteration (we're reusing prevIteration variable for efficiency)
                    iteration = ~~prevIteration;
                    if (iteration && iteration === prevIteration) {
                        time = dur;
                        iteration--;
                    } else if (time > dur) {
                        time = dur;
                    }
                }
                isYoyo = this._yoyo && iteration & 1;
                if (isYoyo) time = dur - time;
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                if (time === prevTime && !force && this._initted && iteration === prevIteration) {
                    //could be during the repeatDelay part. No need to render and fire callbacks.
                    this._tTime = tTime;
                    return this;
                }
                if (iteration !== prevIteration) {
                    //repeatRefresh functionality
                    if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
                        // this._time will === cycleDuration when we render at EXACTLY the end of an iteration. Without this condition, it'd often do the repeatRefresh render TWICE (again on the very next tick).
                        this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.
                        this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                    }
                }
            }
            if (!this._initted) {
                if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                    this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.
                    return this;
                }
                if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
                    // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values. But we also don't want to dump if we're doing a repeatRefresh render!
                    return this;
                }
                if (dur !== this._dur) {
                    // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
                    return this.render(totalTime, suppressEvents, force);
                }
            }
            if (this._rEase) {
                var inv = time < prevTime;
                if (inv !== this._inv) {
                    var segDur = inv ? prevTime : dur - prevTime;
                    this._inv = inv;
                    if (this._from) this.ratio = 1 - this.ratio;
                    this._invRatio = this.ratio;
                    this._invTime = prevTime;
                    this._invRecip = segDur ? (inv ? -1 : 1) / segDur : 0;
                    this._invScale = inv ? -this.ratio : 1 - this.ratio;
                    this._invEase = inv ? this._rEase : this._ease;
                }
                this.ratio = ratio = this._invRatio + this._invScale * this._invEase((time - this._invTime) * this._invRecip);
            } else {
                this.ratio = ratio = this._ease(time / dur);
            }
            if (this._from) this.ratio = ratio = 1 - ratio;
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
                this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
                this._lazy = 0;
            }
            if (!prevTime && tTime && !suppressEvents && !prevIteration) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) {
                    // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                    return this;
                }
            }
            pt = this._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
            timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
                isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                _callback(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                    // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
                    _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
            }
        }
        return this;
    };
    _proto3.targets = function targets() {
        return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
        // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
        (!soft || !this.vars.runBackwards) && (this._startAt = 0);
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate(soft);
        return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
        _tickerActive || _ticker.wake();
        this._ts || this.play();
        var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
        this._initted || _initTween(this, time);
        ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
        // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
        // if (_isObject(property)) { // performance optimization
        // 	for (p in property) {
        // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
        // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
        // 		}
        // 	}
        // } else {
        if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
            return this.resetTo(property, value, start, startIsRelative, 1); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
        } //}
        _alignPlayhead(this, 0);
        this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
        return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) {
            vars = "all";
        }
        if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
            return this;
        }
        if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.
            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.
            return this;
        }
        var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
        if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt(this);
        }
        overwrittenProps = this._op = this._op || [];
        if (vars !== "all") {
            //so people can pass in a comma-delimited list of property names
            if (_isString(vars)) {
                p = {};
                _forEachName(vars, function(name) {
                    return p[name] = 1;
                });
                vars = p;
            }
            vars = _addAliasesToVars(parsedTargets, vars);
        }
        i = parsedTargets.length;
        while(i--){
            if (~killingTargets.indexOf(parsedTargets[i])) {
                curLookup = propTweenLookup[i];
                if (vars === "all") {
                    overwrittenProps[i] = vars;
                    props = curLookup;
                    curOverwriteProps = {};
                } else {
                    curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                    props = vars;
                }
                for(p in props){
                    pt = curLookup && curLookup[p];
                    if (pt) {
                        if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                            _removeLinkedListItem(this, pt, "_pt");
                        }
                        delete curLookup[p];
                    }
                    if (curOverwriteProps !== "all") {
                        curOverwriteProps[p] = 1;
                    }
                }
            }
        }
        this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
        return this;
    };
    Tween.to = function to(targets, vars) {
        return new Tween(targets, vars, arguments[2]);
    };
    Tween.from = function from(targets, vars) {
        return _createTweenType(1, arguments);
    };
    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
        return new Tween(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay: delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
        }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
    };
    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
        return _createTweenType(2, arguments);
    };
    Tween.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween(targets, vars);
    };
    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween;
}(Animation);
_setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
        var tl = new Timeline(), params = _slice.call(arguments, 0);
        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
    };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */ var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
}, _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
}, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
}, _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
}, _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
}, _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
}, _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
}, _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) {
        //b = beginning string
        s = data.b;
    } else if (ratio === 1 && data.e) {
        //e = ending string
        s = data.e;
    } else {
        while(pt){
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.
            pt = pt._next;
        }
        s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
    }
    data.set(data.t, data.p, s, data);
}, _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while(pt){
        pt.r(ratio, pt.d);
        pt = pt._next;
    }
}, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt, next;
    while(pt){
        next = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next;
    }
}, _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while(pt){
        next = pt._next;
        if (pt.p === property && !pt.op || pt.op === property) {
            _removeLinkedListItem(this, pt, "_pt");
        } else if (!pt.dep) {
            hasNonDependentRemaining = 1;
        }
        pt = next;
    }
    return !hasNonDependentRemaining;
}, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
}, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt, next, pt2, first, last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)
    while(pt){
        next = pt._next;
        pt2 = first;
        while(pt2 && pt2.pr > pt.pr){
            pt2 = pt2._next;
        }
        if (pt._prev = pt2 ? pt2._prev : last) {
            pt._prev._next = pt;
        } else {
            first = pt;
        }
        if (pt._next = pt2) {
            pt2._prev = pt;
        } else {
            last = pt;
        }
        pt = next;
    }
    parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
var PropTween = /*#__PURE__*/ function() {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || _renderPlain;
        this.d = data || this;
        this.set = setter || _setterPlain;
        this.pr = priority || 0;
        this._next = next;
        if (next) {
            next._prev = this;
        }
    }
    var _proto4 = PropTween.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)
        this.set = _setterWithModifier;
        this.m = func;
        this.mt = target; //modifier target
        this.tween = tween;
    };
    return PropTween;
}(); //Initialization tasks
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(name) {
    return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _media = [], _listeners = {}, _emptyArray = [], _lastMediaTime = 0, _contextID = 0, _dispatch = function _dispatch(type) {
    return (_listeners[type] || _emptyArray).map(function(f) {
        return f();
    });
}, _onMediaChange = function _onMediaChange() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
        _dispatch("matchMediaInit");
        _media.forEach(function(c) {
            var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
            for(p in queries){
                match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.
                match && (anyMatch = 1);
                if (match !== conditions[p]) {
                    conditions[p] = match;
                    toggled = 1;
                }
            }
            if (toggled) {
                c.revert();
                anyMatch && matches.push(c);
            }
        });
        _dispatch("matchMediaRevert");
        matches.forEach(function(c) {
            return c.onMatch(c, function(func) {
                return c.add(null, func);
            });
        });
        _lastMediaTime = time;
        _dispatch("matchMedia");
    }
};
var Context = /*#__PURE__*/ function() {
    function Context(func, scope) {
        this.selector = scope && selector(scope);
        this.data = [];
        this._r = []; // returned/cleanup functions
        this.isReverted = false;
        this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely
        func && this.add(func);
    }
    var _proto5 = Context.prototype;
    _proto5.add = function add(name, func, scope) {
        // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
        // if (name && _isFunction(name.revert)) {
        // 	this.data.push(name);
        // 	return (name._ctx = this);
        // }
        if (_isFunction(name)) {
            scope = func;
            func = name;
            name = _isFunction;
        }
        var self = this, f = function f() {
            var prev = _context, prevSelector = self.selector, result;
            prev && prev !== self && prev.data.push(self);
            scope && (self.selector = selector(scope));
            _context = self;
            result = func.apply(self, arguments);
            _isFunction(result) && self._r.push(result);
            _context = prev;
            self.selector = prevSelector;
            self.isReverted = false;
            return result;
        };
        self.last = f;
        return name === _isFunction ? f(self, function(func) {
            return self.add(null, func);
        }) : name ? self[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
        var prev = _context;
        _context = null;
        func(this);
        _context = prev;
    };
    _proto5.getTweens = function getTweens() {
        var a = [];
        this.data.forEach(function(e) {
            return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
        });
        return a;
    };
    _proto5.clear = function clear() {
        this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia) {
        var _this4 = this;
        if (revert) {
            (function() {
                var tweens = _this4.getTweens(), i = _this4.data.length, t;
                while(i--){
                    // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
                    t = _this4.data[i];
                    if (t.data === "isFlip") {
                        t.revert();
                        t.getChildren(true, true, false).forEach(function(tween) {
                            return tweens.splice(tweens.indexOf(tween), 1);
                        });
                    }
                } // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort
                tweens.map(function(t) {
                    return {
                        g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
                        t: t
                    };
                }).sort(function(a, b) {
                    return b.g - a.g || -Infinity;
                }).forEach(function(o) {
                    return o.t.revert(revert);
                }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.
                i = _this4.data.length;
                while(i--){
                    // make sure we loop backwards so that, for example, SplitTexts that were created later on the same element get reverted first
                    t = _this4.data[i];
                    if (t instanceof Timeline) {
                        if (t.data !== "nested") {
                            t.scrollTrigger && t.scrollTrigger.revert();
                            t.kill(); // don't revert() the timeline because that's duplicating efforts since we already reverted all the tweens
                        }
                    } else {
                        !(t instanceof Tween) && t.revert && t.revert(revert);
                    }
                }
                _this4._r.forEach(function(f) {
                    return f(revert, _this4);
                });
                _this4.isReverted = true;
            })();
        } else {
            this.data.forEach(function(e) {
                return e.kill && e.kill();
            });
        }
        this.clear();
        if (matchMedia) {
            var i = _media.length;
            while(i--){
                // previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
                _media[i].id === this.id && _media.splice(i, 1);
            }
        }
    } // killWithCleanup() {
    ;
    _proto5.revert = function revert(config) {
        this.kill(config || {});
    };
    return Context;
}();
var MatchMedia = /*#__PURE__*/ function() {
    function MatchMedia(scope) {
        this.contexts = [];
        this.scope = scope;
        _context && _context.data.push(this);
    }
    var _proto6 = MatchMedia.prototype;
    _proto6.add = function add(conditions, func, scope) {
        _isObject(conditions) || (conditions = {
            matches: conditions
        });
        var context = new Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
        _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()
        this.contexts.push(context);
        func = context.add("onMatch", func);
        context.queries = conditions;
        for(p in conditions){
            if (p === "all") {
                active = 1;
            } else {
                mq = _win.matchMedia(conditions[p]);
                if (mq) {
                    _media.indexOf(context) < 0 && _media.push(context);
                    (cond[p] = mq.matches) && (active = 1);
                    mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
                }
            }
        }
        active && func(context, function(f) {
            return context.add(null, f);
        });
        return this;
    } // refresh() {
    ;
    _proto6.revert = function revert(config) {
        this.kill(config || {});
    };
    _proto6.kill = function kill(revert) {
        this.contexts.forEach(function(c) {
            return c.kill(revert, true);
        });
    };
    return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */ var _gsap = {
    registerPlugin: function registerPlugin() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
            args[_key2] = arguments[_key2];
        }
        args.forEach(function(config) {
            return _createPlugin(config);
        });
    },
    timeline: function timeline(vars) {
        return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
        return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
        _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in
        var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
        unit === "native" && (unit = "");
        return !target ? target : !property ? function(property, unit, uncache) {
            return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
        target = toArray(target);
        if (target.length > 1) {
            var setters = target.map(function(t) {
                return gsap.quickSetter(t, property, unit);
            }), l = setters.length;
            return function(value) {
                var i = l;
                while(i--){
                    setters[i](value);
                }
            };
        }
        target = target[0] || {};
        var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, // in case it's an alias, like "rotate" for "rotation".
        setter = Plugin ? function(value) {
            var p = new Plugin();
            _quickTween._pt = 0;
            p.init(target, unit ? value + unit : value, _quickTween, 0, [
                target
            ]);
            p.render(1, p);
            _quickTween._pt && _renderPropTweens(1, _quickTween);
        } : cache.set(target, p);
        return Plugin ? setter : function(value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
        };
    },
    quickTo: function quickTo(target, property, vars) {
        var _setDefaults2;
        var tween = gsap.to(target, _setDefaults((_setDefaults2 = {}, _setDefaults2[property] = "+=0.1", _setDefaults2.paused = true, _setDefaults2.stagger = 0, _setDefaults2), vars || {})), func = function func(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
        };
        func.tween = tween;
        return func;
    },
    isTweening: function isTweening(targets) {
        return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
        value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
        return _mergeDeep(_defaults, value || {});
    },
    config: function config(value) {
        return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
        var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
        (plugins || "").split(",").forEach(function(pluginName) {
            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
        });
        _effects[name] = function(targets, vars, tl) {
            return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
        };
        if (extendTimeline) {
            Timeline.prototype[name] = function(targets, vars, position) {
                return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
            };
        }
    },
    registerEase: function registerEase(name, ease) {
        _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
        return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) {
            vars = {};
        }
        var tl = new Timeline(vars), child, next;
        tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
        _globalTimeline.remove(tl);
        tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).
        tl._time = tl._tTime = _globalTimeline._time;
        child = _globalTimeline._first;
        while(child){
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
                _addToTimeline(tl, child, child._start - child._delay);
            }
            child = next;
        }
        _addToTimeline(_globalTimeline, tl, 0);
        return tl;
    },
    context: function context(func, scope) {
        return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
        return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
        return _media.forEach(function(c) {
            var cond = c.conditions, found, p;
            for(p in cond){
                if (cond[p]) {
                    cond[p] = false;
                    found = 1;
                }
            }
            found && c.revert();
        }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
        var a = _listeners[type] || (_listeners[type] = []);
        ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
        var a = _listeners[type], i = a && a.indexOf(callback);
        i >= 0 && a.splice(i, 1);
    },
    utils: {
        wrap: wrap,
        wrapYoyo: wrapYoyo,
        distribute: distribute,
        random: random,
        snap: snap,
        normalize: normalize,
        getUnit: getUnit,
        clamp: clamp,
        splitColor: splitColor,
        toArray: toArray,
        selector: selector,
        mapRange: mapRange,
        pipe: pipe,
        unitize: unitize,
        interpolate: interpolate,
        shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
        PropTween: PropTween,
        globals: _addGlobal,
        Tween: Tween,
        Timeline: Timeline,
        Animation: Animation,
        getCache: _getCache,
        _removeLinkedListItem: _removeLinkedListItem,
        reverting: function reverting() {
            return _reverting;
        },
        context: function context(toAdd) {
            if (toAdd && _context) {
                _context.data.push(toAdd);
                toAdd._ctx = _context;
            }
            return _context;
        },
        suppressOverwrites: function suppressOverwrites(value) {
            return _suppressOverwrites = value;
        }
    }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
    duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------
var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while(pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop){
        pt = pt._next;
    }
    return pt;
}, _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for(p in modifiers){
        i = targets.length;
        while(i--){
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
                if (pt._pt) {
                    // is a plugin
                    pt = _getPluginPropTween(pt, p);
                }
                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
        }
    }
}, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
        name: name,
        headless: 1,
        rawVars: 1,
        //don't pre-process function-based values or "random()" strings.
        init: function init(target, vars, tween) {
            tween._onInit = function(tween) {
                var temp, p;
                if (_isString(vars)) {
                    temp = {};
                    _forEachName(vars, function(name) {
                        return temp[name] = 1;
                    }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.
                    vars = temp;
                }
                if (modifier) {
                    temp = {};
                    for(p in vars){
                        temp[p] = modifier(vars[p]);
                    }
                    vars = temp;
                }
                _addModifiers(tween, vars);
            };
        }
    };
}; //register core plugins
var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
        var p, pt, v;
        this.tween = tween;
        for(p in vars){
            v = target.getAttribute(p) || "";
            pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
            pt.op = p;
            pt.b = v; // record the beginning value so we can revert()
            this._props.push(p);
        }
    },
    render: function render(ratio, data) {
        var pt = data._pt;
        while(pt){
            _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)
            pt = pt._next;
        }
    }
}, {
    name: "endArray",
    headless: 1,
    init: function init(target, value) {
        var i = value.length;
        while(i--){
            this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
        }
    }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.
Tween.version = Timeline.version = gsap.version = "3.15.0";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;
;
;
;
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/gsap/CSSPlugin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSSPlugin",
    ()=>CSSPlugin,
    "_createElement",
    ()=>_createElement,
    "_getBBox",
    ()=>_getBBox,
    "checkPrefix",
    ()=>_checkPropPrefix,
    "default",
    ()=>CSSPlugin
]);
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/gsap/gsap-core.js [app-client] (ecmascript)");
;
var _win, _doc, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _reverting, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
}, //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderCSSPropWithBeginningAndEnd = function _renderCSSPropWithBeginningAndEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
}, //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
}, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
}, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
}, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
}, _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
}, _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
}, _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
}, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
}, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
}, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _saveStyle = function _saveStyle(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style, cache = target._gsap;
    if (property in _transformProps && style) {
        this.tfm = this.tfm || {};
        if (property !== "transform") {
            property = _propertyAliases[property] || property;
            ~property.indexOf(",") ? property.split(",").forEach(function(a) {
                return _this.tfm[a] = _get(target, a);
            }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.
            property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
        } else {
            return _propertyAliases.transform.split(",").forEach(function(p) {
                return _saveStyle.call(_this, p, isNotCSS);
            });
        }
        if (this.props.indexOf(_transformProp) >= 0) {
            return;
        }
        if (cache.svg) {
            this.svgo = target.getAttribute("data-svg-origin");
            this.props.push(_transformOriginProp, isNotCSS, "");
        }
        property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
}, _removeIndependentTransforms = function _removeIndependentTransforms(style) {
    if (style.translate) {
        style.removeProperty("translate");
        style.removeProperty("scale");
        style.removeProperty("rotate");
    }
}, _revertStyle = function _revertStyle() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
    for(i = 0; i < props.length; i += 3){
        // stored like this: property, isNotCSS, value
        if (!props[i + 1]) {
            props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
        } else if (props[i + 1] === 2) {
            // non-CSS value (function-based)
            target[props[i]](props[i + 2]);
        } else {
            // non-CSS value (not function-based)
            target[props[i]] = props[i + 2];
        }
    }
    if (this.tfm) {
        for(p in this.tfm){
            cache[p] = this.tfm[p];
        }
        if (cache.svg) {
            cache.renderTransform();
            target.setAttribute("data-svg-origin", this.svgo || "");
        }
        i = _reverting();
        if ((!i || !i.isStart) && !style[_transformProp]) {
            _removeIndependentTransforms(style);
            if (cache.zOrigin && style[_transformOriginProp]) {
                style[_transformOriginProp] += " " + cache.zOrigin + "px"; // since we're uncaching, we must put the zOrigin back into the transformOrigin so that we can pull it out accurately when we parse again. Otherwise, we'd lose the z portion of the origin since we extract it to protect from Safari bugs.
                cache.zOrigin = 0;
                cache.renderTransform();
            }
            cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
        }
    }
}, _getStyleSaver = function _getStyleSaver(target, properties) {
    var saver = {
        target: target,
        props: [],
        revert: _revertStyle,
        save: _saveStyle
    };
    target._gsap || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gsap"].core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.
    properties && target.style && target.nodeType && properties.split(",").forEach(function(p) {
        return saver.save(p);
    }); // make sure it's a DOM node too.
    return saver;
}, _supports3D, _createElement = function _createElement(type, ns) {
    var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
    return e && e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://gsap.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
}, _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
}, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) {
        return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while(i-- && !(_prefixes[i] + property in s)){}
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
}, _initCore = function _initCore() {
    if (_windowExists() && window.document) {
        _win = window;
        _doc = _win.document;
        _docElement = _doc.documentElement;
        _tempDiv = _createElement("div") || {
            style: {}
        };
        _tempDivStyler = _createElement("div");
        _transformProp = _checkPropPrefix(_transformProp);
        _transformOriginProp = _transformProp + "Origin";
        _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.
        _supports3D = !!_checkPropPrefix("perspective");
        _reverting = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gsap"].core.reverting;
        _pluginInitted = 1;
    }
}, _getReparentedCloneBBox = function _getReparentedCloneBBox(target) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
    clone.style.display = "block";
    svg.appendChild(clone);
    _docElement.appendChild(svg);
    try {
        bbox = clone.getBBox();
    } catch (e) {}
    svg.removeChild(clone);
    _docElement.removeChild(svg);
    return bbox;
}, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while(i--){
        if (target.hasAttribute(attributesArray[i])) {
            return target.getAttribute(attributesArray[i]);
        }
    }
}, _getBBox = function _getBBox(target) {
    var bounds, cloned;
    try {
        bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    } catch (error) {
        bounds = _getReparentedCloneBBox(target);
        cloned = 1;
    }
    bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
        x: +_getAttributeFallbacks(target, [
            "x",
            "cx",
            "x1"
        ]) || 0,
        y: +_getAttributeFallbacks(target, [
            "y",
            "cy",
            "y1"
        ]) || 0,
        width: 0,
        height: 0
    } : bounds;
}, _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
}, //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
    if (property) {
        var style = target.style, first2Chars;
        if (property in _transformProps && property !== _transformOriginProp) {
            property = _transformProp;
        }
        if (style.removeProperty) {
            first2Chars = property.substr(0, 2);
            if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
                //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
                property = "-" + property;
            }
            style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
        } else {
            //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
            style.removeAttribute(property);
        }
    }
}, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropTween"](plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
}, _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
}, _nonStandardLayouts = {
    grid: 1,
    flex: 1
}, //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
    style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
        return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
        px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
        parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc || !parent.appendChild) {
        parent = _doc.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ticker"].time && !cache.uncache) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(curValue / cache.width * amount);
    } else {
        if (toPercent && (property === "height" || property === "width")) {
            // if we're dealing with width/height that's inside a container with padding and/or it's a flexbox/grid container, we must apply it to the target itself rather than the _tempDiv in order to ensure complete accuracy, factoring in the parent's padding.
            var v = target.style[property];
            target.style[property] = amount + unit;
            px = target[measureProperty];
            v ? target.style[property] = v : _removeProperty(target, property);
        } else {
            (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
            parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.
            parent.appendChild(_tempDiv);
            px = _tempDiv[measureProperty];
            parent.removeChild(_tempDiv);
            style.position = "absolute";
        }
        if (horizontal && toPercent) {
            cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getCache"])(parent);
            cache.time = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ticker"].time;
            cache.width = parent[measureProperty];
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
}, _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
        property = _propertyAliases[property];
        if (~property.indexOf(",")) {
            property = property.split(",")[0];
        }
    }
    if (_transformProps[property] && property !== "transform") {
        value = _parseTransform(target, uncache);
        value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
        value = target.style[property];
        if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
            value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getProperty"])(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
        }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
}, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    if (!start || start === "none") {
        // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://gsap.com/forums/topic/18310-clippath-doesnt-work-on-ios/
        var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
        if (s && s !== start) {
            prop = p;
            start = s;
        } else if (prop === "borderColor") {
            start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://gsap.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
        }
    }
    var pt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropTween"](this._pt, target.style, prop, 0, 1, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_renderComplexString"]), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += ""; // ensure values are strings
    end += "";
    if (end.substring(0, 6) === "var(--") {
        end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
    }
    if (end === "auto") {
        startValue = target.style[prop];
        target.style[prop] = end;
        end = _getComputedProperty(target, prop) || end;
        startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
    }
    a = [
        start,
        end
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_colorStringFilter"])(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().
    start = a[0];
    end = a[1];
    startValues = start.match(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_numWithUnitExp"]) || [];
    endValues = end.match(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_numWithUnitExp"]) || [];
    if (endValues.length) {
        while(result = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_numWithUnitExp"].exec(end)){
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) {
                color = (color + 1) % 5;
            } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
                color = 1;
            }
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                endValue.charAt(1) === "=" && (endValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_parseRelative"])(startNum, endValue) + startUnit);
                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_numWithUnitExp"].lastIndex - endUnit.length;
                if (!endUnit) {
                    //if something like "perspective:300" is passed in and we must add a unit to the end
                    endUnit = endUnit || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_config"].units[prop] || startUnit;
                    if (index === end.length) {
                        end += endUnit;
                        pt.e += endUnit;
                    }
                }
                if (startUnit !== endUnit) {
                    startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
                pt._pt = {
                    _next: pt._pt,
                    p: chunk || matchIndex === 1 ? chunk : ",",
                    //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                    s: startNum,
                    c: endNum - startNum,
                    m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                };
            }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    } else {
        pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_relExp"].test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.
    return pt;
}, _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
        //the user provided them in the wrong order, so flip them
        value = x;
        x = y;
        y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
}, _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
        var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
        if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
        } else {
            props = props.split(",");
            i = props.length;
            while(--i > -1){
                prop = props[i];
                if (_transformProps[prop]) {
                    clearTransforms = 1;
                    prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                }
                _removeProperty(target, prop);
            }
        }
        if (clearTransforms) {
            _removeProperty(target, _transformProp);
            if (cache) {
                cache.svg && target.removeAttribute("transform");
                style.scale = style.rotate = style.translate = "none";
                _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.
                cache.uncache = 1;
                _removeIndependentTransforms(style);
            }
        }
    }
}, // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
        if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropTween"](plugin._pt, target, property, 0, 0, _renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
        }
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */ _identity2DMatrix = [
    1,
    0,
    0,
    1,
    0,
    0
], _rotationalProperties = {}, _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
}, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_numExp"]).map(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"]);
}, _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getCache"])(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
        temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
        matrix = [
            temp.a,
            temp.b,
            temp.c,
            temp.d,
            temp.e,
            temp.f
        ];
        return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
        //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
        temp = style.display;
        style.display = "block";
        parent = target.parentNode;
        if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
            // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375. Note: position: fixed elements report a null offsetParent but they could also be invisible because they're in an ancestor with display: none, so we check getBoundingClientRect(). We only want to alter the DOM if we absolutely have to because it can cause iframe content to reload, like a Vimeo video.
            addedToDOM = 1; //flag
            nextSibling = target.nextElementSibling;
            _docElement.appendChild(target); //we must add it to the DOM in order to get values properly
        }
        matrix = _getComputedTransformMatrixAsArray(target);
        temp ? style.display = temp : _removeProperty(target, "display");
        if (addedToDOM) {
            nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
        }
    }
    return force2D && matrix.length > 6 ? [
        matrix[0],
        matrix[1],
        matrix[4],
        matrix[5],
        matrix[12],
        matrix[13]
    ] : matrix;
}, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
        bounds = _getBBox(target);
        xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
        yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin); // if (!("xOrigin" in cache) && (xOrigin || yOrigin)) { // added in 3.12.3, reverted in 3.12.4; requires more exploration
    // 	xOrigin -= bounds.x;
    // 	yOrigin -= bounds.y;
    // }
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
        //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
        xOrigin = x;
        yOrigin = y; // theory: we only had to do this for smoothing and it assumes that the previous one was not originIsAbsolute.
    }
    if (smooth || smooth !== false && cache.smooth) {
        tx = xOrigin - xOriginOld;
        ty = yOrigin - yOriginOld;
        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
        cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).
    if (pluginToAddPropTweensTo) {
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
}, _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GSCache"](target);
    if ("x" in cache && !uncache && !cache.uncache) {
        return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
        // accommodate independent transforms by combining them into normal ones.
        if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
            style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
        }
        style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
        if (cache.uncache) {
            // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
            t2 = target.getBBox();
            origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
            t1 = "";
        } else {
            t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
        }
        _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
        a = matrix[0]; //a11
        b = matrix[1]; //a21
        c = matrix[2]; //a31
        d = matrix[3]; //a41
        x = a12 = matrix[4];
        y = a22 = matrix[5]; //2D matrix
        if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
            if (cache.svg) {
                x -= xOrigin - (xOrigin * a + yOrigin * c);
                y -= yOrigin - (xOrigin * b + yOrigin * d);
            } //3D matrix
        } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG; //rotationX
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
            } //rotationY
            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a * cos - a13 * sin;
                t2 = b * cos - a23 * sin;
                t3 = c * cos - a33 * sin;
                a43 = d * sin + a43 * cos;
                a = t1;
                b = t2;
                c = t3;
            } //rotationZ
            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a * cos + b * sin;
                t2 = a12 * cos + a22 * sin;
                b = b * cos - a * sin;
                a22 = a22 * cos - a12 * sin;
                a = t1;
                a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
            }
            scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(Math.sqrt(a * a + b * b + c * c));
            scaleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        }
        if (cache.svg) {
            //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
            t1 && target.setAttribute("transform", t1);
        }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
        if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
        } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
        }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(scaleX);
    cache.scaleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(scaleY);
    cache.rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(rotation) + deg;
    cache.rotationX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(rotationX) + deg;
    cache.rotationY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
        style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_config"].force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
}, _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
}, //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(start);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
}, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
}, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
        var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
        angle = parseFloat(rotationX) * _DEG2RAD;
        cos = Math.cos(angle);
        x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
        y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
        z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
        transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
        transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
        transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
        transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
        transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
        transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
        transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
        transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
}, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
        //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
        skewY = parseFloat(skewY);
        skewX += skewY;
        rotation += skewY;
    }
    if (rotation || skewX) {
        rotation *= _DEG2RAD;
        skewX *= _DEG2RAD;
        a11 = Math.cos(rotation) * scaleX;
        a21 = Math.sin(rotation) * scaleX;
        a12 = Math.sin(rotation - skewX) * -scaleY;
        a22 = Math.cos(rotation - skewX) * scaleY;
        if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
            }
        }
        a11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(a11);
        a21 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(a21);
        a12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(a12);
        a22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(a22);
    } else {
        a11 = scaleX;
        a22 = scaleY;
        a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
        tx = _convertToUnit(target, "x", x, "px");
        ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
        tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
        ty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
        //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
        temp = target.getBBox();
        tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(tx + xPercent / 100 * temp.width);
        ty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_round"])(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
}, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isString"])(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
        direction = endValue.split("_")[1];
        if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) {
                change += change < 0 ? cap : -cap;
            }
        }
        if (direction === "cw" && change < 0) {
            change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
        } else if (direction === "ccw" && change > 0) {
            change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
        }
    }
    plugin._pt = pt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropTween"](plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
}, _assign = function _assign(target, source) {
    // Internet Explorer doesn't have Object.assign(), so we recreate it here.
    for(var p in source){
        target[p] = source[p];
    }
    return target;
}, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
        startValue = target.getAttribute("transform");
        target.setAttribute("transform", "");
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        _removeProperty(target, _transformProp);
        target.setAttribute("transform", startValue);
    } else {
        startValue = getComputedStyle(target)[_transformProp];
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        style[_transformProp] = startValue;
    }
    for(p in _transformProps){
        startValue = startCache[p];
        endValue = endCache[p];
        if (startValue !== endValue && exclude.indexOf(p) < 0) {
            //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
            startUnit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(startValue);
            endUnit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(endValue);
            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropTween"](plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
        }
    }
    _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_forEachName"])("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
        t,
        r,
        b,
        l
    ] : [
        t + l,
        t + r,
        b + r,
        b + l
    ]).map(function(side) {
        return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
        var a, vars;
        if (arguments.length < 4) {
            // getter, passed target, property, and unit (from _get())
            a = props.map(function(prop) {
                return _get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
        }
        a = (endValue + "").split(" ");
        vars = {};
        props.forEach(function(prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
        });
        plugin.init(target, vars, tween);
    };
});
var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
        return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
        var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps, finalTransformValue;
        _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps
        this.styles = this.styles || _getStyleSaver(target);
        inlineProps = this.styles.props;
        this.tween = tween;
        for(p in vars){
            if (p === "autoRound") {
                continue;
            }
            endValue = vars[p];
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_plugins"][p] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_checkPlugin"])(p, vars, tween, index, target, targets)) {
                continue;
            }
            type = typeof endValue;
            specialProp = _specialProps[p];
            if (type === "function") {
                endValue = endValue.call(tween, index, target, targets);
                type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) {
                endValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_replaceRandom"])(endValue);
            }
            if (specialProp) {
                specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            } else if (p.substr(0, 2) === "--") {
                //CSS variable
                startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                endValue += "";
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_colorExp"].lastIndex = 0;
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_colorExp"].test(startValue)) {
                    // colors don't have units
                    startUnit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(startValue);
                    endUnit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(endValue);
                    endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                }
                this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                props.push(p);
                inlineProps.push(p, 0, style[p]);
            } else if (type !== "undefined") {
                if (startAt && p in startAt) {
                    // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
                    startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isString"])(startValue) && ~startValue.indexOf("random(") && (startValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_replaceRandom"])(startValue));
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(startValue + "") || startValue === "auto" || (startValue += __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_config"].units[p] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.
                    (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
                } else {
                    startValue = _get(target, p);
                }
                startNum = parseFloat(startValue);
                relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
                relative && (endValue = endValue.substr(2));
                endNum = parseFloat(endValue);
                if (p in _propertyAliases) {
                    if (p === "autoAlpha") {
                        //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
                        if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                            //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                            startNum = 0;
                        }
                        inlineProps.push("visibility", 0, style.visibility);
                        _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                    }
                    if (p !== "scale" && p !== "transform") {
                        p = _propertyAliases[p];
                        ~p.indexOf(",") && (p = p.split(",")[0]);
                    }
                }
                isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---
                if (isTransformRelated) {
                    this.styles.save(p);
                    finalTransformValue = endValue; // this is always the same as endValue except when it's a var(--) value, in which case we need to calculate the end value.
                    if (type === "string" && endValue.substring(0, 6) === "var(--") {
                        endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
                        if (endValue.substring(0, 5) === "calc(") {
                            var origPerspective = target.style.perspective;
                            target.style.perspective = endValue;
                            endValue = _getComputedProperty(target, "perspective");
                            origPerspective ? target.style.perspective = origPerspective : _removeProperty(target, "perspective");
                        }
                        endNum = parseFloat(endValue);
                    }
                    if (!transformPropTween) {
                        cache = target._gsap;
                        cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.
                        smooth = vars.smoothOrigin !== false && cache.smooth;
                        transformPropTween = this._pt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropTween"](this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)
                        transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
                    }
                    if (p === "scale") {
                        this._pt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropTween"](this._pt, cache, "scaleY", cache.scaleY, (relative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_parseRelative"])(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
                        this._pt.u = 0;
                        props.push("scaleY", p);
                        p += "X";
                    } else if (p === "transformOrigin") {
                        inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                        endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.
                        if (cache.svg) {
                            _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                        } else {
                            endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!
                            endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                            _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                        }
                        continue;
                    } else if (p === "svgOrigin") {
                        _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                        continue;
                    } else if (p in _rotationalProperties) {
                        _addRotationalPropTween(this, cache, p, startNum, relative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_parseRelative"])(startNum, relative + endValue) : endValue);
                        continue;
                    } else if (p === "smoothOrigin") {
                        _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                        continue;
                    } else if (p === "force3D") {
                        cache[p] = endValue;
                        continue;
                    } else if (p === "transform") {
                        _addRawTransformPTs(this, endValue, target);
                        continue;
                    }
                } else if (!(p in style)) {
                    p = _checkPropPrefix(p) || p;
                }
                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                    startUnit = (startValue + "").substr((startNum + "").length);
                    endNum || (endNum = 0); // protect against NaN
                    endUnit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(endValue) || (p in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_config"].units ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_config"].units[p] : startUnit);
                    startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                    this._pt = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropTween"](this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_parseRelative"])(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                    this._pt.u = endUnit || 0;
                    if (isTransformRelated && finalTransformValue !== endValue) {
                        this._pt.b = startValue;
                        this._pt.e = finalTransformValue;
                        this._pt.r = _renderCSSPropWithBeginningAndEnd;
                    } else if (startUnit !== endUnit && endUnit !== "%") {
                        //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
                        this._pt.b = startValue;
                        this._pt.r = _renderCSSPropWithBeginning;
                    }
                } else if (!(p in style)) {
                    if (p in target) {
                        //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
                        this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
                    } else if (p !== "parseTransform") {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_missingPlugin"])(p, endValue);
                        continue;
                    }
                } else {
                    _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
                }
                isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
                props.push(p);
            }
        }
        hasPriority && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_sortPropTweensByPriority"])(this);
    },
    render: function render(ratio, data) {
        if (data.tween._time || !_reverting()) {
            var pt = data._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
        } else {
            data.styles.revert();
        }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
        //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
        var p = _propertyAliases[property];
        p && p.indexOf(",") < 0 && (property = p);
        return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isUndefined"])(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getSetter"])(target, property);
    },
    core: {
        _removeProperty: _removeProperty,
        _getMatrix: _getMatrix
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gsap"].utils.checkPrefix = _checkPropPrefix;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gsap"].core.getStyleSaver = _getStyleSaver;
(function(positionAndScale, rotation, others, aliases) {
    var all = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_forEachName"])(positionAndScale + "," + rotation + "," + others, function(name) {
        _transformProps[name] = 1;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_forEachName"])(rotation, function(name) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_config"].units[name] = "deg";
        _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_forEachName"])(aliases, function(name) {
        var split = name.split(":");
        _propertyAliases[split[1]] = all[split[0]];
    });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_forEachName"])("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_config"].units[name] = "px";
});
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gsap"].registerPlugin(CSSPlugin);
;
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/gsap/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TweenMax",
    ()=>TweenMaxWithCSS,
    "default",
    ()=>gsapWithCSS,
    "gsap",
    ()=>gsapWithCSS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/gsap/gsap-core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$CSSPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/gsap/CSSPlugin.js [app-client] (ecmascript)");
;
;
var gsapWithCSS = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$CSSPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSSPlugin"]) || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gsap"], // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;
;
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DrawingUtils",
    ()=>Ka,
    "FaceDetector",
    ()=>pc,
    "FaceLandmarker",
    ()=>Sc,
    "FilesetResolver",
    ()=>Zo,
    "GestureRecognizer",
    ()=>Fc,
    "HandLandmarker",
    ()=>Pc,
    "HolisticLandmarker",
    ()=>Dc,
    "ImageClassifier",
    ()=>Bc,
    "ImageEmbedder",
    ()=>Gc,
    "ImageSegmenter",
    ()=>Wc,
    "ImageSegmenterResult",
    ()=>jc,
    "InteractiveSegmenter",
    ()=>Kc,
    "InteractiveSegmenterResult",
    ()=>zc,
    "MPImage",
    ()=>nc,
    "MPMask",
    ()=>Na,
    "ObjectDetector",
    ()=>Yc,
    "PoseLandmarker",
    ()=>Zc,
    "TaskRunner",
    ()=>pa,
    "VisionTaskRunner",
    ()=>dc
]);
var t = "undefined" != typeof self ? self : {};
function e(e, n) {
    t: {
        for(var r = [
            "CLOSURE_FLAGS"
        ], i = t, s = 0; s < r.length; s++)if (null == (i = i[r[s]])) {
            r = null;
            break t;
        }
        r = i;
    }
    return null != (e = r && r[e]) ? e : n;
}
function n() {
    throw Error("Invalid UTF8");
}
function r(t, e) {
    return e = String.fromCharCode.apply(null, e), null == t ? e : t + e;
}
let i, s;
const o = "undefined" != typeof TextDecoder;
let a;
const c = "undefined" != typeof TextEncoder;
function h(t) {
    if (c) t = (a ||= new TextEncoder).encode(t);
    else {
        let n = 0;
        const r = new Uint8Array(3 * t.length);
        for(let i = 0; i < t.length; i++){
            var e = t.charCodeAt(i);
            if (e < 128) r[n++] = e;
            else {
                if (e < 2048) r[n++] = e >> 6 | 192;
                else {
                    if (e >= 55296 && e <= 57343) {
                        if (e <= 56319 && i < t.length) {
                            const s = t.charCodeAt(++i);
                            if (s >= 56320 && s <= 57343) {
                                e = 1024 * (e - 55296) + s - 56320 + 65536, r[n++] = e >> 18 | 240, r[n++] = e >> 12 & 63 | 128, r[n++] = e >> 6 & 63 | 128, r[n++] = 63 & e | 128;
                                continue;
                            }
                            i--;
                        }
                        e = 65533;
                    }
                    r[n++] = e >> 12 | 224, r[n++] = e >> 6 & 63 | 128;
                }
                r[n++] = 63 & e | 128;
            }
        }
        t = n === r.length ? r : r.subarray(0, n);
    }
    return t;
}
function u(e) {
    t.setTimeout(()=>{
        throw e;
    }, 0);
}
var l, f = e(610401301, !1), d = e(748402147, !0);
function p() {
    var e = t.navigator;
    return e && (e = e.userAgent) ? e : "";
}
const g = t.navigator;
function m(t) {
    return m[" "](t), t;
}
l = g && g.userAgentData || null, m[" "] = function() {};
const y = {};
let _ = null;
function v(t) {
    const e = t.length;
    let n = 3 * e / 4;
    n % 3 ? n = Math.floor(n) : -1 != "=.".indexOf(t[e - 1]) && (n = -1 != "=.".indexOf(t[e - 2]) ? n - 2 : n - 1);
    const r = new Uint8Array(n);
    let i = 0;
    return function(t, e) {
        function n(e) {
            for(; r < t.length;){
                const e = t.charAt(r++), n = _[e];
                if (null != n) return n;
                if (!/^[\s\xa0]*$/.test(e)) throw Error("Unknown base64 encoding at char: " + e);
            }
            return e;
        }
        E();
        let r = 0;
        for(;;){
            const t = n(-1), r = n(0), i = n(64), s = n(64);
            if (64 === s && -1 === t) break;
            e(t << 2 | r >> 4), 64 != i && (e(r << 4 & 240 | i >> 2), 64 != s && e(i << 6 & 192 | s));
        }
    }(t, function(t) {
        r[i++] = t;
    }), i !== n ? r.subarray(0, i) : r;
}
function E() {
    if (!_) {
        _ = {};
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e = [
            "+/=",
            "+/",
            "-_=",
            "-_.",
            "-_"
        ];
        for(let n = 0; n < 5; n++){
            const r = t.concat(e[n].split(""));
            y[n] = r;
            for(let t = 0; t < r.length; t++){
                const e = r[t];
                void 0 === _[e] && (_[e] = t);
            }
        }
    }
}
var w = "undefined" != typeof Uint8Array, T = !(!(f && l && l.brands.length > 0) && (-1 != p().indexOf("Trident") || -1 != p().indexOf("MSIE"))) && "function" == typeof btoa;
const A = /[-_.]/g, b = {
    "-": "+",
    _: "/",
    ".": "="
};
function k(t) {
    return b[t] || "";
}
function S(t) {
    if (!T) return v(t);
    t = A.test(t) ? t.replace(A, k) : t, t = atob(t);
    const e = new Uint8Array(t.length);
    for(let n = 0; n < t.length; n++)e[n] = t.charCodeAt(n);
    return e;
}
function x(t) {
    return w && null != t && t instanceof Uint8Array;
}
var L = {};
function R() {
    return M ||= new F(null, L);
}
function I(t) {
    C(L);
    var e = t.g;
    return null == (e = null == e || x(e) ? e : "string" == typeof e ? S(e) : null) ? e : t.g = e;
}
var F = class {
    h() {
        return new Uint8Array(I(this) || 0);
    }
    constructor(t, e){
        if (C(e), this.g = t, null != t && 0 === t.length) throw Error("ByteString should be constructed with non-empty values");
    }
};
let M, P;
function C(t) {
    if (t !== L) throw Error("illegal external caller");
}
function O(t, e) {
    t.__closure__error__context__984382 || (t.__closure__error__context__984382 = {}), t.__closure__error__context__984382.severity = e;
}
function N(t) {
    return O(t = Error(t), "warning"), t;
}
function U(t, e) {
    if (null != t) {
        var n = P ??= {}, r = n[t] || 0;
        r >= e || (n[t] = r + 1, O(t = Error(), "incident"), u(t));
    }
}
function D() {
    return "function" == typeof BigInt;
}
var B = "function" == typeof Symbol && "symbol" == typeof Symbol();
function G(t, e, n = !1) {
    return "function" == typeof Symbol && "symbol" == typeof Symbol() ? n && Symbol.for && t ? Symbol.for(t) : null != t ? Symbol(t) : Symbol() : e;
}
var j = G("jas", void 0, !0), V = G(void 0, "0di"), X = G(void 0, "1oa"), H = G(void 0, Symbol()), W = G(void 0, "0ub"), z = G(void 0, "0ubs"), K = G(void 0, "0ubsb"), Y = G(void 0, "0actk"), q = G("m_m", "Pa", !0), $ = G();
const J = {
    Ga: {
        value: 0,
        configurable: !0,
        writable: !0,
        enumerable: !1
    }
}, Z = Object.defineProperties, Q = B ? j : "Ga";
var tt;
const et = [];
function nt(t, e) {
    B || Q in t || Z(t, J), t[Q] |= e;
}
function rt(t, e) {
    B || Q in t || Z(t, J), t[Q] = e;
}
function it(t) {
    return nt(t, 34), t;
}
function st(t) {
    return nt(t, 8192), t;
}
rt(et, 7), tt = Object.freeze(et);
var ot = {};
function at(t, e) {
    return void 0 === e ? t.h !== ct && !!(2 & (0 | t.v[Q])) : !!(2 & e) && t.h !== ct;
}
const ct = {};
function ht(t, e) {
    if (null != t) {
        if ("string" == typeof t) t = t ? new F(t, L) : R();
        else if (t.constructor !== F) if (x(t)) t = t.length ? new F(new Uint8Array(t), L) : R();
        else {
            if (!e) throw Error();
            t = void 0;
        }
    }
    return t;
}
class ut {
    constructor(t, e, n){
        this.g = t, this.h = e, this.l = n;
    }
    next() {
        const t = this.g.next();
        return t.done || (t.value = this.h.call(this.l, t.value)), t;
    }
    [Symbol.iterator]() {
        return this;
    }
}
var lt = Object.freeze({});
function ft(t, e, n) {
    const r = 128 & e ? 0 : -1, i = t.length;
    var s;
    (s = !!i) && (s = null != (s = t[i - 1]) && "object" == typeof s && s.constructor === Object);
    const o = i + (s ? -1 : 0);
    for(e = 128 & e ? 1 : 0; e < o; e++)n(e - r, t[e]);
    if (s) {
        t = t[i - 1];
        for(const e in t)!isNaN(e) && n(+e, t[e]);
    }
}
var dt = {};
function pt(t) {
    return 128 & t ? dt : void 0;
}
function gt(t) {
    return t.Na = !0, t;
}
var mt = gt((t)=>"number" == typeof t), yt = gt((t)=>"string" == typeof t), _t = gt((t)=>"boolean" == typeof t), vt = "function" == typeof t.BigInt && "bigint" == typeof t.BigInt(0);
function Et(t) {
    var e = t;
    if (yt(e)) {
        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e)) throw Error(String(e));
    } else if (mt(e) && !Number.isSafeInteger(e)) throw Error(String(e));
    return vt ? BigInt(t) : t = _t(t) ? t ? "1" : "0" : yt(t) ? t.trim() || "0" : String(t);
}
var wt = gt((t)=>vt ? t >= At && t <= kt : "-" === t[0] ? St(t, Tt) : St(t, bt));
const Tt = Number.MIN_SAFE_INTEGER.toString(), At = vt ? BigInt(Number.MIN_SAFE_INTEGER) : void 0, bt = Number.MAX_SAFE_INTEGER.toString(), kt = vt ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
function St(t, e) {
    if (t.length > e.length) return !1;
    if (t.length < e.length || t === e) return !0;
    for(let n = 0; n < t.length; n++){
        const r = t[n], i = e[n];
        if (r > i) return !1;
        if (r < i) return !0;
    }
}
const xt = "function" == typeof Uint8Array.prototype.slice;
let Lt, Rt = 0, It = 0;
function Ft(t) {
    const e = t >>> 0;
    Rt = e, It = (t - e) / 4294967296 >>> 0;
}
function Mt(t) {
    if (t < 0) {
        Ft(-t);
        const [e, n] = jt(Rt, It);
        Rt = e >>> 0, It = n >>> 0;
    } else Ft(t);
}
function Pt(t) {
    const e = Lt ||= new DataView(new ArrayBuffer(8));
    e.setFloat32(0, +t, !0), It = 0, Rt = e.getUint32(0, !0);
}
function Ct(t, e) {
    const n = 4294967296 * e + (t >>> 0);
    return Number.isSafeInteger(n) ? n : Ut(t, e);
}
function Ot(t, e) {
    return Et(D() ? BigInt.asUintN(64, (BigInt(e >>> 0) << BigInt(32)) + BigInt(t >>> 0)) : Ut(t, e));
}
function Nt(t, e) {
    return D() ? Et(BigInt.asIntN(64, (BigInt.asUintN(32, BigInt(e)) << BigInt(32)) + BigInt.asUintN(32, BigInt(t)))) : Et(Bt(t, e));
}
function Ut(t, e) {
    if (t >>>= 0, (e >>>= 0) <= 2097151) var n = "" + (4294967296 * e + t);
    else D() ? n = "" + (BigInt(e) << BigInt(32) | BigInt(t)) : (t = (16777215 & t) + 6777216 * (n = 16777215 & (t >>> 24 | e << 8)) + 6710656 * (e = e >> 16 & 65535), n += 8147497 * e, e *= 2, t >= 1e7 && (n += t / 1e7 >>> 0, t %= 1e7), n >= 1e7 && (e += n / 1e7 >>> 0, n %= 1e7), n = e + Dt(n) + Dt(t));
    return n;
}
function Dt(t) {
    return t = String(t), "0000000".slice(t.length) + t;
}
function Bt(t, e) {
    if (2147483648 & e) if (D()) t = "" + (BigInt(0 | e) << BigInt(32) | BigInt(t >>> 0));
    else {
        const [n, r] = jt(t, e);
        t = "-" + Ut(n, r);
    }
    else t = Ut(t, e);
    return t;
}
function Gt(t) {
    if (t.length < 16) Mt(Number(t));
    else if (D()) t = BigInt(t), Rt = Number(t & BigInt(4294967295)) >>> 0, It = Number(t >> BigInt(32) & BigInt(4294967295));
    else {
        const e = +("-" === t[0]);
        It = Rt = 0;
        const n = t.length;
        for(let r = e, i = (n - e) % 6 + e; i <= n; r = i, i += 6){
            const e = Number(t.slice(r, i));
            It *= 1e6, Rt = 1e6 * Rt + e, Rt >= 4294967296 && (It += Math.trunc(Rt / 4294967296), It >>>= 0, Rt >>>= 0);
        }
        if (e) {
            const [t, e] = jt(Rt, It);
            Rt = t, It = e;
        }
    }
}
function jt(t, e) {
    return e = ~e, t ? t = 1 + ~t : e += 1, [
        t,
        e
    ];
}
function Vt(t) {
    return Array.prototype.slice.call(t);
}
const Xt = "function" == typeof BigInt ? BigInt.asIntN : void 0, Ht = "function" == typeof BigInt ? BigInt.asUintN : void 0, Wt = Number.isSafeInteger, zt = Number.isFinite, Kt = Math.trunc, Yt = Et(0);
function qt(t) {
    if (null != t && "number" != typeof t) throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);
    return t;
}
function $t(t) {
    return null == t || "number" == typeof t ? t : "NaN" === t || "Infinity" === t || "-Infinity" === t ? Number(t) : void 0;
}
function Jt(t) {
    if (null != t && "boolean" != typeof t) {
        var e = typeof t;
        throw Error(`Expected boolean but got ${"object" != e ? e : t ? Array.isArray(t) ? "array" : e : "null"}: ${t}`);
    }
    return t;
}
function Zt(t) {
    return null == t || "boolean" == typeof t ? t : "number" == typeof t ? !!t : void 0;
}
const Qt = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function te(t) {
    switch(typeof t){
        case "bigint":
            return !0;
        case "number":
            return zt(t);
        case "string":
            return Qt.test(t);
        default:
            return !1;
    }
}
function ee(t) {
    if (null == t) return t;
    if ("string" == typeof t && t) t = +t;
    else if ("number" != typeof t) return;
    return zt(t) ? 0 | t : void 0;
}
function ne(t) {
    if (null == t) return t;
    if ("string" == typeof t && t) t = +t;
    else if ("number" != typeof t) return;
    return zt(t) ? t >>> 0 : void 0;
}
function re(t) {
    const e = t.length;
    return ("-" === t[0] ? e < 20 || 20 === e && t <= "-9223372036854775808" : e < 19 || 19 === e && t <= "9223372036854775807") ? t : (Gt(t), Bt(Rt, It));
}
function ie(t) {
    if (t = Kt(t), !Wt(t)) {
        Mt(t);
        var e = Rt, n = It;
        (t = 2147483648 & n) && (n = ~n >>> 0, 0 == (e = 1 + ~e >>> 0) && (n = n + 1 >>> 0)), t = "number" == typeof (e = Ct(e, n)) ? t ? -e : e : t ? "-" + e : e;
    }
    return t;
}
function se(t) {
    var e = Kt(Number(t));
    return Wt(e) ? String(e) : (-1 !== (e = t.indexOf(".")) && (t = t.substring(0, e)), re(t));
}
function oe(t) {
    var e = Kt(Number(t));
    return Wt(e) ? Et(e) : (-1 !== (e = t.indexOf(".")) && (t = t.substring(0, e)), D() ? Et(Xt(64, BigInt(t))) : Et(re(t)));
}
function ae(t) {
    return Wt(t) ? t = Et(ie(t)) : (t = Kt(t), Wt(t) ? t = String(t) : (Mt(t), t = Bt(Rt, It)), t = Et(t)), t;
}
function ce(t) {
    const e = typeof t;
    return null == t ? t : "bigint" === e ? Et(Xt(64, t)) : te(t) ? "string" === e ? oe(t) : ae(t) : void 0;
}
function he(t) {
    if ("string" != typeof t) throw Error();
    return t;
}
function ue(t) {
    if (null != t && "string" != typeof t) throw Error();
    return t;
}
function le(t) {
    return null == t || "string" == typeof t ? t : void 0;
}
function fe(t, e, n, r) {
    return null != t && t[q] === ot ? t : Array.isArray(t) ? ((r = (n = 0 | t[Q]) | 32 & r | 2 & r) !== n && rt(t, r), new e(t)) : (n ? 2 & r ? ((t = e[V]) || (it((t = new e).v), t = e[V] = t), e = t) : e = new e : e = void 0, e);
}
function de(t, e, n) {
    if (e) t: {
        if (!te(e = t)) throw N("int64");
        switch(typeof e){
            case "string":
                e = oe(e);
                break t;
            case "bigint":
                e = Et(Xt(64, e));
                break t;
            default:
                e = ae(e);
        }
    }
    else e = ce(t);
    return null == (t = e) ? n ? Yt : void 0 : t;
}
const pe = {};
let ge = function() {
    try {
        return m(new class extends Map {
            constructor(){
                super();
            }
        }), !1;
    } catch  {
        return !0;
    }
}();
class me {
    constructor(){
        this.g = new Map;
    }
    get(t) {
        return this.g.get(t);
    }
    set(t, e) {
        return this.g.set(t, e), this.size = this.g.size, this;
    }
    delete(t) {
        return t = this.g.delete(t), this.size = this.g.size, t;
    }
    clear() {
        this.g.clear(), this.size = this.g.size;
    }
    has(t) {
        return this.g.has(t);
    }
    entries() {
        return this.g.entries();
    }
    keys() {
        return this.g.keys();
    }
    values() {
        return this.g.values();
    }
    forEach(t, e) {
        return this.g.forEach(t, e);
    }
    [Symbol.iterator]() {
        return this.entries();
    }
}
const ye = ge ? (Object.setPrototypeOf(me.prototype, Map.prototype), Object.defineProperties(me.prototype, {
    size: {
        value: 0,
        configurable: !0,
        enumerable: !0,
        writable: !0
    }
}), me) : class extends Map {
    constructor(){
        super();
    }
};
function _e(t) {
    return t;
}
function ve(t) {
    if (2 & t.J) throw Error("Cannot mutate an immutable Map");
}
var Ee = class extends ye {
    constructor(t, e, n = _e, r = _e){
        super(), this.J = 0 | t[Q], this.K = e, this.S = n, this.fa = this.K ? we : r;
        for(let i = 0; i < t.length; i++){
            const s = t[i], o = n(s[0], !1, !0);
            let a = s[1];
            e ? void 0 === a && (a = null) : a = r(s[1], !1, !0, void 0, void 0, this.J), super.set(o, a);
        }
    }
    V(t) {
        return st(Array.from(super.entries(), t));
    }
    clear() {
        ve(this), super.clear();
    }
    delete(t) {
        return ve(this), super.delete(this.S(t, !0, !1));
    }
    entries() {
        if (this.K) {
            var t = super.keys();
            t = new ut(t, Te, this);
        } else t = super.entries();
        return t;
    }
    values() {
        if (this.K) {
            var t = super.keys();
            t = new ut(t, Ee.prototype.get, this);
        } else t = super.values();
        return t;
    }
    forEach(t, e) {
        this.K ? super.forEach((n, r, i)=>{
            t.call(e, i.get(r), r, i);
        }) : super.forEach(t, e);
    }
    set(t, e) {
        return ve(this), null == (t = this.S(t, !0, !1)) ? this : null == e ? (super.delete(t), this) : super.set(t, this.fa(e, !0, !0, this.K, !1, this.J));
    }
    Ma(t) {
        const e = this.S(t[0], !1, !0);
        t = t[1], t = this.K ? void 0 === t ? null : t : this.fa(t, !1, !0, void 0, !1, this.J), super.set(e, t);
    }
    has(t) {
        return super.has(this.S(t, !1, !1));
    }
    get(t) {
        t = this.S(t, !1, !1);
        const e = super.get(t);
        if (void 0 !== e) {
            var n = this.K;
            return n ? ((n = this.fa(e, !1, !0, n, this.ra, this.J)) !== e && super.set(t, n), n) : e;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
};
function we(t, e, n, r, i, s) {
    return t = fe(t, r, n, s), i && (t = Xe(t)), t;
}
function Te(t) {
    return [
        t,
        this.get(t)
    ];
}
let Ae;
function be() {
    return Ae ||= new Ee(it([]), void 0, void 0, void 0, pe);
}
function ke(t) {
    return H ? t[H] : void 0;
}
function Se(t, e) {
    for(const n in t)!isNaN(n) && e(t, +n, t[n]);
}
Ee.prototype.toJSON = void 0;
var xe = class {
};
const Le = {
    Ka: !0
};
function Re(t, e) {
    e < 100 || U(z, 1);
}
function Ie(t, e, n, r) {
    const i = void 0 !== r;
    r = !!r;
    var s, o = H;
    !i && B && o && (s = t[o]) && Se(s, Re), o = [];
    var a = t.length;
    let c;
    s = 4294967295;
    let h = !1;
    const u = !!(64 & e), l = u ? 128 & e ? 0 : -1 : void 0;
    1 & e || (c = a && t[a - 1], null != c && "object" == typeof c && c.constructor === Object ? s = --a : c = void 0, !u || 128 & e || i || (h = !0, s = s - l + l)), e = void 0;
    for(var f = 0; f < a; f++){
        let i = t[f];
        if (null != i && null != (i = n(i, r))) if (u && f >= s) {
            const t = f - l;
            (e ??= {})[t] = i;
        } else o[f] = i;
    }
    if (c) for(let t in c){
        if (null == (a = c[t]) || null == (a = n(a, r))) continue;
        let i;
        f = +t, u && !Number.isNaN(f) && (i = f + l) < s ? o[i] = a : (e ??= {})[t] = a;
    }
    return e && (h ? o.push(e) : o[s] = e), i && H && (t = ke(t)) && t instanceof xe && (o[H] = function(t) {
        const e = new xe;
        return Se(t, (t, n, r)=>{
            e[n] = Vt(r);
        }), e.da = t.da, e;
    }(t)), o;
}
function Fe(t) {
    return t[0] = Me(t[0]), t[1] = Me(t[1]), t;
}
function Me(t) {
    switch(typeof t){
        case "number":
            return Number.isFinite(t) ? t : "" + t;
        case "bigint":
            return wt(t) ? Number(t) : "" + t;
        case "boolean":
            return t ? 1 : 0;
        case "object":
            if (Array.isArray(t)) {
                var e = 0 | t[Q];
                return 0 === t.length && 1 & e ? void 0 : Ie(t, e, Me);
            }
            if (null != t && t[q] === ot) return Oe(t);
            if (t instanceof F) {
                if (null == (e = t.g)) t = "";
                else if ("string" == typeof e) t = e;
                else {
                    if (T) {
                        for(var n = "", r = 0, i = e.length - 10240; r < i;)n += String.fromCharCode.apply(null, e.subarray(r, r += 10240));
                        n += String.fromCharCode.apply(null, r ? e.subarray(r) : e), e = btoa(n);
                    } else {
                        void 0 === n && (n = 0), E(), n = y[n], r = Array(Math.floor(e.length / 3)), i = n[64] || "";
                        let t = 0, h = 0;
                        for(; t < e.length - 2; t += 3){
                            var s = e[t], o = e[t + 1], a = e[t + 2], c = n[s >> 2];
                            s = n[(3 & s) << 4 | o >> 4], o = n[(15 & o) << 2 | a >> 6], a = n[63 & a], r[h++] = c + s + o + a;
                        }
                        switch(c = 0, a = i, e.length - t){
                            case 2:
                                a = n[(15 & (c = e[t + 1])) << 2] || i;
                            case 1:
                                e = e[t], r[h] = n[e >> 2] + n[(3 & e) << 4 | c >> 4] + a + i;
                        }
                        e = r.join("");
                    }
                    t = t.g = e;
                }
                return t;
            }
            return t instanceof Ee ? t = 0 !== t.size ? t.V(Fe) : void 0 : void 0;
    }
    return t;
}
let Pe, Ce;
function Oe(t) {
    return Ie(t = t.v, 0 | t[Q], Me);
}
function Ne(t, e) {
    return Ue(t, e[0], e[1]);
}
function Ue(t, e, n, r = 0) {
    if (null == t) {
        var i = 32;
        n ? (t = [
            n
        ], i |= 128) : t = [], e && (i = -16760833 & i | (1023 & e) << 14);
    } else {
        if (!Array.isArray(t)) throw Error("narr");
        if (i = 0 | t[Q], d && 1 & i) throw Error("rfarr");
        if (2048 & i && !(2 & i) && function() {
            if (d) throw Error("carr");
            U(Y, 5);
        }(), 256 & i) throw Error("farr");
        if (64 & i) return (i | r) !== i && rt(t, i | r), t;
        if (n && (i |= 128, n !== t[0])) throw Error("mid");
        t: {
            i |= 64;
            var s = (n = t).length;
            if (s) {
                var o = s - 1;
                const t = n[o];
                if (null != t && "object" == typeof t && t.constructor === Object) {
                    if ((o -= e = 128 & i ? 0 : -1) >= 1024) throw Error("pvtlmt");
                    for(var a in t)(s = +a) < o && (n[s + e] = t[a], delete t[a]);
                    i = -16760833 & i | (1023 & o) << 14;
                    break t;
                }
            }
            if (e) {
                if ((a = Math.max(e, s - (128 & i ? 0 : -1))) > 1024) throw Error("spvt");
                i = -16760833 & i | (1023 & a) << 14;
            }
        }
    }
    return rt(t, 64 | i | r), t;
}
function De(t, e) {
    if ("object" != typeof t) return t;
    if (Array.isArray(t)) {
        var n = 0 | t[Q];
        return 0 === t.length && 1 & n ? void 0 : Be(t, n, e);
    }
    if (null != t && t[q] === ot) return je(t);
    if (t instanceof Ee) {
        if (2 & (e = t.J)) return t;
        if (!t.size) return;
        if (n = it(t.V()), t.K) for(t = 0; t < n.length; t++){
            const r = n[t];
            let i = r[1];
            i = null == i || "object" != typeof i ? void 0 : null != i && i[q] === ot ? je(i) : Array.isArray(i) ? Be(i, 0 | i[Q], !!(32 & e)) : void 0, r[1] = i;
        }
        return n;
    }
    return t instanceof F ? t : void 0;
}
function Be(t, e, n) {
    return 2 & e || (!n || 4096 & e || 16 & e ? t = Ve(t, e, !1, n && !(16 & e)) : (nt(t, 34), 4 & e && Object.freeze(t))), t;
}
function Ge(t, e, n) {
    return t = new t.constructor(e), n && (t.h = ct), t.m = ct, t;
}
function je(t) {
    const e = t.v, n = 0 | e[Q];
    return at(t, n) ? t : Ke(t, e, n) ? Ge(t, e) : Ve(e, n);
}
function Ve(t, e, n, r) {
    return r ??= !!(34 & e), t = Ie(t, e, De, r), r = 32, n && (r |= 2), rt(t, e = 16769217 & e | r), t;
}
function Xe(t) {
    const e = t.v, n = 0 | e[Q];
    return at(t, n) ? Ke(t, e, n) ? Ge(t, e, !0) : new t.constructor(Ve(e, n, !1)) : t;
}
function He(t) {
    if (t.h !== ct) return !1;
    var e = t.v;
    return nt(e = Ve(e, 0 | e[Q]), 2048), t.v = e, t.h = void 0, t.m = void 0, !0;
}
function We(t) {
    if (!He(t) && at(t, 0 | t.v[Q])) throw Error();
}
function ze(t, e) {
    void 0 === e && (e = 0 | t[Q]), 32 & e && !(4096 & e) && rt(t, 4096 | e);
}
function Ke(t, e, n) {
    return !!(2 & n) || !(!(32 & n) || 4096 & n) && (rt(e, 2 | n), t.h = ct, !0);
}
const Ye = Et(0), qe = {};
function $e(t, e, n, r, i) {
    if (null !== (e = Je(t.v, e, n, i)) || r && t.m !== ct) return e;
}
function Je(t, e, n, r) {
    if (-1 === e) return null;
    const i = e + (n ? 0 : -1), s = t.length - 1;
    let o, a;
    if (!(s < 1 + (n ? 0 : -1))) {
        if (i >= s) if (o = t[s], null != o && "object" == typeof o && o.constructor === Object) n = o[e], a = !0;
        else {
            if (i !== s) return;
            n = o;
        }
        else n = t[i];
        if (r && null != n) {
            if (null == (r = r(n))) return r;
            if (!Object.is(r, n)) return a ? o[e] = r : t[i] = r, r;
        }
        return n;
    }
}
function Ze(t, e, n, r) {
    We(t), Qe(t = t.v, 0 | t[Q], e, n, r);
}
function Qe(t, e, n, r, i) {
    const s = n + (i ? 0 : -1);
    var o = t.length - 1;
    if (o >= 1 + (i ? 0 : -1) && s >= o) {
        const i = t[o];
        if (null != i && "object" == typeof i && i.constructor === Object) return i[n] = r, e;
    }
    return s <= o ? (t[s] = r, e) : (void 0 !== r && (n >= (o = (e ??= 0 | t[Q]) >> 14 & 1023 || 536870912) ? null != r && (t[o + (i ? 0 : -1)] = {
        [n]: r
    }) : t[s] = r), e);
}
function tn() {
    return void 0 === lt ? 2 : 4;
}
function en(t, e, n, r, i) {
    let s = t.v, o = 0 | s[Q];
    r = at(t, o) ? 1 : r, i = !!i || 3 === r, 2 === r && He(t) && (s = t.v, o = 0 | s[Q]);
    let a = (t = rn(s, e)) === tt ? 7 : 0 | t[Q], c = sn(a, o);
    var h = !(4 & c);
    if (h) {
        4 & c && (t = Vt(t), a = 0, c = An(c, o), o = Qe(s, o, e, t));
        let r = 0, i = 0;
        for(; r < t.length; r++){
            const e = n(t[r]);
            null != e && (t[i++] = e);
        }
        i < r && (t.length = i), n = -513 & (4 | c), c = n &= -1025, c &= -4097;
    }
    return c !== a && (rt(t, c), 2 & c && Object.freeze(t)), nn(t, c, s, o, e, r, h, i);
}
function nn(t, e, n, r, i, s, o, a) {
    let c = e;
    return 1 === s || 4 === s && (2 & e || !(16 & e) && 32 & r) ? on(e) || ((e |= !t.length || o && !(4096 & e) || 32 & r && !(4096 & e || 16 & e) ? 2 : 256) !== c && rt(t, e), Object.freeze(t)) : (2 === s && on(e) && (t = Vt(t), c = 0, e = An(e, r), r = Qe(n, r, i, t)), on(e) || (a || (e |= 16), e !== c && rt(t, e))), 2 & e || !(4096 & e || 16 & e) || ze(n, r), t;
}
function rn(t, e, n) {
    return t = Je(t, e, n), Array.isArray(t) ? t : tt;
}
function sn(t, e) {
    return 2 & e && (t |= 2), 1 | t;
}
function on(t) {
    return !!(2 & t) && !!(4 & t) || !!(256 & t);
}
function an(t) {
    return ht(t, !0);
}
function cn(t) {
    t = Vt(t);
    for(let e = 0; e < t.length; e++){
        const n = t[e] = Vt(t[e]);
        Array.isArray(n[1]) && (n[1] = it(n[1]));
    }
    return st(t);
}
function hn(t, e, n, r) {
    We(t), Qe(t = t.v, 0 | t[Q], e, ("0" === r ? 0 === Number(n) : n === r) ? void 0 : n);
}
function un(t, e, n) {
    if (2 & e) throw Error();
    const r = pt(e);
    let i = rn(t, n, r), s = i === tt ? 7 : 0 | i[Q], o = sn(s, e);
    return (2 & o || on(o) || 16 & o) && (o === s || on(o) || rt(i, o), i = Vt(i), s = 0, o = An(o, e), Qe(t, e, n, i, r)), o &= -13, o !== s && rt(i, o), i;
}
function ln(t, e) {
    var n = Cs;
    return pn(fn(t = t.v), t, void 0, n) === e ? e : -1;
}
function fn(t) {
    if (B) return t[X] ?? (t[X] = new Map);
    if (X in t) return t[X];
    const e = new Map;
    return Object.defineProperty(t, X, {
        value: e
    }), e;
}
function dn(t, e, n, r, i) {
    const s = fn(t), o = pn(s, t, e, n, i);
    return o !== r && (o && (e = Qe(t, e, o, void 0, i)), s.set(n, r)), e;
}
function pn(t, e, n, r, i) {
    let s = t.get(r);
    if (null != s) return s;
    s = 0;
    for(let t = 0; t < r.length; t++){
        const o = r[t];
        null != Je(e, o, i) && (0 !== s && (n = Qe(e, n, s, void 0, i)), s = o);
    }
    return t.set(r, s), s;
}
function gn(t, e, n) {
    let r = 0 | t[Q];
    const i = pt(r), s = Je(t, n, i);
    let o;
    if (null != s && s[q] === ot) {
        if (!at(s)) return He(s), s.v;
        o = s.v;
    } else Array.isArray(s) && (o = s);
    if (o) {
        const t = 0 | o[Q];
        2 & t && (o = Ve(o, t));
    }
    return o = Ne(o, e), o !== s && Qe(t, r, n, o, i), o;
}
function mn(t, e, n, r, i) {
    let s = !1;
    if (null != (r = Je(t, r, i, (t)=>{
        const r = fe(t, n, !1, e);
        return s = r !== t && null != r, r;
    }))) return s && !at(r) && ze(t, e), r;
}
function yn(t, e, n, r) {
    let i = t.v, s = 0 | i[Q];
    if (null == (e = mn(i, s, e, n, r))) return e;
    if (s = 0 | i[Q], !at(t, s)) {
        const o = Xe(e);
        o !== e && (He(t) && (i = t.v, s = 0 | i[Q]), s = Qe(i, s, n, e = o, r), ze(i, s));
    }
    return e;
}
function _n(t, e, n, r, i, s, o, a) {
    var c = at(t, n);
    s = c ? 1 : s, o = !!o || 3 === s, c = a && !c, (2 === s || c) && He(t) && (n = 0 | (e = t.v)[Q]);
    var h = (t = rn(e, i)) === tt ? 7 : 0 | t[Q], u = sn(h, n);
    if (a = !(4 & u)) {
        var l = t, f = n;
        const e = !!(2 & u);
        e && (f |= 2);
        let i = !e, s = !0, o = 0, a = 0;
        for(; o < l.length; o++){
            const t = fe(l[o], r, !1, f);
            if (t instanceof r) {
                if (!e) {
                    const e = at(t);
                    i &&= !e, s &&= e;
                }
                l[a++] = t;
            }
        }
        a < o && (l.length = a), u |= 4, u = s ? -4097 & u : 4096 | u, u = i ? 8 | u : -9 & u;
    }
    if (u !== h && (rt(t, u), 2 & u && Object.freeze(t)), c && !(8 & u || !t.length && (1 === s || 4 === s && (2 & u || !(16 & u) && 32 & n)))) {
        for(on(u) && (t = Vt(t), u = An(u, n), n = Qe(e, n, i, t)), r = t, c = u, h = 0; h < r.length; h++)(l = r[h]) !== (u = Xe(l)) && (r[h] = u);
        c |= 8, rt(t, u = c = r.length ? 4096 | c : -4097 & c);
    }
    return nn(t, u, e, n, i, s, a, o);
}
function vn(t, e, n) {
    const r = t.v;
    return _n(t, r, 0 | r[Q], e, n, tn(), !1, !0);
}
function En(t) {
    return null == t && (t = void 0), t;
}
function wn(t, e, n, r, i) {
    return Ze(t, n, r = En(r), i), r && !at(r) && ze(t.v), t;
}
function Tn(t, e, n, r) {
    t: {
        var i = r = En(r);
        We(t);
        const s = t.v;
        let o = 0 | s[Q];
        if (null == i) {
            const t = fn(s);
            if (pn(t, s, o, n) !== e) break t;
            t.set(n, 0);
        } else o = dn(s, o, n, e);
        Qe(s, o, e, i);
    }
    r && !at(r) && ze(t.v);
}
function An(t, e) {
    return -273 & (2 & e ? 2 | t : -3 & t);
}
function bn(t, e, n, r) {
    var i = r;
    We(t), t = _n(t, r = t.v, 0 | r[Q], n, e, 2, !0), i = null != i ? i : new n, t.push(i), e = n = t === tt ? 7 : 0 | t[Q], (i = at(i)) ? (n &= -9, 1 === t.length && (n &= -4097)) : n |= 4096, n !== e && rt(t, n), i || ze(r);
}
function kn(t, e, n) {
    return ee($e(t, e, void 0, n));
}
function Sn(t, e) {
    return $e(t, e, void 0, void 0, $t) ?? 0;
}
function xn(t, e, n) {
    if (null != n) {
        if ("number" != typeof n) throw N("int32");
        if (!zt(n)) throw N("int32");
        n |= 0;
    }
    Ze(t, e, n);
}
function Ln(t, e, n) {
    Ze(t, e, qt(n));
}
function Rn(t, e, n) {
    hn(t, e, ue(n), "");
}
function In(t, e, n) {
    {
        We(t);
        const o = t.v;
        let a = 0 | o[Q];
        if (null == n) Qe(o, a, e);
        else {
            var r = t = n === tt ? 7 : 0 | n[Q], i = on(t), s = i || Object.isFrozen(n);
            for(i || (t = 0), s || (n = Vt(n), r = 0, t = An(t, a), s = !1), t |= 5, t |= (4 & t ? 512 & t ? 512 : 1024 & t ? 1024 : 0 : void 0) ?? 1024, i = 0; i < n.length; i++){
                const e = n[i], o = he(e);
                Object.is(e, o) || (s && (n = Vt(n), r = 0, t = An(t, a), s = !1), n[i] = o);
            }
            t !== r && (s && (n = Vt(n), t = An(t, a)), rt(n, t)), Qe(o, a, e, n);
        }
    }
}
function Fn(t, e, n) {
    We(t), en(t, e, le, 2, !0).push(he(n));
}
var Mn = class {
    constructor(t, e, n){
        if (this.buffer = t, n && !e) throw Error();
        this.g = e;
    }
};
function Pn(t, e) {
    if ("string" == typeof t) return new Mn(S(t), e);
    if (Array.isArray(t)) return new Mn(new Uint8Array(t), e);
    if (t.constructor === Uint8Array) return new Mn(t, !1);
    if (t.constructor === ArrayBuffer) return t = new Uint8Array(t), new Mn(t, !1);
    if (t.constructor === F) return e = I(t) || new Uint8Array(0), new Mn(e, !0, t);
    if (t instanceof Uint8Array) return t = t.constructor === Uint8Array ? t : new Uint8Array(t.buffer, t.byteOffset, t.byteLength), new Mn(t, !1);
    throw Error();
}
function Cn(t, e) {
    let n, r = 0, i = 0, s = 0;
    const o = t.h;
    let a = t.g;
    do {
        n = o[a++], r |= (127 & n) << s, s += 7;
    }while (s < 32 && 128 & n)
    if (s > 32) for(i |= (127 & n) >> 4, s = 3; s < 32 && 128 & n; s += 7)n = o[a++], i |= (127 & n) << s;
    if (Gn(t, a), !(128 & n)) return e(r >>> 0, i >>> 0);
    throw Error();
}
function On(t) {
    let e = 0, n = t.g;
    const r = n + 10, i = t.h;
    for(; n < r;){
        const r = i[n++];
        if (e |= r, 0 == (128 & r)) return Gn(t, n), !!(127 & e);
    }
    throw Error();
}
function Nn(t) {
    const e = t.h;
    let n = t.g, r = e[n++], i = 127 & r;
    if (128 & r && (r = e[n++], i |= (127 & r) << 7, 128 & r && (r = e[n++], i |= (127 & r) << 14, 128 & r && (r = e[n++], i |= (127 & r) << 21, 128 & r && (r = e[n++], i |= r << 28, 128 & r && 128 & e[n++] && 128 & e[n++] && 128 & e[n++] && 128 & e[n++] && 128 & e[n++]))))) throw Error();
    return Gn(t, n), i;
}
function Un(t) {
    return Nn(t) >>> 0;
}
function Dn(t) {
    var e = t.h;
    const n = t.g;
    var r = e[n], i = e[n + 1];
    const s = e[n + 2];
    return e = e[n + 3], Gn(t, t.g + 4), t = 2 * ((i = (r << 0 | i << 8 | s << 16 | e << 24) >>> 0) >> 31) + 1, r = i >>> 23 & 255, i &= 8388607, 255 == r ? i ? NaN : t * (1 / 0) : 0 == r ? 1401298464324817e-60 * t * i : t * Math.pow(2, r - 150) * (i + 8388608);
}
function Bn(t) {
    return Nn(t);
}
function Gn(t, e) {
    if (t.g = e, e > t.l) throw Error();
}
function jn(t, e) {
    if (e < 0) throw Error();
    const n = t.g;
    if ((e = n + e) > t.l) throw Error();
    return t.g = e, n;
}
function Vn(t, e) {
    if (0 == e) return R();
    var n = jn(t, e);
    return t.Y && t.j ? n = t.h.subarray(n, n + e) : (t = t.h, n = n === (e = n + e) ? new Uint8Array(0) : xt ? t.slice(n, e) : new Uint8Array(t.subarray(n, e))), 0 == n.length ? R() : new F(n, L);
}
var Xn = [];
function Hn(t, e, n, r) {
    if (Qn.length) {
        const i = Qn.pop();
        return i.o(r), i.g.init(t, e, n, r), i;
    }
    return new Zn(t, e, n, r);
}
function Wn(t) {
    t.g.clear(), t.l = -1, t.h = -1, Qn.length < 100 && Qn.push(t);
}
function zn(t) {
    var e = t.g;
    if (e.g == e.l) return !1;
    t.m = t.g.g;
    var n = Un(t.g);
    if (e = n >>> 3, !((n &= 7) >= 0 && n <= 5)) throw Error();
    if (e < 1) throw Error();
    return t.l = e, t.h = n, !0;
}
function Kn(t) {
    switch(t.h){
        case 0:
            0 != t.h ? Kn(t) : On(t.g);
            break;
        case 1:
            Gn(t = t.g, t.g + 8);
            break;
        case 2:
            if (2 != t.h) Kn(t);
            else {
                var e = Un(t.g);
                Gn(t = t.g, t.g + e);
            }
            break;
        case 5:
            Gn(t = t.g, t.g + 4);
            break;
        case 3:
            for(e = t.l;;){
                if (!zn(t)) throw Error();
                if (4 == t.h) {
                    if (t.l != e) throw Error();
                    break;
                }
                Kn(t);
            }
            break;
        default:
            throw Error();
    }
}
function Yn(t, e, n) {
    const r = t.g.l;
    var i = Un(t.g);
    let s = (i = t.g.g + i) - r;
    if (s <= 0 && (t.g.l = i, n(e, t, void 0, void 0, void 0), s = i - t.g.g), s) throw Error();
    return t.g.g = i, t.g.l = r, e;
}
function qn(t) {
    var e = Un(t.g), a = jn(t = t.g, e);
    if (t = t.h, o) {
        var c, h = t;
        (c = s) || (c = s = new TextDecoder("utf-8", {
            fatal: !0
        })), e = a + e, h = 0 === a && e === h.length ? h : h.subarray(a, e);
        try {
            var u = c.decode(h);
        } catch (t) {
            if (void 0 === i) {
                try {
                    c.decode(new Uint8Array([
                        128
                    ]));
                } catch (t) {}
                try {
                    c.decode(new Uint8Array([
                        97
                    ])), i = !0;
                } catch (t) {
                    i = !1;
                }
            }
            throw !i && (s = void 0), t;
        }
    } else {
        e = (u = a) + e, a = [];
        let i, s = null;
        for(; u < e;){
            var l = t[u++];
            l < 128 ? a.push(l) : l < 224 ? u >= e ? n() : (i = t[u++], l < 194 || 128 != (192 & i) ? (u--, n()) : a.push((31 & l) << 6 | 63 & i)) : l < 240 ? u >= e - 1 ? n() : (i = t[u++], 128 != (192 & i) || 224 === l && i < 160 || 237 === l && i >= 160 || 128 != (192 & (c = t[u++])) ? (u--, n()) : a.push((15 & l) << 12 | (63 & i) << 6 | 63 & c)) : l <= 244 ? u >= e - 2 ? n() : (i = t[u++], 128 != (192 & i) || i - 144 + (l << 28) >> 30 != 0 || 128 != (192 & (c = t[u++])) || 128 != (192 & (h = t[u++])) ? (u--, n()) : (l = (7 & l) << 18 | (63 & i) << 12 | (63 & c) << 6 | 63 & h, l -= 65536, a.push(55296 + (l >> 10 & 1023), 56320 + (1023 & l)))) : n(), a.length >= 8192 && (s = r(s, a), a.length = 0);
        }
        u = r(s, a);
    }
    return u;
}
function $n(t) {
    const e = Un(t.g);
    return Vn(t.g, e);
}
function Jn(t, e, n) {
    var r = Un(t.g);
    for(r = t.g.g + r; t.g.g < r;)n.push(e(t.g));
}
var Zn = class {
    constructor(t, e, n, r){
        if (Xn.length) {
            const i = Xn.pop();
            i.init(t, e, n, r), t = i;
        } else t = new class {
            constructor(t, e, n, r){
                this.h = null, this.j = !1, this.g = this.l = this.m = 0, this.init(t, e, n, r);
            }
            init(t, e, n, { Y: r = !1, ea: i = !1 } = {}) {
                this.Y = r, this.ea = i, t && (t = Pn(t, this.ea), this.h = t.buffer, this.j = t.g, this.m = e || 0, this.l = void 0 !== n ? this.m + n : this.h.length, this.g = this.m);
            }
            clear() {
                this.h = null, this.j = !1, this.g = this.l = this.m = 0, this.Y = !1;
            }
        }(t, e, n, r);
        this.g = t, this.m = this.g.g, this.h = this.l = -1, this.o(r);
    }
    o({ ha: t = !1 } = {}) {
        this.ha = t;
    }
}, Qn = [];
function tr(t) {
    return t ? /^\d+$/.test(t) ? (Gt(t), new er(Rt, It)) : null : nr ||= new er(0, 0);
}
var er = class {
    constructor(t, e){
        this.h = t >>> 0, this.g = e >>> 0;
    }
};
let nr;
function rr(t) {
    return t ? /^-?\d+$/.test(t) ? (Gt(t), new ir(Rt, It)) : null : sr ||= new ir(0, 0);
}
var ir = class {
    constructor(t, e){
        this.h = t >>> 0, this.g = e >>> 0;
    }
};
let sr;
function or(t, e, n) {
    for(; n > 0 || e > 127;)t.g.push(127 & e | 128), e = (e >>> 7 | n << 25) >>> 0, n >>>= 7;
    t.g.push(e);
}
function ar(t, e) {
    for(; e > 127;)t.g.push(127 & e | 128), e >>>= 7;
    t.g.push(e);
}
function cr(t, e) {
    if (e >= 0) ar(t, e);
    else {
        for(let n = 0; n < 9; n++)t.g.push(127 & e | 128), e >>= 7;
        t.g.push(1);
    }
}
function hr(t) {
    var e = Rt;
    t.g.push(e >>> 0 & 255), t.g.push(e >>> 8 & 255), t.g.push(e >>> 16 & 255), t.g.push(e >>> 24 & 255);
}
function ur(t, e) {
    0 !== e.length && (t.l.push(e), t.h += e.length);
}
function lr(t, e, n) {
    ar(t.g, 8 * e + n);
}
function fr(t, e) {
    return lr(t, e, 2), e = t.g.end(), ur(t, e), e.push(t.h), e;
}
function dr(t, e) {
    var n = e.pop();
    for(n = t.h + t.g.length() - n; n > 127;)e.push(127 & n | 128), n >>>= 7, t.h++;
    e.push(n), t.h++;
}
function pr(t, e, n) {
    lr(t, e, 2), ar(t.g, n.length), ur(t, t.g.end()), ur(t, n);
}
function gr(t, e, n, r) {
    null != n && (e = fr(t, e), r(n, t), dr(t, e));
}
function mr() {
    const t = class {
        constructor(){
            throw Error();
        }
    };
    return Object.setPrototypeOf(t, t.prototype), t;
}
var yr = mr(), _r = mr(), vr = mr(), Er = mr(), wr = mr(), Tr = mr(), Ar = mr(), br = mr(), kr = mr(), Sr = mr();
function xr(t, e, n) {
    var r = t.v;
    H && H in r && (r = r[H]) && delete r[e.g], e.h ? e.j(t, e.h, e.g, n, e.l) : e.j(t, e.g, n, e.l);
}
var Lr = class {
    constructor(t, e){
        this.v = Ue(t, e, void 0, 2048);
    }
    toJSON() {
        return Oe(this);
    }
    j() {
        var t = xo, e = this.v, n = t.g, r = H;
        if (B && r && null != e[r]?.[n] && U(W, 3), e = t.g, $ && H && void 0 === $ && (r = (n = this.v)[H]) && (r = r.da)) try {
            r(n, e, Le);
        } catch (t) {
            u(t);
        }
        return t.h ? t.m(this, t.h, t.g, t.l) : t.m(this, t.g, t.defaultValue, t.l);
    }
    clone() {
        const t = this.v, e = 0 | t[Q];
        return Ke(this, t, e) ? Ge(this, t, !0) : new this.constructor(Ve(t, e, !1));
    }
};
Lr.prototype[q] = ot, Lr.prototype.toString = function() {
    return this.v.toString();
};
var Rr = class {
    constructor(t, e, n){
        this.g = t, this.h = e, t = yr, this.l = !!t && n === t || !1;
    }
};
function Ir(t, e) {
    return new Rr(t, e, yr);
}
function Fr(t, e, n, r, i) {
    gr(t, n, Xr(e, r), i);
}
const Mr = Ir(function(t, e, n, r, i) {
    return 2 === t.h && (Yn(t, gn(e, r, n), i), !0);
}, Fr), Pr = Ir(function(t, e, n, r, i) {
    return 2 === t.h && (Yn(t, gn(e, r, n), i), !0);
}, Fr);
var Cr = Symbol(), Or = Symbol(), Nr = Symbol(), Ur = Symbol(), Dr = Symbol();
let Br, Gr;
function jr(t, e, n, r) {
    var i = r[t];
    if (i) return i;
    (i = {}).qa = r, i.T = function(t) {
        switch(typeof t){
            case "boolean":
                return Pe ||= [
                    0,
                    void 0,
                    !0
                ];
            case "number":
                return t > 0 ? void 0 : 0 === t ? Ce ||= [
                    0,
                    void 0
                ] : [
                    -t,
                    void 0
                ];
            case "string":
                return [
                    0,
                    t
                ];
            case "object":
                return t;
        }
    }(r[0]);
    var s = r[1];
    let o = 1;
    s && s.constructor === Object && (i.ba = s, "function" == typeof (s = r[++o]) && (i.ma = !0, Br ??= s, Gr ??= r[o + 1], s = r[o += 2]));
    const a = {};
    for(; s && Array.isArray(s) && s.length && "number" == typeof s[0] && s[0] > 0;){
        for(var c = 0; c < s.length; c++)a[s[c]] = s;
        s = r[++o];
    }
    for(c = 1; void 0 !== s;){
        let t;
        "number" == typeof s && (c += s, s = r[++o]);
        var h = void 0;
        if (s instanceof Rr ? t = s : (t = Mr, o--), t?.l) {
            s = r[++o], h = r;
            var u = o;
            "function" == typeof s && (s = s(), h[u] = s), h = s;
        }
        for(u = c + 1, "number" == typeof (s = r[++o]) && s < 0 && (u -= s, s = r[++o]); c < u; c++){
            const r = a[c];
            h ? n(i, c, t, h, r) : e(i, c, t, r);
        }
    }
    return r[t] = i;
}
function Vr(t) {
    return Array.isArray(t) ? t[0] instanceof Rr ? t : [
        Pr,
        t
    ] : [
        t,
        void 0
    ];
}
function Xr(t, e) {
    return t instanceof Lr ? t.v : Array.isArray(t) ? Ne(t, e) : void 0;
}
function Hr(t, e, n, r) {
    const i = n.g;
    t[e] = r ? (t, e, n)=>i(t, e, n, r) : i;
}
function Wr(t, e, n, r, i) {
    const s = n.g;
    let o, a;
    t[e] = (t, e, n)=>s(t, e, n, a ||= jr(Or, Hr, Wr, r).T, o ||= zr(r), i);
}
function zr(t) {
    let e = t[Nr];
    if (null != e) return e;
    const n = jr(Or, Hr, Wr, t);
    return e = n.ma ? (t, e)=>Br(t, e, n) : (t, e)=>{
        for(; zn(e) && 4 != e.h;){
            var r = e.l, i = n[r];
            if (null == i) {
                var s = n.ba;
                s && (s = s[r]) && null != (s = Yr(s)) && (i = n[r] = s);
            }
            if (null == i || !i(e, t, r)) {
                if (i = (s = e).m, Kn(s), s.ha) var o = void 0;
                else o = s.g.g - i, s.g.g = i, o = Vn(s.g, o);
                i = void 0, s = t, o && ((i = s[H] ?? (s[H] = new xe))[r] ?? (i[r] = [])).push(o);
            }
        }
        return (t = ke(t)) && (t.da = n.qa[Dr]), !0;
    }, t[Nr] = e, t[Dr] = Kr.bind(t), e;
}
function Kr(t, e, n, r) {
    var i = this[Or];
    const s = this[Nr], o = Ne(void 0, i.T), a = ke(t);
    if (a) {
        var c = !1, h = i.ba;
        if (h) {
            if (i = (e, n, i)=>{
                if (0 !== i.length) if (h[n]) for (const t of i){
                    e = Hn(t);
                    try {
                        c = !0, s(o, e);
                    } finally{
                        Wn(e);
                    }
                }
                else r?.(t, n, i);
            }, null == e) Se(a, i);
            else if (null != a) {
                const t = a[e];
                t && i(a, e, t);
            }
            if (c) {
                let r = 0 | t[Q];
                if (2 & r && 2048 & r && !n?.Ka) throw Error();
                const i = pt(r), s = (e, s)=>{
                    if (null != Je(t, e, i)) {
                        if (1 === n?.Qa) return;
                        throw Error();
                    }
                    null != s && (r = Qe(t, r, e, s, i)), delete a[e];
                };
                null == e ? ft(o, 0 | o[Q], (t, e)=>{
                    s(t, e);
                }) : s(e, Je(o, e, i));
            }
        }
    }
}
function Yr(t) {
    const e = (t = Vr(t))[0].g;
    if (t = t[1]) {
        const n = zr(t), r = jr(Or, Hr, Wr, t).T;
        return (t, i, s)=>e(t, i, s, r, n);
    }
    return e;
}
function qr(t, e, n) {
    t[e] = n.h;
}
function $r(t, e, n, r) {
    let i, s;
    const o = n.h;
    t[e] = (t, e, n)=>o(t, e, n, s ||= jr(Cr, qr, $r, r).T, i ||= Jr(r));
}
function Jr(t) {
    let e = t[Ur];
    if (!e) {
        const n = jr(Cr, qr, $r, t);
        e = (t, e)=>Zr(t, e, n), t[Ur] = e;
    }
    return e;
}
function Zr(t, e, n) {
    ft(t, 0 | t[Q], (t, r)=>{
        if (null != r) {
            var i = function(t, e) {
                var n = t[e];
                if (n) return n;
                if ((n = t.ba) && (n = n[e])) {
                    var r = (n = Vr(n))[0].h;
                    if (n = n[1]) {
                        const e = Jr(n), i = jr(Cr, qr, $r, n).T;
                        n = t.ma ? Gr(i, e) : (t, n, s)=>r(t, n, s, i, e);
                    } else n = r;
                    return t[e] = n;
                }
            }(n, t);
            i ? i(e, r, t) : t < 500 || U(K, 3);
        }
    }), (t = ke(t)) && Se(t, (t, n, r)=>{
        for(ur(e, e.g.end()), t = 0; t < r.length; t++)ur(e, I(r[t]) || new Uint8Array(0));
    });
}
const Qr = Et(0);
function ti(t, e) {
    if (Array.isArray(e)) {
        var n = 0 | e[Q];
        if (4 & n) return e;
        for(var r = 0, i = 0; r < e.length; r++){
            const n = t(e[r]);
            null != n && (e[i++] = n);
        }
        return i < r && (e.length = i), (t = -1537 & (5 | n)) !== n && rt(e, t), 2 & t && Object.freeze(e), e;
    }
}
function ei(t, e, n) {
    return new Rr(t, e, n);
}
function ni(t, e, n) {
    return new Rr(t, e, n);
}
function ri(t, e, n) {
    Qe(t, 0 | t[Q], e, n, pt(0 | t[Q]));
}
var ii = Ir(function(t, e, n, r, i) {
    if (2 !== t.h) return !1;
    if (t = Vt(t = Yn(t, Ne([
        void 0,
        void 0
    ], r), i)), i = pt(r = 0 | e[Q]), 2 & r) throw Error();
    let s = Je(e, n, i);
    if (s instanceof Ee) 0 != (2 & s.J) ? (s = s.V(), s.push(t), Qe(e, r, n, s, i)) : s.Ma(t);
    else if (Array.isArray(s)) {
        var o = 0 | s[Q];
        8192 & o || rt(s, o |= 8192), 2 & o && (s = cn(s), Qe(e, r, n, s, i)), s.push(t);
    } else Qe(e, r, n, st([
        t
    ]), i);
    return !0;
}, function(t, e, n, r, i) {
    if (e instanceof Ee) e.forEach((e, s)=>{
        gr(t, n, Ne([
            s,
            e
        ], r), i);
    });
    else if (Array.isArray(e)) {
        for(let s = 0; s < e.length; s++){
            const o = e[s];
            Array.isArray(o) && gr(t, n, Ne(o, r), i);
        }
        st(e);
    }
});
function si(t, e, n) {
    null != (e = $t(e)) && (lr(t, n, 5), t = t.g, Pt(e), hr(t));
}
function oi(t, e, n) {
    if (e = function(t) {
        if (null == t) return t;
        const e = typeof t;
        if ("bigint" === e) return String(Xt(64, t));
        if (te(t)) {
            if ("string" === e) return se(t);
            if ("number" === e) return ie(t);
        }
    }(e), null != e) {
        if ("string" == typeof e) rr(e);
        if (null != e) switch(lr(t, n, 0), typeof e){
            case "number":
                t = t.g, Mt(e), or(t, Rt, It);
                break;
            case "bigint":
                n = BigInt.asUintN(64, e), n = new ir(Number(n & BigInt(4294967295)), Number(n >> BigInt(32))), or(t.g, n.h, n.g);
                break;
            default:
                n = rr(e), or(t.g, n.h, n.g);
        }
    }
}
function ai(t, e, n) {
    null != (e = ee(e)) && null != e && (lr(t, n, 0), cr(t.g, e));
}
function ci(t, e, n) {
    null != (e = Zt(e)) && (lr(t, n, 0), t.g.g.push(e ? 1 : 0));
}
function hi(t, e, n) {
    null != (e = le(e)) && pr(t, n, h(e));
}
function ui(t, e, n, r, i) {
    gr(t, n, Xr(e, r), i);
}
function li(t, e, n) {
    null != (e = null == e || "string" == typeof e || e instanceof F ? e : void 0) && pr(t, n, Pn(e, !0).buffer);
}
function fi(t, e, n) {
    null != (e = ne(e)) && null != e && (lr(t, n, 0), ar(t.g, e));
}
function di(t, e, n) {
    return (5 === t.h || 2 === t.h) && (e = un(e, 0 | e[Q], n), 2 == t.h ? Jn(t, Dn, e) : e.push(Dn(t.g)), !0);
}
var pi = ei(function(t, e, n) {
    return 5 === t.h && (ri(e, n, Dn(t.g)), !0);
}, si, br), gi = ni(di, function(t, e, n) {
    if (null != (e = ti($t, e))) for(let o = 0; o < e.length; o++){
        var r = t, i = n, s = e[o];
        null != s && (lr(r, i, 5), r = r.g, Pt(s), hr(r));
    }
}, br), mi = ni(di, function(t, e, n) {
    if (null != (e = ti($t, e)) && e.length) {
        lr(t, n, 2), ar(t.g, 4 * e.length);
        for(let r = 0; r < e.length; r++)n = t.g, Pt(e[r]), hr(n);
    }
}, br), yi = ei(function(t, e, n) {
    return 5 === t.h && (ri(e, n, 0 === (t = Dn(t.g)) ? void 0 : t), !0);
}, si, br), _i = ei(function(t, e, n) {
    return 0 !== t.h ? t = !1 : (ri(e, n, Cn(t.g, Nt)), t = !0), t;
}, oi, Tr), vi = ei(function(t, e, n) {
    return 0 !== t.h ? e = !1 : (ri(e, n, (t = Cn(t.g, Nt)) === Qr ? void 0 : t), e = !0), e;
}, oi, Tr), Ei = ei(function(t, e, n) {
    return 0 !== t.h ? t = !1 : (ri(e, n, Cn(t.g, Ot)), t = !0), t;
}, function(t, e, n) {
    if (e = function(t) {
        if (null == t) return t;
        var e = typeof t;
        if ("bigint" === e) return String(Ht(64, t));
        if (te(t)) {
            if ("string" === e) return e = Kt(Number(t)), Wt(e) && e >= 0 ? t = String(e) : (-1 !== (e = t.indexOf(".")) && (t = t.substring(0, e)), (e = "-" !== t[0] && ((e = t.length) < 20 || 20 === e && t <= "18446744073709551615")) || (Gt(t), t = Ut(Rt, It))), t;
            if ("number" === e) return (t = Kt(t)) >= 0 && Wt(t) || (Mt(t), t = Ct(Rt, It)), t;
        }
    }(e), null != e) {
        if ("string" == typeof e) tr(e);
        if (null != e) switch(lr(t, n, 0), typeof e){
            case "number":
                t = t.g, Mt(e), or(t, Rt, It);
                break;
            case "bigint":
                n = BigInt.asUintN(64, e), n = new er(Number(n & BigInt(4294967295)), Number(n >> BigInt(32))), or(t.g, n.h, n.g);
                break;
            default:
                n = tr(e), or(t.g, n.h, n.g);
        }
    }
}, Ar), wi = ei(function(t, e, n) {
    return 0 === t.h && (ri(e, n, Nn(t.g)), !0);
}, ai, Er), Ti = ni(function(t, e, n) {
    return (0 === t.h || 2 === t.h) && (e = un(e, 0 | e[Q], n), 2 == t.h ? Jn(t, Nn, e) : e.push(Nn(t.g)), !0);
}, function(t, e, n) {
    if (null != (e = ti(ee, e)) && e.length) {
        n = fr(t, n);
        for(let n = 0; n < e.length; n++)cr(t.g, e[n]);
        dr(t, n);
    }
}, Er), Ai = ei(function(t, e, n) {
    return 0 === t.h && (ri(e, n, 0 === (t = Nn(t.g)) ? void 0 : t), !0);
}, ai, Er), bi = ei(function(t, e, n) {
    return 0 === t.h && (ri(e, n, On(t.g)), !0);
}, ci, _r), ki = ei(function(t, e, n) {
    return 0 === t.h && (ri(e, n, !1 === (t = On(t.g)) ? void 0 : t), !0);
}, ci, _r), Si = ni(function(t, e, n) {
    return 2 === t.h && (t = qn(t), un(e, 0 | e[Q], n).push(t), !0);
}, function(t, e, n) {
    if (null != (e = ti(le, e))) for(let o = 0; o < e.length; o++){
        var r = t, i = n, s = e[o];
        null != s && pr(r, i, h(s));
    }
}, vr), xi = ei(function(t, e, n) {
    return 2 === t.h && (ri(e, n, "" === (t = qn(t)) ? void 0 : t), !0);
}, hi, vr), Li = ei(function(t, e, n) {
    return 2 === t.h && (ri(e, n, qn(t)), !0);
}, hi, vr), Ri = function(t, e, n = yr) {
    return new Rr(t, e, n);
}(function(t, e, n, r, i) {
    return 2 === t.h && (r = Ne(void 0, r), un(e, 0 | e[Q], n).push(r), Yn(t, r, i), !0);
}, function(t, e, n, r, i) {
    if (Array.isArray(e)) {
        for(let s = 0; s < e.length; s++)ui(t, e[s], n, r, i);
        1 & (t = 0 | e[Q]) || rt(e, 1 | t);
    }
}), Ii = Ir(function(t, e, n, r, i, s) {
    if (2 !== t.h) return !1;
    let o = 0 | e[Q];
    return dn(e, o, s, n, pt(o)), Yn(t, e = gn(e, r, n), i), !0;
}, ui), Fi = ei(function(t, e, n) {
    return 2 === t.h && (ri(e, n, $n(t)), !0);
}, li, kr), Mi = ni(function(t, e, n) {
    return (0 === t.h || 2 === t.h) && (e = un(e, 0 | e[Q], n), 2 == t.h ? Jn(t, Un, e) : e.push(Un(t.g)), !0);
}, function(t, e, n) {
    if (null != (e = ti(ne, e))) for(let o = 0; o < e.length; o++){
        var r = t, i = n, s = e[o];
        null != s && (lr(r, i, 0), ar(r.g, s));
    }
}, wr), Pi = ei(function(t, e, n) {
    return 0 === t.h && (ri(e, n, 0 === (t = Un(t.g)) ? void 0 : t), !0);
}, fi, wr), Ci = ei(function(t, e, n) {
    return 0 === t.h && (ri(e, n, Nn(t.g)), !0);
}, function(t, e, n) {
    null != (e = ee(e)) && (e = parseInt(e, 10), lr(t, n, 0), cr(t.g, e));
}, Sr);
class Oi {
    constructor(t, e){
        var n = Qi;
        this.g = t, this.h = e, this.m = yn, this.j = wn, this.defaultValue = void 0, this.l = null != n.Oa ? dt : void 0;
    }
    register() {
        m(this);
    }
}
function Ni(t, e) {
    return new Oi(t, e);
}
function Ui(t, e) {
    return (n, r)=>{
        {
            const s = {
                ea: !0
            };
            r && Object.assign(s, r), n = Hn(n, void 0, void 0, s);
            try {
                const r = new t, s = r.v;
                zr(e)(s, n);
                var i = r;
            } finally{
                Wn(n);
            }
        }
        return i;
    };
}
function Di(t) {
    return function() {
        const e = new class {
            constructor(){
                this.l = [], this.h = 0, this.g = new class {
                    constructor(){
                        this.g = [];
                    }
                    length() {
                        return this.g.length;
                    }
                    end() {
                        const t = this.g;
                        return this.g = [], t;
                    }
                };
            }
        };
        Zr(this.v, e, jr(Cr, qr, $r, t)), ur(e, e.g.end());
        const n = new Uint8Array(e.h), r = e.l, i = r.length;
        let s = 0;
        for(let t = 0; t < i; t++){
            const e = r[t];
            n.set(e, s), s += e.length;
        }
        return e.l = [
            n
        ], n;
    };
}
var Bi = class extends Lr {
    constructor(t){
        super(t);
    }
}, Gi = [
    0,
    xi,
    ei(function(t, e, n) {
        return 2 === t.h && (ri(e, n, (t = $n(t)) === R() ? void 0 : t), !0);
    }, function(t, e, n) {
        if (null != e) {
            if (e instanceof Lr) {
                const r = e.Ra;
                return void (r ? (e = r(e), null != e && pr(t, n, Pn(e, !0).buffer)) : U(K, 3));
            }
            if (Array.isArray(e)) return void U(K, 3);
        }
        li(t, e, n);
    }, kr)
];
let ji, Vi = globalThis.trustedTypes;
function Xi(t) {
    var e;
    return void 0 === ji && (ji = function() {
        let t = null;
        if (!Vi) return t;
        try {
            const e = (t)=>t;
            t = Vi.createPolicy("goog#html", {
                createHTML: e,
                createScript: e,
                createScriptURL: e
            });
        } catch (t) {}
        return t;
    }()), t = (e = ji) ? e.createScriptURL(t) : t, new class {
        constructor(t){
            this.g = t;
        }
        toString() {
            return this.g + "";
        }
    }(t);
}
function Hi(t, ...e) {
    if (0 === e.length) return Xi(t[0]);
    let n = t[0];
    for(let r = 0; r < e.length; r++)n += encodeURIComponent(e[r]) + t[r + 1];
    return Xi(n);
}
var Wi = [
    0,
    wi,
    Ci,
    bi,
    -1,
    Ti,
    Ci,
    -1,
    bi
], zi = class extends Lr {
    constructor(t){
        super(t);
    }
}, Ki = [
    0,
    bi,
    Li,
    bi,
    Ci,
    -1,
    ni(function(t, e, n) {
        return (0 === t.h || 2 === t.h) && (e = un(e, 0 | e[Q], n), 2 == t.h ? Jn(t, Bn, e) : e.push(Nn(t.g)), !0);
    }, function(t, e, n) {
        if (null != (e = ti(ee, e)) && e.length) {
            n = fr(t, n);
            for(let n = 0; n < e.length; n++)cr(t.g, e[n]);
            dr(t, n);
        }
    }, Sr),
    Li,
    -1,
    [
        0,
        bi,
        -1
    ],
    Ci,
    bi,
    -1
], Yi = [
    0,
    3,
    bi,
    -1,
    2,
    [
        0,
        [
            2
        ],
        wi,
        Ii,
        [
            0,
            ei(function(t, e, n) {
                return 0 === t.h && (ri(e, n, Un(t.g)), !0);
            }, fi, wr)
        ]
    ],
    [
        0,
        Ci,
        bi,
        Ci,
        bi,
        Ci,
        bi,
        Li,
        -1
    ],
    [
        0,
        [
            3,
            4
        ],
        Li,
        -1,
        Ii,
        [
            0,
            wi
        ],
        Ii,
        [
            0,
            Ci
        ]
    ],
    [
        0
    ]
], qi = [
    0,
    Li,
    -2
], $i = class extends Lr {
    constructor(t){
        super(t);
    }
}, Ji = [
    0
], Zi = [
    0,
    wi,
    bi,
    1,
    bi,
    -4
], Qi = class extends Lr {
    constructor(t){
        super(t, 2);
    }
}, ts = {};
ts[336783863] = [
    0,
    Li,
    bi,
    -1,
    wi,
    [
        0,
        [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        Ii,
        Ji,
        Ii,
        Ki,
        Ii,
        qi,
        Ii,
        Zi,
        Ii,
        Wi,
        Ii,
        [
            0,
            Li,
            -2
        ],
        Ii,
        [
            0,
            Li,
            Ci
        ],
        Ii,
        Yi,
        Ii,
        [
            0,
            Ci,
            -1,
            bi
        ]
    ],
    [
        0,
        Li
    ],
    bi,
    [
        0,
        [
            1,
            3
        ],
        [
            2,
            4
        ],
        Ii,
        [
            0,
            Ti
        ],
        -1,
        Ii,
        [
            0,
            Si
        ],
        -1,
        Ri,
        [
            0,
            Li,
            -1
        ]
    ],
    Li
];
var es = [
    0,
    vi,
    -1,
    ki,
    -3,
    vi,
    Ti,
    xi,
    Ai,
    vi,
    -1,
    ki,
    Ai,
    ki,
    -2,
    xi
];
function ns(t, e) {
    Fn(t, 3, e);
}
function rs(t, e) {
    Fn(t, 4, e);
}
var is = class extends Lr {
    constructor(t){
        super(t, 500);
    }
    o(t) {
        return wn(this, 0, 7, t);
    }
}, ss = [
    -1,
    {}
], os = [
    0,
    Li,
    1,
    ss
], as = [
    0,
    Li,
    Si,
    ss
];
function cs(t, e) {
    bn(t, 1, is, e);
}
function hs(t, e) {
    Fn(t, 10, e);
}
function us(t, e) {
    Fn(t, 15, e);
}
var ls = class extends Lr {
    constructor(t){
        super(t, 500);
    }
    o(t) {
        return wn(this, 0, 1001, t);
    }
}, fs = [
    -500,
    Ri,
    [
        -500,
        xi,
        -1,
        Si,
        -3,
        [
            -2,
            ts,
            bi
        ],
        Ri,
        Gi,
        Ai,
        -1,
        os,
        as,
        Ri,
        [
            0,
            xi,
            ki
        ],
        xi,
        es,
        Ai,
        Si,
        987,
        Si
    ],
    4,
    Ri,
    [
        -500,
        Li,
        -1,
        [
            -1,
            {}
        ],
        998,
        Li
    ],
    Ri,
    [
        -500,
        Li,
        Si,
        -1,
        [
            -2,
            {},
            bi
        ],
        997,
        Si,
        -1
    ],
    Ai,
    Ri,
    [
        -500,
        Li,
        Si,
        ss,
        998,
        Si
    ],
    Si,
    Ai,
    os,
    as,
    Ri,
    [
        0,
        xi,
        -1,
        ss
    ],
    Si,
    -2,
    es,
    xi,
    -1,
    ki,
    [
        0,
        ki,
        Pi
    ],
    978,
    ss,
    Ri,
    Gi
];
ls.prototype.g = Di(fs);
var ds = Ui(ls, fs), ps = class extends Lr {
    constructor(t){
        super(t);
    }
}, gs = class extends Lr {
    constructor(t){
        super(t);
    }
    g() {
        return vn(this, ps, 1);
    }
}, ms = [
    0,
    Ri,
    [
        0,
        wi,
        pi,
        Li,
        -1
    ]
], ys = Ui(gs, ms), _s = class extends Lr {
    constructor(t){
        super(t);
    }
}, vs = class extends Lr {
    constructor(t){
        super(t);
    }
}, Es = class extends Lr {
    constructor(t){
        super(t);
    }
    l() {
        return yn(this, _s, 2);
    }
    g() {
        return vn(this, vs, 5);
    }
}, ws = Ui(class extends Lr {
    constructor(t){
        super(t);
    }
}, [
    0,
    Si,
    Ti,
    mi,
    [
        0,
        Ci,
        [
            0,
            wi,
            -3
        ],
        [
            0,
            pi,
            -3
        ],
        [
            0,
            wi,
            -1,
            [
                0,
                Ri,
                [
                    0,
                    wi,
                    -2
                ]
            ]
        ],
        Ri,
        [
            0,
            pi,
            -1,
            Li,
            pi
        ]
    ],
    Li,
    -1,
    _i,
    Ri,
    [
        0,
        wi,
        pi
    ],
    Si,
    _i
]), Ts = class extends Lr {
    constructor(t){
        super(t);
    }
}, As = Ui(class extends Lr {
    constructor(t){
        super(t);
    }
}, [
    0,
    Ri,
    [
        0,
        pi,
        -4
    ]
]), bs = class extends Lr {
    constructor(t){
        super(t);
    }
}, ks = Ui(class extends Lr {
    constructor(t){
        super(t);
    }
}, [
    0,
    Ri,
    [
        0,
        pi,
        -4
    ]
]), Ss = class extends Lr {
    constructor(t){
        super(t);
    }
}, xs = [
    0,
    wi,
    -1,
    mi,
    Ci
], Ls = class extends Lr {
    constructor(t){
        super(t);
    }
};
Ls.prototype.g = Di([
    0,
    pi,
    -4,
    _i
]);
var Rs = class extends Lr {
    constructor(t){
        super(t);
    }
}, Is = Ui(class extends Lr {
    constructor(t){
        super(t);
    }
}, [
    0,
    Ri,
    [
        0,
        1,
        wi,
        Li,
        ms
    ],
    _i
]), Fs = class extends Lr {
    constructor(t){
        super(t);
    }
}, Ms = class extends Lr {
    constructor(t){
        super(t);
    }
    na() {
        const t = $e(this, 1, void 0, void 0, an);
        return null == t ? R() : t;
    }
}, Ps = class extends Lr {
    constructor(t){
        super(t);
    }
}, Cs = [
    1,
    2
], Os = Ui(class extends Lr {
    constructor(t){
        super(t);
    }
}, [
    0,
    Ri,
    [
        0,
        Cs,
        Ii,
        [
            0,
            mi
        ],
        Ii,
        [
            0,
            Fi
        ],
        wi,
        Li
    ],
    _i
]), Ns = class extends Lr {
    constructor(t){
        super(t);
    }
}, Us = [
    0,
    Li,
    wi,
    pi,
    Si,
    -1
], Ds = class extends Lr {
    constructor(t){
        super(t);
    }
}, Bs = [
    0,
    bi,
    -1
], Gs = class extends Lr {
    constructor(t){
        super(t);
    }
}, js = [
    1,
    2,
    3,
    4,
    5,
    6
], Vs = class extends Lr {
    constructor(t){
        super(t);
    }
    g() {
        return null != $e(this, 1, void 0, void 0, an);
    }
    l() {
        return null != le($e(this, 2));
    }
}, Xs = class extends Lr {
    constructor(t){
        super(t);
    }
    g() {
        return Zt($e(this, 2)) ?? !1;
    }
}, Hs = [
    0,
    Fi,
    Li,
    [
        0,
        wi,
        _i,
        -1
    ],
    [
        0,
        Ei,
        _i
    ]
], Ws = [
    0,
    Hs,
    bi,
    [
        0,
        js,
        Ii,
        Zi,
        Ii,
        Ki,
        Ii,
        Wi,
        Ii,
        Ji,
        Ii,
        qi,
        Ii,
        Yi
    ],
    Ci
], zs = class extends Lr {
    constructor(t){
        super(t);
    }
}, Ks = [
    0,
    Ws,
    pi,
    -1,
    wi
], Ys = Ni(502141897, zs);
ts[502141897] = Ks;
var qs = Ui(class extends Lr {
    constructor(t){
        super(t);
    }
}, [
    0,
    [
        0,
        Ci,
        -1,
        gi,
        Mi
    ],
    xs
]), $s = class extends Lr {
    constructor(t){
        super(t);
    }
}, Js = class extends Lr {
    constructor(t){
        super(t);
    }
}, Zs = [
    0,
    Ws,
    pi,
    [
        0,
        Ws
    ],
    bi
], Qs = Ni(508968150, Js);
ts[508968150] = [
    0,
    Ws,
    Ks,
    Zs,
    pi,
    [
        0,
        [
            0,
            Hs
        ]
    ]
], ts[508968149] = Zs;
var to = class extends Lr {
    constructor(t){
        super(t);
    }
    l() {
        return yn(this, Ns, 2);
    }
    g() {
        Ze(this, 2);
    }
}, eo = [
    0,
    Ws,
    Us
];
ts[478825465] = eo;
var no = class extends Lr {
    constructor(t){
        super(t);
    }
}, ro = class extends Lr {
    constructor(t){
        super(t);
    }
}, io = class extends Lr {
    constructor(t){
        super(t);
    }
}, so = class extends Lr {
    constructor(t){
        super(t);
    }
}, oo = class extends Lr {
    constructor(t){
        super(t);
    }
}, ao = [
    0,
    Ws,
    [
        0,
        Ws
    ],
    eo,
    -1
], co = [
    0,
    Ws,
    pi,
    wi
], ho = [
    0,
    Ws,
    pi
], uo = [
    0,
    Ws,
    co,
    ho,
    pi
], lo = Ni(479097054, oo);
ts[479097054] = [
    0,
    Ws,
    uo,
    ao
], ts[463370452] = ao, ts[464864288] = co;
var fo = Ni(462713202, so);
ts[462713202] = uo, ts[474472470] = ho;
var po = class extends Lr {
    constructor(t){
        super(t);
    }
}, go = class extends Lr {
    constructor(t){
        super(t);
    }
}, mo = class extends Lr {
    constructor(t){
        super(t);
    }
}, yo = class extends Lr {
    constructor(t){
        super(t);
    }
}, _o = [
    0,
    Ws,
    pi,
    -1,
    wi
], vo = [
    0,
    Ws,
    pi,
    bi
];
yo.prototype.g = Di([
    0,
    Ws,
    ho,
    [
        0,
        Ws
    ],
    Ks,
    Zs,
    _o,
    vo
]);
var Eo = class extends Lr {
    constructor(t){
        super(t);
    }
}, wo = Ni(456383383, Eo);
ts[456383383] = [
    0,
    Ws,
    Us
];
var To = class extends Lr {
    constructor(t){
        super(t);
    }
}, Ao = Ni(476348187, To);
ts[476348187] = [
    0,
    Ws,
    Bs
];
var bo = class extends Lr {
    constructor(t){
        super(t);
    }
}, ko = class extends Lr {
    constructor(t){
        super(t);
    }
}, So = [
    0,
    Ci,
    -1
], xo = Ni(458105876, class extends Lr {
    constructor(t){
        super(t);
    }
    g() {
        let t;
        var e = this.v;
        const n = 0 | e[Q];
        return t = at(this, n), e = function(t, e, n, r) {
            var i = ko;
            !r && He(t) && (n = 0 | (e = t.v)[Q]);
            var s = Je(e, 2);
            if (t = !1, null == s) {
                if (r) return be();
                s = [];
            } else if (s.constructor === Ee) {
                if (!(2 & s.J) || r) return s;
                s = s.V();
            } else Array.isArray(s) ? t = !!(2 & (0 | s[Q])) : s = [];
            if (r) {
                if (!s.length) return be();
                t || (t = !0, it(s));
            } else t && (t = !1, st(s), s = cn(s));
            return !t && 32 & n && nt(s, 32), n = Qe(e, n, 2, r = new Ee(s, i, de, void 0)), t || ze(e, n), r;
        }(this, e, n, t), !t && ko && (e.ra = !0), e;
    }
});
ts[458105876] = [
    0,
    So,
    ii,
    [
        !0,
        _i,
        [
            0,
            Li,
            -1,
            Si
        ]
    ],
    [
        0,
        Ti,
        bi,
        Ci
    ]
];
var Lo = class extends Lr {
    constructor(t){
        super(t);
    }
}, Ro = Ni(458105758, Lo);
ts[458105758] = [
    0,
    Ws,
    Li,
    So
];
var Io = class extends Lr {
    constructor(t){
        super(t);
    }
}, Fo = [
    0,
    yi,
    -1,
    ki
], Mo = class extends Lr {
    constructor(t){
        super(t);
    }
}, Po = class extends Lr {
    constructor(t){
        super(t);
    }
}, Co = [
    1,
    2
];
Po.prototype.g = Di([
    0,
    Co,
    Ii,
    Fo,
    Ii,
    [
        0,
        Ri,
        Fo
    ]
]);
var Oo = class extends Lr {
    constructor(t){
        super(t);
    }
}, No = Ni(443442058, Oo);
ts[443442058] = [
    0,
    Ws,
    Li,
    wi,
    pi,
    Si,
    -1,
    bi,
    pi
], ts[514774813] = _o;
var Uo = class extends Lr {
    constructor(t){
        super(t);
    }
}, Do = Ni(516587230, Uo);
function Bo(t, e) {
    return e = e ? e.clone() : new Ns, void 0 !== t.displayNamesLocale ? Ze(e, 1, ue(t.displayNamesLocale)) : void 0 === t.displayNamesLocale && Ze(e, 1), void 0 !== t.maxResults ? xn(e, 2, t.maxResults) : "maxResults" in t && Ze(e, 2), void 0 !== t.scoreThreshold ? Ln(e, 3, t.scoreThreshold) : "scoreThreshold" in t && Ze(e, 3), void 0 !== t.categoryAllowlist ? In(e, 4, t.categoryAllowlist) : "categoryAllowlist" in t && Ze(e, 4), void 0 !== t.categoryDenylist ? In(e, 5, t.categoryDenylist) : "categoryDenylist" in t && Ze(e, 5), e;
}
function Go(t) {
    const e = Number(t);
    return Number.isSafeInteger(e) ? e : String(t);
}
function jo(t, e = -1, n = "") {
    return {
        categories: t.map((t)=>({
                index: kn(t, 1) ?? 0 ?? -1,
                score: Sn(t, 2) ?? 0,
                categoryName: le($e(t, 3)) ?? "" ?? "",
                displayName: le($e(t, 4)) ?? "" ?? ""
            })),
        headIndex: e,
        headName: n
    };
}
function Vo(t) {
    const e = {
        classifications: vn(t, Rs, 1).map((t)=>jo(yn(t, gs, 4)?.g() ?? [], kn(t, 2) ?? 0, le($e(t, 3)) ?? ""))
    };
    return null != function(t) {
        return null == t ? t : "bigint" == typeof t ? (wt(t) ? t = Number(t) : (t = Xt(64, t), t = wt(t) ? Number(t) : String(t)), t) : te(t) ? "number" == typeof t ? ie(t) : se(t) : void 0;
    }($e(t, 2, void 0, void 0, ce)) && (e.timestampMs = Go($e(t, 2, void 0, void 0, ce) ?? Ye)), e;
}
function Xo(t) {
    var e = en(t, 3, $t, tn()), n = en(t, 2, ee, tn()), r = en(t, 1, le, tn()), i = en(t, 9, le, tn());
    const s = {
        categories: [],
        keypoints: []
    };
    for(let t = 0; t < e.length; t++)s.categories.push({
        score: e[t],
        index: n[t] ?? -1,
        categoryName: r[t] ?? "",
        displayName: i[t] ?? ""
    });
    if ((e = yn(t, Es, 4)?.l()) && (s.boundingBox = {
        originX: kn(e, 1, qe) ?? 0,
        originY: kn(e, 2, qe) ?? 0,
        width: kn(e, 3, qe) ?? 0,
        height: kn(e, 4, qe) ?? 0,
        angle: 0
    }), yn(t, Es, 4)?.g().length) for (const e of yn(t, Es, 4).g())s.keypoints.push({
        x: $e(e, 1, void 0, qe, $t) ?? 0,
        y: $e(e, 2, void 0, qe, $t) ?? 0,
        score: $e(e, 4, void 0, qe, $t) ?? 0,
        label: le($e(e, 3, void 0, qe)) ?? ""
    });
    return s;
}
function Ho(t) {
    const e = [];
    for (const n of vn(t, bs, 1))e.push({
        x: Sn(n, 1) ?? 0,
        y: Sn(n, 2) ?? 0,
        z: Sn(n, 3) ?? 0,
        visibility: Sn(n, 4) ?? 0
    });
    return e;
}
function Wo(t) {
    const e = [];
    for (const n of vn(t, Ts, 1))e.push({
        x: Sn(n, 1) ?? 0,
        y: Sn(n, 2) ?? 0,
        z: Sn(n, 3) ?? 0,
        visibility: Sn(n, 4) ?? 0
    });
    return e;
}
function zo(t) {
    return Array.from(t, (t)=>t > 127 ? t - 256 : t);
}
function Ko(t, e) {
    if (t.length !== e.length) throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);
    let n = 0, r = 0, i = 0;
    for(let s = 0; s < t.length; s++)n += t[s] * e[s], r += t[s] * t[s], i += e[s] * e[s];
    if (r <= 0 || i <= 0) throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
    return n / Math.sqrt(r * i);
}
let Yo;
ts[516587230] = [
    0,
    Ws,
    _o,
    vo,
    pi
], ts[518928384] = vo;
const qo = new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    5,
    1,
    96,
    0,
    1,
    123,
    3,
    2,
    1,
    0,
    10,
    10,
    1,
    8,
    0,
    65,
    0,
    253,
    15,
    253,
    98,
    11
]);
async function $o(t) {
    if (t) return !0;
    if (void 0 === Yo) try {
        await WebAssembly.instantiate(qo), Yo = !0;
    } catch  {
        Yo = !1;
    }
    return Yo;
}
async function Jo(t, e, n) {
    return {
        wasmLoaderPath: `${e}/${t}_${n = `wasm${n ? "_module" : ""}${await $o(n) ? "" : "_nosimd"}_internal`}.js`,
        wasmBinaryPath: `${e}/${t}_${n}.wasm`
    };
}
var Zo = class {
};
function Qo() {
    var t = navigator;
    return "undefined" != typeof OffscreenCanvas && (!function(t = navigator) {
        return (t = t.userAgent).includes("Safari") && !t.includes("Chrome");
    }(t) || !!((t = t.userAgent.match(/Version\/([\d]+).*Safari/)) && t.length >= 1 && Number(t[1]) >= 17));
}
async function ta(t) {
    if ("function" != typeof importScripts) {
        const e = document.createElement("script");
        return e.src = t.toString(), e.crossOrigin = "anonymous", new Promise((t, n)=>{
            e.addEventListener("load", ()=>{
                t();
            }, !1), e.addEventListener("error", (t)=>{
                n(t);
            }, !1), document.body.appendChild(e);
        });
    }
    try {
        importScripts(t.toString());
    } catch (e) {
        if (!(e instanceof TypeError)) throw e;
        {
            const e = self.import;
            e ? await e(t.toString()) : await Promise.resolve().then(()=>{
                const e = new Error("Cannot find module as expression is too dynamic");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            });
        }
    }
}
function ea(t) {
    return void 0 !== t.videoWidth ? [
        t.videoWidth,
        t.videoHeight
    ] : void 0 !== t.naturalWidth ? [
        t.naturalWidth,
        t.naturalHeight
    ] : void 0 !== t.displayWidth ? [
        t.displayWidth,
        t.displayHeight
    ] : [
        t.width,
        t.height
    ];
}
function na(t, e, n) {
    t.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), n(e = t.i.stringToNewUTF8(e)), t.i._free(e);
}
function ra(t, e, n) {
    if (!t.i.canvas) throw Error("No OpenGL canvas configured.");
    if (n ? t.i._bindTextureToStream(n) : t.i._bindTextureToCanvas(), !(n = t.i.canvas.getContext("webgl2") || t.i.canvas.getContext("webgl"))) throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
    t.i.gpuOriginForWebTexturesIsBottomLeft && n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !0), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, e), t.i.gpuOriginForWebTexturesIsBottomLeft && n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !1);
    const [r, i] = ea(e);
    return !t.l || r === t.i.canvas.width && i === t.i.canvas.height || (t.i.canvas.width = r, t.i.canvas.height = i), [
        r,
        i
    ];
}
function ia(t, e, n) {
    t.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
    const r = new Uint32Array(e.length);
    for(let n = 0; n < e.length; n++)r[n] = t.i.stringToNewUTF8(e[n]);
    e = t.i._malloc(4 * r.length), t.i.HEAPU32.set(r, e >> 2), n(e);
    for (const e of r)t.i._free(e);
    t.i._free(e);
}
function sa(t, e, n) {
    t.i.simpleListeners = t.i.simpleListeners || {}, t.i.simpleListeners[e] = n;
}
function oa(t, e, n) {
    let r = [];
    t.i.simpleListeners = t.i.simpleListeners || {}, t.i.simpleListeners[e] = (t, e, i)=>{
        e ? (n(r, i), r = []) : r.push(t);
    };
}
Zo.forVisionTasks = function(t, e = !1) {
    return Jo("vision", t ?? Hi``, e);
}, Zo.forTextTasks = function(t, e = !1) {
    return Jo("text", t ?? Hi``, e);
}, Zo.forGenAiTasks = function(t, e = !1) {
    return Jo("genai", t ?? Hi``, e);
}, Zo.forAudioTasks = function(t, e = !1) {
    return Jo("audio", t ?? Hi``, e);
}, Zo.isSimdSupported = function(t = !1) {
    return $o(t);
};
async function aa(t, e, n, r) {
    return t = await (async (t, e, n, r, i)=>{
        if (e && await ta(e), !self.ModuleFactory) throw Error("ModuleFactory not set.");
        if (n && (await ta(n), !self.ModuleFactory)) throw Error("ModuleFactory not set.");
        return self.Module && i && ((e = self.Module).locateFile = i.locateFile, i.mainScriptUrlOrBlob && (e.mainScriptUrlOrBlob = i.mainScriptUrlOrBlob)), i = await self.ModuleFactory(self.Module || i), self.ModuleFactory = self.Module = void 0, new t(i, r);
    })(t, n.wasmLoaderPath, n.assetLoaderPath, e, {
        locateFile: (t)=>t.endsWith(".wasm") ? n.wasmBinaryPath.toString() : n.assetBinaryPath && t.endsWith(".data") ? n.assetBinaryPath.toString() : t
    }), await t.o(r), t;
}
function ca(t, e) {
    const n = yn(t.baseOptions, Vs, 1) || new Vs;
    "string" == typeof e ? (Ze(n, 2, ue(e)), Ze(n, 1)) : e instanceof Uint8Array && (Ze(n, 1, ht(e, !1)), Ze(n, 2)), wn(t.baseOptions, 0, 1, n);
}
function ha(t) {
    try {
        const e = t.H.length;
        if (1 === e) throw Error(t.H[0].message);
        if (e > 1) throw Error("Encountered multiple errors: " + t.H.map((t)=>t.message).join(", "));
    } finally{
        t.H = [];
    }
}
function ua(t, e) {
    t.C = Math.max(t.C, e);
}
function la(t, e) {
    t.B = new is, Rn(t.B, 2, "PassThroughCalculator"), ns(t.B, "free_memory"), rs(t.B, "free_memory_unused_out"), hs(e, "free_memory"), cs(e, t.B);
}
function fa(t, e) {
    ns(t.B, e), rs(t.B, e + "_unused_out");
}
function da(t) {
    t.g.addBoolToStream(!0, "free_memory", t.C);
}
var pa = class {
    constructor(t){
        this.g = t, this.H = [], this.C = 0, this.g.setAutoRenderToScreen(!1);
    }
    l(t, e = !0) {
        if (e) {
            const e = t.baseOptions || {};
            if (t.baseOptions?.modelAssetBuffer && t.baseOptions?.modelAssetPath) throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
            if (!(yn(this.baseOptions, Vs, 1)?.g() || yn(this.baseOptions, Vs, 1)?.l() || t.baseOptions?.modelAssetBuffer || t.baseOptions?.modelAssetPath)) throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
            if (function(t, e) {
                let n = yn(t.baseOptions, Gs, 3);
                if (!n) {
                    var r = n = new Gs, i = new $i;
                    Tn(r, 4, js, i);
                }
                "delegate" in e && ("GPU" === e.delegate ? (e = n, r = new zi, Tn(e, 2, js, r)) : (e = n, r = new $i, Tn(e, 4, js, r))), wn(t.baseOptions, 0, 3, n);
            }(this, e), e.modelAssetPath) return fetch(e.modelAssetPath.toString()).then((t)=>{
                if (t.ok) return t.arrayBuffer();
                throw Error(`Failed to fetch model: ${e.modelAssetPath} (${t.status})`);
            }).then((t)=>{
                try {
                    this.g.i.FS_unlink("/model.dat");
                } catch  {}
                this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(t), !0, !1, !1), ca(this, "/model.dat"), this.m(), this.L();
            });
            if (e.modelAssetBuffer instanceof Uint8Array) ca(this, e.modelAssetBuffer);
            else if (e.modelAssetBuffer) return (async function(t) {
                const e = [];
                for(var n = 0;;){
                    const { done: r, value: i } = await t.read();
                    if (r) break;
                    e.push(i), n += i.length;
                }
                if (0 === e.length) return new Uint8Array(0);
                if (1 === e.length) return e[0];
                t = new Uint8Array(n), n = 0;
                for (const r of e)t.set(r, n), n += r.length;
                return t;
            })(e.modelAssetBuffer).then((t)=>{
                ca(this, t), this.m(), this.L();
            });
        }
        return this.m(), this.L(), Promise.resolve();
    }
    L() {}
    ca() {
        let t;
        if (this.g.ca((e)=>{
            t = ds(e);
        }), !t) throw Error("Failed to retrieve CalculatorGraphConfig");
        return t;
    }
    setGraph(t, e) {
        this.g.attachErrorListener((t, e)=>{
            this.H.push(Error(e));
        }), this.g.Ja(), this.g.setGraph(t, e), this.B = void 0, ha(this);
    }
    finishProcessing() {
        this.g.finishProcessing(), ha(this);
    }
    close() {
        this.B = void 0, this.g.closeGraph();
    }
};
function ga(t, e) {
    if (!t) throw Error(`Unable to obtain required WebGL resource: ${e}`);
    return t;
}
pa.prototype.close = pa.prototype.close;
class ma {
    constructor(t, e, n, r){
        this.g = t, this.h = e, this.m = n, this.l = r;
    }
    bind() {
        this.g.bindVertexArray(this.h);
    }
    close() {
        this.g.deleteVertexArray(this.h), this.g.deleteBuffer(this.m), this.g.deleteBuffer(this.l);
    }
}
function ya(t, e, n) {
    const r = t.g;
    if (n = ga(r.createShader(n), "Failed to create WebGL shader"), r.shaderSource(n, e), r.compileShader(n), !r.getShaderParameter(n, r.COMPILE_STATUS)) throw Error(`Could not compile WebGL shader: ${r.getShaderInfoLog(n)}`);
    return r.attachShader(t.h, n), n;
}
function _a(t, e) {
    const n = t.g, r = ga(n.createVertexArray(), "Failed to create vertex array");
    n.bindVertexArray(r);
    const i = ga(n.createBuffer(), "Failed to create buffer");
    n.bindBuffer(n.ARRAY_BUFFER, i), n.enableVertexAttribArray(t.O), n.vertexAttribPointer(t.O, 2, n.FLOAT, !1, 0, 0), n.bufferData(n.ARRAY_BUFFER, new Float32Array([
        -1,
        -1,
        -1,
        1,
        1,
        1,
        1,
        -1
    ]), n.STATIC_DRAW);
    const s = ga(n.createBuffer(), "Failed to create buffer");
    return n.bindBuffer(n.ARRAY_BUFFER, s), n.enableVertexAttribArray(t.L), n.vertexAttribPointer(t.L, 2, n.FLOAT, !1, 0, 0), n.bufferData(n.ARRAY_BUFFER, new Float32Array(e ? [
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1
    ] : [
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        0
    ]), n.STATIC_DRAW), n.bindBuffer(n.ARRAY_BUFFER, null), n.bindVertexArray(null), new ma(n, r, i, s);
}
function va(t, e) {
    if (t.g) {
        if (e !== t.g) throw Error("Cannot change GL context once initialized");
    } else t.g = e;
}
function Ea(t, e, n, r) {
    return va(t, e), t.h || (t.m(), t.D()), n ? (t.u || (t.u = _a(t, !0)), n = t.u) : (t.A || (t.A = _a(t, !1)), n = t.A), e.useProgram(t.h), n.bind(), t.l(), t = r(), n.g.bindVertexArray(null), t;
}
function wa(t, e, n) {
    return va(t, e), t = ga(e.createTexture(), "Failed to create texture"), e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, n ?? e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, n ?? e.LINEAR), e.bindTexture(e.TEXTURE_2D, null), t;
}
function Ta(t, e, n) {
    va(t, e), t.B || (t.B = ga(e.createFramebuffer(), "Failed to create framebuffe.")), e.bindFramebuffer(e.FRAMEBUFFER, t.B), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n, 0);
}
function Aa(t) {
    t.g?.bindFramebuffer(t.g.FRAMEBUFFER, null);
}
var ba = class {
    H() {
        return "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D inputTexture;\n  void main() {\n    gl_FragColor = texture2D(inputTexture, vTex);\n  }\n ";
    }
    m() {
        const t = this.g;
        if (this.h = ga(t.createProgram(), "Failed to create WebGL program"), this.X = ya(this, "\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }", t.VERTEX_SHADER), this.W = ya(this, this.H(), t.FRAGMENT_SHADER), t.linkProgram(this.h), !t.getProgramParameter(this.h, t.LINK_STATUS)) throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);
        this.O = t.getAttribLocation(this.h, "aVertex"), this.L = t.getAttribLocation(this.h, "aTex");
    }
    D() {}
    l() {}
    close() {
        if (this.h) {
            const t = this.g;
            t.deleteProgram(this.h), t.deleteShader(this.X), t.deleteShader(this.W);
        }
        this.B && this.g.deleteFramebuffer(this.B), this.A && this.A.close(), this.u && this.u.close();
    }
};
var ka = class extends ba {
    H() {
        return "\n  precision mediump float;\n  uniform sampler2D backgroundTexture;\n  uniform sampler2D maskTexture;\n  uniform sampler2D colorMappingTexture;\n  varying vec2 vTex;\n  void main() {\n    vec4 backgroundColor = texture2D(backgroundTexture, vTex);\n    float category = texture2D(maskTexture, vTex).r;\n    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));\n    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);\n  }\n ";
    }
    D() {
        const t = this.g;
        t.activeTexture(t.TEXTURE1), this.C = wa(this, t, t.LINEAR), t.activeTexture(t.TEXTURE2), this.j = wa(this, t, t.NEAREST);
    }
    m() {
        super.m();
        const t = this.g;
        this.P = ga(t.getUniformLocation(this.h, "backgroundTexture"), "Uniform location"), this.U = ga(t.getUniformLocation(this.h, "colorMappingTexture"), "Uniform location"), this.M = ga(t.getUniformLocation(this.h, "maskTexture"), "Uniform location");
    }
    l() {
        super.l();
        const t = this.g;
        t.uniform1i(this.M, 0), t.uniform1i(this.P, 1), t.uniform1i(this.U, 2);
    }
    close() {
        this.C && this.g.deleteTexture(this.C), this.j && this.g.deleteTexture(this.j), super.close();
    }
}, Sa = class extends ba {
    H() {
        return "\n  precision mediump float;\n  uniform sampler2D maskTexture;\n  uniform sampler2D defaultTexture;\n  uniform sampler2D overlayTexture;\n  varying vec2 vTex;\n  void main() {\n    float confidence = texture2D(maskTexture, vTex).r;\n    vec4 defaultColor = texture2D(defaultTexture, vTex);\n    vec4 overlayColor = texture2D(overlayTexture, vTex);\n    // Apply the alpha from the overlay and merge in the default color\n    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);\n    gl_FragColor = mix(defaultColor, overlayColor, confidence);\n  }\n ";
    }
    D() {
        const t = this.g;
        t.activeTexture(t.TEXTURE1), this.j = wa(this, t), t.activeTexture(t.TEXTURE2), this.C = wa(this, t);
    }
    m() {
        super.m();
        const t = this.g;
        this.M = ga(t.getUniformLocation(this.h, "defaultTexture"), "Uniform location"), this.P = ga(t.getUniformLocation(this.h, "overlayTexture"), "Uniform location"), this.I = ga(t.getUniformLocation(this.h, "maskTexture"), "Uniform location");
    }
    l() {
        super.l();
        const t = this.g;
        t.uniform1i(this.I, 0), t.uniform1i(this.M, 1), t.uniform1i(this.P, 2);
    }
    close() {
        this.j && this.g.deleteTexture(this.j), this.C && this.g.deleteTexture(this.C), super.close();
    }
};
function xa(t, e) {
    switch(e){
        case 0:
            return t.g.find((t)=>t instanceof Uint8Array);
        case 1:
            return t.g.find((t)=>t instanceof Float32Array);
        case 2:
            return t.g.find((t)=>"undefined" != typeof WebGLTexture && t instanceof WebGLTexture);
        default:
            throw Error(`Type is not supported: ${e}`);
    }
}
function La(t) {
    var e = xa(t, 1);
    if (!e) {
        if (e = xa(t, 0)) e = new Float32Array(e).map((t)=>t / 255);
        else {
            e = new Float32Array(t.width * t.height);
            const r = Ia(t);
            var n = Ma(t);
            if (Ta(n, r, Ra(t)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "document" in self && "ontouchend" in self.document) {
                n = new Float32Array(t.width * t.height * 4), r.readPixels(0, 0, t.width, t.height, r.RGBA, r.FLOAT, n);
                for(let t = 0, r = 0; t < e.length; ++t, r += 4)e[t] = n[r];
            } else r.readPixels(0, 0, t.width, t.height, r.RED, r.FLOAT, e);
        }
        t.g.push(e);
    }
    return e;
}
function Ra(t) {
    let e = xa(t, 2);
    if (!e) {
        const n = Ia(t);
        e = Pa(t);
        const r = La(t), i = Fa(t);
        n.texImage2D(n.TEXTURE_2D, 0, i, t.width, t.height, 0, n.RED, n.FLOAT, r), Ca(t);
    }
    return e;
}
function Ia(t) {
    if (!t.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
    return t.h || (t.h = ga(t.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t.h;
}
function Fa(t) {
    if (t = Ia(t), !Oa) if (t.getExtension("EXT_color_buffer_float") && t.getExtension("OES_texture_float_linear") && t.getExtension("EXT_float_blend")) Oa = t.R32F;
    else {
        if (!t.getExtension("EXT_color_buffer_half_float")) throw Error("GPU does not fully support 4-channel float32 or float16 formats");
        Oa = t.R16F;
    }
    return Oa;
}
function Ma(t) {
    return t.l || (t.l = new ba), t.l;
}
function Pa(t) {
    const e = Ia(t);
    e.viewport(0, 0, t.width, t.height), e.activeTexture(e.TEXTURE0);
    let n = xa(t, 2);
    return n || (n = wa(Ma(t), e, t.m ? e.LINEAR : e.NEAREST), t.g.push(n), t.j = !0), e.bindTexture(e.TEXTURE_2D, n), n;
}
function Ca(t) {
    t.h.bindTexture(t.h.TEXTURE_2D, null);
}
var Oa, Na = class {
    constructor(t, e, n, r, i, s, o){
        this.g = t, this.m = e, this.j = n, this.canvas = r, this.l = i, this.width = s, this.height = o, this.j && 0 === --Ua && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.");
    }
    Fa() {
        return !!xa(this, 0);
    }
    ka() {
        return !!xa(this, 1);
    }
    R() {
        return !!xa(this, 2);
    }
    ja() {
        return (e = xa(t = this, 0)) || (e = La(t), e = new Uint8Array(e.map((t)=>Math.round(255 * t))), t.g.push(e)), e;
        //TURBOPACK unreachable
        ;
        var t, e;
    }
    ia() {
        return La(this);
    }
    N() {
        return Ra(this);
    }
    clone() {
        const t = [];
        for (const e of this.g){
            let n;
            if (e instanceof Uint8Array) n = new Uint8Array(e);
            else if (e instanceof Float32Array) n = new Float32Array(e);
            else {
                if (!(e instanceof WebGLTexture)) throw Error(`Type is not supported: ${e}`);
                {
                    const t = Ia(this), e = Ma(this);
                    t.activeTexture(t.TEXTURE1), n = wa(e, t, this.m ? t.LINEAR : t.NEAREST), t.bindTexture(t.TEXTURE_2D, n);
                    const r = Fa(this);
                    t.texImage2D(t.TEXTURE_2D, 0, r, this.width, this.height, 0, t.RED, t.FLOAT, null), t.bindTexture(t.TEXTURE_2D, null), Ta(e, t, n), Ea(e, t, !1, ()=>{
                        Pa(this), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.drawArrays(t.TRIANGLE_FAN, 0, 4), Ca(this);
                    }), Aa(e), Ca(this);
                }
            }
            t.push(n);
        }
        return new Na(t, this.m, this.R(), this.canvas, this.l, this.width, this.height);
    }
    close() {
        this.j && Ia(this).deleteTexture(xa(this, 2)), Ua = -1;
    }
};
Na.prototype.close = Na.prototype.close, Na.prototype.clone = Na.prototype.clone, Na.prototype.getAsWebGLTexture = Na.prototype.N, Na.prototype.getAsFloat32Array = Na.prototype.ia, Na.prototype.getAsUint8Array = Na.prototype.ja, Na.prototype.hasWebGLTexture = Na.prototype.R, Na.prototype.hasFloat32Array = Na.prototype.ka, Na.prototype.hasUint8Array = Na.prototype.Fa;
var Ua = 250;
const Da = {
    color: "white",
    lineWidth: 4,
    radius: 6
};
function Ba(t) {
    return {
        ...Da,
        fillColor: (t = t || {}).color,
        ...t
    };
}
function Ga(t, e) {
    return t instanceof Function ? t(e) : t;
}
function ja(t, e, n) {
    return Math.max(Math.min(e, n), Math.min(Math.max(e, n), t));
}
function Va(t) {
    if (!t.l) throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");
    return t.l;
}
function Xa(t) {
    if (!t.j) throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");
    return t.j;
}
function Ha(t, e, n) {
    if (e.R()) n(e.N());
    else {
        const r = e.ka() ? e.ia() : e.ja();
        t.m = t.m ?? new ba;
        const i = Xa(t);
        n((t = new Na([
            r
        ], e.m, !1, i.canvas, t.m, e.width, e.height)).N()), t.close();
    }
}
function Wa(t, e, n, r) {
    const i = function(t) {
        return t.g || (t.g = new ka), t.g;
    }(t), s = Xa(t), o = Array.isArray(n) ? new ImageData(new Uint8ClampedArray(n), 1, 1) : n;
    Ea(i, s, !0, ()=>{
        !function(t, e, n, r) {
            const i = t.g;
            if (i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, e), i.activeTexture(i.TEXTURE1), i.bindTexture(i.TEXTURE_2D, t.C), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, n), t.I && function(t, e) {
                if (t !== e) return !1;
                t = t.entries(), e = e.entries();
                for (const [n, r] of t){
                    t = n;
                    const i = r, s = e.next();
                    if (s.done) return !1;
                    const [o, a] = s.value;
                    if (t !== o || i[0] !== a[0] || i[1] !== a[1] || i[2] !== a[2] || i[3] !== a[3]) return !1;
                }
                return !!e.next().done;
            }(t.I, r)) i.activeTexture(i.TEXTURE2), i.bindTexture(i.TEXTURE_2D, t.j);
            else {
                t.I = r;
                const e = Array(1024).fill(0);
                r.forEach((t, n)=>{
                    if (4 !== t.length) throw Error(`Color at index ${n} is not a four-channel value.`);
                    e[4 * n] = t[0], e[4 * n + 1] = t[1], e[4 * n + 2] = t[2], e[4 * n + 3] = t[3];
                }), i.activeTexture(i.TEXTURE2), i.bindTexture(i.TEXTURE_2D, t.j), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, 256, 1, 0, i.RGBA, i.UNSIGNED_BYTE, new Uint8Array(e));
            }
        }(i, e, o, r), s.clearColor(0, 0, 0, 0), s.clear(s.COLOR_BUFFER_BIT), s.drawArrays(s.TRIANGLE_FAN, 0, 4);
        const t = i.g;
        t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE2), t.bindTexture(t.TEXTURE_2D, null);
    });
}
function za(t, e, n, r) {
    const i = Xa(t), s = function(t) {
        return t.h || (t.h = new Sa), t.h;
    }(t), o = Array.isArray(n) ? new ImageData(new Uint8ClampedArray(n), 1, 1) : n, a = Array.isArray(r) ? new ImageData(new Uint8ClampedArray(r), 1, 1) : r;
    Ea(s, i, !0, ()=>{
        var t = s.g;
        t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, e), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, s.j), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, o), t.activeTexture(t.TEXTURE2), t.bindTexture(t.TEXTURE_2D, s.C), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, a), i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT), i.drawArrays(i.TRIANGLE_FAN, 0, 4), i.bindTexture(i.TEXTURE_2D, null), (t = s.g).activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE2), t.bindTexture(t.TEXTURE_2D, null);
    });
}
var Ka = class {
    constructor(t, e){
        "undefined" != typeof CanvasRenderingContext2D && t instanceof CanvasRenderingContext2D || t instanceof OffscreenCanvasRenderingContext2D ? (this.l = t, this.j = e) : this.j = t;
    }
    ya(t, e) {
        if (t) {
            var n = Va(this);
            e = Ba(e), n.save();
            var r = n.canvas, i = 0;
            for (const s of t)n.fillStyle = Ga(e.fillColor, {
                index: i,
                from: s
            }), n.strokeStyle = Ga(e.color, {
                index: i,
                from: s
            }), n.lineWidth = Ga(e.lineWidth, {
                index: i,
                from: s
            }), (t = new Path2D).arc(s.x * r.width, s.y * r.height, Ga(e.radius, {
                index: i,
                from: s
            }), 0, 2 * Math.PI), n.fill(t), n.stroke(t), ++i;
            n.restore();
        }
    }
    xa(t, e, n) {
        if (t && e) {
            var r = Va(this);
            n = Ba(n), r.save();
            var i = r.canvas, s = 0;
            for (const o of e){
                r.beginPath(), e = t[o.start];
                const a = t[o.end];
                e && a && (r.strokeStyle = Ga(n.color, {
                    index: s,
                    from: e,
                    to: a
                }), r.lineWidth = Ga(n.lineWidth, {
                    index: s,
                    from: e,
                    to: a
                }), r.moveTo(e.x * i.width, e.y * i.height), r.lineTo(a.x * i.width, a.y * i.height)), ++s, r.stroke();
            }
            r.restore();
        }
    }
    ua(t, e) {
        const n = Va(this);
        e = Ba(e), n.save(), n.beginPath(), n.lineWidth = Ga(e.lineWidth, {}), n.strokeStyle = Ga(e.color, {}), n.fillStyle = Ga(e.fillColor, {}), n.moveTo(t.originX, t.originY), n.lineTo(t.originX + t.width, t.originY), n.lineTo(t.originX + t.width, t.originY + t.height), n.lineTo(t.originX, t.originY + t.height), n.lineTo(t.originX, t.originY), n.stroke(), n.fill(), n.restore();
    }
    va(t, e, n = [
        0,
        0,
        0,
        255
    ]) {
        this.l ? function(t, e, n, r) {
            const i = Xa(t);
            Ha(t, e, (e)=>{
                Wa(t, e, n, r), (e = Va(t)).drawImage(i.canvas, 0, 0, e.canvas.width, e.canvas.height);
            });
        }(this, t, n, e) : Wa(this, t.N(), n, e);
    }
    wa(t, e, n) {
        this.l ? function(t, e, n, r) {
            const i = Xa(t);
            Ha(t, e, (e)=>{
                za(t, e, n, r), (e = Va(t)).drawImage(i.canvas, 0, 0, e.canvas.width, e.canvas.height);
            });
        }(this, t, e, n) : za(this, t.N(), e, n);
    }
    close() {
        this.g?.close(), this.g = void 0, this.h?.close(), this.h = void 0, this.m?.close(), this.m = void 0;
    }
};
function Ya(t, e) {
    switch(e){
        case 0:
            return t.g.find((t)=>t instanceof ImageData);
        case 1:
            return t.g.find((t)=>"undefined" != typeof ImageBitmap && t instanceof ImageBitmap);
        case 2:
            return t.g.find((t)=>"undefined" != typeof WebGLTexture && t instanceof WebGLTexture);
        default:
            throw Error(`Type is not supported: ${e}`);
    }
}
function qa(t) {
    var e = Ya(t, 0);
    if (!e) {
        e = Ja(t);
        const n = Za(t), r = new Uint8Array(t.width * t.height * 4);
        Ta(n, e, $a(t)), e.readPixels(0, 0, t.width, t.height, e.RGBA, e.UNSIGNED_BYTE, r), Aa(n), e = new ImageData(new Uint8ClampedArray(r.buffer), t.width, t.height), t.g.push(e);
    }
    return e;
}
function $a(t) {
    let e = Ya(t, 2);
    if (!e) {
        const n = Ja(t);
        e = Qa(t);
        const r = Ya(t, 1) || qa(t);
        n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, r), tc(t);
    }
    return e;
}
function Ja(t) {
    if (!t.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
    return t.h || (t.h = ga(t.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t.h;
}
function Za(t) {
    return t.l || (t.l = new ba), t.l;
}
function Qa(t) {
    const e = Ja(t);
    e.viewport(0, 0, t.width, t.height), e.activeTexture(e.TEXTURE0);
    let n = Ya(t, 2);
    return n || (n = wa(Za(t), e), t.g.push(n), t.m = !0), e.bindTexture(e.TEXTURE_2D, n), n;
}
function tc(t) {
    t.h.bindTexture(t.h.TEXTURE_2D, null);
}
function ec(t) {
    const e = Ja(t);
    return Ea(Za(t), e, !0, ()=>(function(t, e) {
            const n = t.canvas;
            if (n.width === t.width && n.height === t.height) return e();
            const r = n.width, i = n.height;
            return n.width = t.width, n.height = t.height, t = e(), n.width = r, n.height = i, t;
        })(t, ()=>{
            if (e.bindFramebuffer(e.FRAMEBUFFER, null), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.drawArrays(e.TRIANGLE_FAN, 0, 4), !(t.canvas instanceof OffscreenCanvas)) throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");
            return t.canvas.transferToImageBitmap();
        }));
}
Ka.prototype.close = Ka.prototype.close, Ka.prototype.drawConfidenceMask = Ka.prototype.wa, Ka.prototype.drawCategoryMask = Ka.prototype.va, Ka.prototype.drawBoundingBox = Ka.prototype.ua, Ka.prototype.drawConnectors = Ka.prototype.xa, Ka.prototype.drawLandmarks = Ka.prototype.ya, Ka.lerp = function(t, e, n, r, i) {
    return ja(r * (1 - (t - e) / (n - e)) + i * (1 - (n - t) / (n - e)), r, i);
}, Ka.clamp = ja;
var nc = class {
    constructor(t, e, n, r, i, s, o){
        this.g = t, this.j = e, this.m = n, this.canvas = r, this.l = i, this.width = s, this.height = o, (this.j || this.m) && 0 === --rc && console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.");
    }
    Ea() {
        return !!Ya(this, 0);
    }
    la() {
        return !!Ya(this, 1);
    }
    R() {
        return !!Ya(this, 2);
    }
    Ca() {
        return qa(this);
    }
    Ba() {
        var t = Ya(this, 1);
        return t || ($a(this), Qa(this), t = ec(this), tc(this), this.g.push(t), this.j = !0), t;
    }
    N() {
        return $a(this);
    }
    clone() {
        const t = [];
        for (const e of this.g){
            let n;
            if (e instanceof ImageData) n = new ImageData(e.data, this.width, this.height);
            else if (e instanceof WebGLTexture) {
                const t = Ja(this), e = Za(this);
                t.activeTexture(t.TEXTURE1), n = wa(e, t), t.bindTexture(t.TEXTURE_2D, n), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.width, this.height, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.bindTexture(t.TEXTURE_2D, null), Ta(e, t, n), Ea(e, t, !1, ()=>{
                    Qa(this), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.drawArrays(t.TRIANGLE_FAN, 0, 4), tc(this);
                }), Aa(e), tc(this);
            } else {
                if (!(e instanceof ImageBitmap)) throw Error(`Type is not supported: ${e}`);
                $a(this), Qa(this), n = ec(this), tc(this);
            }
            t.push(n);
        }
        return new nc(t, this.la(), this.R(), this.canvas, this.l, this.width, this.height);
    }
    close() {
        this.j && Ya(this, 1).close(), this.m && Ja(this).deleteTexture(Ya(this, 2)), rc = -1;
    }
};
nc.prototype.close = nc.prototype.close, nc.prototype.clone = nc.prototype.clone, nc.prototype.getAsWebGLTexture = nc.prototype.N, nc.prototype.getAsImageBitmap = nc.prototype.Ba, nc.prototype.getAsImageData = nc.prototype.Ca, nc.prototype.hasWebGLTexture = nc.prototype.R, nc.prototype.hasImageBitmap = nc.prototype.la, nc.prototype.hasImageData = nc.prototype.Ea;
var rc = 250;
function ic(...t) {
    return t.map(([t, e])=>({
            start: t,
            end: e
        }));
}
const sc = function(t) {
    return class extends t {
        Ja() {
            this.i._registerModelResourcesGraphService();
        }
    };
}((oc = class {
    constructor(t, e){
        this.l = !0, this.i = t, this.g = null, this.h = 0, this.m = "function" == typeof this.i._addIntToInputStream, void 0 !== e ? this.i.canvas = e : Qo() ? this.i.canvas = new OffscreenCanvas(1, 1) : (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas"));
    }
    async initializeGraph(t) {
        const e = await (await fetch(t)).arrayBuffer();
        t = !(t.endsWith(".pbtxt") || t.endsWith(".textproto")), this.setGraph(new Uint8Array(e), t);
    }
    setGraphFromString(t) {
        this.setGraph((new TextEncoder).encode(t), !1);
    }
    setGraph(t, e) {
        const n = t.length, r = this.i._malloc(n);
        this.i.HEAPU8.set(t, r), e ? this.i._changeBinaryGraph(n, r) : this.i._changeTextGraph(n, r), this.i._free(r);
    }
    configureAudio(t, e, n, r, i) {
        this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), na(this, r || "input_audio", (r)=>{
            na(this, i = i || "audio_header", (i)=>{
                this.i._configureAudio(r, i, t, e ?? 0, n);
            });
        });
    }
    setAutoResizeCanvas(t) {
        this.l = t;
    }
    setAutoRenderToScreen(t) {
        this.i._setAutoRenderToScreen(t);
    }
    setGpuBufferVerticalFlip(t) {
        this.i.gpuOriginForWebTexturesIsBottomLeft = t;
    }
    ca(t) {
        sa(this, "__graph_config__", (e)=>{
            t(e);
        }), na(this, "__graph_config__", (t)=>{
            this.i._getGraphConfig(t, void 0);
        }), delete this.i.simpleListeners.__graph_config__;
    }
    attachErrorListener(t) {
        this.i.errorListener = t;
    }
    attachEmptyPacketListener(t, e) {
        this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[t] = e;
    }
    addAudioToStream(t, e, n) {
        this.addAudioToStreamWithShape(t, 0, 0, e, n);
    }
    addAudioToStreamWithShape(t, e, n, r, i) {
        const s = 4 * t.length;
        this.h !== s && (this.g && this.i._free(this.g), this.g = this.i._malloc(s), this.h = s), this.i.HEAPF32.set(t, this.g / 4), na(this, r, (t)=>{
            this.i._addAudioToInputStream(this.g, e, n, t, i);
        });
    }
    addGpuBufferToStream(t, e, n) {
        na(this, e, (e)=>{
            const [r, i] = ra(this, t, e);
            this.i._addBoundTextureToStream(e, r, i, n);
        });
    }
    addBoolToStream(t, e, n) {
        na(this, e, (e)=>{
            this.i._addBoolToInputStream(t, e, n);
        });
    }
    addDoubleToStream(t, e, n) {
        na(this, e, (e)=>{
            this.i._addDoubleToInputStream(t, e, n);
        });
    }
    addFloatToStream(t, e, n) {
        na(this, e, (e)=>{
            this.i._addFloatToInputStream(t, e, n);
        });
    }
    addIntToStream(t, e, n) {
        na(this, e, (e)=>{
            this.i._addIntToInputStream(t, e, n);
        });
    }
    addUintToStream(t, e, n) {
        na(this, e, (e)=>{
            this.i._addUintToInputStream(t, e, n);
        });
    }
    addStringToStream(t, e, n) {
        na(this, e, (e)=>{
            na(this, t, (t)=>{
                this.i._addStringToInputStream(t, e, n);
            });
        });
    }
    addStringRecordToStream(t, e, n) {
        na(this, e, (e)=>{
            ia(this, Object.keys(t), (r)=>{
                ia(this, Object.values(t), (i)=>{
                    this.i._addFlatHashMapToInputStream(r, i, Object.keys(t).length, e, n);
                });
            });
        });
    }
    addProtoToStream(t, e, n, r) {
        na(this, n, (n)=>{
            na(this, e, (e)=>{
                const i = this.i._malloc(t.length);
                this.i.HEAPU8.set(t, i), this.i._addProtoToInputStream(i, t.length, e, n, r), this.i._free(i);
            });
        });
    }
    addEmptyPacketToStream(t, e) {
        na(this, t, (t)=>{
            this.i._addEmptyPacketToInputStream(t, e);
        });
    }
    addBoolVectorToStream(t, e, n) {
        na(this, e, (e)=>{
            const r = this.i._allocateBoolVector(t.length);
            if (!r) throw Error("Unable to allocate new bool vector on heap.");
            for (const e of t)this.i._addBoolVectorEntry(r, e);
            this.i._addBoolVectorToInputStream(r, e, n);
        });
    }
    addDoubleVectorToStream(t, e, n) {
        na(this, e, (e)=>{
            const r = this.i._allocateDoubleVector(t.length);
            if (!r) throw Error("Unable to allocate new double vector on heap.");
            for (const e of t)this.i._addDoubleVectorEntry(r, e);
            this.i._addDoubleVectorToInputStream(r, e, n);
        });
    }
    addFloatVectorToStream(t, e, n) {
        na(this, e, (e)=>{
            const r = this.i._allocateFloatVector(t.length);
            if (!r) throw Error("Unable to allocate new float vector on heap.");
            for (const e of t)this.i._addFloatVectorEntry(r, e);
            this.i._addFloatVectorToInputStream(r, e, n);
        });
    }
    addIntVectorToStream(t, e, n) {
        na(this, e, (e)=>{
            const r = this.i._allocateIntVector(t.length);
            if (!r) throw Error("Unable to allocate new int vector on heap.");
            for (const e of t)this.i._addIntVectorEntry(r, e);
            this.i._addIntVectorToInputStream(r, e, n);
        });
    }
    addUintVectorToStream(t, e, n) {
        na(this, e, (e)=>{
            const r = this.i._allocateUintVector(t.length);
            if (!r) throw Error("Unable to allocate new unsigned int vector on heap.");
            for (const e of t)this.i._addUintVectorEntry(r, e);
            this.i._addUintVectorToInputStream(r, e, n);
        });
    }
    addStringVectorToStream(t, e, n) {
        na(this, e, (e)=>{
            const r = this.i._allocateStringVector(t.length);
            if (!r) throw Error("Unable to allocate new string vector on heap.");
            for (const e of t)na(this, e, (t)=>{
                this.i._addStringVectorEntry(r, t);
            });
            this.i._addStringVectorToInputStream(r, e, n);
        });
    }
    addBoolToInputSidePacket(t, e) {
        na(this, e, (e)=>{
            this.i._addBoolToInputSidePacket(t, e);
        });
    }
    addDoubleToInputSidePacket(t, e) {
        na(this, e, (e)=>{
            this.i._addDoubleToInputSidePacket(t, e);
        });
    }
    addFloatToInputSidePacket(t, e) {
        na(this, e, (e)=>{
            this.i._addFloatToInputSidePacket(t, e);
        });
    }
    addIntToInputSidePacket(t, e) {
        na(this, e, (e)=>{
            this.i._addIntToInputSidePacket(t, e);
        });
    }
    addUintToInputSidePacket(t, e) {
        na(this, e, (e)=>{
            this.i._addUintToInputSidePacket(t, e);
        });
    }
    addStringToInputSidePacket(t, e) {
        na(this, e, (e)=>{
            na(this, t, (t)=>{
                this.i._addStringToInputSidePacket(t, e);
            });
        });
    }
    addProtoToInputSidePacket(t, e, n) {
        na(this, n, (n)=>{
            na(this, e, (e)=>{
                const r = this.i._malloc(t.length);
                this.i.HEAPU8.set(t, r), this.i._addProtoToInputSidePacket(r, t.length, e, n), this.i._free(r);
            });
        });
    }
    addBoolVectorToInputSidePacket(t, e) {
        na(this, e, (e)=>{
            const n = this.i._allocateBoolVector(t.length);
            if (!n) throw Error("Unable to allocate new bool vector on heap.");
            for (const e of t)this.i._addBoolVectorEntry(n, e);
            this.i._addBoolVectorToInputSidePacket(n, e);
        });
    }
    addDoubleVectorToInputSidePacket(t, e) {
        na(this, e, (e)=>{
            const n = this.i._allocateDoubleVector(t.length);
            if (!n) throw Error("Unable to allocate new double vector on heap.");
            for (const e of t)this.i._addDoubleVectorEntry(n, e);
            this.i._addDoubleVectorToInputSidePacket(n, e);
        });
    }
    addFloatVectorToInputSidePacket(t, e) {
        na(this, e, (e)=>{
            const n = this.i._allocateFloatVector(t.length);
            if (!n) throw Error("Unable to allocate new float vector on heap.");
            for (const e of t)this.i._addFloatVectorEntry(n, e);
            this.i._addFloatVectorToInputSidePacket(n, e);
        });
    }
    addIntVectorToInputSidePacket(t, e) {
        na(this, e, (e)=>{
            const n = this.i._allocateIntVector(t.length);
            if (!n) throw Error("Unable to allocate new int vector on heap.");
            for (const e of t)this.i._addIntVectorEntry(n, e);
            this.i._addIntVectorToInputSidePacket(n, e);
        });
    }
    addUintVectorToInputSidePacket(t, e) {
        na(this, e, (e)=>{
            const n = this.i._allocateUintVector(t.length);
            if (!n) throw Error("Unable to allocate new unsigned int vector on heap.");
            for (const e of t)this.i._addUintVectorEntry(n, e);
            this.i._addUintVectorToInputSidePacket(n, e);
        });
    }
    addStringVectorToInputSidePacket(t, e) {
        na(this, e, (e)=>{
            const n = this.i._allocateStringVector(t.length);
            if (!n) throw Error("Unable to allocate new string vector on heap.");
            for (const e of t)na(this, e, (t)=>{
                this.i._addStringVectorEntry(n, t);
            });
            this.i._addStringVectorToInputSidePacket(n, e);
        });
    }
    attachBoolListener(t, e) {
        sa(this, t, e), na(this, t, (t)=>{
            this.i._attachBoolListener(t);
        });
    }
    attachBoolVectorListener(t, e) {
        oa(this, t, e), na(this, t, (t)=>{
            this.i._attachBoolVectorListener(t);
        });
    }
    attachIntListener(t, e) {
        sa(this, t, e), na(this, t, (t)=>{
            this.i._attachIntListener(t);
        });
    }
    attachIntVectorListener(t, e) {
        oa(this, t, e), na(this, t, (t)=>{
            this.i._attachIntVectorListener(t);
        });
    }
    attachUintListener(t, e) {
        sa(this, t, e), na(this, t, (t)=>{
            this.i._attachUintListener(t);
        });
    }
    attachUintVectorListener(t, e) {
        oa(this, t, e), na(this, t, (t)=>{
            this.i._attachUintVectorListener(t);
        });
    }
    attachDoubleListener(t, e) {
        sa(this, t, e), na(this, t, (t)=>{
            this.i._attachDoubleListener(t);
        });
    }
    attachDoubleVectorListener(t, e) {
        oa(this, t, e), na(this, t, (t)=>{
            this.i._attachDoubleVectorListener(t);
        });
    }
    attachFloatListener(t, e) {
        sa(this, t, e), na(this, t, (t)=>{
            this.i._attachFloatListener(t);
        });
    }
    attachFloatVectorListener(t, e) {
        oa(this, t, e), na(this, t, (t)=>{
            this.i._attachFloatVectorListener(t);
        });
    }
    attachStringListener(t, e) {
        sa(this, t, e), na(this, t, (t)=>{
            this.i._attachStringListener(t);
        });
    }
    attachStringVectorListener(t, e) {
        oa(this, t, e), na(this, t, (t)=>{
            this.i._attachStringVectorListener(t);
        });
    }
    attachProtoListener(t, e, n) {
        sa(this, t, e), na(this, t, (t)=>{
            this.i._attachProtoListener(t, n || !1);
        });
    }
    attachProtoVectorListener(t, e, n) {
        oa(this, t, e), na(this, t, (t)=>{
            this.i._attachProtoVectorListener(t, n || !1);
        });
    }
    attachAudioListener(t, e, n) {
        this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), sa(this, t, (t, n)=>{
            t = new Float32Array(t.buffer, t.byteOffset, t.length / 4), e(t, n);
        }), na(this, t, (t)=>{
            this.i._attachAudioListener(t, n || !1);
        });
    }
    finishProcessing() {
        this.i._waitUntilIdle();
    }
    closeGraph() {
        this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
    }
}, class extends oc {
    get ga() {
        return this.i;
    }
    pa(t, e, n) {
        na(this, e, (e)=>{
            const [r, i] = ra(this, t, e);
            this.ga._addBoundTextureAsImageToStream(e, r, i, n);
        });
    }
    Z(t, e) {
        sa(this, t, e), na(this, t, (t)=>{
            this.ga._attachImageListener(t);
        });
    }
    aa(t, e) {
        oa(this, t, e), na(this, t, (t)=>{
            this.ga._attachImageVectorListener(t);
        });
    }
}));
var oc, ac = class extends sc {
};
async function cc(t, e, n) {
    return async function(t, e, n, r) {
        return aa(t, e, n, r);
    }(t, n.canvas ?? (Qo() ? void 0 : document.createElement("canvas")), e, n);
}
function hc(t, e, n, r) {
    if (t.U) {
        const s = new Ls;
        if (n?.regionOfInterest) {
            if (!t.oa) throw Error("This task doesn't support region-of-interest.");
            var i = n.regionOfInterest;
            if (i.left >= i.right || i.top >= i.bottom) throw Error("Expected RectF with left < right and top < bottom.");
            if (i.left < 0 || i.top < 0 || i.right > 1 || i.bottom > 1) throw Error("Expected RectF values to be in [0,1].");
            Ln(s, 1, (i.left + i.right) / 2), Ln(s, 2, (i.top + i.bottom) / 2), Ln(s, 4, i.right - i.left), Ln(s, 3, i.bottom - i.top);
        } else Ln(s, 1, .5), Ln(s, 2, .5), Ln(s, 4, 1), Ln(s, 3, 1);
        if (n?.rotationDegrees) {
            if (n?.rotationDegrees % 90 != 0) throw Error("Expected rotation to be a multiple of 90°.");
            if (Ln(s, 5, -Math.PI * n.rotationDegrees / 180), n?.rotationDegrees % 180 != 0) {
                const [t, r] = ea(e);
                n = Sn(s, 3) * r / t, i = Sn(s, 4) * t / r, Ln(s, 4, n), Ln(s, 3, i);
            }
        }
        t.g.addProtoToStream(s.g(), "mediapipe.NormalizedRect", t.U, r);
    }
    t.g.pa(e, t.X, r ?? performance.now()), t.finishProcessing();
}
function uc(t, e, n) {
    if (t.baseOptions?.g()) throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
    hc(t, e, n, t.C + 1);
}
function lc(t, e, n, r) {
    if (!t.baseOptions?.g()) throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
    hc(t, e, n, r);
}
function fc(t, e, n, r) {
    var i = e.data;
    const s = e.width, o = s * (e = e.height);
    if ((i instanceof Uint8Array || i instanceof Float32Array) && i.length !== o) throw Error("Unsupported channel count: " + i.length / o);
    return t = new Na([
        i
    ], n, !1, t.g.i.canvas, t.P, s, e), r ? t.clone() : t;
}
var dc = class extends pa {
    constructor(t, e, n, r){
        super(t), this.g = t, this.X = e, this.U = n, this.oa = r, this.P = new ba;
    }
    l(t, e = !0) {
        if ("runningMode" in t && Ze(this.baseOptions, 2, Jt(!!t.runningMode && "IMAGE" !== t.runningMode)), void 0 !== t.canvas && this.g.i.canvas !== t.canvas) throw Error("You must create a new task to reset the canvas.");
        return super.l(t, e);
    }
    close() {
        this.P.close(), super.close();
    }
};
dc.prototype.close = dc.prototype.close;
var pc = class extends dc {
    constructor(t, e){
        super(new ac(t, e), "image_in", "norm_rect_in", !1), this.j = {
            detections: []
        }, wn(t = this.h = new zs, 0, 1, e = new Xs), Ln(this.h, 2, .5), Ln(this.h, 3, .3);
    }
    get baseOptions() {
        return yn(this.h, Xs, 1);
    }
    set baseOptions(t) {
        wn(this.h, 0, 1, t);
    }
    o(t) {
        return "minDetectionConfidence" in t && Ln(this.h, 2, t.minDetectionConfidence ?? .5), "minSuppressionThreshold" in t && Ln(this.h, 3, t.minSuppressionThreshold ?? .3), this.l(t);
    }
    F(t, e) {
        return this.j = {
            detections: []
        }, uc(this, t, e), this.j;
    }
    G(t, e, n) {
        return this.j = {
            detections: []
        }, lc(this, t, n, e), this.j;
    }
    m() {
        var t = new ls;
        hs(t, "image_in"), hs(t, "norm_rect_in"), us(t, "detections");
        const e = new Qi;
        xr(e, Ys, this.h);
        const n = new is;
        Rn(n, 2, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), ns(n, "IMAGE:image_in"), ns(n, "NORM_RECT:norm_rect_in"), rs(n, "DETECTIONS:detections"), n.o(e), cs(t, n), this.g.attachProtoVectorListener("detections", (t, e)=>{
            for (const e of t)t = ws(e), this.j.detections.push(Xo(t));
            ua(this, e);
        }), this.g.attachEmptyPacketListener("detections", (t)=>{
            ua(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
pc.prototype.detectForVideo = pc.prototype.G, pc.prototype.detect = pc.prototype.F, pc.prototype.setOptions = pc.prototype.o, pc.createFromModelPath = async function(t, e) {
    return cc(pc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, pc.createFromModelBuffer = function(t, e) {
    return cc(pc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, pc.createFromOptions = function(t, e) {
    return cc(pc, t, e);
};
var gc = ic([
    61,
    146
], [
    146,
    91
], [
    91,
    181
], [
    181,
    84
], [
    84,
    17
], [
    17,
    314
], [
    314,
    405
], [
    405,
    321
], [
    321,
    375
], [
    375,
    291
], [
    61,
    185
], [
    185,
    40
], [
    40,
    39
], [
    39,
    37
], [
    37,
    0
], [
    0,
    267
], [
    267,
    269
], [
    269,
    270
], [
    270,
    409
], [
    409,
    291
], [
    78,
    95
], [
    95,
    88
], [
    88,
    178
], [
    178,
    87
], [
    87,
    14
], [
    14,
    317
], [
    317,
    402
], [
    402,
    318
], [
    318,
    324
], [
    324,
    308
], [
    78,
    191
], [
    191,
    80
], [
    80,
    81
], [
    81,
    82
], [
    82,
    13
], [
    13,
    312
], [
    312,
    311
], [
    311,
    310
], [
    310,
    415
], [
    415,
    308
]), mc = ic([
    263,
    249
], [
    249,
    390
], [
    390,
    373
], [
    373,
    374
], [
    374,
    380
], [
    380,
    381
], [
    381,
    382
], [
    382,
    362
], [
    263,
    466
], [
    466,
    388
], [
    388,
    387
], [
    387,
    386
], [
    386,
    385
], [
    385,
    384
], [
    384,
    398
], [
    398,
    362
]), yc = ic([
    276,
    283
], [
    283,
    282
], [
    282,
    295
], [
    295,
    285
], [
    300,
    293
], [
    293,
    334
], [
    334,
    296
], [
    296,
    336
]), _c = ic([
    474,
    475
], [
    475,
    476
], [
    476,
    477
], [
    477,
    474
]), vc = ic([
    33,
    7
], [
    7,
    163
], [
    163,
    144
], [
    144,
    145
], [
    145,
    153
], [
    153,
    154
], [
    154,
    155
], [
    155,
    133
], [
    33,
    246
], [
    246,
    161
], [
    161,
    160
], [
    160,
    159
], [
    159,
    158
], [
    158,
    157
], [
    157,
    173
], [
    173,
    133
]), Ec = ic([
    46,
    53
], [
    53,
    52
], [
    52,
    65
], [
    65,
    55
], [
    70,
    63
], [
    63,
    105
], [
    105,
    66
], [
    66,
    107
]), wc = ic([
    469,
    470
], [
    470,
    471
], [
    471,
    472
], [
    472,
    469
]), Tc = ic([
    10,
    338
], [
    338,
    297
], [
    297,
    332
], [
    332,
    284
], [
    284,
    251
], [
    251,
    389
], [
    389,
    356
], [
    356,
    454
], [
    454,
    323
], [
    323,
    361
], [
    361,
    288
], [
    288,
    397
], [
    397,
    365
], [
    365,
    379
], [
    379,
    378
], [
    378,
    400
], [
    400,
    377
], [
    377,
    152
], [
    152,
    148
], [
    148,
    176
], [
    176,
    149
], [
    149,
    150
], [
    150,
    136
], [
    136,
    172
], [
    172,
    58
], [
    58,
    132
], [
    132,
    93
], [
    93,
    234
], [
    234,
    127
], [
    127,
    162
], [
    162,
    21
], [
    21,
    54
], [
    54,
    103
], [
    103,
    67
], [
    67,
    109
], [
    109,
    10
]), Ac = [
    ...gc,
    ...mc,
    ...yc,
    ...vc,
    ...Ec,
    ...Tc
], bc = ic([
    127,
    34
], [
    34,
    139
], [
    139,
    127
], [
    11,
    0
], [
    0,
    37
], [
    37,
    11
], [
    232,
    231
], [
    231,
    120
], [
    120,
    232
], [
    72,
    37
], [
    37,
    39
], [
    39,
    72
], [
    128,
    121
], [
    121,
    47
], [
    47,
    128
], [
    232,
    121
], [
    121,
    128
], [
    128,
    232
], [
    104,
    69
], [
    69,
    67
], [
    67,
    104
], [
    175,
    171
], [
    171,
    148
], [
    148,
    175
], [
    118,
    50
], [
    50,
    101
], [
    101,
    118
], [
    73,
    39
], [
    39,
    40
], [
    40,
    73
], [
    9,
    151
], [
    151,
    108
], [
    108,
    9
], [
    48,
    115
], [
    115,
    131
], [
    131,
    48
], [
    194,
    204
], [
    204,
    211
], [
    211,
    194
], [
    74,
    40
], [
    40,
    185
], [
    185,
    74
], [
    80,
    42
], [
    42,
    183
], [
    183,
    80
], [
    40,
    92
], [
    92,
    186
], [
    186,
    40
], [
    230,
    229
], [
    229,
    118
], [
    118,
    230
], [
    202,
    212
], [
    212,
    214
], [
    214,
    202
], [
    83,
    18
], [
    18,
    17
], [
    17,
    83
], [
    76,
    61
], [
    61,
    146
], [
    146,
    76
], [
    160,
    29
], [
    29,
    30
], [
    30,
    160
], [
    56,
    157
], [
    157,
    173
], [
    173,
    56
], [
    106,
    204
], [
    204,
    194
], [
    194,
    106
], [
    135,
    214
], [
    214,
    192
], [
    192,
    135
], [
    203,
    165
], [
    165,
    98
], [
    98,
    203
], [
    21,
    71
], [
    71,
    68
], [
    68,
    21
], [
    51,
    45
], [
    45,
    4
], [
    4,
    51
], [
    144,
    24
], [
    24,
    23
], [
    23,
    144
], [
    77,
    146
], [
    146,
    91
], [
    91,
    77
], [
    205,
    50
], [
    50,
    187
], [
    187,
    205
], [
    201,
    200
], [
    200,
    18
], [
    18,
    201
], [
    91,
    106
], [
    106,
    182
], [
    182,
    91
], [
    90,
    91
], [
    91,
    181
], [
    181,
    90
], [
    85,
    84
], [
    84,
    17
], [
    17,
    85
], [
    206,
    203
], [
    203,
    36
], [
    36,
    206
], [
    148,
    171
], [
    171,
    140
], [
    140,
    148
], [
    92,
    40
], [
    40,
    39
], [
    39,
    92
], [
    193,
    189
], [
    189,
    244
], [
    244,
    193
], [
    159,
    158
], [
    158,
    28
], [
    28,
    159
], [
    247,
    246
], [
    246,
    161
], [
    161,
    247
], [
    236,
    3
], [
    3,
    196
], [
    196,
    236
], [
    54,
    68
], [
    68,
    104
], [
    104,
    54
], [
    193,
    168
], [
    168,
    8
], [
    8,
    193
], [
    117,
    228
], [
    228,
    31
], [
    31,
    117
], [
    189,
    193
], [
    193,
    55
], [
    55,
    189
], [
    98,
    97
], [
    97,
    99
], [
    99,
    98
], [
    126,
    47
], [
    47,
    100
], [
    100,
    126
], [
    166,
    79
], [
    79,
    218
], [
    218,
    166
], [
    155,
    154
], [
    154,
    26
], [
    26,
    155
], [
    209,
    49
], [
    49,
    131
], [
    131,
    209
], [
    135,
    136
], [
    136,
    150
], [
    150,
    135
], [
    47,
    126
], [
    126,
    217
], [
    217,
    47
], [
    223,
    52
], [
    52,
    53
], [
    53,
    223
], [
    45,
    51
], [
    51,
    134
], [
    134,
    45
], [
    211,
    170
], [
    170,
    140
], [
    140,
    211
], [
    67,
    69
], [
    69,
    108
], [
    108,
    67
], [
    43,
    106
], [
    106,
    91
], [
    91,
    43
], [
    230,
    119
], [
    119,
    120
], [
    120,
    230
], [
    226,
    130
], [
    130,
    247
], [
    247,
    226
], [
    63,
    53
], [
    53,
    52
], [
    52,
    63
], [
    238,
    20
], [
    20,
    242
], [
    242,
    238
], [
    46,
    70
], [
    70,
    156
], [
    156,
    46
], [
    78,
    62
], [
    62,
    96
], [
    96,
    78
], [
    46,
    53
], [
    53,
    63
], [
    63,
    46
], [
    143,
    34
], [
    34,
    227
], [
    227,
    143
], [
    123,
    117
], [
    117,
    111
], [
    111,
    123
], [
    44,
    125
], [
    125,
    19
], [
    19,
    44
], [
    236,
    134
], [
    134,
    51
], [
    51,
    236
], [
    216,
    206
], [
    206,
    205
], [
    205,
    216
], [
    154,
    153
], [
    153,
    22
], [
    22,
    154
], [
    39,
    37
], [
    37,
    167
], [
    167,
    39
], [
    200,
    201
], [
    201,
    208
], [
    208,
    200
], [
    36,
    142
], [
    142,
    100
], [
    100,
    36
], [
    57,
    212
], [
    212,
    202
], [
    202,
    57
], [
    20,
    60
], [
    60,
    99
], [
    99,
    20
], [
    28,
    158
], [
    158,
    157
], [
    157,
    28
], [
    35,
    226
], [
    226,
    113
], [
    113,
    35
], [
    160,
    159
], [
    159,
    27
], [
    27,
    160
], [
    204,
    202
], [
    202,
    210
], [
    210,
    204
], [
    113,
    225
], [
    225,
    46
], [
    46,
    113
], [
    43,
    202
], [
    202,
    204
], [
    204,
    43
], [
    62,
    76
], [
    76,
    77
], [
    77,
    62
], [
    137,
    123
], [
    123,
    116
], [
    116,
    137
], [
    41,
    38
], [
    38,
    72
], [
    72,
    41
], [
    203,
    129
], [
    129,
    142
], [
    142,
    203
], [
    64,
    98
], [
    98,
    240
], [
    240,
    64
], [
    49,
    102
], [
    102,
    64
], [
    64,
    49
], [
    41,
    73
], [
    73,
    74
], [
    74,
    41
], [
    212,
    216
], [
    216,
    207
], [
    207,
    212
], [
    42,
    74
], [
    74,
    184
], [
    184,
    42
], [
    169,
    170
], [
    170,
    211
], [
    211,
    169
], [
    170,
    149
], [
    149,
    176
], [
    176,
    170
], [
    105,
    66
], [
    66,
    69
], [
    69,
    105
], [
    122,
    6
], [
    6,
    168
], [
    168,
    122
], [
    123,
    147
], [
    147,
    187
], [
    187,
    123
], [
    96,
    77
], [
    77,
    90
], [
    90,
    96
], [
    65,
    55
], [
    55,
    107
], [
    107,
    65
], [
    89,
    90
], [
    90,
    180
], [
    180,
    89
], [
    101,
    100
], [
    100,
    120
], [
    120,
    101
], [
    63,
    105
], [
    105,
    104
], [
    104,
    63
], [
    93,
    137
], [
    137,
    227
], [
    227,
    93
], [
    15,
    86
], [
    86,
    85
], [
    85,
    15
], [
    129,
    102
], [
    102,
    49
], [
    49,
    129
], [
    14,
    87
], [
    87,
    86
], [
    86,
    14
], [
    55,
    8
], [
    8,
    9
], [
    9,
    55
], [
    100,
    47
], [
    47,
    121
], [
    121,
    100
], [
    145,
    23
], [
    23,
    22
], [
    22,
    145
], [
    88,
    89
], [
    89,
    179
], [
    179,
    88
], [
    6,
    122
], [
    122,
    196
], [
    196,
    6
], [
    88,
    95
], [
    95,
    96
], [
    96,
    88
], [
    138,
    172
], [
    172,
    136
], [
    136,
    138
], [
    215,
    58
], [
    58,
    172
], [
    172,
    215
], [
    115,
    48
], [
    48,
    219
], [
    219,
    115
], [
    42,
    80
], [
    80,
    81
], [
    81,
    42
], [
    195,
    3
], [
    3,
    51
], [
    51,
    195
], [
    43,
    146
], [
    146,
    61
], [
    61,
    43
], [
    171,
    175
], [
    175,
    199
], [
    199,
    171
], [
    81,
    82
], [
    82,
    38
], [
    38,
    81
], [
    53,
    46
], [
    46,
    225
], [
    225,
    53
], [
    144,
    163
], [
    163,
    110
], [
    110,
    144
], [
    52,
    65
], [
    65,
    66
], [
    66,
    52
], [
    229,
    228
], [
    228,
    117
], [
    117,
    229
], [
    34,
    127
], [
    127,
    234
], [
    234,
    34
], [
    107,
    108
], [
    108,
    69
], [
    69,
    107
], [
    109,
    108
], [
    108,
    151
], [
    151,
    109
], [
    48,
    64
], [
    64,
    235
], [
    235,
    48
], [
    62,
    78
], [
    78,
    191
], [
    191,
    62
], [
    129,
    209
], [
    209,
    126
], [
    126,
    129
], [
    111,
    35
], [
    35,
    143
], [
    143,
    111
], [
    117,
    123
], [
    123,
    50
], [
    50,
    117
], [
    222,
    65
], [
    65,
    52
], [
    52,
    222
], [
    19,
    125
], [
    125,
    141
], [
    141,
    19
], [
    221,
    55
], [
    55,
    65
], [
    65,
    221
], [
    3,
    195
], [
    195,
    197
], [
    197,
    3
], [
    25,
    7
], [
    7,
    33
], [
    33,
    25
], [
    220,
    237
], [
    237,
    44
], [
    44,
    220
], [
    70,
    71
], [
    71,
    139
], [
    139,
    70
], [
    122,
    193
], [
    193,
    245
], [
    245,
    122
], [
    247,
    130
], [
    130,
    33
], [
    33,
    247
], [
    71,
    21
], [
    21,
    162
], [
    162,
    71
], [
    170,
    169
], [
    169,
    150
], [
    150,
    170
], [
    188,
    174
], [
    174,
    196
], [
    196,
    188
], [
    216,
    186
], [
    186,
    92
], [
    92,
    216
], [
    2,
    97
], [
    97,
    167
], [
    167,
    2
], [
    141,
    125
], [
    125,
    241
], [
    241,
    141
], [
    164,
    167
], [
    167,
    37
], [
    37,
    164
], [
    72,
    38
], [
    38,
    12
], [
    12,
    72
], [
    38,
    82
], [
    82,
    13
], [
    13,
    38
], [
    63,
    68
], [
    68,
    71
], [
    71,
    63
], [
    226,
    35
], [
    35,
    111
], [
    111,
    226
], [
    101,
    50
], [
    50,
    205
], [
    205,
    101
], [
    206,
    92
], [
    92,
    165
], [
    165,
    206
], [
    209,
    198
], [
    198,
    217
], [
    217,
    209
], [
    165,
    167
], [
    167,
    97
], [
    97,
    165
], [
    220,
    115
], [
    115,
    218
], [
    218,
    220
], [
    133,
    112
], [
    112,
    243
], [
    243,
    133
], [
    239,
    238
], [
    238,
    241
], [
    241,
    239
], [
    214,
    135
], [
    135,
    169
], [
    169,
    214
], [
    190,
    173
], [
    173,
    133
], [
    133,
    190
], [
    171,
    208
], [
    208,
    32
], [
    32,
    171
], [
    125,
    44
], [
    44,
    237
], [
    237,
    125
], [
    86,
    87
], [
    87,
    178
], [
    178,
    86
], [
    85,
    86
], [
    86,
    179
], [
    179,
    85
], [
    84,
    85
], [
    85,
    180
], [
    180,
    84
], [
    83,
    84
], [
    84,
    181
], [
    181,
    83
], [
    201,
    83
], [
    83,
    182
], [
    182,
    201
], [
    137,
    93
], [
    93,
    132
], [
    132,
    137
], [
    76,
    62
], [
    62,
    183
], [
    183,
    76
], [
    61,
    76
], [
    76,
    184
], [
    184,
    61
], [
    57,
    61
], [
    61,
    185
], [
    185,
    57
], [
    212,
    57
], [
    57,
    186
], [
    186,
    212
], [
    214,
    207
], [
    207,
    187
], [
    187,
    214
], [
    34,
    143
], [
    143,
    156
], [
    156,
    34
], [
    79,
    239
], [
    239,
    237
], [
    237,
    79
], [
    123,
    137
], [
    137,
    177
], [
    177,
    123
], [
    44,
    1
], [
    1,
    4
], [
    4,
    44
], [
    201,
    194
], [
    194,
    32
], [
    32,
    201
], [
    64,
    102
], [
    102,
    129
], [
    129,
    64
], [
    213,
    215
], [
    215,
    138
], [
    138,
    213
], [
    59,
    166
], [
    166,
    219
], [
    219,
    59
], [
    242,
    99
], [
    99,
    97
], [
    97,
    242
], [
    2,
    94
], [
    94,
    141
], [
    141,
    2
], [
    75,
    59
], [
    59,
    235
], [
    235,
    75
], [
    24,
    110
], [
    110,
    228
], [
    228,
    24
], [
    25,
    130
], [
    130,
    226
], [
    226,
    25
], [
    23,
    24
], [
    24,
    229
], [
    229,
    23
], [
    22,
    23
], [
    23,
    230
], [
    230,
    22
], [
    26,
    22
], [
    22,
    231
], [
    231,
    26
], [
    112,
    26
], [
    26,
    232
], [
    232,
    112
], [
    189,
    190
], [
    190,
    243
], [
    243,
    189
], [
    221,
    56
], [
    56,
    190
], [
    190,
    221
], [
    28,
    56
], [
    56,
    221
], [
    221,
    28
], [
    27,
    28
], [
    28,
    222
], [
    222,
    27
], [
    29,
    27
], [
    27,
    223
], [
    223,
    29
], [
    30,
    29
], [
    29,
    224
], [
    224,
    30
], [
    247,
    30
], [
    30,
    225
], [
    225,
    247
], [
    238,
    79
], [
    79,
    20
], [
    20,
    238
], [
    166,
    59
], [
    59,
    75
], [
    75,
    166
], [
    60,
    75
], [
    75,
    240
], [
    240,
    60
], [
    147,
    177
], [
    177,
    215
], [
    215,
    147
], [
    20,
    79
], [
    79,
    166
], [
    166,
    20
], [
    187,
    147
], [
    147,
    213
], [
    213,
    187
], [
    112,
    233
], [
    233,
    244
], [
    244,
    112
], [
    233,
    128
], [
    128,
    245
], [
    245,
    233
], [
    128,
    114
], [
    114,
    188
], [
    188,
    128
], [
    114,
    217
], [
    217,
    174
], [
    174,
    114
], [
    131,
    115
], [
    115,
    220
], [
    220,
    131
], [
    217,
    198
], [
    198,
    236
], [
    236,
    217
], [
    198,
    131
], [
    131,
    134
], [
    134,
    198
], [
    177,
    132
], [
    132,
    58
], [
    58,
    177
], [
    143,
    35
], [
    35,
    124
], [
    124,
    143
], [
    110,
    163
], [
    163,
    7
], [
    7,
    110
], [
    228,
    110
], [
    110,
    25
], [
    25,
    228
], [
    356,
    389
], [
    389,
    368
], [
    368,
    356
], [
    11,
    302
], [
    302,
    267
], [
    267,
    11
], [
    452,
    350
], [
    350,
    349
], [
    349,
    452
], [
    302,
    303
], [
    303,
    269
], [
    269,
    302
], [
    357,
    343
], [
    343,
    277
], [
    277,
    357
], [
    452,
    453
], [
    453,
    357
], [
    357,
    452
], [
    333,
    332
], [
    332,
    297
], [
    297,
    333
], [
    175,
    152
], [
    152,
    377
], [
    377,
    175
], [
    347,
    348
], [
    348,
    330
], [
    330,
    347
], [
    303,
    304
], [
    304,
    270
], [
    270,
    303
], [
    9,
    336
], [
    336,
    337
], [
    337,
    9
], [
    278,
    279
], [
    279,
    360
], [
    360,
    278
], [
    418,
    262
], [
    262,
    431
], [
    431,
    418
], [
    304,
    408
], [
    408,
    409
], [
    409,
    304
], [
    310,
    415
], [
    415,
    407
], [
    407,
    310
], [
    270,
    409
], [
    409,
    410
], [
    410,
    270
], [
    450,
    348
], [
    348,
    347
], [
    347,
    450
], [
    422,
    430
], [
    430,
    434
], [
    434,
    422
], [
    313,
    314
], [
    314,
    17
], [
    17,
    313
], [
    306,
    307
], [
    307,
    375
], [
    375,
    306
], [
    387,
    388
], [
    388,
    260
], [
    260,
    387
], [
    286,
    414
], [
    414,
    398
], [
    398,
    286
], [
    335,
    406
], [
    406,
    418
], [
    418,
    335
], [
    364,
    367
], [
    367,
    416
], [
    416,
    364
], [
    423,
    358
], [
    358,
    327
], [
    327,
    423
], [
    251,
    284
], [
    284,
    298
], [
    298,
    251
], [
    281,
    5
], [
    5,
    4
], [
    4,
    281
], [
    373,
    374
], [
    374,
    253
], [
    253,
    373
], [
    307,
    320
], [
    320,
    321
], [
    321,
    307
], [
    425,
    427
], [
    427,
    411
], [
    411,
    425
], [
    421,
    313
], [
    313,
    18
], [
    18,
    421
], [
    321,
    405
], [
    405,
    406
], [
    406,
    321
], [
    320,
    404
], [
    404,
    405
], [
    405,
    320
], [
    315,
    16
], [
    16,
    17
], [
    17,
    315
], [
    426,
    425
], [
    425,
    266
], [
    266,
    426
], [
    377,
    400
], [
    400,
    369
], [
    369,
    377
], [
    322,
    391
], [
    391,
    269
], [
    269,
    322
], [
    417,
    465
], [
    465,
    464
], [
    464,
    417
], [
    386,
    257
], [
    257,
    258
], [
    258,
    386
], [
    466,
    260
], [
    260,
    388
], [
    388,
    466
], [
    456,
    399
], [
    399,
    419
], [
    419,
    456
], [
    284,
    332
], [
    332,
    333
], [
    333,
    284
], [
    417,
    285
], [
    285,
    8
], [
    8,
    417
], [
    346,
    340
], [
    340,
    261
], [
    261,
    346
], [
    413,
    441
], [
    441,
    285
], [
    285,
    413
], [
    327,
    460
], [
    460,
    328
], [
    328,
    327
], [
    355,
    371
], [
    371,
    329
], [
    329,
    355
], [
    392,
    439
], [
    439,
    438
], [
    438,
    392
], [
    382,
    341
], [
    341,
    256
], [
    256,
    382
], [
    429,
    420
], [
    420,
    360
], [
    360,
    429
], [
    364,
    394
], [
    394,
    379
], [
    379,
    364
], [
    277,
    343
], [
    343,
    437
], [
    437,
    277
], [
    443,
    444
], [
    444,
    283
], [
    283,
    443
], [
    275,
    440
], [
    440,
    363
], [
    363,
    275
], [
    431,
    262
], [
    262,
    369
], [
    369,
    431
], [
    297,
    338
], [
    338,
    337
], [
    337,
    297
], [
    273,
    375
], [
    375,
    321
], [
    321,
    273
], [
    450,
    451
], [
    451,
    349
], [
    349,
    450
], [
    446,
    342
], [
    342,
    467
], [
    467,
    446
], [
    293,
    334
], [
    334,
    282
], [
    282,
    293
], [
    458,
    461
], [
    461,
    462
], [
    462,
    458
], [
    276,
    353
], [
    353,
    383
], [
    383,
    276
], [
    308,
    324
], [
    324,
    325
], [
    325,
    308
], [
    276,
    300
], [
    300,
    293
], [
    293,
    276
], [
    372,
    345
], [
    345,
    447
], [
    447,
    372
], [
    352,
    345
], [
    345,
    340
], [
    340,
    352
], [
    274,
    1
], [
    1,
    19
], [
    19,
    274
], [
    456,
    248
], [
    248,
    281
], [
    281,
    456
], [
    436,
    427
], [
    427,
    425
], [
    425,
    436
], [
    381,
    256
], [
    256,
    252
], [
    252,
    381
], [
    269,
    391
], [
    391,
    393
], [
    393,
    269
], [
    200,
    199
], [
    199,
    428
], [
    428,
    200
], [
    266,
    330
], [
    330,
    329
], [
    329,
    266
], [
    287,
    273
], [
    273,
    422
], [
    422,
    287
], [
    250,
    462
], [
    462,
    328
], [
    328,
    250
], [
    258,
    286
], [
    286,
    384
], [
    384,
    258
], [
    265,
    353
], [
    353,
    342
], [
    342,
    265
], [
    387,
    259
], [
    259,
    257
], [
    257,
    387
], [
    424,
    431
], [
    431,
    430
], [
    430,
    424
], [
    342,
    353
], [
    353,
    276
], [
    276,
    342
], [
    273,
    335
], [
    335,
    424
], [
    424,
    273
], [
    292,
    325
], [
    325,
    307
], [
    307,
    292
], [
    366,
    447
], [
    447,
    345
], [
    345,
    366
], [
    271,
    303
], [
    303,
    302
], [
    302,
    271
], [
    423,
    266
], [
    266,
    371
], [
    371,
    423
], [
    294,
    455
], [
    455,
    460
], [
    460,
    294
], [
    279,
    278
], [
    278,
    294
], [
    294,
    279
], [
    271,
    272
], [
    272,
    304
], [
    304,
    271
], [
    432,
    434
], [
    434,
    427
], [
    427,
    432
], [
    272,
    407
], [
    407,
    408
], [
    408,
    272
], [
    394,
    430
], [
    430,
    431
], [
    431,
    394
], [
    395,
    369
], [
    369,
    400
], [
    400,
    395
], [
    334,
    333
], [
    333,
    299
], [
    299,
    334
], [
    351,
    417
], [
    417,
    168
], [
    168,
    351
], [
    352,
    280
], [
    280,
    411
], [
    411,
    352
], [
    325,
    319
], [
    319,
    320
], [
    320,
    325
], [
    295,
    296
], [
    296,
    336
], [
    336,
    295
], [
    319,
    403
], [
    403,
    404
], [
    404,
    319
], [
    330,
    348
], [
    348,
    349
], [
    349,
    330
], [
    293,
    298
], [
    298,
    333
], [
    333,
    293
], [
    323,
    454
], [
    454,
    447
], [
    447,
    323
], [
    15,
    16
], [
    16,
    315
], [
    315,
    15
], [
    358,
    429
], [
    429,
    279
], [
    279,
    358
], [
    14,
    15
], [
    15,
    316
], [
    316,
    14
], [
    285,
    336
], [
    336,
    9
], [
    9,
    285
], [
    329,
    349
], [
    349,
    350
], [
    350,
    329
], [
    374,
    380
], [
    380,
    252
], [
    252,
    374
], [
    318,
    402
], [
    402,
    403
], [
    403,
    318
], [
    6,
    197
], [
    197,
    419
], [
    419,
    6
], [
    318,
    319
], [
    319,
    325
], [
    325,
    318
], [
    367,
    364
], [
    364,
    365
], [
    365,
    367
], [
    435,
    367
], [
    367,
    397
], [
    397,
    435
], [
    344,
    438
], [
    438,
    439
], [
    439,
    344
], [
    272,
    271
], [
    271,
    311
], [
    311,
    272
], [
    195,
    5
], [
    5,
    281
], [
    281,
    195
], [
    273,
    287
], [
    287,
    291
], [
    291,
    273
], [
    396,
    428
], [
    428,
    199
], [
    199,
    396
], [
    311,
    271
], [
    271,
    268
], [
    268,
    311
], [
    283,
    444
], [
    444,
    445
], [
    445,
    283
], [
    373,
    254
], [
    254,
    339
], [
    339,
    373
], [
    282,
    334
], [
    334,
    296
], [
    296,
    282
], [
    449,
    347
], [
    347,
    346
], [
    346,
    449
], [
    264,
    447
], [
    447,
    454
], [
    454,
    264
], [
    336,
    296
], [
    296,
    299
], [
    299,
    336
], [
    338,
    10
], [
    10,
    151
], [
    151,
    338
], [
    278,
    439
], [
    439,
    455
], [
    455,
    278
], [
    292,
    407
], [
    407,
    415
], [
    415,
    292
], [
    358,
    371
], [
    371,
    355
], [
    355,
    358
], [
    340,
    345
], [
    345,
    372
], [
    372,
    340
], [
    346,
    347
], [
    347,
    280
], [
    280,
    346
], [
    442,
    443
], [
    443,
    282
], [
    282,
    442
], [
    19,
    94
], [
    94,
    370
], [
    370,
    19
], [
    441,
    442
], [
    442,
    295
], [
    295,
    441
], [
    248,
    419
], [
    419,
    197
], [
    197,
    248
], [
    263,
    255
], [
    255,
    359
], [
    359,
    263
], [
    440,
    275
], [
    275,
    274
], [
    274,
    440
], [
    300,
    383
], [
    383,
    368
], [
    368,
    300
], [
    351,
    412
], [
    412,
    465
], [
    465,
    351
], [
    263,
    467
], [
    467,
    466
], [
    466,
    263
], [
    301,
    368
], [
    368,
    389
], [
    389,
    301
], [
    395,
    378
], [
    378,
    379
], [
    379,
    395
], [
    412,
    351
], [
    351,
    419
], [
    419,
    412
], [
    436,
    426
], [
    426,
    322
], [
    322,
    436
], [
    2,
    164
], [
    164,
    393
], [
    393,
    2
], [
    370,
    462
], [
    462,
    461
], [
    461,
    370
], [
    164,
    0
], [
    0,
    267
], [
    267,
    164
], [
    302,
    11
], [
    11,
    12
], [
    12,
    302
], [
    268,
    12
], [
    12,
    13
], [
    13,
    268
], [
    293,
    300
], [
    300,
    301
], [
    301,
    293
], [
    446,
    261
], [
    261,
    340
], [
    340,
    446
], [
    330,
    266
], [
    266,
    425
], [
    425,
    330
], [
    426,
    423
], [
    423,
    391
], [
    391,
    426
], [
    429,
    355
], [
    355,
    437
], [
    437,
    429
], [
    391,
    327
], [
    327,
    326
], [
    326,
    391
], [
    440,
    457
], [
    457,
    438
], [
    438,
    440
], [
    341,
    382
], [
    382,
    362
], [
    362,
    341
], [
    459,
    457
], [
    457,
    461
], [
    461,
    459
], [
    434,
    430
], [
    430,
    394
], [
    394,
    434
], [
    414,
    463
], [
    463,
    362
], [
    362,
    414
], [
    396,
    369
], [
    369,
    262
], [
    262,
    396
], [
    354,
    461
], [
    461,
    457
], [
    457,
    354
], [
    316,
    403
], [
    403,
    402
], [
    402,
    316
], [
    315,
    404
], [
    404,
    403
], [
    403,
    315
], [
    314,
    405
], [
    405,
    404
], [
    404,
    314
], [
    313,
    406
], [
    406,
    405
], [
    405,
    313
], [
    421,
    418
], [
    418,
    406
], [
    406,
    421
], [
    366,
    401
], [
    401,
    361
], [
    361,
    366
], [
    306,
    408
], [
    408,
    407
], [
    407,
    306
], [
    291,
    409
], [
    409,
    408
], [
    408,
    291
], [
    287,
    410
], [
    410,
    409
], [
    409,
    287
], [
    432,
    436
], [
    436,
    410
], [
    410,
    432
], [
    434,
    416
], [
    416,
    411
], [
    411,
    434
], [
    264,
    368
], [
    368,
    383
], [
    383,
    264
], [
    309,
    438
], [
    438,
    457
], [
    457,
    309
], [
    352,
    376
], [
    376,
    401
], [
    401,
    352
], [
    274,
    275
], [
    275,
    4
], [
    4,
    274
], [
    421,
    428
], [
    428,
    262
], [
    262,
    421
], [
    294,
    327
], [
    327,
    358
], [
    358,
    294
], [
    433,
    416
], [
    416,
    367
], [
    367,
    433
], [
    289,
    455
], [
    455,
    439
], [
    439,
    289
], [
    462,
    370
], [
    370,
    326
], [
    326,
    462
], [
    2,
    326
], [
    326,
    370
], [
    370,
    2
], [
    305,
    460
], [
    460,
    455
], [
    455,
    305
], [
    254,
    449
], [
    449,
    448
], [
    448,
    254
], [
    255,
    261
], [
    261,
    446
], [
    446,
    255
], [
    253,
    450
], [
    450,
    449
], [
    449,
    253
], [
    252,
    451
], [
    451,
    450
], [
    450,
    252
], [
    256,
    452
], [
    452,
    451
], [
    451,
    256
], [
    341,
    453
], [
    453,
    452
], [
    452,
    341
], [
    413,
    464
], [
    464,
    463
], [
    463,
    413
], [
    441,
    413
], [
    413,
    414
], [
    414,
    441
], [
    258,
    442
], [
    442,
    441
], [
    441,
    258
], [
    257,
    443
], [
    443,
    442
], [
    442,
    257
], [
    259,
    444
], [
    444,
    443
], [
    443,
    259
], [
    260,
    445
], [
    445,
    444
], [
    444,
    260
], [
    467,
    342
], [
    342,
    445
], [
    445,
    467
], [
    459,
    458
], [
    458,
    250
], [
    250,
    459
], [
    289,
    392
], [
    392,
    290
], [
    290,
    289
], [
    290,
    328
], [
    328,
    460
], [
    460,
    290
], [
    376,
    433
], [
    433,
    435
], [
    435,
    376
], [
    250,
    290
], [
    290,
    392
], [
    392,
    250
], [
    411,
    416
], [
    416,
    433
], [
    433,
    411
], [
    341,
    463
], [
    463,
    464
], [
    464,
    341
], [
    453,
    464
], [
    464,
    465
], [
    465,
    453
], [
    357,
    465
], [
    465,
    412
], [
    412,
    357
], [
    343,
    412
], [
    412,
    399
], [
    399,
    343
], [
    360,
    363
], [
    363,
    440
], [
    440,
    360
], [
    437,
    399
], [
    399,
    456
], [
    456,
    437
], [
    420,
    456
], [
    456,
    363
], [
    363,
    420
], [
    401,
    435
], [
    435,
    288
], [
    288,
    401
], [
    372,
    383
], [
    383,
    353
], [
    353,
    372
], [
    339,
    255
], [
    255,
    249
], [
    249,
    339
], [
    448,
    261
], [
    261,
    255
], [
    255,
    448
], [
    133,
    243
], [
    243,
    190
], [
    190,
    133
], [
    133,
    155
], [
    155,
    112
], [
    112,
    133
], [
    33,
    246
], [
    246,
    247
], [
    247,
    33
], [
    33,
    130
], [
    130,
    25
], [
    25,
    33
], [
    398,
    384
], [
    384,
    286
], [
    286,
    398
], [
    362,
    398
], [
    398,
    414
], [
    414,
    362
], [
    362,
    463
], [
    463,
    341
], [
    341,
    362
], [
    263,
    359
], [
    359,
    467
], [
    467,
    263
], [
    263,
    249
], [
    249,
    255
], [
    255,
    263
], [
    466,
    467
], [
    467,
    260
], [
    260,
    466
], [
    75,
    60
], [
    60,
    166
], [
    166,
    75
], [
    238,
    239
], [
    239,
    79
], [
    79,
    238
], [
    162,
    127
], [
    127,
    139
], [
    139,
    162
], [
    72,
    11
], [
    11,
    37
], [
    37,
    72
], [
    121,
    232
], [
    232,
    120
], [
    120,
    121
], [
    73,
    72
], [
    72,
    39
], [
    39,
    73
], [
    114,
    128
], [
    128,
    47
], [
    47,
    114
], [
    233,
    232
], [
    232,
    128
], [
    128,
    233
], [
    103,
    104
], [
    104,
    67
], [
    67,
    103
], [
    152,
    175
], [
    175,
    148
], [
    148,
    152
], [
    119,
    118
], [
    118,
    101
], [
    101,
    119
], [
    74,
    73
], [
    73,
    40
], [
    40,
    74
], [
    107,
    9
], [
    9,
    108
], [
    108,
    107
], [
    49,
    48
], [
    48,
    131
], [
    131,
    49
], [
    32,
    194
], [
    194,
    211
], [
    211,
    32
], [
    184,
    74
], [
    74,
    185
], [
    185,
    184
], [
    191,
    80
], [
    80,
    183
], [
    183,
    191
], [
    185,
    40
], [
    40,
    186
], [
    186,
    185
], [
    119,
    230
], [
    230,
    118
], [
    118,
    119
], [
    210,
    202
], [
    202,
    214
], [
    214,
    210
], [
    84,
    83
], [
    83,
    17
], [
    17,
    84
], [
    77,
    76
], [
    76,
    146
], [
    146,
    77
], [
    161,
    160
], [
    160,
    30
], [
    30,
    161
], [
    190,
    56
], [
    56,
    173
], [
    173,
    190
], [
    182,
    106
], [
    106,
    194
], [
    194,
    182
], [
    138,
    135
], [
    135,
    192
], [
    192,
    138
], [
    129,
    203
], [
    203,
    98
], [
    98,
    129
], [
    54,
    21
], [
    21,
    68
], [
    68,
    54
], [
    5,
    51
], [
    51,
    4
], [
    4,
    5
], [
    145,
    144
], [
    144,
    23
], [
    23,
    145
], [
    90,
    77
], [
    77,
    91
], [
    91,
    90
], [
    207,
    205
], [
    205,
    187
], [
    187,
    207
], [
    83,
    201
], [
    201,
    18
], [
    18,
    83
], [
    181,
    91
], [
    91,
    182
], [
    182,
    181
], [
    180,
    90
], [
    90,
    181
], [
    181,
    180
], [
    16,
    85
], [
    85,
    17
], [
    17,
    16
], [
    205,
    206
], [
    206,
    36
], [
    36,
    205
], [
    176,
    148
], [
    148,
    140
], [
    140,
    176
], [
    165,
    92
], [
    92,
    39
], [
    39,
    165
], [
    245,
    193
], [
    193,
    244
], [
    244,
    245
], [
    27,
    159
], [
    159,
    28
], [
    28,
    27
], [
    30,
    247
], [
    247,
    161
], [
    161,
    30
], [
    174,
    236
], [
    236,
    196
], [
    196,
    174
], [
    103,
    54
], [
    54,
    104
], [
    104,
    103
], [
    55,
    193
], [
    193,
    8
], [
    8,
    55
], [
    111,
    117
], [
    117,
    31
], [
    31,
    111
], [
    221,
    189
], [
    189,
    55
], [
    55,
    221
], [
    240,
    98
], [
    98,
    99
], [
    99,
    240
], [
    142,
    126
], [
    126,
    100
], [
    100,
    142
], [
    219,
    166
], [
    166,
    218
], [
    218,
    219
], [
    112,
    155
], [
    155,
    26
], [
    26,
    112
], [
    198,
    209
], [
    209,
    131
], [
    131,
    198
], [
    169,
    135
], [
    135,
    150
], [
    150,
    169
], [
    114,
    47
], [
    47,
    217
], [
    217,
    114
], [
    224,
    223
], [
    223,
    53
], [
    53,
    224
], [
    220,
    45
], [
    45,
    134
], [
    134,
    220
], [
    32,
    211
], [
    211,
    140
], [
    140,
    32
], [
    109,
    67
], [
    67,
    108
], [
    108,
    109
], [
    146,
    43
], [
    43,
    91
], [
    91,
    146
], [
    231,
    230
], [
    230,
    120
], [
    120,
    231
], [
    113,
    226
], [
    226,
    247
], [
    247,
    113
], [
    105,
    63
], [
    63,
    52
], [
    52,
    105
], [
    241,
    238
], [
    238,
    242
], [
    242,
    241
], [
    124,
    46
], [
    46,
    156
], [
    156,
    124
], [
    95,
    78
], [
    78,
    96
], [
    96,
    95
], [
    70,
    46
], [
    46,
    63
], [
    63,
    70
], [
    116,
    143
], [
    143,
    227
], [
    227,
    116
], [
    116,
    123
], [
    123,
    111
], [
    111,
    116
], [
    1,
    44
], [
    44,
    19
], [
    19,
    1
], [
    3,
    236
], [
    236,
    51
], [
    51,
    3
], [
    207,
    216
], [
    216,
    205
], [
    205,
    207
], [
    26,
    154
], [
    154,
    22
], [
    22,
    26
], [
    165,
    39
], [
    39,
    167
], [
    167,
    165
], [
    199,
    200
], [
    200,
    208
], [
    208,
    199
], [
    101,
    36
], [
    36,
    100
], [
    100,
    101
], [
    43,
    57
], [
    57,
    202
], [
    202,
    43
], [
    242,
    20
], [
    20,
    99
], [
    99,
    242
], [
    56,
    28
], [
    28,
    157
], [
    157,
    56
], [
    124,
    35
], [
    35,
    113
], [
    113,
    124
], [
    29,
    160
], [
    160,
    27
], [
    27,
    29
], [
    211,
    204
], [
    204,
    210
], [
    210,
    211
], [
    124,
    113
], [
    113,
    46
], [
    46,
    124
], [
    106,
    43
], [
    43,
    204
], [
    204,
    106
], [
    96,
    62
], [
    62,
    77
], [
    77,
    96
], [
    227,
    137
], [
    137,
    116
], [
    116,
    227
], [
    73,
    41
], [
    41,
    72
], [
    72,
    73
], [
    36,
    203
], [
    203,
    142
], [
    142,
    36
], [
    235,
    64
], [
    64,
    240
], [
    240,
    235
], [
    48,
    49
], [
    49,
    64
], [
    64,
    48
], [
    42,
    41
], [
    41,
    74
], [
    74,
    42
], [
    214,
    212
], [
    212,
    207
], [
    207,
    214
], [
    183,
    42
], [
    42,
    184
], [
    184,
    183
], [
    210,
    169
], [
    169,
    211
], [
    211,
    210
], [
    140,
    170
], [
    170,
    176
], [
    176,
    140
], [
    104,
    105
], [
    105,
    69
], [
    69,
    104
], [
    193,
    122
], [
    122,
    168
], [
    168,
    193
], [
    50,
    123
], [
    123,
    187
], [
    187,
    50
], [
    89,
    96
], [
    96,
    90
], [
    90,
    89
], [
    66,
    65
], [
    65,
    107
], [
    107,
    66
], [
    179,
    89
], [
    89,
    180
], [
    180,
    179
], [
    119,
    101
], [
    101,
    120
], [
    120,
    119
], [
    68,
    63
], [
    63,
    104
], [
    104,
    68
], [
    234,
    93
], [
    93,
    227
], [
    227,
    234
], [
    16,
    15
], [
    15,
    85
], [
    85,
    16
], [
    209,
    129
], [
    129,
    49
], [
    49,
    209
], [
    15,
    14
], [
    14,
    86
], [
    86,
    15
], [
    107,
    55
], [
    55,
    9
], [
    9,
    107
], [
    120,
    100
], [
    100,
    121
], [
    121,
    120
], [
    153,
    145
], [
    145,
    22
], [
    22,
    153
], [
    178,
    88
], [
    88,
    179
], [
    179,
    178
], [
    197,
    6
], [
    6,
    196
], [
    196,
    197
], [
    89,
    88
], [
    88,
    96
], [
    96,
    89
], [
    135,
    138
], [
    138,
    136
], [
    136,
    135
], [
    138,
    215
], [
    215,
    172
], [
    172,
    138
], [
    218,
    115
], [
    115,
    219
], [
    219,
    218
], [
    41,
    42
], [
    42,
    81
], [
    81,
    41
], [
    5,
    195
], [
    195,
    51
], [
    51,
    5
], [
    57,
    43
], [
    43,
    61
], [
    61,
    57
], [
    208,
    171
], [
    171,
    199
], [
    199,
    208
], [
    41,
    81
], [
    81,
    38
], [
    38,
    41
], [
    224,
    53
], [
    53,
    225
], [
    225,
    224
], [
    24,
    144
], [
    144,
    110
], [
    110,
    24
], [
    105,
    52
], [
    52,
    66
], [
    66,
    105
], [
    118,
    229
], [
    229,
    117
], [
    117,
    118
], [
    227,
    34
], [
    34,
    234
], [
    234,
    227
], [
    66,
    107
], [
    107,
    69
], [
    69,
    66
], [
    10,
    109
], [
    109,
    151
], [
    151,
    10
], [
    219,
    48
], [
    48,
    235
], [
    235,
    219
], [
    183,
    62
], [
    62,
    191
], [
    191,
    183
], [
    142,
    129
], [
    129,
    126
], [
    126,
    142
], [
    116,
    111
], [
    111,
    143
], [
    143,
    116
], [
    118,
    117
], [
    117,
    50
], [
    50,
    118
], [
    223,
    222
], [
    222,
    52
], [
    52,
    223
], [
    94,
    19
], [
    19,
    141
], [
    141,
    94
], [
    222,
    221
], [
    221,
    65
], [
    65,
    222
], [
    196,
    3
], [
    3,
    197
], [
    197,
    196
], [
    45,
    220
], [
    220,
    44
], [
    44,
    45
], [
    156,
    70
], [
    70,
    139
], [
    139,
    156
], [
    188,
    122
], [
    122,
    245
], [
    245,
    188
], [
    139,
    71
], [
    71,
    162
], [
    162,
    139
], [
    149,
    170
], [
    170,
    150
], [
    150,
    149
], [
    122,
    188
], [
    188,
    196
], [
    196,
    122
], [
    206,
    216
], [
    216,
    92
], [
    92,
    206
], [
    164,
    2
], [
    2,
    167
], [
    167,
    164
], [
    242,
    141
], [
    141,
    241
], [
    241,
    242
], [
    0,
    164
], [
    164,
    37
], [
    37,
    0
], [
    11,
    72
], [
    72,
    12
], [
    12,
    11
], [
    12,
    38
], [
    38,
    13
], [
    13,
    12
], [
    70,
    63
], [
    63,
    71
], [
    71,
    70
], [
    31,
    226
], [
    226,
    111
], [
    111,
    31
], [
    36,
    101
], [
    101,
    205
], [
    205,
    36
], [
    203,
    206
], [
    206,
    165
], [
    165,
    203
], [
    126,
    209
], [
    209,
    217
], [
    217,
    126
], [
    98,
    165
], [
    165,
    97
], [
    97,
    98
], [
    237,
    220
], [
    220,
    218
], [
    218,
    237
], [
    237,
    239
], [
    239,
    241
], [
    241,
    237
], [
    210,
    214
], [
    214,
    169
], [
    169,
    210
], [
    140,
    171
], [
    171,
    32
], [
    32,
    140
], [
    241,
    125
], [
    125,
    237
], [
    237,
    241
], [
    179,
    86
], [
    86,
    178
], [
    178,
    179
], [
    180,
    85
], [
    85,
    179
], [
    179,
    180
], [
    181,
    84
], [
    84,
    180
], [
    180,
    181
], [
    182,
    83
], [
    83,
    181
], [
    181,
    182
], [
    194,
    201
], [
    201,
    182
], [
    182,
    194
], [
    177,
    137
], [
    137,
    132
], [
    132,
    177
], [
    184,
    76
], [
    76,
    183
], [
    183,
    184
], [
    185,
    61
], [
    61,
    184
], [
    184,
    185
], [
    186,
    57
], [
    57,
    185
], [
    185,
    186
], [
    216,
    212
], [
    212,
    186
], [
    186,
    216
], [
    192,
    214
], [
    214,
    187
], [
    187,
    192
], [
    139,
    34
], [
    34,
    156
], [
    156,
    139
], [
    218,
    79
], [
    79,
    237
], [
    237,
    218
], [
    147,
    123
], [
    123,
    177
], [
    177,
    147
], [
    45,
    44
], [
    44,
    4
], [
    4,
    45
], [
    208,
    201
], [
    201,
    32
], [
    32,
    208
], [
    98,
    64
], [
    64,
    129
], [
    129,
    98
], [
    192,
    213
], [
    213,
    138
], [
    138,
    192
], [
    235,
    59
], [
    59,
    219
], [
    219,
    235
], [
    141,
    242
], [
    242,
    97
], [
    97,
    141
], [
    97,
    2
], [
    2,
    141
], [
    141,
    97
], [
    240,
    75
], [
    75,
    235
], [
    235,
    240
], [
    229,
    24
], [
    24,
    228
], [
    228,
    229
], [
    31,
    25
], [
    25,
    226
], [
    226,
    31
], [
    230,
    23
], [
    23,
    229
], [
    229,
    230
], [
    231,
    22
], [
    22,
    230
], [
    230,
    231
], [
    232,
    26
], [
    26,
    231
], [
    231,
    232
], [
    233,
    112
], [
    112,
    232
], [
    232,
    233
], [
    244,
    189
], [
    189,
    243
], [
    243,
    244
], [
    189,
    221
], [
    221,
    190
], [
    190,
    189
], [
    222,
    28
], [
    28,
    221
], [
    221,
    222
], [
    223,
    27
], [
    27,
    222
], [
    222,
    223
], [
    224,
    29
], [
    29,
    223
], [
    223,
    224
], [
    225,
    30
], [
    30,
    224
], [
    224,
    225
], [
    113,
    247
], [
    247,
    225
], [
    225,
    113
], [
    99,
    60
], [
    60,
    240
], [
    240,
    99
], [
    213,
    147
], [
    147,
    215
], [
    215,
    213
], [
    60,
    20
], [
    20,
    166
], [
    166,
    60
], [
    192,
    187
], [
    187,
    213
], [
    213,
    192
], [
    243,
    112
], [
    112,
    244
], [
    244,
    243
], [
    244,
    233
], [
    233,
    245
], [
    245,
    244
], [
    245,
    128
], [
    128,
    188
], [
    188,
    245
], [
    188,
    114
], [
    114,
    174
], [
    174,
    188
], [
    134,
    131
], [
    131,
    220
], [
    220,
    134
], [
    174,
    217
], [
    217,
    236
], [
    236,
    174
], [
    236,
    198
], [
    198,
    134
], [
    134,
    236
], [
    215,
    177
], [
    177,
    58
], [
    58,
    215
], [
    156,
    143
], [
    143,
    124
], [
    124,
    156
], [
    25,
    110
], [
    110,
    7
], [
    7,
    25
], [
    31,
    228
], [
    228,
    25
], [
    25,
    31
], [
    264,
    356
], [
    356,
    368
], [
    368,
    264
], [
    0,
    11
], [
    11,
    267
], [
    267,
    0
], [
    451,
    452
], [
    452,
    349
], [
    349,
    451
], [
    267,
    302
], [
    302,
    269
], [
    269,
    267
], [
    350,
    357
], [
    357,
    277
], [
    277,
    350
], [
    350,
    452
], [
    452,
    357
], [
    357,
    350
], [
    299,
    333
], [
    333,
    297
], [
    297,
    299
], [
    396,
    175
], [
    175,
    377
], [
    377,
    396
], [
    280,
    347
], [
    347,
    330
], [
    330,
    280
], [
    269,
    303
], [
    303,
    270
], [
    270,
    269
], [
    151,
    9
], [
    9,
    337
], [
    337,
    151
], [
    344,
    278
], [
    278,
    360
], [
    360,
    344
], [
    424,
    418
], [
    418,
    431
], [
    431,
    424
], [
    270,
    304
], [
    304,
    409
], [
    409,
    270
], [
    272,
    310
], [
    310,
    407
], [
    407,
    272
], [
    322,
    270
], [
    270,
    410
], [
    410,
    322
], [
    449,
    450
], [
    450,
    347
], [
    347,
    449
], [
    432,
    422
], [
    422,
    434
], [
    434,
    432
], [
    18,
    313
], [
    313,
    17
], [
    17,
    18
], [
    291,
    306
], [
    306,
    375
], [
    375,
    291
], [
    259,
    387
], [
    387,
    260
], [
    260,
    259
], [
    424,
    335
], [
    335,
    418
], [
    418,
    424
], [
    434,
    364
], [
    364,
    416
], [
    416,
    434
], [
    391,
    423
], [
    423,
    327
], [
    327,
    391
], [
    301,
    251
], [
    251,
    298
], [
    298,
    301
], [
    275,
    281
], [
    281,
    4
], [
    4,
    275
], [
    254,
    373
], [
    373,
    253
], [
    253,
    254
], [
    375,
    307
], [
    307,
    321
], [
    321,
    375
], [
    280,
    425
], [
    425,
    411
], [
    411,
    280
], [
    200,
    421
], [
    421,
    18
], [
    18,
    200
], [
    335,
    321
], [
    321,
    406
], [
    406,
    335
], [
    321,
    320
], [
    320,
    405
], [
    405,
    321
], [
    314,
    315
], [
    315,
    17
], [
    17,
    314
], [
    423,
    426
], [
    426,
    266
], [
    266,
    423
], [
    396,
    377
], [
    377,
    369
], [
    369,
    396
], [
    270,
    322
], [
    322,
    269
], [
    269,
    270
], [
    413,
    417
], [
    417,
    464
], [
    464,
    413
], [
    385,
    386
], [
    386,
    258
], [
    258,
    385
], [
    248,
    456
], [
    456,
    419
], [
    419,
    248
], [
    298,
    284
], [
    284,
    333
], [
    333,
    298
], [
    168,
    417
], [
    417,
    8
], [
    8,
    168
], [
    448,
    346
], [
    346,
    261
], [
    261,
    448
], [
    417,
    413
], [
    413,
    285
], [
    285,
    417
], [
    326,
    327
], [
    327,
    328
], [
    328,
    326
], [
    277,
    355
], [
    355,
    329
], [
    329,
    277
], [
    309,
    392
], [
    392,
    438
], [
    438,
    309
], [
    381,
    382
], [
    382,
    256
], [
    256,
    381
], [
    279,
    429
], [
    429,
    360
], [
    360,
    279
], [
    365,
    364
], [
    364,
    379
], [
    379,
    365
], [
    355,
    277
], [
    277,
    437
], [
    437,
    355
], [
    282,
    443
], [
    443,
    283
], [
    283,
    282
], [
    281,
    275
], [
    275,
    363
], [
    363,
    281
], [
    395,
    431
], [
    431,
    369
], [
    369,
    395
], [
    299,
    297
], [
    297,
    337
], [
    337,
    299
], [
    335,
    273
], [
    273,
    321
], [
    321,
    335
], [
    348,
    450
], [
    450,
    349
], [
    349,
    348
], [
    359,
    446
], [
    446,
    467
], [
    467,
    359
], [
    283,
    293
], [
    293,
    282
], [
    282,
    283
], [
    250,
    458
], [
    458,
    462
], [
    462,
    250
], [
    300,
    276
], [
    276,
    383
], [
    383,
    300
], [
    292,
    308
], [
    308,
    325
], [
    325,
    292
], [
    283,
    276
], [
    276,
    293
], [
    293,
    283
], [
    264,
    372
], [
    372,
    447
], [
    447,
    264
], [
    346,
    352
], [
    352,
    340
], [
    340,
    346
], [
    354,
    274
], [
    274,
    19
], [
    19,
    354
], [
    363,
    456
], [
    456,
    281
], [
    281,
    363
], [
    426,
    436
], [
    436,
    425
], [
    425,
    426
], [
    380,
    381
], [
    381,
    252
], [
    252,
    380
], [
    267,
    269
], [
    269,
    393
], [
    393,
    267
], [
    421,
    200
], [
    200,
    428
], [
    428,
    421
], [
    371,
    266
], [
    266,
    329
], [
    329,
    371
], [
    432,
    287
], [
    287,
    422
], [
    422,
    432
], [
    290,
    250
], [
    250,
    328
], [
    328,
    290
], [
    385,
    258
], [
    258,
    384
], [
    384,
    385
], [
    446,
    265
], [
    265,
    342
], [
    342,
    446
], [
    386,
    387
], [
    387,
    257
], [
    257,
    386
], [
    422,
    424
], [
    424,
    430
], [
    430,
    422
], [
    445,
    342
], [
    342,
    276
], [
    276,
    445
], [
    422,
    273
], [
    273,
    424
], [
    424,
    422
], [
    306,
    292
], [
    292,
    307
], [
    307,
    306
], [
    352,
    366
], [
    366,
    345
], [
    345,
    352
], [
    268,
    271
], [
    271,
    302
], [
    302,
    268
], [
    358,
    423
], [
    423,
    371
], [
    371,
    358
], [
    327,
    294
], [
    294,
    460
], [
    460,
    327
], [
    331,
    279
], [
    279,
    294
], [
    294,
    331
], [
    303,
    271
], [
    271,
    304
], [
    304,
    303
], [
    436,
    432
], [
    432,
    427
], [
    427,
    436
], [
    304,
    272
], [
    272,
    408
], [
    408,
    304
], [
    395,
    394
], [
    394,
    431
], [
    431,
    395
], [
    378,
    395
], [
    395,
    400
], [
    400,
    378
], [
    296,
    334
], [
    334,
    299
], [
    299,
    296
], [
    6,
    351
], [
    351,
    168
], [
    168,
    6
], [
    376,
    352
], [
    352,
    411
], [
    411,
    376
], [
    307,
    325
], [
    325,
    320
], [
    320,
    307
], [
    285,
    295
], [
    295,
    336
], [
    336,
    285
], [
    320,
    319
], [
    319,
    404
], [
    404,
    320
], [
    329,
    330
], [
    330,
    349
], [
    349,
    329
], [
    334,
    293
], [
    293,
    333
], [
    333,
    334
], [
    366,
    323
], [
    323,
    447
], [
    447,
    366
], [
    316,
    15
], [
    15,
    315
], [
    315,
    316
], [
    331,
    358
], [
    358,
    279
], [
    279,
    331
], [
    317,
    14
], [
    14,
    316
], [
    316,
    317
], [
    8,
    285
], [
    285,
    9
], [
    9,
    8
], [
    277,
    329
], [
    329,
    350
], [
    350,
    277
], [
    253,
    374
], [
    374,
    252
], [
    252,
    253
], [
    319,
    318
], [
    318,
    403
], [
    403,
    319
], [
    351,
    6
], [
    6,
    419
], [
    419,
    351
], [
    324,
    318
], [
    318,
    325
], [
    325,
    324
], [
    397,
    367
], [
    367,
    365
], [
    365,
    397
], [
    288,
    435
], [
    435,
    397
], [
    397,
    288
], [
    278,
    344
], [
    344,
    439
], [
    439,
    278
], [
    310,
    272
], [
    272,
    311
], [
    311,
    310
], [
    248,
    195
], [
    195,
    281
], [
    281,
    248
], [
    375,
    273
], [
    273,
    291
], [
    291,
    375
], [
    175,
    396
], [
    396,
    199
], [
    199,
    175
], [
    312,
    311
], [
    311,
    268
], [
    268,
    312
], [
    276,
    283
], [
    283,
    445
], [
    445,
    276
], [
    390,
    373
], [
    373,
    339
], [
    339,
    390
], [
    295,
    282
], [
    282,
    296
], [
    296,
    295
], [
    448,
    449
], [
    449,
    346
], [
    346,
    448
], [
    356,
    264
], [
    264,
    454
], [
    454,
    356
], [
    337,
    336
], [
    336,
    299
], [
    299,
    337
], [
    337,
    338
], [
    338,
    151
], [
    151,
    337
], [
    294,
    278
], [
    278,
    455
], [
    455,
    294
], [
    308,
    292
], [
    292,
    415
], [
    415,
    308
], [
    429,
    358
], [
    358,
    355
], [
    355,
    429
], [
    265,
    340
], [
    340,
    372
], [
    372,
    265
], [
    352,
    346
], [
    346,
    280
], [
    280,
    352
], [
    295,
    442
], [
    442,
    282
], [
    282,
    295
], [
    354,
    19
], [
    19,
    370
], [
    370,
    354
], [
    285,
    441
], [
    441,
    295
], [
    295,
    285
], [
    195,
    248
], [
    248,
    197
], [
    197,
    195
], [
    457,
    440
], [
    440,
    274
], [
    274,
    457
], [
    301,
    300
], [
    300,
    368
], [
    368,
    301
], [
    417,
    351
], [
    351,
    465
], [
    465,
    417
], [
    251,
    301
], [
    301,
    389
], [
    389,
    251
], [
    394,
    395
], [
    395,
    379
], [
    379,
    394
], [
    399,
    412
], [
    412,
    419
], [
    419,
    399
], [
    410,
    436
], [
    436,
    322
], [
    322,
    410
], [
    326,
    2
], [
    2,
    393
], [
    393,
    326
], [
    354,
    370
], [
    370,
    461
], [
    461,
    354
], [
    393,
    164
], [
    164,
    267
], [
    267,
    393
], [
    268,
    302
], [
    302,
    12
], [
    12,
    268
], [
    312,
    268
], [
    268,
    13
], [
    13,
    312
], [
    298,
    293
], [
    293,
    301
], [
    301,
    298
], [
    265,
    446
], [
    446,
    340
], [
    340,
    265
], [
    280,
    330
], [
    330,
    425
], [
    425,
    280
], [
    322,
    426
], [
    426,
    391
], [
    391,
    322
], [
    420,
    429
], [
    429,
    437
], [
    437,
    420
], [
    393,
    391
], [
    391,
    326
], [
    326,
    393
], [
    344,
    440
], [
    440,
    438
], [
    438,
    344
], [
    458,
    459
], [
    459,
    461
], [
    461,
    458
], [
    364,
    434
], [
    434,
    394
], [
    394,
    364
], [
    428,
    396
], [
    396,
    262
], [
    262,
    428
], [
    274,
    354
], [
    354,
    457
], [
    457,
    274
], [
    317,
    316
], [
    316,
    402
], [
    402,
    317
], [
    316,
    315
], [
    315,
    403
], [
    403,
    316
], [
    315,
    314
], [
    314,
    404
], [
    404,
    315
], [
    314,
    313
], [
    313,
    405
], [
    405,
    314
], [
    313,
    421
], [
    421,
    406
], [
    406,
    313
], [
    323,
    366
], [
    366,
    361
], [
    361,
    323
], [
    292,
    306
], [
    306,
    407
], [
    407,
    292
], [
    306,
    291
], [
    291,
    408
], [
    408,
    306
], [
    291,
    287
], [
    287,
    409
], [
    409,
    291
], [
    287,
    432
], [
    432,
    410
], [
    410,
    287
], [
    427,
    434
], [
    434,
    411
], [
    411,
    427
], [
    372,
    264
], [
    264,
    383
], [
    383,
    372
], [
    459,
    309
], [
    309,
    457
], [
    457,
    459
], [
    366,
    352
], [
    352,
    401
], [
    401,
    366
], [
    1,
    274
], [
    274,
    4
], [
    4,
    1
], [
    418,
    421
], [
    421,
    262
], [
    262,
    418
], [
    331,
    294
], [
    294,
    358
], [
    358,
    331
], [
    435,
    433
], [
    433,
    367
], [
    367,
    435
], [
    392,
    289
], [
    289,
    439
], [
    439,
    392
], [
    328,
    462
], [
    462,
    326
], [
    326,
    328
], [
    94,
    2
], [
    2,
    370
], [
    370,
    94
], [
    289,
    305
], [
    305,
    455
], [
    455,
    289
], [
    339,
    254
], [
    254,
    448
], [
    448,
    339
], [
    359,
    255
], [
    255,
    446
], [
    446,
    359
], [
    254,
    253
], [
    253,
    449
], [
    449,
    254
], [
    253,
    252
], [
    252,
    450
], [
    450,
    253
], [
    252,
    256
], [
    256,
    451
], [
    451,
    252
], [
    256,
    341
], [
    341,
    452
], [
    452,
    256
], [
    414,
    413
], [
    413,
    463
], [
    463,
    414
], [
    286,
    441
], [
    441,
    414
], [
    414,
    286
], [
    286,
    258
], [
    258,
    441
], [
    441,
    286
], [
    258,
    257
], [
    257,
    442
], [
    442,
    258
], [
    257,
    259
], [
    259,
    443
], [
    443,
    257
], [
    259,
    260
], [
    260,
    444
], [
    444,
    259
], [
    260,
    467
], [
    467,
    445
], [
    445,
    260
], [
    309,
    459
], [
    459,
    250
], [
    250,
    309
], [
    305,
    289
], [
    289,
    290
], [
    290,
    305
], [
    305,
    290
], [
    290,
    460
], [
    460,
    305
], [
    401,
    376
], [
    376,
    435
], [
    435,
    401
], [
    309,
    250
], [
    250,
    392
], [
    392,
    309
], [
    376,
    411
], [
    411,
    433
], [
    433,
    376
], [
    453,
    341
], [
    341,
    464
], [
    464,
    453
], [
    357,
    453
], [
    453,
    465
], [
    465,
    357
], [
    343,
    357
], [
    357,
    412
], [
    412,
    343
], [
    437,
    343
], [
    343,
    399
], [
    399,
    437
], [
    344,
    360
], [
    360,
    440
], [
    440,
    344
], [
    420,
    437
], [
    437,
    456
], [
    456,
    420
], [
    360,
    420
], [
    420,
    363
], [
    363,
    360
], [
    361,
    401
], [
    401,
    288
], [
    288,
    361
], [
    265,
    372
], [
    372,
    353
], [
    353,
    265
], [
    390,
    339
], [
    339,
    249
], [
    249,
    390
], [
    339,
    448
], [
    448,
    255
], [
    255,
    339
]);
function kc(t) {
    t.j = {
        faceLandmarks: [],
        faceBlendshapes: [],
        facialTransformationMatrixes: []
    };
}
var Sc = class extends dc {
    constructor(t, e){
        super(new ac(t, e), "image_in", "norm_rect", !1), this.j = {
            faceLandmarks: [],
            faceBlendshapes: [],
            facialTransformationMatrixes: []
        }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = !1, wn(t = this.h = new Js, 0, 1, e = new Xs), this.A = new $s, wn(this.h, 0, 3, this.A), this.u = new zs, wn(this.h, 0, 2, this.u), xn(this.u, 4, 1), Ln(this.u, 2, .5), Ln(this.A, 2, .5), Ln(this.h, 4, .5);
    }
    get baseOptions() {
        return yn(this.h, Xs, 1);
    }
    set baseOptions(t) {
        wn(this.h, 0, 1, t);
    }
    o(t) {
        return "numFaces" in t && xn(this.u, 4, t.numFaces ?? 1), "minFaceDetectionConfidence" in t && Ln(this.u, 2, t.minFaceDetectionConfidence ?? .5), "minTrackingConfidence" in t && Ln(this.h, 4, t.minTrackingConfidence ?? .5), "minFacePresenceConfidence" in t && Ln(this.A, 2, t.minFacePresenceConfidence ?? .5), "outputFaceBlendshapes" in t && (this.outputFaceBlendshapes = !!t.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in t && (this.outputFacialTransformationMatrixes = !!t.outputFacialTransformationMatrixes), this.l(t);
    }
    F(t, e) {
        return kc(this), uc(this, t, e), this.j;
    }
    G(t, e, n) {
        return kc(this), lc(this, t, n, e), this.j;
    }
    m() {
        var t = new ls;
        hs(t, "image_in"), hs(t, "norm_rect"), us(t, "face_landmarks");
        const e = new Qi;
        xr(e, Qs, this.h);
        const n = new is;
        Rn(n, 2, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), ns(n, "IMAGE:image_in"), ns(n, "NORM_RECT:norm_rect"), rs(n, "NORM_LANDMARKS:face_landmarks"), n.o(e), cs(t, n), this.g.attachProtoVectorListener("face_landmarks", (t, e)=>{
            for (const e of t)t = ks(e), this.j.faceLandmarks.push(Ho(t));
            ua(this, e);
        }), this.g.attachEmptyPacketListener("face_landmarks", (t)=>{
            ua(this, t);
        }), this.outputFaceBlendshapes && (us(t, "blendshapes"), rs(n, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", (t, e)=>{
            if (this.outputFaceBlendshapes) for (const e of t)t = ys(e), this.j.faceBlendshapes.push(jo(t.g() ?? []));
            ua(this, e);
        }), this.g.attachEmptyPacketListener("blendshapes", (t)=>{
            ua(this, t);
        })), this.outputFacialTransformationMatrixes && (us(t, "face_geometry"), rs(n, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", (t, e)=>{
            if (this.outputFacialTransformationMatrixes) for (const e of t)(t = yn(t = qs(e), Ss, 2)) && this.j.facialTransformationMatrixes.push({
                rows: kn(t, 1) ?? 0 ?? 0,
                columns: kn(t, 2) ?? 0 ?? 0,
                data: en(t, 3, $t, tn()).slice() ?? []
            });
            ua(this, e);
        }), this.g.attachEmptyPacketListener("face_geometry", (t)=>{
            ua(this, t);
        })), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Sc.prototype.detectForVideo = Sc.prototype.G, Sc.prototype.detect = Sc.prototype.F, Sc.prototype.setOptions = Sc.prototype.o, Sc.createFromModelPath = function(t, e) {
    return cc(Sc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Sc.createFromModelBuffer = function(t, e) {
    return cc(Sc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Sc.createFromOptions = function(t, e) {
    return cc(Sc, t, e);
}, Sc.FACE_LANDMARKS_LIPS = gc, Sc.FACE_LANDMARKS_LEFT_EYE = mc, Sc.FACE_LANDMARKS_LEFT_EYEBROW = yc, Sc.FACE_LANDMARKS_LEFT_IRIS = _c, Sc.FACE_LANDMARKS_RIGHT_EYE = vc, Sc.FACE_LANDMARKS_RIGHT_EYEBROW = Ec, Sc.FACE_LANDMARKS_RIGHT_IRIS = wc, Sc.FACE_LANDMARKS_FACE_OVAL = Tc, Sc.FACE_LANDMARKS_CONTOURS = Ac, Sc.FACE_LANDMARKS_TESSELATION = bc;
var xc = ic([
    0,
    1
], [
    1,
    2
], [
    2,
    3
], [
    3,
    4
], [
    0,
    5
], [
    5,
    6
], [
    6,
    7
], [
    7,
    8
], [
    5,
    9
], [
    9,
    10
], [
    10,
    11
], [
    11,
    12
], [
    9,
    13
], [
    13,
    14
], [
    14,
    15
], [
    15,
    16
], [
    13,
    17
], [
    0,
    17
], [
    17,
    18
], [
    18,
    19
], [
    19,
    20
]);
function Lc(t) {
    t.gestures = [], t.landmarks = [], t.worldLandmarks = [], t.handedness = [];
}
function Rc(t) {
    return 0 === t.gestures.length ? {
        gestures: [],
        landmarks: [],
        worldLandmarks: [],
        handedness: [],
        handednesses: []
    } : {
        gestures: t.gestures,
        landmarks: t.landmarks,
        worldLandmarks: t.worldLandmarks,
        handedness: t.handedness,
        handednesses: t.handedness
    };
}
function Ic(t, e = !0) {
    const n = [];
    for (const i of t){
        var r = ys(i);
        t = [];
        for (const n of r.g())r = e && null != kn(n, 1) ? kn(n, 1) ?? 0 : -1, t.push({
            score: Sn(n, 2) ?? 0,
            index: r,
            categoryName: le($e(n, 3)) ?? "" ?? "",
            displayName: le($e(n, 4)) ?? "" ?? ""
        });
        n.push(t);
    }
    return n;
}
var Fc = class extends dc {
    constructor(t, e){
        super(new ac(t, e), "image_in", "norm_rect", !1), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], wn(t = this.j = new oo, 0, 1, e = new Xs), this.u = new so, wn(this.j, 0, 2, this.u), this.D = new io, wn(this.u, 0, 3, this.D), this.A = new ro, wn(this.u, 0, 2, this.A), this.h = new no, wn(this.j, 0, 3, this.h), Ln(this.A, 2, .5), Ln(this.u, 4, .5), Ln(this.D, 2, .5);
    }
    get baseOptions() {
        return yn(this.j, Xs, 1);
    }
    set baseOptions(t) {
        wn(this.j, 0, 1, t);
    }
    o(t) {
        if (xn(this.A, 3, t.numHands ?? 1), "minHandDetectionConfidence" in t && Ln(this.A, 2, t.minHandDetectionConfidence ?? .5), "minTrackingConfidence" in t && Ln(this.u, 4, t.minTrackingConfidence ?? .5), "minHandPresenceConfidence" in t && Ln(this.D, 2, t.minHandPresenceConfidence ?? .5), t.cannedGesturesClassifierOptions) {
            var e = new to, n = e, r = Bo(t.cannedGesturesClassifierOptions, yn(this.h, to, 3)?.l());
            wn(n, 0, 2, r), wn(this.h, 0, 3, e);
        } else void 0 === t.cannedGesturesClassifierOptions && yn(this.h, to, 3)?.g();
        return t.customGesturesClassifierOptions ? (wn(n = e = new to, 0, 2, r = Bo(t.customGesturesClassifierOptions, yn(this.h, to, 4)?.l())), wn(this.h, 0, 4, e)) : void 0 === t.customGesturesClassifierOptions && yn(this.h, to, 4)?.g(), this.l(t);
    }
    Ha(t, e) {
        return Lc(this), uc(this, t, e), Rc(this);
    }
    Ia(t, e, n) {
        return Lc(this), lc(this, t, n, e), Rc(this);
    }
    m() {
        var t = new ls;
        hs(t, "image_in"), hs(t, "norm_rect"), us(t, "hand_gestures"), us(t, "hand_landmarks"), us(t, "world_hand_landmarks"), us(t, "handedness");
        const e = new Qi;
        xr(e, lo, this.j);
        const n = new is;
        Rn(n, 2, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), ns(n, "IMAGE:image_in"), ns(n, "NORM_RECT:norm_rect"), rs(n, "HAND_GESTURES:hand_gestures"), rs(n, "LANDMARKS:hand_landmarks"), rs(n, "WORLD_LANDMARKS:world_hand_landmarks"), rs(n, "HANDEDNESS:handedness"), n.o(e), cs(t, n), this.g.attachProtoVectorListener("hand_landmarks", (t, e)=>{
            for (const e of t){
                t = ks(e);
                const n = [];
                for (const e of vn(t, bs, 1))n.push({
                    x: Sn(e, 1) ?? 0,
                    y: Sn(e, 2) ?? 0,
                    z: Sn(e, 3) ?? 0,
                    visibility: Sn(e, 4) ?? 0
                });
                this.landmarks.push(n);
            }
            ua(this, e);
        }), this.g.attachEmptyPacketListener("hand_landmarks", (t)=>{
            ua(this, t);
        }), this.g.attachProtoVectorListener("world_hand_landmarks", (t, e)=>{
            for (const e of t){
                t = As(e);
                const n = [];
                for (const e of vn(t, Ts, 1))n.push({
                    x: Sn(e, 1) ?? 0,
                    y: Sn(e, 2) ?? 0,
                    z: Sn(e, 3) ?? 0,
                    visibility: Sn(e, 4) ?? 0
                });
                this.worldLandmarks.push(n);
            }
            ua(this, e);
        }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t)=>{
            ua(this, t);
        }), this.g.attachProtoVectorListener("hand_gestures", (t, e)=>{
            this.gestures.push(...Ic(t, !1)), ua(this, e);
        }), this.g.attachEmptyPacketListener("hand_gestures", (t)=>{
            ua(this, t);
        }), this.g.attachProtoVectorListener("handedness", (t, e)=>{
            this.handedness.push(...Ic(t)), ua(this, e);
        }), this.g.attachEmptyPacketListener("handedness", (t)=>{
            ua(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
function Mc(t) {
    return {
        landmarks: t.landmarks,
        worldLandmarks: t.worldLandmarks,
        handednesses: t.handedness,
        handedness: t.handedness
    };
}
Fc.prototype.recognizeForVideo = Fc.prototype.Ia, Fc.prototype.recognize = Fc.prototype.Ha, Fc.prototype.setOptions = Fc.prototype.o, Fc.createFromModelPath = function(t, e) {
    return cc(Fc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Fc.createFromModelBuffer = function(t, e) {
    return cc(Fc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Fc.createFromOptions = function(t, e) {
    return cc(Fc, t, e);
}, Fc.HAND_CONNECTIONS = xc;
var Pc = class extends dc {
    constructor(t, e){
        super(new ac(t, e), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], wn(t = this.h = new so, 0, 1, e = new Xs), this.u = new io, wn(this.h, 0, 3, this.u), this.j = new ro, wn(this.h, 0, 2, this.j), xn(this.j, 3, 1), Ln(this.j, 2, .5), Ln(this.u, 2, .5), Ln(this.h, 4, .5);
    }
    get baseOptions() {
        return yn(this.h, Xs, 1);
    }
    set baseOptions(t) {
        wn(this.h, 0, 1, t);
    }
    o(t) {
        return "numHands" in t && xn(this.j, 3, t.numHands ?? 1), "minHandDetectionConfidence" in t && Ln(this.j, 2, t.minHandDetectionConfidence ?? .5), "minTrackingConfidence" in t && Ln(this.h, 4, t.minTrackingConfidence ?? .5), "minHandPresenceConfidence" in t && Ln(this.u, 2, t.minHandPresenceConfidence ?? .5), this.l(t);
    }
    F(t, e) {
        return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], uc(this, t, e), Mc(this);
    }
    G(t, e, n) {
        return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], lc(this, t, n, e), Mc(this);
    }
    m() {
        var t = new ls;
        hs(t, "image_in"), hs(t, "norm_rect"), us(t, "hand_landmarks"), us(t, "world_hand_landmarks"), us(t, "handedness");
        const e = new Qi;
        xr(e, fo, this.h);
        const n = new is;
        Rn(n, 2, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), ns(n, "IMAGE:image_in"), ns(n, "NORM_RECT:norm_rect"), rs(n, "LANDMARKS:hand_landmarks"), rs(n, "WORLD_LANDMARKS:world_hand_landmarks"), rs(n, "HANDEDNESS:handedness"), n.o(e), cs(t, n), this.g.attachProtoVectorListener("hand_landmarks", (t, e)=>{
            for (const e of t)t = ks(e), this.landmarks.push(Ho(t));
            ua(this, e);
        }), this.g.attachEmptyPacketListener("hand_landmarks", (t)=>{
            ua(this, t);
        }), this.g.attachProtoVectorListener("world_hand_landmarks", (t, e)=>{
            for (const e of t)t = As(e), this.worldLandmarks.push(Wo(t));
            ua(this, e);
        }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t)=>{
            ua(this, t);
        }), this.g.attachProtoVectorListener("handedness", (t, e)=>{
            var n = this.handedness, r = n.push;
            const i = [];
            for (const e of t){
                t = ys(e);
                const n = [];
                for (const e of t.g())n.push({
                    score: Sn(e, 2) ?? 0,
                    index: kn(e, 1) ?? 0 ?? -1,
                    categoryName: le($e(e, 3)) ?? "" ?? "",
                    displayName: le($e(e, 4)) ?? "" ?? ""
                });
                i.push(n);
            }
            r.call(n, ...i), ua(this, e);
        }), this.g.attachEmptyPacketListener("handedness", (t)=>{
            ua(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Pc.prototype.detectForVideo = Pc.prototype.G, Pc.prototype.detect = Pc.prototype.F, Pc.prototype.setOptions = Pc.prototype.o, Pc.createFromModelPath = function(t, e) {
    return cc(Pc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Pc.createFromModelBuffer = function(t, e) {
    return cc(Pc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Pc.createFromOptions = function(t, e) {
    return cc(Pc, t, e);
}, Pc.HAND_CONNECTIONS = xc;
var Cc = ic([
    0,
    1
], [
    1,
    2
], [
    2,
    3
], [
    3,
    7
], [
    0,
    4
], [
    4,
    5
], [
    5,
    6
], [
    6,
    8
], [
    9,
    10
], [
    11,
    12
], [
    11,
    13
], [
    13,
    15
], [
    15,
    17
], [
    15,
    19
], [
    15,
    21
], [
    17,
    19
], [
    12,
    14
], [
    14,
    16
], [
    16,
    18
], [
    16,
    20
], [
    16,
    22
], [
    18,
    20
], [
    11,
    23
], [
    12,
    24
], [
    23,
    24
], [
    23,
    25
], [
    24,
    26
], [
    25,
    27
], [
    26,
    28
], [
    27,
    29
], [
    28,
    30
], [
    29,
    31
], [
    30,
    32
], [
    27,
    31
], [
    28,
    32
]);
function Oc(t) {
    t.h = {
        faceLandmarks: [],
        faceBlendshapes: [],
        poseLandmarks: [],
        poseWorldLandmarks: [],
        poseSegmentationMasks: [],
        leftHandLandmarks: [],
        leftHandWorldLandmarks: [],
        rightHandLandmarks: [],
        rightHandWorldLandmarks: []
    };
}
function Nc(t) {
    try {
        if (!t.D) return t.h;
        t.D(t.h);
    } finally{
        da(t);
    }
}
function Uc(t, e) {
    t = ks(t), e.push(Ho(t));
}
var Dc = class extends dc {
    constructor(t, e){
        super(new ac(t, e), "input_frames_image", null, !1), this.h = {
            faceLandmarks: [],
            faceBlendshapes: [],
            poseLandmarks: [],
            poseWorldLandmarks: [],
            poseSegmentationMasks: [],
            leftHandLandmarks: [],
            leftHandWorldLandmarks: [],
            rightHandLandmarks: [],
            rightHandWorldLandmarks: []
        }, this.outputPoseSegmentationMasks = this.outputFaceBlendshapes = !1, wn(t = this.j = new yo, 0, 1, e = new Xs), this.I = new io, wn(this.j, 0, 2, this.I), this.W = new po, wn(this.j, 0, 3, this.W), this.u = new zs, wn(this.j, 0, 4, this.u), this.O = new $s, wn(this.j, 0, 5, this.O), this.A = new go, wn(this.j, 0, 6, this.A), this.M = new mo, wn(this.j, 0, 7, this.M), Ln(this.u, 2, .5), Ln(this.u, 3, .3), Ln(this.O, 2, .5), Ln(this.A, 2, .5), Ln(this.A, 3, .3), Ln(this.M, 2, .5), Ln(this.I, 2, .5);
    }
    get baseOptions() {
        return yn(this.j, Xs, 1);
    }
    set baseOptions(t) {
        wn(this.j, 0, 1, t);
    }
    o(t) {
        return "minFaceDetectionConfidence" in t && Ln(this.u, 2, t.minFaceDetectionConfidence ?? .5), "minFaceSuppressionThreshold" in t && Ln(this.u, 3, t.minFaceSuppressionThreshold ?? .3), "minFacePresenceConfidence" in t && Ln(this.O, 2, t.minFacePresenceConfidence ?? .5), "outputFaceBlendshapes" in t && (this.outputFaceBlendshapes = !!t.outputFaceBlendshapes), "minPoseDetectionConfidence" in t && Ln(this.A, 2, t.minPoseDetectionConfidence ?? .5), "minPoseSuppressionThreshold" in t && Ln(this.A, 3, t.minPoseSuppressionThreshold ?? .3), "minPosePresenceConfidence" in t && Ln(this.M, 2, t.minPosePresenceConfidence ?? .5), "outputPoseSegmentationMasks" in t && (this.outputPoseSegmentationMasks = !!t.outputPoseSegmentationMasks), "minHandLandmarksConfidence" in t && Ln(this.I, 2, t.minHandLandmarksConfidence ?? .5), this.l(t);
    }
    F(t, e, n) {
        const r = "function" != typeof e ? e : {};
        return this.D = "function" == typeof e ? e : n, Oc(this), uc(this, t, r), Nc(this);
    }
    G(t, e, n, r) {
        const i = "function" != typeof n ? n : {};
        return this.D = "function" == typeof n ? n : r, Oc(this), lc(this, t, i, e), Nc(this);
    }
    m() {
        var t = new ls;
        hs(t, "input_frames_image"), us(t, "pose_landmarks"), us(t, "pose_world_landmarks"), us(t, "face_landmarks"), us(t, "left_hand_landmarks"), us(t, "left_hand_world_landmarks"), us(t, "right_hand_landmarks"), us(t, "right_hand_world_landmarks");
        const e = new Qi, n = new Bi;
        Rn(n, 1, "type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"), function(t, e) {
            if (null != e) if (Array.isArray(e)) Ze(t, 2, Ie(e, 0, Me));
            else {
                if (!("string" == typeof e || e instanceof F || x(e))) throw Error("invalid value in Any.value field: " + e + " expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");
                hn(t, 2, ht(e, !1), R());
            }
        }(n, this.j.g());
        const r = new is;
        Rn(r, 2, "mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"), bn(r, 8, Bi, n), ns(r, "IMAGE:input_frames_image"), rs(r, "POSE_LANDMARKS:pose_landmarks"), rs(r, "POSE_WORLD_LANDMARKS:pose_world_landmarks"), rs(r, "FACE_LANDMARKS:face_landmarks"), rs(r, "LEFT_HAND_LANDMARKS:left_hand_landmarks"), rs(r, "LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"), rs(r, "RIGHT_HAND_LANDMARKS:right_hand_landmarks"), rs(r, "RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"), r.o(e), cs(t, r), la(this, t), this.g.attachProtoListener("pose_landmarks", (t, e)=>{
            Uc(t, this.h.poseLandmarks), ua(this, e);
        }), this.g.attachEmptyPacketListener("pose_landmarks", (t)=>{
            ua(this, t);
        }), this.g.attachProtoListener("pose_world_landmarks", (t, e)=>{
            var n = this.h.poseWorldLandmarks;
            t = As(t), n.push(Wo(t)), ua(this, e);
        }), this.g.attachEmptyPacketListener("pose_world_landmarks", (t)=>{
            ua(this, t);
        }), this.outputPoseSegmentationMasks && (rs(r, "POSE_SEGMENTATION_MASK:pose_segmentation_mask"), fa(this, "pose_segmentation_mask"), this.g.Z("pose_segmentation_mask", (t, e)=>{
            this.h.poseSegmentationMasks = [
                fc(this, t, !0, !this.D)
            ], ua(this, e);
        }), this.g.attachEmptyPacketListener("pose_segmentation_mask", (t)=>{
            this.h.poseSegmentationMasks = [], ua(this, t);
        })), this.g.attachProtoListener("face_landmarks", (t, e)=>{
            Uc(t, this.h.faceLandmarks), ua(this, e);
        }), this.g.attachEmptyPacketListener("face_landmarks", (t)=>{
            ua(this, t);
        }), this.outputFaceBlendshapes && (us(t, "extra_blendshapes"), rs(r, "FACE_BLENDSHAPES:extra_blendshapes"), this.g.attachProtoListener("extra_blendshapes", (t, e)=>{
            var n = this.h.faceBlendshapes;
            this.outputFaceBlendshapes && (t = ys(t), n.push(jo(t.g() ?? []))), ua(this, e);
        }), this.g.attachEmptyPacketListener("extra_blendshapes", (t)=>{
            ua(this, t);
        })), this.g.attachProtoListener("left_hand_landmarks", (t, e)=>{
            Uc(t, this.h.leftHandLandmarks), ua(this, e);
        }), this.g.attachEmptyPacketListener("left_hand_landmarks", (t)=>{
            ua(this, t);
        }), this.g.attachProtoListener("left_hand_world_landmarks", (t, e)=>{
            var n = this.h.leftHandWorldLandmarks;
            t = As(t), n.push(Wo(t)), ua(this, e);
        }), this.g.attachEmptyPacketListener("left_hand_world_landmarks", (t)=>{
            ua(this, t);
        }), this.g.attachProtoListener("right_hand_landmarks", (t, e)=>{
            Uc(t, this.h.rightHandLandmarks), ua(this, e);
        }), this.g.attachEmptyPacketListener("right_hand_landmarks", (t)=>{
            ua(this, t);
        }), this.g.attachProtoListener("right_hand_world_landmarks", (t, e)=>{
            var n = this.h.rightHandWorldLandmarks;
            t = As(t), n.push(Wo(t)), ua(this, e);
        }), this.g.attachEmptyPacketListener("right_hand_world_landmarks", (t)=>{
            ua(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Dc.prototype.detectForVideo = Dc.prototype.G, Dc.prototype.detect = Dc.prototype.F, Dc.prototype.setOptions = Dc.prototype.o, Dc.createFromModelPath = function(t, e) {
    return cc(Dc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Dc.createFromModelBuffer = function(t, e) {
    return cc(Dc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Dc.createFromOptions = function(t, e) {
    return cc(Dc, t, e);
}, Dc.HAND_CONNECTIONS = xc, Dc.POSE_CONNECTIONS = Cc, Dc.FACE_LANDMARKS_LIPS = gc, Dc.FACE_LANDMARKS_LEFT_EYE = mc, Dc.FACE_LANDMARKS_LEFT_EYEBROW = yc, Dc.FACE_LANDMARKS_LEFT_IRIS = _c, Dc.FACE_LANDMARKS_RIGHT_EYE = vc, Dc.FACE_LANDMARKS_RIGHT_EYEBROW = Ec, Dc.FACE_LANDMARKS_RIGHT_IRIS = wc, Dc.FACE_LANDMARKS_FACE_OVAL = Tc, Dc.FACE_LANDMARKS_CONTOURS = Ac, Dc.FACE_LANDMARKS_TESSELATION = bc;
var Bc = class extends dc {
    constructor(t, e){
        super(new ac(t, e), "input_image", "norm_rect", !0), this.j = {
            classifications: []
        }, wn(t = this.h = new Eo, 0, 1, e = new Xs);
    }
    get baseOptions() {
        return yn(this.h, Xs, 1);
    }
    set baseOptions(t) {
        wn(this.h, 0, 1, t);
    }
    o(t) {
        return wn(this.h, 0, 2, Bo(t, yn(this.h, Ns, 2))), this.l(t);
    }
    sa(t, e) {
        return this.j = {
            classifications: []
        }, uc(this, t, e), this.j;
    }
    ta(t, e, n) {
        return this.j = {
            classifications: []
        }, lc(this, t, n, e), this.j;
    }
    m() {
        var t = new ls;
        hs(t, "input_image"), hs(t, "norm_rect"), us(t, "classifications");
        const e = new Qi;
        xr(e, wo, this.h);
        const n = new is;
        Rn(n, 2, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), ns(n, "IMAGE:input_image"), ns(n, "NORM_RECT:norm_rect"), rs(n, "CLASSIFICATIONS:classifications"), n.o(e), cs(t, n), this.g.attachProtoListener("classifications", (t, e)=>{
            this.j = Vo(Is(t)), ua(this, e);
        }), this.g.attachEmptyPacketListener("classifications", (t)=>{
            ua(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Bc.prototype.classifyForVideo = Bc.prototype.ta, Bc.prototype.classify = Bc.prototype.sa, Bc.prototype.setOptions = Bc.prototype.o, Bc.createFromModelPath = function(t, e) {
    return cc(Bc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Bc.createFromModelBuffer = function(t, e) {
    return cc(Bc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Bc.createFromOptions = function(t, e) {
    return cc(Bc, t, e);
};
var Gc = class extends dc {
    constructor(t, e){
        super(new ac(t, e), "image_in", "norm_rect", !0), this.h = new To, this.embeddings = {
            embeddings: []
        }, wn(t = this.h, 0, 1, e = new Xs);
    }
    get baseOptions() {
        return yn(this.h, Xs, 1);
    }
    set baseOptions(t) {
        wn(this.h, 0, 1, t);
    }
    o(t) {
        var e = this.h, n = yn(this.h, Ds, 2);
        return n = n ? n.clone() : new Ds, void 0 !== t.l2Normalize ? Ze(n, 1, Jt(t.l2Normalize)) : "l2Normalize" in t && Ze(n, 1), void 0 !== t.quantize ? Ze(n, 2, Jt(t.quantize)) : "quantize" in t && Ze(n, 2), wn(e, 0, 2, n), this.l(t);
    }
    za(t, e) {
        return uc(this, t, e), this.embeddings;
    }
    Aa(t, e, n) {
        return lc(this, t, n, e), this.embeddings;
    }
    m() {
        var t = new ls;
        hs(t, "image_in"), hs(t, "norm_rect"), us(t, "embeddings_out");
        const e = new Qi;
        xr(e, Ao, this.h);
        const n = new is;
        Rn(n, 2, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), ns(n, "IMAGE:image_in"), ns(n, "NORM_RECT:norm_rect"), rs(n, "EMBEDDINGS:embeddings_out"), n.o(e), cs(t, n), this.g.attachProtoListener("embeddings_out", (t, e)=>{
            t = Os(t), this.embeddings = function(t) {
                return {
                    embeddings: vn(t, Ps, 1).map((t)=>{
                        const e = {
                            headIndex: kn(t, 3) ?? 0 ?? -1,
                            headName: le($e(t, 4)) ?? "" ?? ""
                        };
                        var n = t.v;
                        return void 0 !== mn(n, 0 | n[Q], Fs, ln(t, 1)) ? (t = en(t = yn(t, Fs, ln(t, 1), void 0), 1, $t, tn()), e.floatEmbedding = t.slice()) : (n = new Uint8Array(0), e.quantizedEmbedding = yn(t, Ms, ln(t, 2), void 0)?.na()?.h() ?? n), e;
                    }),
                    timestampMs: Go($e(t, 2, void 0, void 0, ce) ?? Ye)
                };
            }(t), ua(this, e);
        }), this.g.attachEmptyPacketListener("embeddings_out", (t)=>{
            ua(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Gc.cosineSimilarity = function(t, e) {
    if (t.floatEmbedding && e.floatEmbedding) t = Ko(t.floatEmbedding, e.floatEmbedding);
    else {
        if (!t.quantizedEmbedding || !e.quantizedEmbedding) throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
        t = Ko(zo(t.quantizedEmbedding), zo(e.quantizedEmbedding));
    }
    return t;
}, Gc.prototype.embedForVideo = Gc.prototype.Aa, Gc.prototype.embed = Gc.prototype.za, Gc.prototype.setOptions = Gc.prototype.o, Gc.createFromModelPath = function(t, e) {
    return cc(Gc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Gc.createFromModelBuffer = function(t, e) {
    return cc(Gc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Gc.createFromOptions = function(t, e) {
    return cc(Gc, t, e);
};
var jc = class {
    constructor(t, e, n){
        this.confidenceMasks = t, this.categoryMask = e, this.qualityScores = n;
    }
    close() {
        this.confidenceMasks?.forEach((t)=>{
            t.close();
        }), this.categoryMask?.close();
    }
};
function Vc(t) {
    const e = (function(t) {
        return vn(t, is, 1);
    })(t.ca()).filter((t)=>(le($e(t, 1)) ?? "").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));
    if (t.u = [], e.length > 1) throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
    1 === e.length && (yn(e[0], Qi, 7)?.j()?.g() ?? new Map).forEach((e, n)=>{
        t.u[Number(n)] = le($e(e, 1)) ?? "";
    });
}
function Xc(t) {
    t.categoryMask = void 0, t.confidenceMasks = void 0, t.qualityScores = void 0;
}
function Hc(t) {
    try {
        const e = new jc(t.confidenceMasks, t.categoryMask, t.qualityScores);
        if (!t.j) return e;
        t.j(e);
    } finally{
        da(t);
    }
}
jc.prototype.close = jc.prototype.close;
var Wc = class extends dc {
    constructor(t, e){
        super(new ac(t, e), "image_in", "norm_rect", !1), this.u = [], this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new Lo, this.A = new bo, wn(this.h, 0, 3, this.A), wn(t = this.h, 0, 1, e = new Xs);
    }
    get baseOptions() {
        return yn(this.h, Xs, 1);
    }
    set baseOptions(t) {
        wn(this.h, 0, 1, t);
    }
    o(t) {
        return void 0 !== t.displayNamesLocale ? Ze(this.h, 2, ue(t.displayNamesLocale)) : "displayNamesLocale" in t && Ze(this.h, 2), "outputCategoryMask" in t && (this.outputCategoryMask = t.outputCategoryMask ?? !1), "outputConfidenceMasks" in t && (this.outputConfidenceMasks = t.outputConfidenceMasks ?? !0), super.l(t);
    }
    L() {
        Vc(this);
    }
    segment(t, e, n) {
        const r = "function" != typeof e ? e : {};
        return this.j = "function" == typeof e ? e : n, Xc(this), uc(this, t, r), Hc(this);
    }
    La(t, e, n, r) {
        const i = "function" != typeof n ? n : {};
        return this.j = "function" == typeof n ? n : r, Xc(this), lc(this, t, i, e), Hc(this);
    }
    Da() {
        return this.u;
    }
    m() {
        var t = new ls;
        hs(t, "image_in"), hs(t, "norm_rect");
        const e = new Qi;
        xr(e, Ro, this.h);
        const n = new is;
        Rn(n, 2, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), ns(n, "IMAGE:image_in"), ns(n, "NORM_RECT:norm_rect"), n.o(e), cs(t, n), la(this, t), this.outputConfidenceMasks && (us(t, "confidence_masks"), rs(n, "CONFIDENCE_MASKS:confidence_masks"), fa(this, "confidence_masks"), this.g.aa("confidence_masks", (t, e)=>{
            this.confidenceMasks = t.map((t)=>fc(this, t, !0, !this.j)), ua(this, e);
        }), this.g.attachEmptyPacketListener("confidence_masks", (t)=>{
            this.confidenceMasks = [], ua(this, t);
        })), this.outputCategoryMask && (us(t, "category_mask"), rs(n, "CATEGORY_MASK:category_mask"), fa(this, "category_mask"), this.g.Z("category_mask", (t, e)=>{
            this.categoryMask = fc(this, t, !1, !this.j), ua(this, e);
        }), this.g.attachEmptyPacketListener("category_mask", (t)=>{
            this.categoryMask = void 0, ua(this, t);
        })), us(t, "quality_scores"), rs(n, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t, e)=>{
            this.qualityScores = t, ua(this, e);
        }), this.g.attachEmptyPacketListener("quality_scores", (t)=>{
            this.categoryMask = void 0, ua(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Wc.prototype.getLabels = Wc.prototype.Da, Wc.prototype.segmentForVideo = Wc.prototype.La, Wc.prototype.segment = Wc.prototype.segment, Wc.prototype.setOptions = Wc.prototype.o, Wc.createFromModelPath = function(t, e) {
    return cc(Wc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Wc.createFromModelBuffer = function(t, e) {
    return cc(Wc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Wc.createFromOptions = function(t, e) {
    return cc(Wc, t, e);
};
var zc = class {
    constructor(t, e, n){
        this.confidenceMasks = t, this.categoryMask = e, this.qualityScores = n;
    }
    close() {
        this.confidenceMasks?.forEach((t)=>{
            t.close();
        }), this.categoryMask?.close();
    }
};
zc.prototype.close = zc.prototype.close;
var Kc = class extends dc {
    constructor(t, e){
        super(new ac(t, e), "image_in", "norm_rect_in", !1), this.outputCategoryMask = !1, this.outputConfidenceMasks = !0, this.h = new Lo, this.u = new bo, wn(this.h, 0, 3, this.u), wn(t = this.h, 0, 1, e = new Xs);
    }
    get baseOptions() {
        return yn(this.h, Xs, 1);
    }
    set baseOptions(t) {
        wn(this.h, 0, 1, t);
    }
    o(t) {
        return "outputCategoryMask" in t && (this.outputCategoryMask = t.outputCategoryMask ?? !1), "outputConfidenceMasks" in t && (this.outputConfidenceMasks = t.outputConfidenceMasks ?? !0), super.l(t);
    }
    segment(t, e, n, r) {
        const i = "function" != typeof n ? n : {};
        if (this.j = "function" == typeof n ? n : r, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, n = this.C + 1, r = new Po, e.keypoint && e.scribble) throw Error("Cannot provide both keypoint and scribble.");
        if (e.keypoint) {
            var s = new Io;
            hn(s, 3, Jt(!0), !1), hn(s, 1, qt(e.keypoint.x), 0), hn(s, 2, qt(e.keypoint.y), 0), Tn(r, 1, Co, s);
        } else {
            if (!e.scribble) throw Error("Must provide either a keypoint or a scribble.");
            {
                const t = new Mo;
                for (s of e.scribble)hn(e = new Io, 3, Jt(!0), !1), hn(e, 1, qt(s.x), 0), hn(e, 2, qt(s.y), 0), bn(t, 1, Io, e);
                Tn(r, 2, Co, t);
            }
        }
        this.g.addProtoToStream(r.g(), "mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest", "roi_in", n), uc(this, t, i);
        t: {
            try {
                const t = new zc(this.confidenceMasks, this.categoryMask, this.qualityScores);
                if (!this.j) {
                    var o = t;
                    break t;
                }
                this.j(t);
            } finally{
                da(this);
            }
            o = void 0;
        }
        return o;
    }
    m() {
        var t = new ls;
        hs(t, "image_in"), hs(t, "roi_in"), hs(t, "norm_rect_in");
        const e = new Qi;
        xr(e, Ro, this.h);
        const n = new is;
        Rn(n, 2, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"), ns(n, "IMAGE:image_in"), ns(n, "ROI:roi_in"), ns(n, "NORM_RECT:norm_rect_in"), n.o(e), cs(t, n), la(this, t), this.outputConfidenceMasks && (us(t, "confidence_masks"), rs(n, "CONFIDENCE_MASKS:confidence_masks"), fa(this, "confidence_masks"), this.g.aa("confidence_masks", (t, e)=>{
            this.confidenceMasks = t.map((t)=>fc(this, t, !0, !this.j)), ua(this, e);
        }), this.g.attachEmptyPacketListener("confidence_masks", (t)=>{
            this.confidenceMasks = [], ua(this, t);
        })), this.outputCategoryMask && (us(t, "category_mask"), rs(n, "CATEGORY_MASK:category_mask"), fa(this, "category_mask"), this.g.Z("category_mask", (t, e)=>{
            this.categoryMask = fc(this, t, !1, !this.j), ua(this, e);
        }), this.g.attachEmptyPacketListener("category_mask", (t)=>{
            this.categoryMask = void 0, ua(this, t);
        })), us(t, "quality_scores"), rs(n, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t, e)=>{
            this.qualityScores = t, ua(this, e);
        }), this.g.attachEmptyPacketListener("quality_scores", (t)=>{
            this.categoryMask = void 0, ua(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Kc.prototype.segment = Kc.prototype.segment, Kc.prototype.setOptions = Kc.prototype.o, Kc.createFromModelPath = function(t, e) {
    return cc(Kc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Kc.createFromModelBuffer = function(t, e) {
    return cc(Kc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Kc.createFromOptions = function(t, e) {
    return cc(Kc, t, e);
};
var Yc = class extends dc {
    constructor(t, e){
        super(new ac(t, e), "input_frame_gpu", "norm_rect", !1), this.j = {
            detections: []
        }, wn(t = this.h = new Oo, 0, 1, e = new Xs);
    }
    get baseOptions() {
        return yn(this.h, Xs, 1);
    }
    set baseOptions(t) {
        wn(this.h, 0, 1, t);
    }
    o(t) {
        return void 0 !== t.displayNamesLocale ? Ze(this.h, 2, ue(t.displayNamesLocale)) : "displayNamesLocale" in t && Ze(this.h, 2), void 0 !== t.maxResults ? xn(this.h, 3, t.maxResults) : "maxResults" in t && Ze(this.h, 3), void 0 !== t.scoreThreshold ? Ln(this.h, 4, t.scoreThreshold) : "scoreThreshold" in t && Ze(this.h, 4), void 0 !== t.categoryAllowlist ? In(this.h, 5, t.categoryAllowlist) : "categoryAllowlist" in t && Ze(this.h, 5), void 0 !== t.categoryDenylist ? In(this.h, 6, t.categoryDenylist) : "categoryDenylist" in t && Ze(this.h, 6), this.l(t);
    }
    F(t, e) {
        return this.j = {
            detections: []
        }, uc(this, t, e), this.j;
    }
    G(t, e, n) {
        return this.j = {
            detections: []
        }, lc(this, t, n, e), this.j;
    }
    m() {
        var t = new ls;
        hs(t, "input_frame_gpu"), hs(t, "norm_rect"), us(t, "detections");
        const e = new Qi;
        xr(e, No, this.h);
        const n = new is;
        Rn(n, 2, "mediapipe.tasks.vision.ObjectDetectorGraph"), ns(n, "IMAGE:input_frame_gpu"), ns(n, "NORM_RECT:norm_rect"), rs(n, "DETECTIONS:detections"), n.o(e), cs(t, n), this.g.attachProtoVectorListener("detections", (t, e)=>{
            for (const e of t)t = ws(e), this.j.detections.push(Xo(t));
            ua(this, e);
        }), this.g.attachEmptyPacketListener("detections", (t)=>{
            ua(this, t);
        }), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Yc.prototype.detectForVideo = Yc.prototype.G, Yc.prototype.detect = Yc.prototype.F, Yc.prototype.setOptions = Yc.prototype.o, Yc.createFromModelPath = async function(t, e) {
    return cc(Yc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Yc.createFromModelBuffer = function(t, e) {
    return cc(Yc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Yc.createFromOptions = function(t, e) {
    return cc(Yc, t, e);
};
var qc = class {
    constructor(t, e, n){
        this.landmarks = t, this.worldLandmarks = e, this.segmentationMasks = n;
    }
    close() {
        this.segmentationMasks?.forEach((t)=>{
            t.close();
        });
    }
};
function $c(t) {
    t.landmarks = [], t.worldLandmarks = [], t.segmentationMasks = void 0;
}
function Jc(t) {
    try {
        const e = new qc(t.landmarks, t.worldLandmarks, t.segmentationMasks);
        if (!t.u) return e;
        t.u(e);
    } finally{
        da(t);
    }
}
qc.prototype.close = qc.prototype.close;
var Zc = class extends dc {
    constructor(t, e){
        super(new ac(t, e), "image_in", "norm_rect", !1), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = !1, wn(t = this.h = new Uo, 0, 1, e = new Xs), this.A = new mo, wn(this.h, 0, 3, this.A), this.j = new go, wn(this.h, 0, 2, this.j), xn(this.j, 4, 1), Ln(this.j, 2, .5), Ln(this.A, 2, .5), Ln(this.h, 4, .5);
    }
    get baseOptions() {
        return yn(this.h, Xs, 1);
    }
    set baseOptions(t) {
        wn(this.h, 0, 1, t);
    }
    o(t) {
        return "numPoses" in t && xn(this.j, 4, t.numPoses ?? 1), "minPoseDetectionConfidence" in t && Ln(this.j, 2, t.minPoseDetectionConfidence ?? .5), "minTrackingConfidence" in t && Ln(this.h, 4, t.minTrackingConfidence ?? .5), "minPosePresenceConfidence" in t && Ln(this.A, 2, t.minPosePresenceConfidence ?? .5), "outputSegmentationMasks" in t && (this.outputSegmentationMasks = t.outputSegmentationMasks ?? !1), this.l(t);
    }
    F(t, e, n) {
        const r = "function" != typeof e ? e : {};
        return this.u = "function" == typeof e ? e : n, $c(this), uc(this, t, r), Jc(this);
    }
    G(t, e, n, r) {
        const i = "function" != typeof n ? n : {};
        return this.u = "function" == typeof n ? n : r, $c(this), lc(this, t, i, e), Jc(this);
    }
    m() {
        var t = new ls;
        hs(t, "image_in"), hs(t, "norm_rect"), us(t, "normalized_landmarks"), us(t, "world_landmarks"), us(t, "segmentation_masks");
        const e = new Qi;
        xr(e, Do, this.h);
        const n = new is;
        Rn(n, 2, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), ns(n, "IMAGE:image_in"), ns(n, "NORM_RECT:norm_rect"), rs(n, "NORM_LANDMARKS:normalized_landmarks"), rs(n, "WORLD_LANDMARKS:world_landmarks"), n.o(e), cs(t, n), la(this, t), this.g.attachProtoVectorListener("normalized_landmarks", (t, e)=>{
            this.landmarks = [];
            for (const e of t)t = ks(e), this.landmarks.push(Ho(t));
            ua(this, e);
        }), this.g.attachEmptyPacketListener("normalized_landmarks", (t)=>{
            this.landmarks = [], ua(this, t);
        }), this.g.attachProtoVectorListener("world_landmarks", (t, e)=>{
            this.worldLandmarks = [];
            for (const e of t)t = As(e), this.worldLandmarks.push(Wo(t));
            ua(this, e);
        }), this.g.attachEmptyPacketListener("world_landmarks", (t)=>{
            this.worldLandmarks = [], ua(this, t);
        }), this.outputSegmentationMasks && (rs(n, "SEGMENTATION_MASK:segmentation_masks"), fa(this, "segmentation_masks"), this.g.aa("segmentation_masks", (t, e)=>{
            this.segmentationMasks = t.map((t)=>fc(this, t, !0, !this.u)), ua(this, e);
        }), this.g.attachEmptyPacketListener("segmentation_masks", (t)=>{
            this.segmentationMasks = [], ua(this, t);
        })), t = t.g(), this.setGraph(new Uint8Array(t), !0);
    }
};
Zc.prototype.detectForVideo = Zc.prototype.G, Zc.prototype.detect = Zc.prototype.F, Zc.prototype.setOptions = Zc.prototype.o, Zc.createFromModelPath = function(t, e) {
    return cc(Zc, t, {
        baseOptions: {
            modelAssetPath: e
        }
    });
}, Zc.createFromModelBuffer = function(t, e) {
    return cc(Zc, t, {
        baseOptions: {
            modelAssetBuffer: e
        }
    });
}, Zc.createFromOptions = function(t, e) {
    return cc(Zc, t, e);
}, Zc.POSE_CONNECTIONS = Cc;
;
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/gsap/Observer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Observer",
    ()=>Observer,
    "_getProxyProp",
    ()=>_getProxyProp,
    "_getScrollFunc",
    ()=>_getScrollFunc,
    "_getTarget",
    ()=>_getTarget,
    "_getVelocityProp",
    ()=>_getVelocityProp,
    "_horizontal",
    ()=>_horizontal,
    "_isViewport",
    ()=>_isViewport,
    "_proxies",
    ()=>_proxies,
    "_scrollers",
    ()=>_scrollers,
    "_vertical",
    ()=>_vertical,
    "default",
    ()=>Observer
]);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var gsap, _coreInitted, _clamp, _win, _doc, _docEl, _body, _isTouch, _pointerType, ScrollTrigger, _root, _normalizer, _eventTypes, _context, _getGSAP = function _getGSAP() {
    return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
}, _startup = 1, _observers = [], _scrollers = [], _proxies = [], _getTime = Date.now, _bridge = function _bridge(name, value) {
    return value;
}, _integrate = function _integrate() {
    var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge(name, value) {
        return data[name](value);
    };
}, _getProxyProp = function _getProxyProp(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
}, _isViewport = function _isViewport(el) {
    return !!~_root.indexOf(el);
}, _addListener = function _addListener(element, type, func, passive, capture) {
    return element.addEventListener(type, func, {
        passive: passive !== false,
        capture: !!capture
    });
}, _removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
}, _scrollLeft = "scrollLeft", _scrollTop = "scrollTop", _onScroll = function _onScroll() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
}, _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
    var cachingFunc = function cachingFunc(value) {
        // since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
        if (value || value === 0) {
            _startup && (_win.history.scrollRestoration = "manual"); // otherwise the new position will get overwritten by the browser onload.
            var isNormalizing = _normalizer && _normalizer.isPressed;
            value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0); //TODO: iOS Bug: if you allow it to go to 0, Safari can start to report super strange (wildly inaccurate) touch positions!
            f(value);
            cachingFunc.cacheID = _scrollers.cache;
            isNormalizing && _bridge("ss", value); // set scroll (notify ScrollTrigger so it can dispatch a "scrollStart" event if necessary
        } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
            cachingFunc.cacheID = _scrollers.cache;
            cachingFunc.v = f();
        }
        return cachingFunc.v + cachingFunc.offset;
    };
    cachingFunc.offset = 0;
    return f && cachingFunc;
}, _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function(value) {
        return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
    })
}, _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function(value) {
        return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
    })
}, _getTarget = function _getTarget(t, self) {
    return (self && self._ctx && self._ctx.selector || gsap.utils.toArray)(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
}, _isWithin = function _isWithin(element, list) {
    // check if the element is in the list or is a descendant of an element in the list.
    var i = list.length;
    while(i--){
        if (list[i] === element || list[i].contains(element)) {
            return true;
        }
    }
    return false;
}, _getScrollFunc = function _getScrollFunc(element, _ref) {
    var s = _ref.s, sc = _ref.sc;
    // we store the scroller functions in an alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
    _isViewport(element) && (element = _doc.scrollingElement || _docEl);
    var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i && (i = _scrollers.push(element) - 1);
    _scrollers[i + offset] || _addListener(element, "scroll", _onScroll); // clear the cache when a scroll occurs
    var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
        return arguments.length ? element[s] = value : element[s];
    })));
    func.target = element;
    prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth"); // only set it the first time (don't reset every time a scrollFunc is requested because perhaps it happens during a refresh() when it's disabled in ScrollTrigger.
    return func;
}, _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update(value, force) {
        var t = _getTime();
        if (force || t - t1 > min) {
            v2 = v1;
            v1 = value;
            t2 = t1;
            t1 = t;
        } else if (useDelta) {
            v1 += value;
        } else {
            // not totally necessary, but makes it a bit more accurate by adjusting the v1 value according to the new slope. This way we're not just ignoring the incoming data. Removing for now because it doesn't seem to make much practical difference and it's probably not worth the kb.
            v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
        }
    }, reset = function reset() {
        v2 = v1 = useDelta ? 0 : v1;
        t2 = t1 = 0;
    }, getVelocity = function getVelocity(latestValue) {
        var tOld = t2, vOld = v2, t = _getTime();
        (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
        return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
    };
    return {
        update: update,
        reset: reset,
        getVelocity: getVelocity
    };
}, _getEvent = function _getEvent(e, preventDefault) {
    preventDefault && !e._gsapAllow && e.cancelable !== false && e.preventDefault();
    return e.changedTouches ? e.changedTouches[0] : e;
}, _getAbsoluteMax = function _getAbsoluteMax(a) {
    var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
}, _setScrollTrigger = function _setScrollTrigger() {
    ScrollTrigger = gsap.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
}, _initCore = function _initCore(core) {
    gsap = core || _getGSAP();
    if (!_coreInitted && gsap && typeof document !== "undefined" && document.body) {
        _win = window;
        _doc = document;
        _docEl = _doc.documentElement;
        _body = _doc.body;
        _root = [
            _win,
            _doc,
            _docEl,
            _body
        ];
        _clamp = gsap.utils.clamp;
        _context = gsap.core.context || function() {};
        _pointerType = "onpointerenter" in _body ? "pointer" : "mouse"; // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.
        _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
        _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
        setTimeout(function() {
            return _startup = 0;
        }, 500);
        _coreInitted = 1;
    }
    ScrollTrigger || _setScrollTrigger(); // Observer might be initted BEFORE ScrollTrigger, so don't put this with the initting code. ScrollTrigger will call Observer.register() when it inits.
    return _coreInitted;
};
_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /*#__PURE__*/ function() {
    function Observer(vars) {
        this.init(vars);
    }
    var _proto = Observer.prototype;
    _proto.init = function init(vars) {
        _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
        ScrollTrigger || _setScrollTrigger();
        var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
        this.target = target = _getTarget(target) || _docEl;
        this.vars = vars;
        ignore && (ignore = gsap.utils.toArray(ignore));
        tolerance = tolerance || 1e-9;
        dragMinimum = dragMinimum || 0;
        wheelSpeed = wheelSpeed || 1;
        scrollSpeed = scrollSpeed || 1;
        type = type || "wheel,touch,pointer";
        debounce = debounce !== false;
        lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22); // note: browser may report "normal", so default to 22.
        var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault && vars.passive !== false, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", // for devices that accommodate mouse events and touch events, we need to distinguish.
        isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc, deltaX = [
            0,
            0,
            0
        ], // wheel, scroll, pointer/touch
        deltaY = [
            0,
            0,
            0
        ], onClickTime = 0, clickCapture = function clickCapture() {
            return onClickTime = _getTime();
        }, _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
            return (self.event = e) && ignore && _isWithin(e.target, ignore) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
        }, onStopFunc = function onStopFunc() {
            self._vx.reset();
            self._vy.reset();
            onStopDelayedCall.pause();
            onStop && onStop(self);
        }, update = function update() {
            var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
            onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY); // in ScrollTrigger.normalizeScroll(), we need to know if it was touch/pointer so we need access to the deltaX/deltaY Arrays before we clear them out.
            if (changedX) {
                onRight && self.deltaX > 0 && onRight(self);
                onLeft && self.deltaX < 0 && onLeft(self);
                onChangeX && onChangeX(self);
                onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
                prevDeltaX = self.deltaX;
                deltaX[0] = deltaX[1] = deltaX[2] = 0;
            }
            if (changedY) {
                onDown && self.deltaY > 0 && onDown(self);
                onUp && self.deltaY < 0 && onUp(self);
                onChangeY && onChangeY(self);
                onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
                prevDeltaY = self.deltaY;
                deltaY[0] = deltaY[1] = deltaY[2] = 0;
            }
            if (moved || dragged) {
                onMove && onMove(self);
                if (dragged) {
                    onDragStart && dragged === 1 && onDragStart(self);
                    onDrag && onDrag(self);
                    dragged = 0;
                }
                moved = false;
            }
            locked && !(locked = false) && onLockAxis && onLockAxis(self);
            if (wheeled) {
                onWheel(self);
                wheeled = false;
            }
            id = 0;
        }, onDelta = function onDelta(x, y, index) {
            deltaX[index] += x;
            deltaY[index] += y;
            self._vx.update(x);
            self._vy.update(y);
            debounce ? id || (id = requestAnimationFrame(update)) : update();
        }, onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
            if (lockAxis && !axis) {
                self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
                locked = true;
            }
            if (axis !== "y") {
                deltaX[2] += x;
                self._vx.update(x, true); // update the velocity as frequently as possible instead of in the debounced function so that very quick touch-scrolls (flicks) feel natural. If it's the mouse/touch/pointer, force it so that we get snappy/accurate momentum scroll.
            }
            if (axis !== "x") {
                deltaY[2] += y;
                self._vy.update(y, true);
            }
            debounce ? id || (id = requestAnimationFrame(update)) : update();
        }, _onDrag = function _onDrag(e) {
            if (_ignoreCheck(e, 1)) {
                return;
            }
            e = _getEvent(e, preventDefault);
            var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
            self.x = x;
            self.y = y;
            if (isDragging || (dx || dy) && (Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum)) {
                dragged || (dragged = isDragging ? 2 : 1); // dragged: 0 = not dragging, 1 = first drag, 2 = normal drag
                isDragging || (self.isDragging = true);
                onTouchOrPointerDelta(dx, dy);
            }
        }, _onPress = self.onPress = function(e) {
            if (_ignoreCheck(e, 1) || e && e.button) {
                return;
            }
            self.axis = axis = null;
            onStopDelayedCall.pause();
            self.isPressed = true;
            e = _getEvent(e); // note: may need to preventDefault(?) Won't side-scroll on iOS Safari if we do, though.
            prevDeltaX = prevDeltaY = 0;
            self.startX = self.x = e.clientX;
            self.startY = self.y = e.clientY;
            self._vx.reset(); // otherwise the t2 may be stale if the user touches and flicks super fast and releases in less than 2 requestAnimationFrame ticks, causing velocity to be 0.
            self._vy.reset();
            _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
            self.deltaX = self.deltaY = 0;
            onPress && onPress(self);
        }, _onRelease = self.onRelease = function(e) {
            if (_ignoreCheck(e, 1)) {
                return;
            }
            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
            var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging, isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), // some touch devices need some wiggle room in terms of sensing clicks - the finger may move a few pixels.
            eventData = _getEvent(e);
            if (!isDragNotClick && isTrackingDrag) {
                self._vx.reset();
                self._vy.reset(); //if (preventDefault && allowClicks && self.isPressed) { // check isPressed because in a rare edge case, the inputObserver in ScrollTrigger may stopPropagation() on the press/drag, so the onRelease may get fired without the onPress/onDrag ever getting called, thus it could trigger a click to occur on a link after scroll-dragging it.
                if (preventDefault && allowClicks) {
                    gsap.delayedCall(0.08, function() {
                        // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
                        if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                            if (e.target.click) {
                                //some browsers (like mobile Safari) don't properly trigger the click event
                                e.target.click();
                            } else if (ownerDoc.createEvent) {
                                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                                syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                                e.target.dispatchEvent(syntheticEvent);
                            }
                        }
                    });
                }
            }
            self.isDragging = self.isGesturing = self.isPressed = false;
            onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
            dragged && update(); // in case debouncing, we don't want onDrag to fire AFTER onDragEnd().
            onDragEnd && wasDragging && onDragEnd(self);
            onRelease && onRelease(self, isDragNotClick);
        }, _onGestureStart = function _onGestureStart(e) {
            return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
        }, _onGestureEnd = function _onGestureEnd() {
            return (self.isGesturing = false) || onGestureEnd(self);
        }, onScroll = function onScroll(e) {
            if (_ignoreCheck(e)) {
                return;
            }
            var x = scrollFuncX(), y = scrollFuncY();
            onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
            scrollX = x;
            scrollY = y;
            onStop && onStopDelayedCall.restart(true);
        }, _onWheel = function _onWheel(e) {
            if (_ignoreCheck(e)) {
                return;
            }
            e = _getEvent(e, preventDefault);
            onWheel && (wheeled = true);
            var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
            onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
            onStop && !isNormalizer && onStopDelayedCall.restart(true);
        }, _onMove = function _onMove(e) {
            if (_ignoreCheck(e)) {
                return;
            }
            var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
            self.x = x;
            self.y = y;
            moved = true;
            onStop && onStopDelayedCall.restart(true);
            (dx || dy) && onTouchOrPointerDelta(dx, dy);
        }, _onHover = function _onHover(e) {
            self.event = e;
            onHover(self);
        }, _onHoverEnd = function _onHoverEnd(e) {
            self.event = e;
            onHoverEnd(self);
        }, _onClick = function _onClick(e) {
            return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
        };
        onStopDelayedCall = self._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
        self.deltaX = self.deltaY = 0;
        self._vx = _getVelocityProp(0, 50, true);
        self._vy = _getVelocityProp(0, 50, true);
        self.scrollX = scrollFuncX;
        self.scrollY = scrollFuncY;
        self.isDragging = self.isGesturing = self.isPressed = false;
        _context(this);
        self.enable = function(e) {
            if (!self.isEnabled) {
                _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
                type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
                if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
                    _addListener(target, _eventTypes[0], _onPress, passive, capture);
                    _addListener(ownerDoc, _eventTypes[2], _onRelease);
                    _addListener(ownerDoc, _eventTypes[3], _onRelease);
                    allowClicks && _addListener(target, "click", clickCapture, true, true);
                    onClick && _addListener(target, "click", _onClick);
                    onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
                    onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
                    onHover && _addListener(target, _pointerType + "enter", _onHover);
                    onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
                    onMove && _addListener(target, _pointerType + "move", _onMove);
                }
                self.isEnabled = true;
                self.isDragging = self.isGesturing = self.isPressed = moved = dragged = false;
                self._vx.reset();
                self._vy.reset();
                scrollX = scrollFuncX();
                scrollY = scrollFuncY();
                e && e.type && _onPress(e);
                onEnable && onEnable(self);
            }
            return self;
        };
        self.disable = function() {
            if (self.isEnabled) {
                // only remove the _onScroll listener if there aren't any others that rely on the functionality.
                _observers.filter(function(o) {
                    return o !== self && _isViewport(o.target);
                }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                if (self.isPressed) {
                    self._vx.reset();
                    self._vy.reset();
                    _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
                }
                _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
                _removeListener(target, "wheel", _onWheel, capture);
                _removeListener(target, _eventTypes[0], _onPress, capture);
                _removeListener(ownerDoc, _eventTypes[2], _onRelease);
                _removeListener(ownerDoc, _eventTypes[3], _onRelease);
                _removeListener(target, "click", clickCapture, true);
                _removeListener(target, "click", _onClick);
                _removeListener(ownerDoc, "gesturestart", _onGestureStart);
                _removeListener(ownerDoc, "gestureend", _onGestureEnd);
                _removeListener(target, _pointerType + "enter", _onHover);
                _removeListener(target, _pointerType + "leave", _onHoverEnd);
                _removeListener(target, _pointerType + "move", _onMove);
                self.isEnabled = self.isPressed = self.isDragging = false;
                onDisable && onDisable(self);
            }
        };
        self.kill = self.revert = function() {
            self.disable();
            var i = _observers.indexOf(self);
            i >= 0 && _observers.splice(i, 1);
            _normalizer === self && (_normalizer = 0);
        };
        _observers.push(self);
        isNormalizer && _isViewport(target) && (_normalizer = self);
        self.enable(event);
    };
    _createClass(Observer, [
        {
            key: "velocityX",
            get: function get() {
                return this._vx.getVelocity();
            }
        },
        {
            key: "velocityY",
            get: function get() {
                return this._vy.getVelocity();
            }
        }
    ]);
    return Observer;
}();
Observer.version = "3.15.0";
Observer.create = function(vars) {
    return new Observer(vars);
};
Observer.register = _initCore;
Observer.getAll = function() {
    return _observers.slice();
};
Observer.getById = function(id) {
    return _observers.filter(function(o) {
        return o.vars.id === id;
    })[0];
};
_getGSAP() && gsap.registerPlugin(Observer);
;
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollTrigger",
    ()=>ScrollTrigger,
    "default",
    ()=>ScrollTrigger
]);
/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/gsap/Observer.js [app-client] (ecmascript)");
;
var gsap, _coreInitted, _win, _doc, _docEl, _body, _root, _resizeDelay, _toArray, _clamp, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites, _ignoreResize, _normalizer, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _context, _scrollRestoration, _div100vh, _100vh, _isReverted, _clampingMax, _limitCallbacks, // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
_startup = 1, _getTime = Date.now, _time1 = _getTime(), _lastScrollTime = 0, _enabled = 0, _parseClamp = function _parseClamp(value, type, self) {
    var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self["_" + type + "Clamp"] = clamp;
    return clamp ? value.substr(6, value.length - 7) : value;
}, _keepClamp = function _keepClamp(value, clamp) {
    return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
}, _rafBugFix = function _rafBugFix() {
    return _enabled && requestAnimationFrame(_rafBugFix);
}, // in some browsers (like Firefox), screen repaints weren't consistent unless we had SOMETHING queued up in requestAnimationFrame()! So this just creates a super simple loop to keep it alive and smooth out repaints.
_pointerDownHandler = function _pointerDownHandler() {
    return _pointerIsDown = 1;
}, _pointerUpHandler = function _pointerUpHandler() {
    return _pointerIsDown = 0;
}, _passThrough = function _passThrough(v) {
    return v;
}, _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _getGSAP = function _getGSAP() {
    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
}, _isViewport = function _isViewport(e) {
    return !!~_root.indexOf(e);
}, _getViewportDimension = function _getViewportDimension(dimensionProperty) {
    return (dimensionProperty === "Height" ? _100vh : _win["inner" + dimensionProperty]) || _docEl["client" + dimensionProperty] || _body["client" + dimensionProperty];
}, _getBoundsFunc = function _getBoundsFunc(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getProxyProp"])(element, "getBoundingClientRect") || (_isViewport(element) ? function() {
        _winOffsets.width = _win.innerWidth;
        _winOffsets.height = _100vh;
        return _winOffsets;
    } : function() {
        return _getBounds(element);
    });
}, _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
    var d = _ref.d, d2 = _ref.d2, a = _ref.a;
    return (a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getProxyProp"])(scroller, "getBoundingClientRect")) ? function() {
        return a()[d];
    } : function() {
        return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
    };
}, _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
    return !isViewport || ~__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_proxies"].indexOf(element) ? _getBoundsFunc(element) : function() {
        return _winOffsets;
    };
}, _maxScroll = function _maxScroll(element, _ref2) {
    var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
    return Math.max(0, (s = "scroll" + d2) && (a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getProxyProp"])(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_docEl[s] || _body[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
}, _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
    for(var i = 0; i < _autoRefresh.length; i += 3){
        (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
    }
}, _isString = function _isString(value) {
    return typeof value === "string";
}, _isFunction = function _isFunction(value) {
    return typeof value === "function";
}, _isNumber = function _isNumber(value) {
    return typeof value === "number";
}, _isObject = function _isObject(value) {
    return typeof value === "object";
}, _endAnimation = function _endAnimation(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
}, _callback = function _callback(self, func, extraParam) {
    if (self.enabled) {
        var result = self._ctx ? self._ctx.add(function() {
            return func(self, extraParam);
        }) : func(self, extraParam);
        result && result.totalTime && (self.callbackAnimation = result);
    }
}, _abs = Math.abs, _left = "left", _top = "top", _right = "right", _bottom = "bottom", _width = "width", _height = "height", _Right = "Right", _Left = "Left", _Top = "Top", _Bottom = "Bottom", _padding = "padding", _margin = "margin", _Width = "Width", _Height = "Height", _px = "px", _getComputedStyle = function _getComputedStyle(element) {
    return _win.getComputedStyle(element.nodeType === Node.DOCUMENT_NODE ? element.scrollingElement : element);
}, _makePositionable = function _makePositionable(element) {
    // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
    var position = _getComputedStyle(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
}, _setDefaults = function _setDefaults(obj, defaults) {
    for(var p in defaults){
        p in obj || (obj[p] = defaults[p]);
    }
    return obj;
}, _getBounds = function _getBounds(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect ? element.getBoundingClientRect() : element.scrollingElement.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
}, _getSize = function _getSize(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
}, _getLabelRatioArray = function _getLabelRatioArray(timeline) {
    var a = [], labels = timeline.labels, duration = timeline.duration(), p;
    for(p in labels){
        a.push(labels[p] / duration);
    }
    return a;
}, _getClosestLabel = function _getClosestLabel(animation) {
    return function(value) {
        return gsap.utils.snap(_getLabelRatioArray(animation), value);
    };
}, _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
    var snap = gsap.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a, b) {
        return a - b;
    });
    return a ? function(value, direction, threshold) {
        if (threshold === void 0) {
            threshold = 1e-3;
        }
        var i;
        if (!direction) {
            return snap(value);
        }
        if (direction > 0) {
            value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.
            for(i = 0; i < a.length; i++){
                if (a[i] >= value) {
                    return a[i];
                }
            }
            return a[i - 1];
        } else {
            i = a.length;
            value += threshold;
            while(i--){
                if (a[i] <= value) {
                    return a[i];
                }
            }
        }
        return a[0];
    } : function(value, direction, threshold) {
        if (threshold === void 0) {
            threshold = 1e-3;
        }
        var snapped = snap(value);
        return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
}, _getLabelAtDirection = function _getLabelAtDirection(timeline) {
    return function(value, st) {
        return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
    };
}, _multiListener = function _multiListener(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
        return func(element, type, callback);
    });
}, _addListener = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
        passive: !nonPassive,
        capture: !!capture
    });
}, _removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
}, _wheelListener = function _wheelListener(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
        func(el, "wheel", scrollFunc);
        func(el, "touchmove", scrollFunc);
    }
}, _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, _defaults = {
    toggleActions: "play",
    anticipatePin: 0
}, _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
}, _offsetToPx = function _offsetToPx(value, size) {
    if (_isString(value)) {
        var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
        if (~eqIndex) {
            value.indexOf("%") > eqIndex && (relative *= size / 100);
            value = value.substr(0, eqIndex - 1);
        }
        value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
}, _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e = _doc.createElement("div"), useFixedPosition = _isViewport(container) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getProxyProp"])(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body : container.tagName === "IFRAME" ? container.contentDocument.body : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_vertical"] ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];
    _positionMarker(e, 0, direction, isStart);
    return e;
}, _positionMarker = function _positionMarker(marker, start, direction, flipped) {
    var vars = {
        display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap.set(marker, vars);
}, _triggers = [], _ids = {}, _rafID, _sync = function _sync() {
    return _getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
}, _onScroll = function _onScroll() {
    // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
    if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body.clientWidth) {
        // if the user is dragging the scrollbar, allow it.
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].cache++;
        if (_normalizer) {
            _rafID || (_rafID = requestAnimationFrame(_updateAll));
        } else {
            _updateAll(); // Safari in particular (on desktop) NEEDS the immediate update rather than waiting for a requestAnimationFrame() whereas iOS seems to benefit from waiting for the requestAnimationFrame() tick, at least when normalizing. See https://codepen.io/GreenSock/pen/qBYozqO?editors=0110
        }
        _lastScrollTime || _dispatch("scrollStart");
        _lastScrollTime = _getTime();
    }
}, _setBaseDimensions = function _setBaseDimensions() {
    _baseScreenWidth = _win.innerWidth;
    _baseScreenHeight = _win.innerHeight;
}, _onResize = function _onResize(force) {
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].cache++;
    (force === true || !_refreshing && !_ignoreResize && !_doc.fullscreenElement && !_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * 0.25)) && _resizeDelay.restart(true);
}, // ignore resizes triggered by refresh()
_listeners = {}, _emptyArray = [], _softRefresh = function _softRefresh() {
    return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
}, _dispatch = function _dispatch(type) {
    return _listeners[type] && _listeners[type].map(function(f) {
        return f();
    }) || _emptyArray;
}, _savedStyles = [], // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
_revertRecorded = function _revertRecorded(media) {
    for(var i = 0; i < _savedStyles.length; i += 5){
        if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
            _savedStyles[i].style.cssText = _savedStyles[i + 1];
            _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
            _savedStyles[i + 3].uncache = 1;
        }
    }
}, _recordScrollPositions = function _recordScrollPositions() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].forEach(function(obj) {
        return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
    });
}, // record the current scroll position. Also force the clearing of the cache because some browsers take a little while to dispatch the "scroll" event and the user may have changed the scroll position and then called ScrollTrigger.refresh() right away
_revertAll = function _revertAll(kill, media) {
    var trigger;
    for(_i = 0; _i < _triggers.length; _i++){
        trigger = _triggers[_i];
        if (trigger && (!media || trigger._ctx === media)) {
            if (kill) {
                trigger.kill(1);
            } else {
                trigger.revert(true, true);
            }
        }
    }
    _isReverted = true;
    media && _revertRecorded(media);
    media || _dispatch("revert");
}, _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
    // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].cache++;
    (force || !_refreshingAll) && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].forEach(function(obj) {
        return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString(scrollRestoration) && (_win.history.scrollRestoration = _scrollRestoration = scrollRestoration);
}, _refreshingAll, _refreshID = 0, _queueRefreshID, _queueRefreshAll = function _queueRefreshAll() {
    // we don't want to call _refreshAll() every time we create a new ScrollTrigger (for performance reasons) - it's better to batch them. Some frameworks dynamically load content and we can't rely on the window's "load" or "DOMContentLoaded" events to trigger it.
    if (_queueRefreshID !== _refreshID) {
        var id = _queueRefreshID = _refreshID;
        requestAnimationFrame(function() {
            return id === _refreshID && _refreshAll(true);
        });
    }
}, _refresh100vh = function _refresh100vh() {
    _body.appendChild(_div100vh);
    _100vh = !_normalizer && _div100vh.offsetHeight || _win.innerHeight;
    _body.removeChild(_div100vh);
}, _hideAllMarkers = function _hideAllMarkers(hide) {
    return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
        return el.style.display = hide ? "none" : "block";
    });
}, _refreshAll = function _refreshAll(force, skipRevert) {
    _docEl = _doc.documentElement; // some frameworks like Astro may cache the <body> and replace it during routing, so we'll just re-record the _docEl and _body for safety (otherwise, the markers may not get added properly).
    _body = _doc.body;
    _root = [
        _win,
        _doc,
        _docEl,
        _body
    ];
    if (_lastScrollTime && !force && !_isReverted) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
        return;
    }
    _refresh100vh();
    _refreshingAll = ScrollTrigger.isRefreshing = true;
    _isReverted || _recordScrollPositions();
    var refreshInits = _dispatch("refreshInit");
    _sort && ScrollTrigger.sort();
    skipRevert || _revertAll();
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].forEach(function(obj) {
        if (_isFunction(obj)) {
            obj.smooth && (obj.target.style.scrollBehavior = "auto"); // smooth scrolling interferes
            obj(0);
        }
    });
    _triggers.slice(0).forEach(function(t) {
        return t.refresh();
    }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.
    _isReverted = false;
    _triggers.forEach(function(t) {
        // nested pins (pinnedContainer) with pinSpacing may expand the container, so we must accommodate that here.
        if (t._subPinOffset && t.pin) {
            var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
            t.revert(true, 1);
            t.adjustPinSpacing(t.pin[prop] - original);
            t.refresh();
        }
    });
    _clampingMax = 1; // pinSpacing might be propping a page open, thus when we .setPositions() to clamp a ScrollTrigger's end we should leave the pinSpacing alone. That's what this flag is for.
    _hideAllMarkers(true);
    _triggers.forEach(function(t) {
        // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max". Same for anything with a clamped end
        var max = _maxScroll(t.scroller, t._dir), endClamp = t.vars.end === "max" || t._endClamp && t.end > max, startClamp = t._startClamp && t.start >= max;
        (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
    });
    _hideAllMarkers(false);
    _clampingMax = 0;
    refreshInits.forEach(function(result) {
        return result && result.render && result.render(-1);
    }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].forEach(function(obj) {
        if (_isFunction(obj)) {
            obj.smooth && requestAnimationFrame(function() {
                return obj.target.style.scrollBehavior = "smooth";
            });
            obj.rec && obj(obj.rec);
        }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _refreshingAll = 2;
    _updateAll(2);
    _triggers.forEach(function(t) {
        return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
    });
    _refreshingAll = ScrollTrigger.isRefreshing = false;
    _dispatch("refresh");
}, _lastScroll = 0, _direction = 1, _primary, _updateAll = function _updateAll(force) {
    if (force === 2 || !_refreshingAll && !_isReverted) {
        // _isReverted could be true if, for example, a matchMedia() is in the process of executing. We don't want to update during the time everything is reverted.
        ScrollTrigger.isUpdating = true;
        _primary && _primary.update(0); // ScrollSmoother uses refreshPriority -9999 to become the primary that gets updated before all others because it affects the scroll position.
        var l = _triggers.length, time = _getTime(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
        _direction = _lastScroll > scroll ? -1 : 1;
        _refreshingAll || (_lastScroll = scroll);
        if (recordVelocity) {
            if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
                _lastScrollTime = 0;
                _dispatch("scrollEnd");
            }
            _time2 = _time1;
            _time1 = time;
        }
        if (_direction < 0) {
            _i = l;
            while(_i-- > 0){
                _triggers[_i] && _triggers[_i].update(0, recordVelocity);
            }
            _direction = 1;
        } else {
            for(_i = 0; _i < l; _i++){
                _triggers[_i] && _triggers[_i].update(0, recordVelocity);
            }
        }
        ScrollTrigger.isUpdating = false;
    }
    _rafID = 0;
}, _propNamesToCopy = [
    _left,
    _top,
    _bottom,
    _right,
    _margin + _Bottom,
    _margin + _Right,
    _margin + _Top,
    _margin + _Left,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order"
], _stateProps = _propNamesToCopy.concat([
    _width,
    _height,
    "boxSizing",
    "max" + _Width,
    "max" + _Height,
    "position",
    _margin,
    _padding,
    _padding + _Top,
    _padding + _Right,
    _padding + _Bottom,
    _padding + _Left
]), _swapPinOut = function _swapPinOut(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) {
        _setState(cache.spacerState);
    } else if (pin._gsap.swappedIn) {
        var parent = spacer.parentNode;
        if (parent) {
            parent.insertBefore(pin, spacer);
            parent.removeChild(spacer);
        }
    }
    pin._gsap.swappedIn = false;
}, _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
        var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
        while(i--){
            p = _propNamesToCopy[i];
            spacerStyle[p] = cs[p];
        }
        spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
        cs.display === "inline" && (spacerStyle.display = "inline-block");
        pinStyle[_bottom] = pinStyle[_right] = "auto";
        spacerStyle.flexBasis = cs.flexBasis || "auto";
        spacerStyle.overflow = "visible";
        spacerStyle.boxSizing = "border-box";
        spacerStyle[_width] = _getSize(pin, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_horizontal"]) + _px;
        spacerStyle[_height] = _getSize(pin, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_vertical"]) + _px;
        spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
        _setState(spacerState);
        pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
        pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
        pinStyle[_padding] = cs[_padding];
        if (pin.parentNode !== spacer) {
            pin.parentNode.insertBefore(spacer, pin);
            spacer.appendChild(pin);
        }
        pin._gsap.swappedIn = true;
    }
}, _capsExp = /([A-Z])/g, _setState = function _setState(state) {
    if (state) {
        var style = state.t.style, l = state.length, i = 0, p, value;
        (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off
        for(; i < l; i += 2){
            value = state[i + 1];
            p = state[i];
            if (value) {
                style[p] = value;
            } else if (style[p]) {
                style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
            }
        }
    }
}, _getState = function _getState(element) {
    // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
    var l = _stateProps.length, style = element.style, state = [], i = 0;
    for(; i < l; i++){
        state.push(_stateProps[i], style[_stateProps[i]]);
    }
    state.t = element;
    return state;
}, _copyState = function _copyState(state, override, omitOffsets) {
    var result = [], l = state.length, i = omitOffsets ? 8 : 0, // skip top, left, right, bottom if omitOffsets is true
    p;
    for(; i < l; i += 2){
        p = state[i];
        result.push(p, p in override ? override[p] : state[i + 1]);
    }
    result.t = state.t;
    return result;
}, _winOffsets = {
    left: 0,
    top: 0
}, // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
// _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
// 	scroller = _getTarget(scroller || _win);
// 	let direction = horizontal ? _horizontal : _vertical,
// 		isViewport = _isViewport(scroller);
// 	_getSizeFunc(scroller, isViewport, direction);
// 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
// },
_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction(value) && (value = value(self));
    if (_isString(value) && value.substr(0, 3) === "max") {
        value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value); // convert a string number like "45" to an actual number
    if (!_isNumber(value)) {
        _isFunction(trigger) && (trigger = trigger(self));
        var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
        element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getTarget"])(trigger, self) || _body;
        bounds = _getBounds(element) || {};
        if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
            // if display is "none", it won't report getBoundingClientRect() properly
            display = element.style.display;
            element.style.display = "block";
            bounds = _getBounds(element);
            display ? element.style.display = display : element.style.removeProperty("display");
        }
        localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
        globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
        value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
        markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
        scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
    } else {
        containerAnimation && (value = gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
        markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
        self[clampZeroProp] = value || -0.001;
        value < 0 && (value = 0);
    }
    if (marker) {
        var position = value + scrollerSize, isStart = marker._isStart;
        p1 = "scroll" + direction.d2;
        _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);
        if (useFixedPosition) {
            scrollerBounds = _getBounds(markerScroller);
            useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
        }
    }
    if (containerAnimation && element) {
        p1 = _getBounds(element);
        containerAnimation.seek(scrollerMax);
        p2 = _getBounds(element);
        containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
        value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
}, _prefixExp = /(webkit|moz|length|cssText|inset)/i, _reparent = function _reparent(element, parent, top, left) {
    if (element.parentNode !== parent) {
        var style = element.style, p, cs;
        if (parent === _body) {
            element._stOrig = style.cssText; // record original inline styles so we can revert them later
            cs = _getComputedStyle(element);
            for(p in cs){
                // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
                if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
                    style[p] = cs[p];
                }
            }
            style.top = top;
            style.left = left;
        } else {
            style.cssText = element._stOrig;
        }
        gsap.core.getCache(element).uncache = 1;
        parent.appendChild(element);
    }
}, _interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue, last2 = last1;
    return function(value) {
        var current = Math.round(getValueFunc()); // round because in some [very uncommon] Windows environments, scroll can get reported with decimals even though it was set without.
        if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
            // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
            value = current;
            onInterrupt && onInterrupt();
        }
        last2 = last1;
        last1 = Math.round(value);
        return last1;
    };
}, _shiftMarker = function _shiftMarker(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    gsap.set(marker, vars);
}, // _mergeAnimations = animations => {
// 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
// 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
// 	tl.smoothChildTiming = false;
// 	return tl;
// },
// returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
_getTweenCreator = function _getTweenCreator(scroller, direction) {
    var getScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getScrollFunc"])(scroller, direction), prop = "_scroll" + direction.p2, // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
    getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
        var tween = getTween.tween, onComplete = vars.onComplete, modifiers = {};
        initialValue = initialValue || getScroll();
        var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
            tween.kill();
            getTween.tween = 0;
        });
        change2 = change1 && change2 || 0; // if change1 is 0, we set that to the difference and ignore change2. Otherwise, there would be a compound effect.
        change1 = change1 || scrollTo - initialValue;
        tween && tween.kill();
        vars[prop] = scrollTo;
        vars.inherit = false;
        vars.modifiers = modifiers;
        modifiers[prop] = function() {
            return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
        };
        vars.onUpdate = function() {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].cache++;
            getTween.tween && _updateAll(); // if it was interrupted/killed, like in a context.revert(), don't force an updateAll()
        };
        vars.onComplete = function() {
            getTween.tween = 0;
            onComplete && onComplete.call(tween);
        };
        tween = getTween.tween = gsap.to(scroller, vars);
        return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
        return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener(scroller, "wheel", getScroll.wheelHandler); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.
    ScrollTrigger.isTouch && _addListener(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
};
var ScrollTrigger = /*#__PURE__*/ function() {
    function ScrollTrigger(vars, animation) {
        _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
        _context(this);
        this.init(vars, animation);
    }
    var _proto = ScrollTrigger.prototype;
    _proto.init = function init(vars, animation) {
        this.progress = this.start = 0;
        this.vars && this.kill(true, true); // in case it's being initted again
        if (!_enabled) {
            this.update = this.refresh = this.kill = _passThrough;
            return;
        }
        vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
            trigger: vars
        } : vars, _defaults);
        var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_horizontal"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_vertical"], isToggle = !scrub && scrub !== 0, scroller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getTarget"])(vars.scroller || _win), scrollerCache = gsap.core.getCache(scroller), isViewport = _isViewport(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getProxyProp"])(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [
            vars.onEnter,
            vars.onLeave,
            vars.onEnterBack,
            vars.onLeaveBack
        ], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
            return vars.onRefreshInit(self);
        }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getScrollFunc"])(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn; // for the sake of efficiency, _startClamp/_endClamp serve like a truthy value indicating that clamping was enabled on the start/end, and ALSO store the actual pre-clamped numeric value. We tap into that in ScrollSmoother for speed effects. So for example, if start="clamp(top bottom)" results in a start of -100 naturally, it would get clamped to 0 but -100 would be stored in _startClamp.
        self._startClamp = self._endClamp = false;
        self._dir = direction;
        anticipatePin *= 45;
        self.scroller = scroller;
        self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
        scroll1 = scrollFunc();
        self.vars = vars;
        animation = animation || vars.animation;
        if ("refreshPriority" in vars) {
            _sort = 1;
            vars.refreshPriority === -9999 && (_primary = self); // used by ScrollSmoother
        }
        scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
            top: _getTweenCreator(scroller, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_vertical"]),
            left: _getTweenCreator(scroller, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_horizontal"])
        };
        self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
        self.scrubDuration = function(value) {
            scrubSmooth = _isNumber(value) && value;
            if (!scrubSmooth) {
                scrubTween && scrubTween.progress(1).kill();
                scrubTween = 0;
            } else {
                scrubTween ? scrubTween.duration(value) : scrubTween = gsap.to(animation, {
                    ease: "expo",
                    totalProgress: "+=0",
                    inherit: false,
                    duration: scrubSmooth,
                    paused: true,
                    onComplete: function onComplete() {
                        return onScrubComplete && onScrubComplete(self);
                    }
                });
            }
        };
        if (animation) {
            animation.vars.lazy = false;
            animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true); // special case: if this ScrollTrigger gets re-initted, a from() tween with a stagger could get initted initially and then reverted on the re-init which means it'll need to get rendered again here to properly display things. Otherwise, See https://gsap.com/forums/topic/36777-scrollsmoother-splittext-nextjs/ and https://codepen.io/GreenSock/pen/eYPyPpd?editors=0010
            self.animation = animation.pause();
            animation.scrollTrigger = self;
            self.scrubDuration(scrub);
            snap1 = 0;
            id || (id = animation.vars.id);
        }
        if (snap) {
            // TODO: potential idea: use legitimate CSS scroll snapping by pushing invisible elements into the DOM that serve as snap positions, and toggle the document.scrollingElement.style.scrollSnapType onToggle. See https://codepen.io/GreenSock/pen/JjLrgWM for a quick proof of concept.
            if (!_isObject(snap) || snap.push) {
                snap = {
                    snapTo: snap
                };
            }
            "scrollBehavior" in _body.style && gsap.set(isViewport ? [
                _body,
                _docEl
            ] : scroller, {
                scrollBehavior: "auto"
            }); // smooth scrolling doesn't work with snap.
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].forEach(function(o) {
                return _isFunction(o) && o.target === (isViewport ? _doc.scrollingElement || _docEl : scroller) && (o.smooth = false);
            }); // note: set smooth to false on both the vertical and horizontal scroll getters/setters
            snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
                return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
            } : gsap.utils.snap(snap.snapTo);
            snapDurClamp = snap.duration || {
                min: 0.1,
                max: 2
            };
            snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
            snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function() {
                var scroll = scrollFunc(), refreshedRecently = _getTime() - lastRefresh < 500, tween = tweenTo.tween;
                if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
                    var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0, change1 = gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
                    endValue = snapFunc(naturalEnd, self);
                    _isNumber(endValue) || (endValue = naturalEnd); // in case the function didn't return a number, fall back to using the naturalEnd
                    endScroll = Math.max(0, Math.round(start + endValue * change));
                    if (scroll <= end && scroll >= start && endScroll !== scroll) {
                        if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                            // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
                            return;
                        }
                        if (snap.inertia === false) {
                            change1 = endValue - progress;
                        }
                        tweenTo(endScroll, {
                            duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                            ease: snap.ease || "power3",
                            data: _abs(endScroll - scroll),
                            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                            onInterrupt: function onInterrupt() {
                                return snapDelayedCall.restart(true) && _onInterrupt && _callback(self, _onInterrupt);
                            },
                            onComplete: function onComplete() {
                                self.update();
                                lastSnap = scrollFunc();
                                if (animation && !isToggle) {
                                    // the resolution of the scrollbar is limited, so we should correct the scrubbed animation's playhead at the end to match EXACTLY where it was supposed to snap
                                    scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                                }
                                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                                onSnapComplete && onSnapComplete(self);
                                _onComplete && _callback(self, _onComplete);
                            }
                        }, scroll, change1 * change, endScroll - scroll - change1 * change);
                        onStart && _callback(self, onStart, tweenTo.tween);
                    }
                } else if (self.isActive && lastSnap !== scroll) {
                    snapDelayedCall.restart(true);
                }
            }).pause();
        }
        id && (_ids[id] = self);
        trigger = self.trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getTarget"])(trigger || pin !== true && pin); // if a trigger has some kind of scroll-related effect applied that could contaminate the "y" or "x" position (like a ScrollSmoother effect), we needed a way to temporarily revert it, so we use the stRevert property of the gsCache. It can return another function that we'll call at the end so it can return to its normal state.
        customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
        customRevertReturn && (customRevertReturn = customRevertReturn(self));
        pin = pin === true ? trigger : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getTarget"])(pin);
        _isString(toggleClass) && (toggleClass = {
            targets: trigger,
            className: toggleClass
        });
        if (pin) {
            pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default. We should check that pin.parentNode is an element (not shadow dom window)
            self.pin = pin;
            pinCache = gsap.core.getCache(pin);
            if (!pinCache.spacer) {
                // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
                if (pinSpacer) {
                    pinSpacer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getTarget"])(pinSpacer);
                    pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular
                    pinCache.spacerIsNative = !!pinSpacer;
                    pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
                }
                pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
                spacer.classList.add("pin-spacer");
                id && spacer.classList.add("pin-spacer-" + id);
                pinCache.pinState = pinOriginalState = _getState(pin);
            } else {
                pinOriginalState = pinCache.pinState;
            }
            vars.force3D !== false && gsap.set(pin, {
                force3D: true
            });
            self.spacer = spacer = pinCache.spacer;
            cs = _getComputedStyle(pin);
            spacingStart = cs[pinSpacing + direction.os2];
            pinGetter = gsap.getProperty(pin);
            pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).
            _swapPinIn(pin, spacer, cs);
            pinState = _getState(pin);
        }
        if (markers) {
            markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
            markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
            markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
            offset = markerStartTrigger["offset" + direction.op.d2];
            var content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getTarget"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getProxyProp"])(scroller, "content") || scroller);
            markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
            markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
            containerAnimation && (caMarkerSetter = gsap.quickSetter([
                markerStart,
                markerEnd
            ], direction.a, _px));
            if (!useFixedPosition && !(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_proxies"].length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getProxyProp"])(scroller, "fixedMarkers") === true)) {
                _makePositionable(isViewport ? _body : scroller);
                gsap.set([
                    markerStartTrigger,
                    markerEndTrigger
                ], {
                    force3D: true
                });
                markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
                markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
            }
        }
        if (containerAnimation) {
            var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
            containerAnimation.eventCallback("onUpdate", function() {
                self.update(0, 0, 1);
                oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
            });
        }
        self.previous = function() {
            return _triggers[_triggers.indexOf(self) - 1];
        };
        self.next = function() {
            return _triggers[_triggers.indexOf(self) + 1];
        };
        self.revert = function(revert, temp) {
            if (!temp) {
                return self.kill(true);
            } // for compatibility with gsap.context() and gsap.matchMedia() which call revert()
            var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
            if (r !== self.isReverted) {
                if (r) {
                    prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.
                    prevProgress = self.progress;
                    prevAnimProgress = animation && animation.progress();
                }
                markerStart && [
                    markerStart,
                    markerEnd,
                    markerStartTrigger,
                    markerEndTrigger
                ].forEach(function(m) {
                    return m.style.display = r ? "none" : "block";
                });
                if (r) {
                    _refreshing = self;
                    self.update(r); // make sure the pin is back in its original position so that all the measurements are correct. do this BEFORE swapping the pin out
                }
                if (pin && (!pinReparent || !self.isActive)) {
                    if (r) {
                        _swapPinOut(pin, spacer, pinOriginalState);
                    } else {
                        _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
                    }
                }
                r || self.update(r); // when we're restoring, the update should run AFTER swapping the pin into its pin-spacer.
                _refreshing = prevRefreshing; // restore. We set it to true during the update() so that things fire properly in there.
                self.isReverted = r;
            }
        };
        self.refresh = function(soft, force, position, pinOffset) {
            // position is typically only defined if it's coming from setPositions() - it's a way to skip the normal parsing. pinOffset is also only from setPositions() and is mostly related to fancy stuff we need to do in ScrollSmoother with effects
            if ((_refreshing || !self.enabled) && !force) {
                return;
            }
            if (pin && soft && _lastScrollTime) {
                _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
                return;
            }
            !_refreshingAll && onRefreshInit && onRefreshInit(self);
            _refreshing = self;
            if (tweenTo.tween && !position) {
                // we skip this if a position is passed in because typically that's from .setPositions() and it's best to allow in-progress snapping to continue.
                tweenTo.tween.kill();
                tweenTo.tween = 0;
            }
            scrubTween && scrubTween.pause();
            if (invalidateOnRefresh && animation) {
                animation.revert({
                    kill: false
                }).invalidate();
                animation.getChildren ? animation.getChildren(true, true, false).forEach(function(t) {
                    return t.vars.immediateRender && t.render(0, true, true);
                }) : animation.vars.immediateRender && animation.render(0, true, true); // any from() or fromTo() tweens should render immediately (well, unless they have immediateRender: false)
            }
            self.isReverted || self.revert(true, true);
            self._subPinOffset = false; // we'll set this to true in the sub-pins if we find any
            var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01 || !change, offset = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getTarget"])(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
            if (markers && _isObject(position)) {
                // if we alter the start/end positions with .setPositions(), it generally feeds in absolute NUMBERS which don't convey information about where to line up the markers, so to keep it intuitive, we record how far the trigger positions shift after applying the new numbers and then offset by that much in the opposite direction. We do the same to the associated trigger markers too of course.
                markerStartOffset = gsap.getProperty(markerStartTrigger, direction.p);
                markerEndOffset = gsap.getProperty(markerEndTrigger, direction.p);
            }
            while(i-- > 0){
                // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
                curTrigger = _triggers[i];
                curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.
                curPin = curTrigger.pin;
                if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
                    revertedPins || (revertedPins = []);
                    revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly
                    curTrigger.revert(true, true);
                }
                if (curTrigger !== _triggers[i]) {
                    // in case it got removed.
                    triggerIndex--;
                    i--;
                }
            }
            _isFunction(parsedStart) && (parsedStart = parsedStart(self));
            parsedStart = _parseClamp(parsedStart, "start", self);
            start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -0.001 : 0);
            _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
            if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
                if (~parsedEnd.indexOf(" ")) {
                    parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
                } else {
                    offset = _offsetToPx(parsedEnd.substr(2), size);
                    parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.
                    parsedEndTrigger = trigger;
                }
            }
            parsedEnd = _parseClamp(parsedEnd, "end", self);
            end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -0.001;
            offset = 0;
            i = triggerIndex;
            while(i--){
                curTrigger = _triggers[i] || {};
                curPin = curTrigger.pin;
                if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
                    cs = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
                    if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
                        // numeric start values shouldn't be offset at all - treat them as absolute
                        offset += cs * (1 - curTrigger.progress);
                    }
                    curPin === pin && (otherPinOffset += cs);
                }
            }
            start += offset;
            end += offset;
            self._startClamp && (self._startClamp += offset);
            if (self._endClamp && !_refreshingAll) {
                self._endClamp = end || -0.001;
                end = Math.min(end, _maxScroll(scroller, direction));
            }
            change = end - start || (start -= 0.01) && 0.001;
            if (isFirstRefresh) {
                // on the very first refresh(), the prevProgress couldn't have been accurate yet because the start/end were never calculated, so we set it here. Before 3.11.5, it could lead to an inaccurate scroll position restoration with snapping.
                prevProgress = gsap.utils.clamp(0, 1, gsap.utils.normalize(start, end, prevScroll));
            }
            self._pinPush = otherPinOffset;
            if (markerStart && offset) {
                // offset the markers if necessary
                cs = {};
                cs[direction.a] = "+=" + offset;
                pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
                gsap.set([
                    markerStart,
                    markerEnd
                ], cs);
            }
            if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
                cs = _getComputedStyle(pin);
                isVertical = direction === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_vertical"];
                scroll = scrollFunc(); // recalculate because the triggers can affect the scroll
                pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
                if (!max && end > 1) {
                    // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://gsap.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/
                    forcedOverflow = (isViewport ? _doc.scrollingElement || _docEl : scroller).style;
                    forcedOverflow = {
                        style: forcedOverflow,
                        value: forcedOverflow["overflow" + direction.a.toUpperCase()]
                    };
                    if (isViewport && _getComputedStyle(_body)["overflow" + direction.a.toUpperCase()] !== "scroll") {
                        // avoid an extra scrollbar if BOTH <html> and <body> have overflow set to "scroll"
                        forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
                    }
                }
                _swapPinIn(pin, spacer, cs);
                pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.
                bounds = _getBounds(pin, true);
                oppositeScroll = useFixedPosition && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getScrollFunc"])(scroller, isVertical ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_horizontal"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_vertical"])();
                if (pinSpacing) {
                    spacerState = [
                        pinSpacing + direction.os2,
                        change + otherPinOffset + _px
                    ];
                    spacerState.t = spacer;
                    i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
                    if (i) {
                        spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).
                        spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
                    }
                    _setState(spacerState);
                    if (pinnedContainer) {
                        // in ScrollTrigger.refresh(), we need to re-evaluate the pinContainer's size because this pinSpacing may stretch it out, but we can't just add the exact distance because depending on layout, it may not push things down or it may only do so partially.
                        _triggers.forEach(function(t) {
                            if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                                t._subPinOffset = true;
                            }
                        });
                    }
                    useFixedPosition && scrollFunc(prevScroll);
                } else {
                    i = _getSize(pin, direction);
                    i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
                }
                if (useFixedPosition) {
                    override = {
                        top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
                        left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
                        boxSizing: "border-box",
                        position: "fixed"
                    };
                    override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
                    override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
                    override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
                    override[_padding] = cs[_padding];
                    override[_padding + _Top] = cs[_padding + _Top];
                    override[_padding + _Right] = cs[_padding + _Right];
                    override[_padding + _Bottom] = cs[_padding + _Bottom];
                    override[_padding + _Left] = cs[_padding + _Left];
                    pinActiveState = _copyState(pinOriginalState, override, pinReparent);
                    _refreshingAll && scrollFunc(0);
                }
                if (animation) {
                    // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
                    initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.
                    _suppressOverwrites(1);
                    animation.render(animation.duration(), true, true);
                    pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
                    pinMoves = Math.abs(change - pinChange) > 1;
                    useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.
                    animation.render(0, true, true);
                    initted || animation.invalidate(true);
                    animation.parent || animation.totalTime(animation.totalTime()); // if, for example, a toggleAction called play() and then refresh() happens and when we render(1) above, it would cause the animation to complete and get removed from its parent, so this makes sure it gets put back in.
                    _suppressOverwrites(0);
                } else {
                    pinChange = change;
                }
                forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
            } else if (trigger && scrollFunc() && !containerAnimation) {
                // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
                bounds = trigger.parentNode;
                while(bounds && bounds !== _body){
                    if (bounds._pinOffset) {
                        start -= bounds._pinOffset;
                        end -= bounds._pinOffset;
                    }
                    bounds = bounds.parentNode;
                }
            }
            revertedPins && revertedPins.forEach(function(t) {
                return t.revert(false, true);
            });
            self.start = start;
            self.end = end;
            scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc(); // reset velocity
            if (!containerAnimation && !_refreshingAll) {
                scroll1 < prevScroll && scrollFunc(prevScroll);
                self.scroll.rec = 0;
            }
            self.revert(false, true);
            lastRefresh = _getTime();
            if (snapDelayedCall) {
                lastSnap = -1; // just so snapping gets re-enabled, clear out any recorded last value
                // self.isActive && scrollFunc(start + change * prevProgress); // previously this line was here to ensure that when snapping kicks in, it's from the previous progress but in some cases that's not desirable, like an all-page ScrollTrigger when new content gets added to the page, that'd totally change the progress.
                snapDelayedCall.restart(true);
            }
            _refreshing = 0;
            animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().
            if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh || animation && !animation._initted) {
                // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
                animation && !isToggle && (animation._initted || prevProgress || animation.vars.immediateRender !== false) && animation.totalProgress(containerAnimation && start < -0.001 && !prevProgress ? gsap.utils.normalize(start, end, 0) : prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.
                self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
            }
            pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
            scrubTween && scrubTween.invalidate();
            if (!isNaN(markerStartOffset)) {
                // numbers were passed in for the position which are absolute, so instead of just putting the markers at the very bottom of the viewport, we figure out how far they shifted down (it's safe to assume they were originally positioned in closer relation to the trigger element with values like "top", "center", a percentage or whatever, so we offset that much in the opposite direction to basically revert them to the relative position thy were at previously.
                markerStartOffset -= gsap.getProperty(markerStartTrigger, direction.p);
                markerEndOffset -= gsap.getProperty(markerEndTrigger, direction.p);
                _shiftMarker(markerStartTrigger, direction, markerStartOffset);
                _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
                _shiftMarker(markerEndTrigger, direction, markerEndOffset);
                _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
            }
            isFirstRefresh && !_refreshingAll && self.update(); // edge case - when you reload a page when it's already scrolled down, some browsers fire a "scroll" event before DOMContentLoaded, triggering an updateAll(). If we don't update the self.progress as part of refresh(), then when it happens next, it may record prevProgress as 0 when it really shouldn't, potentially causing a callback in an animation to fire again.
            if (onRefresh && !_refreshingAll && !executingOnRefresh) {
                // when refreshing all, we do extra work to correct pinnedContainer sizes and ensure things don't exceed the maxScroll, so we should do all the refreshes at the end after all that work so that the start/end values are corrected.
                executingOnRefresh = true;
                onRefresh(self);
                executingOnRefresh = false;
            }
        };
        self.getVelocity = function() {
            return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1000 || 0;
        };
        self.endAnimation = function() {
            _endAnimation(self.callbackAnimation);
            if (animation) {
                scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
            }
        };
        self.labelToScroll = function(label) {
            return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
        };
        self.getTrailing = function(name) {
            var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
            return (_isString(name) ? a.filter(function(t) {
                return t.vars.preventOverlaps === name;
            }) : a).filter(function(t) {
                return self.direction > 0 ? t.end <= start : t.start >= end;
            });
        };
        self.update = function(reset, recordVelocity, forceFake) {
            if (containerAnimation && !forceFake && !reset) {
                return;
            }
            var scroll = _refreshingAll === true ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
            if (recordVelocity) {
                scroll2 = scroll1;
                scroll1 = containerAnimation ? scrollFunc() : scroll;
                if (snap) {
                    snap2 = snap1;
                    snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
                }
            } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).
            if (anticipatePin && pin && !_refreshing && !_startup && _lastScrollTime) {
                if (!clipped && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) {
                    clipped = 0.0001;
                } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) {
                    clipped = 0.9999;
                }
            }
            if (clipped !== prevProgress && self.enabled) {
                isActive = self.isActive = !!clipped && clipped < 1;
                wasActive = !!prevProgress && prevProgress < 1;
                toggled = isActive !== wasActive;
                stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)
                self.direction = clipped > prevProgress ? 1 : -1;
                self.progress = clipped;
                if (stateChanged && !_refreshing) {
                    toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.
                    if (isToggle) {
                        action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)
                        isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
                    }
                }
                preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
                    return t.endAnimation();
                }));
                if (!isToggle) {
                    if (scrubTween && !_refreshing && !_startup) {
                        scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start); // if there's a scrub on both the container animation and this one (or a ScrollSmoother), the update order would cause this one not to have rendered yet, so it wouldn't make any progress before we .restart() it heading toward the new progress so it'd appear stuck thus we force a render here.
                        if (scrubTween.resetTo) {
                            scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
                        } else {
                            // legacy support (courtesy), before 3.10.0
                            scrubTween.vars.totalProgress = clipped;
                            scrubTween.invalidate().restart();
                        }
                    } else if (animation) {
                        animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
                    }
                }
                if (pin) {
                    reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
                    if (!useFixedPosition) {
                        pinSetter(_round(pinStart + pinChange * clipped));
                    } else if (stateChanged) {
                        isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)
                        if (pinReparent) {
                            if (!reset && (isActive || isAtMax)) {
                                var bounds = _getBounds(pin, true), _offset = scroll - start;
                                _reparent(pin, _body, bounds.top + (direction === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_vertical"] ? _offset : 0) + _px, bounds.left + (direction === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_vertical"] ? 0 : _offset) + _px);
                            } else {
                                _reparent(pin, spacer);
                            }
                        }
                        _setState(isActive || isAtMax ? pinActiveState : pinState);
                        pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
                    }
                }
                snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
                toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
                    return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
                }); // classes could affect positioning, so do it even if reset or refreshing is true.
                onUpdate && !isToggle && !reset && onUpdate(self);
                if (stateChanged && !_refreshing) {
                    if (isToggle) {
                        if (isTakingAction) {
                            if (action === "complete") {
                                animation.pause().totalProgress(1);
                            } else if (action === "reset") {
                                animation.restart(true).pause();
                            } else if (action === "restart") {
                                animation.restart(true);
                            } else {
                                animation[action]();
                            }
                        }
                        onUpdate && onUpdate(self);
                    }
                    if (toggled || !_limitCallbacks) {
                        // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
                        onToggle && toggled && _callback(self, onToggle);
                        callbacks[toggleState] && _callback(self, callbacks[toggleState]);
                        once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.
                        if (!toggled) {
                            // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
                            toggleState = clipped === 1 ? 1 : 3;
                            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
                        }
                    }
                    if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
                        _endAnimation(self.callbackAnimation);
                        scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
                    }
                } else if (isToggle && onUpdate && !_refreshing) {
                    onUpdate(self);
                }
            } // update absolutely-positioned markers (only if the scroller isn't the viewport)
            if (markerEndSetter) {
                var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
                markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
                markerEndSetter(n);
            }
            caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
        };
        self.enable = function(reset, refresh) {
            if (!self.enabled) {
                self.enabled = true;
                _addListener(scroller, "resize", _onResize);
                isViewport || _addListener(scroller, "scroll", _onScroll);
                onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
                if (reset !== false) {
                    self.progress = prevProgress = 0;
                    scroll1 = scroll2 = lastSnap = scrollFunc();
                }
                refresh !== false && self.refresh();
            }
        };
        self.getTween = function(snap) {
            return snap && tweenTo ? tweenTo.tween : scrubTween;
        };
        self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
            // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
            if (containerAnimation) {
                // convert ratios into scroll positions. Remember, start/end values on ScrollTriggers that have a containerAnimation refer to the time (in seconds), NOT scroll positions.
                var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
                newStart = st.start + _change * newStart / duration;
                newEnd = st.start + _change * newEnd / duration;
            }
            self.refresh(false, false, {
                start: _keepClamp(newStart, keepClamp && !!self._startClamp),
                end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
            }, pinOffset);
            self.update();
        };
        self.adjustPinSpacing = function(amount) {
            if (spacerState && amount) {
                var i = spacerState.indexOf(direction.d) + 1;
                spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
                spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
                _setState(spacerState);
            }
        };
        self.disable = function(reset, allowAnimation) {
            reset !== false && self.revert(true, true);
            if (self.enabled) {
                self.enabled = self.isActive = false;
                allowAnimation || scrubTween && scrubTween.pause();
                prevScroll = 0;
                pinCache && (pinCache.uncache = 1);
                onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);
                if (snapDelayedCall) {
                    snapDelayedCall.pause();
                    tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
                }
                if (!isViewport) {
                    var i = _triggers.length;
                    while(i--){
                        if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
                            return; //don't remove the listeners if there are still other triggers referencing it.
                        }
                    }
                    _removeListener(scroller, "resize", _onResize);
                    isViewport || _removeListener(scroller, "scroll", _onScroll);
                }
            }
        };
        self.kill = function(revert, allowAnimation) {
            self.disable(revert, allowAnimation);
            scrubTween && !allowAnimation && scrubTween.kill();
            id && delete _ids[id];
            var i = _triggers.indexOf(self);
            i >= 0 && _triggers.splice(i, 1);
            i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
            // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.
            i = 0;
            _triggers.forEach(function(t) {
                return t.scroller === self.scroller && (i = 1);
            });
            i || _refreshingAll || (self.scroll.rec = 0);
            if (animation) {
                animation.scrollTrigger = null;
                revert && animation.revert({
                    kill: false
                });
                allowAnimation || animation.kill();
            }
            markerStart && [
                markerStart,
                markerEnd,
                markerStartTrigger,
                markerEndTrigger
            ].forEach(function(m) {
                return m.parentNode && m.parentNode.removeChild(m);
            });
            _primary === self && (_primary = 0);
            if (pin) {
                pinCache && (pinCache.uncache = 1);
                i = 0;
                _triggers.forEach(function(t) {
                    return t.pin === pin && i++;
                });
                i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
            }
            vars.onKill && vars.onKill(self);
        };
        _triggers.push(self);
        self.enable(false, false);
        customRevertReturn && customRevertReturn(self);
        if (animation && animation.add && !change) {
            // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
            var updateFunc = self.update; // some browsers may fire a scroll event BEFORE a tick elapses and/or the DOMContentLoaded fires. So there's a chance update() will be called BEFORE a refresh() has happened on a Timeline-attached ScrollTrigger which means the start/end won't be calculated yet. We don't want to add conditional logic inside the update() method (like check to see if end is defined and if not, force a refresh()) because that's a function that gets hit a LOT (performance). So we swap out the real update() method for this one that'll re-attach it the first time it gets called and of course forces a refresh().
            self.update = function() {
                self.update = updateFunc;
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].cache++; // otherwise a cached scroll position may get used in the refresh() in a very rare scenario, like if ScrollTriggers are created inside a DOMContentLoaded event and the queued requestAnimationFrame() fires beforehand. See https://gsap.com/community/forums/topic/41267-scrolltrigger-breaks-on-refresh-when-using-domcontentloaded/
                start || end || self.refresh();
            };
            gsap.delayedCall(0.01, self.update);
            change = 0.01;
            start = end = 0;
        } else {
            self.refresh();
        }
        pin && _queueRefreshAll(); // pinning could affect the positions of other things, so make sure we queue a full refresh()
    };
    ScrollTrigger.register = function register(core) {
        if (!_coreInitted) {
            gsap = core || _getGSAP();
            _windowExists() && window.document && ScrollTrigger.enable();
            _coreInitted = _enabled;
        }
        return _coreInitted;
    };
    ScrollTrigger.defaults = function defaults(config) {
        if (config) {
            for(var p in config){
                _defaults[p] = config[p];
            }
        }
        return _defaults;
    };
    ScrollTrigger.disable = function disable(reset, kill) {
        _enabled = 0;
        _triggers.forEach(function(trigger) {
            return trigger[kill ? "kill" : "disable"](reset);
        });
        _removeListener(_win, "wheel", _onScroll);
        _removeListener(_doc, "scroll", _onScroll);
        clearInterval(_syncInterval);
        _removeListener(_doc, "touchcancel", _passThrough);
        _removeListener(_body, "touchstart", _passThrough);
        _multiListener(_removeListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
        _multiListener(_removeListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
        _resizeDelay.kill();
        _iterateAutoRefresh(_removeListener);
        for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].length; i += 3){
            _wheelListener(_removeListener, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"][i], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"][i + 1]);
            _wheelListener(_removeListener, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"][i], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"][i + 2]);
        }
    };
    ScrollTrigger.enable = function enable() {
        _win = window;
        _doc = document;
        _docEl = _doc.documentElement;
        _body = _doc.body;
        if (gsap) {
            _toArray = gsap.utils.toArray;
            _clamp = gsap.utils.clamp;
            _context = gsap.core.context || _passThrough;
            _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
            _scrollRestoration = _win.history.scrollRestoration || "auto";
            _lastScroll = _win.pageYOffset || 0;
            gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.
            if (_body) {
                _enabled = 1;
                _div100vh = document.createElement("div"); // to solve mobile browser address bar show/hide resizing, we shouldn't rely on window.innerHeight. Instead, use a <div> with its height set to 100vh and measure that since that's what the scrolling is based on anyway and it's not affected by address bar showing/hiding.
                _div100vh.style.height = "100vh";
                _div100vh.style.position = "absolute";
                _refresh100vh();
                _rafBugFix();
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observer"].register(gsap); // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.
                ScrollTrigger.isTouch = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observer"].isTouch;
                _fixIOSBug = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observer"].isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent); // since 2017, iOS has had a bug that causes event.clientX/Y to be inaccurate when a scroll occurs, thus we must alternate ignoring every other touchmove event to work around it. See https://bugs.webkit.org/show_bug.cgi?id=181954 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503
                _ignoreMobileResize = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observer"].isTouch === 1;
                _addListener(_win, "wheel", _onScroll); // mostly for 3rd party smooth scrolling libraries.
                _root = [
                    _win,
                    _doc,
                    _docEl,
                    _body
                ];
                if (gsap.matchMedia) {
                    ScrollTrigger.matchMedia = function(vars) {
                        var mm = gsap.matchMedia(), p;
                        for(p in vars){
                            mm.add(p, vars[p]);
                        }
                        return mm;
                    };
                    gsap.addEventListener("matchMediaInit", function() {
                        _recordScrollPositions();
                        _revertAll();
                    });
                    gsap.addEventListener("matchMediaRevert", function() {
                        return _revertRecorded();
                    });
                    gsap.addEventListener("matchMedia", function() {
                        _refreshAll(0, 1);
                        _dispatch("matchMedia");
                    });
                    gsap.matchMedia().add("(orientation: portrait)", function() {
                        // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
                        _setBaseDimensions();
                        return _setBaseDimensions;
                    });
                } else {
                    console.warn("Requires GSAP 3.11.0 or later");
                }
                _setBaseDimensions();
                _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!
                var bodyHasStyle = _body.hasAttribute("style"), bodyStyle = _body.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap.core.Animation.prototype, bounds, i;
                AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
                    value: function value() {
                        return this.time(-0.01, true);
                    }
                }); // only for backwards compatibility (Animation.revert() was added after 3.10.4)
                bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.
                bounds = _getBounds(_body);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_vertical"].m = Math.round(bounds.top + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_vertical"].sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_horizontal"].m = Math.round(bounds.left + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_horizontal"].sc()) || 0;
                border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
                if (!bodyHasStyle) {
                    // SSR frameworks like Next.js complain if this attribute gets added.
                    _body.setAttribute("style", ""); // it's not enough to just removeAttribute() - we must first set it to empty, otherwise Next.js complains.
                    _body.removeAttribute("style");
                } // TODO: (?) maybe move to leveraging the velocity mechanism in Observer and skip intervals.
                _syncInterval = setInterval(_sync, 250);
                gsap.delayedCall(0.5, function() {
                    return _startup = 0;
                });
                _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.
                _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://gsap.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/
                _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
                _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
                _transformProp = gsap.utils.checkPrefix("transform");
                _stateProps.push(_transformProp);
                _coreInitted = _getTime();
                _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
                _autoRefresh = [
                    _doc,
                    "visibilitychange",
                    function() {
                        var w = _win.innerWidth, h = _win.innerHeight;
                        if (_doc.hidden) {
                            _prevWidth = w;
                            _prevHeight = h;
                        } else if (_prevWidth !== w || _prevHeight !== h) {
                            _onResize();
                        }
                    },
                    _doc,
                    "DOMContentLoaded",
                    _refreshAll,
                    _win,
                    "load",
                    _refreshAll,
                    _win,
                    "resize",
                    _onResize
                ];
                _iterateAutoRefresh(_addListener);
                _triggers.forEach(function(trigger) {
                    return trigger.enable(0, 1);
                });
                for(i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].length; i += 3){
                    _wheelListener(_removeListener, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"][i], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"][i + 1]);
                    _wheelListener(_removeListener, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"][i], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"][i + 2]);
                }
            } else if (_doc) {
                var onLoad = function onLoad() {
                    ScrollTrigger.enable();
                    _doc.removeEventListener("DOMContentLoaded", onLoad);
                };
                _doc.addEventListener("DOMContentLoaded", onLoad);
            }
        }
    };
    ScrollTrigger.config = function config(vars) {
        "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
        var ms = vars.syncInterval;
        ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
        "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);
        if ("autoRefreshEvents" in vars) {
            _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
            _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
        }
    };
    ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
        var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getTarget"])(target), i = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].indexOf(t), isViewport = _isViewport(t);
        if (~i) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].splice(i, isViewport ? 6 : 2);
        }
        if (vars) {
            isViewport ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_proxies"].unshift(_win, vars, _body, vars, _docEl, vars) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_proxies"].unshift(t, vars);
        }
    };
    ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
        _triggers.forEach(function(t) {
            return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
        });
    };
    ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
        var bounds = (_isString(element) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getTarget"])(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
        return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
    };
    ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
        _isString(element) && (element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getTarget"])(element));
        var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
        return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
    };
    ScrollTrigger.killAll = function killAll(allowListeners) {
        _triggers.slice(0).forEach(function(t) {
            return t.vars.id !== "ScrollSmoother" && t.kill();
        });
        if (allowListeners !== true) {
            var listeners = _listeners.killAll || [];
            _listeners = {};
            listeners.forEach(function(f) {
                return f();
            });
        }
    };
    return ScrollTrigger;
}();
ScrollTrigger.version = "3.15.0";
ScrollTrigger.saveStyles = function(targets) {
    return targets ? _toArray(targets).forEach(function(target) {
        // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
        if (target && target.style) {
            var i = _savedStyles.indexOf(target);
            i >= 0 && _savedStyles.splice(i, 5);
            _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _context());
        }
    }) : _savedStyles;
};
ScrollTrigger.revert = function(soft, media) {
    return _revertAll(!soft, media);
};
ScrollTrigger.create = function(vars, animation) {
    return new ScrollTrigger(vars, animation);
};
ScrollTrigger.refresh = function(safe) {
    return safe ? _onResize(true) : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};
ScrollTrigger.update = function(force) {
    return ++__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].cache && _updateAll(force === true ? 2 : 0);
};
ScrollTrigger.clearScrollMemory = _clearScrollMemory;
ScrollTrigger.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_horizontal"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_vertical"]);
};
ScrollTrigger.getScrollFunc = function(element, horizontal) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getScrollFunc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getTarget"])(element), horizontal ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_horizontal"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_vertical"]);
};
ScrollTrigger.getById = function(id) {
    return _ids[id];
};
ScrollTrigger.getAll = function() {
    return _triggers.filter(function(t) {
        return t.vars.id !== "ScrollSmoother";
    });
}; // it's common for people to ScrollTrigger.getAll(t => t.kill()) on page routes, for example, and we don't want it to ruin smooth scrolling by killing the main ScrollSmoother one.
ScrollTrigger.isScrolling = function() {
    return !!_lastScrollTime;
};
ScrollTrigger.snapDirectional = _snapDirectional;
ScrollTrigger.addEventListener = function(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
};
ScrollTrigger.removeEventListener = function(type, callback) {
    var a = _listeners[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
};
ScrollTrigger.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback(type, callback) {
        var elements = [], triggers = [], delay = gsap.delayedCall(interval, function() {
            callback(elements, triggers);
            elements = [];
            triggers = [];
        }).pause();
        return function(self) {
            elements.length || delay.restart(true);
            elements.push(self.trigger);
            triggers.push(self);
            batchMax <= elements.length && delay.progress(1);
        };
    }, p;
    for(p in vars){
        varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    }
    if (_isFunction(batchMax)) {
        batchMax = batchMax();
        _addListener(ScrollTrigger, "refresh", function() {
            return batchMax = vars.batchMax();
        });
    }
    _toArray(targets).forEach(function(target) {
        var config = {};
        for(p in varsCopy){
            config[p] = varsCopy[p];
        }
        config.trigger = target;
        result.push(ScrollTrigger.create(config));
    });
    return result;
}; // to reduce file size. clamps the scroll and also returns a duration multiplier so that if the scroll gets chopped shorter, the duration gets curtailed as well (otherwise if you're very close to the top of the page, for example, and swipe up really fast, it'll suddenly slow down and take a long time to reach the top).
var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
}, _allowNativePanning = function _allowNativePanning(target, direction) {
    if (direction === true) {
        target.style.removeProperty("touch-action");
    } else {
        target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observer"].isTouch ? " pinch-zoom" : "") : "none"; // note: Firefox doesn't support it pinch-zoom properly, at least in addition to a pan-x or pan-y.
    }
    target === _docEl && _allowNativePanning(_body, direction);
}, _overflow = {
    auto: 1,
    scroll: 1
}, _nestedScroll = function _nestedScroll(_ref5) {
    var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap.core.getCache(node), time = _getTime(), cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2000) {
        // cache for 2 seconds to improve performance.
        while(node && node !== _body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))){
            node = node.parentNode;
        }
        cache._isScroll = node && node !== target && !_isViewport(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
        cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
        event.stopPropagation();
        event._gsapAllow = true;
    }
}, // capture events on scrollable elements INSIDE the <body> and allow those by calling stopPropagation() when we find a scrollable ancestor
_inputObserver = function _inputObserver(target, type, inputs, nested) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observer"].create({
        target: target,
        capture: true,
        debounce: false,
        lockAxis: true,
        type: type,
        onWheel: nested = nested && _nestedScroll,
        onPress: nested,
        onDrag: nested,
        onScroll: nested,
        onEnable: function onEnable() {
            return inputs && _addListener(_doc, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observer"].eventTypes[0], _captureInputs, false, true);
        },
        onDisable: function onDisable() {
            return _removeListener(_doc, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observer"].eventTypes[0], _captureInputs, true);
        }
    });
}, _inputExp = /(input|label|select|textarea)/i, _inputIsFocused, _captureInputs = function _captureInputs(e) {
    var isInput = _inputExp.test(e.target.tagName);
    if (isInput || _inputIsFocused) {
        e._gsapAllow = true;
        _inputIsFocused = isInput;
    }
}, _getScrollNormalizer = function _getScrollNormalizer(vars) {
    _isObject(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getTarget"])(vars.target) || _docEl, smoother = gsap.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getTarget"])(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getScrollFunc"])(target, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_vertical"]), scrollFuncX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getScrollFunc"])(target, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_horizontal"]), scale = 1, initialScale = (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observer"].isTouch && _win.visualViewport ? _win.visualViewport.scale * _win.visualViewport.width : _win.outerWidth) / _win.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction(momentum) ? function() {
        return momentum(self);
    } : function() {
        return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove() {
        return skipTouchMove = false;
    }, scrollClampX = _passThrough, scrollClampY = _passThrough, updateClamps = function updateClamps() {
        maxY = _maxScroll(target, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_vertical"]);
        scrollClampY = _clamp(_fixIOSBug ? 1 : 0, maxY);
        normalizeScrollX && (scrollClampX = _clamp(0, _maxScroll(target, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_horizontal"])));
        lastRefreshID = _refreshID;
    }, removeContentOffset = function removeContentOffset() {
        content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
        scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag() {
        if (skipTouchMove) {
            requestAnimationFrame(resumeTouchMove);
            var offset = _round(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
            if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
                scrollFuncY.offset = scroll - scrollFuncY.v;
                var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
                content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
                content._gsap.y = y + "px";
                scrollFuncY.cacheID = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].cache;
                _updateAll();
            }
            return true;
        }
        scrollFuncY.offset && removeContentOffset();
        skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize() {
        // if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
        updateClamps();
        if (tween.isActive() && tween.vars.scrollY > maxY) {
            scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
        }
    };
    content && gsap.set(content, {
        y: "+=0"
    }); // to ensure there's a cache (element._gsap)
    vars.ignoreCheck = function(e) {
        return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
    };
    vars.onPress = function() {
        skipTouchMove = false;
        var prevScale = scale;
        scale = _round((_win.visualViewport && _win.visualViewport.scale || 1) / initialScale);
        tween.pause();
        prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
        startScrollX = scrollFuncX();
        startScrollY = scrollFuncY();
        updateClamps();
        lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self, wasDragging) {
        scrollFuncY.offset && removeContentOffset();
        if (!wasDragging) {
            onStopDelayedCall.restart(true);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"].cache++; // make sure we're pulling the non-cached value
            // alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)
            var dur = resolveMomentumDuration(), currentScroll, endScroll;
            if (normalizeScrollX) {
                currentScroll = scrollFuncX();
                endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227; // the constant .227 is from power4(0.05). velocity is inverted because scrolling goes in the opposite direction.
                dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_horizontal"]));
                tween.vars.scrollX = scrollClampX(endScroll);
            }
            currentScroll = scrollFuncY();
            endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227; // the constant .227 is from power4(0.05)
            dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_vertical"]));
            tween.vars.scrollY = scrollClampY(endScroll);
            tween.invalidate().duration(dur).play(0.01);
            if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
                // iOS bug: it'll show the address bar but NOT fire the window "resize" event until the animation is done but we must protect against overshoot so we leverage an onUpdate to do so.
                gsap.to({}, {
                    onUpdate: onResize,
                    duration: dur
                });
            }
        }
        onRelease && onRelease(self);
    };
    vars.onWheel = function() {
        tween._ts && tween.pause();
        if (_getTime() - wheelRefresh > 1000) {
            // after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
            lastRefreshID = 0;
            wheelRefresh = _getTime();
        }
    };
    vars.onChange = function(self, dx, dy, xArray, yArray) {
        _refreshID !== lastRefreshID && updateClamps();
        dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1])); // for more precision, we track pointer/touch movement from the start, otherwise it'll drift.
        if (dy) {
            scrollFuncY.offset && removeContentOffset();
            var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
            isTouch && y !== yClamped && (startScrollY += yClamped - y);
            scrollFuncY(yClamped);
        }
        (dy || dx) && _updateAll();
    };
    vars.onEnable = function() {
        _allowNativePanning(target, normalizeScrollX ? false : "x");
        ScrollTrigger.addEventListener("refresh", onResize);
        _addListener(_win, "resize", onResize);
        if (scrollFuncY.smooth) {
            scrollFuncY.target.style.scrollBehavior = "auto";
            scrollFuncY.smooth = scrollFuncX.smooth = false;
        }
        inputObserver.enable();
    };
    vars.onDisable = function() {
        _allowNativePanning(target, true);
        _removeListener(_win, "resize", onResize);
        ScrollTrigger.removeEventListener("refresh", onResize);
        inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observer"](vars);
    self.iOS = _fixIOSBug; // used in the Observer getCachedScroll() function to work around an iOS bug that wreaks havoc with TouchEvent.clientY if we allow scroll to go all the way back to 0.
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1); // iOS bug causes event.clientY values to freak out (wildly inaccurate) if the scroll position is exactly 0.
    _fixIOSBug && gsap.ticker.add(_passThrough); // prevent the ticker from sleeping
    onStopDelayedCall = self._dc;
    tween = gsap.to(self, {
        ease: "power4",
        paused: true,
        inherit: false,
        scrollX: normalizeScrollX ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
                return tween.pause();
            })
        },
        onUpdate: _updateAll,
        onComplete: onStopDelayedCall.vars.onComplete
    }); // we need the modifier to sense if the scroll position is altered outside of the momentum tween (like with a scrollTo tween) so we can pause() it to prevent conflicts.
    return self;
};
ScrollTrigger.sort = function(func) {
    if (_isFunction(func)) {
        return _triggers.sort(func);
    }
    var scroll = _win.pageYOffset || 0;
    ScrollTrigger.getAll().forEach(function(t) {
        return t._sortY = t.trigger ? scroll + t.trigger.getBoundingClientRect().top : t.start + _win.innerHeight;
    });
    return _triggers.sort(func || function(a, b) {
        return (a.vars.refreshPriority || 0) * -1e6 + (a.vars.containerAnimation ? 1e6 : a._sortY) - ((b.vars.containerAnimation ? 1e6 : b._sortY) + (b.vars.refreshPriority || 0) * -1e6);
    }); // anything with a containerAnimation should refresh last.
};
ScrollTrigger.observe = function(vars) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observer"](vars);
};
ScrollTrigger.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") {
        return _normalizer;
    }
    if (vars === true && _normalizer) {
        return _normalizer.enable();
    }
    if (vars === false) {
        _normalizer && _normalizer.kill();
        _normalizer = vars;
        return;
    }
    var normalizer = vars instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observer"] ? vars : _getScrollNormalizer(vars);
    _normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
    _isViewport(normalizer.target) && (_normalizer = normalizer);
    return normalizer;
};
ScrollTrigger.core = {
    // smaller file size way to leverage in ScrollSmoother and Observer
    _getVelocityProp: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getVelocityProp"],
    _inputObserver: _inputObserver,
    _scrollers: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_scrollers"],
    _proxies: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$Observer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_proxies"],
    bridge: {
        // when normalizeScroll sets the scroll position (ss = setScroll)
        ss: function ss() {
            _lastScrollTime || _dispatch("scrollStart");
            _lastScrollTime = _getTime();
        },
        // a way to get the _refreshing value in Observer
        ref: function ref() {
            return _refreshing;
        }
    }
};
_getGSAP() && gsap.registerPlugin(ScrollTrigger);
;
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/split-type/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplitType
]);
/**
 * SplitType
 * https://github.com/lukePeavey/SplitType
 * @version 0.3.4
 * @author Luke Peavey <lwpeavey@gmail.com>
 */ // Polyfill the following DOM methods that are not supported in IE 11.
(function() {
    function append() {
        var length = arguments.length;
        for(var i = 0; i < length; i++){
            var node = i < 0 || arguments.length <= i ? undefined : arguments[i];
            if (node.nodeType === 1 || node.nodeType === 11) this.appendChild(node);
            else this.appendChild(document.createTextNode(String(node)));
        }
    }
    function replaceChildren() {
        while(this.lastChild){
            this.removeChild(this.lastChild);
        }
        if (arguments.length) this.append.apply(this, arguments);
    }
    function replaceWith() {
        var parent = this.parentNode;
        for(var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++){
            nodes[_key] = arguments[_key];
        }
        var i = nodes.length;
        if (!parent) return;
        if (!i) parent.removeChild(this);
        while(i--){
            var node = nodes[i];
            if (typeof node !== 'object') {
                node = this.ownerDocument.createTextNode(node);
            } else if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            if (!i) {
                parent.replaceChild(node, this);
            } else {
                parent.insertBefore(this.previousSibling, node);
            }
        }
    }
    if (typeof Element !== 'undefined') {
        if (!Element.prototype.append) {
            Element.prototype.append = append;
            DocumentFragment.prototype.append = append;
        }
        if (!Element.prototype.replaceChildren) {
            Element.prototype.replaceChildren = replaceChildren;
            DocumentFragment.prototype.replaceChildren = replaceChildren;
        }
        if (!Element.prototype.replaceWith) {
            Element.prototype.replaceWith = replaceWith;
            DocumentFragment.prototype.replaceWith = replaceWith;
        }
    }
})();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
/**
 * Shallow merges the properties of an object with the target object. Only
 * includes properties that exist on the target object. Non-writable properties
 * on the target object will not be over-written.
 *
 * @param {Object} target
 * @param {Object} object
 */ function extend(target, object) {
    return Object.getOwnPropertyNames(Object(target)).reduce(function(extended, key) {
        var currentValue = Object.getOwnPropertyDescriptor(Object(target), key);
        var newValue = Object.getOwnPropertyDescriptor(Object(object), key);
        return Object.defineProperty(extended, key, newValue || currentValue);
    }, {});
}
/**
 * Checks if given value is a string
 *
 * @param {any} value
 * @return {boolean} `true` if `value` is a string, else `false`
 */ function isString(value) {
    return typeof value === 'string';
}
function isArray(value) {
    return Array.isArray(value);
}
/**
 * Parses user supplied settings objects.
 */ function parseSettings() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var object = extend(settings); // `split` may be used as an alias for the `types` option
    // Parse the `types` settings into an array of valid split types.
    // If `types` is explicitly set to an empty string or array, text will not be
    // split at all.
    var types;
    if (object.types !== undefined) {
        types = object.types;
    } else if (object.split !== undefined) {
        types = object.split;
    }
    if (types !== undefined) {
        object.types = (isString(types) || isArray(types) ? String(types) : '').split(',').map(function(type) {
            return String(type).trim();
        }).filter(function(type) {
            return /((line)|(word)|(char))/i.test(type);
        });
    } // Support `position: absolute` as an alias for `absolute: true`
    if (object.absolute || object.position) {
        object.absolute = object.absolute || /absolute/.test(settings.position);
    }
    return object;
}
/**
 * Takes a list of `types` and returns an object
 *
 * @param {string | string[]} value a comma separated list of split types
 * @return {{lines: boolean, words: boolean, chars: boolean}}
 */ function parseTypes(value) {
    var types = isString(value) || isArray(value) ? String(value) : '';
    return {
        none: !types,
        lines: /line/i.test(types),
        words: /word/i.test(types),
        chars: /char/i.test(types)
    };
}
/**
 * Returns true if `value` is a non-null object.
 * @param {any} value
 * @return {boolean}
 */ function isObject(value) {
    return value !== null && typeof value === 'object';
}
/**
 * Returns true if `input` is one of the following:
 * - `Element`
 * - `Text`
 * - `DocumentFragment`
 */ function isNode(input) {
    return isObject(input) && /^(1|3|11)$/.test(input.nodeType);
}
/**
 * Checks if `value` is a valid array-like length.
 * Original source: Lodash
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3)
 * // => true
 *
 * _.isLength(Number.MIN_VALUE)
 * // => false
 *
 * _.isLength(Infinity)
 * // => false
 *
 * _.isLength('3')
 * // => false
 */ function isLength(value) {
    return typeof value === 'number' && value > -1 && value % 1 === 0;
}
/**
 * Checks if `value` is an array-like object
 * @param {any} value
 * @return {boolean} true if `value` is array-like`, else `false`
 * @example
 * isArrayLike(new Array())
 * // => true
 *
 * isArrayLike(document.querySelectorAll('div'))
 * // => true
 *
 * isArrayLike(document.getElementsByTagName('div'))
 * // => true
 *
 * isArrayLike(() => {})
 * // => false
 *
 * isArrayLike({foo: 'bar'})
 * // => false
 *
 * * isArrayLike(null)
 * // => false
 */ function isArrayLike(value) {
    return isObject(value) && isLength(value.length);
}
/**
 * Coerces `value` to an `Array`.
 *
 * @param {any} value
 * @return {any[]}
 * @example
 * // If `value` is any `Array`, returns original `Array`
 * let arr = [1, 2]
 * toArray(arr)
 * // => arr
 *
 * // If `value` is an `ArrayLike`, its equivalent to `Array.from(value)`
 * let nodeList = document.querySelectorAll('div')
 * toArray(nodeList)
 * // => HTMLElement[] s
 *
 * // If value is falsy, returns empty array
 * toArray(null)
 * // => []
 *
 * // For any other type of value, its equivalent to `Array.of(value)`
 * let element = document.createElement('div')
 * toArray(element)
 * // => [element]
 *
 */ function toArray(value) {
    if (isArray(value)) return value;
    if (value == null) return [];
    return isArrayLike(value) ? Array.prototype.slice.call(value) : [
        value
    ];
}
/**
 * Processes target elements for the splitType function.
 *
 * @param {any} target Can be one of the following:
 * 1. `string` - A css selector
 * 2. `HTMLElement` - A single element
 * 3. `NodeList` - A nodeList
 * 4. `Element[]` - An array of elements
 * 5. `Array<NodeList|Element[]>` - An nested array of elements
 * @returns {Element[]} A flat array HTML elements
 * @return A flat array of elements or empty array if no elements are found
 */ function getTargetElements(target) {
    var elements = target; // If `target` is a selector string...
    if (isString(target)) {
        if (/^(#[a-z]\w+)$/.test(target.trim())) {
            // If `target` is an ID, use `getElementById`
            elements = document.getElementById(target.trim().slice(1));
        } else {
            // Else use `querySelectorAll`
            elements = document.querySelectorAll(target);
        }
    } // Return a flattened array of elements
    return toArray(elements).reduce(function(result, element) {
        return [].concat(_toConsumableArray(result), _toConsumableArray(toArray(element).filter(isNode)));
    }, []);
}
var entries = Object.entries;
var expando = "_splittype";
var cache = {};
var uid = 0;
/**
 * Stores data associated with DOM elements or other objects. This is a
 * simplified version of jQuery's data method.
 *
 * @signature Data(owner)
 * @description Get the data store object for the given owner.
 * @param {Object} owner the object that data will be associated with.
 * @return {Object} the data object for given `owner`. If no data exists
 *     for the given object, creates a new data store and returns it.
 *
 * @signature Data(owner, key)
 * @description Get the value
 * @param {Object} owner
 * @param {string} key
 * @return {any} the value of the provided key. If key does not exist, returns
 *     undefined.
 *
 * @signature Data(owner, key, value)
 * @description Sets the given key/value pair in data store
 * @param {Object} owner
 * @param {string} key
 * @param {any} value
 */ function set(owner, key, value) {
    if (!isObject(owner)) {
        console.warn('[data.set] owner is not an object');
        return null;
    }
    var id = owner[expando] || (owner[expando] = ++uid);
    var data = cache[id] || (cache[id] = {});
    if (value === undefined) {
        if (!!key && Object.getPrototypeOf(key) === Object.prototype) {
            cache[id] = _objectSpread2(_objectSpread2({}, data), key);
        }
    } else if (key !== undefined) {
        data[key] = value;
    }
    return value;
}
function get(owner, key) {
    var id = isObject(owner) ? owner[expando] : null;
    var data = id && cache[id] || {};
    if (key === undefined) {
        return data;
    }
    return data[key];
}
/**
 * Remove all data associated with the given element
 */ function remove(element) {
    var id = element && element[expando];
    if (id) {
        delete element[id];
        delete cache[id];
    }
}
/**
 * Clear all cached data
 */ function clear() {
    Object.keys(cache).forEach(function(key) {
        delete cache[key];
    });
}
/**
 * Remove all temporary data from the store.
 */ function cleanup() {
    entries(cache).forEach(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], _ref2$ = _ref2[1], isRoot = _ref2$.isRoot, isSplit = _ref2$.isSplit;
        if (!isRoot || !isSplit) {
            cache[id] = null;
            delete cache[id];
        }
    });
}
/**
 * Splits a string into an array of words.
 *
 * @param {string} string
 * @param {string | RegExp} [separator = ' ']
 * @return {string[]} Array of words
 */ function toWords(value) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    var string = value ? String(value) : '';
    return string.trim().replace(/\s+/g, ' ').split(separator);
}
/**
 * Based on lodash#split <https://lodash.com/license>
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters &
 * Editors
 */ var rsAstralRange = "\\ud800-\\udfff";
var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
var rsComboSymbolsRange = "\\u20d0-\\u20f0";
var rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */ var rsAstral = "[".concat(rsAstralRange, "]");
var rsCombo = "[".concat(rsComboMarksRange).concat(rsComboSymbolsRange, "]");
var rsFitz = "\\ud83c[\\udffb-\\udfff]";
var rsModifier = "(?:".concat(rsCombo, "|").concat(rsFitz, ")");
var rsNonAstral = "[^".concat(rsAstralRange, "]");
var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */ var reOptMod = "".concat(rsModifier, "?");
var rsOptVar = "[".concat(rsVarRange, "]?");
var rsOptJoin = '(?:' + rsZWJ + '(?:' + [
    rsNonAstral,
    rsRegional,
    rsSurrPair
].join('|') + ')' + rsOptVar + reOptMod + ')*';
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = "(?:".concat([
    "".concat(rsNonAstral).concat(rsCombo, "?"),
    rsCombo,
    rsRegional,
    rsSurrPair,
    rsAstral
].join('|'), "\n)");
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */ var reUnicode = RegExp("".concat(rsFitz, "(?=").concat(rsFitz, ")|").concat(rsSymbol).concat(rsSeq), 'g');
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */ var unicodeRange = [
    rsZWJ,
    rsAstralRange,
    rsComboMarksRange,
    rsComboSymbolsRange,
    rsVarRange
];
var reHasUnicode = RegExp("[".concat(unicodeRange.join(''), "]"));
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function asciiToArray(string) {
    return string.split('');
}
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */ function hasUnicode(string) {
    return reHasUnicode.test(string);
}
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function unicodeToArray(string) {
    return string.match(reUnicode) || [];
}
/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values.
 *
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? '' : String(value);
}
/**
 * Splits `string` into an array of characters. If `separator` is omitted,
 * it behaves likes split.split('').
 *
 * Unlike native string.split(''), it can split strings that contain unicode
 * characters like emojis and symbols.
 *
 * @param {string} [string=''] The string to split.
 * @param {RegExp|string} [separator=''] The separator pattern to split by.
 * @returns {Array} Returns the string segments.
 * @example
 * toChars('foo');
 * // => ['f', 'o', 'o']
 *
 * toChars('foo bar');
 * // => ["f", "o", "o", " ", "b", "a", "r"]
 *
 * toChars('f😀o');
 * // => ['f', '😀', 'o']
 *
 * toChars('f-😀-o', /-/);
 * // => ['f', '😀', 'o']
 *
 */ function toChars(string) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    string = toString(string);
    if (string && isString(string)) {
        if (!separator && hasUnicode(string)) {
            return stringToArray(string);
        }
    }
    return string.split(separator);
}
/**
 * Create an HTML element with the the given attributes
 *
 * attributes can include standard HTML attribute, as well as the following
 * "special" properties:
 *   - children: HTMLElement | ArrayLike<HTMLElement>
 *   - textContent: string
 *   - innerHTML: string
 *
 * @param {string} name
 * @param  {Object} [attributes]
 * @returns {HTMLElement}
 */ function createElement(name, attributes) {
    var element = document.createElement(name);
    if (!attributes) {
        // When called without the second argument, its just return the result
        // of `document.createElement`
        return element;
    }
    Object.keys(attributes).forEach(function(attribute) {
        var rawValue = attributes[attribute];
        var value = isString(rawValue) ? rawValue.trim() : rawValue; // Ignore attribute if the value is `null` or an empty string
        if (value === null || value === '') return;
        if (attribute === 'children') {
            // Children can be one or more Elements or DOM strings
            element.append.apply(element, _toConsumableArray(toArray(value)));
        } else {
            // Handle standard HTML attributes
            element.setAttribute(attribute, value);
        }
    });
    return element;
}
var defaults = {
    splitClass: '',
    lineClass: 'line',
    wordClass: 'word',
    charClass: 'char',
    types: [
        'lines',
        'words',
        'chars'
    ],
    absolute: false,
    tagName: 'div'
};
/**
 * Splits the text content of a single TextNode into words and/or characters.
 *
 * This functions gets called for every text node inside the target element. It
 * replaces the text node with a document fragment containing the split text.
 * Returns an array of the split word and character elements from this node.
 *
 * @param {TextNode} textNode
 * @param {Object} settings
 * @return {{words: Element[], chars: Element[]}}
 */ function splitWordsAndChars(textNode, settings) {
    settings = extend(defaults, settings); // The split types
    var types = parseTypes(settings.types); // the tag name for split text nodes
    var TAG_NAME = settings.tagName; // value of the text node
    var VALUE = textNode.nodeValue; // `splitText` is a wrapper to hold the HTML structure
    var splitText = document.createDocumentFragment(); // Arrays of split word and character elements
    var words = [];
    var chars = [];
    if (/^\s/.test(VALUE)) {
        splitText.append(' ');
    } // Create an array of wrapped word elements.
    words = toWords(VALUE).reduce(function(result, WORD, idx, arr) {
        // Let `wordElement` be the wrapped element for the current word
        var wordElement;
        var characterElementsForCurrentWord; // -> If splitting text into characters...
        if (types.chars) {
            // Iterate through the characters in the current word
            characterElementsForCurrentWord = toChars(WORD).map(function(CHAR) {
                var characterElement = createElement(TAG_NAME, {
                    "class": "".concat(settings.splitClass, " ").concat(settings.charClass),
                    style: 'display: inline-block;',
                    children: CHAR
                });
                set(characterElement, 'isChar', true);
                chars = [].concat(_toConsumableArray(chars), [
                    characterElement
                ]);
                return characterElement;
            });
        } // END IF;
        if (types.words || types.lines) {
            // -> If Splitting Text Into Words...
            //    Create an element to wrap the current word. If we are also
            //    splitting text into characters, the word element will contain the
            //    wrapped character nodes for this word. If not, it will contain the
            //    plain text content (WORD)
            wordElement = createElement(TAG_NAME, {
                "class": "".concat(settings.wordClass, " ").concat(settings.splitClass),
                style: "display: inline-block; ".concat(types.words && settings.absolute ? "position: relative;" : ''),
                children: types.chars ? characterElementsForCurrentWord : WORD
            });
            set(wordElement, {
                isWord: true,
                isWordStart: true,
                isWordEnd: true
            });
            splitText.appendChild(wordElement);
        } else {
            // -> If NOT splitting into words OR lines...
            //    Append the characters elements directly to splitText.
            characterElementsForCurrentWord.forEach(function(characterElement) {
                splitText.appendChild(characterElement);
            });
        }
        if (idx < arr.length - 1) {
            // Add a space after the word.
            splitText.append(' ');
        } // If not splitting text into words, we return an empty array
        return types.words ? result.concat(wordElement) : result;
    }, []); // END LOOP;
    // Add a trailing white space to maintain word spacing
    if (/\s$/.test(VALUE)) {
        splitText.append(' ');
    }
    textNode.replaceWith(splitText);
    return {
        words: words,
        chars: chars
    };
}
/**
 * Splits the text content of a target element into words and/or characters.
 * The function is recursive, it will also split the text content of any child
 * elements into words/characters, while preserving the nested elements.
 *
 * @param {Node} node an HTML Element or Text Node
 * @param {Object} setting splitType settings
 */ function split(node, settings) {
    var type = node.nodeType; // Arrays of split words and characters
    var wordsAndChars = {
        words: [],
        chars: []
    }; // Only proceed if `node` is an `Element`, `Fragment`, or `Text`
    if (!/(1|3|11)/.test(type)) {
        return wordsAndChars;
    } // A) IF `node` is TextNode that contains characters other than white space...
    //    Split the text content of the node into words and/or characters
    //    return an object containing the split word and character elements
    if (type === 3 && /\S/.test(node.nodeValue)) {
        return splitWordsAndChars(node, settings);
    } // B) ELSE `node` is an 'Element'
    //    Iterate through its child nodes, calling the `split` function
    //    recursively for each child node.
    var childNodes = toArray(node.childNodes);
    if (childNodes.length) {
        set(node, 'isSplit', true); // we need to set a few styles on nested html elements
        if (!get(node).isRoot) {
            node.style.display = 'inline-block';
            node.style.position = 'relative'; // To maintain original spacing around nested elements when we are
            // splitting text into lines, we need to check if the element should
            // have a space before and after, and store that value for later.
            // Note: this was necessary to maintain the correct spacing when nested
            // elements do not align with word boundaries. For example, a nested
            // element only wraps part of a word.
            var nextSibling = node.nextSibling;
            var prevSibling = node.previousSibling;
            var text = node.textContent || '';
            var textAfter = nextSibling ? nextSibling.textContent : ' ';
            var textBefore = prevSibling ? prevSibling.textContent : ' ';
            set(node, {
                isWordEnd: /\s$/.test(text) || /^\s/.test(textAfter),
                isWordStart: /^\s/.test(text) || /\s$/.test(textBefore)
            });
        }
    } // Iterate through child nodes, calling `split` recursively
    // Returns an object containing all split words and chars
    return childNodes.reduce(function(result, child) {
        var _split = split(child, settings), words = _split.words, chars = _split.chars;
        return {
            words: [].concat(_toConsumableArray(result.words), _toConsumableArray(words)),
            chars: [].concat(_toConsumableArray(result.chars), _toConsumableArray(chars))
        };
    }, wordsAndChars);
}
/**
 * Gets the height and position of an element relative to offset parent.
 * Should be equivalent to offsetTop and offsetHeight, but with sub-pixel
 * precision.
 *
 * TODO needs work
 */ function getPosition(node, isWord, settings, scrollPos) {
    if (!settings.absolute) {
        return {
            top: isWord ? node.offsetTop : null
        };
    }
    var parent = node.offsetParent;
    var _scrollPos = _slicedToArray(scrollPos, 2), scrollX = _scrollPos[0], scrollY = _scrollPos[1];
    var parentX = 0;
    var parentY = 0;
    if (parent && parent !== document.body) {
        var parentRect = parent.getBoundingClientRect();
        parentX = parentRect.x + scrollX;
        parentY = parentRect.y + scrollY;
    }
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height, x = _node$getBoundingClie.x, y = _node$getBoundingClie.y;
    var top = y + scrollY - parentY;
    var left = x + scrollX - parentX;
    return {
        width: width,
        height: height,
        top: top,
        left: left
    };
}
/**
 * Recursively "un-splits" text into words.
 * This is used when splitting text into lines but not words.
 * We initially split the text into words so we can maintain the correct line
 * breaks. Once text has been split into lines, we "un-split" the words...
 * @param {Element}
 * @return {void}
 */ function unSplitWords(element) {
    if (!get(element).isWord) {
        toArray(element.children).forEach(function(child) {
            return unSplitWords(child);
        });
    } else {
        remove(element);
        element.replaceWith.apply(element, _toConsumableArray(element.childNodes));
    }
}
var createFragment = function createFragment() {
    return document.createDocumentFragment();
};
function repositionAfterSplit(element, settings, scrollPos) {
    var types = parseTypes(settings.types);
    var TAG_NAME = settings.tagName;
    var nodes = element.getElementsByTagName('*');
    var wordsInEachLine = [];
    var wordsInCurrentLine = [];
    var lineOffsetY = null;
    var elementHeight;
    var elementWidth;
    var contentBox;
    var lines = [];
    /**------------------------------------------------
   ** GET STYLES AND POSITIONS
   **-----------------------------------------------*/ // There is no built-in way to detect natural line breaks in text (when a
    // block of text wraps to fit its container). To split text into lines, we
    // have to detect line breaks by checking the top offset of words. This is
    // why text was split into words first. To apply absolute
    // positioning, its also necessary to record the size and position of every
    // split node (lines, words, characters).
    // To consolidate DOM getting/settings, this is all done at the same time,
    // before actually splitting text into lines, which involves restructuring
    // the DOM again.
    // Cache the element's parent and next sibling (for DOM removal).
    var parent = element.parentElement;
    var nextSibling = element.nextElementSibling; // a wrapper for the new HTML structure
    var splitText = createFragment(); // get the computed style object for the element
    var cs = window.getComputedStyle(element);
    var align = cs.textAlign;
    var fontSize = parseFloat(cs.fontSize);
    var lineThreshold = fontSize * 0.2; // IF using absolute position...
    if (settings.absolute) {
        // Let contentBox be an object containing the width and offset position of
        // the element's content box (the area inside padding box). This is needed
        // (for absolute positioning) to set the width and position of line
        // elements, which have not been created yet.
        contentBox = {
            left: element.offsetLeft,
            top: element.offsetTop,
            width: element.offsetWidth
        }; // Let elementWidth and elementHeight be the actual width/height of the
        // element. Also check if the element has inline height or width styles
        // already set. If it does, cache those values for later.
        elementWidth = element.offsetWidth;
        elementHeight = element.offsetHeight; // Store the original inline height and width of the element
        set(element, {
            cssWidth: element.style.width,
            cssHeight: element.style.height
        });
    } // Iterate over every node in the target element
    toArray(nodes).forEach(function(node) {
        // node is a word element or custom html element
        var isWordLike = node.parentElement === element; // TODO needs work
        // Get te size and position of split text nodes
        var _getPosition = getPosition(node, isWordLike, settings, scrollPos), width = _getPosition.width, height = _getPosition.height, top = _getPosition.top, left = _getPosition.left; // If element is a `<br>` tag return here
        if (/^br$/i.test(node.nodeName)) return;
        if (types.lines && isWordLike) {
            // We compare the top offset of the current word to the top offset of
            // previous words on the current line. If the difference is greater than
            // our defined threshold (20%), we assume this word is on a new line.
            if (lineOffsetY === null || top - lineOffsetY >= lineThreshold) {
                lineOffsetY = top;
                wordsInEachLine.push(wordsInCurrentLine = []);
            } // Add the current word node to the line array
            wordsInCurrentLine.push(node);
        } // END IF
        if (settings.absolute) {
            // Store the size and position split text nodes
            set(node, {
                top: top,
                left: left,
                width: width,
                height: height
            });
        }
    }); // END LOOP
    // Remove the element from the DOM
    if (parent) {
        parent.removeChild(element);
    }
    /**------------------------------------------------
   ** SPLIT LINES
   **-----------------------------------------------*/ if (types.lines) {
        // Iterate over lines of text (see 11 b)
        // Let `line` be the array of words in the current line.
        // Return an array of the wrapped line elements (lineElements)
        lines = wordsInEachLine.map(function(wordsInThisLine) {
            // Create an element to wrap the current line.
            var lineElement = createElement(TAG_NAME, {
                "class": "".concat(settings.splitClass, " ").concat(settings.lineClass),
                style: "display: block; text-align: ".concat(align, "; width: 100%;")
            });
            set(lineElement, 'isLine', true);
            var lineDimensions = {
                height: 0,
                top: 1e4
            }; // Append the `lineElement` to `container`
            splitText.appendChild(lineElement); // Iterate over the word-level elements in the current line.
            // Note: wordOrElement can either be a word node or nested element
            wordsInThisLine.forEach(function(wordOrElement, idx, arr) {
                var _data$get = get(wordOrElement), isWordEnd = _data$get.isWordEnd, top = _data$get.top, height = _data$get.height;
                var next = arr[idx + 1]; // Determine line height / y-position
                // we use the height and offsetTop of the words which we already
                // recorded. Because custom nested elements could have their own
                // styles, the words on a line may not all be the same height or
                // y position. So we take the greatest height / y - offset of the
                // words on this line.
                lineDimensions.height = Math.max(lineDimensions.height, height);
                lineDimensions.top = Math.min(lineDimensions.top, top); // append the current word/element
                lineElement.appendChild(wordOrElement); // Determine if there should space after the current element...
                // If this is not the last word on the current line.
                // TODO - logic for handing spacing can be improved
                if (isWordEnd && get(next).isWordStart) {
                    lineElement.append(' ');
                }
            }); // END LOOP
            if (settings.absolute) {
                set(lineElement, {
                    height: lineDimensions.height,
                    top: lineDimensions.top
                });
            }
            return lineElement;
        }); // END LOOP
        if (!types.words) {
            unSplitWords(splitText);
        } // 10. Insert the new container
        element.replaceChildren(splitText);
    }
    /**------------------------------------------------
   **  SET ABSOLUTE POSITION
   **-----------------------------------------------*/ // Apply absolute positioning to all child elements of the target element.
    // This includes split lines, words, chars, and custom HTML elements that were
    // included by the user. The size and position of child elements has already
    // been recorded before splitting text into lines.
    if (settings.absolute) {
        // Set the width/height of the parent element so it does not collapse
        // when its children are set to absolute position.
        element.style.width = "".concat(element.style.width || elementWidth, "px");
        element.style.height = "".concat(elementHeight, "px"); // Iterate over all child elements
        toArray(nodes).forEach(function(node) {
            var _data$get2 = get(node), isLine = _data$get2.isLine, top = _data$get2.top, left = _data$get2.left, width = _data$get2.width, height = _data$get2.height;
            var parentData = get(node.parentElement);
            var isChildOfLineNode = !isLine && parentData.isLine; // Set the top position of the current node.
            // -> If `node` a line element, we use the top offset of its first child
            // -> If `node` the child of line element, then its top offset is zero
            node.style.top = "".concat(isChildOfLineNode ? top - parentData.top : top, "px"); // Set the left position of the current node.
            // -> IF `node` is a line element, this is equal to the position left of
            //    the content box of the parent element
            // -> IF `node` is the child of a line element, the value has to adjusted
            //    so its relative to the line element
            node.style.left = isLine ? "".concat(contentBox.left, "px") : "".concat(left - (isChildOfLineNode ? contentBox.left : 0), "px"); // Set the height of the current node to the cached value.
            node.style.height = "".concat(height, "px"); //  Set the width of the current node.
            //  If its a line element, width is equal to the width of the contentBox.
            node.style.width = isLine ? "".concat(contentBox.width, "px") : "".concat(width, "px"); // Finally, set the node's position to absolute.
            node.style.position = 'absolute';
        });
    } // end if;
    // 14. Re-attach the element to the DOM
    if (parent) {
        if (nextSibling) parent.insertBefore(element, nextSibling);
        else parent.appendChild(element);
    }
    return lines;
}
var _defaults = extend(defaults, {});
var SplitType = /*#__PURE__*/ function() {
    _createClass(SplitType, null, [
        {
            key: "clearData",
            /**
     * CLears all data
     */ value: function clearData() {
                clear();
            }
        },
        {
            key: "setDefaults",
            /**
     * Sets the default settings for all SplitType instances.
     * The provided object will be merged with the existing defaults objects.
     *
     * @param {Object} settings an object containing the settings to override
     * @returns {Object} the new default settings
     * @public
     * @static
     * @example
     * SplitType.setDefaults({ "position": "absolute" })
     */ value: function setDefaults(options) {
                _defaults = extend(_defaults, parseSettings(options));
                return defaults;
            }
        },
        {
            key: "revert",
            value: function revert(elements) {
                getTargetElements(elements).forEach(function(element) {
                    var _data$get = get(element), isSplit = _data$get.isSplit, html = _data$get.html, cssWidth = _data$get.cssWidth, cssHeight = _data$get.cssHeight;
                    if (isSplit) {
                        element.innerHTML = html;
                        element.style.width = cssWidth || '';
                        element.style.height = cssHeight || '';
                        remove(element);
                    }
                });
            }
        },
        {
            key: "create",
            value: function create(target, options) {
                return new SplitType(target, options);
            }
        },
        {
            key: "data",
            /**
     * The internal data store
     */ get: function get() {
                return cache;
            }
        },
        {
            key: "defaults",
            get: function get() {
                return _defaults;
            },
            set: function set(options) {
                _defaults = extend(_defaults, parseSettings(options));
            }
        }
    ]);
    function SplitType(elements, options) {
        _classCallCheck(this, SplitType);
        this.isSplit = false;
        this.settings = extend(_defaults, parseSettings(options));
        this.elements = getTargetElements(elements); // Start the split process
        this.split();
    }
    /**
   * Splits the text in all target elements. This method is called
   * automatically when a new SplitType instance is created. It can also be
   * called manually to re-split text with new options.
   * @param {Object} options
   * @public
   */ _createClass(SplitType, [
        {
            key: "split",
            value: function split$1(options) {
                var _this = this;
                // Revert target elements (if they are already split)
                // Note: revert was already called once in the constructor. However, we
                // need to call it again here so text is reverted when the user manually
                // calls the `split` method to re-split text.
                this.revert(); // Store the original html content of each target element
                this.elements.forEach(function(element) {
                    set(element, 'html', element.innerHTML);
                }); // Create arrays to hold the split lines, words, and characters
                this.lines = [];
                this.words = [];
                this.chars = []; // cache vertical scroll position before splitting
                var scrollPos = [
                    window.pageXOffset,
                    window.pageYOffset
                ]; // If new options were passed into the `split()` method, update settings
                if (options !== undefined) {
                    this.settings = extend(this.settings, parseSettings(options));
                }
                var types = parseTypes(this.settings.types); // If the `types` option is set to an empty array, text will not be split.
                // @example new SplitType('#target', { types: [] })
                if (types.none) {
                    return;
                } // Split text in each target element
                this.elements.forEach(function(element) {
                    // Add the split text nodes from this element to the arrays of all split
                    // text nodes for this instance.
                    set(element, 'isRoot', true);
                    var _split2 = split(element, _this.settings), words = _split2.words, chars = _split2.chars;
                    _this.words = [].concat(_toConsumableArray(_this.words), _toConsumableArray(words));
                    _this.chars = [].concat(_toConsumableArray(_this.chars), _toConsumableArray(chars));
                });
                this.elements.forEach(function(element) {
                    if (types.lines || _this.settings.absolute) {
                        var lines = repositionAfterSplit(element, _this.settings, scrollPos);
                        _this.lines = [].concat(_toConsumableArray(_this.lines), _toConsumableArray(lines));
                    }
                }); // Set isSplit to true for the SplitType instance
                this.isSplit = true; // Set scroll position to cached value.
                window.scrollTo(scrollPos[0], scrollPos[1]); // Clean up stored data
                cleanup();
            }
        },
        {
            key: "revert",
            value: function revert() {
                if (this.isSplit) {
                    // Reset instance properties if necessary
                    this.lines = null;
                    this.words = null;
                    this.chars = null;
                    this.isSplit = false;
                }
                SplitType.revert(this.elements);
            }
        }
    ]);
    return SplitType;
}();
;
}),
]);

//# sourceMappingURL=0cv2_0ig~_ny._.js.map