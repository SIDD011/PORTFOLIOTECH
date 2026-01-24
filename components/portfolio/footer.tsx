"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Shield, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/SIDD011", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/siddhesh-patil-4b8a88262", label: "LinkedIn" },
  { icon: Shield, href: "https://tryhackme.com/p/psiddhesh1302", label: "TryHackMe" },
  { icon: Mail, href: "mailto:psiddhesh1302@gmail.com", label: "Email" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-2xl font-bold text-foreground mb-1">
              {"<"}SP{"/>"}
            </p>
            <p className="text-sm text-muted-foreground">
              {currentYear} Siddhesh Patil. Built with{" "}
              <Heart className="inline w-3 h-3 text-red-500 mx-0.5" fill="currentColor" />
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="p-2.5 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
