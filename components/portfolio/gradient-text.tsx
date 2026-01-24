import { cn } from "@/lib/utils"

type GradientTextProps = React.HTMLAttributes<HTMLSpanElement>

export function GradientText({ className, ...props }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent",
        className
      )}
      {...props}
    />
  )
}
