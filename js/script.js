document.addEventListener(`DOMContentLoaded`, function () {
  // AOS연결
  AOS.init();

  window.addEventListener(`wheel`, (event) => {
    const headerArea = document.querySelector(`.header_area`);

    if (event.deltaY > 0) {
      headerArea.classList.remove(`scroll`);
    } else {
      headerArea.classList.add(`scroll`);
    }
  });
  var swiper = new Swiper(`.firstSwiper`, {
    loop: true,
    autoplay: {
      delay: 3500,
    },
    pagination: {
      el: ".pagination_fraction",
      type: "fraction",
    },
  });
  var swiper = new Swiper(`.secondSwiper`, {
    loop: true,
    autoplay: {
      delay: 1500,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    effect: "coverflow",
    initialSlide: 1,
    coverflowEffect: {
      rotate: 0,
      stretch: 20,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: `.swiper-pagination`,
      clickable: true,
    },
  });
  var swiper = new Swiper(`.thirdSwiper`, {
    loop: true,
    autoplay: {
      delay: 3500,
    },
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 35,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 35,
      },
      1550: {
        slidesPerView: 5,
        spaceBetween: 35,
      },
    },
    pagination: {
      el: `.swiper-pagination`,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const modalBtns = document.querySelectorAll(`.text_icon`);
  const modalBoxes = document.querySelectorAll(`.card`);

  for (const btn of modalBtns) {
    btn.addEventListener(`click`, function () {
      modalBoxes.forEach((modalBox) => modalBox.classList.remove(`modalopen`));

      const modalId = this.getAttribute(`data-modal`);
      const changemodal = document.querySelector(`#${modalId}`);
      if (changemodal) {
        changemodal.classList.add(`modalopen`);
      }
    });
  }
  // 각 모달 창에 대해 닫기 기능을 추가
  modalBoxes.forEach((modalBox) => {
    modalBox.addEventListener(`click`, function (event) {
      // 클릭한 대상이 모달 창 자체인 경우에만 닫기
      if (event.target === event.currentTarget) {
        this.classList.remove(`modalopen`);
      }
    });
  });

  // 이벤트 버블링
  // 현재 blackBg ui 모달창에 내용을 눌러도 닫힘 <- 이벤트 버블링이라고 한다

  //자비스크립트 속성 중 하나인 target / currentTarget 을 사용해서 이벤트 버블링을 막아줌
  // target => 지금 클릭한 요소가 무엇인지 반환해줌
  // curruntTarget => 지금 이벤트핸들러가 달린곳이 어딘지 반환해주

  // 상단 이동 버튼 만들기
  const topBtn = document.querySelector(`.top_btn`);

  topBtn.addEventListener(`click`, () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`, // 자연스럽게 올라가는 모션
    });
  });
});
