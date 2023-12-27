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

let tl0 = gsap.timeline();
tl0
  .add('start0') // 시작 지점 지정 : 직접 생성하는 이름
  .fromTo(imgObj, {opacity:0}, {opacity:1, duration:2}, 'start0')
  .fromTo(mainText, {opacity:0}, {opacity:1, duration:2}, 'start0');