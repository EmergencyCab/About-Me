import { useEffect, useState } from "react";
import { ArrowLeft, Minus, Plus, X } from "lucide-react";
import type { ClashStats } from "@/lib/api/clash.functions";

type AnimeItem = { title: string; cover: string | null; note: string };

const INITIAL = 5;

const categories: { id: string; label: string; items: AnimeItem[] }[] = [
  {
    id: "shinkai",
    label: "Makoto Shinkai did something to me",
    items: [
      { title: "Your Name", cover: "/photos/anime/yourname.jpg", note: "My #1. Always." },
      { title: "5 Centimeters Per Second", cover: "/photos/anime/5cm.jpg", note: "Parallel lines that never meet." },
      { title: "The Garden of Words", cover: "/photos/anime/garden-of-words.jpg", note: "Rain and longing." },
      { title: "Her Blue Sky", cover: "/photos/anime/her-blue-sky.jpg", note: "Music and distance." },
      { title: "Weathering with You", cover: "/photos/anime/weathering.jpg", note: "I chose you over the world." },
      { title: "Voices of a Distant Star", cover: "/photos/anime/voice-of-star.webp", note: "One person made this. Still destroyed me." },
      { title: "The Place Promised in Our Early Days", cover: "/photos/anime/place-promised.jpg", note: "Shinkai before he was famous." },
    ],
  },
  {
    id: "ghibli",
    label: "Ghibli is a religion",
    items: [
      { title: "Spirited Away", cover: "/photos/anime/spirited-away.jpg", note: "Still magical at any age." },
      { title: "Grave of the Fireflies", cover: "/photos/anime/fireflies.jpg", note: "Broke me." },
      { title: "Howl's Moving Castle", cover: "/photos/anime/howl.jpg", note: "War and identity." },
      { title: "Princess Kaguya", cover: "/photos/anime/princess-kaguya.jpg", note: "A life fully lived." },
      { title: "When Marnie Was There", cover: "/photos/anime/marnie.jpg", note: "Identity and belonging." },
      { title: "The Wind Rises", cover: "/photos/anime/wind-rises.jpg", note: "Creation during war." },
      { title: "The Boy and the Heron", cover: "/photos/anime/boy-heron.jpg", note: "Grief and imagination." },
      { title: "My Neighbor Totoro", cover: "/photos/anime/totoro.webp", note: "The comfort classic." },
      { title: "Whisper of the Heart", cover: "/photos/anime/whisper.webp", note: "Craft and young love." },
      { title: "The Cat Returns", cover: "/photos/anime/cat-returns.jpg", note: "Whimsy and agency." },
      { title: "From Up on Poppy Hill", cover: "/photos/anime/poppy-hill.jpg", note: "Heritage and memory." },
      { title: "Ponyo", cover: "/photos/anime/ponyo.jpg", note: "Pure joy." },
    ],
  },
  {
    id: "broke",
    label: "These will break you. Watch them anyway.",
    items: [
      { title: "A Silent Voice", cover: "/photos/anime/a-silent-voice.webp", note: "On guilt and forgiveness." },
      { title: "Maquia", cover: "/photos/anime/maquia.jpg", note: "A quiet devastation." },
      { title: "Flavors of Youth", cover: "/photos/anime/flavors-of-youth.jpg", note: "Memory as nostalgia." },
      { title: "Wolf Children", cover: "/photos/anime/wolf-children.jpg", note: "Sacrifice and letting go." },
      { title: "Clannad: After Story", cover: "/photos/anime/clannad-after.jpg", note: "The gold standard." },
      { title: "Angel Beats", cover: "/photos/anime/angel-beats.jpg", note: "Afterlife and letting go." },
      { title: "Plastic Memories", cover: "/photos/anime/plastic-memories.webp", note: "Robots and goodbyes." },
      { title: "86 (Eighty-Six)", cover: "/photos/anime/86.jpg", note: "War, dignity, survival." },
      { title: "Banana Fish", cover: "/photos/anime/banana-fish.jpg", note: "Dark, brutal, beautiful." },
      { title: "Terror in Resonance", cover: "/photos/anime/terror-in-resonance.jpg", note: "Two boys against the world." },
      { title: "Vinland Saga", cover: "/photos/anime/vinland-saga.jpg", note: "Vengeance becoming peace." },
      { title: "March Comes in Like a Lion", cover: "/photos/anime/march-comes.jpg", note: "Depression done right." },
      { title: "AnoHana", cover: "/photos/anime/anohana.jpg", note: "Grief you carry forever." },
    ],
  },
  {
    id: "romance",
    label: "Romance I actually believe",
    items: [
      { title: "Josee, the Tiger and the Fish", cover: "/photos/anime/josee.jpg", note: "Gentle and real." },
      { title: "I Want to Eat Your Pancreas", cover: "/photos/anime/want-pancreas.jpg", note: "The title is a lie and a truth." },
      { title: "Your Lie in April", cover: "/photos/anime/your-lie-in-april.jpg", note: "Music as grief." },
      { title: "Violet Evergarden", cover: "/photos/anime/violet-evergarden.jpg", note: "Letters and loss." },
      { title: "Tamako Love Story", cover: "/photos/anime/tamako-love.jpg", note: "The quietest confession." },
      { title: "Ride Your Wave", cover: "/photos/anime/ride-your-wave.avif", note: "Surf, music, grief." },
      { title: "Words Bubble Up Like Soda Pop", cover: "/photos/anime/words-bubble-up.webp", note: "Small and perfect." },
      { title: "The Tunnel to Summer", cover: "/photos/anime/tunnel-to-summer.jpg", note: "Time as love." },
      { title: "Hello World", cover: "/photos/anime/hello-world.jpg", note: "Sci-fi romance done right." },
      { title: "Toradora", cover: "/photos/anime/toradora.jpg", note: "Earned every bit of its ending." },
      { title: "Horimiya", cover: "/photos/anime/horimiya.webp", note: "Slice of life done perfectly." },
      { title: "Kaguya-sama: Love is War", cover: "/photos/anime/kaguya.jpg", note: "Comedy romance, brilliant writing." },
      { title: "Tsukigakirei", cover: "/photos/anime/tsukigakirei.jpg", note: "Quiet, real, and aching." },
      { title: "Fruits Basket", cover: "/photos/anime/fruits-basket.jpg", note: "Trauma and love." },
      { title: "Oregairu", cover: "/photos/anime/oregairu.jpg", note: "Romance for overthinkers." },
      { title: "My Dress-Up Darling", cover: "/photos/anime/my-dress-up.jpg", note: "Genuinely wholesome." },
      { title: "Monthly Girls' Nozaki-kun", cover: "/photos/anime/monthly-girls-nozaki.jpg", note: "Comedy romance, underrated." },
      { title: "Blue Spring Ride", cover: "/photos/anime/blue-spring-ride.jpg", note: "Bittersweet and real." },
      { title: "Golden Time", cover: "/photos/anime/golden-time.jpg", note: "College romance with a twist." },
      { title: "Pet Girl of Sakurasou", cover: "/photos/anime/pet-girl-sakurasou.jpg", note: "Talent, belonging, and effort." },
    ],
  },
  {
    id: "head",
    label: "These messed with my head",
    items: [
      { title: "Perfect Blue", cover: "/photos/anime/perfect-blue.jpg", note: "Nothing is what it seems." },
      { title: "Monster", cover: "/photos/anime/monster.jpg", note: "Who is the real monster?" },
      { title: "Millennium Actress", cover: "/photos/anime/millennium-actress.jpg", note: "Cinema as memory." },
      { title: "Takopi's Original Sin", cover: "/photos/anime/takopi.jpg", note: "Took me apart quietly." },
      { title: "Children Who Chase Lost Voices", cover: "/photos/anime/children-chase-lost-voices.webp", note: "Grief beneath adventure." },
      { title: "Death Note", cover: "/photos/anime/death-note.webp", note: "Drop everything and watch it." },
      { title: "Steins;Gate", cover: "/photos/anime/steins-gate.jpg", note: "Time travel done right." },
      { title: "Erased", cover: "/photos/anime/erased.jpg", note: "Mystery that grips from frame one." },
      { title: "Another", cover: "/photos/anime/another.jpg", note: "Horror done slow." },
      { title: "Serial Experiments Lain", cover: "/photos/anime/serial-experiments-lain.jpg", note: "1998. Internet as god. Still relevant." },
      { title: "Higurashi", cover: "/photos/anime/higurashi.png", note: "Another level entirely." },
    ],
  },
  {
    id: "everyone",
    label: "Everyone's seen these. They're right.",
    items: [
      { title: "One Piece", cover: "/photos/anime/one-piece.jpg", note: "The greatest story ever told." },
      { title: "Samurai Champloo", cover: "/photos/anime/samurai-champloo.jpg", note: "Hip-hop and swords." },
      { title: "Kingdom", cover: "/photos/anime/kingdom.jpg", note: "War strategy at its finest." },
      { title: "Attack on Titan", cover: "/photos/anime/attack-on-titan.jpg", note: "Freedom at any cost." },
      { title: "Fullmetal Alchemist: Brotherhood", cover: "/photos/anime/fma-brotherhood.jpg", note: "Arguably the greatest." },
      { title: "Demon Slayer", cover: "/photos/anime/demon-slayer.jpg", note: "Visuals alone are worth it." },
      { title: "Naruto", cover: "/photos/anime/naruto.jpg", note: "The classic." },
      { title: "Hunter x Hunter", cover: "/photos/anime/hunter-x-hunter.jpg", note: "Power system masterclass." },
      { title: "Jujutsu Kaisen", cover: "/photos/anime/jujutsu-kaisen.webp", note: "Modern shonen peak." },
      { title: "Chainsaw Man", cover: "/photos/anime/chainsaw-man.jpg", note: "Genre expectations: destroyed." },
      { title: "One Punch Man", cover: "/photos/anime/one-punch-man.jpg", note: "Subverts everything." },
      { title: "Gintama", cover: "/photos/anime/gintama.jpg", note: "Comedy king." },
      { title: "Mob Psycho 100", cover: "/photos/anime/mob-psycho.jpg", note: "Better than OPM (same creator)." },
      { title: "Code Geass", cover: "/photos/anime/code-geass.jpg", note: "Chess and revolution." },
      { title: "My Hero Academia", cover: "/photos/anime/my-hero-academia.jpg", note: "Idealism in action." },
      { title: "Assassination Classroom", cover: "/photos/anime/assassination-classroom.jpg", note: "Sounds dumb, hits different." },
      { title: "Spy x Family", cover: "/photos/anime/spy-x-family.jpg", note: "Wholesome fun." },
      { title: "Bocchi the Rock", cover: "/photos/anime/bocchi.jpg", note: "Anxiety and music." },
      { title: "Bleach", cover: "/photos/anime/bleach.jpg", note: "The OG cool factor." },
      { title: "Dr. Stone", cover: "/photos/anime/dr-stone.jpg", note: "Science saves humanity." },
    ],
  },
  {
    id: "recommend",
    label: "I won't stop recommending these",
    items: [
      { title: "Night Is Short, Walk on Girl", cover: "/photos/anime/night-is-short.jpg", note: "Pure chaos, pure joy." },
      { title: "Scissor Seven", cover: "/photos/anime/scissor-seven.jpg", note: "The hidden gem of hidden gems." },
      { title: "Ocean Waves", cover: "/photos/anime/ocean-waves.jpg", note: "The forgotten Ghibli." },
      { title: "The Girl Who Leapt Through Time", cover: "/photos/anime/girl-who-leapt.jpg", note: "Time and regret." },
      { title: "Bubble", cover: "/photos/anime/bubble.jpg", note: "Parkour and music." },
      { title: "She and Her Cat", cover: "/photos/anime/she-and-cat.jpg", note: "4 minutes of quiet truth." },
      { title: "Fireworks", cover: "/photos/anime/fireworks.jpg", note: "Style over substance, gorgeous." },
      { title: "Tatami Galaxy", cover: "/photos/anime/tatami-galaxy.png", note: "Same director as Night is Short. Mind-bending." },
      { title: "Ping Pong the Animation", cover: "/photos/anime/ping-pong.jpg", note: "Sport anime as philosophy." },
      { title: "Mushishi", cover: "/photos/anime/mushishi.jpg", note: "Slow, atmospheric, no plot, perfect." },
      { title: "Natsume Yuujinchou", cover: "/photos/anime/natsume.jpg", note: "Spirits and kindness." },
      { title: "A Place Further Than the Universe", cover: "/photos/anime/a-place-further.png", note: "Four girls go to Antarctica. Sobbed." },
      { title: "Kids on the Slope", cover: "/photos/anime/kids-on-the-slope.jpg", note: "Jazz and friendship." },
      { title: "Barakamon", cover: "/photos/anime/barakamon.jpg", note: "Calligrapher finds himself on an island." },
      { title: "Welcome to the NHK", cover: "/photos/anime/welcome-to-nhk.jpg", note: "Hikikomori life, uncomfortably real." },
      { title: "Haibane Renmei", cover: "/photos/anime/haibane-renmei.jpg", note: "Mysterious, quiet, unforgettable." },
      { title: "Shouwa Genroku Rakugo Shinjuu", cover: "/photos/anime/shouwa-genroku.jpg", note: "Traditional art. True masterpiece." },
    ],
  },
  {
    id: "niche",
    label: "Niche. But they deserve the world.",
    items: [
      { title: "My Roommate Is a Cat", cover: "/photos/anime/my-roommate-is-a-cat.jpg", note: "A cat's perspective. Wholesome." },
      { title: "Shimoneta", cover: "/photos/anime/shimoneta.jpg", note: "Chaotic comedy." },
      { title: "Kiznaiver", cover: "/photos/anime/kiznaiver.png", note: "Pain-sharing experiment." },
      { title: "The Eccentric Family", cover: "/photos/anime/eccentric-family.jpg", note: "Kyoto spirits, beautiful." },
      { title: "The Ancient Magus' Bride", cover: "/photos/anime/ancient-magus-bride.jpg", note: "Magic and loneliness." },
      { title: "Yona of the Dawn", cover: "/photos/anime/yona-of-the-dawn.jpg", note: "Princess becomes warrior." },
      { title: "Laid-Back Camp", cover: "/photos/anime/laid-back-camp.jpg", note: "Camping as meditation." },
      { title: "Princess Tutu", cover: "/photos/anime/princess-tutu.jpg", note: "Fairy tale deconstruction." },
      { title: "Usagi Drop", cover: "/photos/anime/usagi-drop.jpg", note: "Found family (first half only)." },
    ],
  },
];

function PosterCard({ title, cover, note }: AnimeItem) {
  if (cover) {
    return (
      <div className="group relative aspect-2/3 rounded-xl overflow-hidden cursor-default">
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex flex-col justify-end p-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-xs sm:text-sm font-semibold leading-tight">{title}</p>
          <p className="text-white/60 text-xs mt-1 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-200">{note}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative aspect-2/3 rounded-xl border border-border/50 bg-card/40 flex flex-col justify-end p-3 cursor-default hover:border-teal/30 transition-colors">
      <p className="text-foreground/75 text-xs sm:text-sm font-semibold leading-tight">{title}</p>
      <p className="text-foreground/35 text-xs mt-1 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-200">{note}</p>
    </div>
  );
}

function AnimeCategory({ label, items }: { label: string; items: AnimeItem[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, INITIAL);

  return (
    <div>
      <div className="flex items-center gap-5 mb-4">
        <p className="text-base sm:text-lg font-semibold text-foreground/80 shrink-0">{label}</p>
        <div className="flex-1 h-px bg-border/40" />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
        {visible.map((a) => (
          <PosterCard key={a.title} {...a} />
        ))}
      </div>
      {items.length > INITIAL && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-medium text-foreground/70 hover:border-teal/40 hover:text-teal transition"
          >
            {expanded ? <><Minus size={12} /> Show Less</> : <><Plus size={12} /> {items.length - INITIAL} more</>}
          </button>
        </div>
      )}
    </div>
  );
}

export function SideQuest({ clashStats }: { clashStats: ClashStats | null }) {
  const winRate = clashStats ? Math.round((clashStats.wins / clashStats.battleCount) * 100) : null;
  const trophies = clashStats ? clashStats.trophies.toLocaleString() : "13,241";
  const favCard = clashStats?.favouriteCard ?? "Electro Wizard";
  const [animeOpen, setAnimeOpen] = useState(false);

  useEffect(() => {
    if (!animeOpen) return;

    history.pushState({ animeOpen: true }, "");
    const onPopState = () => setAnimeOpen(false);
    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, [animeOpen]);

  const closeAnime = () => {
    if (history.state?.animeOpen) {
      history.back();
    } else {
      setAnimeOpen(false);
    }
  };

  return (
    <>
    <section id="sidequest" className="py-28 sm:py-36">
      <div className="container mx-auto px-6">

        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-12">
          Side Quest.
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mb-20">
          <a
            href="https://cwstats.com/player/GJPRULP9"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl min-h-72 flex flex-col justify-end border border-border"
          >
            <img
              src="/photos/clash-royale.webp"
              alt="Clash Royale"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/10" />
            <div className="relative z-10 p-6 sm:p-7">
              <div className="inline-block text-[10px] tracking-[0.25em] text-teal bg-black/50 border border-teal/30 rounded-full px-3 py-1 mb-3">
                10 YEAR JOURNEY
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Clash Royale</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                A decade in the arenas. From learning what a spell cycle is to now, sleepless nights with my best friend, one more battle at a time. This game holds a lot of memories for me.
              </p>
            </div>
          </a>

          <button
            onClick={() => setAnimeOpen(true)}
            className="group relative overflow-hidden rounded-2xl min-h-72 flex flex-col justify-end border border-border text-left w-full"
          >
            <img
              src="/photos/anime-cover.jpg"
              alt="Anime"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/10" />
            <div className="relative z-10 p-6 sm:p-7">
              <div className="inline-block text-[10px] tracking-[0.25em] text-teal bg-black/50 border border-teal/30 rounded-full px-3 py-1 mb-3">
                SOLITUDE
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Anime</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                For the random days when nothing much is happening. Something I return to in the quiet, no plans, no obligations. Just a story and wherever it takes me.
              </p>
            </div>
          </button>
        </div>

      </div>
    </section>

    {/* Full-screen anime overlay */}
    {animeOpen && (
      <div className="fixed inset-0 z-[100] bg-background overflow-y-auto">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-12">
            <button
              onClick={closeAnime}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:border-teal/40 transition"
            >
              <ArrowLeft size={16} /> Back
            </button>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Anime</h2>
            <button
              onClick={closeAnime}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 hover:text-foreground hover:border-teal/40 transition"
            >
              <X size={18} />
            </button>
          </div>
          <div className="space-y-10">
            {categories.map((cat) => (
              <AnimeCategory key={cat.id} label={cat.label} items={cat.items} />
            ))}
          </div>
        </div>
      </div>
    )}
    </>
  );
}
