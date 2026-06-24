function initChatbot() {

  const openChat = document.getElementById("openChat");
  const closeChat = document.getElementById("closeChat");
  const chatbotModal = document.getElementById("chatbotModal");

  console.log(openChat);
  console.log(chatbotModal);

  if (openChat) {
    openChat.addEventListener("click", () => {
      chatbotModal.classList.remove("hidden");
    });
  }

  if (closeChat) {
    closeChat.addEventListener("click", () => {
      chatbotModal.classList.add("hidden");
    });
  }

  loadFAQ();
}

/* ================= FAQ ================= */

async function loadFAQ() {

  const container = document.getElementById("faq-container");

  if (!container) return;

  container.innerHTML = "";

  try {

    const response = await fetch(
      "https://egyptdiscover2.runasp.net/api/FAQ/Quastions"
    );

    const data = await response.json();

    data.forEach(async (item) => {

      const answerResponse = await fetch(
        `https://egyptdiscover2.runasp.net/api/FAQ/Answer${item.id}`
      );

      const answerData = await answerResponse.json();

      const card = document.createElement("div");

      card.className = "faq-card";

      card.innerHTML = `
        <div class="faq-question-box">

          <button class="faq-question-btn">

            <span class="faq-question">
              ${item.question}
            </span>

            <span class="faq-icon">+</span>

          </button>

        </div>

        <div class="faq-answer hidden">
          ${answerData.answer}
        </div>
      `;

      const btn = card.querySelector(".faq-question-btn");
      const answer = card.querySelector(".faq-answer");
      const icon = card.querySelector(".faq-icon");

      btn.addEventListener("click", () => {

        answer.classList.toggle("hidden");

        icon.innerText =
          answer.classList.contains("hidden")
            ? "+"
            : "−";

      });

      container.appendChild(card);

    });

  } catch (error) {

    console.error(error);

  }

}
/////ت

setInterval(() => {
  const before = new Date().getTime();
  debugger;
  const after = new Date().getTime();

  if (after - before > 100) {
    document.body.innerHTML = "";
    window.location.href = "about:blank";
  }
}, 1000);

document.addEventListener('contextmenu', e => e.preventDefault());

document.onkeydown = function(e) {
  if (
    e.keyCode === 123 ||
    (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) ||
    (e.ctrlKey && e.key === 'U')
  ) {
    return false;
  }
};
