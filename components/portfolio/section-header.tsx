type SectionHeaderProps = {
  badge: string
  title: React.ReactNode
  description?: string
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-mono rounded-full mb-4">
        {badge}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
