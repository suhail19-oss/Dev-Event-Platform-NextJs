import ExploreBtn from "@/components/ExploreBtn";

const Page = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#030708] px-5 py-24 sm:px-8"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Teal Glow */}
        <div className="absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#59deca]/[0.08] blur-[150px]" />

        {/* Purple Glow */}
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-600/[0.07] blur-[140px]" />

        {/* Subtle Center Glow */}
        <div className="absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-xl">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#59deca]" />
          <span className="text-sm font-medium text-white/70">
            Discover. Connect. Build.
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="w-full text-5xl font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <span className="block">The Hub for Every</span>

          <span className="mt-2 block">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-[#59deca] bg-clip-text text-transparent">
              Dev Event
            </span>{" "}
            <span className="text-white">You Can't Miss</span>
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-base leading-8 text-white/55 sm:text-lg md:text-xl">
          Hackathons, meetups, and conferences — all in one place. Discover
          exciting events, connect with developers, and take your tech journey
          to the next level.
        </p>

        {/* CTA Buttons */}
        <ExploreBtn />
      </div>
    </section>
  );
};

export default Page;
