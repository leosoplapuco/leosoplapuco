// components/Cursor.jsx (versión corregida)
import React, { useState, useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = ({ 
  offsetX = 20, 
  offsetY = 20, 
  size = 20, 
  color = '#007bff',
  followSpeed = 0.1,
  circleSize = 40
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickCircles, setClickCircles] = useState([]);
  const cursorRef = useRef(null);
  const rafRef = useRef(null);
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e) => {
      const newCircle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setClickCircles(prev => [...prev, newCircle]);

      setTimeout(() => {
        setClickCircles(prev => prev.filter(circle => circle.id !== newCircle.id));
      }, 600);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('click', handleClick);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    const animate = () => {
      if (cursorRef.current) {
        currentPos.current.x += (position.x - currentPos.current.x) * followSpeed;
        currentPos.current.y += (position.y - currentPos.current.y) * followSpeed;
        
        cursorRef.current.style.transform = `translate(${currentPos.current.x + offsetX}px, ${currentPos.current.y + offsetY}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    currentPos.current = { x: position.x, y: position.y };
    animate();

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [position, offsetX, offsetY, followSpeed]);

  return (
    <>
      {/* Círculo que sigue al cursor - 20px abajo y a la derecha */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          pointerEvents: 'none', // Esto es clave - permite clicks a través del círculo
          zIndex: 9999,
          top: 0,
          left: 0,
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: color,
          opacity: 0.7,
          border: `2px solid ${color}`,
          boxShadow: `0 0 20px ${color}40`,
          transition: 'none',
        }}
      />

      {/* Círculo de click - escala 0 a 2 con opacidad 1 a 0 */}
      {clickCircles.map((circle) => (
        <div
          key={circle.id}
          className="click-circle"
          style={{
            position: 'fixed',
            pointerEvents: 'none', // Esto es clave - permite clicks a través del círculo
            zIndex: 9998,
            top: circle.y - circleSize,
            left: circle.x - circleSize,
            width: circleSize * 2,
            height: circleSize * 2,
            borderRadius: '50%',
            border: `2px solid ${color}`,
            backgroundColor: `${color}33`,
            transform: 'scale(0)',
            opacity: 1,
            animation: 'clickRipple 0.6s ease-out forwards',
          }}
        />
      ))}
    </>
  );
};

export default Cursor;