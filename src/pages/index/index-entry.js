require("./../../global/js/global-entry")

import "./index.scss"
import gsap from "gsap"
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
/**
 * outImageUrl - change image url in svg (if image save with link)
 * needContent - return content to js file
 * par - preserveAspectRatio attribute for svg
 * class - class for svg <svg class=""></svg>
 * ./img/test_svg/test.svg - path to svg in src
 */
let svgContent =
    require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class='animation1'!./img/animation1.svg")
require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class='popupBtn'!./img/popupBtn.svg")
// console.log(svgContent);

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", (event) => {
        gsap.to('.animation', { opacity: 1 })
        gsap.set('#popup_collout11, #popup_collout12', { opacity: 0, pointerEvents: 'none' })
        // gsap.to('#frontAnim1,#collout_group', { filter: "blur(5px)", repeat: -1, yoyo: true, repeatDelay: 1 })

        let slide = [
            { target: '#slide1' },
            { target: '#slide2' },
            { target: '#slide3' },
            { target: '#slide4' },
        ]

        let calloutElements = [
            { target: '#Callout1', popup: '#popup_collout1', icon: '#btnColloutPopup1' },
            { target: '#Callout2', popup: '#popup_collout2', icon: '#btnColloutPopup2' },
            { target: '#Callout3', popup: '#popup_collout3', icon: '#btnColloutPopup3' },
            { target: '#Callout4', popup: '#popup_collout4', icon: '#btnColloutPopup4' },
            { target: '#Callout5', popup: '#popup_collout5', icon: '#btnColloutPopup5' },
            { target: '#Callout6', popup: '#popup_collout6', icon: '#btnColloutPopup6' },
            { target: '#Callout7', popup: '#popup_collout7', icon: '#btnColloutPopup7' },
            { target: '#Callout8', popup: '#popup_collout8', icon: '#btnColloutPopup8' },
            { target: '#Callout9', link: 'https://nationalhighways.co.uk/our-roads/future-roads/connecting-the-country/', icon: '#btnColloutLink9' },
            { target: '#Callout10', link: 'https://nationalhighways.co.uk/delivery-plan/index.html', icon: '#btnColloutLink10' },
            // { target: '#Callout11', link: 'https://www.google.com/', icon: '#btnColloutLink11' },
            // { target: '#Callout12', link: 'https://www.google.com/', icon: '#btnColloutLink12' },
            // { target: '#Callout13', link: 'https://www.gov.uk/guidance/rapid-charging-fund',icon:'#' },
            { target: '#Callout14', popup2: '#popup_collout14', icon: '#btnColloutPopup14' },
            { target: '#infographic1', slide: '.slide1', icon: '#btnColloutSLider1', slideIndex: 0 },
            { target: '#infographic2', slide: '.slide2', icon: '#btnColloutSLider2', slideIndex: 1 },
            { target: '#infographic3', slide: '.slide3', icon: '#btnColloutSLider3', slideIndex: 2 },
            { target: '#infographic4', slide: '.slide4', icon: '#btnColloutSLider4', slideIndex: 3 },
        ]
        let calloutSubElements = [
            { target: '#popup_collout1-link1', btn: '#btn_collout1-link1', link: 'https://highways.sharepoint.com/:b:/s/CyberSecurityCentreofExcellence/EWzsA8BC5R1DvaAfi9H66tMBc6jICTDLOhu-RW7R5uebhw?e=samcnB' },
            { target: '#popup_collout1-link2', btn: '#btn_collout1-link2', link: 'https://highways.sharepoint.com/:p:/s/CyberSecurityCentreofExcellence/EZXCZbhhcyVFr5lKX_ynQpIBuS14TCRey8vlRMSezsAXnw?e=kV5rBR' },
            { target: '#popup_collout1-link3', btn: '#btn_collout1-link3', link: 'https://highways.sharepoint.com/:b:/s/CyberSecurityCentreofExcellence/EdVxkRrRzrpFvC1S1WnMcF4BmTs3X-O0Izh43EaSAxXZCw?e=phUXA8' },
        ]
        let calloutSubElements5 = [
            { target: '#popup_collout5-link1', btn: '#btn_collout5-link1', link: 'https://www.cardiff.ac.uk/centre-for-cyber-security-research' },
            { target: '#popup_collout5-link2', btn: '#btn_collout5-link2', link: 'https://www.royalholloway.ac.uk/research-and-teaching/departments-and-schools/information-security/' },
            { target: '#popup_collout5-link3', btn: '#btn_collout5-link3', link: 'https://drf.eng.cam.ac.uk' },
            { target: '#popup_collout5-link4', btn: '#btn_collout5-link4', link: 'https://www.coventry.ac.uk/research/areas-of-research/centre-for-future-transport-and-cities/' },
            { target: '#popup_collout5-link5', btn: '#btn_collout5-link5', link: 'https://tas-security.lancs.ac.uk' },
        ]

        var swiper = new Swiper(".swiper", {
            // loop: true,
            // autoplay: true
            // allowTouchMove: false,
            navigation: {
                nextEl: "#btnSliderRight",
                prevEl: "#btnSliderLeft",
            }
        })

        let animBtnPopup = [
            '#btn_collout1-link1',
            '#btn_collout1-link2',
            '#btn_collout1-link3',
            '#btn_collout5-link1',
            '#btn_collout5-link2',
            '#btn_collout5-link3',
            '#btn_collout5-link4',
            '#btn_collout5-link5',
        ]
        gsap.set('#btnColloutLink11', { autoAlpha: 0 })
        gsap.set('#popup_bg', { autoAlpha: 0 })
        gsap.set('.popupBtn', { autoAlpha: 0, pointerEvents: 'none' })
        gsap.set('#btnPopup', { autoAlpha: 0, pointerEvents: 'none' })
        gsap.set('#btnPopup1', { autoAlpha: 0, pointerEvents: 'none' })
        gsap.to('#btnColloutSLider >*', { repeat: -1, yoyo: true, stagger: { each: '0.05', from: 'random' }, transformOrigin: '50% 50%', scale: 0.16, duration: 0.4, ease: "sine.inOut" })
        gsap.to('#btnColloutPopup >*', { repeat: -1, yoyo: true, stagger: { each: '0.05', from: 'random' }, transformOrigin: '50% 50%', scale: 0.16, duration: 0.4, ease: "sine.inOut" })
        gsap.to('#btnColloutLink >*', { repeat: -1, yoyo: true, stagger: { each: '0.05', from: 'random' }, transformOrigin: '50% 50%', scale: 0.16, duration: 0.4, ease: "sine.inOut" })
        gsap.to(animBtnPopup, { repeat: -1, yoyo: true, stagger: { each: '0.05', from: 'random' }, transformOrigin: '50% 50%', scale: 0.12, duration: 0.4, ease: "sine.inOut" })
        gsap.set(animBtnPopup, { filter: 'drop-shadow(5px 5px 5px #222)' });


        calloutElements.forEach(function (elem, index, arr) {

            let targetElement = document.querySelector(elem.target);
            let iconElement = document.querySelector(elem.icon);
            let closeBtnSlider = document.querySelector('#btnSliderHome');
            gsap.set(elem.target, { filter: 'contrast(1)' });
            gsap.set(elem.icon, { filter: 'drop-shadow(5px 5px 5px #222)' });

            if (elem.slide) {
                gsap.set('.animation-slider', { autoAlpha: 0, pointerEvents: 'none' })
                targetElement.addEventListener("click", function () {
                    swiper.slideTo(elem.slideIndex, 1);
                    gsap.to('.animation-slider', { autoAlpha: 1, pointerEvents: 'all' });
                    gsap.to('.animation1', { autoAlpha: 0 });
                    gsap.to('.popupBtn', { autoAlpha: 1, pointerEvents: 'all' });
                });
                iconElement.addEventListener("click", function () {
                    swiper.slideTo(elem.slideIndex, 1);
                    gsap.to('.animation-slider', { autoAlpha: 1, pointerEvents: 'all' });
                    gsap.to('.animation1', { autoAlpha: 0 });
                    gsap.to('.popupBtn', { autoAlpha: 1, pointerEvents: 'all' });
                });
                closeBtnSlider.addEventListener("click", function () {
                    gsap.to('.animation-slider', { autoAlpha: 0, pointerEvents: 'none' });
                    gsap.to('.animation1', { autoAlpha: 1 });
                    gsap.to('.popupBtn', { autoAlpha: 0, pointerEvents: 'none' });
                    gsap.set('#btnCollout', { autoAlpha: 1 });
                });
            }
            if (elem.popup) {
                gsap.set(elem.popup, { autoAlpha: 0 })
                document.querySelector('#btnPopup').addEventListener("click", function () {
                    gsap.to(elem.popup, { autoAlpha: 0 })
                    gsap.set('#btnCollout', { autoAlpha: 1 });
                    gsap.to('#popup_bg', { autoAlpha: 0 })
                    gsap.to('#btnPopup', { autoAlpha: 0, pointerEvents: 'none' })

                    gsap.set('#popup_collout1-link1', { autoAlpha: 0, pointerEvents: 'none' })
                    gsap.set('#popup_collout1-link2', { autoAlpha: 0, pointerEvents: 'none' })
                    gsap.set('#popup_collout1-link3', { autoAlpha: 0, pointerEvents: 'none' })

                    gsap.set('#popup_collout5-link1', { autoAlpha: 0, pointerEvents: 'none' })
                    gsap.set('#popup_collout5-link2', { autoAlpha: 0, pointerEvents: 'none' })
                    gsap.set('#popup_collout5-link3', { autoAlpha: 0, pointerEvents: 'none' })
                    gsap.set('#popup_collout5-link4', { autoAlpha: 0, pointerEvents: 'none' })
                    gsap.set('#popup_collout5-link5', { autoAlpha: 0, pointerEvents: 'none' })
                });
            }
            if (elem.popup2) {
                gsap.set(elem.popup2, { autoAlpha: 0 })
                document.querySelector('#btnPopup1').addEventListener("click", function () {
                    gsap.set('#btnCollout', { autoAlpha: 1 });
                    gsap.to(elem.popup2, { autoAlpha: 0 })
                    gsap.to('#popup_bg', { autoAlpha: 0 })
                    gsap.to('#btnPopup1', { autoAlpha: 0, pointerEvents: 'none' })
                });
            }

            document.querySelector(elem.target).addEventListener("mouseenter", function () {
                console.log(elem.target);
                document.querySelector('dfrnc-animation').classList.add('active-links')
                gsap.to(elem.icon, { opacity: 1 });
                gsap.to(elem.target, { filter: 'contrast(1.8)' });
                calloutElements
                    .filter(otherElement => otherElement !== elem)
                    .forEach(otherElement => gsap.to(otherElement.icon, { opacity: 0 }));
            });
            document.querySelector(elem.target).addEventListener("mouseleave", function () {
                document.querySelector('dfrnc-animation').classList.remove('active-links')
                calloutElements.forEach(otherElement => gsap.to(otherElement.icon, { opacity: 1 }));
                gsap.to(elem.target, { filter: 'contrast(1)' });
            });
            document.querySelector(elem.icon).addEventListener("mouseenter", function () {
                document.querySelector('dfrnc-animation').classList.add('active-links')
                gsap.to(elem.icon, { opacity: 1 });
                gsap.to(elem.target, { filter: 'contrast(1.8)' });
                calloutElements
                    .filter(otherElement => otherElement !== elem)
                    .forEach(otherElement => gsap.to(otherElement.icon, { opacity: 0 }));
            });
            document.querySelector(elem.icon).addEventListener("mouseleave", function () {
                document.querySelector('dfrnc-animation').classList.remove('active-links')
                calloutElements.forEach(otherElement => gsap.to(otherElement.icon, { opacity: 1 }));
                gsap.to(elem.target, { filter: 'contrast(1)' });

            });
            document.querySelector(elem.target).addEventListener("click", function () {
                if (elem.popup) {
                    gsap.set('#btnCollout', { autoAlpha: 0 });
                    gsap.to(elem.popup, { autoAlpha: 1 })
                    gsap.to('#popup_bg', { autoAlpha: 0.6 })
                    gsap.to('#btnPopup', { autoAlpha: 1, pointerEvents: 'all' })
                }
                if (elem.popup2) {
                    gsap.set('#btnCollout', { autoAlpha: 0 });
                    gsap.to(elem.popup2, { autoAlpha: 1 })
                    gsap.to('#popup_bg', { autoAlpha: 0.6 })
                    gsap.to('#btnPopup1', { autoAlpha: 1, pointerEvents: 'all' })
                }
                if (elem.slide) {
                    gsap.to(elem.slide, { autoAlpha: 1 })
                    gsap.to('#popup_bg', { autoAlpha: 0 })
                    // gsap.to('#btnSlider', { autoAlpha: 1, pointerEvents: 'all' })
                }
                if (elem.link) {
                    window.open(elem.link, '_blank');
                }
            });
            document.querySelector(elem.icon).addEventListener("click", function () {
                gsap.set('#btnCollout', { autoAlpha: 0 });
                if (elem.popup) {
                    console.log('click icon');
                    gsap.to(elem.popup, { autoAlpha: 1 })
                    gsap.to('#popup_bg', { autoAlpha: 0.6 })
                    gsap.to('#btnPopup', { autoAlpha: 1, pointerEvents: 'all' })
                }
                if (elem.popup2) {
                    gsap.to(elem.popup2, { autoAlpha: 1 })
                    gsap.to('#popup_bg', { autoAlpha: 0.6 })
                    gsap.to('#btnPopup1', { autoAlpha: 1, pointerEvents: 'all' })
                }
                if (elem.slide) {
                    gsap.to(elem.slide, { autoAlpha: 1 })
                    gsap.to('#popup_bg', { autoAlpha: 0 })
                    // gsap.to('#btnSlider', { autoAlpha: 1, pointerEvents: 'all' })
                }
                if (elem.link) {
                    window.open(elem.link, '_blank');
                    gsap.set('#btnCollout', { autoAlpha: 1 });

                }
            });
        });


        document.querySelector('#Callout1').addEventListener("click", function () {
            gsap.set('#popup_collout1-link1', { autoAlpha: 0, pointerEvents: 'all' })
            gsap.set('#popup_collout1-link2', { autoAlpha: 0, pointerEvents: 'all' })
            gsap.set('#popup_collout1-link3', { autoAlpha: 0, pointerEvents: 'all' })
        })
        document.querySelector('#btnColloutPopup1').addEventListener("click", function () {
            gsap.set('#popup_collout1-link1', { autoAlpha: 0, pointerEvents: 'all' })
            gsap.set('#popup_collout1-link2', { autoAlpha: 0, pointerEvents: 'all' })
            gsap.set('#popup_collout1-link3', { autoAlpha: 0, pointerEvents: 'all' })

        })
        document.querySelector('#Callout5').addEventListener("click", function () {
            gsap.set('#popup_collout5-link1', { autoAlpha: 0, pointerEvents: 'all' })
            gsap.set('#popup_collout5-link2', { autoAlpha: 0, pointerEvents: 'all' })
            gsap.set('#popup_collout5-link3', { autoAlpha: 0, pointerEvents: 'all' })
            gsap.set('#popup_collout5-link4', { autoAlpha: 0, pointerEvents: 'all' })
            gsap.set('#popup_collout5-link5', { autoAlpha: 0, pointerEvents: 'all' })
        })
        document.querySelector('#btnColloutPopup5').addEventListener("click", function () {
            gsap.set('#popup_collout5-link1', { autoAlpha: 0, pointerEvents: 'all' })
            gsap.set('#popup_collout5-link2', { autoAlpha: 0, pointerEvents: 'all' })
            gsap.set('#popup_collout5-link3', { autoAlpha: 0, pointerEvents: 'all' })
            gsap.set('#popup_collout5-link4', { autoAlpha: 0, pointerEvents: 'all' })
            gsap.set('#popup_collout5-link5', { autoAlpha: 0, pointerEvents: 'all' })
        })
        calloutSubElements.forEach(function (elem, index, arr) {
            gsap.set(elem.target, { autoAlpha: 0, pointerEvents: 'none' })
            document.querySelector(elem.target).addEventListener("click", function () {
                gsap.set(elem.target, { autoAlpha: 0, pointerEvents: 'all' })
                if (elem.link) {
                    window.open(elem.link, '_blank');
                }
            })
            document.querySelector(elem.btn).addEventListener("click", function () {
                gsap.set(elem.target, { autoAlpha: 0, pointerEvents: 'all' })
                if (elem.link) {
                    window.open(elem.link, '_blank');
                }
            })
            document.querySelector(elem.target).addEventListener("mouseenter", function () {
                // console.log(elem.target);
                document.querySelector('dfrnc-animation').classList.add('active-links')
            });
            document.querySelector(elem.target).addEventListener("mouseleave", function () {
                document.querySelector('dfrnc-animation').classList.remove('active-links')
            });
            document.querySelector(elem.btn).addEventListener("mouseenter", function () {
                // console.log(elem.btn);
                document.querySelector('dfrnc-animation').classList.add('active-links')
            });
            document.querySelector(elem.btn).addEventListener("mouseleave", function () {
                document.querySelector('dfrnc-animation').classList.remove('active-links')
            });
        });
        calloutSubElements5.forEach(function (elem, index, arr) {
            gsap.set(elem.target, { autoAlpha: 0, pointerEvents: 'none' })
            document.querySelector(elem.target).addEventListener("click", function () {
                if (elem.link) {
                    window.open(elem.link, '_blank');
                }
            })
            document.querySelector(elem.btn).addEventListener("click", function () {
                if (elem.link) {
                    window.open(elem.link, '_blank');
                }
            })
            document.querySelector(elem.target).addEventListener("mouseenter", function () {
                document.querySelector('dfrnc-animation').classList.add('active-links')
            });
            document.querySelector(elem.target).addEventListener("mouseleave", function () {
                document.querySelector('dfrnc-animation').classList.remove('active-links')
            });
            document.querySelector(elem.btn).addEventListener("mouseenter", function () {
                document.querySelector('dfrnc-animation').classList.add('active-links')
            });
            document.querySelector(elem.btn).addEventListener("mouseleave", function () {
                document.querySelector('dfrnc-animation').classList.remove('active-links')
            });
        });

    });
})