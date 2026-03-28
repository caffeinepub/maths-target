import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { Board } from "../backend";
import { useRegisterStudent } from "../hooks/useQueries";

interface FormState {
  name: string;
  parentName: string;
  className: string;
  board: Board | "";
  phone: string;
  email: string;
  message: string;
}

const CLASSES = ["Class 9", "Class 10", "Class 11", "Class 12", "JEE"];

export default function RegisterPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    parentName: "",
    className: "",
    board: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const { mutate, isPending } = useRegisterStudent();

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Student name is required.";
    if (!form.parentName.trim())
      e.parentName = "Parent/Guardian name is required.";
    if (!form.className) e.className = "Please select a class.";
    if (!form.board) e.board = "Please select a board.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    else if (!/^[0-9+\-\s]{8,15}$/.test(form.phone))
      e.phone = "Please enter a valid phone number.";
    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    mutate(
      {
        name: form.name,
        parentName: form.parentName,
        className: form.className,
        board: form.board as Board,
        phone: form.phone,
        email: form.email,
        message: form.message || undefined,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          toast.success("Registration submitted successfully!");
        },
        onError: () => {
          toast.error("Submission failed. Please try again.");
        },
      },
    );
  };

  return (
    <div className="min-h-screen bg-muted font-sans">
      {/* Sticky mini header */}
      <header
        className="sticky top-0 z-50 bg-white border-b border-border shadow-xs"
        data-ocid="nav.panel"
      >
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" data-ocid="nav.link">
            <ArrowLeft className="w-4 h-4 text-muted-foreground" />
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">MT</span>
            </div>
            <span className="font-bold text-foreground text-sm">
              MATHS TARGET
            </span>
          </Link>
          <Link to="/" data-ocid="nav.link">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div
              className="rounded-2xl overflow-hidden relative min-h-[500px] flex flex-col justify-end p-8"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.37 0.07 210), oklch(0.22 0.08 210))",
              }}
            >
              <img
                src="/assets/generated/hero-classroom.dim_1400x700.jpg"
                alt="Classroom"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10">
                <BookOpen className="w-12 h-12 text-white/60 mb-6" />
                <h2 className="text-2xl font-extrabold text-white mb-3">
                  Start Your Maths Journey
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Register today to enroll in expert-led CBSE or ICSE
                  mathematics coaching with Maths Target. Get personalised
                  attention and achieve your best score.
                </p>
                <div className="space-y-3">
                  {[
                    "Free Assessment Session",
                    "Expert Faculty",
                    "CBSE & ICSE Only",
                    "Classes 9–12 & JEE",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white/60 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <Card
                className="shadow-card border-border"
                data-ocid="register.success_state"
              >
                <CardContent className="pt-12 pb-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-5" />
                  </motion.div>
                  <h2 className="text-2xl font-extrabold text-foreground mb-3">
                    Registration Successful!
                  </h2>
                  <p className="text-muted-foreground mb-2">
                    Thank you for registering with Maths Target.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    Our team will contact you shortly to schedule your free
                    assessment session.
                  </p>
                  <Link to="/">
                    <Button
                      className="bg-primary text-primary-foreground rounded-full px-8"
                      data-ocid="register.primary_button"
                    >
                      Back to Home
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <Card
                className="shadow-card border-border"
                data-ocid="register.panel"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-extrabold text-foreground">
                    Student Registration Form
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Enroll for a Free Assessment · CBSE &amp; ICSE Only
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Student Name */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="name"
                          className="text-foreground font-medium text-sm"
                        >
                          Student Name{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="Enter student name"
                          value={form.name}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, name: e.target.value }))
                          }
                          className={errors.name ? "border-destructive" : ""}
                          data-ocid="register.input"
                        />
                        {errors.name && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="register.error_state"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Parent Name */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="parentName"
                          className="text-foreground font-medium text-sm"
                        >
                          Parent/Guardian Name{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="parentName"
                          placeholder="Enter parent/guardian name"
                          value={form.parentName}
                          onChange={(e) =>
                            setForm((p) => ({
                              ...p,
                              parentName: e.target.value,
                            }))
                          }
                          className={
                            errors.parentName ? "border-destructive" : ""
                          }
                          data-ocid="register.input"
                        />
                        {errors.parentName && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="register.error_state"
                          >
                            {errors.parentName}
                          </p>
                        )}
                      </div>

                      {/* Class */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="class"
                          className="text-foreground font-medium text-sm"
                        >
                          Class <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          onValueChange={(v) =>
                            setForm((p) => ({ ...p, className: v }))
                          }
                          value={form.className}
                        >
                          <SelectTrigger
                            id="class"
                            className={
                              errors.className ? "border-destructive" : ""
                            }
                            data-ocid="register.select"
                          >
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            {CLASSES.map((c) => (
                              <SelectItem key={c} value={c}>
                                {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.className && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="register.error_state"
                          >
                            {errors.className}
                          </p>
                        )}
                      </div>

                      {/* Board */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="board"
                          className="text-foreground font-medium text-sm"
                        >
                          Board <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          onValueChange={(v) =>
                            setForm((p) => ({ ...p, board: v as Board }))
                          }
                          value={form.board}
                        >
                          <SelectTrigger
                            id="board"
                            className={errors.board ? "border-destructive" : ""}
                            data-ocid="register.select"
                          >
                            <SelectValue placeholder="Select board" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value={Board.CBSE}>CBSE</SelectItem>
                            <SelectItem value={Board.ICSE}>ICSE</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.board && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="register.error_state"
                          >
                            {errors.board}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="phone"
                          className="text-foreground font-medium text-sm"
                        >
                          Phone Number{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, phone: e.target.value }))
                          }
                          className={errors.phone ? "border-destructive" : ""}
                          data-ocid="register.input"
                        />
                        {errors.phone && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="register.error_state"
                          >
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="email"
                          className="text-foreground font-medium text-sm"
                        >
                          Email Address{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="student@email.com"
                          value={form.email}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, email: e.target.value }))
                          }
                          className={errors.email ? "border-destructive" : ""}
                          data-ocid="register.input"
                        />
                        {errors.email && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="register.error_state"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="message"
                        className="text-foreground font-medium text-sm"
                      >
                        Message / Query{" "}
                        <span className="text-muted-foreground text-xs">
                          (Optional)
                        </span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Any specific queries or preferences..."
                        rows={3}
                        value={form.message}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, message: e.target.value }))
                        }
                        data-ocid="register.textarea"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:opacity-90 rounded-lg py-5 font-semibold text-base"
                      disabled={isPending}
                      data-ocid="register.submit_button"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Registration"
                      )}
                    </Button>

                    {isPending && (
                      <p
                        className="text-center text-xs text-muted-foreground"
                        data-ocid="register.loading_state"
                      >
                        Processing your registration...
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Maths Target. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
