import type { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "accent" | "light";
type Size = "sm" | "md";

const variantClasses: Record<Variant, string> = {
  primary: "bg-espresso-500 text-paper hover:bg-walnut-500",
  secondary: "border border-current/30 bg-transparent hover:border-current",
  accent: "bg-celeste text-ink hover:bg-celeste/80",
  // Variante clara para usarse sobre fondos oscuros (ej. el Hero con video).
  light: "bg-paper text-ink hover:bg-sage-300",
};

const sizeClasses: Record<Size, string> = {
  md: "px-7 py-3.5 text-sm",
  sm: "px-5 py-2.5 text-xs",
};

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-300 ease-trama disabled:opacity-50 disabled:pointer-events-none";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", size = "md", className = "" } = props;
  const classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    if (props.href.startsWith("http")) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _href, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
