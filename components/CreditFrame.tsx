"use client"

import React, { useState, useEffect } from "react"
import Iframe from "react-iframe"

export default function InsuranceFrame() {
    const [loading, setLoading] = useState(true)

    // Optional fallback: auto-hide spinner if iframe never fires onLoad
    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 15000) // 15s max
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className="container">
            {/* Spinner overlay */}
            {loading && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 9999,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "16px",
                        paddingTop: "10rem",
                        background: "rgba(255, 255, 255, 0.85)",
                        width: "100vw",
                        height: "100vh",
                    }}
                >
                    {/* Modern animated spinner */}
                    <div
                        style={{
                            width: "60px",
                            height: "60px",
                            border: "4px solid #f3f4f6",
                            borderTop: "4px solid #0C3559",
                            borderRight: "4px solid #C6912B",
                            borderRadius: "50%",
                            animation: "spin 1.2s linear infinite",
                        }}
                    />

                    {/* Loading text */}
                    <div
                        style={{
                            color: "#0C3559",
                            fontSize: "16px",
                            fontWeight: "500",
                            textAlign: "center",
                        }}
                    >
                        Se încarcă calculatorul de asigurări...
                    </div>

                    {/* Dots animation */}
                    <div style={{ display: "flex", gap: "4px" }}>
                        <div
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "#0C3559",
                                animation:
                                    "bounce 1.4s ease-in-out infinite both",
                                animationDelay: "0s",
                            }}
                        />
                        <div
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "#C6912B",
                                animation:
                                    "bounce 1.4s ease-in-out infinite both",
                                animationDelay: "0.2s",
                            }}
                        />
                        <div
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "#0C3559",
                                animation:
                                    "bounce 1.4s ease-in-out infinite both",
                                animationDelay: "0.4s",
                            }}
                        />
                    </div>
                </div>
            )}

            {/* The iframe */}
            <Iframe
                url="https://www.procheck24.de/einsurance/csp/doHomepageEntry.do?cspident=93A936F88085A69ECC42FC1AE4A00151&p=1"
                id="kredit_frame"
                width="100%"
                height="3300"
                scrolling="no"
                onLoad={() => setLoading(false)}
            />

            {/* Spinner animation keyframes */}
            <style>
                {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes bounce {
            0%, 80%, 100% { 
              transform: scale(0);
              opacity: 0.5;
            }
            40% { 
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
            </style>
        </div>
    )
}
