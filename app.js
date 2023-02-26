window.addEventListener("load", () => {
    setTimeout(() => {
      const loader = document.querySelector(".loader-container");
      if(loader) {
        loader.classList.add("hide-loader");
      setTimeout(() => {
        loader.remove();
      }, 2000);
      }
    }, 2000);
  });
  
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  
  const textWrapper = document.querySelector(".scroll-text-wrapper");
  const text = document.querySelector(".scroll-text");
  const textBox = document.querySelector(".main-content");
  
  const bottomLineValue = textWrapper && (textWrapper.scrollTop + textWrapper.clientHeight)  / 3;
  
  let opacity = 1;
  let scrollPos = 0;
  
  const checkPosition = () => {
    const windowY = textBox.scrollTop;
    if (bottomLineValue > scrollPos && windowY < scrollPos) {
      text.classList.add("is-visible");
      text.classList.remove("is-hidden");
    } else if(bottomLineValue < scrollPos && windowY > scrollPos) {
      text.classList.add("is-hidden");
      text.classList.remove("is-visible");
    }
    scrollPos = windowY;
  };
  
  textBox && textBox.addEventListener("scroll", checkPosition);
  

  const menuToggle1 = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".menu-items");

menuToggle1.addEventListener("click", () => {
  menuItems.classList.toggle("show");
});