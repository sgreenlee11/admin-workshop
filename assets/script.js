(function () {
  const toast = document.querySelector(".toast");
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 1800);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied to clipboard");
    } catch {
      showToast("Copy failed");
    }
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-copy-target], [data-copy-text]");
    if (!button) return;

    const directText = button.getAttribute("data-copy-text");
    if (directText) {
      copyText(directText);
      return;
    }

    const targetId = button.getAttribute("data-copy-target");
    const target = document.getElementById(targetId);
    if (target) {
      copyText(target.innerText.trim());
    }
  });
})();
