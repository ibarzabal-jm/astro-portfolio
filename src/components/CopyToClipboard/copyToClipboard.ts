import { showToast } from "../../utils/toast";

function setupCopyToClipboard() {
  const copyButtons = document.querySelectorAll<HTMLButtonElement>(".copy-button");

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const textToCopy = button.getAttribute("data-value");
      const successMessage = button.dataset.successMessage ?? "Copied";
      const errorMessage = button.dataset.errorMessage ?? "Error";

      if (textToCopy) {
        try {
          await navigator.clipboard.writeText(textToCopy);

          copyButtons.forEach((btn) => btn.classList.remove("copied"));

          button.classList.add("copied");

          showToast(successMessage, "success");

          setTimeout(() => {
            button.classList.remove("copied");
          }, 3000);
        } catch (err) {
          console.error("Failed to copy text: ", err);
          showToast(errorMessage, "error");
        }
      }
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupCopyToClipboard);
} else {
  setupCopyToClipboard();
}

document.addEventListener("astro:after-swap", setupCopyToClipboard);
