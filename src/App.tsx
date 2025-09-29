import React, { useMemo, useState, type ReactNode, type ButtonHTMLAttributes, type HTMLAttributes } from "react";
import { motion } from "framer-motion";
import goofyHero from "./IMG_2313.jpg"; // hero image
import valeriaPhoto from "./vmartinez.jpeg";
import momPhoto from "./mom.png";
import dadPhoto from "./dad.jpeg";

// --- Typed utility components (pure Tailwind) ---
type DivProps = HTMLAttributes<HTMLDivElement> & { className?: string; children?: ReactNode };

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { className?: string; children?: ReactNode };
const Button: React.FC<ButtonProps> = ({ className = "", children, ...props }) => (
  <button
    className={`inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card: React.FC<DivProps> = ({ className = "", children, ...props }) => (
  <div className={`rounded-2xl border border-slate-200 bg-white shadow ${className}`} {...props}>{children}</div>
);

const CardHeader: React.FC<DivProps> = ({ children, className = "", ...props }) => (
  <div className={`border-b border-slate-100 px-5 py-4 ${className}`} {...props}>{children}</div>
);
const CardTitle: React.FC<DivProps> = ({ children, className = "", ...props }) => (
  <h3 className={`text-base font-semibold ${className}`} {...props}>{children}</h3>
);
const CardContent: React.FC<DivProps> = ({ children, className = "", ...props }) => (
  <div className={`px-5 py-4 text-sm text-slate-700 ${className}`} {...props}>{children}</div>
);

const Badge: React.FC<{ variant?: "solid" | "outline"; className?: string; children?: ReactNode }> = ({ children, variant = "outline", className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs ${
      variant === "solid" ? "bg-slate-900 text-white" : "border border-slate-200 text-slate-700"
    } ${className}`}
  >
    {children}
  </span>
);

const Switch: React.FC<{ checked: boolean; onChange: (value: boolean) => void }> = ({ checked, onChange }) => (
  <button
    type="button"
    onClick={() => onChange(!checked)}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${checked ? "bg-slate-900" : "bg-slate-300"}`}
  >
    <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${checked ? "translate-x-6" : "translate-x-1"}`} />
  </button>
);

// --- Content data ---
const headlineIdeasFun = [
  "Vision Realizer | KPI Whisperer | Spreadsheet Influencer",
  "Tech Visionary • Meme Curator • Evangelist of Clean Code & Dirty Chai",
  "Revenue Wrangler | Thought-Leadership Enthusiast | PPT Magician",
  "Operations Overlord | Chaos Tamer | Bullet-Point Poet",
  "People-Person™ | Culture Add (Not Fit) | Coffee-Into-Strategy Converter",
];

const headlineIdeasSerious = [
  "Senior Software Engineer | Building secure, scalable systems | Python, Go, AWS",
  "Product Manager | Zero-to-one builder | Growth & Experimentation | B2B SaaS",
  "Operations Leader | Process optimization, KPI design, and cross-functional delivery",
  "Educator | Student-centered instruction | Curriculum design & classroom culture",
  "Business Development | Strategic partnerships, GTM, and revenue acceleration",
];

const roastIntros = ["Spicy take:", "Gentle nudge:", "Recruiter cry-count:", "Objective feedback (with love):", "Plot twist:"];

const roastLinesFun = [
  "Your résumé objective says ‘seeking growth opportunities.’ So does every houseplant.",
  "Listing ‘Microsoft Word’ in 2025 is bold. Like listing ‘breathing.’",
  "12 different fonts? A typographic multiverse. Choose one timeline.",
  "‘Results-oriented’ with zero results… it’s giving mystery.",
  "Bullets start with verbs, not vibes. ‘Responsible for’ = snooze.",
  "If everything is ‘Led…’ what did your team do?",
  "Achievements without numbers are just anecdotes.",
  "Two pages, no metrics. That’s a memoir, bestie.",
];

const roastLinesSerious = [
  "Tighten your summary into 2–3 outcome-focused lines tailored to a target role.",
  "Start bullets with strong verbs and include a metric: ‘Increased X by Y% through Z.’",
  "Group skills by theme (Languages, Frameworks, Tools) and remove generic ones.",
  "Prioritize recent, relevant experience; demote or compress older roles.",
  "Replace ‘responsible for’ with action + impact; avoid passive phrasing.",
  "Quantify scope: team size, budget, ARR, DAUs, throughput, student outcomes.",
  "Align keywords to target job descriptions to pass ATS scans.",
];

function randomPick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }

export default function App() {
  const [funMode, setFunMode] = useState<boolean>(true);
  const [resumeText, setResumeText] = useState<string>("");
  const [roast, setRoast] = useState<string | null>(null);
  const [headline, setHeadline] = useState<string | null>(null);

  const headlinePool = useMemo(() => (funMode ? headlineIdeasFun : headlineIdeasSerious), [funMode]);
  const roastPool = useMemo(() => (funMode ? roastLinesFun : roastLinesSerious), [funMode]);

  const generateRoast = () => {
    const intro = funMode ? randomPick(roastIntros) : "Suggestion:";
    const body = randomPick(roastPool);
    const tag = funMode ? randomPick(["🔥", "🌶️", "💼", "🧠"]) : "✅";
    setRoast(`${intro} ${body} ${tag}`);
  };

  const generateHeadline = () => {
    const idea = randomPick(headlinePool);
    setHeadline(idea);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Top Bar */}
      <div className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">✨</span>
            <span className="font-semibold">Dhruv’s Ridiculously Serious Career Coaching™</span>
            <Badge className="ml-2">100% Family-Tested</Badge>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-600">{funMode ? "Fun Mode" : "Serious Mode"}</span>
            <Switch checked={funMode} onChange={setFunMode} />
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex justify-center">
          <img
            src={goofyHero}
            alt="Dhruv looking extremely qualified (and not at all silly)"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border border-slate-200 shadow-xl"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-8 text-4xl md:text-5xl font-extrabold leading-tight"
        >
          World‑Class Career Coaching. <span className="text-slate-500">3{"\u00A0"}Clients.</span> 100% Family Members.
        </motion.h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          {funMode
            ? "Need career advice? I’ve already transformed a Vice President, a teacher, and a software engineer. You’re next (maybe)."
            : "Practical guidance on résumés, LinkedIn positioning, and interview prep — distilled from real coaching wins with a VP (operations), a K‑12 educator, and a software engineer."}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button className="rounded-2xl">
            {funMode ? (
              <>Get Unrealistically Hired <span className="ml-1">›</span></>
            ) : (
              <>Start Your Mini Makeover <span className="ml-1">›</span></>
            )}
          </Button>
          <Badge>⭐ 5‑star reviews (from relatives)</Badge>
        </div>
        <div className="mt-3 text-xs text-slate-500">“Trust me, I know careers. I also know hats.”</div>
      </section>

      {/* Feature Grid */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Feature 1: Resume Roast */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>🔥</span> {funMode ? "Résumé Roast" : "Résumé Review"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <label className="block text-sm font-medium text-slate-700 mb-2">Paste a line (or three) from your résumé</label>
              <textarea
                value={resumeText}
                onChange={(e) => setResumeText((e.target as HTMLTextAreaElement).value)}
                placeholder={funMode ? "e.g., Responsible for important stuff at big company" : "e.g., Led X initiative; seeking concise feedback"}
                className="w-full h-32 rounded-xl border p-3 outline-none focus:ring-2 focus:ring-slate-300 bg-white"
              />
              <div className="mt-3 flex items-center gap-2">
                <Button onClick={generateRoast} className="rounded-2xl">
                  {funMode ? (
                    <>Roast Me <span className="ml-1">😆</span></>
                  ) : (
                    <>Give Feedback <span className="ml-1">👍</span></>
                  )}
                </Button>
                <span className="text-xs text-slate-500">No feelings were harmed. Probably.</span>
              </div>
              {roast && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                  <div className="rounded-xl border bg-slate-50 p-3 text-sm">
                    {resumeText ? (
                      <>
                        <div className="mb-1 font-semibold">Your line:</div>
                        <div className="mb-2 text-slate-700">“{resumeText}”</div>
                      </>
                    ) : null}
                    <div className="font-medium">{roast}</div>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>

          {/* Feature 2: LinkedIn Glow-Up */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>✨</span> {funMode ? "LinkedIn Glow‑Up" : "Headline Generator"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-3">
                {funMode
                  ? "Press the button for an instant thought‑leader headline. Warning: may cause unsolicited endorsements."
                  : "Click to get a clean, role‑aligned headline. Edit to fit your specialty."}
              </p>
              <div className="flex items-center gap-2">
                <Button onClick={generateHeadline} className="rounded-2xl">
                  {funMode ? "Make Me a Thought Leader" : "Generate Professional Headline"}
                </Button>
                <Badge>1‑click brag</Badge>
              </div>
              {headline && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                  <div className="rounded-xl border bg-white p-3 text-sm">
                    <div className="text-slate-500 mb-1">Suggested headline</div>
                    <div className="font-semibold">{headline}</div>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="flex flex-col items-center p-4 text-center">
            <img src={dadPhoto} alt="Dad" className="w-20 h-20 rounded-full object-cover border shadow-md mb-3" />
            <CardContent className="p-0 text-sm text-slate-700">
              “My résumé has never looked so… serif.”
              <div className="mt-1 text-xs text-slate-500">— Dad</div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-4 text-center">
            <img src={momPhoto} alt="Mom" className="w-20 h-20 rounded-full object-cover border shadow-md mb-3" />
            <CardContent className="p-0 text-sm text-slate-700">
              “He told me to stop using 12pt Times New Roman. Life‑changing.”
              <div className="mt-1 text-xs text-slate-500">— Mom</div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-4 text-center">
            <img src={valeriaPhoto} alt="Valeria" className="w-24 h-24 rounded-full object-cover border shadow-md mb-3" />
            <CardContent className="p-0 text-sm text-slate-700">
              “Would’ve been unemployed without him. Now I’m employed and still stressed.”
              <div className="mt-1 text-xs text-slate-500">— Valeria</div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center text-center">
          <Button className="rounded-2xl">
            {funMode ? "Book a Session (Payment in Tacos Accepted)" : "Book a Mini Review"}
          </Button>
          <p className="mt-2 text-xs text-slate-500">Toggle Fun/Serious above to switch copy. No gurus were harmed in the making of this site.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Dhruv’s Ridiculously Serious Career Coaching™</div>
          <div className="flex items-center gap-3">
            <span>Privacy Policy (We don’t sell your data. We barely read it.)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}