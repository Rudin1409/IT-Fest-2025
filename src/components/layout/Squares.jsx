'use client';
import { useRef, useEffect } from 'react';
import './squares.css';

const Squares = ({
  direction = 'right',
  speed = 1,
  borderColor = '#999',
  squareSize = 40,
  hoverFillColor = '#222',
  className = ''
}) => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquare = useRef(null);
  const mouseX = useRef(-1);
  const mouseY = useRef(-1);
  const backgroundRgb = useRef('');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Get the computed background color from CSS variables
    backgroundRgb.current = getComputedStyle(document.body).getPropertyValue('--background-rgb').trim();

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const offsetX = gridOffset.current.x % squareSize;
      const offsetY = gridOffset.current.y % squareSize;

      for (let x = -offsetX; x < canvas.width; x += squareSize) {
        for (let y = -offsetY; y < canvas.height; y += squareSize) {
          if (
            mouseX.current !== -1 &&
            mouseX.current >= x &&
            mouseX.current < x + squareSize &&
            mouseY.current >= y &&
            mouseY.current < y + squareSize
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(x, y, squareSize, squareSize);
          }
          ctx.strokeStyle = borderColor;
          ctx.strokeRect(x, y, squareSize, squareSize);
        }
      }

      // This creates a vignette effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        Math.min(canvas.width, canvas.height) / 4,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 1.5
      );
      if (backgroundRgb.current) {
        gradient.addColorStop(0, `rgba(${backgroundRgb.current}, 0)`);
        gradient.addColorStop(1, `rgba(${backgroundRgb.current}, 1)`);
      }


      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      switch (direction) {
        case 'right':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + (squareSize * 2)) % squareSize;
          break;
        case 'left':
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed) % squareSize;
          break;
        case 'up':
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed) % squareSize;
          break;
        case 'down':
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + (squareSize * 2)) % squareSize;
          break;
        case 'diagonal':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + (squareSize * 2)) % squareSize;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + (squareSize * 2)) % squareSize;
          break;
        default:
          break;
      }

      drawGrid();
      animationFrameId.current = requestAnimationFrame(updateAnimation);
    };
    
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseX.current = event.clientX - rect.left;
      mouseY.current = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
        mouseX.current = -1;
        mouseY.current = -1;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    updateAnimation();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if(animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize]);

  return <canvas ref={canvasRef} className={`squares-canvas ${className}`}></canvas>;
};

export default Squares;
