"use client";
import React, { useEffect } from "react";

const MapChart: React.FC = () => {
  useEffect(() => {
    // Dynamically load the Flourish script after the component mounts
    const script = document.createElement("script");
    script.src = "https://public.flourish.studio/resources/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script if the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-screen flourish-embed" data-src="visualisation/19037291">
      <noscript>
        <img
          src="https://public.flourish.studio/visualisation/19037291/thumbnail"
          width="100%"
          alt="webgl visualization"
        />
      </noscript>
    </div>
  );
};

export default MapChart;
