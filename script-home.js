document.addEventListener("DOMContentLoaded", function () {

  /* ===== MENU SYSTEM ===== */

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if(menuBtn && mobileMenu){
    menuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  /* ===== TRANSLATE BUTTON (NAVBAR) ===== */

  const translateBtn = document.getElementById("translateBtn");
  const languageMenuNav = document.getElementById("languageMenuNav");

  if(translateBtn && languageMenuNav){
    translateBtn.addEventListener("click", () => {
      languageMenuNav.classList.toggle("hidden");
    });
  }

  /* ===== LANGUAGE ICON (BILINGUAL) ===== */

  const langIcon = document.getElementById("langIcon");
  const languageMenuIcon = document.getElementById("languageMenuIcon");

  if(langIcon && languageMenuIcon){
    langIcon.addEventListener("click", function(){
      languageMenuIcon.classList.toggle("hidden");
    });
  }

  /* ===== CAIRO CLOCK ===== */

  function updateCairoTime(){
    const el = document.getElementById("cairoTime");
    if(!el) return;

    const cairoTime = new Date().toLocaleTimeString("en-US",{
      timeZone: "Africa/Cairo",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

    el.textContent = cairoTime;
  }

  updateCairoTime();
  setInterval(updateCairoTime,1000);

  /* ===== MUSEUM ===== */

  function updateMuseum(){
    const statusElement = document.getElementById("museumStatus");
    const capacityText = document.getElementById("museumCapacity");
    const capacityBar = document.getElementById("capacityBar");

    if(!statusElement || !capacityText || !capacityBar) return;

    const now = new Date();
    const cairoTime = new Date(now.toLocaleString("en-US",{timeZone:"Africa/Cairo"}));
    const hour = cairoTime.getHours();

    if(hour >= 9 && hour < 17){
      statusElement.textContent = "Open Now";
      statusElement.style.color = "#22c55e";

      let capacity = Math.floor(Math.random()*55)+40;

      capacityText.textContent = capacity + "% Full";
      capacityBar.style.width = capacity + "%";
    } else {
      statusElement.textContent = "Closed";
      statusElement.style.color = "#ef4444";

      capacityText.textContent = "0% Full";
      capacityBar.style.width = "0%";
    }
  }

  updateMuseum();
  setInterval(updateMuseum,10000);

  /* ===== IMHOTEP ===== */

// اختيار العناصر مرة واحدة بس
const imhotep = document.querySelector(".imhotep-ai");
const chat = document.querySelector(".chatbot");

// تشغيل الشات بدل الـ alert
if (imhotep && chat) {
  imhotep.onclick = function () {
    chat.style.display = "flex";
  };
}



  /* ===== SLIDER ===== */

  let index = 0;

  window.nextSlide = function () {
    const slider = document.getElementById("slider");
    if(!slider) return;

    index = (index + 1) % 2;
    slider.style.transform = `translateX(-${index * 100}%)`;
  };

  window.prevSlide = function () {
    const slider = document.getElementById("slider");
    if(!slider) return;

    index = (index - 1 + 2) % 2;
    slider.style.transform = `translateX(-${index * 100}%)`;
  };

});

/* ===== CHANGE LANGUAGE (FIXED) ===== */

function changeLanguage(lang) {
  const interval = setInterval(() => {
    const select = document.querySelector(".goog-te-combo");

    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));

      // يقفل كل المنيوهات بعد الاختيار
      document.getElementById("languageMenuNav")?.classList.add("hidden");
      document.getElementById("languageMenuIcon")?.classList.add("hidden");

      clearInterval(interval);
    }
  }, 500);
}



function openTour() {
  document.getElementById("tourModal").classList.remove("hidden");

  pannellum.viewer('panorama', {
    type: 'equirectangular',
    panorama: '',
    autoLoad: true,
    showControls: true
  });
}

function closeTour() {
  document.getElementById("tourModal").classList.add("hidden");
}

let currentTour = 0;

function openTour() {
  document.getElementById("tourModal").classList.remove("hidden");
}

function closeTour() {
  document.getElementById("tourModal").classList.add("hidden");
}

function updateSlider() {
  const slider = document.getElementById("tourSlider");
  slider.style.transform = `translateX(-${currentTour * 100}%)`;
}

function nextTour() {
  const total = document.querySelectorAll("#tourSlider iframe").length;
  currentTour = (currentTour + 1) % total;
  updateSlider();
}

function prevTour() {
  const total = document.querySelectorAll("#tourSlider iframe").length;
  currentTour = (currentTour - 1 + total) % total;
  updateSlider();
}



function playVoice1() {

  const text = `
    The golden mask of Tutankhamun is one of the most iconic symbols of ancient Egypt.
  `;

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";

  speech.rate = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}

function playVoice2() {

  const text = `
    The Pyramid of Menkaure is the smallest of the three pyramids of Giza.
  `;

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";

  speech.rate = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}






const toggleBtn = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

// تحميل الوضع من قبل
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
  icon.textContent = "light_mode";
} else {
  icon.textContent = "dark_mode";
}

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    icon.textContent = "light_mode";
  } else {
    localStorage.setItem("theme", "light");
    icon.textContent = "dark_mode";
  }
});


/* ================= CHATBOT SYSTEM ================= */

const openChat = document.getElementById("openChat");
const closeChat = document.getElementById("closeChat");
const chatbotModal = document.getElementById("chatbotModal");

openChat.onclick = () => {
  chatbotModal.classList.remove("hidden");
};

closeChat.onclick = () => {
  chatbotModal.classList.add("hidden");
};

/* ================= LOAD FAQ ================= */

async function loadFAQ(){

  const container = document.getElementById("faq-container");

  if(!container) return;

  container.innerHTML = "";

  try{

    const response = await fetch(
      "https://egyptdiscover2.runasp.net/api/FAQ/Quastions"
    );

    const data = await response.json();

    for(const item of data){

      const answerResponse = await fetch(
        `https://egyptdiscover2.runasp.net/api/FAQ/Answer${item.id}`
      );

      const answerData = await answerResponse.json();

      const card = document.createElement("div");

      card.className = "faq-card";

      card.innerHTML = `
      
        <div class="faq-question">
          ${item.question}
        </div>

        <div class="faq-answer">
          ${answerData.answer}
        </div>

      `;

      container.appendChild(card);
    }

  }catch(error){

    console.error(error);

    container.innerHTML = `
      <p style="color:red;">
        Failed to load FAQ
      </p>
    `;
  }
}

loadFAQ();

/* ================= LOAD FAQ ================= */

async function loadFAQ(){

  const container = document.getElementById("faq-container");

  if(!container) return;

  container.innerHTML = "";

  try{

    const response = await fetch(
      "https://egyptdiscover2.runasp.net/api/FAQ/Quastions"
    );

    const data = await response.json();

    for(const item of data){

      const answerResponse = await fetch(
        `https://egyptdiscover2.runasp.net/api/FAQ/Answer${item.id}`
      );

      const answerData = await answerResponse.json();

      const card = document.createElement("div");

      card.className = "faq-card";

      card.innerHTML = `

        <!-- السؤال -->
        <div class="faq-question-box">

          <button class="faq-question-btn">

            <span class="faq-question">
              ${item.question}
            </span>

            <span class="faq-icon">
              +
            </span>

          </button>

        </div>

        <!-- الإجابة -->
        <div class="faq-answer hidden">

          ${answerData.answer}

        </div>

      `;

      /* TOGGLE */

      const btn = card.querySelector(".faq-question-btn");

      const answer = card.querySelector(".faq-answer");

      const icon = card.querySelector(".faq-icon");

      btn.onclick = async () => {

  const isHidden = answer.classList.contains("hidden");

  // قفل لو مفتوح
  if(!isHidden){

    answer.classList.add("hidden");

    icon.innerText = "+";

    return;
  }

  // فتح
  answer.classList.remove("hidden");

  icon.innerText = "−";

  // فضي الإجابة
  answer.innerHTML = "";

  // النص الحقيقي
  const fullText = answerData.answer;

  // typing effect
  let i = 0;

  const typing = setInterval(() => {

    answer.innerHTML += fullText.charAt(i);

    i++;

    if(i >= fullText.length){

      clearInterval(typing);

    }

  }, 20);

};

      container.appendChild(card);
    }

  }catch(error){

    console.error(error);

    container.innerHTML = `
      <p style="color:red;">
        Failed to load FAQ
      </p>
    `;
  }
}

loadFAQ();
function updateClock(){

const cairo = new Date().toLocaleString("en-US",{
timeZone:"Africa/Cairo"
});

const now = new Date(cairo);

document.getElementById("clock").innerText =
now.toLocaleTimeString();

document.getElementById("date").innerText =
now.toLocaleDateString();

document.getElementById("utc").innerText =
new Date().toUTCString().split(" GMT")[0];

}

updateClock();

setInterval(updateClock,1000);
///////*عمليات تسجيل الدخول ///
const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

const profileContainer =
  document.getElementById("profileContainer");

const dashboardLink =
  document.getElementById("dashboardLink");

const logoutMenuBtn =
  document.getElementById("logoutMenuBtn");

if (token) {

  loginBtn?.classList.add("hidden");
  registerBtn?.classList.add("hidden");

  profileContainer?.classList.remove("hidden");

  if (role === "Admin") {
    dashboardLink?.classList.remove("hidden");
  }

} else {

  profileContainer?.classList.add("hidden");
}

logoutMenuBtn?.addEventListener("click", () => {

  localStorage.clear();

  window.location.href = "/home.html";
});
const profileBtn = document.getElementById("profileBtn");
const profileMenu = document.getElementById("profileMenu");

if (profileBtn && profileMenu) {

  profileBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    profileMenu.classList.toggle("hidden");

  });

  document.addEventListener("click", (e) => {

    if (!profileBtn.contains(e.target) &&
        !profileMenu.contains(e.target)) {

      profileMenu.classList.add("hidden");

    }

  });

}
async function loadOrdersCount() {

  const token = localStorage.getItem("token");

  if (!token) return;

  try {

    const response = await fetch(
      "https://egyptdiscover2.runasp.net/api/Orders/My-Orders",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (!response.ok) return;

    const orders = await response.json();

    const badge = document.getElementById("ordersCount");

    badge.textContent = orders.length;

    if (orders.length > 0) {
      badge.classList.remove("hidden");
    }

  } catch (error) {

    console.error(error);

  }
}

loadOrdersCount();
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




/////تحويل الفيديو

const slides = document.querySelectorAll(".slide");

let current = 0;
let autoStarted = false;

function showSlide(index) {
  slides.forEach(slide => slide.classList.add("hidden"));
  slides[index].classList.remove("hidden");
}

function startAutoSlide() {

  if (autoStarted) return;

  autoStarted = true;

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
  startAutoSlide();
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
  startAutoSlide();
});
