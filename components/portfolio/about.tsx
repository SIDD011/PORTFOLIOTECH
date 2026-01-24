"use client"

import { motion } from "framer-motion"
import { Shield, Cloud, Cpu, Terminal, MapPin, GraduationCap, Award } from "lucide-react"

const stats = [
  { value: "4+", label: "Projects Completed" },
  { value: "IEEE", label: "Published Paper" },
  { value: "3+", label: "Hackathon Wins" },
  { value: "40+", label: "TryHackMe Rooms" },
]

const highlights = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Penetration testing, vulnerability assessment, and security audits",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "AWS EC2, IAM, S3, VPC configuration and deployment",
  },
  {
    icon: Cpu,
    title: "IoT Security",
    description: "Secure IoT devices with WPA3 and TLS encryption",
  },
  {
    icon: Terminal,
    title: "Linux Systems",
    description: "Ubuntu, Kali Linux, system administration",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-purple-500/10 text-purple-400 text-sm font-mono rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Passionate About <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">Security</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I&apos;m <span className="text-foreground font-semibold">Siddhesh Sanjay Patil</span>, 
                a final year Electronics and Telecommunication Engineering student at 
                <span className="text-purple-400"> Vishwaniketan Institute management entrepreneurship engineering college</span>.
              </p>
              <p>
                My journey in cybersecurity began with a curiosity about how systems can be 
                compromised and secured. This led me to explore network security, IoT vulnerabilities, 
                and cloud infrastructure protection.
              </p>
              <p>
                I believe in learning by doing - from developing Wi-Fi penetration testing tools 
                published in IEEE to winning multiple hackathons. I&apos;m constantly pushing the 
                boundaries of what&apos;s possible in security research.
              </p>
            </div>

            {/* Info Cards */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border border-border">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-muted-foreground">Khopoli, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border border-border">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-muted-foreground">B.E. in EXTC</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border border-border">
                <Award className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-muted-foreground">IEEE Published</span>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 bg-card border border-border rounded-xl hover:border-purple-500/50 transition-colors"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Core Competencies</h3>
            {highlights.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300"
                >
                  <div className="p-2.5 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
