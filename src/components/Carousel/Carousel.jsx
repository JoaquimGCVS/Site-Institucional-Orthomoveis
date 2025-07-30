import React, { useState, useRef, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({slides}) => {
  const [indexAtual, setIndexAtual] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [wheelDeltaX, setWheelDeltaX] = useState(0);
  const carouselRef = useRef(null);

  function mostrarSlide(index) {
    setIndexAtual(index);
    setTranslateX(-index * 100);
  }

  const anterior = () => {
    mostrarSlide(indexAtual === 0 ? slides.length - 1 : indexAtual - 1);
  };

  const proximo = () => {
    mostrarSlide(indexAtual === slides.length - 1 ? 0 : indexAtual + 1);
  };

  // Funções para touch/mouse events
  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    
    setCurrentX(clientX);
    const diff = clientX - startX;
    const currentTranslate = -indexAtual * 100;
    const newTranslate = currentTranslate + (diff / carouselRef.current.offsetWidth) * 100;
    setTranslateX(newTranslate);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const diff = currentX - startX;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        anterior();
      } else {
        proximo();
      }
    } else {
      setTranslateX(-indexAtual * 100);
    }
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Wheel/Trackpad events
  const handleWheel = (e) => {
    // Previne o scroll padrão apenas se for movimento horizontal significativo
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
    }

    // Acumula o deltaX para trackpads que enviam pequenos valores
    setWheelDeltaX(prev => prev + e.deltaX);
  };

  // Effect para processar wheel delta acumulado
  useEffect(() => {
    const threshold = 100; // Ajuste este valor conforme necessário
    
    if (Math.abs(wheelDeltaX) > threshold) {
      if (wheelDeltaX > 0) {
        proximo(); // Scroll para direita = próximo slide
      } else {
        anterior(); // Scroll para esquerda = slide anterior
      }
      setWheelDeltaX(0); // Reset do acumulador
    }

    // Reset automático do acumulador após um tempo sem movimento
    const timer = setTimeout(() => {
      setWheelDeltaX(0);
    }, 150);

    return () => clearTimeout(timer);
  }, [wheelDeltaX, indexAtual]);

  // Pointer events (alternativa mais moderna)
  const handlePointerDown = (e) => {
    if (e.pointerType === 'mouse') {
      e.preventDefault();
      handleStart(e.clientX);
    }
  };

  const handlePointerMove = (e) => {
    if (e.pointerType === 'mouse') {
      e.preventDefault();
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = (e) => {
    if (e.pointerType === 'mouse') {
      handleEnd();
    }
  };

  // Event listeners globais
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('pointerup', handlePointerUp);
      };
    }
  }, [isDragging, currentX, startX]);

  return (
    <div>
        <div 
          className="carousel"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onPointerDown={handlePointerDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
            <button className="navegacao-esquerda" onClick={anterior}>&lt;</button>
            <button className="navegacao-direita" onClick={proximo}>&gt;</button>
            <div 
              className="slides" 
              style={{ 
                transform: `translateX(${translateX}%)`,
                transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
              }}
            >
                {slides.map((dupla, i) => (
                <div className={`slide${i === indexAtual ? " ativo" : ""}`} key={i}>
                    {dupla.map((src, j) => (
                    <img 
                      src={src} 
                      alt="Colchão de mola orthocrin" 
                      key={j}
                      draggable={false}
                    />
                    ))}
                </div>
                ))}
            </div>
        </div>
        <div className="faixa-dois">
        </div>
    </div>
  );
};

export default Carousel;