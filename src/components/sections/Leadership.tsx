import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, Briefcase, ChevronLeft, ChevronRight, Crown, Download, Globe, Heart, ImageIcon, Maximize2, Minus, Plus, Server, Star, Users, X, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type StoryBlock =
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "items"; items: { title: string; desc: string }[] }
  | { type: "contact"; lines: string[] }
  | {
      type: "split";
      left: { heading: string; items: { title: string; desc: string }[] };
      right: { heading: string; items: { title: string; desc: string }[] };
    }
  | { type: "listSplit"; left: string[]; right: string[] };

type CaptionedPhoto = {
  src: string;
  caption?: string;
};

type StorySection = {
  eyebrow: string;
  title: string;
  blocks: StoryBlock[];
  image?: CaptionedPhoto;
};

type Entry = {
  role: string;
  org: string;
  year: string;
  tag: string;
  Icon: LucideIcon;
  cover?: string;
  description?: string | string[];
  bullets?: string[];
  bulletsLabel?: string;
  gallery?: string[];
  story?: StorySection[];
  storyGallery?: CaptionedPhoto[];
  galleryEyebrow?: string;
  galleryTitle?: string;
  galleryVariant?: "grid" | "deck" | "timeline";
};

const nepal: Entry[] = [
  {
    role: "Executive Board Member",
    org: "The Squad of ChangeMakers",
    year: "2022–23",
    tag: "Social Impact",
    Icon: Users,
    cover: "/photos/leadership/squad-cover.jpg",
    galleryEyebrow: "Timeline",
    galleryTitle: "From the STEAM Camps to Nepal's Space Dream",
    galleryVariant: "timeline",
    storyGallery: [
      { src: "/photos/leadership/squad-team-steam.jpg", caption: "Our team at one of the STEAM camp expos" },
      { src: "/photos/leadership/squad-guest.jpg", caption: "With a guest of honor at one of our camps" },
      { src: "/photos/leadership/squad-rocket-display.jpg", caption: "Showing off a model rocket under the Nepal Space Dream banner" },
      { src: "/photos/leadership/squad-space-dream.jpg", caption: "Our rocket and drone display at Nepal Space Dream 2024" },
      { src: "/photos/leadership/squad-telescope-silhouette.jpg", caption: "With the 50-inch telescope" },
      { src: "/photos/leadership/squad-telescope-demo.jpg", caption: "Showing students how to use the telescope" },
      { src: "/photos/leadership/squad-eclipse.jpg", caption: "Students viewing a solar eclipse with safety glasses" },
      { src: "/photos/leadership/squad-outreach.jpg", caption: "At one of our outreach sessions" },
      { src: "/photos/leadership/squad-exhibition.jpg", caption: "At a space exploration exhibition" },
      { src: "/photos/leadership/squad-rocket-camp-kids.jpg", caption: "With students after building our model rocket in a single day" },
      { src: "/photos/leadership/squad-rocket-camp-instructing.jpg", caption: "Instructing students at rocket camp" },
      { src: "/photos/leadership/squad-rocket-team.jpg", caption: "With our student researchers and the rockets we built together" },
      { src: "/photos/leadership/squad-rocket-parts.jpg", caption: "Our rocket parts and 3D printer station" },
      { src: "/photos/leadership/squad-rc-plane.jpg", caption: "Testing our RC plane in front of a crowd" },
      { src: "/photos/leadership/squad-sister.jpg", caption: "Me with my sister" },
    ],
    story: [
      {
        eyebrow: "The Squad of ChangeMakers",
        title: "Building Nepal's Biggest STEAM Camps",
        image: { src: "/photos/leadership/squad-team-steam.jpg", caption: "Our team at one of the STEAM camp expos" },
        blocks: [
          {
            type: "p",
            text: "As an Executive Board Member of The Squad of ChangeMakers, I helped organize and run the biggest STEAM camps Nepal had seen at the time. Across five major camps, we reached 50+ schools and 500+ participants, hosted 20+ STEM competitions, and drew over 10,000 visitors.",
          },
          {
            type: "p",
            text: "Behind the scenes, I helped hire and manage a nationwide network of 30+ student researchers, reviewing their individual performance and helping shape them into the educators who would run these camps in their own communities.",
          },
        ],
      },
      {
        eyebrow: "Research & Design",
        title: "Telescopes, RC Planes, and a Rocket Camp",
        image: { src: "/photos/leadership/squad-rocket-camp-instructing.jpg", caption: "Instructing students at rocket camp" },
        blocks: [
          {
            type: "p",
            text: "Alongside the camps, our team researched, studied, and designed models of telescopes and RC planes, and as one of the executive board members I helped lead the testing of our RC plane builds at distances of up to 500 meters.",
          },
          {
            type: "p",
            text: "As part of the executive board, I also helped organize a rocket camp under the broader STEAM Camp banner, where our team instructed 25+ students as we designed and built a working model rocket in a single day.",
          },
        ],
      },
      {
        eyebrow: "Nepal's Space Dream",
        title: "Part of Something Bigger",
        image: { src: "/photos/leadership/squad-space-dream.jpg", caption: "Our rocket and drone display at Nepal Space Dream 2024" },
        blocks: [
          {
            type: "p",
            text: "All of this was part of Nepal's Dream Project, branded as Nepal's Space Dream — an effort to bring hands-on space science and STEM education to students across the country who had never had access to anything like it before.",
          },
        ],
      },
    ],
  },
  {
    role: "STEAM Facilitator",
    org: "Karkhana",
    year: "2022–23",
    tag: "Education",
    Icon: Zap,
    cover: "/photos/leadership/karkhana-cover.jpg",
    storyGallery: [
      { src: "/photos/leadership/karkhana-arduino.jpg", caption: "Helping students wire up an Arduino UNO project at one of our Maker Space workshops" },
      { src: "/photos/leadership/karkhana-project-demo.jpg", caption: "Testing a student-built project during a school visit" },
      { src: "/photos/leadership/karkhana-stemclub.jpg", caption: "With one of our STEM Club groups and their project" },
      { src: "/photos/leadership/karkhana-itahari.jpg", caption: "Foam Machine workshop with Grade 6 at Pashupati English Boarding School, Itahari" },
      { src: "/photos/leadership/karkhana-pokhara.jpg", caption: "Planting workshop with Grade 3 at Surabhi Montessori Pathshala, Pokhara" },
      { src: "/photos/leadership/karkhana-bhaktapur.jpg", caption: "Classifying Animals workshop with Grade 6 at Oxford Practical School, Bhaktapur" },
      { src: "/photos/leadership/karkhana-chitwan.jpg", caption: "DIY Thermos workshop with Grade 8 at Ocean Academy, Chitwan" },
      { src: "/photos/leadership/karkhana-hetauda.jpg", caption: "Acid, Base, and Salt workshop with Grade 7 at Kamane Academy, Hetauda" },
      { src: "/photos/leadership/karkhana-niketan.jpg", caption: "\"Talk Through the String\" workshop with Grade 6 at G.S. Niketan, Hetauda" },
    ],
    story: [
      {
        eyebrow: "Karkhana",
        title: "Bringing Maker Space to Public Schools",
        blocks: [
          {
            type: "p",
            text: "As a STEAM Facilitator with Karkhana, I helped establish STEM clubs in seven public schools, integrating computer science principles through Karkhana's \"Maker Space\" and \"STEM for School\" initiatives.",
          },
          {
            type: "p",
            text: "I conducted hands-on workshops in ten schools, teaching students to build with Arduino UNO and guiding them through projects like smart dustbins, light controllers, GPS units, and radars.",
          },
          {
            type: "p",
            text: "I tracked the progress of each school through monthly virtual theme-based meetings and projects, following their work as it developed over the year.",
          },
        ],
      },
    ],
  },
  {
    role: "Executive Board Member",
    org: "AuraED",
    year: "2021–22",
    tag: "Education",
    Icon: Users,
    cover: "/photos/leadership/auraed-cover.jpg",
    storyGallery: [
      { src: "/photos/leadership/auraed-digital-literacy.jpg", caption: "On one of our digital literacy outreach trips" },
      { src: "/photos/leadership/auraed-dadagaun-group.jpg", caption: "With the kids at Dada Gaun Children's Home" },
      { src: "/photos/leadership/auraed-dadagaun-kids.jpg", caption: "Two of the kids at Dada Gaun Children's Home" },
      { src: "/photos/leadership/auraed-dadagaun-sign.jpg", caption: "Our digital literacy session at Dada Gaun Children's Home" },
      { src: "/photos/leadership/auraed-laptop-kid.jpg", caption: "A student exploring a laptop for the first time" },
      { src: "/photos/leadership/auraed-students-laptop.jpg", caption: "Students working through our digital literacy curriculum" },
    ],
    story: [
      {
        eyebrow: "AuraED",
        title: "Workshops Across 15+ Organizations",
        image: { src: "/photos/leadership/auraed-coding-session.jpg", caption: "Walking students through a hands-on coding session" },
        blocks: [
          {
            type: "p",
            text: "As an Executive Board Member of AuraED, I worked with 15+ organizations to facilitate workshops on Python, AI, AWS cloud computing, and mathematics, mentoring 170+ students along the way.",
          },
        ],
      },
      {
        eyebrow: "Operations",
        title: "Running the HR Team",
        image: { src: "/photos/leadership/auraed-team.jpg", caption: "The AuraED team" },
        blocks: [
          {
            type: "p",
            text: "Behind the scenes, I tracked executive activities and monitored team progress to keep everyone aligned with AuraED's goals, and I led the HR team, delegating tasks and managing performance across the organization.",
          },
          {
            type: "p",
            text: "I also helped inspire 15 individuals from different districts across Nepal to join as district representatives, expanding AuraED's reach well beyond Kathmandu.",
          },
        ],
      },
      {
        eyebrow: "Outreach",
        title: "Graphics Design Workshop & Visits to Children's Homes",
        image: { src: "/photos/leadership/auraed-graphics-workshop.jpg", caption: "Teaching the graphics design workshop with United Scholars Academy" },
        blocks: [
          {
            type: "p",
            text: "We ran a two-day workshop on \"Getting Started with Graphics Designing\" in collaboration with United Scholars Academy in Padamsal, Kathmandu, reaching 45 students.",
          },
          {
            type: "p",
            text: "We also brought our digital literacy workshops to children's homes and underprivileged communities, including a \"Basic Introduction to Digital Literacy\" session at Dada Gaun Children's Home.",
          },
        ],
      },
    ],
  },
  {
    role: "President",
    org: "Xavier Youth Red Cross Circle (XYRCC)",
    year: "2019–21",
    tag: "Humanitarian",
    Icon: Heart,
    cover: "/photos/leadership/xyrcc-cover.jpg",
    galleryEyebrow: "Timeline",
    galleryTitle: "Mission Nyano, Mission Sikshya, and Beyond",
    galleryVariant: "timeline",
    storyGallery: [
      { src: "/photos/leadership/xyrcc-donations.jpg", caption: "With my secretary Vicky Jha, carrying donations for Mission Nyano — my literal support during all our events" },
      { src: "/photos/leadership/xyrcc-school-sign.jpg", caption: "Shree Jese Secondary School, Molung-7, Okhaldhunga" },
      { src: "/photos/leadership/xyrcc-handover.jpg", caption: "Handing over donated supplies, with then Vice Principal Mr. Dipen Dahal" },
      { src: "/photos/leadership/xyrcc-presenting-okhaldhunga.jpg", caption: "Presenting school supplies to a student in Okhaldhunga" },
      { src: "/photos/leadership/xyrcc-mission-sikshya-banner.jpg", caption: "Mission Sikshya, with the full team and students" },
      { src: "/photos/leadership/xyrcc-mission-sikshya-group.jpg", caption: "With students after a Mission Sikshya distribution" },
      { src: "/photos/leadership/xyrcc-math-medals.jpg", caption: "Two students with medals from one of our outreach programs" },
      { src: "/photos/leadership/xyrcc-distributing.jpg", caption: "Handing out school supplies" },
      { src: "/photos/leadership/xyrcc-village-distribution.jpg", caption: "Distributing supplies to families in the village" },
      { src: "/photos/leadership/xyrcc-volunteer-kids.jpg", caption: "With Puja Bishwakarma, my sister and a fellow XYRCC member, and the kids of the village" },
      { src: "/photos/leadership/xyrcc-youngest-student.jpg", caption: "Handing a bag of supplies to one of the youngest students" },
      { src: "/photos/leadership/xyrcc-new-bags.jpg", caption: "Students with their new bags and notebooks" },
      { src: "/photos/leadership/xyrcc-happy-face.jpg", caption: "One happy face among many" },
      { src: "/photos/leadership/xyrcc-mission-sikshya-palpa.jpg", caption: "Mission Sikshya 2077, with Sky Samaj Nepal in Palpa" },
    ],
    story: [
      {
        eyebrow: "Mission Nyano & Mission Sikshya",
        title: "Reaching 1,000+ Children Across Five Districts",
        image: { src: "/photos/leadership/xyrcc-okhaldhunga-team.jpg", caption: "Our team at Shree Jese Secondary School in Molung, Okhaldhunga" },
        blocks: [
          {
            type: "p",
            text: "During my time with the Xavier Youth Red Cross Circle, we partnered with non-profits like the Lions Club and Nepal Red Cross to co-lead \"Mission Nyano\" and \"Mission Sikshya,\" distributing warm clothing and stationery to over 1,000 children across five districts.",
          },
          {
            type: "p",
            text: "Most of this outreach happened during COVID, when so many of these students didn't have basic school supplies. Walking into a village with bags of notebooks and pens, and seeing how something that small could light up a kid's whole day, is something I still think about.",
          },
        ],
      },
      {
        eyebrow: "NSMG Mathematics Competition",
        title: "A National Math Competition with 100+ Schools",
        blocks: [
          {
            type: "p",
            text: "We also organized a national-level mathematics competition in collaboration with the Non-Symmetrical Mathematics Group (NSMG), bringing in more than 100 schools from across Nepal.",
          },
        ],
      },
      {
        eyebrow: "Rising Talent of Xavier",
        title: "RTX — A Talent Hunt with 200+ Performers",
        image: { src: "/photos/leadership/xyrcc-award.jpg", caption: "Xavier International College, named Outstanding College of the Year at the World Education Leaders Summit & Awards 2021" },
        blocks: [
          {
            type: "p",
            text: "One of my favorite events was organizing \"Rising Talent of Xavier\" (RTX), a talent hunt held at Xavier International College with 200+ participants and an audience of more than 1,500.",
          },
        ],
      },
      {
        eyebrow: "A Year as President",
        title: "Why This Club Stayed With Me",
        image: { src: "/photos/leadership/xyrcc-kids-bags.jpg", caption: "Students with their new school bags and supplies" },
        blocks: [
          {
            type: "p",
            text: "I served as President for a year, but out of everything I've been part of, this is the role I feel closest to. It showed me how broad and big the world really is.",
          },
          {
            type: "quote",
            text: "Distributing clothes and stationery to students in the village, and seeing how beautiful their smiles were, is something I'll never forget.",
          },
        ],
      },
    ],
  },
  {
    role: "Founding President",
    org: "Jagat Mandir Student Council",
    year: "2018–19",
    tag: "Student Government",
    Icon: Crown,
    cover: "/photos/leadership/jagatmandir-cover.jpg",
    storyGallery: [
      { src: "/photos/leadership/jagatmandir-candidacy.jpg", caption: "Candidates registering for the school council election" },
      { src: "/photos/leadership/jagatmandir-green-house.jpg", caption: "The \"Green House\" ballot box during our school council election" },
      { src: "/photos/leadership/jagatmandir-voting.jpg", caption: "Students casting their votes" },
      { src: "/photos/leadership/jagatmandir-blue-house.jpg", caption: "A student voting at the \"Blue House\" ballot box" },
      { src: "/photos/leadership/jagatmandir-isa-projects.jpg", caption: "Our British Council \"Connecting Classrooms\" community-based school projects" },
      { src: "/photos/leadership/jagatmandir-principal-book.jpg", caption: "Receiving a book from Principal Rajan Acharya" },
    ],
    story: [
      {
        eyebrow: "Jagat Mandir Secondary School",
        title: "Student Council, Elections, and Community Projects",
        blocks: [
          {
            type: "p",
            text: "As Founding President of the Jagat Mandir Student Council, I worked with the Election Commission of Nepal to lead a workshop for 60+ high school students on the process of the general election in Nepal.",
          },
          {
            type: "p",
            text: "We then put that into practice with a school-wide election among 500+ students from Grade 2 to Grade 10.",
          },
          {
            type: "p",
            text: "I was also part of the organizing committee for the MAAF (Mutual Academic Activities Forum) Inter-School Spelling Bee Competition, which brought together 20+ schools.",
          },
          {
            type: "p",
            text: "Alongside all this, we completed International School Award (ISA) projects through the British Council, including solid waste management, organic farming, and a cleanliness campaign.",
          },
        ],
      },
    ],
  },
];

const txst: Entry[] = [

  {
    role: "Director of International Student Affairs",
    org: "TXST Student Government",
    year: "2025–26",
    tag: "Student Government",
    Icon: Globe,
    cover: "/photos/leadership/dia-cover.jpg",
    storyGallery: [
      { src: "/photos/leadership/dia-4.jpg", caption: "Official portrait for the 2025–26 Student Government cabinet" },
      { src: "/photos/leadership/dia-3.jpg", caption: "Cream pie tradition for newly elected senators Jcolby and Aerial" },
      { src: "/photos/leadership/dia-9.jpg", caption: "Team day with the Student Government cohort" },
      { src: "/photos/leadership/dia-6.jpg", caption: "One of the last photos with the best exec team" },
      { src: "/photos/leadership/dia-5.jpg", caption: "The executive cabinet together at the year-end banquet" },
      { src: "/photos/leadership/dia-8.jpg", caption: "My desk nameplate and the 2025–26 cabinet board, Director of Community Outreach" },
    ],
    story: [
      {
        eyebrow: "The Story Behind This Role",
        title: "How This Position Was Created",
        image: { src: "/photos/leadership/dia-2.jpg", caption: "With Student Body President Abby Myers, the leader who said yes to creating this role" },
        blocks: [
          {
            type: "p",
            text: "When I first got to Texas State, there was no place in Student Government built for international students. With more than 1,500 of us on this campus, I felt that gap almost right away. We had no one in the room when decisions were made, no one tracking the issues that affected us, and most international students did not even know Student Government existed or that it could do anything for them.",
          },
          {
            type: "p",
            text: "So I started building a coalition across the international student organizations on campus and put together a proposal for a position that would represent us directly in the executive cabinet. I brought that proposal to Abby Myers, who was running for Student Body President at the time, and she agreed that if her ticket won, this role would become real.",
          },
          {
            type: "p",
            text: "From there I ran alongside her campaign, going from one international community to the next, introducing many of them to Student Government for the first time and explaining why having a seat at that table actually mattered. The Bobcats First ticket won, and I was appointed Director of Community Outreach alongside Aiden, becoming the first international student in the TXST Student Government executive cabinet.",
          },
          {
            type: "p",
            text: "From there, the work was mine to build. I mobilized over 800 international students to vote in that election, connected hundreds of students to resources they did not know existed, and built the foundation for a role that simply did not exist a year before.",
          },
          {
            type: "quote",
            text: "A special thank you to Abby Myers, who said yes when this idea was first proposed. That single decision changed the trajectory of international student representation at Texas State.",
          },
        ],
      },
      {
        eyebrow: "Overview of the Role",
        title: "Mission and What Success Looks Like",
        image: { src: "/photos/leadership/dia-10.jpg", caption: "With university president Dr. Kelly Damphousse on my first day in office" },
        blocks: [
          { type: "h", text: "Mission of the Position" },
          {
            type: "p",
            text: "As Director of International Student Affairs, I serve as the primary liaison between Student Government and the 1,500+ international students at Texas State University. This role bridges:",
          },
          {
            type: "list",
            items: [
              "International students and Student Government leadership",
              "Campus resources and students who are unaware they exist",
              "Cultural organizations and university administration",
              "International student concerns and institutional policy",
            ],
          },
          { type: "h", text: "What Success Looks Like" },
          {
            type: "list",
            items: [
              "International students know who you are and how to reach you",
              "You bring international student concerns into cabinet with evidence",
              "At least two meaningful community events per semester",
              "New students feel supported before and after arrival",
              "You leave the position better documented than you found it",
            ],
          },
          {
            type: "contact",
            lines: [
              "Primary Institutional Contact",
              "International Student and Scholar Services (ISSS)",
              "JCK 314  ·  inational@txstate.edu  ·  (512) 245-7966",
              "international.txst.edu  ·  Monday to Friday, 8:00 AM to 5:00 PM",
            ],
          },
        ],
      },
      {
        eyebrow: "Core Responsibilities",
        title: "What the Role Actually Involves",
        image: { src: "/photos/leadership/dia-1.jpg", caption: "With Aiden, Director of Community Outreach" },
        blocks: [
          { type: "h", text: "Advocacy in Cabinet" },
          {
            type: "list",
            items: [
              "Attend all executive cabinet meetings and speak on behalf of international students",
              "Bring specific, evidence-based concerns to the President and Vice President",
              "Track policy discussions that may impact international students",
              "Build relationships with other cabinet directors to find collaboration opportunities",
            ],
          },
          { type: "h", text: "Community Outreach and Engagement" },
          {
            type: "list",
            items: [
              "Maintain relationships with international student organization leaders",
              "Organize at least two events per semester serving international students",
              "Coordinate with ISSS on resource awareness campaigns",
              "Mobilize international student participation in Student Government elections",
            ],
          },
          { type: "h", text: "Resource Connection" },
          {
            type: "list",
            items: [
              "Know the key ISSS services well enough to direct students immediately",
              "Share updates on emergency funding, airport shuttles, and CPT/OPT deadlines",
              "Communicate important immigration compliance reminders to the community",
              "Attend ISSS events and stay current on what they offer each semester",
            ],
          },
          { type: "h", text: "Best Practice" },
          {
            type: "p",
            text: "Keep a running notes document each week. Pull highlights into cabinet updates so you are never scrambling. Document everything and pass it on. Future directors will thank you.",
          },
        ],
      },
      {
        eyebrow: "Events & Future Ideas",
        title: "What We Did, and What Comes Next",
        blocks: [
          {
            type: "p",
            text: "Looking back at the 2025 to 2026 term, I am proud of what we built and excited about where this role can go from here.",
          },
          {
            type: "split",
            left: {
              heading: "What We Did in 2025 to 2026",
              items: [
                { title: "Student Organization of the Year", desc: "TXST Student Government was recognized as Student Organization of the Year, a reflection of the work the whole cabinet put in this year." },
                { title: "International Board Game Night", desc: "A low barrier, high engagement event. Multiple countries, one room. Easy to replicate." },
                { title: "Election Mobilization", desc: "Coordinated outreach across organizations to mobilize 800+ international students for the Student Government election." },
                { title: "ISSS Resource Awareness", desc: "Promoted emergency funding, airport shuttles, and CPT/OPT awareness to students who did not know these existed." },
              ],
            },
            right: {
              heading: "Ideas for Future Events",
              items: [
                { title: "International Food Fair", desc: "Cultural organizations, food from home countries, massive engagement." },
                { title: "International Welcome Week", desc: "Airport shuttle day, resource fair, and social mixer." },
                { title: "Cultural Showcase Night", desc: "Performances, art, and traditions from across the world." },
                { title: "Mental Health & Adjustment Workshop", desc: "Culture shock, isolation, and academic pressure." },
                { title: "Study & Networking Hours", desc: "Regular informal community time. Low effort, high value." },
              ],
            },
          },
        ],
      },
    ],
  },

  {
    role: "Presidential Ambassador",
    org: "Texas State Gold Star Society",
    year: "2025–Present",
    tag: "Honors",
    Icon: Star,
    cover: "/photos/leadership/goldstar-cover.jpg",
    storyGallery: [
      { src: "/photos/leadership/goldstar-cohort.jpg", caption: "The Gold Star Society cohort" },
      { src: "/photos/leadership/goldstar-football.jpg", caption: "The last first football game with the Sun Belt Conference" },
      { src: "/photos/leadership/goldstar-damphousse.jpg", caption: "With Dr. Kelly Damphousse and Beth, after I hit Luminary status in Gold Star Society with 80+ service hours" },
      { src: "/photos/leadership/goldstar-tsering.jpg", caption: "With Tsering, the advisor to Gold Star Society" },
      { src: "/photos/leadership/goldstar-brandy.jpg", caption: "With Dr. Damphousse and Beth's dog, Brandy" },
      { src: "/photos/leadership/goldstar-niko.jpg", caption: "The iconic dap with Niko" },
      { src: "/photos/leadership/goldstar-saurav.jpg", caption: "With Saurav, sharing the journey back from Nepal since high school" },
      { src: "/photos/leadership/goldstar-group7.jpg", caption: "With fellow Gold Star Ambassadors at the stadium" },
      { src: "/photos/leadership/goldstar-group3.jpg", caption: "The Big Three" },
      { src: "/photos/leadership/goldstar-mascot.jpg", caption: "With Boko at Mardi Gras" },
      { src: "/photos/leadership/goldstar-blazer.jpg", caption: "Wearing the Gold Star Society blazer" },
      { src: "/photos/leadership/goldstar-banquet.jpg", caption: "At the Gold Star Society Awards Banquet" },
    ],
    story: [
      {
        eyebrow: "Office of the President",
        title: "Becoming a Gold Star Ambassador",
        image: { src: "/photos/leadership/goldstar-card.jpg", caption: "My welcome card as a new Gold Star Society member" },
        blocks: [
          {
            type: "p",
            text: "Gold Star Society is Texas State's presidential ambassador organization, the official student representatives of the university and the President at campus and community events. It grew out of Student Foundation, which had served that role since 1978, and relaunched under its current name in fall 2023 to carry that legacy of leadership, networking, and Texas State pride into a new chapter.",
          },
          {
            type: "p",
            text: "Being selected as a Gold Star Ambassador means I now represent the Office of the President alongside a small cohort of students who have each held leadership roles across campus. As part of the role, I:",
          },
          {
            type: "list",
            items: [
              "Represent the Office of the President at official Texas State University events, fostering connections between university leadership, students, and distinguished guests",
              "Serve as a student ambassador and role model, embodying Texas State's values of excellence, leadership, and service",
              "Assist with campus tours, donor relations, and high-profile ceremonies, enhancing university outreach and engagement",
            ],
          },
        ],
      },
      {
        eyebrow: "Recognition",
        title: "Reaching Luminary Status",
        image: { src: "/photos/leadership/goldstar-luminary.jpg", caption: "My Gold Star Society Luminary Award" },
        blocks: [
          {
            type: "p",
            text: "Members commit to a minimum number of service hours every semester, volunteering at university events and programs. I went well past that minimum, logging more than 80 service hours, which earned me Gold Star Society's Luminary Award. It was presented to me by Dr. Kelly Damphousse and Beth, and it remains one of my favorite recognitions from my time at Texas State.",
          },
        ],
      },
    ],
  },

  {
    role: "Founding Father",
    org: "Sigma Phi Epsilon",
    year: "2026–Present",
    tag: "Greek Life",
    Icon: Star,
    cover: "/photos/leadership/sigep-cover.jpg",
    storyGallery: [
      { src: "/photos/leadership/sigep-certificate.jpg", caption: "My Balanced Man Scholarship certificate" },
      { src: "/photos/leadership/sigep-fish.jpg", caption: "My first fish, caught with my brothers" },
      { src: "/photos/leadership/sigep-finalists.jpg", caption: "With all the Balanced Man Scholarship finalists" },
    ],
    story: [
      {
        eyebrow: "Founding Father",
        title: "Joining Sigma Phi Epsilon",
        image: { src: "/photos/leadership/sigep-logo.png", caption: "The Balanced Man, the symbol at the heart of Sigma Phi Epsilon's values" },
        blocks: [
          {
            type: "p",
            text: "I never imagined I would join a fraternity. I had assumed it was all about a social culture that never appealed to me. But becoming one of the founding fathers of Sigma Phi Epsilon at Texas State University turned out to be one of the best decisions I have made. The chapter's mission of cultivating a Sound Mind and Sound Body resonated deeply with my own values of balance, virtue, and the pursuit of excellence.",
          },
        ],
      },
      {
        eyebrow: "Recognition",
        title: "Balanced Man & Eugene Schurg Scholar",
        image: { src: "/photos/leadership/sigep-balanced-man.jpg", caption: "Receiving the Overall Balanced Man Scholarship, the first time it was awarded at Texas State" },
        blocks: [
          {
            type: "p",
            text: "Along the way, I was honored to be selected as the Overall Balanced Man Scholarship Winner, becoming the first recipient of this scholarship at Texas State University, and I was also awarded the Eugene Schurg Scholarship. Beyond the honors, this chapter gave me a brotherhood I never expected, including the afternoon I caught my first fish alongside my brothers.",
          },
        ],
      },
    ],
  },

  {
    role: "Chief Information Officer / VP of IT Student Advisor",
    org: "Texas State Division of IT",
    year: "2025–Present",
    tag: "Technology",
    Icon: Server,
    cover: "/photos/leadership/cio-cover.jpg",
    galleryEyebrow: "Presentation",
    galleryTitle: "HPC & LEAP2 Utilization Report, Presented to Division of IT Leadership",
    galleryVariant: "deck",
    storyGallery: Array.from({ length: 24 }, (_, i) => ({
      src: `/photos/leadership/cio-slide-${String(i + 1).padStart(2, "0")}.jpg`,
    })),
    story: [
      {
        eyebrow: "Texas State Division of IT",
        title: "Student Advisor to the CIO and VP of IT",
        blocks: [
          {
            type: "p",
            text: "I serve as a liaison between the Division of IT leadership and the more than 45,000 students at Texas State, translating student needs into actionable technology requirements.",
          },
          {
            type: "p",
            text: "In this role, I represent the student voice in executive-level discussions on digital infrastructure, accessibility, and enterprise systems.",
          },
          {
            type: "p",
            text: "Right now, I am focused on studying the university's High Performance Computing resources, including the LEAP2 cluster, and helping shape the case for how those resources should grow to meet future demand.",
          },
          { type: "h", text: "Presenting to Leadership" },
          {
            type: "p",
            text: "I put together a full HPC and LEAP2 utilization report and presented it to Division of IT leadership, walking through current usage, where the bottlenecks are, and what expanding the resources could look like going forward.",
          },
        ],
      },
    ],
  },

  {
    role: "Student Advisor",
    org: "Nepalese Student Association, TXST",
    year: "2026–27",
    tag: "Cultural",
    Icon: Users,
    cover: "/photos/leadership/nsa-advisor-cover.jpg",
    storyGallery: [
      { src: "/photos/leadership/nsa-advisor-vigil.jpg", caption: "Standing with hundreds of students at the Gen Z Candlelight Vigil" },
      { src: "/photos/leadership/nsa-advisor-cultural.jpg", caption: "Celebrating with NSA members and Miss Supreme Austin at a cultural night" },
      { src: "/photos/leadership/nsa-advisor-temple.jpg", caption: "The home altar set up for our Tihar celebration, the festival of lights" },
      { src: "/photos/leadership/Fund2.jpg", caption: "Tabling for the fundraiser at LBJ Mall" },
      { src: "/photos/leadership/Fund4.jpg", caption: "Our \"Nepal Needs Your Help\" poster board, with before-and-after photos of the flooding" },
      { src: "/photos/leadership/Fund5.jpg", caption: "Our recap of the two-day campaign — $1,350 raised for flood relief" },
    ],
    story: [
      {
        eyebrow: "Nepalese Student Association",
        title: "First Undergraduate Student Advisor",
        image: { src: "/photos/leadership/nsa-advisor-executives.jpg", caption: "With the NSA executive board at a Texas State cultural event" },
        blocks: [
          {
            type: "p",
            text: "With more than 350 members, the Nepalese Student Association is the largest student organization on campus. After serving as both Vice President and President, I was invited back as the organization's first ever undergraduate Student Advisor for the 2026 to 2027 term, with the tenure beginning in fall.",
          },
        ],
      },
      {
        eyebrow: "September 2026",
        title: "Organizing a Fundraiser After the Nepal Flash Floods",
        image: { src: "/photos/leadership/Fund3.jpg", caption: "NSA members and supporters at the fundraiser table" },
        blocks: [
          {
            type: "p",
            text: "In August 2026, a glacier collapse triggered catastrophic flash flooding across northern Nepal, killing more than a thousand people, leaving thousands missing, and destroying homes, roads, and bridges across entire communities.",
          },
          {
            type: "p",
            text: "As Student Advisor, I helped organize the Nepalese Student Association's two-day fundraising campaign at LBJ Mall on September 8 and 9, bringing the Texas State community together in support of flood relief efforts back home.",
          },
          {
            type: "p",
            text: "Through this fundraiser, we raised $1,350.00 — approximately NPR 205,000 — and donated it in full to Nepal's Prime Minister Disaster Relief Fund (PMDRF).",
          },
          {
            type: "quote",
            text: "You don't have to be Nepali to care about Nepal.",
          },
        ],
      },
    ],
  },

  {
    role: "Vice President & President",
    org: "Nepalese Student Association, TXST",
    year: "2025–26",
    tag: "Cultural",
    Icon: Users,
    cover: "/photos/leadership/nsa-vp-cover.jpg",
    storyGallery: [
      { src: "/photos/leadership/nsa-vp-2.jpg", caption: "Tika ceremony with the brothers of NSA during Dashain" },
      { src: "/photos/leadership/nsa-vp-tika.jpg", caption: "Putting tika on a friend during Tihar" },
      { src: "/photos/leadership/nsa-vp-holi.jpg", caption: "Holi celebration with the whole community" },
      { src: "/photos/leadership/nsa-vp-food.jpg", caption: "Serving food at our cultural night" },
      { src: "/photos/leadership/nsa-vp-pashupati.jpg", caption: "Volunteering at Pashupatinath Temple during Shivaratri" },
      { src: "/photos/leadership/nsa-vp-certificate.jpg", caption: "Certificate of Appreciation for serving as Vice President and Acting President" },
    ],
    story: [
      {
        eyebrow: "4th Committee",
        title: "Vice President & President",
        image: { src: "/photos/leadership/nsa-vp-1.jpg", caption: "Dashain and Tihar Tika ceremony with the NSA family" },
        blocks: [
          {
            type: "p",
            text: "From welcoming students before their arrival to creating meaningful community experiences throughout the year, the 4th Committee worked with dedication, coordination, and purpose across every initiative.",
          },
        ],
      },
      {
        eyebrow: "Handover",
        title: "Leading the Election & Handover",
        image: { src: "/photos/leadership/nsa-vp-meeting.jpg", caption: "Presenting constitution amendments during a general body meeting" },
        blocks: [
          {
            type: "p",
            text: "When the previous president's tenure came to an end, I stepped in to conduct the election and oversee a smooth handover to the next committee. We extend our sincere gratitude to the 4th Committee and everyone who contributed. While not every moment was captured, each initiative reflects the commitment, teamwork, and consistency that defined this journey.",
          },
          { type: "h", text: "Events & Initiatives" },
          {
            type: "listSplit",
            left: [
              "Multiple webinars for students coming from Nepal, conducted during summer and prior to the Fall semester",
              "Gen Z Candlelight Vigil",
              "Meet and Greet Session",
              "Dashain and Tihar Celebration",
              "Cricket Tournament",
              "Risk Assessment Sessions",
              "OSHA Safety and Resume Workshop",
            ],
            right: [
              "Multiple webinars for students joining for the Spring semester",
              "Financial Literacy and Credit Information Session",
              "Shivaratri Volunteering at Pashupatinath Temple",
              "Holi Celebration",
              "Football Tournament",
              "Nepali Night Program",
            ],
          },
        ],
      },
    ],
  },

  {
    role: "Active Member",
    org: "Society for Space Exploration (SEDS TXST)",
    year: "2024",
    tag: "STEM",
    Icon: Briefcase,
    cover: "/photos/leadership/sse-cover.jpg",
    storyGallery: [
      { src: "/photos/leadership/sse-presenting.jpg", caption: "President Aiden presenting the poster" },
      { src: "/photos/leadership/sse-poster.jpg", caption: "Our EMMBER poster, a NASA CubeSat Launch Initiative proposal for wildfire monitoring" },
      { src: "/photos/leadership/sse-denver.jpg", caption: "The University of Denver, where SpaceVision 2024 was held" },
    ],
    story: [
      {
        eyebrow: "SpaceVision 2024",
        title: "Representing Texas State for the First Time",
        image: { src: "/photos/leadership/sse-badge.jpg", caption: "My SpaceVision 2024 attendee badge, the first time I represented Texas State at an event like this" },
        blocks: [
          {
            type: "p",
            text: "I attended the SpaceVision 2024 conference at the University of Denver with the Society for Space Exploration, where we presented a poster on EMMBER, Earth Monitoring of Matter After Blazes for Environmental Research. It was the first time I represented Texas State at an event like this.",
          },
          {
            type: "p",
            text: "EMMBER was a NASA CubeSat Launch Initiative proposal that explored how satellite data could be used for environmental monitoring and wildfire impact analysis, measuring changes and movement of carbon, nitrogen, and phosphorus due to wildfires using a hyperspectral imager in low Earth, sun synchronous orbit.",
          },
        ],
      },
      {
        eyebrow: "Looking Ahead",
        title: "BobcatOrbiter and Pleiades-Maia",
        image: { src: "/photos/leadership/sse-group.jpg", caption: "With Aiden and Alex at SpaceVision 2024" },
        blocks: [
          {
            type: "p",
            text: "Beyond EMMBER, I collaborated on a multi-university initiative to advance the BobcatOrbiter and Pleiades-Maia satellite projects, focusing on interdisciplinary research and the development of cutting-edge technologies for satellite systems and space exploration. This was during fall 2024, and I have not continued with the project since.",
          },
        ],
      },
    ],
  },

];

function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: CaptionedPhoto[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-100 flex flex-col bg-black/96 pointer-events-auto" onClick={onClose}>
      <div className="flex shrink-0 items-center justify-between px-5 py-3" onClick={(e) => e.stopPropagation()}>
        <span className="text-xs text-white/40 tabular-nums">
          {index + 1} / {photos.length}
        </span>
        <div className="flex items-center gap-2">
          <a
            href={photos[index].src}
            download
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/70 transition hover:bg-white/20 hover:text-white"
          >
            <Download size={12} /> Download
          </a>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white"
          >
            <X size={15} />
          </button>
        </div>
      </div>

      <div className="flex flex-1 min-h-0 items-center justify-center gap-3 px-3 pb-4">
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition hover:bg-white/20 hover:text-white disabled:opacity-0"
          disabled={photos.length <= 1}
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex flex-1 min-h-0 min-w-0 flex-col items-center justify-center gap-3" onClick={(e) => e.stopPropagation()}>
          <img src={photos[index].src} alt="" className="max-h-full max-w-full rounded-xl object-contain shadow-2xl" />
          {photos[index].caption && (
            <p className="text-sm text-white/70 text-center max-w-lg">{photos[index].caption}</p>
          )}
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition hover:bg-white/20 hover:text-white disabled:opacity-0"
          disabled={photos.length <= 1}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

function EntryModal({ entry, open, onClose }: { entry: Entry; open: boolean; onClose: () => void }) {
  const Icon = entry.Icon;
  const photos = entry.gallery ?? [];
  const hasPhotos = photos.length > 0;
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevPhoto = () => setLightboxIdx((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null));
  const nextPhoto = () => setLightboxIdx((i) => (i !== null ? (i + 1) % photos.length : null));

  const descriptions = Array.isArray(entry.description)
    ? entry.description
    : entry.description
      ? [entry.description]
      : [];

  return (
    <>
    <Dialog open={open} onOpenChange={(v) => { if (!v && lightboxIdx === null) onClose(); }}>
      <DialogContent
        className="max-w-4xl w-full p-0 overflow-hidden border-border/60 bg-card gap-0 flex flex-col max-h-[90vh] sm:max-h-[86vh]"
        onEscapeKeyDown={(e) => {
          if (lightboxIdx !== null) { e.preventDefault(); closeLightbox(); }
        }}
        onPointerDownOutside={(e) => {
          if (lightboxIdx !== null) e.preventDefault();
        }}
        onInteractOutside={(e) => {
          if (lightboxIdx !== null) e.preventDefault();
        }}
      >

        {/* ── Full-width cover / placeholder ── */}
        {entry.cover ? (
          <div className="relative w-full h-48 sm:h-60 shrink-0 overflow-hidden">
            <img src={entry.cover} alt={entry.role} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-card/90" />
            <div className="absolute top-0 right-0 h-14 w-20 bg-linear-to-bl from-black/55 to-transparent" />
          </div>
        ) : (
          <div className="relative w-full h-40 sm:h-48 shrink-0 flex flex-col items-center justify-center gap-3 bg-linear-to-b from-teal/8 to-transparent border-b border-border/40">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/5 border border-border/40">
              <Icon size={28} strokeWidth={1.25} className="text-foreground/25" />
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <ImageIcon size={11} /> Cover photo coming soon
            </p>
          </div>
        )}

        {/* ── Body ── */}
        <div className={`flex-1 min-h-0 overflow-y-auto sm:overflow-hidden flex flex-col${hasPhotos ? " sm:flex-row" : ""}`}>

          {/* Text content */}
          <div className={`${hasPhotos ? "sm:flex-1" : "flex-1"} sm:overflow-y-auto px-6 sm:px-8 py-6 space-y-5`}>
            <DialogHeader className="space-y-2">
              <div className="flex items-start justify-between gap-4 pr-6">
                <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">
                  {entry.role}
                </DialogTitle>
                <span className="shrink-0 text-xs tabular-nums text-muted-foreground pt-1">{entry.year}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-teal/15 px-3 py-1 text-[11px] font-medium text-teal">
                  {entry.tag}
                </span>
                <span className="text-sm text-muted-foreground">{entry.org}</span>
              </div>
            </DialogHeader>

            <div className="h-px bg-border/50" />

            {descriptions.length > 0 ? (
              <div className="space-y-3">
                {descriptions.map((p, i) => (
                  <p key={i} className="text-sm sm:text-[15px] text-foreground/80 leading-relaxed">{p}</p>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-border/60 px-5 py-8 text-center">
                <p className="text-sm text-muted-foreground italic">Description coming soon.</p>
              </div>
            )}

            {entry.bullets && entry.bullets.length > 0 && (
              <div className="space-y-2">
                <p className="text-[10px] tracking-widest uppercase text-muted-foreground">
                  {entry.bulletsLabel ?? "Highlights"}
                </p>
                <ul className="space-y-2.5">
                  {entry.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/75 leading-relaxed">
                      <span className="mt-1.75 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Photos panel */}
          {hasPhotos ? (
            <>
              <div className="hidden sm:block w-px bg-border/40 shrink-0" />
              <div className="sm:w-[38%] shrink-0 sm:overflow-y-auto p-4 space-y-2.5 border-t border-border/40 sm:border-t-0">
                <p className="text-[10px] tracking-widest uppercase text-muted-foreground">Photos</p>
                <div className="grid grid-cols-2 gap-2">
                  {photos.map((src, idx) => (
                    <button
                      key={src}
                      onClick={() => openLightbox(idx)}
                      className="group relative overflow-hidden rounded-lg border border-border/40 aspect-square bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50"
                    >
                      <img src={src} alt="" className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/35">
                        <Maximize2
                          size={16}
                          className="text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 drop-shadow-lg"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : descriptions.length === 0 ? (
            /* If no description AND no photos, show photo placeholder in the right gutter on desktop */
            <div className="hidden sm:flex sm:w-[38%] shrink-0 flex-col items-center justify-center gap-3 border-l border-border/40 px-6">
              <div className="rounded-xl border border-dashed border-border/60 w-full py-10 flex flex-col items-center gap-2">
                <ImageIcon size={20} className="text-muted-foreground/40" />
                <p className="text-xs text-muted-foreground italic">Photos coming soon</p>
              </div>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>

    {lightboxIdx !== null && createPortal(
      <Lightbox
        photos={photos.map((src) => ({ src }))}
        index={lightboxIdx}
        onClose={closeLightbox}
        onPrev={prevPhoto}
        onNext={nextPhoto}
      />,
      document.body
    )}
    </>
  );
}

function StoryBlockView({ block }: { block: StoryBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-sm sm:text-[15px] text-foreground/80 leading-relaxed">{block.text}</p>;
    case "quote":
      return (
        <blockquote className="border-l-2 border-teal pl-4 sm:pl-5 text-sm sm:text-[15px] text-foreground/80 leading-relaxed italic">
          {block.text}
        </blockquote>
      );
    case "h":
      return <h4 className="text-base sm:text-lg font-bold tracking-tight">{block.text}</h4>;
    case "list":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/75 leading-relaxed">
              <span className="mt-1.75 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "items":
      return (
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="rounded-xl border border-border/50 bg-surface-elevated/60 px-4 py-3">
              <p className="text-sm font-semibold text-foreground/90">{item.title}</p>
              <p className="mt-1 text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
            </li>
          ))}
        </ul>
      );
    case "contact":
      return (
        <div className="rounded-xl border border-teal/25 bg-teal/5 px-5 py-4 space-y-1">
          {block.lines.map((line, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-[10px] tracking-widest uppercase text-teal mb-1"
                  : "text-sm text-foreground/75 leading-relaxed"
              }
            >
              {line}
            </p>
          ))}
        </div>
      );
    case "split":
      return (
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {[block.left, block.right].map((col, i) => (
            <div key={i} className="space-y-3">
              <h4 className="text-base sm:text-lg font-bold tracking-tight">{col.heading}</h4>
              <ul className="space-y-3">
                {col.items.map((item, j) => (
                  <li key={j} className="rounded-xl border border-border/50 bg-surface-elevated/60 px-4 py-3">
                    <p className="text-sm font-semibold text-foreground/90">{item.title}</p>
                    <p className="mt-1 text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "listSplit":
      return (
        <div className="grid sm:grid-cols-2 gap-x-8">
          {[block.left, block.right].map((col, i) => (
            <ul key={i}>
              {col.map((item, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/75 leading-relaxed">
                  <span className="mt-1.75 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      );
  }
}

function SlideDeck({ photos, onOpen }: { photos: CaptionedPhoto[]; onOpen: (idx: number) => void }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIndex((i) => (i + 1) % photos.length);

  return (
    <div className="space-y-5">
      <div className="relative mx-auto w-full max-w-3xl aspect-video">
        {[2, 1, 0].map((offset) => {
          const i = (index + offset) % photos.length;
          const isFront = offset === 0;
          return (
            <div
              key={offset}
              className={`absolute inset-0 rounded-2xl border border-border/40 bg-surface overflow-hidden shadow-lg transition-all duration-300 ${
                isFront ? "" : "pointer-events-none"
              }`}
              style={{
                transform: isFront ? "none" : `translateY(${offset * 10}px) scale(${1 - offset * 0.04})`,
                zIndex: 10 - offset,
                opacity: isFront ? 1 : 1 - offset * 0.3,
              }}
            >
              {isFront ? (
                <button
                  onClick={() => onOpen(index)}
                  className="group relative block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50"
                >
                  <img src={photos[i].src} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/35">
                    <Maximize2
                      size={20}
                      className="text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 drop-shadow-lg"
                    />
                  </div>
                </button>
              ) : (
                <img src={photos[i].src} alt="" className="h-full w-full object-cover" />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-surface-elevated text-foreground/70 transition hover:border-teal/50 hover:text-teal"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-sm tabular-nums text-muted-foreground">
          {index + 1} / {photos.length}
        </span>
        <button
          onClick={next}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-surface-elevated text-foreground/70 transition hover:border-teal/50 hover:text-teal"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

function TimelineGallery({ photos, onOpen }: { photos: CaptionedPhoto[]; onOpen: (idx: number) => void }) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-px bg-border sm:-translate-x-1/2" />
      <div className="space-y-10 sm:space-y-12">
        {photos.map((photo, idx) => {
          const flip = idx % 2 === 1;
          return (
            <div key={photo.src} className="relative pl-12 sm:pl-0">
              <span className="absolute left-4 top-2 sm:left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-teal bg-background" />
              <div className="sm:grid sm:grid-cols-2 sm:gap-10 items-center">
                <div className={flip ? "sm:col-start-2" : ""}>
                  <button
                    onClick={() => onOpen(idx)}
                    className="group block w-full overflow-hidden rounded-2xl border border-border/40 bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50"
                  >
                    <div className="relative aspect-4/3">
                      <img
                        src={photo.src}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/35">
                        <Maximize2
                          size={18}
                          className="text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 drop-shadow-lg"
                        />
                      </div>
                    </div>
                  </button>
                  {photo.caption && (
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-snug">{photo.caption}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StoryModal({ entry, onClose }: { entry: Entry; onClose: () => void }) {
  const sections = entry.story ?? [];
  const galleryPhotos = entry.storyGallery ?? [];
  const sectionPhotos = sections
    .map((s) => s.image)
    .filter((img): img is CaptionedPhoto => !!img);
  const photos = [...sectionPhotos, ...galleryPhotos];

  let counter = 0;
  const sectionImageIndices = sections.map((s) => (s.image ? counter++ : -1));

  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevPhoto = () => setLightboxIdx((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null));
  const nextPhoto = () => setLightboxIdx((i) => (i !== null ? (i + 1) % photos.length : null));

  useEffect(() => {
    window.history.pushState({ modal: true }, "");
    const popHandler = () => onClose();
    window.addEventListener("popstate", popHandler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("popstate", popHandler);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxIdx === null) window.history.back();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx]);

  return (
    <>
      <div className="fixed inset-0 z-100 bg-background overflow-y-auto">
        {/* Hero cover */}
        <div className="relative w-full h-64 sm:h-80 lg:h-96 shrink-0 overflow-hidden">
          {entry.cover && (
            <img src={entry.cover} alt={entry.role} className="w-full h-full object-cover object-top" />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-black/30" />
          <button
            onClick={() => window.history.back()}
            className="absolute top-5 left-5 sm:left-8 inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-sm text-white/80 px-4 py-2 text-sm transition hover:bg-black/60 hover:text-white"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <button
            onClick={() => window.history.back()}
            className="absolute top-5 right-5 sm:right-8 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/80 transition hover:bg-black/60 hover:text-white"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
            <div className="container mx-auto">
              <span className="inline-flex items-center rounded-full bg-teal/15 px-3 py-1 text-[11px] font-medium text-teal mb-3">
                {entry.tag}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                {entry.role}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-foreground/70">{entry.org} · {entry.year}</p>
            </div>
          </div>
        </div>

        {/* Story content */}
        <div className="container mx-auto px-6 py-12 sm:py-16 max-w-5xl space-y-16 sm:space-y-20">
          {sections.map((section, i) => {
            const hasImage = !!section.image;
            const imgIdx = sectionImageIndices[i];
            const flip = i % 2 === 1;
            return (
              <div
                key={i}
                className={`grid gap-8 items-center ${hasImage ? "lg:grid-cols-2 lg:gap-14" : "max-w-3xl mx-auto"}`}
              >
                <div className={`space-y-5 ${hasImage && flip ? "lg:order-2" : ""}`}>
                  <div className="space-y-1.5">
                    <p className="text-[11px] tracking-[0.25em] uppercase text-teal font-medium">{section.eyebrow}</p>
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">{section.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {section.blocks.map((block, j) => (
                      <StoryBlockView key={j} block={block} />
                    ))}
                  </div>
                </div>
                {hasImage && section.image && (
                  <figure className={`space-y-3 ${flip ? "lg:order-1" : ""}`}>
                    <button
                      onClick={() => openLightbox(imgIdx)}
                      className="group block w-full overflow-hidden rounded-2xl border border-border/40 bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50"
                    >
                      <div className="relative aspect-4/5 sm:aspect-3/4 lg:aspect-square">
                        <img
                          src={section.image.src}
                          alt=""
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/35">
                          <Maximize2
                            size={20}
                            className="text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 drop-shadow-lg"
                          />
                        </div>
                      </div>
                    </button>
                    {section.image.caption && (
                      <figcaption className="text-sm text-muted-foreground italic text-center px-2">
                        {section.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </div>
            );
          })}

          {/* Closing photo gallery */}
          {galleryPhotos.length > 0 && (
            <div className="space-y-6">
              <div className="space-y-1.5 max-w-3xl mx-auto">
                <p className="text-[11px] tracking-[0.25em] uppercase text-teal font-medium">
                  {entry.galleryEyebrow ?? "Photos"}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                  {entry.galleryTitle ?? "Moments Along the Way"}
                </h3>
              </div>
              {entry.galleryVariant === "deck" ? (
                <SlideDeck
                  photos={galleryPhotos}
                  onOpen={(idx) => openLightbox(sectionPhotos.length + idx)}
                />
              ) : entry.galleryVariant === "timeline" ? (
                <TimelineGallery
                  photos={galleryPhotos}
                  onOpen={(idx) => openLightbox(sectionPhotos.length + idx)}
                />
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                  {galleryPhotos.map((photo, idx) => (
                    <button
                      key={photo.src}
                      onClick={() => openLightbox(sectionPhotos.length + idx)}
                      className="group space-y-2 text-left focus-visible:outline-none"
                    >
                      <div className="relative overflow-hidden rounded-xl border border-border/40 aspect-square bg-surface">
                        <img
                          src={photo.src}
                          alt=""
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/35">
                          <Maximize2
                            size={18}
                            className="text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 drop-shadow-lg"
                          />
                        </div>
                      </div>
                      {photo.caption && (
                        <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{photo.caption}</p>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </>
  );
}

function EntryCard({ e, onClick }: { e: Entry; onClick: () => void }) {
  const Icon = e.Icon;
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(ev) => { if (ev.key === "Enter" || ev.key === " ") onClick(); }}
      className="group relative overflow-hidden rounded-2xl bg-surface-elevated border border-border/60 cursor-pointer transition-all duration-300 hover:border-teal/60 hover:shadow-[0_8px_40px_-12px_color-mix(in_oklab,var(--teal)_35%,transparent)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50"
    >
      {/* Cover image or icon placeholder */}
      {e.cover ? (
        <div className="relative h-40 overflow-hidden">
          <img
            src={e.cover}
            alt={e.role}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-surface-elevated/80 to-transparent" />
        </div>
      ) : (
        <div className="relative flex h-40 items-center justify-center bg-linear-to-b from-teal/5 to-transparent">
          <Icon size={52} strokeWidth={1.25} className="text-foreground/12" />
          <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5 text-foreground/35">
            <Icon size={15} strokeWidth={1.75} />
          </span>
        </div>
      )}

      <div className="p-5 sm:p-6 space-y-3">
        <span className="inline-flex items-center rounded-full bg-teal/15 px-3 py-1 text-[11px] font-medium text-teal">
          {e.tag}
        </span>
        <div>
          <h3 className="text-base sm:text-[17px] font-bold tracking-tight leading-snug">{e.role}</h3>
          <p className="mt-1 text-sm text-foreground/55 leading-snug">{e.org}</p>
        </div>
        <p className="text-xs font-medium text-teal/80 tabular-nums">{e.year}</p>
      </div>
    </article>
  );
}

function SubSection({
  label,
  subtitle,
  entries,
  onOpen,
}: {
  label: string;
  subtitle: string;
  entries: Entry[];
  onOpen: (e: Entry) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? entries : entries.slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="flex items-baseline gap-4">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{label}</h3>
        <span className="text-sm text-muted-foreground">{subtitle}</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((e) => (
          <EntryCard key={`${e.role}-${e.org}`} e={e} onClick={() => onOpen(e)} />
        ))}
      </div>
      {entries.length > 3 && (
        <div className="flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium text-foreground/80 hover:border-teal/50 hover:text-teal transition"
          >
            {expanded ? <><Minus size={14} /> Show Less</> : <><Plus size={14} /> Show All {label} Roles</>}
          </button>
        </div>
      )}
    </div>
  );
}

export function Leadership() {
  const [active, setActive] = useState<Entry | null>(null);
  const [story, setStory] = useState<Entry | null>(null);

  const handleOpen = (e: Entry) => {
    if (e.story) setStory(e);
    else setActive(e);
  };

  return (
    <section id="leadership" className="py-28 sm:py-36">
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Leadership</h2>
        </div>

        <div className="space-y-16">
          <SubSection label="Texas State" subtitle="San Marcos, TX" entries={txst} onOpen={handleOpen} />
          <SubSection label="Nepal" subtitle="Kathmandu" entries={nepal} onOpen={handleOpen} />
        </div>
      </div>

      {active && (
        <EntryModal entry={active} open={!!active} onClose={() => setActive(null)} />
      )}

      {story && <StoryModal entry={story} onClose={() => setStory(null)} />}
    </section>
  );
}
