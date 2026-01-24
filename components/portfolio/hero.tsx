"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, Shield, ArrowDown } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const roles = [
  "Cybersecurity Enthusiast",
  "Cloud Engineer",
  "IoT Security Developer",
  "Penetration Tester",
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const socialLinks = [
    { icon: Github, href: "https://github.com/SIDD011", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/siddhesh-patil-4b8a88262", label: "LinkedIn" },
    { icon: Shield, href: "https://tryhackme.com/p/psiddhesh1302", label: "TryHackMe" },
    { icon: Mail, href: "mailto:psiddhesh1302@gmail.com", label: "Email" },
    { icon: FileText, href: "https://drive.google.com/file/d/1nEoDoYHXwla2awC9r_I4GAPxVjNYWrnK/view?usp=drive_link", label: "Resume" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background with purple/pink gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-fuchsia-600/15 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-violet-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-20 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Rotating border with purple gradient */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #7c3aed, #c026d3, #ec4899, #7c3aed)',
                  padding: '3px',
                }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>
              {/* Image container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-border">
                <Image
                  src="/images/profile.jpg"
                  alt="Siddhesh Sanjay Patil"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Status badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/30"
              >
                Open to Work
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-purple-400 font-mono text-sm md:text-base tracking-widest mb-4"
            >
              {"<"} WELCOME TO MY PORTFOLIO {"/>"}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Siddhesh</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-12 md:h-14 mb-6"
            >
              <span className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                I&apos;m a{" "}
                <span className="text-foreground font-medium">
                  {displayText}
                  <span className="animate-pulse text-purple-500">|</span>
                </span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Final year EXTC student passionate about securing digital infrastructure. 
              Specialized in IoT security, network penetration testing, and cloud computing.
              Building tools that make the internet a safer place.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-2 px-4 py-2.5 bg-secondary border border-border rounded-full hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-purple-400 transition-colors" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-purple-400 transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest">SCROLL</span>
          <ArrowDown className="w-4 h-4 text-purple-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
