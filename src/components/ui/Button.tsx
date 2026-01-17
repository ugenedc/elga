'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';
import Link from 'next/link';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', href, external, className = '', ...props }, ref) => {
    const baseClasses = `
      inline-flex items-center justify-center font-semibold tracking-wider uppercase
      transition-all duration-400 ease-expo cursor-pointer relative overflow-hidden
      focus:outline-none focus-visible:ring-2 focus-visible:ring-sacred-gold focus-visible:ring-offset-2
    `;

    const variants = {
      primary: `
        bg-sacred-gold text-volcanic-black
        hover:bg-sacred-gold-light hover:shadow-[0_10px_40px_rgba(201,169,98,0.3)]
      `,
      secondary: `
        bg-transparent text-sacred-gold border border-sacred-gold
        hover:bg-sacred-gold hover:text-volcanic-black
      `,
      ghost: `
        bg-transparent text-rice-cream
        hover:text-sacred-gold
      `,
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    const motionProps = {
      whileHover: { y: -2 },
      whileTap: { scale: 0.98 },
      transition: { type: 'spring', stiffness: 400, damping: 17 },
    };

    if (href) {
      if (external) {
        return (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
            {...motionProps}
          >
            {children}
          </motion.a>
        );
      }
      return (
        <Link href={href} className={classes}>
          <motion.span
            className="flex items-center justify-center w-full h-full"
            {...motionProps}
          >
            {children}
          </motion.span>
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
