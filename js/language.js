var lang = {
  EN: {
    // menu Desktop
    firstItem: "Home",
    secondItem: "About Me",
    thirdItem: "Services",
    fourthItem: "Skill",
    fifthItem: "contact me",

    // menu mobile
    firstItemMo: "Home",
    secondItemMo: "About Me",
    thirdItemMo: "Services",
    fourthItemMo: "Skill",
    fifthItemMo: "Contact me",
    darkMo: "Dark Mode",
    langMo: "Language",

    headTextHi: "Hi, im",
    myName: "Mohammadreza Lotfi",
    HeadText: "a front-end developer who loves artistic expression with my mouse and keyboard to impact everyone! In the digital world, every line of code is a piece of art for me, and by ..."
  },

  FA: {
    // menu Desktop
    firstItem: "خانه",
    secondItem: "درباره من",
    thirdItem: "خدمات",
    fourthItem: "مهارت‌ها",
    fifthItem: "ارتباط با من",

    // menu mobile
    firstItemMo: "خانه",
    secondItemMo: "درباره من",
    thirdItemMo: "خدمات",
    fourthItemMo: "مهارت‌ها",
    fifthItemMo: "ارتباط با من",
    darkMo: "حالت تاریک",
    langMo: "زبان سایت",

    // Head Text
    headTextHi: "سلام! من",
    myName: "محمدرضا لطفی هستم",
    HeadText: "سلام! من یک توسعه‌دهنده Front-end هستم که عاشق هنرنمایی با موس و کیبردشه تا همه رو تحت تاثیر قرار بده. در دنیای دیجیتال، هر خط کد یک قطعه هنریست و من با ..."
  },
};

if (window.location.hash) {
  if (window.location.hash === "#FA") {
    document.getElementById("html").style.direction = "rtl";
    firstItem.textContent = lang.FA.firstItem;
    secondItem.textContent = lang.FA.secondItem;
    thirdItem.textContent = lang.FA.thirdItem;
    fourthItem.textContent = lang.FA.fourthItem;
    fifthItem.textContent = lang.FA.fifthItem;
    // menu Desktop

    firstItemMo.textContent = lang.FA.firstItemMo;
    secondItemMo.textContent = lang.FA.secondItemMo;
    thirdItemMo.textContent = lang.FA.thirdItemMo;
    fourthItemMo.textContent = lang.FA.fourthItemMo;
    fifthItemMo.textContent = lang.FA.fifthItemMo;
    darkMo.textContent = lang.FA.darkMo;
    langMo.textContent = lang.FA.langMo;
    // Menu mobile

    headTextHi.textContent = lang.FA.headTextHi;
    myName.textContent = lang.FA.myName;
    HeadText.textContent = lang.FA.HeadText;
    langMo.textContent = lang.FA.langMo;

  }
}

let reload = document.querySelectorAll(".relode");
for (i = 0; i <= reload.length; i++) {
  reload[i].onclick = function () {
    window.location.hash = this.getAttribute("href");
    window.location.reload();
  };
}
