import "./main.css";
import WebGL from "./webgl";
import { initAnimations } from "./animations";
import { initContactForm } from "./contact-form";
import { initResumeWindow } from "./resume-window";
import { initMobilePopup } from "./mobile-popup";

WebGL();
initAnimations();
initContactForm();
initResumeWindow();
initMobilePopup();

const root = document.documentElement;

function onScroll() {
  if (window.scrollY > 10) root.dataset.scroll = "true";
  else root.dataset.scroll = "false";
}
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
