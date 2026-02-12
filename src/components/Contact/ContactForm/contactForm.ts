import { showToast } from "@src/utils/toast";

const form = document.getElementById("contact-form") as HTMLFormElement | null;

if (!form) {
  throw new Error("Contact form not found");
}

const successMessage = form.dataset.successMessage ?? "Message sent successfully";
const errorMessage = form.dataset.errorMessage ?? "Error sending form";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const fetchUrl = "https://api.web3forms.com/submit";

  try {
    const response = await fetch(fetchUrl, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      showToast(successMessage);
      form.reset();

      const confetti = (await import("canvas-confetti")).default;

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } else {
      throw new Error("Error submitting form");
    }
  } catch (error) {
    console.error("Error:", error);
    showToast(errorMessage, "error");
  }
});
