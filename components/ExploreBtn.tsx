"use client";
const ExploreBtn = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
      <a
        href="#events"
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#59deca] px-8 py-4 text-sm font-bold text-[#030708] shadow-lg shadow-[#59deca]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#7aead9] sm:w-auto"
      >
        Explore Events
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>

      <a
        href="#about"
        className="flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 sm:w-auto"
      >
        Learn More
      </a>
    </div>
  );
};

export default ExploreBtn;
