import "./mobile-popup.css";

export function initMobilePopup() {
  const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const hasSeenPopup = sessionStorage.getItem("mobile-popup-seen");

  console.log("Mobile Popup Debug:", {
    innerWidth: window.innerWidth,
    userAgent: navigator.userAgent,
    isMobile,
    hasSeenPopup
  });

  if (isMobile && !hasSeenPopup) {
    showPopup();
  }
}

function showPopup() {
  const overlay = document.createElement("div");
  overlay.id = "mobile-popup-overlay";

  const content = document.createElement("div");
  content.className = "mobile-popup-content";

  // Icon SVG (Desktop/Laptop)
  const iconSvg = `
  <div class="mobile-popup-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  </div>`;

  content.innerHTML = `
    ${iconSvg}
    <h2>Desktop Recommended</h2>
    <p>For the best immersive experience and to access all 3D features, I recommend using a desktop or laptop device.</p>
    <button class="mobile-popup-btn" id="mobile-popup-continue">Continue on Mobile</button>
  `;

  overlay.appendChild(content);
  document.body.appendChild(overlay);

  // Prevent background scrolling
  document.body.style.overflow = "hidden";

  document.getElementById("mobile-popup-continue")?.addEventListener("click", () => {
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.3s ease";
    setTimeout(() => {
      document.body.removeChild(overlay);
      document.body.style.overflow = ""; // Restore scrolling
      sessionStorage.setItem("mobile-popup-seen", "true");
    }, 300);
  });
}
