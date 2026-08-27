// Mobile Navigation Menu

const menuToggle = document.getElementById("menuToggle");
const navigationMenu = document.getElementById("navigationMenu");
const headerButtons = document.querySelector(".header-buttons");

if (menuToggle)
{
    menuToggle.addEventListener("click", function()
    {
        navigationMenu.classList.toggle("active");
        headerButtons.classList.toggle("active");
    });
}

// Home Page Deal Carousel Data

const dealCards = [
    {
        image: "./assets/auckland_1.png",
        discount: "33% Off",
        location: "Auckland CBD",
        accommodation: "2 Days 1 Night Accommodation",
        price: "$399"
    },
    {
        image: "./assets/christchurch_1.png",
        discount: "29% Off",
        location: "Christchurch",
        accommodation: "1 Week Accommodation",
        price: "$499"
    },
    {
        image: "./assets/wellington_1.png",
        discount: "35% Off",
        location: "Wellington",
        accommodation: "5 Days 1 Night Accommodation",
        price: "$449"
    },
    {
        image: "./assets/waikato_1.png",
        discount: "45% Off",
        location: "Waikato",
        accommodation: "2 Days 1 Night Accommodation",
        price: "$169"
    },
    {
        image: "./assets/tekapo_1.png",
        discount: "32% Off",
        location: "Lake Tekapo",
        accommodation: "3 Days 2 Nights Accommodation",
        price: "$349"
    },
    {
        image: "./assets/cape_reinga_1.png",
        discount: "15% Off",
        location: "Cape Reinga",
        accommodation: "5 Days 4 Nights",
        price: "$499"
    },
];

let currentDealIndex = 0;

// Home Page Customer Review Data

const reviewCards = [
    {
        image: "./assets/Okabe_Rintaro.jpg",
        name: "Okabe Rintaro",
        review: "Had one of the greatest expeditions of my entire life while travelling during the holidays. I would 100% recommend Travel NZ to anyone!"
    },
    {
        image: "./assets/Makise_Kurisu.jpg",
        name: "Makise Kurisu",
        review: "Travel NZ helped me with reaching my goal of touring the South Islands, and it was a blast to say the least. Most definitely coming back for another tour."
    },
    {
        image: "./assets/Mayuri_Shiina.jpg",
        name: "Mayuri Shiina",
        review: "Discounts are my way of life and with Travel NZ, I am able to save a ton! I do not have to worry about my pockets being empty."
    },
    {
        image: "./assets/Amane_Suzuha.jpg",
        name: "Amane Suzuha",
        review: "The tour was simple to book and the whole experience traveling around Aotearoa was awesome! Travel NZ you're the best!"
    }
];

let currentReviewIndex = 0;

// Function For Number Of Visible Cards

function getVisibleCardCount()
{
    if (window.innerWidth <= 700)
    {
        return 1;
    }
    else if (window.innerWidth <= 1000)
    {
        return 2;
    }
    else
    {
        return 3;
    }
}

// Display Deal Cards

function displayDealCards()
{
    const dealTrack = document.getElementById("dealTrack");

    if (!dealTrack)
    {
        return;
    }

    dealTrack.innerHTML = "";

    const visibleCards = getVisibleCardCount();

    for (let i = 0; i < visibleCards; i++)
    {
        const dealIndex = (currentDealIndex + i) % dealCards.length;
        const deal = dealCards[dealIndex];

        const dealCard = document.createElement("div");
        dealCard.classList.add("deal-card");

        dealCard.innerHTML = `
            <img src="${deal.image}" alt="${deal.location}">

            <div class="discount">${deal.discount}</div>

            <div class="deal-overlay">

                <h3>${deal.location}</h3>

                <p>${deal.accommodation}</p>

                <p>${deal.price}</p>

            </div>
        `;

        dealTrack.appendChild(dealCard);
    }
}

// Deal Carousel Arrow Buttons

const dealPreviousButton = document.getElementById("dealPreviousButton");
const dealNextButton = document.getElementById("dealNextButton");

if (dealPreviousButton && dealNextButton)
{
    dealPreviousButton.addEventListener("click", function()
    {
        currentDealIndex--;

        if (currentDealIndex < 0)
        {
            currentDealIndex = dealCards.length - 1;
        }

        displayDealCards();
    });

    dealNextButton.addEventListener("click", function()
    {
        currentDealIndex++;

        if (currentDealIndex >= dealCards.length)
        {
            currentDealIndex = 0;
        }

        displayDealCards();
    });
}

// Display Review Cards

function displayReviewCards()
{
    const reviewTrack = document.getElementById("reviewTrack");

    if (!reviewTrack)
    {
        return;
    }

    reviewTrack.innerHTML = "";

    const visibleCards = getVisibleCardCount();

    for (let i = 0; i < visibleCards; i++)
    {
        const reviewIndex = (currentReviewIndex + i) % reviewCards.length;
        const review = reviewCards[reviewIndex];

        const reviewCard = document.createElement("div");
        reviewCard.classList.add("testimonial-card");

        reviewCard.innerHTML = `
            <div class="profile">

                <img src="${review.image}" alt="${review.name}">

                <div>

                    <h3>${review.name}</h3>

                </div>

            </div>

            <p>${review.review}</p>
        `;

        reviewTrack.appendChild(reviewCard);
    }
}

// Review Carousel Arrow Buttons

const reviewPreviousButton = document.getElementById("reviewPreviousButton");
const reviewNextButton = document.getElementById("reviewNextButton");

if (reviewPreviousButton && reviewNextButton)
{
    reviewPreviousButton.addEventListener("click", function()
    {
        currentReviewIndex--;

        if (currentReviewIndex < 0)
        {
            currentReviewIndex = reviewCards.length - 1;
        }

        displayReviewCards();
    });

    reviewNextButton.addEventListener("click", function()
    {
        currentReviewIndex++;

        if (currentReviewIndex >= reviewCards.length)
        {
            currentReviewIndex = 0;
        }

        displayReviewCards();
    });
}

// Update Carousel When Screen Size Changes

window.addEventListener("resize", function()
{
    displayDealCards();
    displayReviewCards();
});

// Start Home Page JavaScript

displayDealCards();
displayReviewCards();



// Tour Page JavaScript

const tourData = [
    {
        name: "Auckland",
        accommodation: "2 Days 1 Night Accommodation",
        price: "$399",
        image: "./assets/auckland_1.png",
        slideshow: ["./assets/auckland_1.png", "./assets/auckland_2.png", "./assets/auckland_3.png"],
        description: "The Auckland CBD (Central Business District) is the heart of the Auckland metropolitan area in New Zealand. The Auckland CBD is one of the few places in New Zealand that has skyscraper-sized buildings, such as the Vero Centre, Commercial Bay (skyscraper), ANZ Centre or the Metropolis, with the Sky Tower rising above them."
    },
    {
        name: "Christchurch",
        accommodation: "1 Week Accommodation",
        price: "$499",
        image: "./assets/christchurch_1.png",
        slideshow: ["./assets/christchurch_1.png", "./assets/christchurch_2.png", "./assets/christchurch_3.png"],
        description: "Christchurch, known for its English heritage, is located on the east coast of New Zealand’s South Island. Flat-bottomed punts glide on the Avon River, which meanders through the city centre. On its banks are cycling paths, the green expanse of Hagley Park and Christchurch Botanic Gardens."
    },
    {
        name: "Wellington",
        accommodation: "5 Days 4 Night Accommodation",
        price: "$449",
        image: "./assets/wellington_1.png",
        slideshow: ["./assets/wellington_1.png", "./assets/wellington_2.png", "./assets/wellington_3.png"],
        description: "Wellington, the capital of New Zealand, sits near the North Island’s southernmost point on the Cook Strait. A compact city, it encompasses a waterfront promenade, sandy beaches, a working harbour and colourful timber houses on surrounding hills."
    },
    {
        name: "Waikato",
        accommodation: "2 Days 1 Night Accommodation",
        price: "$169",
        image: "./assets/waikato_1.png",
        slideshow: ["./assets/waikato_1.png", "./assets/waikato_2.png", "./assets/waikato_3.png"],
        description: "The Hobbiton Movie Set is a world-famous Tolkien tourism destination located on a 1,250-acre private sheep farm in the Waikato region of New Zealand. Situated just outside the rural town of Matamata, this 12-acre permanent movie set served as the iconic stand-in for Hobbiton in the Shire across both The Lord of the Rings and The Hobbit film trilogies."
    },
    {
        name: "Lake Tekapo",
        accommodation: "3 Days 2 Nights Accommodation",
        price: "$349",
        image: "./assets/tekapo_1.png",
        slideshow: ["./assets/tekapo_1.png", "./assets/tekapo_2.png", "./assets/tekapo_3.png"],
        description: "Lake Tekapo is a renowned highland lake and tourist township located in the heart of the Mackenzie Basin in New Zealand's South Island. Situated along State Highway 8, it is positioned almost exactly halfway between Christchurch and Queenstown, making it an essential alpine stopover."
    },
    {
        name: "Cape Reinga",
        accommodation: "5 Days 4 Nights",
        price: "$499",
        image: "./assets/cape_reinga_1.png",
        slideshow: ["./assets/cape_reinga_1.png", "./assets/cape_reinga_2.png", "./assets/cape_reinga_3.png"],
        description: "Cape Reinga is a popular tourist site, with annual visitor numbers estimated at over 500,000 people. Visitor numbers are growing by about five percent a year, and the increase is likely to become even more now that the road to the cape is fully sealed. One of the most well-knowns sights is the Lighthouse."
    },
];

let selectedTourIndex = 0;
let selectedTourSlideIndex = 0;

// Display Tour Gallery Cards

function displayTourGallery()
{
    const tourGallery = document.getElementById("tourGallery");

    if (!tourGallery)
    {
        return;
    }

    tourGallery.innerHTML = "";

    for (let i = 0; i < tourData.length; i++)
    {
        const tour = tourData[i];

        const tourCard = document.createElement("div");
        tourCard.classList.add("tour-card");

        tourCard.innerHTML = `
            <img src="${tour.image}" alt="${tour.name}">

            <div class="tour-overlay">

                <h3>${tour.name}</h3>

                <p>${tour.accommodation}</p>

                <p>${tour.price}</p>

            </div>
        `;

        tourCard.addEventListener("click", function()
        {
            showSelectedTour(i);
        });

        tourGallery.appendChild(tourCard);
    }
}

// Show Selected Tour On Left Side

function showSelectedTour(index)
{
    const bookTourBox = document.getElementById("bookTourBox");
    const selectedTourBox = document.getElementById("selectedTourBox");

    const selectedTourImage = document.getElementById("selectedTourImage");
    const selectedTourDescription = document.getElementById("selectedTourDescription");
    const selectedTourName = document.getElementById("selectedTourName");
    const selectedTourAccommodation = document.getElementById("selectedTourAccommodation");
    const selectedTourPrice = document.getElementById("selectedTourPrice");

    if (!selectedTourBox)
    {
        return;
    }

    selectedTourIndex = index;
    selectedTourSlideIndex = 0;

    const tour = tourData[selectedTourIndex];

    bookTourBox.classList.add("hidden");
    selectedTourBox.classList.add("active");

    selectedTourImage.src = tour.slideshow[selectedTourSlideIndex];
    selectedTourImage.alt = tour.name;

    selectedTourDescription.textContent = tour.description;
    selectedTourName.textContent = tour.name;
    selectedTourAccommodation.textContent = tour.accommodation;
    selectedTourPrice.textContent = tour.price;
}

// Selected Tour Slideshow Buttons

const tourSlidePreviousButton = document.getElementById("tourSlidePreviousButton");
const tourSlideNextButton = document.getElementById("tourSlideNextButton");

if (tourSlidePreviousButton && tourSlideNextButton)
{
    tourSlidePreviousButton.addEventListener("click", function()
    {
        const tour = tourData[selectedTourIndex];

        selectedTourSlideIndex--;

        if (selectedTourSlideIndex < 0)
        {
            selectedTourSlideIndex = tour.slideshow.length - 1;
        }

        document.getElementById("selectedTourImage").src = tour.slideshow[selectedTourSlideIndex];
    });

    tourSlideNextButton.addEventListener("click", function()
    {
        const tour = tourData[selectedTourIndex];

        selectedTourSlideIndex++;

        if (selectedTourSlideIndex >= tour.slideshow.length)
        {
            selectedTourSlideIndex = 0;
        }

        document.getElementById("selectedTourImage").src = tour.slideshow[selectedTourSlideIndex];
    });
}

// Call Tour Page JavaScript

displayTourGallery();