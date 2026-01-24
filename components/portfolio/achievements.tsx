"use client"

import { motion } from "framer-motion"
import { Trophy, BookOpen, Star, Shield, ExternalLink, Award } from "lucide-react"

const achievements = [
  {
    title: "IEEE Xplore Publication",
    subtitle: "Slipper Zero - Wi-Fi Penetration Tool",
    description: "Published research paper on Wi-Fi security testing tool development",
    icon: BookOpen,
    gradient: "from-blue-500 to-cyan-500",
    featured: true,
    link : "https://ieeexplore.ieee.org/abstract/document/10805625"
  },
  {
    title: "Advanced IoT Program Winner",
    subtitle: "ViMEET",
    description: "First place in college-level IoT development competition",
    icon: Trophy,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Cybersecurity Program Winner",
    subtitle: "ViMEET",
    description: "Recognized for excellence in security practices and knowledge",
    icon: Trophy,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "TryHackMe Practitioner",
    subtitle: "Active CTF & Pentesting",
    description: "Continuously solving cybersecurity challenges and capture-the-flag rooms",
    icon: Shield,
    gradient: "from-green-500 to-emerald-500",
    link: "https://tryhackme.com/p/psiddhesh1302",
  },
  {
    title: "Hackathon Special Mentions",
    subtitle: "3 College Hackathons",
    description: "Recognized for innovative solutions in multiple hackathon events",
    icon: Star,
    gradient: "from-purple-500 to-pink-500",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 lg:px-20 relative">
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
            Recognition
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Awards & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Milestones and recognition earned through dedication and hard work
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            const Component = achievement.link ? "a" : "div"
            const componentProps = achievement.link
              ? { href: achievement.link, target: "_blank", rel: "noopener noreferrer" }
              : {}

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={achievement.featured ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Component
                  {...componentProps}
                  className={`group relative block h-full bg-card border rounded-2xl p-6 transition-all duration-500 overflow-hidden ${
                    achievement.featured
                      ? "border-primary/30 hover:border-primary"
                      : "border-border hover:border-primary/30"
                  } ${achievement.link ? "cursor-pointer" : ""}`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Featured badge */}
                  {achievement.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      <Award className="w-3 h-3" />
                      Featured
                    </div>
                  )}

                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${achievement.gradient} mb-4`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Title */}
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      {achievement.link && (
                        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>

                    {/* Subtitle */}
                    <p className="text-primary text-sm font-medium mb-2">
                      {achievement.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </Component>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
