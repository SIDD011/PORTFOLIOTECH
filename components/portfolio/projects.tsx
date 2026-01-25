"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Shield, Wifi, Server, Globe, Award } from "lucide-react"

const projects = [
  {
    title: "Slipper Zero",
    subtitle: "Wi-Fi Penetration Testing Tool",
    description:
      "Developed a comprehensive Wi-Fi penetration testing tool based on ESP32 for PMKID extraction and WPA handshake capture. Enables PCAP logging for detailed packet analysis and forensic inspection.",
    technologies: ["C", "C++", "ESP32", "Wi-Fi", "PCAP", "Wireshark"],
    icon: Wifi,
    featured: true,
    badge: "IEEE Published",
    color: "from-emerald-500/20 to-cyan-500/20",
    github: "https://github.com/SIDD011/Slipper-Zero.git",
  },
  {
    title: "Especially Safe",
    subtitle: "Secure IoT Device",
    description:
      "Designed a secure IoT device implementing WPA3 and TLS protocols for encrypted communication. Protected against man-in-the-middle and replay attacks with robust security measures.",
    technologies: ["ESP32", "TLS", "WPA3", "IoT Security"],
    icon: Shield,
    color: "from-blue-500/20 to-indigo-500/20",
    github: "https://github.com/SIDD011/Especially-Safe.git",
  },
  {
    title: "Privacy Pi",
    subtitle: "Network Privacy Gateway",
    description:
      "Built a privacy-focused IoT gateway using Raspberry Pi with VPN tunneling (OpenVPN, WireGuard) and DNS filtering via Pi-hole for enhanced network privacy.",
    technologies: ["Raspberry Pi", "Linux", "OpenVPN", "WireGuard", "Pi-hole"],
    icon: Server,
    color: "from-purple-500/20 to-pink-500/20",
    github: "https://github.com/SIDD011/Privacy-Pi.git",
  },
  {
    title: "CableScope",
    subtitle: "AI-Powered TDR Fault Detection System",
    description:
      "CableScope is a precision diagnostic system that detects cable faults using Time Domain Reflectometry (TDR), combining STM32 high-speed signal acquisition with Raspberry Pi 5 processing for real-time analysis and centimeter-level fault localization.",
    technologies: ["STM32", "Raspberry Pi 5", "Python", "AI/ML", "TDR"],
    icon: Globe,
    color: "from-orange-500/20 to-red-500/20",
    github: "https://github.com/SIDD011/CableScope.git",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-mono rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real-world security solutions and tools built with passion and precision
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className={`group relative bg-card border rounded-2xl overflow-hidden transition-all duration-500 ${
                  project.featured
                    ? "border-primary/30 shadow-lg shadow-primary/10"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Featured badge */}
                {project.badge && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    <Award className="w-3 h-3" />
                    {project.badge}
                  </div>
                )}

                <div className="relative p-6 md:p-8">

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        project.featured
                          ? "bg-primary/20"
                          : "bg-secondary group-hover:bg-primary/20"
                      }`}
                    >
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-muted-foreground text-xs rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">

                    {/* View Details (future demo link) */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </motion.button>

                    {/* GitHub Source */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-4 py-2 bg-secondary text-muted-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 hover:text-foreground transition-all"
                      >
                        <Github className="w-4 h-4" />
                        Source
                      </motion.button>
                    </a>

                  </div>

                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
