import emailjs from '@emailjs/browser';

export function initContactForm() {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    if (!form) return;

    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    // Initialize EmailJS
    emailjs.init(PUBLIC_KEY);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
            .then(() => {
                // Success feedback
                submitBtn.innerHTML = 'Message Sent! ✅';
                submitBtn.classList.add('success');
                form.reset();

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('success');
                }, 3000);
            })
            .catch((error) => {
                console.error('FAILED...', error);

                // Error feedback
                submitBtn.innerHTML = 'Failed ❌';
                alert('Failed to send message. Please try again or contact me directly via email.');

                // Reset button
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            });
    });
}
