"use client"

import { useState } from "react"

type Props = {
    id: string
    title: string
    poster?: string // optional poster image
    start?: number // optional start time (sec)
}

export default function VideoPlayer({ id, title, poster, start }: Props) {
    const [active, setActive] = useState(false)
    const src = `https://www.youtube-nocookie.com/embed/${id}?${[
        "rel=0",
        "modestbranding=1",
        "playsinline=1",
        start ? `start=${start}` : "",
        active ? "autoplay=1" : "",
    ]
        .filter(Boolean)
        .join("&")}`

    return (
        <div className="relative w-full aspect-video mb-8 overflow-hidden rounded-lg shadow">
            {active ? (
                <iframe
                    src={src}
                    title={title}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            ) : (
                <button
                    type="button"
                    className="group absolute inset-0 w-full h-full text-left"
                    onClick={() => setActive(true)}
                    aria-label={`Play: ${title}`}
                >
                    {poster ? (
                        <img
                            src={poster}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                        />
                    ) : null}
                    <span
                        className="absolute inset-0 grid place-items-center bg-black/30 group-hover:bg-black/40 transition-opacity"
                        aria-hidden="true"
                    >
                        <span className="inline-flex items-center justify-center rounded-full w-16 h-16 bg-white/90 shadow">
                            ▶
                        </span>
                    </span>
                </button>
            )}
        </div>
    )
}
