import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HeroBackground, type HeroBackgroundVariant } from "@/components/ui/tweenly-hero-background";
export const Route = createFileRoute("/hero-preview")({ component: HeroPreview });
function HeroPreview() {
 const [variant, setVariant] = useState<HeroBackgroundVariant>("dots");
 return <main style={{background:"#ffffff",color:"#17181c",minHeight:"100vh"}}>
 <div className="relative z-20 flex flex-wrap items-center justify-between gap-5 border-b border-black/10 px-6 py-5">
 <a href="/" className="text-sm tracking-widest">HERO BACKGROUND / PREVIEW</a>
 <div className="flex flex-wrap gap-2" aria-label="Background variants">{(["dots","grid","particles","waves","flow","pixels"] as const).map(v=><button key={v} aria-pressed={variant===v} onClick={()=>setVariant(v)} className="rounded-full border px-4 py-2 text-sm capitalize" style={{borderColor:variant===v?"#ff784f":"#00000025",background:variant===v?"#ff784f":"transparent",color:variant===v?"#101114":"inherit"}}>{v}</button>)}</div>
 </div>
 <HeroBackground variant={variant} color="#9b7bc7" accent="#7c3aed" background="#ffffff" mask="none" opacity={0.4} className="min-h-[80vh] w-full">
 <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
 <p className="mb-6 text-xs uppercase tracking-[0.3em] text-black/60">Interactive canvas background</p>
 <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl"><span style={{background:"linear-gradient(110deg, #26272b 10%, #858891 60%, #c0c2c8 100%)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"}}>BUILD</span> <span style={{color:"#7c3aed"}}>TODAY</span></h1>
 <p className="mt-7 max-w-md text-base text-black/60">Move your pointer to shape the background. Click or tap to send a ripple through it.</p>
 <span className="mt-10 rounded-full border border-black/20 px-5 py-2 text-xs uppercase tracking-widest">{variant} / live preview</span>
 </div>
 </HeroBackground>
 </main>;
}
