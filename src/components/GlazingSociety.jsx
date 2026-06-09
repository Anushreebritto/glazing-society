import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import midnightVelvet from "../assets/images/midnight-velvet.jpg";
import blushLavender from "../assets/images/blush-lavender.jpg";
import citrusBurst from "../assets/images/citrus-burst.jpg";
import { useState, useEffect, useRef } from "react";
import roseGarden from "../assets/images/rose-garden.jpg";
const DONUTS = [
  { name: "Strawberry Dream", price: "₹200", desc: "Fresh strawberry glaze with crushed freeze-dried berries", accent: "#e8748a", emoji: "🍓", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80&auto=format" },
  { name: "Golden Honey", price: "₹149", desc: "Wildflower honey glaze with toasted almond slivers", accent: "#d4a017", emoji: "🍯", img: "https://images.unsplash.com/photo-1556913396-7a3c459ef68e?w=500&q=80&auto=format" },
  { name: "Midnight Velvet", price: "₹179", desc: "Rich dark chocolate glaze with edible gold dust", accent: "#7c4b2a", emoji: "✨", img: midnightVelvet },
  { name: "Blush Lavender", price: "₹169", desc: "Earl grey infused glaze with culinary lavender buds", accent: "#9b7eb8", emoji: "💜", img: blushLavender },
  { name: "Citrus Burst", price: "₹199", desc: "Meyer lemon curd filling with candied zest on top", accent: "#c9a227", emoji: "🍋", img: citrusBurst },
  {
  name: "Rose Garden",
  price: "₹269",
  desc: "Persian rosewater glaze adorned with micro petals",
  accent: "#c45c7a",
  emoji: "🌹",
  img: roseGarden,
}
];

const REVIEWS = [
  { name: "Ananya R.", city: "Mumbai", text: "Glazing Society ruined all other donuts for me. The Midnight Velvet is pure poetry. Ordered three times this week alone.", av: "A", avColor: "#e8748a" },
  { name: "Priya K.", city: "Bangalore", text: "Everything about this brand is chef's kiss — the packaging, the flavours, the experience. Rose Garden tastes like a luxury spa weekend.", av: "P", avColor: "#9b7eb8" },
  { name: "Meera S.", city: "Delhi", text: "Ordered for my daughter's birthday and the whole family was speechless. Best donuts we've ever had. Worth every rupee.", av: "M", avColor: "#d4a017" },
  { name: "Kavya N.", city: "Chennai", text: "The Golden Honey flavour is genuinely transcendent. Light, floral, not too sweet. I dream about it. Please never stop making these.", av: "K", avColor: "#c45c7a" },
];

const MARQUEE = ["Handcrafted Daily", "Premium Ingredients", "Free Delivery", "Seasonal Flavours", "Made with Love", "Small Batch Only", "Glazed to Perfection"];

const BRAND_LETTERS = [
  { char: "G", pink: true }, { char: "L", pink: false }, { char: "A", pink: true },
  { char: "Z", pink: false }, { char: "I", pink: true }, { char: "N", pink: false },
  { char: "G", pink: true }, { char: " ", pink: false },
  { char: "S", pink: false }, { char: "O", pink: true }, { char: "C", pink: false },
  { char: "I", pink: true }, { char: "E", pink: false }, { char: "T", pink: true },
  { char: "Y", pink: false },
];

function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function RevealDiv({ children, className = "", style = {}, delay = 0 }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(40px)",
      transition: `opacity .7s ${delay}s ease, transform .7s ${delay}s ease`,
    }}>
      {children}
    </div>
  );
}

export default function GlazingSociety() {
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#fdf6f0", overflowX: "hidden", color: "#2a1a1a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=Nunito:wght@300;400;500;600;700;800;900&display=swap');
        :root { --pink:#e8748a; --pink-dark:#c94d6b; --pink-light:#fce4ec; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: #e8748a; border-radius: 10px; }
        .font-display { font-family: 'Playfair Display', serif; }
        @keyframes floatMain { 0%,100%{transform:translateY(0) rotate(-3deg)} 50%{transform:translateY(-20px) rotate(3deg)} }
        @keyframes floatCard1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatCard2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes letterBounce { 0%,80%,100%{transform:translateY(0)} 90%{transform:translateY(-8px)} }
        @keyframes waveIn { to{opacity:1} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes pulseOut { 0%{transform:translate(-50%,-50%) scale(1);opacity:.6} 100%{transform:translate(-50%,-50%) scale(1.5);opacity:0} }
        @keyframes spinRing { to{transform:rotate(360deg)} }
        @keyframes spinDonut { 0%,100%{transform:rotate(-8deg) scale(1)} 50%{transform:rotate(8deg) scale(1.1)} }
        @keyframes orbFloat1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,-40px)} }
        @keyframes orbFloat2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,30px)} }
        @keyframes fadeHeroIn { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes revealLine { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .hero-line1 { display:block; opacity:0; animation:revealLine .9s .4s forwards; }
        .hero-line2 { display:block; color:#e8748a; font-style:italic; opacity:0; animation:revealLine .9s .6s forwards; position:relative; }
        .hero-line2::after { content:''; position:absolute; left:0; bottom:-8px; width:100%; height:8px; background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='8'%3E%3Cpath d='M0 5 Q15 1 30 5 Q45 9 60 5 Q75 1 90 5 Q105 9 120 5' stroke='%23e8748a' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") repeat-x; background-size:120px 8px; opacity:0; animation:waveIn .6s 1.3s forwards; }
        .donut-card { transition: transform .4s cubic-bezier(.34,1.56,.64,1), box-shadow .4s ease; cursor:pointer; }
        .donut-card:hover { transform: translateY(-14px) scale(1.025); box-shadow: 0 32px 70px rgba(200,80,100,.18); }
        .donut-card .donut-img { transition: transform .6s cubic-bezier(.34,1.3,.64,1); }
        .donut-card:hover .donut-img { transform: scale(1.12) rotate(3deg); }
        .btn-primary { background:linear-gradient(135deg,#e8748a,#c94d6b); color:white; box-shadow:0 6px 24px rgba(201,77,107,.35); transition:all .25s; }
        .btn-primary:hover { transform:translateY(-3px); box-shadow:0 12px 32px rgba(201,77,107,.45); }
        .btn-ghost { border:2px solid #e8748a; color:#c94d6b; background:transparent; transition:all .25s; }
        .btn-ghost:hover { background:#fce4ec; transform:translateY(-2px); }
        .review-card { transition: transform .35s ease, box-shadow .35s ease; }
        .review-card:hover { transform: translateY(-8px); box-shadow: 0 24px 50px rgba(200,80,100,.14); }
        .val-card { transition: all .25s; }
        .val-card:hover { background:rgba(232,116,138,.1) !important; transform:translateX(4px); }
        .fc-card { box-shadow: 0 12px 40px rgba(200,80,100,.18); }
        .soc-btn:hover { background: #e8748a !important; transform: translateY(-3px); }
        .nl-btn:hover { filter:brightness(1.1); transform:translateY(-2px); }
        .cta-main:hover { transform:translateY(-4px) scale(1.04); box-shadow:0 18px 48px rgba(0,0,0,.28) !important; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all .4s ease",
        ...(scrolled ? { background: "rgba(253,246,240,.88)", backdropFilter: "blur(20px)", boxShadow: "0 2px 40px rgba(232,116,138,.12)" } : {})
      }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{ fontSize: 28, animation: "spinDonut 3s ease-in-out infinite" }}>🍩</span>
          <span className="font-display" style={{ fontSize: 22, fontWeight: 800, color: "#2a1a1a" }}>
            Glazing <span style={{ color: "#e8748a" }}>Society</span>
          </span>
        </a>
        <div style={{ display: "flex", gap: 32 }}>
          {["Home", "Menu", "About", "Reviews"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: 14, fontWeight: 700, color: "#7a4a4a", textDecoration: "none", transition: "color .2s" }}
              onMouseEnter={e => e.target.style.color = "#e8748a"}
              onMouseLeave={e => e.target.style.color = "#7a4a4a"}>{l}</a>
          ))}
        </div>
        <button className="btn-primary" style={{ border: "none", padding: "10px 26px", borderRadius: 50, fontFamily: "Nunito", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
          Order Now
        </button>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", background: "radial-gradient(ellipse 90% 80% at 65% 45%, #fce4ec 0%, #fff0f3 35%, #fdf6f0 70%)" }}>
        {[{ w: 500, h: 500, bg: "#f9a8b8", op: .4, top: -100, left: -150, anim: "orbFloat1 8s ease-in-out infinite" }, { w: 400, h: 400, bg: "#fcd9a0", op: .35, bottom: -80, right: -100, anim: "orbFloat2 10s ease-in-out infinite" }].map((o, i) => (
          <div key={i} style={{ position: "absolute", width: o.w, height: o.h, borderRadius: "50%", background: o.bg, opacity: o.op, filter: "blur(70px)", pointerEvents: "none", top: o.top, left: o.left, right: o.right, bottom: o.bottom, animation: o.anim }} />
        ))}

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 40px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 2, width: "100%" }}>
          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(232,116,138,.12)", color: "#c94d6b", fontSize: 11, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", padding: "7px 16px", borderRadius: 50, marginBottom: 24, border: "1px solid rgba(232,116,138,.2)", opacity: 0, animation: "fadeHeroIn .8s .1s both" }}>
              ✦ Handcrafted in small batches
            </div>

            {/* Animated brand name */}
            <div className="font-display" style={{ fontSize: "clamp(18px,2vw,24px)", fontWeight: 900, fontStyle: "italic", marginBottom: 16, opacity: 0, animation: "fadeHeroIn .6s .2s both" }}>
              {BRAND_LETTERS.map((l, i) => (
                <span key={i} style={{ display: "inline-block", color: l.pink ? "#e8748a" : "#2a1a1a", animation: `letterBounce 2s ${i * 0.05}s ease-in-out infinite` }}>
                  {l.char === " " ? "\u00a0" : l.char}
                </span>
              ))}
            </div>

            <h1 className="font-display" style={{ fontSize: "clamp(48px,5.5vw,78px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
              <span className="hero-line1">Glazed to</span>
              <span className="hero-line2">Perfection</span>
            </h1>

            <p style={{ fontSize: 18, color: "#7a4a4a", lineHeight: 1.7, maxWidth: 420, marginBottom: 36, fontWeight: 400, opacity: 0, animation: "fadeHeroIn .8s .8s both" }}>
              Every donut is a small act of joy. We craft ours with heirloom recipes, seasonal ingredients, and an obsessive love for the perfect glaze.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", opacity: 0, animation: "fadeHeroIn .8s 1s both" }}>
              <button className="btn-ghost" style={{ padding: "12px 28px", borderRadius: 50, fontFamily: "Nunito", fontSize: 14, fontWeight: 800, cursor: "pointer" }}
                onClick={() => document.getElementById("menu").scrollIntoView({ behavior: "smooth" })}>Explore Menu</button>
              <button className="btn-primary" style={{ border: "none", padding: "12px 32px", borderRadius: 50, fontFamily: "Nunito", fontSize: 15, fontWeight: 800, cursor: "pointer" }}>Order Now →</button>
            </div>

            <div style={{ display: "flex", gap: 32, marginTop: 44, opacity: 0, animation: "fadeHeroIn .8s 1.2s both" }}>
              {[["12+", "Flavours"], ["4.9★", "Rating"], ["2k+", "Happy Fans"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display" style={{ fontSize: 28, fontWeight: 800, color: "#e8748a" }}>{n}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#9a6a6a", textTransform: "uppercase", letterSpacing: ".08em" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", height: 520, opacity: 0, animation: "fadeHeroIn 1s .4s both" }}>
            {[0, 1].map(i => (
              <div key={i} style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", border: "2px solid rgba(232,116,138,.4)", top: "50%", left: "50%", animation: `pulseOut 3s ${i}s ease-out infinite`, pointerEvents: "none" }} />
            ))}
            <div style={{ width: 360, height: 360, borderRadius: "50%", overflow: "hidden", boxShadow: "0 40px 100px rgba(220,80,100,.3)", animation: "floatMain 5s ease-in-out infinite", position: "relative", zIndex: 3 }}>
              <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=700&q=85&auto=format" alt="donut" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            {[
              { cls: "top-right", style: { top: 20, right: -20, animation: "floatCard1 6s ease-in-out infinite" }, content: <><span style={{ fontSize: 22 }}>🍓</span><div><div style={{ fontFamily: "Playfair Display", fontSize: 13, fontWeight: 700 }}>Strawberry Dream</div><div style={{ fontSize: 12, fontWeight: 800, color: "#e8748a" }}>$4.50</div></div></> },
              { cls: "bot-left", style: { bottom: 40, left: -30, animation: "floatCard2 7s ease-in-out infinite" }, content: <div><div style={{ fontSize: 10, fontWeight: 800, color: "#9a6a6a", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 2 }}>Today's Special ✨</div><div style={{ fontFamily: "Playfair Display", fontSize: 13, fontWeight: 700 }}>Rose Garden</div><div style={{ fontSize: 12, fontWeight: 800, color: "#c45c7a" }}>$5.50</div></div> },
            ].map((fc, i) => (
              <div key={i} className="fc-card" style={{ position: "absolute", background: "white", borderRadius: 20, padding: "12px 16px", display: "flex", alignItems: "center", gap: 10, zIndex: 5, ...fc.style }}>{fc.content}</div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ background: "#e8748a", padding: "14px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
        <div style={{ display: "inline-block", animation: "marquee 20s linear infinite" }}>
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={i} style={{ color: "white", fontSize: 13, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", margin: "0 32px" }}>✦  {t}</span>
          ))}
        </div>
      </div>

      {/* MENU */}
      <section id="menu" style={{ padding: "90px 40px", background: "#fff8f5" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <RevealDiv><div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fce4ec", color: "#c94d6b", fontSize: 11, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 50, marginBottom: 16 }}>🍩 Our Signatures</div></RevealDiv>
            <RevealDiv delay={0.1}><h2 className="font-display" style={{ fontSize: "clamp(36px,4vw,54px)", fontWeight: 800, marginBottom: 14 }}>The Glazed Collection</h2></RevealDiv>
            <RevealDiv delay={0.2}><p style={{ fontSize: 17, color: "#7a4a4a", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>Each donut is a carefully composed flavour experience — made fresh daily, gone by evening.</p></RevealDiv>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
            {DONUTS.map((d, i) => (
              <RevealDiv key={d.name} delay={i * 0.07}>
                <div className="donut-card" style={{ borderRadius: 28, overflow: "hidden", background: "white", boxShadow: "0 4px 24px rgba(200,80,100,.07)" }}>
                  <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
                    <img className="donut-img" src={d.img} alt={d.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,255,255,.9)", borderRadius: "50%", width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{d.emoji}</div>
                  </div>
                  <div style={{ padding: "20px 22px 22px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                      <span className="font-display" style={{ fontSize: 18, fontWeight: 700 }}>{d.name}</span>
                      <span style={{ fontSize: 18, fontWeight: 900, color: d.accent }}>{d.price}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#7a4a4a", lineHeight: 1.6, marginBottom: 16 }}>{d.desc}</p>
                    <button style={{ width: "100%", border: "none", padding: 11, borderRadius: 14, fontFamily: "Nunito", fontSize: 13, fontWeight: 800, cursor: "pointer", background: d.accent, color: "white", boxShadow: `0 4px 16px ${d.accent}55`, transition: "all .25s" }}
                      onMouseEnter={e => e.target.style.filter = "brightness(1.1)"}
                      onMouseLeave={e => e.target.style.filter = ""}>Add to Order</button>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <RevealDiv><button className="btn-ghost" style={{ padding: "14px 36px", borderRadius: 50, fontFamily: "Nunito", fontSize: 15, fontWeight: 800, cursor: "pointer" }}>View Full Menu →</button></RevealDiv>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "90px 40px", background: "#fdf6f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <RevealDiv>
            <div style={{ position: "relative" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, position: "absolute", top: -24, left: -24, opacity: .2 }}>
                {Array.from({ length: 16 }).map((_, i) => <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#e8748a", display: "block" }} />)}
              </div>
              <div style={{ width: "100%", aspectRatio: 1, borderRadius: 32, overflow: "hidden", boxShadow: "0 24px 70px rgba(200,80,100,.2)" }}>
                <img src="https://images.unsplash.com/photo-1556913396-7a3c459ef68e?w=700&q=85&auto=format" alt="kitchen" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .6s ease" }} onMouseEnter={e => e.target.style.transform = "scale(1.05)"} onMouseLeave={e => e.target.style.transform = ""} />
              </div>
              <div style={{ position: "absolute", bottom: -24, right: -24, background: "white", borderRadius: 20, padding: "20px 24px", boxShadow: "0 12px 40px rgba(200,80,100,.2)", textAlign: "center" }}>
                <span className="font-display" style={{ fontSize: 34, fontWeight: 800, color: "#e8748a", display: "block" }}>2019</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#9a6a6a", textTransform: "uppercase", letterSpacing: ".08em" }}>Est. in Chennai</span>
              </div>
            </div>
          </RevealDiv>
          <RevealDiv delay={0.15}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fce4ec", color: "#c94d6b", fontSize: 11, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 50, marginBottom: 20 }}>✦ Our Story</div>
            <h2 className="font-display" style={{ fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, marginBottom: 20, lineHeight: 1.15 }}>Born from a love of <em style={{ color: "#e8748a" }}>beautiful</em> things</h2>
            <p style={{ fontSize: 16, color: "#7a4a4a", lineHeight: 1.8, marginBottom: 18 }}>Glazing Society started in a tiny Chennai kitchen in 2019, born from a single obsession: why should the most joyful food in the world be mediocre? Our founder spent two years perfecting glaze recipes and sourcing seasonal fruits before the first box was ever sold.</p>
            <p style={{ fontSize: 16, color: "#7a4a4a", lineHeight: 1.8, marginBottom: 28 }}>Every donut we make is hand-dipped, hand-decorated, and made in batches of twelve — never more. No artificial flavours, no preservatives, no compromises.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[["🌾", "Heirloom Flour", "Stone-milled, traceable"], ["🥛", "Local Dairy", "From nearby farms"], ["🌺", "Seasonal Glazes", "Fresh every week"], ["📦", "Zero Waste", "Eco packaging only"]].map(([icon, title, sub]) => (
                <div key={title} className="val-card" style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 16, borderRadius: 18, background: "rgba(232,116,138,.05)", border: "1px solid rgba(232,116,138,.08)" }}>
                  <span style={{ fontSize: 20, marginTop: 2 }}>{icon}</span>
                  <div><div style={{ fontSize: 14, fontWeight: 800, marginBottom: 2 }}>{title}</div><div style={{ fontSize: 12, color: "#9a6a6a" }}>{sub}</div></div>
                </div>
              ))}
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{ padding: "90px 40px", background: "linear-gradient(135deg,#fce4ec,#fff0f3 50%,#fdf6f0)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <RevealDiv><div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "white", color: "#c94d6b", fontSize: 11, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 50, marginBottom: 16 }}>💬 Sweet Words</div></RevealDiv>
            <RevealDiv delay={0.1}><h2 className="font-display" style={{ fontSize: "clamp(36px,4vw,52px)", fontWeight: 800, marginBottom: 14 }}>People are <em style={{ color: "#e8748a" }}>obsessed</em></h2></RevealDiv>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {REVIEWS.map((r, i) => (
              <RevealDiv key={r.name} delay={i * 0.1}>
                <div className="review-card" style={{ background: "white", borderRadius: 24, padding: 24, boxShadow: "0 4px 24px rgba(200,80,100,.07)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: -10, right: 16, fontSize: 80, color: "#e8748a", opacity: .06, fontFamily: "Playfair Display", lineHeight: 1 }}>❝</div>
                  <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>{Array.from({ length: 5 }).map((_, j) => <span key={j} style={{ color: "#f59e0b", fontSize: 15 }}>★</span>)}</div>
                  <p style={{ fontSize: 14, color: "#5a3a3a", lineHeight: 1.75, marginBottom: 18 }}>"{r.text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: r.avColor, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Playfair Display", fontSize: 15, fontWeight: 700, color: "white", flexShrink: 0 }}>{r.av}</div>
                    <div><div style={{ fontSize: 14, fontWeight: 800 }}>{r.name}</div><div style={{ fontSize: 12, color: "#9a6a6a" }}>{r.city}</div></div>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: "linear-gradient(135deg,#e8748a,#c94d6b)", padding: "80px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {[{ w: 400, h: 400, t: -100, r: -100 }, { w: 300, h: 300, b: -80, l: -80 }].map((o, i) => (
          <div key={i} style={{ position: "absolute", width: o.w, height: o.h, borderRadius: "50%", background: "rgba(255,255,255,.15)", filter: "blur(40px)", top: o.t, right: o.r, bottom: o.b, left: o.l }} />
        ))}
        <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, color: "white", marginBottom: 16, position: "relative", zIndex: 1 }}>Ready for your first taste?</h2>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,.88)", marginBottom: 36, position: "relative", zIndex: 1 }}>Order by 10pm for next-morning delivery in Chennai. Fresh. Always.</p>
        <button className="cta-main" style={{ background: "white", color: "#e8748a", border: "none", padding: "16px 40px", borderRadius: 50, fontFamily: "Nunito", fontSize: 15, fontWeight: 900, cursor: "pointer", boxShadow: "0 10px 36px rgba(0,0,0,.2)", transition: "all .25s", position: "relative", zIndex: 1 }}>
          Order Now — Free Delivery Today 
        </button>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#2a1a1a", padding: "64px 40px 32px", color: "#9a8a8a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.8fr", gap: 48, paddingBottom: 40, borderBottom: "1px solid #3a2a2a" }}>
          <div>
            <div className="font-display" style={{ fontSize: 22, fontWeight: 800, color: "white", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>🍩 Glazing <span style={{ color: "#e8748a" }}>Society</span></div>
            <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 20, color: "#9a8a8a" }}>Handcrafted donuts made with love, seasonal ingredients, and an obsessive attention to the perfect glaze. Based in Chennai.</p>
            <div style={{ display: "flex", gap: 10 }}>
  {[
    <FaInstagram />,
    <FaXTwitter />,
    <FaFacebook />,
    <FaTiktok />
  ].map((icon, i) => (
    <button
      key={i}
      className="soc-btn"
      style={{
        width: 38,
        height: 38,
        background: "#3a2a2a",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
        cursor: "pointer",
        border: "none",
        color: "white",
        transition: "all .2s"
      }}
    >
      {icon}
    </button>
  ))}
</div>
</div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "#e8748a", marginBottom: 18 }}>Explore</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {["Our Menu", "About Us", "Catering", "Gift Cards", "Wholesale"].map(l => <li key={l}><a href="#" style={{ color: "#9a8a8a", textDecoration: "none", fontSize: 14, transition: "color .2s" }} onMouseEnter={e => e.target.style.color = "white"} onMouseLeave={e => e.target.style.color = "#9a8a8a"}>{l}</a></li>)}
            </ul>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "#e8748a", marginBottom: 18 }}>Info</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {["FAQ", "Delivery", "Allergens", "Careers", "Press"].map(l => <li key={l}><a href="#" style={{ color: "#9a8a8a", textDecoration: "none", fontSize: 14, transition: "color .2s" }} onMouseEnter={e => e.target.style.color = "white"} onMouseLeave={e => e.target.style.color = "#9a8a8a"}>{l}</a></li>)}
            </ul>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "#e8748a", marginBottom: 14 }}>Stay Sweet</div>
            <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.6, color: "#9a8a8a" }}>First dibs on new flavours and exclusive weekly offers.</p>
            {subscribed ? (
              <div style={{ background: "#3a2a2a", borderRadius: 14, padding: 14, textAlign: "center", color: "#e8748a", fontSize: 14, fontWeight: 800 }}>🎉 Welcome to the Society!</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" style={{ background: "#3a2a2a", border: "1px solid #4a3a3a", color: "white", padding: "12px 16px", borderRadius: 14, fontFamily: "Nunito", fontSize: 14, outline: "none" }} />
                <button className="nl-btn" onClick={() => email && setSubscribed(true)} style={{ background: "linear-gradient(135deg,#e8748a,#c94d6b)", color: "white", border: "none", padding: 12, borderRadius: 14, fontFamily: "Nunito", fontSize: 14, fontWeight: 800, cursor: "pointer", transition: "all .25s" }}>Subscribe →</button>
              </div>
            )}
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: "24px auto 0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 13, color: "#6a5a5a" }}>© 2025 Glazing Society. Made with 🍩 in Chennai.</p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy", "Terms", "Cookies"].map(l => <a key={l} href="#" style={{ fontSize: 13, color: "#6a5a5a", textDecoration: "none" }} onMouseEnter={e => e.target.style.color = "white"} onMouseLeave={e => e.target.style.color = "#6a5a5a"}>{l}</a>)}
          </div>
        </div>
      </footer>
    </div>
  );
}
