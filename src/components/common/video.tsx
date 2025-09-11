'use client'

import { useEffect, useRef } from 'react'

interface VideoProps {
  video      : string
  videoWidth : number
  videoHeight: number
  alt        : string
}

export default function Video({ video, videoWidth, videoHeight, alt }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play()
  }, [])

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        width={videoWidth}
        height={videoHeight}
        loop
        controls
        autoPlay 
        muted 
      >
        <source src={video} type="video/mp4" />
        {alt} 
      </video>
    </div>
  )
}
