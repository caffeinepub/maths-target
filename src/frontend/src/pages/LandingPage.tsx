import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  ChevronRight,
  ClipboardList,
  Facebook,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Star,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Fees", href: "#fees" },
  { label: "Faculty", href: "#about" },
  { label: "Resources", href: "#features" },
  { label: "Contact", href: "#contact" },
];

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Fees", href: "#fees" },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const FEATURES = [
  {
    icon: Users,
    title: "Expert Faculty",
    desc: "Experienced teachers with 10+ years in CBSE & ICSE mathematics coaching.",
  },
  {
    icon: BookOpen,
    title: "CBSE & ICSE Focused",
    desc: "Curriculum designed specifically for CBSE and ICSE board examinations.",
  },
  {
    icon: MessageCircle,
    title: "Doubt Clearing Sessions",
    desc: "Regular dedicated doubt-clearing sessions to ensure no concept is left unclear.",
  },
  {
    icon: ClipboardList,
    title: "Regular Assessments",
    desc: "Weekly tests and mock exams to track progress and improve exam readiness.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    class: "Class 10, CBSE",
    text: "Maths Target transformed my fear of mathematics into my favourite subject! I scored 98/100 in my board exams. The faculty here is absolutely brilliant.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    class: "Class 12, ICSE",
    text: "The doubt-clearing sessions are a game changer. Durgesh Sir explains every concept with such clarity that even the toughest problems become easy.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    class: "Class 9, CBSE",
    text: "My confidence in maths has grown tremendously since joining Maths Target. Regular assessments helped me identify my weak areas and improve consistently.",
    rating: 5,
  },
];

const CBSE_FEES = [
  { class: "Class 9", amount: "₹12,000", desc: "Foundation Mathematics" },
  { class: "Class 10", amount: "₹13,000", desc: "Board Exam Preparation" },
  { class: "Class 11", amount: "₹14,000", desc: "Advanced Mathematics" },
  { class: "Class 12", amount: "₹15,000", desc: "Advanced & JEE Foundation" },
];

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header
        className="sticky top-0 z-50 bg-white border-b border-border shadow-xs"
        data-ocid="nav.panel"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3"
              data-ocid="nav.link"
            >
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg leading-none">
                  MT
                </span>
              </div>
              <div className="leading-tight">
                <div className="font-bold text-foreground text-base tracking-wide">
                  MATHS TARGET
                </div>
                <div className="text-xs text-secondary font-medium tracking-widest uppercase">
                  Excellence in Maths
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <Link to="/register" data-ocid="nav.primary_button">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:opacity-90 rounded-full px-5"
                >
                  Book a Free Class
                </Button>
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-border px-4 pb-4 pt-2 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/register"
              onClick={() => setMobileOpen(false)}
              data-ocid="nav.primary_button"
            >
              <Button className="w-full bg-primary text-primary-foreground mt-2 rounded-full">
                Book a Free Class
              </Button>
            </Link>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-[600px] flex items-center overflow-hidden"
        data-ocid="hero.section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-classroom.dim_1400x700.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.08_210/0.95)] via-[oklch(0.22_0.08_210/0.80)] to-[oklch(0.22_0.08_210/0.25)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <Badge className="bg-white/20 text-white border-white/30 mb-4 text-xs tracking-widest uppercase">
              CBSE &amp; ICSE Specialization
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Achieve Your Highest Potential in Maths
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed">
              Expert coaching for CBSE and ICSE students from Class 9 to 12 &
              JEE. Build a rock-solid foundation with Maths Target — where every
              student succeeds.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#courses">
                <Button
                  size="lg"
                  className="bg-white text-primary font-bold hover:bg-white/90 rounded-full px-8"
                  data-ocid="hero.primary_button"
                >
                  Explore Courses
                </Button>
              </a>
              <Link to="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/15 rounded-full px-8"
                  data-ocid="hero.secondary_button"
                >
                  Join Today
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section
        id="features"
        className="py-16 bg-white"
        data-ocid="features.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
                data-ocid={`features.item.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section
        id="courses"
        className="py-20 bg-muted"
        data-ocid="courses.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Featured Courses
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive mathematics programs tailored for CBSE and ICSE
              curriculum.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CBSE Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-ocid="courses.item.1"
            >
              <Card className="overflow-hidden shadow-card border-border h-full flex flex-col">
                <div className="h-2 bg-primary" />
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <Badge className="bg-primary/10 text-primary border-0 font-semibold">
                      CBSE
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    CBSE Mathematics
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Structured coaching aligned with the CBSE syllabus. Covers
                    all chapters comprehensively with focus on concept clarity,
                    problem-solving techniques, and board exam preparation.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">
                        Classes 9–10
                      </span>
                      <span className="text-muted-foreground">
                        — Foundation &amp; Board Prep
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">
                        Classes 11–12
                      </span>
                      <span className="text-muted-foreground">
                        — Advanced &amp; JEE Foundation
                      </span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link to="/register">
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:opacity-90 rounded-lg"
                        data-ocid="courses.primary_button"
                      >
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ICSE Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-ocid="courses.item.2"
            >
              <Card className="overflow-hidden shadow-card border-border h-full flex flex-col">
                <div className="h-2 bg-secondary" />
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                      <Award className="w-5 h-5 text-secondary" />
                    </div>
                    <Badge className="bg-secondary/10 text-secondary border-0 font-semibold">
                      ICSE
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    ICSE Mathematics
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    In-depth coaching for the ICSE curriculum with special
                    emphasis on analytical thinking, geometrical reasoning, and
                    the rigorous problem-solving ICSE boards demand.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-foreground font-medium">
                        Classes 9–10
                      </span>
                      <span className="text-muted-foreground">
                        — Core Concepts &amp; ICSE Prep
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-foreground font-medium">
                        Classes 11–12
                      </span>
                      <span className="text-muted-foreground">
                        — ISC Advanced Mathematics
                      </span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link to="/register">
                      <Button
                        className="w-full bg-secondary text-secondary-foreground hover:opacity-90 rounded-lg"
                        data-ocid="courses.secondary_button"
                      >
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fees Structure */}
      <section id="fees" className="py-20 bg-white" data-ocid="fees.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-accent text-primary border-0 mb-4 text-xs tracking-widest uppercase">
              Transparent Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Fees Structure
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Affordable annual fees for CBSE mathematics coaching. No hidden
              charges.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {CBSE_FEES.map((fee, i) => (
              <motion.div
                key={fee.class}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                data-ocid={`fees.item.${i + 1}`}
              >
                <Card className="overflow-hidden shadow-card border-border text-center h-full flex flex-col">
                  <div className="h-1.5 bg-primary" />
                  <CardContent className="pt-6 pb-6 flex flex-col items-center gap-3 flex-1">
                    <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-bold text-foreground text-lg">
                      {fee.class}
                    </div>
                    <div className="text-3xl font-extrabold text-primary">
                      {fee.amount}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      /year
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {fee.desc}
                    </div>
                    <div className="mt-auto pt-2 w-full">
                      <Badge className="bg-primary/10 text-primary border-0 text-xs font-semibold w-full justify-center py-1">
                        CBSE Board
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            * Fees are annual. For more details or installment options, please
            contact us directly.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-muted" data-ocid="about.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <img
                src="/assets/uploads/image-019d3333-a842-7299-9f01-02d4b3ca6438-2.png"
                alt="Durgesh Kumar Dhakad, Director - Maths Target"
                className="rounded-2xl w-full max-w-sm mx-auto object-cover shadow-card aspect-square"
              />
              <div className="mt-4 text-center">
                <div className="font-bold text-foreground text-xl">
                  Durgesh Kumar Dhakad
                </div>
                <div className="text-sm text-primary font-semibold mt-1">
                  Director, Maths Target
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-accent text-primary border-0 mb-4 text-xs tracking-widest uppercase">
                About Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                About Maths Target
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Maths Target is a premier mathematics coaching institute
                dedicated to helping students from Classes 9 to 12 & JEE excel
                in their academic journey. We specialise exclusively in CBSE and
                ICSE curricula, ensuring every student receives focused,
                board-aligned instruction.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Founded with a mission to make quality mathematics education
                accessible, Maths Target employs a student-first approach —
                combining rigorous curriculum delivery with personalised
                attention, regular assessments, and dedicated doubt-clearing
                sessions.
              </p>
              <div className="bg-white rounded-2xl p-5 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-base">
                      Durgesh Kumar Dhakad
                    </div>
                    <div className="text-sm text-primary font-semibold mb-1">
                      Director, Maths Target
                    </div>
                    <p className="text-sm text-muted-foreground">
                      A highly experienced mathematics educator with a passion
                      for nurturing student potential and building lasting
                      mathematical intuition.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 bg-white"
        data-ocid="testimonials.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              What Our Students Say
            </h2>
            <p className="text-muted-foreground">
              Real results from real students at Maths Target.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <Card className="h-full shadow-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: t.rating }, (_, j) => j).map(
                        (j) => (
                          <Star
                            key={`star-${t.name}-${j}`}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ),
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">
                          {t.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {t.class}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-14 bg-primary overflow-hidden"
        data-ocid="cta.section"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Text + Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                Ready to Transform Your Maths Score?
              </h2>
              <p className="text-white/80 mb-8">
                Join hundreds of students who have achieved their academic goals
                with Maths Target.
              </p>
              <Link to="/register">
                <Button
                  size="lg"
                  className="bg-white text-primary font-bold hover:bg-white/90 rounded-full px-10"
                  data-ocid="cta.primary_button"
                >
                  Register for a Free Assessment
                </Button>
              </Link>
            </motion.div>

            {/* Promotional Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <img
                src="/assets/uploads/image-019d334d-bb65-7312-bffa-ad57934f81a0-1.png"
                alt="Maths Target Promotional Banner"
                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer
        id="contact"
        className="bg-foreground text-white"
        data-ocid="footer.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MT</span>
                </div>
                <div>
                  <div className="font-bold text-white text-base">
                    MATHS TARGET
                  </div>
                  <div className="text-xs text-white/60 tracking-widest uppercase">
                    Excellence in Maths
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/65 leading-relaxed">
                Premier CBSE &amp; ICSE mathematics coaching for students from
                Class 9 to 12 & JEE. Led by Director Durgesh Kumar Dhakad.
              </p>
            </div>

            {/* Site Links */}
            <div>
              <div className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                Site Links
              </div>
              <ul className="space-y-2">
                {FOOTER_LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/65 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    to="/register"
                    className="text-sm text-white/65 hover:text-white transition-colors"
                    data-ocid="footer.link"
                  >
                    Registration
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                Contact Info
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-white/65">
                  <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <span>+91 97137 77350</span>
                    <span>+91 88393 86242</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-white/65">
                  <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>durgesh0751@gmail.com</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-white/65">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Gwalior By Pass Road, Near Shiv Mandir, Taqzee</span>
                </li>
              </ul>
              <div className="flex gap-3 mt-5">
                <a
                  href="https://facebook.com"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://youtube.com"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} Maths Target. All rights
              reserved. Director: Durgesh Kumar Dhakad.
            </p>
            <p className="text-xs text-white/40">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
