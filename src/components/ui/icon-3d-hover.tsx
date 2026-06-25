'use client';

import React, { useState, useRef } from 'react';
import { motion, MotionConfigContext, LayoutGroup } from 'framer-motion';

// Types
interface Props {
  heading?: string;
  text?: string;
  variant?: 'Default' | 'Hover';
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  badge?: string;
}

// Transitions
const transition1 = {
  bounce: 0,
  delay: 0,
  duration: 0.4,
  type: "spring" as const
};

const transition2 = {
  delay: 0,
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1] as [number, number, number, number],
  type: "tween" as const
};

const transformTemplate1 = (_: unknown, t: string) => `translate(-50%, -50%) ${t}`;

// Transition wrapper component
const Transition: React.FC<{ value: unknown; children: React.ReactNode }> = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const contextValue = React.useMemo(() => ({ ...config, transition }), [config, transition]);

  return (
    <MotionConfigContext.Provider value={contextValue}>
      {children}
    </MotionConfigContext.Provider>
  );
};

const Variants = motion.create(React.Fragment);

export const IconHover3D: React.FC<Props> = ({
  heading = "Library",
  text = "A comprehensive collection of digital books and resources for learning and research. ",
  variant = 'Default',
  className = "",
  style = {},
  width = "100%",
  height = "auto",
  badge,
  ...restProps
}) => {
  const [currentVariant, setCurrentVariant] = useState<'Default' | 'Hover'>(variant);
  const refBinding = useRef<HTMLDivElement>(null);
  const defaultLayoutId = React.useId();

  const isHoverVariant = currentVariant === 'Hover';
  const variants = [currentVariant === 'Default' ? 'GPnJri30y' : 'zEwHlJ7zp'];

  const handleMouseEnter = async () => {
    setCurrentVariant('Hover');
  };

  const handleMouseLeave = async () => {
    setCurrentVariant('Default');
  };

  const cubeSliceVariants = {
    zEwHlJ7zp: {
      "--border-color": "rgb(139, 47, 250)"
    }
  };

  // Transition for the title
  const titleTransition = {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], // Smoother easing curve
    type: "tween" as const
  };

  const sliceCubeVariants = {
    zEwHlJ7zp: {
      rotateX: -28,
      rotateY: -43,
      scale: 1.1
    }
  };

  const cornerScaleVariants = {
    zEwHlJ7zp: {
      scale: 2.2
    }
  };

  const containerWidth = typeof width === 'number' ? `${width}px` : width;
  const containerHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <div style={{ width: containerWidth, height: containerHeight }} className="w-full">
      <LayoutGroup id={defaultLayoutId}>
        <Variants animate={variants} initial={false}>
          <Transition value={transition1}>
            <motion.div
              {...restProps}
              className={`icon-hover-3d flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 p-6 rounded-[24px] w-full border border-cyan-100/80 bg-white shadow-[0_12px_40px_rgba(8,145,178,0.08)] transition-all duration-300 ${className}`}
              data-framer-name="Default"
              data-highlight={true}
              ref={refBinding}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={currentVariant === 'Hover' ? handleMouseLeave : undefined}
              style={{
                "--background": "var(--surface)",
                "--foreground": "var(--ink)",
                backgroundColor: "var(--background)",
                position: "relative",
                overflow: "visible",
                ...style
              } as React.CSSProperties}
            >
              {/* Icon Container */}
              <motion.div
                className="icon-container flex-none flex items-center justify-center relative"
                data-framer-name="Icon"
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flex: "none",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  gap: "10px",
                  height: "100px", // Increased from 64px
                  justifyContent: "center",
                  overflow: "visible",
                  padding: "0px",
                  position: "relative",
                  width: "100px", // Increased from 64px
                  zIndex: 1,
                  border: "1px solid color-mix(in srgb, var(--foreground) 20%, transparent)"
                }}
              >
                {/* BG Container */}
                <motion.div
                  className="bg-container"
                  data-framer-name="BG"
                  style={{
                    flex: "none",
                    height: "348px",
                    overflow: "visible",
                    position: "relative",
                    width: "348px",
                    zIndex: 2,
                    scale: 0.3 // Increased from 0.2
                  }}
                >
                  {/* Slice Cube */}
                  <motion.div
                    className="slice-cube"
                    data-framer-name="Slice Cube"
                    style={{
                      alignContent: "center",
                      alignItems: "center",
                      display: "flex",
                      flex: "none",
                      flexDirection: "column",
                      flexWrap: "nowrap",
                      gap: "28px",
                      height: "min-content",
                      justifyContent: "center",
                      left: "50%",
                      overflow: "visible",
                      padding: "0px",
                      position: "absolute",
                      top: "50%",
                      transformStyle: "preserve-3d",
                      width: "min-content",
                      zIndex: 3,
                      rotate: 49,
                      rotateX: 23,
                      rotateY: 33,
                      scale: 0.7,
                      transformPerspective: 1200
                    }}
                    transformTemplate={transformTemplate1}
                    variants={sliceCubeVariants}
                    animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  >
                    {/* Slice 1 */}
                    <Transition value={transition2}>
                      <motion.div
                        className="slice-1"
                        data-framer-name="Slice 1"
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flex: "none",
                          flexDirection: "row",
                          flexWrap: "nowrap",
                          gap: "10px",
                          height: "min-content",
                          justifyContent: "center",
                          overflow: "visible",
                          padding: "0px",
                          position: "relative",
                          transformStyle: "preserve-3d",
                          width: "min-content"
                        }}
                      >
                        {/* Front */}
                        <motion.div
                          className="slice-1-front"
                          data-framer-name="Front"
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            height: "34px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "relative",
                            width: "240px",
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            zIndex: 120
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Back */}
                        <motion.div
                          className="slice-1-back"
                          data-framer-name="Back" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "0px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 180,
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Right */}
                        <motion.div
                          className="slice-1-right"
                          data-framer-name="Right" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            left: "120px",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Left */}
                        <motion.div
                          className="slice-1-left"
                          data-framer-name="Left" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "120px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: -90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Top */}
                        <motion.div
                          className="slice-1-top"
                          data-framer-name="Top" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-120px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Bottom */}
                        <motion.div
                          className="slice-1-bottom"
                          data-framer-name="Bottom" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-86px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                      </motion.div>
                    </Transition>

                    {/* Slice 2 */}
                    <Transition value={transition2}>
                      <motion.div
                        className="slice-2"
                        data-framer-name="Slice 2"
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flex: "none",
                          flexDirection: "row",
                          flexWrap: "nowrap",
                          gap: "10px",
                          height: "min-content",
                          justifyContent: "center",
                          overflow: "visible",
                          padding: "0px",
                          position: "relative",
                          transformStyle: "preserve-3d",
                          width: "min-content"
                        }}
                      >
                        {/* Front */}
                        <motion.div
                          className="slice-1-front"
                          data-framer-name="Front"
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            height: "34px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "relative",
                            width: "240px",
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            zIndex: 120
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Back */}
                        <motion.div
                          className="slice-1-back"
                          data-framer-name="Back" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "0px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 180,
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Right */}
                        <motion.div
                          className="slice-1-right"
                          data-framer-name="Right" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            left: "120px",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Left */}
                        <motion.div
                          className="slice-1-left"
                          data-framer-name="Left" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "120px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: -90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Top */}
                        <motion.div
                          className="slice-1-top"
                          data-framer-name="Top" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-120px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Bottom */}
                        <motion.div
                          className="slice-1-bottom"
                          data-framer-name="Bottom" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-86px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                      </motion.div>
                    </Transition>

                    {/* Slice 3 */}
                    <Transition value={transition2}>
                      <motion.div
                        className="slice-3"
                        data-framer-name="Slice 3"
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flex: "none",
                          flexDirection: "row",
                          flexWrap: "nowrap",
                          gap: "10px",
                          height: "min-content",
                          justifyContent: "center",
                          overflow: "visible",
                          padding: "0px",
                          position: "relative",
                          transformStyle: "preserve-3d",
                          width: "min-content"
                        }}
                      >
                        {/* Front */}
                        <motion.div
                          className="slice-1-front"
                          data-framer-name="Front"
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            height: "34px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "relative",
                            width: "240px",
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            zIndex: 120
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Back */}
                        <motion.div
                          className="slice-1-back"
                          data-framer-name="Back" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "0px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 180,
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Right */}
                        <motion.div
                          className="slice-1-right"
                          data-framer-name="Right" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            left: "120px",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Left */}
                        <motion.div
                          className="slice-1-left"
                          data-framer-name="Left" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "120px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: -90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Top */}
                        <motion.div
                          className="slice-1-top"
                          data-framer-name="Top" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-120px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Bottom */}
                        <motion.div
                          className="slice-1-bottom"
                          data-framer-name="Bottom" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-86px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                      </motion.div>
                    </Transition>
                  </motion.div>
                  {/* Corner elements */}
                  <motion.div
                    style={{
                      flex: "none",
                      height: "24px",
                      left: isHoverVariant ? "-6px" : "14px",
                      overflow: "hidden",
                      position: "absolute",
                      top: isHoverVariant ? "-6px" : "14px",
                      width: "24px",
                      zIndex: 2,
                      borderLeft: "4px solid var(--foreground)",
                      borderTop: "4px solid var(--foreground)",
                      scale: 1
                    }}
                    variants={cornerScaleVariants}
                    animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                  <motion.div
                    style={{
                      flex: "none",
                      height: "24px",
                      left: isHoverVariant ? "-6px" : "14px",
                      overflow: "hidden",
                      position: "absolute",
                      top: isHoverVariant ? "330px" : "310px",
                      width: "24px",
                      zIndex: 2,
                      borderLeft: "4px solid var(--foreground)",
                      borderBottom: "4px solid var(--foreground)",
                      scale: 1
                    }}
                    variants={cornerScaleVariants}
                    animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                  <motion.div
                    style={{
                      bottom: isHoverVariant ? "-6px" : "14px",
                      flex: "none",
                      height: "24px",
                      overflow: "hidden",
                      position: "absolute",
                      right: isHoverVariant ? "-6px" : "14px",
                      width: "24px",
                      zIndex: 2,
                      borderRight: "4px solid var(--foreground)",
                      borderBottom: "4px solid var(--foreground)",
                      scale: 1
                    }}
                    variants={cornerScaleVariants}
                    animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                  <motion.div
                    style={{
                      flex: "none",
                      height: "24px",
                      overflow: "hidden",
                      position: "absolute",
                      right: isHoverVariant ? "-6px" : "14px",
                      top: isHoverVariant ? "-6px" : "14px",
                      width: "24px",
                      zIndex: 2,
                      borderRight: "4px solid var(--foreground)",
                      borderTop: "4px solid var(--foreground)",
                      scale: 1
                    }}
                    variants={cornerScaleVariants}
                    animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="content flex-1 w-full"
                data-framer-name="Content"
                style={{
                  alignContent: "flex-start",
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "nowrap",
                  gap: "12px", // Increased gap
                  height: "min-content",
                  justifyContent: "center",
                  overflow: "hidden",
                  padding: "0px",
                  position: "relative",
                }}
              >
                {/* Badge if present */}
                {badge && (
                  <span className="inline-flex self-start items-center rounded-full bg-cyan-50 border border-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                    {badge}
                  </span>
                )}

                {/* Text Container */}
                <motion.div
                  className="text-container w-full"
                  data-framer-name="Text"
                  style={{
                    alignContent: "flex-start",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    gap: "10px",
                    justifyContent: "flex-start",
                    overflow: "visible",
                    padding: "0px",
                    position: "relative",
                  }}
                >
                  {/* BG Fill - Hidden for clean black/white effect */}
                  <motion.div
                    className="bg-fill"
                    data-framer-name="BG Fill"
                    style={{
                      flex: "none",
                      height: "32px", // Increased height
                      left: "0px",
                      overflow: "hidden",
                      position: "absolute",
                      top: "calc(50% - 16px)", // Adjusted for new height
                      width: "1px", // Keep minimal
                      zIndex: 0,
                      backgroundColor: "transparent", // Made transparent
                      opacity: 0 // Always hidden
                    }}
                  />
                  {/* Heading Text with hover effect */}
                  <motion.div
                    style={{
                      flex: "1",
                      height: "auto",
                      minHeight: "32px",
                      position: "relative",
                      whiteSpace: "normal",
                      width: "auto",
                      fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                      fontWeight: "600",
                      fontSize: "18px", // Increased font size
                      color: "var(--foreground)",
                      userSelect: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      overflow: "hidden",
                      paddingTop: "2px",
                      paddingBottom: "2px"
                    }}
                  >
                    {/* Background text (white/slate) */}
                    <span className="text-left leading-snug" style={{ position: "relative", zIndex: 1 }}>
                      {heading}
                    </span>
                    {/* Animated overlay text (black/white invert) */}
                    <motion.span
                      className="text-left leading-snug"
                      style={{
                        position: "absolute",
                        top: "2px",
                        left: 0,
                        right: 0,
                        color: "var(--background)",
                        clipPath: `inset(0 ${isHoverVariant ? '0%' : '100%'} 0 0)`,
                        zIndex: 2
                      }}
                      animate={{
                        clipPath: `inset(0 ${isHoverVariant ? '0%' : '100%'} 0 0)`
                      }}
                      transition={titleTransition}
                    >
                      {heading}
                    </motion.span>

                    {/* background fill that moves from left to right */}
                    <motion.div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "var(--foreground)",
                        transformOrigin: "left center",
                        scaleX: 0,
                        zIndex: 1
                      }}
                      animate={{
                        scaleX: isHoverVariant ? 1 : 0
                      }}
                      transition={titleTransition}
                    />
                  </motion.div>
                </motion.div>

                {/* Description Text */}
                <motion.div
                  style={{
                    flex: "none",
                    height: "auto",
                    position: "relative",
                    whiteSpace: "pre-wrap",
                    width: "100%",
                    wordBreak: "break-word",
                    wordWrap: "break-word",
                    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                    fontWeight: "400", // Reduced weight for better readability
                    fontSize: "15px", // Adjusted to fit nicely
                    lineHeight: "1.5em", // Improved line height
                    color: "color-mix(in srgb, var(--foreground) 70%, transparent)",
                    userSelect: "none"
                  }}
                >
                  {text}
                </motion.div>
              </motion.div>
            </motion.div>
          </Transition>
        </Variants>
      </LayoutGroup>
    </div>
  );
};
