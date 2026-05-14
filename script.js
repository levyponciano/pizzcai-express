const BUSINESS = {
  phoneDisplay: "(88) 9712-9193",
  phoneInternational: "558897129193",
  whatsappMessage: "Olá! Vim pelo site e gostaria de fazer um pedido na PizzÇAÍ Express."
};

const REVEAL_SELECTOR = [
  ".menu-preview",
  ".feature-card",
  ".final-cta"
].join(", ");

const REVEAL_OPTIONS = {
  threshold: 0.16,
  rootMargin: "0px 0px -40px"
};

function getWhatsappUrl() {
  const encodedMessage = encodeURIComponent(BUSINESS.whatsappMessage);

  return `https://wa.me/${BUSINESS.phoneInternational}?text=${encodedMessage}`;
}

function updateContactLinks() {
  const whatsappUrl = getWhatsappUrl();
  const phoneText = document.querySelector("#phoneText");

  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
    link.href = whatsappUrl;
  });

  if (phoneText) {
    phoneText.textContent = BUSINESS.phoneDisplay;
  }
}

function revealImmediately(items) {
  items.forEach((item) => {
    item.classList.add("is-visible");
  });
}

function setupScrollReveal() {
  const animatedItems = document.querySelectorAll(REVEAL_SELECTOR);

  if (!("IntersectionObserver" in window)) {
    revealImmediately(animatedItems);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    REVEAL_OPTIONS
  );

  animatedItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.transitionDelay = `${Math.min(index * 55, 280)}ms`;
    observer.observe(item);
  });
}

updateContactLinks();
setupScrollReveal();
