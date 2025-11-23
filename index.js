const menuItems = document.querySelectorAll(".header__menu__item");
const categorys = document.querySelectorAll(".category");
const home_title = document.querySelector('.home__title');

window.onload = () => {

    let date = new Date()
    let hour = date.getHours();

    if (0<hour && hour<12) {
        home_title.textContent ='좋은 아침입니다~';
    } else if(12<=hour && hour<18) {
        home_title.textContent = '좋은 오후입니다~';
    } else {
        home_title.textContent = '좋은 저녁입니다~'
    }

    renderProjects();

    menuItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            // 먼저 모든 active 제거
            menuItems.forEach((i) => i.classList.remove("active"));
            
            // 클릭한 것만 active 추가
            item.classList.add("active"); // focusing
            
            // 해당 영역으로 부드럽게 스크롤
            scrollToTarget(e.target.id.substr(3)); // to_home -> home
        });
    });

    categorys.forEach((category) => {
      category.addEventListener("click", (e) => {
        categorys.forEach((i) => i.classList.remove("category--selected"));

        category.classList.add("category--selected");

        renderProjects();
      });
    });
}


function scrollToTarget(clickedId) {
  const targetElement = document.getElementById(clickedId);
  targetElement.scrollIntoView({ behavior: "smooth" });
}


function renderProjects() {
    const ul = document.querySelector(".projects");  
    ul.innerHTML = "";   // 기존 목록 비우기

    // 클릭된 버튼 요소
    const btn = document
        .querySelector('.category--selected');

    // 버튼 안의 category__count 가져오기
    const count 
        = Number(btn.querySelector('.category__count')
                .textContent);   // 숫자로 변환
    
    // 프로젝트 개수만큼 li 생성
    for (let i = 0; i < count; i++) {
        const li = document.createElement("li");
        li.classList.add("project");
        li.innerHTML = `
          <a href="#" target="_blank">
            <img
              class="project__img"
              src="./images/pf.webp"
              alt="포트폴리오"
            />
            <div class="project__metadata">
              <h3 class="project__title">Project #${i + 1}</h3>
              <p>클론코딩 사이트</p>
            </div>
          </a>
          `;
        ul.appendChild(li);
    }

    // DOM 업데이트된 다음 프레임에서 show 부여 (동시 애니메이션)
    requestAnimationFrame(() => {
        document.querySelectorAll(".project").forEach(card => {
            card.classList.add("show");
        });
    });

}
