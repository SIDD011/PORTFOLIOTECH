"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Cloud & Security",
    bg: "/images/cloud.jpg",
    skills: [
      { name: "AWS (EC2, IAM, S3, VPC)", level: "Intermediate" },
      { name: "SSL/TLS", level: "Intermediate" },
      { name: "WPA2/WPA3", level: "Intermediate" },
    ],
  },
  {
    title: "Security Tools",
    bg: "/images/tools.jpg",
    skills: [
      { name: "Wireshark", level: "Advanced" },
      { name: "Nmap", level: "Advanced" },
      { name: "Metasploit", level: "Intermediate" },
      { name: "Aircrack-ng", level: "Intermediate" },
    ],
  },
  {
    title: "Networking",
    bg: "/images/network.jpg",
    skills: [
      { name: "TCP/IP & UDP", level: "Advanced" },
      { name: "DHCP & DNS", level: "Intermediate" },
      { name: "NAT & ACL", level: "Intermediate" },
    ],
  },
  {
    title: "Embedded & IoT",
    bg: "/images/iot.jpg",
    skills: [
      { name: "ESP32", level: "Intermediate" },
      { name: "Raspberry Pi", level: "Intermediate" },
      { name: "Arduino", level: "Intermediate" },
    ],
  },
  {
    title: "Operating Systems",
    bg: "/images/linux.jpg",
    skills: [
      { name: "Kali Linux", level: "Advanced" },
      { name: "Ubuntu", level: "Intermediate" },
      { name: "Windows", level: "Intermediate" },
    ],
  },
  {
    title: "Development Tools",
    bg: "/images/code.jpg",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "C/C++", level: "Intermediate" },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-20 bg-secondary/30 relative">

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
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

          <h2 className="text-4xl font-bold">
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies and tools I use in real-world security labs and projects
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                backgroundImage: `url(${category.bg})`,
              }}
              className="
                relative bg-cover bg-center
                rounded-2xl p-6 min-h-[260px]
                border border-white/10
                overflow-hidden
                group hover:scale-[1.02] transition
              "
            >

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

              {/* Content */}
              <div className="relative z-10">

                <h3 className="text-lg font-semibold mb-5 text-purple-400 border-b border-white/10 pb-2">
                  {category.title}
                </h3>

                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-purple-400 font-mono">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
