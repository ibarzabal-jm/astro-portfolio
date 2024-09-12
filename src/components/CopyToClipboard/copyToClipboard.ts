import { showToast } from "../../utils/toast";

const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const textToCopy = button.getAttribute("data-value");
    if (textToCopy) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        button.classList.add("copied");
        showToast("¡Copiado al portapapeles!", "success");

        setTimeout(() => {
          button.classList.remove("copied");
        }, 3000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
        showToast("Error al copiar el texto", "error");
      }
    }
  });
});
