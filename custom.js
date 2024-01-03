// const img = document.querySelector('img');

// // https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/0001.jpg

// const a = 10;
// const b = a.toString().padStart(4, '0'); // 지정된 숫자에 대해 첫번째 파라미터 길이로 두번째 파라미터 문자로 채워줌.

// console.log(b);

const headerHeight = document.querySelector('header').offsetHeight;
const heroSection = document.querySelector('.section-01');
console.log(headerHeight);

heroSection.style.marginTop = headerHeight + 50 + 'px';

// GSAP 효과지정
const imgObj = document.querySelector('#hero-lightpass');
const mainText = document.querySelector('.main-elem');
const msgText1 = document.querySelector('.msg-elem-01');
const msgText2 = document.querySelector('.msg-elem-02');
const msgText3 = document.querySelector('.msg-elem-03');
const msgText4 = document.querySelector('.msg-elem-04');


// Image Sequence Setting
const frameCount = 147;
const images = []; // images 라는 배열 변수를 만들어줬다
// frame이 여러개이기때문에 초기값을 만들어줘야한다
const airpods = { 
  // timeline 에 사용할 객체: 초기값 0
  frame: 0,
};

// Image 배열로 추출
const currentFrame = (index) => `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`

for(let i = 0; i < frameCount; i++){
  images.push(currentFrame(i)); // 비워둔 images 배열변수에 이 값을 넣어라
}

// console.log(images);




let tl0 = gsap.timeline();
tl0
  .add('start0') // 시작 지점 지정 : 직접 생성하는 이름
  .fromTo(imgObj, {opacity:0}, {opacity:1, duration:2}, 'start0')
  .fromTo(mainText, {opacity:0}, {opacity:1, duration:2}, 'start0');


  // ScrollMagic 효과 지정 : 이미지 시퀀스 실행
  let tl1 = gsap.timeline();

  // 시퀀스 시작
  tl1
  .add('start0')
  .to(mainText, {opacity:0, duration:3, y:-500}, 'start0') // ; 마침표 없이 끝내서 효과를 연결시킨다
  .to(airpods, {
    duration: 8,
    frame: 140,
    snap: 'frame', // frame을 snap으로 지정하면, frame이 정수로만 존재하도록 강제한다
    ease: 'none',
    onUpdate: () => {
      imgObj.setAttribute('src', images[airpods.frame])
    }
  }, 
  'start0' // 시작 지점 지정 : 직접 생성하는 이름
  )
  .add('start1')
  .to(msgText1, {duration:4, opacity:1, y:-50}, 'start1')
  .to(msgText1, {duration:4, opacity:0, y:-100})

  .add('start2')
  .to(msgText2, {duration:4, opacity:1, y:-50}, 'start2')
  .to(msgText2, {duration:4, opacity:0, y:-100})

  .add('start3')
  .to(msgText3, {duration:4, opacity:1, y:-50}, 'start3')
  .to(msgText3, {duration:4, opacity:0, y:-100})

  .add('start4')
  .to(msgText4, {duration:4, opacity:1, y:-50}, 'start4')
  .to(msgText4, {duration:4, opacity:0, y:-100})

  .to(imgObj, {duration: 36, scale: 0.5, ease: Power1.easeIn}, 'start0');

  // ScrollMagic 효과 지정
  let controller = new ScrollMagic.Controller(); // scrollmagic 컨트롤러 생성

  let scene1 = new ScrollMagic.Scene({
    triggerElement: '.section-01',
    duration: '4000', 
    triggerHook: 0.1, // 0.1 = 10% from the top of the viewport
  })
    .setTween(tl1)
    .setPin('.section-01')
    .addTo(controller) // 컨트롤러에 추가 
    .addIndicators() // 효과를 확인하기 위한 인디케이터 추가
