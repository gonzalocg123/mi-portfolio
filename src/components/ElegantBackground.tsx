import React, { useEffect, useRef } from 'react';

const ElegantBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Partículas sutiles y elegantes
        const particles: Array<{
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;
        }> = [];

        for (let i = 0; i < 25; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1 + 0.5,
            speedX: Math.random() * 0.2 - 0.1,
            speedY: Math.random() * 0.2 - 0.1,
            color: `rgba(99, 102, 241, ${0.1 + Math.random() * 0.1})` // Indigo sutil
        });
        }

        const animate = () => {
        ctx.fillStyle = 'rgba(15, 15, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
            
            // Partículas más sutiles
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });
        
        animationRef.current = requestAnimationFrame(animate);
        };
        
        animate();

        const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
        window.removeEventListener('resize', handleResize);
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
        };
    }, []);

    return (
        <>
        <canvas 
            ref={canvasRef} 
            className="elegant-background"
            style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1
            }}
        />
        {/* Gradientes sutiles de fondo */}
        <div 
            style={{
            position: 'fixed',
            top: '0%',
            left: '0%',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.03) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(6, 182, 212, 0.03) 0%, transparent 50%)',
            zIndex: -1
            }}
        />
        </>
    );
};

export default ElegantBackground;