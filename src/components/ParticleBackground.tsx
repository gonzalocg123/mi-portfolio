import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Configuración del canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Partículas
        const particles: Array<{
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;
        }> = [];

        // Crear partículas
        for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25,
            color: `rgba(255, ${105 + Math.random() * 50}, ${180 + Math.random() * 75}, ${0.5 + Math.random() * 0.5})`
        });
        }

        // Animación
        const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Actualizar y dibujar partículas
        particles.forEach((particle, index) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Rebotar en los bordes
            if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
            
            // Dibujar partícula
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Conectar partículas cercanas
            for (let j = index + 1; j < particles.length; j++) {
            const dx = particle.x - particles[j].x;
            const dy = particle.y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 105, 180, ${0.2 * (1 - distance/100)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
            }
        });
        
        requestAnimationFrame(animate);
        };
        
        animate();

        // Redimensionar canvas
        const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas 
        ref={canvasRef} 
        className="particle-background"
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1
        }}
        />
    );
};

export default ParticleBackground;