import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      
      {/* Red glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.35),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-red-500">Waia</span>, your personal
            <br />
            webmaster Assistant
            <br />
            who creates your website
          </h1>

          <p className="mt-6 text-zinc-300 max-w-xl">
            Brand new! Waia was born on December 30.
          </p>

          <p className="mt-4 text-zinc-400 max-w-xl">
            Create your website in minutes. Personalized, optimized,
            and ready to go live. Waia writes your content, selects images,
            and boosts your SEO — all through chat.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 text-white font-semibold shadow-lg shadow-red-600/30 hover:bg-red-700 transition">
            ✨ Start chatting with Waia
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex items-center justify-center">
          
          {/* Rotating red ring */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-red-500/30 animate-spin-slow" />
          <div className="absolute w-[520px] h-[520px] rounded-full border border-red-500/10" />

          {/* Chat cards */}
          <div className="space-y-4">
            <div className="bg-zinc-900/80 border border-red-500/20 rounded-xl p-4 shadow-lg shadow-red-500/20 max-w-xs rotate-[-6deg]">
              Bonjour et bienvenue, je suis Waia 👋  
              Parle-moi de ton projet !
            </div>

            <div className="bg-zinc-900/80 border border-red-500/20 rounded-xl p-4 shadow-lg shadow-red-500/20 max-w-xs rotate-[4deg] ml-12">
              J’ai un restaurant familial 🍽️
            </div>

            <div className="bg-zinc-900/80 border border-red-500/20 rounded-xl p-4 shadow-lg shadow-red-500/20 max-w-xs rotate-[-3deg]">
              Super ! Voici une structure de site idéale 🚀
            </div>
          </div>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroSection;
