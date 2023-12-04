const header = document.querySelector('header')
const burger = header.querySelector('.burger')
const cardsSwiper = document.querySelector('.swiper.swiper-cards')

// OPEN MOBILE MENU IN HEADER
if (header) {
    burger.addEventListener("click", (e) => {
        e.preventDefault()
        if (!header.classList.contains('menu-open')) {
            header.classList.add('menu-open')
            document.body.style.overflow = 'hidden'
        } else {
            header.classList.remove('menu-open')
            document.body.style.overflow = 'inherit'
        }
    })

    document.addEventListener('click', (e) => {
        if (e.target.matches('header .mask') || e.target.matches('header .menu li')) {
            if (header.classList.contains('menu-open')) {
                header.classList.remove('menu-open')
                document.body.style.overflow = 'inherit'
            }
        }
    })
}

// SWIPER SLIDER
if (cardsSwiper) {
    const swiper = new Swiper('.swiper.swiper-cards', {
        slidesPerView: 1.5,
        initialSlide: 3,
        spaceBetween: 23,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.btn-arrows .arrow.next',
            prevEl: '.btn-arrows .arrow.previous',
        },
        breakpoints: {
            375: {
                slidesPerView: 1.78,
                spaceBetween: 28.13,
            },
            425: {
                slidesPerView: 2,
            },
            550: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 3,
            },
            900: {
                slidesPerView: 4,
            },
            1024: {
                initialSlide: 2,
                slidesPerView: 4.5,
                spaceBetween: 28.33,
            },
            1440: {
                initialSlide: 2,
                slidesPerView: 4.6,
                spaceBetween: 39.84
            }
        }
    });
}

//QUESTIONS
const titles = document.querySelectorAll('.quest-banner .title')
titles.forEach(title => {
    title.addEventListener('click', function (e) {
        const target = e.target
        if (target.matches('.quest .title') || target.matches('.quest .title p') || target.matches('.quest .title svg') || target.matches('.quest .title svg circle') || target.matches('.quest .title svg rect')) {
            const parent = target.closest('.quest')
            parent.classList.toggle('opened')
            let hiddenText = parent.querySelector('.text')
            if (hiddenText.style.maxHeight) {
                hiddenText.style.maxHeight = null
            } else {
                hiddenText.style.maxHeight = hiddenText.scrollHeight + 'px'
            }
        }
    })
})
