export default function FaqSection() {
    return (
      <section className="bg-black px-8 py-20">
        <h2 className="text-5xl md:text-6xl font-montserrat pb-16  text-white">
          Frequently Asked Questions
        </h2>
  
        <div className="grid grid-cols-1 xplus:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col justify-start bg-neutral-900 rounded-2xl p-6 gap-4">
            <img
              src="/offer.jpg"
              alt="Start Foraging"
              className="rounded-xl w-full filter grayscale"
            />
            <h3 className="text-white text-[2rem] font-bold md:text-[3rem] xplus:text-[2rem]">
              What do I need to start mushroom foraging?
            </h3>
            <p className="text-white text-sm text-left sm:text-lg">
              You&apos;ll need a local field guide, a sharp knife or scissors, a basket or mesh bag for collecting,
              and paper bags for separating specimens. Bring a small brush for cleaning, wear sturdy boots,
              and carry a GPS device or compass to track your location. A camera is also helpful to document your finds.
            </p>
          </div>
  
          {/* Card 2 */}
          <div className="flex flex-col  justify-start bg-neutral-900 rounded-2xl p-6 gap-8">
            <h3 className="text-white text-[2rem] font-bold md:text-[3rem] xplus:text-[2rem]">
              How can I identify edible mushrooms?
            </h3>
            <p className="text-white text-sm text-left sm:text-lg">
              Learn from experienced foragers and reliable guidebooks – never rely on apps alone.
              Study each mushroom&apos;s specific features like cap shape, gill structure, stem characteristics,
              and spore prints. Start with easily identifiable species that have no poisonous lookalikes,
              and never eat anything unless you&apos;re completely certain of its identification.
            </p>
            <img
              src="/offer.jpg"
              alt="Identify Mushrooms"
              className="rounded-xl w-full filter grayscale"
            />
          </div>
  
          {/* Card 3 */}
          <div className="flex flex-col justify-start bg-neutral-900 rounded-2xl p-6 gap-8 xplus:row-span-2">
            <img
              src="/offer.jpg"
              alt="Best Seasons"
              className="rounded-xl object-cover  xplus:min-h-[550px] filter grayscale"
            />
            <h3 className="text-white text-[2rem] font-bold md:text-[3rem] xplus:text-[2rem]">
              Where can I find foraging spots?
            </h3>
            <p className="text-white text-sm text-left sm:text-lg">
              Look in deciduous forests, especially near oak and maple trees, and in damp, shaded areas.
              Fallen logs and dead trees are often productive spots. Only forage on public lands where it&apos;s allowed,
              and always check local regulations. Remember to get permission for private property and keep your
              best locations private to prevent over-harvesting.
            </p>
          </div>
  
          {/* Card 4 */}
          <div className="flex flex-col xplus:flex-row bg-neutral-900 rounded-2xl p-6 gap-8 xplus:col-span-2 xplus:col-start-1  xplus:max-h-[270px]">
            <img
              src="/offer.jpg"
              alt="Where to Find"
              className="rounded-xl xplus:max-w-[380px] w-full object-cover filter grayscale"
            />
            <div className="flex flex-col">
              <h3 className="text-white text-[2rem] font-bold text-left md:text-[3rem] xplus:text-[2rem]">
                What are the best seasons for mushroom foraging?
              </h3>
              <p className="text-white text-sm text-left col-span-2 sm:text-lg xplus:text-sm xl:text-lg">
                Spring is ideal for morels, late summer brings chanterelles and boletes, and fall is peak season
                for most mushrooms including oysters and hen of the woods. Some species can even be found in winter,
                especially in milder climates. Each season offers different varieties, so year-round foraging is possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  