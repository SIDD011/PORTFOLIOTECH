import { cn } from "@/lib/utils"

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "article" | "section"
  gradientBorder?: boolean
  hoverGlow?: boolean
}

export function GlassCard({
  as: Tag = "div",
  gradientBorder = false,
  hoverGlow = true,
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "glass-card relative rounded-2xl",
        gradientBorder && "gradient-border",
        hoverGlow && "purple-glow-hover",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
