require("./../../global/js/global-entry")

import "./animationGDF.scss"
import gsap from "gsap"

let svgContent =
    require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par='xMidYMid slice'&class=''!./img/animationGDF.svg")
// console.log(svgContent);


document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", (event) => {
        gsap.to('.animationGDF', { opacity: 1 })

        gsap.to('#colloutGBtn >*', { repeat: -1, yoyo: true, transformOrigin: '50% 50%', scale: 1.08, duration: 0.4, ease: "sine.inOut" })

        let calloutElements = [
            { target: '#collout1', btn: '#collout1B', link: 'https://www.google.com/' },
            { target: '#collout2', btn: '#collout2B', popup: '#popup2' },
            { target: '#collout3', btn: '#collout3B', popup: '#popup3' },
            { target: '#collout4', btn: '#collout4B', popup: '#popup4' },
            { target: '#collout5', btn: '#collout5B', popup: '#popup5' },
            { target: '#collout6', btn: '#collout6B', popup: '#popup6' },
            { target: '#collout7', btn: '#collout7B', popup: '#popup7' },
            { target: '#collout8', btn: '#collout8B', link: 'https://www.youtube.com/' },
            { target: '#collout9', btn: '#collout9B', popup: '#popup9' },
            { target: '#collout10', btn: '#collout10B', popup: '#popup10' },
            { target: '#collout11', btn: '#collout11B', popup: '#popup11' },
        ]
        // gsap.set('#popupGroup', { autoAlpha: 0, pointerEvents: 'none' })
        calloutElements.forEach(function (elem, index, arr) {
            function hideBtn(params) {
                calloutElements
                    .filter(otherElement => otherElement !== elem)
                    .forEach(otherElement => gsap.to(otherElement.btn, { opacity: 1 }));
            }
            function showBtn(params) {
                calloutElements
                    .filter(otherElement => otherElement !== elem)
                    .forEach(otherElement => gsap.to(otherElement.btn, { opacity: 0 }));
            }
            if (elem.popup) {
                gsap.set(elem.popup, { autoAlpha: 0 })
                gsap.set('#popupBg', { autoAlpha: 0 })
                gsap.set('#animationGDF__popupClose', { autoAlpha: 0 })
            }
            document.querySelector(elem.target).addEventListener("mouseenter", function () {
                document.body.classList.add('active-links')
                showBtn()
            });
            document.querySelector(elem.target).addEventListener("mouseleave", function () {
                document.body.classList.remove('active-links')
                hideBtn()
            });
            document.querySelector(elem.btn).addEventListener("mouseenter", function () {
                document.body.classList.add('active-links')
                showBtn()
            });
            document.querySelector(elem.btn).addEventListener("mouseleave", function () {
                document.body.classList.remove('active-links')
                hideBtn()
            });

            document.querySelector(elem.target).addEventListener("click", function () {
                if (elem.popup) {
                    gsap.to(elem.popup, { autoAlpha: 1 })
                    gsap.to('#popupBg', { autoAlpha: 0.6 })
                    gsap.to('#animationGDF__popupClose', { autoAlpha: 1 })
                }
                if (elem.link) {
                    window.open(elem.link, '_blank');
                }
            });
            document.querySelector(elem.btn).addEventListener("click", function () {
                if (elem.popup) {
                    gsap.to(elem.popup, { autoAlpha: 1 })
                    gsap.to('#popupBg', { autoAlpha: 0.6 })
                    gsap.to('#animationGDF__popupClose', { autoAlpha: 1 })
                }
                if (elem.link) {
                    window.open(elem.link, '_blank');
                }
            });
            document.querySelector('#animationGDF__popupClose').addEventListener("click", function () {
                gsap.to(elem.popup, { autoAlpha: 0 })
                gsap.to('#popupBg', { autoAlpha: 0 })
                gsap.to('#animationGDF__popupClose', { autoAlpha: 0 })
            });
        });
    })
})