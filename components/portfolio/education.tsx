"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react"

const courses = [
  "Network Security",
  "Cloud Computing",
  "Digital Electronics",
  "Embedded Systems",
  "Microprocessors",
  "Communication Systems",
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6 lg:px-20 bg-secondary/30 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
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
            Education
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Academic <span className="text-primary">Background</span>
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="group bg-card border border-border rounded-2xl p-8 md:p-10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
            {/* Badge */}
            <div className="absolute -top-3 left-8 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
              Final Year
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left side - Main info */}
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-primary/10 rounded-xl"
                  >
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      B.E. in Electronics & Telecommunication
                    </h3>
                    <p className="text-lg text-muted-foreground mt-1">
                      University of Mumbai
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Vishwaniketan Institute management entrepreneurship engineering college(ViMEET), 
                    pursuing specialization in telecommunications with a focus on 
                    cybersecurity and Cloud Engineering.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Nov 2022 – Present</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Khalapur, Raigad</span>
                  </div>
                </div>
              </div>

              {/* Right side - Relevant Courses */}
              <div className="lg:w-72 lg:border-l lg:border-border lg:pl-8">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Relevant Coursework</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, index) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="px-3 py-1.5 bg-secondary text-muted-foreground text-sm rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
