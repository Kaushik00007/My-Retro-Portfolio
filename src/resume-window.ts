export function initResumeWindow() {
    const modal = document.getElementById('resume-window');
    const overlay = document.getElementById('window-overlay');
    const openBtn = document.querySelector('.resume-open-btn');
    const closeBtn = document.querySelector('.close-btn');
    const titleBar = document.querySelector('.window-title-bar') as HTMLElement;

    // Actions
    const printBtn = document.getElementById('resume-print');

    // State
    let isDragging = false;
    let currentX = 0;
    let currentY = 0;
    let initialX = 0;
    let initialY = 0;
    let xOffset = 0;
    let yOffset = 0;

    if (!modal || !overlay || !openBtn || !closeBtn || !titleBar) return;

    // OPEN
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        overlay.classList.add('active');

        // Reset position on open
        xOffset = 0;
        yOffset = 0;
        modal.style.transform = ""; 
    });

    // CLOSE
    const closeModal = () => {
        modal.classList.remove('active');
        overlay.classList.remove('active');
        const iframe = modal.querySelector('iframe');
        if (iframe) {
            const src = iframe.src;
            iframe.src = src; // Reload to reset
        }
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // PRINT
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            const iframe = modal.querySelector('iframe') as HTMLIFrameElement;
            if (iframe && iframe.contentWindow) {
                iframe.contentWindow.print();
            }
        });
    }

    // DRAGGABLE LOGIC (Desktop only)

    titleBar.addEventListener('mousedown', dragStart);
    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('mousemove', drag);

    function dragStart(e: MouseEvent) {
        if (window.innerWidth <= 768) return; // Disabled on mobile

        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        if (e.target === titleBar || (e.target as HTMLElement).closest('.window-title-bar')) {
            isDragging = true;
        }
    }

    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }

    function drag(e: MouseEvent) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, modal!);
        }
    }

    function setTranslate(xPos: number, yPos: number, el: HTMLElement) {
        el.style.transform = `translate(calc(-50% + ${xPos}px), calc(-50% + ${yPos}px))`;
    }
}
