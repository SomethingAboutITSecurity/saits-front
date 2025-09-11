import styled from "styled-components";

// --- kolory / tokeny ---
const brand = {
  green: "#16a34a",
  greenGlow: "rgba(22,163,74,.25)",
  bg1: "#0b1020",      // tło bazowe (dark)
  bg2: "#0e1630",      // gradient
  cardLight: "#ffffff",
  cardDark: "#12131a",
};
const radii = { card: "18px", pill: "999px" };

export const Background = styled.div`
    position: fixed; inset: 0; z-index: -2;
    background: radial-gradient(1200px 800px at 20% -10%, #3b82f640 0%, transparent 60%),
                radial-gradient(900px 600px at 100% 0%, #10b98133 0%, transparent 55%),
                linear-gradient(180deg, ${brand.bg2} 0%, ${brand.bg1} 100%);
    @media (prefers-color-scheme: light){
        background: radial-gradient(1200px 800px at 20% -10%, #60a5fa33 0%, transparent 60%),
                    radial-gradient(900px 600px at 100% 0%, #34d39929 0%, transparent 55%),
                    linear-gradient(180deg, #f7fafc 0%, #eff3f8 100%);
    }
    /* delikatna „siatka” */
    &::after{
        content:""; position:absolute; inset:0; pointer-events:none; z-index:-1;
        background:
        linear-gradient(transparent 95%, rgba(255,255,255,.04) 95%),
        linear-gradient(90deg, transparent 95%, rgba(255,255,255,.04) 95%);
        background-size: 30px 30px; opacity:.35;
    }
`;


export const Page = styled.main`
    // max-width: 960px;
    // margin: 0 auto;
    // padding: 24px clamp(16px, 4vw, 32px);
    max-width: 960px;
    margin: 0 auto;
    padding: 28px clamp(16px, 4vw, 36px) 56px;
`;

export const Card = styled.section`
    // background: #fff;
    // border-radius: 18px;
    // box-shadow: 0 8px 28px rgba(0,0,0,.08);
    // padding: clamp(18px, 3.5vw, 28px);
    // @media (prefers-color-scheme: dark) {
    //     background: #111;
    //     box-shadow: 0 10px 30px rgba(0,0,0,.5);
    // }
    background: rgba(255,255,255,.76);
    backdrop-filter: blur(6px);
    border-radius: ${radii.card};
    box-shadow: 0 10px 30px rgba(0,0,0,.10), inset 0 1px 0 rgba(255,255,255,.6);
    padding: clamp(18px, 3.5vw, 30px);
    border: 1px solid rgba(255,255,255,.6);
    @media (prefers-color-scheme: dark){
        background: rgba(18,19,26,.72);
        border-color: rgba(255,255,255,.06);
        box-shadow: 0 12px 36px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.02);
    }
`;

export const H1 = styled.h1`
    font-size: clamp(1.5rem, 3.5vw, 2.2rem);
    margin: 0 0 6px;
    letter-spacing:.2px; font-weight: 800;
`;

export const Lead = styled.p`
    margin: 0 0 20px;
    color: #666;
    @media (prefers-color-scheme: dark) { color: #bdbdbd; }
    & p { margin: 0 0 12px; }
    & p:last-child { margin-bottom: 0; }
`;

export const Section = styled.div`
    border-top: 1px solid rgba(0,0,0,.06);
    padding-top: 18px; margin-top: 18px;
`;

export const Question = styled.h2`
    font-size: clamp(1.05rem, 2.4vw, 1.25rem);
    margin: 0 0 10px;
`;

export const Divider = styled.hr`
    border: 0; height: 1px; margin: 14px 0 6px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.5), transparent);
    position: relative;
    &::after{
        content:""; position:absolute; left:50%; top:-4px; transform:translateX(-50%);
        width:8px; height:8px; border-radius:50%;
        background: ${brand.green};
        box-shadow: 0 0 0 4px ${brand.greenGlow};
    }
    @media (prefers-color-scheme: dark){
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.08), transparent);
    }
`;

export const Chips = styled.div`
    display: flex; flex-wrap: wrap; gap: 10px;
`;

export const Chip = styled.label`
    position: relative;
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 14px;
    // border-radius: 999px;
    border-radius: ${radii.pill};
    border: 1px solid #dcdcdc;
    cursor: pointer; user-select: none; font-weight: 600;
    background: #fff;
    transition: transform .06s ease, box-shadow .2s ease, background-color .2s ease;
    @media (prefers-color-scheme: dark){
        background: #171717; border-color: #2a2a2a; color: #e8e8e8;
    }
    input { position: absolute; opacity: 0; pointer-events: none; }
    &:hover{ transform: translateY(-1px); }
    &:has(input:checked){
        // background: #18500dff; color: #fff; border-color: #06290dff;
        // box-shadow: 0 8px 18px rgba(12, 53, 8, 0.25);
        border-color: ${brand.green};
        box-shadow: 0 8px 18px ${brand.greenGlow};
    }
    &:has(input:focus-visible){
        outline: 3px solid #e7f0ff; outline-offset: 2px;
    }
`;

export const Grid = styled.div`
    display: grid; gap: 10px;
    grid-template-columns: 1fr;
    @media (min-width: 780px){ grid-template-columns: 1fr 1fr; }
`;

export const Text = styled.textarea`
    width: 100%;
    min-height: 140px;
    padding: 12px 14px;
    border: 1px solid #dcdcdc;
    border-radius: 14px;
    resize: vertical;
    @media (prefers-color-scheme: dark){
        background:#181818; border-color:#2c2c2c; color:#eee;
    }
    &:focus { outline: 3px solid #e7f0ff; border-color:#8bb7ff; }
`;

export const Button = styled.button`
    margin-top: 6px;
    // background: #18500dff; color: #fff; border: 0; border-radius: 14px;
    background:${brand.green}; color:#fff; border:0; border-radius:14px;
    padding: 12px 18px; font-weight: 800; cursor: pointer;
    // box-shadow: 0 10px 22px rgba(12, 53, 8, 0.25);
    box-shadow:0 10px 22px ${brand.greenGlow};
    transition: transform .06s ease;
    &:hover{ transform: translateY(-1px); }
    &:disabled{ opacity:.6; cursor:not-allowed; }
`;

export const Note = styled.p`
    margin: 6px 0 0; font-size:.9rem; color:#6b7280;
    @media (prefers-color-scheme: dark){ color:#9aa3af; }
`;

export const Error = styled.p`
    margin: 6px 0 0;
    font-size: .92rem;
    color: #c0392b;
`;

export const Socials = styled.div`
    display: flex;
    gap: 14px;
    justify-content: center;
    align-items: center;
    padding: 24px 0 40px;   /* odstęp od dołu */
`;

export const SocialLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-radius: 999px;
    border: 1px solid #dcdcdc;
    text-decoration: none;
    color: inherit;
    @media (prefers-color-scheme: dark){ border-color:#2a2a2a; }
    &:hover{ transform: translateY(-1px); }
`;