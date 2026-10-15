import { cva, type VariantProps } from "class-variance-authority";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const sectionVariants = cva("", {
  variants: {
    tone: {
      default: "bg-background",
      alt: "bg-surface-alt",
      charcoal: "bg-charcoal text-white",
      brand: "bg-brand-dark text-white",
    },
    spacing: {
      default: "py-16 md:py-20 lg:py-24",
      compact: "py-12 md:py-14",
      none: "",
    },
  },
  defaultVariants: {
    tone: "default",
    spacing: "default",
  },
});

export function Section({
  className,
  containerClassName,
  tone,
  spacing,
  children,
  ...props
}: React.ComponentProps<"section"> &
  VariantProps<typeof sectionVariants> & {
    containerClassName?: string;
  }) {
  return (
    <section
      data-section=""
      className={cn(sectionVariants({ tone, spacing }), className)}
      {...props}
    >
      <Reveal>
        <Container className={containerClassName}>{children}</Container>
      </Reveal>
    </section>
  );
}
