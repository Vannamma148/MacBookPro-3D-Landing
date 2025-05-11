import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import "./Style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { MacContainer } from "./MacContainer";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading process (for demonstration)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // simulate 2-second loading time
  }, []);

  return (
    <div className="w-full h-screen font-[Helvetica_Now_Display]">
      {/* Navbar */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex gap-8 pt-3 justify-center items-center z-30">
        {["iPhone", "iPad", "ios", "mac", "Products"].map((e) => (
          <a
            href="#"
            key={e}
            className="text-white font-medium text-sm capitalize transition-colors duration-300 hover:text-[#00ffea] hover:text-shadow hover:shadow-[0_0_6px_#00ffea] p-2"
          >
            {e}
          </a>
        ))}
      </div>

      {/* Title Section */}
      <div className="absolute flex flex-col items-center top-18 left-1/2 text-white -translate-x-1/2 title-container">
        <h3 className="text-6xl tracking-tighter font-semibold">MacBook Pro</h3>
        <h5 className="mt-2">Oh so pro!</h5>
        <p className="text-center w-2/4 mt-4">
          "Bold. Beautiful. Unstoppable. The MacBook Pro is more than a laptop –
          it’s a statement of power and precision."
        </p>
      </div>

      {/* 3D Model Section */}
      {loading ? (
        <div className="loading-overlay">
          <p>Loading...</p> {/* You can replace this with a loading spinner */}
        </div>
      ) : (
        <Canvas camera={{ fov: 12, position: [0, -1, 220] }}>
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
            ]}
          />
          <ScrollControls>
            <MacContainer />
          </ScrollControls>
        </Canvas>
      )}
    </div>
  );
}
