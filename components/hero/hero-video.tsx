import Video from '@/components/common/video'

export const HeroVideo = () => {
  return (
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative mt-12">
        <Video video="/img/vids/intro.mp4" alt="Coding ASMR" videoWidth={1920} videoHeight={1080} />
      </div>
    </div>
  )
}
