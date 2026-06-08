import ScrollArrow from './ScrollArrow'

export default function HeroVideo() {
  return (
    <section
      id="hero-video"
      className="panel relative border-t border-[var(--border-subtle)]"
    >
      <div className="relative h-[calc(100vh-4rem)] w-full">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/_fbWhYcPj0M?autoplay=1&mute=1&playsinline=1&loop=1&playlist=_fbWhYcPj0M&rel=0"
          title="AgenticROS demo video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <ScrollArrow nextId="how-it-works" label="See how it works" />
    </section>
  )
}
