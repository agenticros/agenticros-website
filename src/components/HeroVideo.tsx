export default function HeroVideo() {
  return (
    <section className="border-t border-[var(--border-subtle)]">
      <div className="relative h-screen w-full">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/_fbWhYcPj0M?autoplay=1&mute=1&playsinline=1&loop=1&playlist=_fbWhYcPj0M&rel=0"
          title="AgenticROS demo video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  )
}
