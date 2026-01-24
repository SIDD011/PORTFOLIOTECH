"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Shield,
  FileText,
  Send,
  ArrowUpRight,
} from "lucide-react"

const contactInfo = [
  {
    label: "Email",
    value: "psiddhesh1302@gmail.com",
    href: "mailto:psiddhesh1302@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 83298 65834",
    href: "tel:+918329865834",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Khopoli, Raigad, Maharashtra",
    href: null,
    icon: MapPin,
  },
]

const socialLinks = [
  { label: "GitHub", href: "https://github.com/SIDD011", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/siddhesh-patil-4b8a88262", icon: Linkedin },
  { label: "TryHackMe", href: "https://tryhackme.com/p/psiddhesh1302", icon: Shield },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1nEoDoYHXwla2awC9r_I4GAPxVjNYWrnK/view",
    icon: FileText,
  },
]

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    setLoading(true)

    emailjs
      .sendForm(
        "service_nw5nc65",    
        "template_prfnsef",   
        formRef.current,
        "CjSgrbC9on2hFeSZE"
      )
      .then(() => {
        alert("Message sent successfully 🚀")
        formRef.current?.reset()
      })
      .catch((err) => {
        console.error(err)
        alert("Failed to send message ❌")
      })
      .finally(() => setLoading(false))
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-20 bg-secondary/30 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-mono rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Let&apos;s Work <span className="text-primary">Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT — FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              Send a Message
            </h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <input
                name="subject"
                type="text"
                placeholder="What's this about?"
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT — CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                const Component = contact.href ? "a" : "div"

                return (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Component
                      {...(contact.href ? { href: contact.href } : {})}
                      className="group flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          {contact.label}
                        </p>
                        <p className="text-foreground font-medium">
                          {contact.value}
                        </p>
                      </div>
                      {contact.href && (
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100" />
                      )}
                    </Component>
                  </motion.div>
                )
              })}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="flex items-center gap-3 px-5 py-4 bg-card border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                      <span className="font-medium text-muted-foreground group-hover:text-primary">
                        {social.label}
                      </span>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}