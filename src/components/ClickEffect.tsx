import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
}

const ClickEffect = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Create new bubble at click position
      const newBubble: Bubble = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setBubbles(prev => [...prev, newBubble]);

      // Play water drop sound
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhCT2b3/DJdSEDKXfI5dODLgYRUrDm7KhWDQg+ltruumwdBzuSy+fKczMID3Wn5ex9NggUUq/f5KJQDwU=');
      audio.volume = 0.3;
      audio.play().catch(() => {
        // Ignore audio play errors
      });

      // Remove bubble after animation
      setTimeout(() => {
        setBubbles(prev => prev.filter(bubble => bubble.id !== newBubble.id));
      }, 800);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute animate-water-bubble"
          style={{
            left: bubble.x - 15,
            top: bubble.y - 15,
          }}
        >
          <div className="water-bubble">
            <div className="bubble-inner"></div>
            <div className="bubble-shine"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClickEffect;