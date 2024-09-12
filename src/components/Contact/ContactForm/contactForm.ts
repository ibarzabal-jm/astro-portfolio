import { showToast } from "@src/utils/toast";

const form = document.getElementById("contact-form") as HTMLFormElement;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      showToast("¡Mensaje enviado con éxito!");
      form.reset();

      const confetti = (await import("canvas-confetti")).default;

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } else {
      throw new Error("Error en el envío del formulario");
    }
  } catch (error) {
    console.error("Error:", error);
    showToast(
      "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o ponte en contacto conmigo por otro medio.",
      "error"
    );
  }
});
