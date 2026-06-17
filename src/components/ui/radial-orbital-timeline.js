"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RadialOrbitalTimeline;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var badge_1 = require("@/components/ui/badge");
var button_1 = require("@/components/ui/button");
var card_1 = require("@/components/ui/card");
function RadialOrbitalTimeline(_a) {
    var timelineData = _a.timelineData, _b = _a.theme, theme = _b === void 0 ? "dark" : _b;
    var isLight = theme === "light";
    var _c = (0, react_1.useState)({}), expandedItems = _c[0], setExpandedItems = _c[1];
    var _d = (0, react_1.useState)("orbital"), viewMode = _d[0], setViewMode = _d[1];
    var _e = (0, react_1.useState)(0), rotationAngle = _e[0], setRotationAngle = _e[1];
    var _f = (0, react_1.useState)(true), autoRotate = _f[0], setAutoRotate = _f[1];
    var _g = (0, react_1.useState)({}), pulseEffect = _g[0], setPulseEffect = _g[1];
    var _h = (0, react_1.useState)({
        x: 0,
        y: 0,
    }), centerOffset = _h[0], setCenterOffset = _h[1];
    var _j = (0, react_1.useState)(null), activeNodeId = _j[0], setActiveNodeId = _j[1];
    var containerRef = (0, react_1.useRef)(null);
    var orbitRef = (0, react_1.useRef)(null);
    var nodeRefs = (0, react_1.useRef)({});
    var handleContainerClick = function (e) {
        if (e.target === containerRef.current || e.target === orbitRef.current) {
            setExpandedItems({});
            setActiveNodeId(null);
            setPulseEffect({});
            setAutoRotate(true);
        }
    };
    var toggleItem = function (id) {
        setExpandedItems(function (prev) {
            var newState = __assign({}, prev);
            Object.keys(newState).forEach(function (key) {
                if (parseInt(key) !== id) {
                    newState[parseInt(key)] = false;
                }
            });
            newState[id] = !prev[id];
            if (!prev[id]) {
                setActiveNodeId(id);
                setAutoRotate(false);
                var relatedItems = getRelatedItems(id);
                var newPulseEffect_1 = {};
                relatedItems.forEach(function (relId) {
                    newPulseEffect_1[relId] = true;
                });
                setPulseEffect(newPulseEffect_1);
                centerViewOnNode(id);
            }
            else {
                setActiveNodeId(null);
                setAutoRotate(true);
                setPulseEffect({});
            }
            return newState;
        });
    };
    (0, react_1.useEffect)(function () {
        var animationFrame = 0;
        var animate = function () {
            setRotationAngle(function (prev) {
                var newAngle = (prev + 0.25) % 360;
                return Number(newAngle.toFixed(3));
            });
            animationFrame = requestAnimationFrame(animate);
        };
        if (autoRotate && viewMode === "orbital") {
            animationFrame = requestAnimationFrame(animate);
        }
        return function () {
            cancelAnimationFrame(animationFrame);
        };
    }, [autoRotate, viewMode]);
    var centerViewOnNode = function (nodeId) {
        if (viewMode !== "orbital" || !nodeRefs.current[nodeId])
            return;
        var nodeIndex = timelineData.findIndex(function (item) { return item.id === nodeId; });
        var totalNodes = timelineData.length;
        var targetAngle = (nodeIndex / totalNodes) * 360;
        setRotationAngle(270 - targetAngle);
    };
    var orbitRadius = 260;
    var calculateNodePosition = function (index, total) {
        var angle = ((index / total) * 360 + rotationAngle) % 360;
        var radius = orbitRadius;
        var radian = (angle * Math.PI) / 180;
        var x = radius * Math.cos(radian) + centerOffset.x;
        var y = radius * Math.sin(radian) + centerOffset.y;
        var zIndex = Math.round(100 + 50 * Math.cos(radian));
        var opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
        return { x: x, y: y, angle: angle, zIndex: zIndex, opacity: opacity };
    };
    var getRelatedItems = function (itemId) {
        var currentItem = timelineData.find(function (item) { return item.id === itemId; });
        return currentItem ? currentItem.relatedIds : [];
    };
    var isRelatedToActive = function (itemId) {
        if (!activeNodeId)
            return false;
        var relatedItems = getRelatedItems(activeNodeId);
        return relatedItems.includes(itemId);
    };
    var getStatusStyles = function (status) {
        if (isLight) {
            switch (status) {
                case "completed":
                    return "text-white bg-ink border-ink";
                case "in-progress":
                    return "text-black bg-white border-slate-300";
                case "pending":
                    return "text-slate-700 bg-slate-200 border-slate-200";
                default:
                    return "text-slate-700 bg-slate-200 border-slate-200";
            }
        }
        switch (status) {
            case "completed":
                return "text-white bg-black border-white";
            case "in-progress":
                return "text-black bg-white border-black";
            case "pending":
                return "text-white bg-black/40 border-white/50";
            default:
                return "text-white bg-black/40 border-white/50";
        }
    };
    return (<div className={"w-full h-screen flex items-center justify-center ".concat(isLight ? "bg-transparent" : "bg-black", " overflow-hidden")} ref={containerRef} onClick={handleContainerClick}>
      <div className="relative w-full max-w-6xl h-full flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-8">
        <div className="flex-1 flex flex-col justify-center max-w-xl text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-3">
            The workflow in practice
          </p>
          <p className={"text-base sm:text-lg font-medium leading-7 ".concat(isLight ? "text-slate-900" : "text-white/90")}>
            Five phases, clearly mapped.
            This orbital timeline visualizes how each step orbits the central execution plan, giving stakeholders a clear sense of sequence and status.
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center min-h-[520px]">
          <div className="relative w-full max-w-xl h-full flex items-center justify-center" ref={orbitRef} style={{
            perspective: "1000px",
            transform: "translate(".concat(centerOffset.x, "px, ").concat(centerOffset.y, "px)"),
        }}>
          <div className="absolute rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10" style={{
            width: orbitRadius * 0.16,
            height: orbitRadius * 0.16,
        }}>
            <div className={"absolute rounded-full border-2 ".concat(isLight ? "border-slate-200" : "border-white/20", " animate-ping opacity-70")} style={{
            width: orbitRadius * 0.22,
            height: orbitRadius * 0.22,
        }}></div>
            <div className={"absolute rounded-full border-2 ".concat(isLight ? "border-slate-200/40" : "border-white/10", " animate-ping opacity-50")} style={{
            width: orbitRadius * 0.26,
            height: orbitRadius * 0.26,
            animationDelay: "0.5s",
        }}></div>
            <div className={"rounded-full ".concat(isLight ? "bg-slate-100" : "bg-white/80 backdrop-blur-md")} style={{
            width: orbitRadius * 0.05,
            height: orbitRadius * 0.05,
        }}></div>
          </div>

          <div className={"absolute rounded-full border-2 ".concat(isLight ? "border-slate-200/60" : "border-white/20")} style={{
            width: orbitRadius * 2,
            height: orbitRadius * 2,
        }}></div>
        </div>

          {timelineData.map(function (item, index) {
            var position = calculateNodePosition(index, timelineData.length);
            var isExpanded = expandedItems[item.id];
            var isRelated = isRelatedToActive(item.id);
            var isPulsing = pulseEffect[item.id];
            var Icon = item.icon;
            var nodeStyle = {
                transform: "translate(".concat(position.x, "px, ").concat(position.y, "px)"),
                zIndex: isExpanded ? 200 : position.zIndex,
                opacity: isExpanded ? 1 : position.opacity,
            };
            return (<div key={item.id} ref={function (el) { return (nodeRefs.current[item.id] = el); }} className="absolute cursor-pointer" style={__assign(__assign({}, nodeStyle), { transform: "translate3d(".concat(position.x, "px, ").concat(position.y, "px, 0)"), willChange: "transform, opacity" })} onClick={function (e) {
                    e.stopPropagation();
                    toggleItem(item.id);
                }}>
                <div className={"absolute rounded-full -inset-1 ".concat(isPulsing ? "animate-pulse duration-1000" : "")} style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
                    width: "".concat(item.energy * 0.5 + 40, "px"),
                    height: "".concat(item.energy * 0.5 + 40, "px"),
                    left: "-".concat((item.energy * 0.5 + 40 - 40) / 2, "px"),
                    top: "-".concat((item.energy * 0.5 + 40 - 40) / 2, "px"),
                }}></div>

                <div className={"\n                  w-16 h-16 rounded-full flex items-center justify-center\n                  ".concat(isLight
                    ? isExpanded
                        ? "bg-white text-slate-900"
                        : isRelated
                            ? "bg-white/50 text-slate-900"
                            : "bg-slate-100 text-slate-900"
                    : isExpanded
                        ? "bg-white text-black"
                        : isRelated
                            ? "bg-white/50 text-black"
                            : "bg-black text-white", "\n                  border-4 \n                  ").concat(isLight
                    ? isExpanded
                        ? "border-slate-200 shadow-lg shadow-slate-200/30"
                        : isRelated
                            ? "border-slate-200 animate-pulse"
                            : "border-slate-200/40"
                    : isExpanded
                        ? "border-white shadow-lg shadow-white/30"
                        : isRelated
                            ? "border-white animate-pulse"
                            : "border-white/40", "\n                  transition-all duration-500 ease-out transform\n                  ").concat(isExpanded ? "scale-175" : "", "\n                ")}>
                  <Icon size={22}/>
                </div>

                <div className={"\n                  absolute top-12  whitespace-nowrap\n                  text-xs font-semibold tracking-wider\n                  transition-all duration-300\n                  ".concat(isLight
                    ? isExpanded
                        ? "text-slate-900 scale-125"
                        : "text-slate-700"
                    : isExpanded
                        ? "text-white scale-125"
                        : "text-white/70", "\n                ")}>
                  {item.title}
                </div>

                {isExpanded && (<card_1.Card className={"absolute top-20 left-1/2 -translate-x-1/2 w-64 overflow-visible ".concat(isLight
                        ? "bg-white border-slate-200 shadow-sm"
                        : "bg-black/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10")}>
                    <div className={"absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 ".concat(isLight ? "bg-slate-300" : "bg-white/50")}></div>
                    <card_1.CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <badge_1.Badge className={"px-2 text-xs ".concat(getStatusStyles(item.status))}>
                          {item.status === "completed"
                        ? "COMPLETE"
                        : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                        </badge_1.Badge>
                        <span className={"text-xs font-mono ".concat(isLight ? "text-slate-500" : "text-white/50")}>
                          {item.date}
                        </span>
                      </div>
                      <card_1.CardTitle className="text-sm mt-2">
                        {item.title}
                      </card_1.CardTitle>
                    </card_1.CardHeader>
                    <card_1.CardContent className={"text-xs ".concat(isLight ? "text-slate-700" : "text-white/80")}>
                      <p>{item.content}</p>

                      <div className={"mt-4 pt-3 border-t ".concat(isLight ? "border-slate-200" : "border-white/10")}>
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center">
                            <lucide_react_1.Zap size={10} className="mr-1"/>
                            Energy Level
                          </span>
                          <span className="font-mono">{item.energy}%</span>
                        </div>
                        <div className={"w-full h-1 ".concat(isLight ? "bg-slate-200" : "bg-white/10", " rounded-full overflow-hidden")}>
                          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: "".concat(item.energy, "%") }}></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (<div className={"mt-4 pt-3 border-t ".concat(isLight ? "border-slate-200" : "border-white/10")}>
                          <div className="flex items-center mb-2">
                            <lucide_react_1.Link size={10} className={"".concat(isLight ? "text-slate-500" : "text-white/70", " mr-1")}/>
                            <h4 className={"text-xs uppercase tracking-wider font-medium ".concat(isLight ? "text-slate-700" : "text-white/70")}>
                              Connected Nodes
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map(function (relatedId) {
                            var relatedItem = timelineData.find(function (i) { return i.id === relatedId; });
                            return (<button_1.Button key={relatedId} variant="outline" size="sm" className={"flex items-center h-6 px-2 py-0 text-xs rounded-none ".concat(isLight
                                    ? "border-slate-200 bg-transparent text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                                    : "border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white", " transition-all")} onClick={function (e) {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                }}>
                                  {relatedItem === null || relatedItem === void 0 ? void 0 : relatedItem.title}
                                  <lucide_react_1.ArrowRight size={8} className={"ml-1 ".concat(isLight ? "text-slate-500" : "text-white/60")}/>
                                </button_1.Button>);
                        })}
                          </div>
                        </div>)}
                    </card_1.CardContent>
                  </card_1.Card>)}
              </div>);
        })}
        </div>
      </div>
    </div>);
}
