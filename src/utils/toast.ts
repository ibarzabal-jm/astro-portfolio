let toastCounter = 0;

export function showToast(
  message: string,
  type: "success" | "error" | "info" = "success",
  duration: number = 3000
) {
  const toastContainer = document.getElementById("toast-container");
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  const toastId = `toast-${toastCounter++}`;
  toast.id = toastId;

  toastContainer.appendChild(toast);

  void toast.offsetWidth;

  toast.classList.add("show");
  toast.classList.add(type);

  setTimeout(() => {
    toast.classList.remove("show");
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }, duration);
}
