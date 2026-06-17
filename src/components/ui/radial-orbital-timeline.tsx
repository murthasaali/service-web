"use client";

import type * as React from "react";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: string;
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  theme?: "dark" | "light";
}

export default function RadialOrbitalTimeline({
  timelineData,
  theme = "dark",
}: RadialOrbitalTimelineProps) {
  const isLight = theme === "light";
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let animationFrame = 0;

    const animate = () => {
      setRotationAngle((prev) => {
        const newAngle = (prev + 0.25) % 360;
        return Number(newAngle.toFixed(3));
      });
      animationFrame = requestAnimationFrame(animate);
    };

    if (autoRotate && viewMode === "orbital") {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const orbitRadius = 260;
  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = orbitRadius;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
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

  return (
    <div
      className={`w-full h-screen flex items-center justify-center ${
        isLight ? "bg-transparent" : "bg-black"
      } overflow-hidden`}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-6xl h-full flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-8">
        <div className="flex-1 flex flex-col justify-center max-w-xl text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-3">
            The workflow in practice
          </p>
          <p
            className={`text-base sm:text-lg font-medium leading-7 ${
              isLight ? "text-slate-900" : "text-white/90"
            }`}
          >
            Five phases, clearly mapped.
            This orbital timeline visualizes how each step orbits the central execution plan, giving stakeholders a clear sense of sequence and status.
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center min-h-[520px]">
          <div
            className="relative w-full max-w-xl h-full flex items-center justify-center"
            ref={orbitRef}
            style={{
              perspective: "1000px",
              transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
            }}
          >
          <div
            className="absolute rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10"
            style={{
              width: orbitRadius * 0.16,
              height: orbitRadius * 0.16,
            }}
          >
            <div
              className={`absolute rounded-full border-2 ${
                isLight ? "border-slate-200" : "border-white/20"
              } animate-ping opacity-70`}
              style={{
                width: orbitRadius * 0.22,
                height: orbitRadius * 0.22,
              }}
            ></div>
            <div
              className={`absolute rounded-full border-2 ${
                isLight ? "border-slate-200/40" : "border-white/10"
              } animate-ping opacity-50`}
              style={{
                width: orbitRadius * 0.26,
                height: orbitRadius * 0.26,
                animationDelay: "0.5s",
              }}
            ></div>
            <div
              className={`rounded-full ${
                isLight ? "bg-slate-100" : "bg-white/80 backdrop-blur-md"
              }`}
              style={{
                width: orbitRadius * 0.05,
                height: orbitRadius * 0.05,
              }}
            ></div>
          </div>

          <div
            className={`absolute rounded-full border-2 ${
              isLight ? "border-slate-200/60" : "border-white/20"
            }`}
            style={{
              width: orbitRadius * 2,
              height: orbitRadius * 2,
            }}
          ></div>
        </div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                className="absolute cursor-pointer"
                style={{
                  ...nodeStyle,
                  transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                  willChange: "transform, opacity",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-16 h-16 rounded-full flex items-center justify-center
                  ${
                    isLight
                      ? isExpanded
                        ? "bg-white text-slate-900"
                        : isRelated
                        ? "bg-white/50 text-slate-900"
                        : "bg-slate-100 text-slate-900"
                      : isExpanded
                      ? "bg-white text-black"
                      : isRelated
                      ? "bg-white/50 text-black"
                      : "bg-black text-white"
                  }
                  border-4 
                  ${
                    isLight
                      ? isExpanded
                        ? "border-slate-200 shadow-lg shadow-slate-200/30"
                        : isRelated
                        ? "border-slate-200 animate-pulse"
                        : "border-slate-200/40"
                      : isExpanded
                      ? "border-white shadow-lg shadow-white/30"
                      : isRelated
                      ? "border-white animate-pulse"
                      : "border-white/40"
                  }
                  transition-all duration-500 ease-out transform
                  ${isExpanded ? "scale-175" : ""}
                `}
                >
                  <Icon size={22} />
                </div>

                <div
                  className={`
                  absolute top-12  whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  ${
                    isLight
                      ? isExpanded
                        ? "text-slate-900 scale-125"
                        : "text-slate-700"
                      : isExpanded
                      ? "text-white scale-125"
                      : "text-white/70"
                  }
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card
                    className={`absolute top-20 left-1/2 -translate-x-1/2 w-64 overflow-visible ${
                      isLight
                        ? "bg-white border-slate-200 shadow-sm"
                        : "bg-black/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10"
                    }`}
                  >
                    <div
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 ${
                        isLight ? "bg-slate-300" : "bg-white/50"
                      }`}
                    ></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-2 text-xs ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "COMPLETE"
                            : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                        </Badge>
                        <span
                          className={`text-xs font-mono ${
                            isLight ? "text-slate-500" : "text-white/50"
                          }`}
                        >
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-sm mt-2">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent
                      className={`text-xs ${isLight ? "text-slate-700" : "text-white/80"}`}>
                      <p>{item.content}</p>

                      <div
                        className={`mt-4 pt-3 border-t ${
                          isLight ? "border-slate-200" : "border-white/10"
                        }`}
                      >
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center">
                            <Zap size={10} className="mr-1" />
                            Energy Level
                          </span>
                          <span className="font-mono">{item.energy}%</span>
                        </div>
                        <div
                          className={`w-full h-1 ${isLight ? "bg-slate-200" : "bg-white/10"} rounded-full overflow-hidden`}
                        >
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div
                          className={`mt-4 pt-3 border-t ${
                            isLight ? "border-slate-200" : "border-white/10"
                          }`}
                        >
                          <div className="flex items-center mb-2">
                            <Link
                              size={10}
                              className={`${isLight ? "text-slate-500" : "text-white/70"} mr-1`}
                            />
                            <h4
                              className={`text-xs uppercase tracking-wider font-medium ${
                                isLight ? "text-slate-700" : "text-white/70"
                              }`}
                            >
                              Connected Nodes
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className={`flex items-center h-6 px-2 py-0 text-xs rounded-none ${
                                    isLight
                                      ? "border-slate-200 bg-transparent text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                                      : "border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white"
                                  } transition-all`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={8}
                                    className={`ml-1 ${isLight ? "text-slate-500" : "text-white/60"}`}
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
