import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
  fadeRate: number;
}

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar tamanho do canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Criar partícula
    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      size: Math.random() * 3 + 1, // 1px a 4px
      speedY: Math.random() * 0.8 + 0.4, // 0.4 a 1.2 pixels por frame
      opacity: Math.random() * 0.5 + 0.5, // 0.5 a 1.0
      fadeRate: Math.random() * 0.003 + 0.001, // 0.001 a 0.004
    });

    // Inicializar partículas
    if (particlesRef.current.length === 0) {
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push(createParticle());
      }
    }

    // Verificar se está no modo escuro
    const isDarkMode = () => {
      return document.documentElement.classList.contains('dark');
    };

    // Função de animação
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const themeMultiplier = isDarkMode() ? 0.8 : 0.5;

      particlesRef.current.forEach((particle) => {
        // Atualizar posição
        particle.y -= particle.speedY;
        particle.opacity -= particle.fadeRate;

        // Recriar partícula se saiu da tela ou ficou invisível
        if (particle.y < -20 || particle.opacity <= 0) {
          const newParticle = createParticle();
          particle.x = newParticle.x;
          particle.y = newParticle.y;
          particle.size = newParticle.size;
          particle.speedY = newParticle.speedY;
          particle.opacity = newParticle.opacity;
          particle.fadeRate = newParticle.fadeRate;
        }

        // Desenhar partícula com efeito glow para partículas maiores
        const adjustedOpacity = particle.opacity * themeMultiplier;

        if (particle.size > 2) {
          // Desenhar halo (glow)
          const glowSize = particle.size * 1.5;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 72, 6, ${adjustedOpacity * 0.3})`;
          ctx.fill();
        }

        // Desenhar partícula principal
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 72, 6, ${adjustedOpacity})`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}