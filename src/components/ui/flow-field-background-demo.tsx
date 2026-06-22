import React from "react";
import NeuralBackground from "@/components/ui/flow-field-background";

export default function NeuralHeroDemo() {
  return (
    // Container must have a defined height, or use h-screen
    <div className="relative w-full h-screen">
      <NeuralBackground 
        color="#06b6d4" // Cyan-500
        trailOpacity={0.1} // Lower = longer trails
        speed={0.8}
        theme="light"
      />
    </div>
  );
}
