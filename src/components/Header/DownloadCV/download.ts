import { showToast } from "@src/utils/toast";

document.addEventListener("astro:page-load", () => {
  const buttons = document.querySelectorAll(".downloadCV-button");

  buttons?.forEach((button) => {
    button?.addEventListener("click", async () => {
      try {
        const response = await fetch("/juan-manuel-ibarzabal-cv.pdf");
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "JuanmaIbarzabal-CV.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);

        const confetti = await import("canvas-confetti");
        confetti.default({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (error) {
        showToast("Error al descargar el CV", "error");
      }
    });
  });
});
