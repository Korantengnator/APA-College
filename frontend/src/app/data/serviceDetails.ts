// Content for the four service pages, taken from the Figma designs.
// IMPORTANT: the numbers (stats) and testimonials below are SAMPLE content from the design.
// Replace them with real, verified figures and quotes before the site goes live.

export type HeroColor = "white" | "yellow" | "red";

export interface HeroSegment {
  text: string;
  color?: HeroColor;
}

export interface OfferCard {
  title: string;
  summary: string; // short text shown on the card
  details: string[]; // full text shown in the "Read more" popup (placeholder second paragraph)
  tag?: string; // small label on the card (e.g. "English Proficiency")
  meta?: string; // extra line at the bottom of the card (e.g. target score and duration)
}

export interface ApproachCard {
  title: string;
  paragraphs: string[];
  bullets?: string[]; // optional list, shown after the first paragraph
}

export interface Faq {
  question: string;
  answer: string;
}

export interface PricingPlan {
  title: string;
  badge: string;
  summary: string;
  points: string[];
}

export interface ServiceDetail {
  path: string;
  flyers?: { src: string; alt: string }[]; // shown as a slideshow beside the hero text; without flyers the hero is centred
  flyerAspect?: "square" | "portrait"; // shape of the slideshow frame (default square)
  flyerPlaceholder?: boolean; // true: keep the text on the left and show an empty flyer box on the right until flyers exist
  hero: {
    eyebrow: string;
    lines: HeroSegment[][]; // one array per line of the headline
    description: string;
    buttons: { label: string; variant: "primary" | "outline" }[];
  };
  intro?: {
    heading: string;
    text: string;
    pillarsTitle: string;
    pillars: { title: string; text: string }[];
    closing: string;
  };
  offer: {
    eyebrow?: string;
    title: string;
    subtitle: string;
    cards: OfferCard[];
  };
  band?: {
    eyebrow: string;
    title: string;
    items?: string[]; // name chips
    logosTitle?: string; // small heading above the logos
    logos?: { name: string; file: string }[]; // files live in public/logos
  };
  approach:
    | {
        kind: "steps";
        eyebrow: string;
        title: string;
        subtitle: string;
        steps: { title: string; text: string }[];
      }
    | {
        kind: "cards";
        eyebrow: string;
        title: string;
        cards: ApproachCard[];
      };
    stats: { value: string; label: string }[];
  showTestimonials?: boolean;
  testimonialsTitle?: string;
  testimonials: { quote: string; name: string; role: string }[];
  // Programme options shown after the logos (no prices on purpose: visitors are asked to contact ACES for a quote)
  plans?: { eyebrow: string; title: string; subtitle: string; items: PricingPlan[]; note: string };
  faqs?: Faq[]; // FAQ accordion. Only questions with a confirmed answer are listed here.
  cta: { title: string; text: string };
}

// Full text shown in each card's Read more popup (drafted from your answers and designs; please review).
const DETAILS: Record<string, string[]> = {
  "Digital SAT": [
    "Our Digital SAT preparation is built for students aiming at admission to US universities and at merit scholarships. Lessons follow the adaptive, computer-based format of the test, so students practise the way they will be assessed.",
    "We build your plan around your target score and your aptitude. You can take the general class, a group programme on fixed days, or a personalized class that is scheduled around you. Both include mock tests after every two weeks of lessons, and we handle the study materials. Sessions run online or in person, and we can help you register for the exam, which costs extra.",
  ],
  "IELTS": [
    "IELTS preparation covers all four skills: listening, reading, writing and speaking. Students learn the question types, the marking criteria and the strategies that help them show their full ability on test day, and practice work is marked the way examiners mark it.",
    "We build your plan around your target score and your aptitude. You can take the general class, a group programme on fixed days, or a personalized class that is scheduled around you. Both include mock tests after every two weeks of lessons, and we handle the study materials. Sessions run online or in person, and we can help you register for the exam, which costs extra.",
  ],
  "TOEFL": [
    "TOEFL preparation focuses on the academic English used for admission to North American universities. Students practise the integrated tasks that combine reading, listening, speaking and writing, and learn how to manage their time in each section.",
    "We build your plan around your target score and your aptitude. You can take the general class, a group programme on fixed days, or a personalized class that is scheduled around you. Both include mock tests after every two weeks of lessons, and we handle the study materials. Sessions run online or in person, and we can help you register for the exam, which costs extra.",
  ],
  "Pearson Test of English": [
    "The Pearson Test of English is taken on a computer and returns results quickly, which suits visa and migration timelines. Our preparation helps students become comfortable with the computer-based format and the different task types.",
    "We build your plan around your target score and your aptitude. You can take the general class, a group programme on fixed days, or a personalized class that is scheduled around you. Both include mock tests after every two weeks of lessons, and we handle the study materials. Sessions run online or in person, and we can help you register for the exam, which costs extra.",
  ],
  "Occupational English Test": [
    "The Occupational English Test is designed for healthcare professionals such as nurses, doctors and pharmacists who need international registration or work abroad. Preparation focuses on the communication tasks of your profession, in speaking, listening, reading and writing.",
    "We build your plan around your target score and your aptitude. You can take the general class, a group programme on fixed days, or a personalized class that is scheduled around you. Both include mock tests after every two weeks of lessons, and we handle the study materials. Sessions run online or in person, and we can help you register for the exam, which costs extra.",
  ],
  "LanguageCert": [
    "We prepare candidates for LanguageCert English exams, including the UKVI tests accepted for visa applications. Students learn the exam format and practise listening, reading, writing and speaking until they are ready.",
    "We build your plan around your target score and your aptitude. You can take the general class, a group programme on fixed days, or a personalized class that is scheduled around you. Both include mock tests after every two weeks of lessons, and we handle the study materials. Sessions run online or in person, and we can help you register for the exam, which costs extra.",
  ],
  "Skills for English": [
    "Skills for English (SELT) exams assess listening, reading, writing and speaking, and are offered at levels from A1 to C2. We help you choose the right level and prepare for each skill, with regular practice and feedback.",
    "We build your plan around your target score and your aptitude. You can take the general class, a group programme on fixed days, or a personalized class that is scheduled around you. Both include mock tests after every two weeks of lessons, and we handle the study materials. Sessions run online or in person, and we can help you register for the exam, which costs extra.",
  ],
  "Personalized academic support": [
    "We support students of all ages in every curriculum taught in English, and across all subjects, including Math, English and Science. Language subjects such as French are not covered. Support can be one-on-one or in a small group, matched to the student's curriculum and level.",
    "Sessions can take place at home, at our office or online. We take parents' contact details and send feedback after every session, and how often sessions run depends on how urgent your need is.",
  ],
  "Academic diagnostic assessments": [
    "Before building a plan, we find out where a student really stands. You take our questionnaires and tests, and we review your transcripts and your marked exam scripts.",
    "We also look at how you think and how you answer questions. Then we give you feedback on what we found, so the support that follows targets the real gaps.",
  ],
  "Curriculum fit assessment": [
    "Choosing between Cambridge, IB, AP, WASSCE and other systems is a big decision. We help you compare the options against your goals and strengths, so the curriculum fits the student, not the other way round.",
    "If you decide to switch curricula, our curriculum bridging service supports the move.",
  ],
  "Subject and course selection": [
    "The subjects a student chooses can open or close doors later. We help you choose subjects and courses that match your strengths, the entry requirements of your target universities, and your long-term career direction.",
    "We help you think through the options before you commit, so your choices work together.",
  ],
  "School selection and application advisory": [
    "We help you decide on the right school and then help you apply. This covers any school you want to move to or apply to.",
    "If the school has an entrance exam, we prepare you for it, so you go into the application confident.",
  ],
  "Upper secondary project support": [
    "Guidance for students working on upper secondary projects and coursework, from choosing a topic to completing and presenting it.",
    "Tell us about your project and your school's requirements, and we will plan the support around them.",
  ],
  "Home tuition": [
    "One-on-one tutoring in your own home, matched to your child's curriculum, level and schedule. Home tuition costs extra, and we cover all areas around Accra.",
    "We take parents' contact details and send feedback after every session, so you always know how your child is progressing.",
  ],
  "Home schooling advisory": [
    "Homeschooling is not right for every child. We assess the home environment, the student, the parents and the curriculum you want to teach, and then advise whether homeschooling is advisable.",
    "If you go ahead, we advise on what to do and what to avoid, common mistakes families make, and teachers you should consult.",
  ],
  "Personalized academic coaching": [
    "Coaching tailored to the student. We start by understanding strengths, challenges and circumstances, then agree on goals, study strategies and a routine the student can keep.",
    "It suits students who need structure and accountability, and it can be combined with tutoring.",
  ],
  "Local & international university application counseling": [
    "We help you choose the right universities, in Ghana and abroad, and guide you through the application. This includes your essays, your interviews and your scholarship strategy.",
    "We help clients from around the world, including Mali, South Africa, the UK, the United States, Canada, Ghana and Kenya. We help you apply for scholarships, but we cannot guarantee admission or an award.",
  ],
  "Career exploration and assessment": [
    "We counsel students on their career path using their transcripts, their personality and career assessments. The same process helps parents plan for their children and helps professionals check whether their current career suits them.",
    "The assessment takes between three days and a week. If you want to see a career in practice, job shadowing can follow.",
  ],
  "Job shadowing coordination": [
    "Once the assessments show where your interests lie, we arrange a job shadowing placement. We find an organization in the sector you are interested in, and you spend time with a professional there.",
    "You see what working life in that organization is really like, learn from the professional, and find out whether you truly want that career.",
  ],
  "Academic and professional pathway coaching": [
    "Long-term coaching that connects subject choices, university plans and career goals into one roadmap. We counsel students on their path, and we help parents plan the best route for their children.",
    "Working professionals can use it to plan out their careers and decide on their next steps.",
  ],
  "Career transition coaching": [
    "Support for working professionals who want to change careers or industries, or who want to check whether their current career is the right one. We help you assess where you are and plan the move.",
    "This includes pathways such as nurse-to-Europe, which involve passing one professional test and applying for a scholarship, with the visa following as part of the process. Contact us to discuss your situation.",
  ],
  "Teacher and non-teaching staff recruitment": [
    "We recruit qualified teachers, matched to your curriculum, culture and vision, and we recruit non-teaching staff such as administrators, counselors and finance officers with the same rigor.",
    "We post the vacancies, interview candidates and check their backgrounds, and we work with a network of partners who help us recruit. We work with universities, international schools and basic schools.",
  ],
  "Human resource planning": [
    "We help your institution plan the people side of its growth: staffing models, compensation strategy, retention programs and HR policy manuals.",
    "The aim is a structure that is sustainable, so your institution can grow without being held back by unclear or outdated HR practice.",
  ],
  "Job design analysis": [
    "We define roles clearly. That means competency frameworks and job descriptions that remove confusion and overlap between positions.",
    "When everyone knows who is responsible for what, teams work better and leaders can manage more effectively.",
  ],
  "Performance management systems": [
    "We help you put in place goal-setting, evaluation frameworks and feedback systems that drive accountability and growth.",
    "The result is a clear, fair way to measure performance and support staff in improving it.",
  ],
  "School accreditation acquisition support": [
    "We help a school that is starting out get the accreditation it needs in the field it wants, including IB, Cambridge, CIS and GES. We start with readiness assessments and help you plan your organizational structure and use your resources effectively.",
    "We approach the accrediting body, such as GTEC, and submit the application on your behalf, so you can focus on running the school.",
  ],
  "School operations audit": [
    "A full review of how your school runs. The audit covers the whole organization: its structure, duplicated roles, and ways to work more efficiently without wasting resources.",
    "The report goes to the head of school or whoever requested the audit, with clear findings on where the school can improve.",
  ],
};

const card = (
  title: string,
  summary: string,
  extra: { tag?: string; meta?: string } = {}
): OfferCard => ({
  title,
  summary,
  details: DETAILS[title] ?? [summary],
  ...extra,
});

export const serviceDetails: ServiceDetail[] = [
  // ---------------------------------------------------------------- EXAM PREPARATION
  {
    path: "/services/exam-preparation",
    flyers: [
      { src: "/flyer1.png", alt: "ACES exam preparation flyer: TOEFL, IELTS and PTE" },
      { src: "/flyer2.png", alt: "ACES Skills for English test preparation flyer" },
    ],
    hero: {
      eyebrow: "Exam Preparation Services",
      lines: [
        [{ text: "Achieve Your Best" }],
        [{ text: "Scores.", color: "yellow" }],
        [
          { text: "Unlock Global " },
          { text: "Opportunities", color: "red" },
          { text: "." },
        ],
      ],
      description:
        "Comprehensive preparation for IELTS, TOEFL, SAT, OET, and other international examinations with proven methodologies, expert tutors, and personalized learning strategies that deliver results.",
      buttons: [
        { label: "Start Your Preparation Today", variant: "primary" },
        { label: "Book for Assessment", variant: "outline" },
      ],
    },
    intro: {
      heading: "World-Class Exam Preparation, Delivered in Africa.",
      text: "At ACES, exam preparation goes beyond memorization and practice tests. We provide strategic, comprehensive preparation that builds genuine competency while equipping you with test-taking strategies that maximize your performance.",
      pillarsTitle: "Our Approach Is Built On Three Pillars:",
      pillars: [
        {
          title: "Internationally Benchmarked Materials",
          text: "We use official preparation resources, authenticated practice tests, and materials aligned with current exam formats and standards set by testing organizations like Cambridge, ETS, and Pearson.",
        },
        {
          title: "Expert, Experienced Tutors",
          text: "Our instructors have extensive experience preparing students for international exams, many having achieved top scores themselves and possessing deep understanding of exam patterns, common pitfalls, and scoring criteria.",
        },
        {
          title: "Personalized Learning Pathways",
          text: "Every student receives a customized study plan based on diagnostic assessment, target scores, timeline, and learning style. We don't use one-size-fits-all approaches. Your preparation is as unique as your goals.",
        },
      ],
      closing:
        "Whether you're a student seeking university admission, a professional pursuing international career opportunities, or anyone requiring certified English proficiency, ACES provides the structure, expertise, and support you need to succeed.",
    },
    offer: {
      title: "Comprehensive Exam Coverage",
      subtitle:
        "From English proficiency to academic assessments, we prepare you for the exams that open doors worldwide.",
      cards: [
        card(
          "Digital SAT",
          "Adaptive-format preparation for US university admission and merit scholarship competitiveness.",
          { tag: "Academic", meta: "Target: 1200–1550+" }
        ),
        card(
          "IELTS",
          "Listening, reading, writing and speaking preparation with weekly mock tests and examiner-style feedback.",
          { tag: "English Proficiency", meta: "Target: Band 6.5–8.5" }
        ),
        card(
          "TOEFL",
          "Academic English preparation for North American university admission, with integrated-task strategy.",
          { tag: "English Proficiency", meta: "Target: 80–110+" }
        ),
        card(
          "Pearson Test of English",
          "Computer-based preparation with fast turnaround, ideal for visa and migration timelines.",
          { tag: "English Proficiency", meta: "Target: 50–85+" }
        ),
        card(
          "Occupational English Test",
          "Profession-specific preparation for nurses, doctors and pharmacists seeking international registration.",
          { tag: "Healthcare", meta: "Target: Grade B–A" }
        ),
        card(
          "LanguageCert",
          "Preparation for LanguageCert English tests, including the UKVI tests used for visa applications.",
          { tag: "English Proficiency" }
        ),
        card(
          "Skills for English",
          "Listening, reading, writing and speaking preparation with weekly mock tests and examiner-style feedback.",
          { tag: "English Proficiency", meta: "Target: Grade B1–A1" }
        ),
      ],
    },
    band: {
      eyebrow: "Recognised worldwide",
      title: "Exams We Prepare You For",
      logos: [
        { name: "IELTS", file: "ielts.png" },
        { name: "TOEFL", file: "toefl.png" },
        { name: "Pearson", file: "pearson.png" },
        { name: "OET", file: "oet.png" },
        { name: "SAT", file: "sat.png" },
        { name: "LanguageCert", file: "languagecert.png" },
        { name: "Skills for English", file: "skills-for-english.png" },
        { name: "Praxis", file: "praxis.png" },
      ],
    },
    plans: {
      eyebrow: "Our programmes",
      title: "Choose how you prepare",
      subtitle: "Two ways to prepare for any exam we cover. Both include mock tests, and we handle the study materials.",
      items: [
        {
          title: "General class",
          badge: "Group",
          summary: "A structured group programme that runs on fixed days.",
          points: [
            "8 weeks, with 2 sessions a week",
            "2 hours per session, 16 sessions in total",
            "Fixed days, the same for everyone in the class",
            "If you miss a session, it counts against you",
            "A mock test after every two weeks of lessons",
            "Online or in person",
          ],
        },
        {
          title: "Personalized class",
          badge: "Flexible",
          summary: "Scheduled around you and your target.",
          points: [
            "You choose the days and how often you meet",
            "Around 16 sessions, but not fixed: fewer if you are ready sooner, more if you need it",
            "Mock tests included",
            "Online or in person",
            "A good next step if you finish the general class and want more time",
          ],
        },
      ],
      note: "Fees depend on the programme you choose, so please contact us for a quote. Exam registration fees are not included, and if you want us to register you for an exam, that costs extra.",
    },
    approach: {
      kind: "steps",
      eyebrow: "Our Process",
      title: "How We Prepare You for Success",
      subtitle:
        "Our proven 5-step methodology ensures comprehensive preparation, continuous improvement, and exam-day confidence.",
      steps: [
        {
          title: "Diagnostic Assessment",
          text: "Full-length practice test to identify your baseline and target gap.",
        },
        {
          title: "Personalized Plan",
          text: "A study pathway matched to your score goal and timeline.",
        },
        {
          title: "Expert Instruction",
          text: "Strategy-focused teaching from experienced exam tutors.",
        },
        {
          title: "Practice & Feedback",
          text: "Weekly mock tests with detailed, examiner-style feedback.",
        },
        {
          title: "Exam Readiness",
          text: "Final simulation and confidence-building before test day.",
        },
      ],
    },
    stats: [
      { value: "95%+", label: "First Attempt Pass Rate" },
      { value: "7.0", label: "Average IELTS Score" },
      { value: "50+", label: "Students Prepared Annually" },
      { value: "4+", label: "Countries Represented" },
    ],
    showTestimonials: false,
    testimonialsTitle: "What Our Students Say",
    testimonials: [
      {
        quote:
          "ACES prepared me thoroughly. I scored 7.5 overall and received admission to my dream university in London. The tutors were genuinely invested in my success.",
        name: "Kwame A.",
        role: "IELTS → UK University",
      },
      {
        quote:
          "Thanks to ACES, I passed OET on the first attempt and secured a nursing position in Germany. They changed my career trajectory completely.",
        name: "Dr. Ama M.",
        role: "OET → Germany",
      },
      {
        quote:
          "My SAT score of 1450 earned me a scholarship offer from my first-choice US University.",
        name: "Kofi B.",
        role: "Digital SAT",
      },
    ],
    faqs: [
      { question: "Are you an official test centre?", answer: "No. We prepare students for their exams, and we can help you register. Help with registration costs extra." },
      { question: "Do you prepare students for other exams?", answer: "Yes. Tell us the exam you need and we will prepare you for it." },
      { question: "How long does preparation take?", answer: "The general class runs for 8 weeks, with two 2-hour sessions a week. If you need more time, you can move to a personalized class. In total, preparation takes 16 weeks at most." },
      { question: "What is the difference between the general class and the personalized class?", answer: "The general class is a group programme on fixed days. If you miss a session, it counts against you. In the personalized class you choose the days and how often you meet, and the number of sessions is not fixed, so you can have fewer or more depending on your need. Both include mock tests, and we handle the study materials." },
      { question: "How often are the mock tests?", answer: "We run a mock test after every two weeks of lessons, in both programmes." },
      { question: "Are sessions online or in person?", answer: "Both. You choose the option that suits you." },
      { question: "How much does preparation cost?", answer: "Fees depend on the programme you choose, so please contact us for a quote. Exam registration fees are not included. If you want us to register you for the exam, that costs extra." },
      { question: "Can I continue preparing if I am not ready?", answer: "Yes. If you finish the general class and do not feel ready, you can move to a personalized class to keep preparing." },
      { question: "Can someone take the exam for me?", answer: "No. We prepare you to sit the exam yourself. We have no arrangement for anyone to take a test on a client's behalf." },
    ],
    cta: {
      title: "Ready to Achieve Your Target Score?",
      text: "Book a free consultation and get a personalized preparation plan.",
    },
  },

  // ---------------------------------------------------------------- ACADEMIC SUPPORT
  {
    path: "/services/academic-support",
    flyers: [
      { src: "/flyer4.png", alt: "ACES home schooling and extra academic support flyer" },
    ],
    hero: {
      eyebrow: "Academic Support Services",
      lines: [
        [
          { text: "From " },
          { text: "Struggling", color: "red" },
          { text: " to" },
        ],
        [{ text: "Thriving", color: "yellow" }, { text: ":" }],
        [{ text: "Academic Support That Works" }],
      ],
      description:
        "Personalized tutoring, curriculum guidance, and academic coaching across Cambridge, IB, AP, WASSCE, and other major curricula, matched to how your child actually learns.",
      buttons: [{ label: "Book your Academic Assessment Today", variant: "primary" }],
    },
    offer: {
      eyebrow: "What We Offer",
      title: "Comprehensive Academic Support",
      subtitle: "From one-on-one tutoring to full curriculum planning, we meet you where you are.",
      cards: [
        card(
          "Personalized academic support",
          "One-on-one or small group tutoring across Math, Sciences, English, and more, matched to your curriculum and level."
        ),
        card(
          "Academic diagnostic assessments",
          "A thorough evaluation of current standing, learning style, and specific gaps before we build your plan."
        ),
        card(
          "Curriculum fit assessment",
          "Expert guidance choosing between Cambridge, IB, AP, WASSCE, and other systems based on goals and strengths."
        ),
        card(
          "Subject and course selection",
          "Strategic subject choices aligned with university requirements and long-term career direction."
        ),
        card(
          "School selection and application advisory",
          "Support choosing and applying to the right school, including entrance exam preparation."
        ),
        card(
          "Upper secondary project support",
          // PLACEHOLDER description: replace with final text
          "Guidance on upper secondary projects and coursework, from choosing a topic to completing and presenting it."
        ),
        card(
          "Home tuition",
          "In-home tutoring matched to your child's curriculum, level and schedule."
        ),
        card(
          "Home schooling advisory",
          "Full homeschooling advisory, including curriculum planning and assessment."
        ),
      ],
    },
    band: {
      eyebrow: "Curricula We Support",
      title: "Expert Support Across All Major Systems",
      logos: [
        { name: "International Baccalaureate (IB)", file: "ib.png" },
        { name: "Pearson Edexcel", file: "pearson.png" },
        { name: "Cambridge Assessment International Education", file: "cambridge.png" },
        { name: "Ghana Education Service", file: "ges.png" },
        { name: "Canadian curriculum (EduCanada)", file: "educanada.png" },
        { name: "AP (College Board)", file: "ap.png" },
      ],
    },
    approach: {
      kind: "steps",
      eyebrow: "Our Process",
      title: "Our Tutoring Approach",
      subtitle: "Why ACES Tutoring Delivers Results",
      steps: [
        { title: "Diagnostic-Driven", text: "Every plan starts with data, not assumptions." },
        {
          title: "Subject Specialists",
          text: "Tutors who've mastered the exact curriculum you're studying.",
        },
        { title: "Concept Mastery", text: "Deep understanding over memorization or cramming." },
        { title: "Continuous Feedback", text: "Regular progress reports and plan adjustments." },
      ],
    },
    stats: [
      { value: "85%+", label: "Grade Improvement Rate" },
      { value: "12+", label: "Subjects Covered" },
      { value: "50+", label: "Students Tutored Annually" },
      { value: "4.8/5", label: "Average Tutor Rating" },
    ],
    showTestimonials: false,
    testimonials: [
      {
        quote:
          "I went from struggling in Mathematics to winning an academic competition. The personalized attention gave me confidence I never had.",
        name: "Kwame A.",
        role: "IGCSE Student",
      },
      {
        quote:
          "Her grades improved to A/A* in one term, and she now genuinely enjoys the subjects she used to dread.",
        name: "Akosua A.",
        role: "Parent",
      },
      {
        quote:
          "The tutor started from basics and built my understanding step by step. I finally passed Core Math with confidence.",
        name: "Kofi B.",
        role: "WASSCE Candidate",
      },
    ],
    faqs: [
      { question: "Which curricula and age groups do you support?", answer: "We support all age groups in every curriculum taught in English." },
      { question: "Which subjects can you tutor?", answer: "All subjects, including Math, English and Science. We do not teach French or other languages." },
      { question: "Do you offer home tuition?", answer: "Yes, at an extra cost. We cover all areas around Accra." },
      { question: "How does the diagnostic assessment work?", answer: "You take our questionnaires and tests, and we review your transcripts and marked exam scripts. We look at how you think and how you answer questions, then give you feedback on the results." },
      { question: "How often are sessions, and how are parents updated?", answer: "We take parents' contact details and send feedback after every session. How often sessions run depends on how urgent your need is." },
      { question: "Can you help my child switch curricula?", answer: "Yes. Curriculum bridging is one of our services." },
      { question: "Which schools do you help with applications?", answer: "Any school you want to move to or apply to. We help with the application and prepare you for any entrance exam." },
      { question: "What does homeschooling advisory include?", answer: "We assess the home environment, the student, the parents and the curriculum, and advise whether homeschooling is right for your child. We also advise on do's and don'ts, common mistakes, and teachers you should consult." },
    ],
    cta: {
      title: "Ready to See Your Child Thrive?",
      text: "Book a free consultation and get a personalized academic support plan.",
    },
  },

  // ---------------------------------------------------------------- CAREER COUNSELING
  {
    path: "/services/career-counseling",
    flyers: [
      { src: "/flyers/career-exploration-program.jpg", alt: "ACES career exploration and job shadowing program flyer" },
    ],
    hero: {
      eyebrow: "Academic & Career Counseling",
      lines: [
        [{ text: "Your Education." }],
        [{ text: "Your Career." }],
        [{ text: "Strategically Aligned." }],
      ],
      description:
        "Personalized counseling that connects your academic choices to your career aspirations, from subject selection and university applications to career exploration and job shadowing.",
      buttons: [{ label: "Book your Career Consultation Today", variant: "primary" }],
    },
    offer: {
      eyebrow: "What We Offer",
      title: "Comprehensive Counseling Services",
      subtitle: "Strategic guidance at every stage: from choosing subjects to planning a career pivot.",
      cards: [
        card(
          "Personalized academic coaching",
          "Goal setting, study strategies, and time management support for students who need structure and accountability."
        ),
        card(
          "Local & international university application counseling",
          "Local and international application support: university selection, essays, interviews, and scholarship strategy."
        ),
        card(
          "Career exploration and assessment",
          "Interest, personality, and values assessments paired with real-world research to find genuine career fit."
        ),
        card(
          "Job shadowing coordination",
          "Connecting students with professionals across healthcare, business, law, and tech through our partner network."
        ),
        card(
          "Academic and professional pathway coaching",
          "Long-term coaching linking subject choices, university plans, and career goals into one coherent roadmap."
        ),
        card(
          "Career transition coaching",
          "Support for working professionals changing careers or industries, including nurse-to-Europe pathways."
        ),
      ],
    },
    band: {
      eyebrow: "Where our students go",
      title: "University Placement Across the Globe",
      items: [
        "Ghana",
        "Germany",
        "United States",
        "Canada",
        "United Kingdom",
        "South Africa",
        "European Union",
      ],
    },
    approach: {
      kind: "cards",
      eyebrow: "Our Approach",
      title: "Why ACES Counseling Makes the Difference",
      cards: [
        {
          title: "You're Not a Number, You're a Person.",
          paragraphs: [
            "We don't use one-size-fits-all formulas. Your strengths, interests, values, circumstances, and dreams are unique. Every counseling journey starts with deep listening and genuine understanding of who you are and what you want.",
            "We don't push you toward \"safe\" or \"prestigious\" paths that don't fit you. We help you discover YOUR path, even if it's unconventional.",
          ],
        },
        {
          title: "Global Perspective, Local Context",
          paragraphs: [
            "We understand international educational systems and global career markets while deeply respecting Ghanaian and African realities.",
            "We won't give you advice that works in the US but fails in Ghana. We bridge global opportunities with local starting points, helping you navigate both worlds successfully.",
          ],
        },
        {
          title: "Data-Driven, Evidence-Based Guidance",
          paragraphs: [
            "Our recommendations are grounded in validated career assessments, university admission trends, labor market research, alumni outcomes, scholarship patterns, and industry growth projections.",
            "We don't guess. We research, analyze, and advise based on evidence.",
          ],
        },
        {
          title: "Partnership, Not Dictatorship",
          paragraphs: [
            "We're your advisors, not your decision-makers. We provide information, frameworks, and guidance, but ultimately, you (or your family) make the decisions.",
            "We respect your autonomy while offering expert perspective. If we disagree with a choice, we'll explain why, but we'll support you regardless.",
          ],
        },
        {
          title: "Network & Connections",
          paragraphs: [
            "Through our partnerships with universities, professional organizations, and corporations, we connect you with current students, alumni who've walked your path, professionals in your fields of interest, and internship or job shadowing opportunities.",
            "Our network is your advantage.",
          ],
        },
        {
          title: "Long-Term Success, Not Just Admission",
          paragraphs: [
            "Getting into university is important, but graduating, thriving, and launching a successful career is the real goal.",
            "We don't just help you get IN, we help you succeed AFTER admission by ensuring good fit, realistic expectations, and strategic planning for your entire journey.",
          ],
        },
      ],
    },
    stats: [
      { value: "85%+", label: "University Admission Success Rate" },
      { value: "60%+", label: "Scholarship Award Rate" },
      { value: "50+", label: "Students Counseled Annually" },
      { value: "6+", label: "Countries Represented" },
    ],
    showTestimonials: false,
    testimonials: [
      {
        quote:
          "Twelve months later, I'm a Data Analyst at a fintech company, loving my work and earning more than in banking.",
        name: "Kwame A.",
        role: "Career Transition",
      },
      {
        quote:
          "ACES gave me permission to follow my passion while showing my parents it was a viable path. It didn't just get me into university, it helped me find myself.",
        name: "Akosua A.",
        role: "Columbia University",
      },
      {
        quote:
          "Every step was new and confusing, but they guided me through everything. My life has completely transformed.",
        name: "Abena T.",
        role: "Nurse, Germany",
      },
    ],
    faqs: [
      { question: "Who is career counseling for?", answer: "Students, parents and working professionals. We guide students using their transcripts, personality and career assessments. We help parents plan their children's paths. We help professionals who want to switch careers, check whether their current career suits them, or plan their next steps." },
      { question: "Which countries do you help with?", answer: "We help with applications around the world. We have supported clients from Mali, South Africa, the UK, the United States, Canada, Ghana and Kenya." },
      { question: "Do you help with scholarships?", answer: "Yes, we help you apply. We cannot guarantee that an award will be made." },
      { question: "How long does the career assessment take?", answer: "Between three days and a week." },
      { question: "How does job shadowing work?", answer: "After the assessments show where your interests lie, we place you with an organization in your chosen sector. You spend time with a professional and see what the work is really like, so you can tell whether you truly want that career." },
      { question: "What does the nurse-to-Europe pathway involve?", answer: "The pathway involves passing one professional test and applying for a scholarship, with the visa following as part of the process. Contact us to discuss your situation." },
      { question: "Do you guarantee admission or scholarships?", answer: "No. We do not guarantee admission or scholarships." },
    ],
    cta: {
      title: "Your Future Starts with Smart Decisions Today",
      text: "Book a free consultation and get a personalized education or career plan.",
    },
  },

  // ---------------------------------------------------------------- STAFFING
  {
    path: "/services/staffing",
    flyerPlaceholder: true,
    hero: {
      eyebrow: "Educational Staffing & Institutional Consulting",
      lines: [
        [{ text: "Building Strong" }],
        [{ text: "Institutions Through" }],
        [{ text: "Quality People & Systems", color: "yellow" }],
      ],
      description:
        "Professional recruitment, HR consulting, and institutional advisory for schools and educational organizations, from finding exceptional teachers to achieving international accreditation.",
      buttons: [{ label: "Book your Institutional Consultation Today", variant: "primary" }],
    },
    offer: {
      eyebrow: "What We Offer",
      title: "Comprehensive Institutional Services",
      subtitle: "From staffing to strategy, we support educational institutions at every stage of growth.",
      cards: [
        card(
          "Teacher and non-teaching staff recruitment",
          "Rigorous sourcing and vetting of qualified teachers, matched to your curriculum, culture, and vision. Administrators, counselors, finance officers, and support staff are recruited with the same rigor."
        ),
        card(
          "Human resource planning",
          "Staffing models, compensation strategy, retention programs, and HR policy manuals built for sustainable growth."
        ),
        card(
          "Job design analysis",
          "Clear role definitions, competency frameworks, and job descriptions that eliminate confusion and overlap."
        ),
        card(
          "Performance management systems",
          "Goal-setting, evaluation frameworks, and feedback systems that drive accountability and growth."
        ),
        card(
          "School accreditation acquisition support",
          "Readiness assessments and hands-on support for IB, Cambridge, CIS, and GES accreditation."
        ),
        card(
          "School operations audit",
          "A full review of how your school runs, with clear findings on where it can improve."
        ),
      ],
    },
    band: {
      eyebrow: "Who we serve",
      title: "Institutions We Partner With",
      items: [
        "Private Schools",
        "International Schools",
        "Faith-Based Schools",
        "Universities & Tertiary",
        "Educational NGOs",
        "Training Centers",
      ],
      logosTitle: "Accreditations we help you achieve",
      logos: [
        { name: "Cambridge Assessment International Education", file: "cambridge.png" },
        { name: "International Baccalaureate (IB)", file: "ib.png" },
        { name: "Ghana Education Service", file: "ges.png" },
      ],
    },
    approach: {
      kind: "cards",
      eyebrow: "Our Approach",
      title: "Why Schools Partner with ACES",
      cards: [
        {
          title: "Deep Educational Expertise",
          paragraphs: [
            "We're not generic consultants. We're education specialists. Our team includes former headteachers, curriculum coordinators, teachers, and HR professionals who've worked in the very environments we advise.",
            "We understand school operations from the inside out: academic calendars, parent expectations, teacher workload, accreditation requirements, regulatory compliance, and the unique challenges of running educational institutions.",
          ],
        },
        {
          title: "International Standards, Local Understanding",
          paragraphs: [
            "We bring global best practices while respecting Ghanaian context. We know what excellent international schools look like (we've worked with them), but we also understand local realities: budget constraints, staffing challenges, regulatory environment, cultural factors.",
            "We don't recommend solutions that work in London but fail in Accra.",
          ],
        },
        {
          title: "Partnership, Not Prescription",
          paragraphs: [
            "We don't impose cookie-cutter solutions. We listen, understand your unique situation, and develop customized recommendations that fit YOUR school: your vision, culture, resources, and context.",
            "We collaborate with your leadership, respecting your expertise while adding ours.",
          ],
        },
        {
          title: "Implementation Support, Not Just Reports",
          paragraphs: [
            "Many consultants deliver reports and disappear. We stick around to help you implement. Whether training your leaders, coaching your HR team, or troubleshooting challenges, we support you beyond the report.",
            "Our goal is real change, not just nice documents.",
          ],
        },
        {
          title: "Evidence-Based Recommendations",
          paragraphs: [
            "Our recommendations are grounded in:",
            "We don't guess. We analyze and advise based on evidence.",
          ],
          bullets: [
            "Research on effective schools",
            "Best practices from top institutions globally",
            "Data from your own school's operations",
            "Regulatory and accreditation requirements",
            "Budget realities and feasibility",
          ],
        },
        {
          title: "Confidentiality & Trust",
          paragraphs: [
            "We handle sensitive information with discretion. Whether reviewing personnel issues, financial challenges, or governance problems, you can trust us to maintain confidentiality and professionalism.",
            "We're advisors you can speak openly with about difficult issues.",
          ],
        },
      ],
    },
    stats: [
      { value: "150+", label: "Teachers & Staff Recruited" },
      { value: "25+", label: "Schools Served" },
      { value: "90%+", label: "Placement Retention Rate" },
      { value: "6+", label: "Accreditations Achieved" },
    ],
    showTestimonials: false,
    testimonials: [
      {
        quote:
          "ACES made our school launch possible. They delivered exceptional candidates on time, every time.",
        name: "Head of School",
        role: "British International School",
      },
      {
        quote:
          "The audit was brutally honest, exactly what we needed. Following their recommendations, we turned the school around.",
        name: "Akosua A.",
        role: "Board Chairman",
      },
      {
        quote:
          "We achieved IB authorization on our first application, which is rare. The expertise made all the difference.",
        name: "Abena T.",
        role: "Head of School",
      },
    ],
    faqs: [
      { question: "Who do you work with?", answer: "Universities, international schools and basic schools." },
      { question: "How does recruitment work?", answer: "We post the vacancies, interview candidates and check their backgrounds. We also work with a network of partners who help us recruit." },
      { question: "Can you support a school that is just starting out?", answer: "Yes. We help a new school get the accreditation it needs, plan its organizational structure and use its resources effectively." },
      { question: "What does accreditation support involve?", answer: "We approach the accrediting body, such as GTEC, and submit the application on your behalf, so you can focus on running the school." },
      { question: "What does the operations audit cover?", answer: "The whole organization: its structure, duplicated roles, and ways to work more efficiently without wasting resources. The report goes to the head of school or whoever requested the audit." },
    ],
    cta: {
      title: "Let's Build Excellence Together",
      text: "Schedule a free institutional consultation to discuss your staffing or consulting needs.",
    },
  },
];
