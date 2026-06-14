import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorSize = 12;
  const mouse = {
    x: useMotionValue(-100),
    y: useMotionValue(-100)
  };
  
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Add global class to hide default cursor
    document.body.style.cursor = 'none';
    
    // Make sure interactive elements also don't show the default pointer
    const style = document.createElement('style');
    style.innerHTML = `
      a, button, [role="button"] { cursor: none !important; }
    `;
    document.head.appendChild(style);

    const manageMouseMove = (e: MouseEvent) => {
      mouse.x.set(e.clientX - cursorSize / 2);
      mouse.y.set(e.clientY - cursorSize / 2);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('[role="button"]') || target.closest('.magnetic-btn')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', manageMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
      document.head.removeChild(style);
    };
  }, [mouse.x, mouse.y]);

  return (
    <motion.div
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      animate={{
        width: isHovered ? 48 : cursorSize,
        height: isHovered ? 48 : cursorSize,
        x: isHovered ? -18 : 0,
        y: isHovered ? -18 : 0,
        backgroundColor: isHovered ? "transparent" : "var(--color-primary)",
        border: isHovered ? "1px solid var(--color-primary)" : "0px solid var(--color-primary)"
      }}
      className="pointer-events-none fixed z-[9999] rounded-full hidden lg:block"
    />
  );
}
