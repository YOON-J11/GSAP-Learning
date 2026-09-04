// 1. line1 텍스트를 글자 단위로 쪼개기
const lien1El = document.querySelector(".line1");
const text = lien1El.textContent;  // "HELLO, I'M YOON"을 변수에 저장

lien1El.innerHTML = text.split("") //변수에 저장된걸 split으로 쪼갬 ["H", "E", "L", "L", "O"]  //text.split는 사용자가 지정한 구분기호를 기준으로 문장을 행과 열로나누는 함수이다. 띄어쓰기도 배열의 한 요소가 됨
    .map(char => {
        if (char === " ") {
            return `<span class="char space"></span>`; // char가 공백(" ")이면 span class="char space"></span> (빈 내용, space 클래스만 붙은 span)을 돌려줌
        }
        return `<span class="char">${char}</span>`; // char가 공백이 아니면 <span class="char">그 글자</span>을 돌려줌. 백틱(`)으로 감싼 문자열 안에서 ${...}를 쓰면, 그 안의 변수 값을 문자열에 끼워넣을 수 있다. 이걸 템플릿 리터럴이라고 함
        //공백을 그냥 <span> </span>으로 넣으면, CSS로 display: inline-block 처리한 span 안의 공백은 브라우저가 무시해버리는 경우가 있어서, 억지로 너비를 주는 space라는 별도 클래스를 붙여서 CSS(width: 20px 같은)로 간격을 보장
    })
    .join("");
    //["H", "E", "L", "L", "O"].join("")    ->    "HELLO" (배열을 다시 하나의 문자열로 합침)

  
    /*
        ## JS 배열 메서드
            - split() : 문자열 → 배열로 쪼갬
            - map() : 배열 각 원소를 가공해서 새 배열 만듦
            - join() : 배열 → 문자열로 합침
            - forEach() : 배열 각 원소마다 반복 실행
    */
// ── 2. 전체 타임라인 구성 ──
const tl = gsap.timeline();

tl.to(".line1 .char", {
    y: "0%",
    duration: 0.8,
    ease: "power4.out",
    stagger: 0.03, // 글자마다 순차적으로
})
    .to(".line2 span", {
        y: "0%",
        duration: 1,
        ease: "power4.out",
    }, "-=0.4") // line1 글자들이 다 끝나기 전에 겹쳐서 시작
    .to(".line3 span", {
        y: "0%",
        duration: 1,
        ease: "power4.out",
    }, "-=0.7");
