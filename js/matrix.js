// Matrix effect JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.createElement("canvas");
    document.querySelector(".matrix-animation").appendChild(canvas);
    const ctx = canvas.getContext("2d");
  
    const columns = canvas.width = window.innerWidth;
    const rows = canvas.height = window.innerHeight;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
    const fontSize = 14;
    const drops = Array(columns).fill(1);
  
    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = "#0F0"; // Green color for Matrix text
      ctx.font = `${fontSize}px monospace`;
  
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
  
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
  
        drops[i]++;
      }
    }
  
    setInterval(draw, 30);
  });