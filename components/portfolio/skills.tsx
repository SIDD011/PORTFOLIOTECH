"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Cloud & Security",
    skills: [
      { name: "AWS (EC2, IAM, S3, VPC)", level: 80 },
      { name: "SSL/TLS", level: 85 },
      { name: "WPA2/WPA3", level: 90 },
    ],
  },
  {
    title: "Security Tools",
    skills: [
      { name: "Wireshark", level: 90 },
      { name: "Nmap", level: 85 },
      { name: "Metasploit", level: 75 },
      { name: "Aircrack-ng", level: 85 },
    ],
  },
  {
    title: "Networking",
    skills: [
      { name: "TCP/IP & UDP", level: 90 },
      { name: "DHCP & DNS", level: 85 },
      { name: "NAT & ACL", level: 80 },
    ],
  },
  {
    title: "Embedded & IoT",
    skills: [
      { name: "ESP32", level: 90 },
      { name: "Raspberry Pi", level: 85 },
      { name: "Arduino", level: 80 },
    ],
  },
  {
    title: "Operating Systems",
    skills: [
      { name: "Kali Linux", level: 90 },
      { name: "Ubuntu", level: 85 },
      { name: "Windows", level: 80 },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "C/C++", level: 80 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-20 bg-secondary/30 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl" />
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
          <span className="inline-block px-4 py-1.5 bg-purple-500/10 text-purple-400 text-sm font-mono rounded-full mb-4">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Technical <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on projects, hackathons, and continuous learning
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 pb-3 border-b border-border group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-xs text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1, duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
