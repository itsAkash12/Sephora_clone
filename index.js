// pop up sigin

let modalWrapper=document.querySelector(".modal_wrapper");
let closeBtn=document.querySelector(".close");
let trigger=document.querySelector("#sign");

trigger.addEventListener("click", function(){

    modalWrapper.classList.add("active");
})
closeBtn.addEventListener("click", function(){

    modalWrapper.classList.remove("active");
})




// popup signup

let modalWrapper2=document.querySelector(".wrapIt");
let closeBtn2=document.querySelector(".open");
let trigger2=document.querySelector("#create");

trigger2.addEventListener("click", function(){

    modalWrapper2.classList.add("active2");
    modalWrapper.classList.remove("active");

})
closeBtn2.addEventListener("click", function(){

    modalWrapper2.classList.remove("active2");
})




// popup forgot password



let modalWrapper3=document.querySelector(".mWrap");
let closeBtn3=document.querySelector(".again");
let trigger3=document.querySelector("#forg");

trigger3.addEventListener("click", function(){

    modalWrapper3.classList.add("active3");
    modalWrapper.classList.remove("active");

})
closeBtn3.addEventListener("click", function(){

    modalWrapper3.classList.remove("active3");
})




// Just Dropped

let data=[
    {
        image:"https://www.sephora.com/productimages/sku/s2513851-main-zoom.jpg?imwidth=320",
        name:"WASO",
        detail:"YUZU-C Eye Awakening Essence"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2514586-main-zoom.jpg?imwidth=320",
        name:"WASO",
        detail:"KOSHIRICE Acne Calming Spot"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2579852-main-zoom.jpg?imwidth=320",
        name:"PAT McGRATH LABS",
        detail:"Skin Fetish: Divine Blush Duo"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2536316-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320",
        name:"OLEHENRIKSEN",
        detail:"Firmly Yours Dry Body Oil with Peptides"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2572634-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320",
        name:"HAUS LABS BY LAD.",
        detail:"Bio-Radiant Gel- Powder Highlighter."
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2593879-main-zoom.jpg?imwidth=320",
        name:"Moroccanoil",
        detail:"Signature Scent Duo"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2572485-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320",
        name:"HAUS LABS BY LAD..",
        detail:"Power Sculpt Velvet Bronzer with "
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2590198-main-zoom.jpg?imwidth=320",
        name:"tarte",
        detail:"Maracuja Juicy Glow Highlighting Stick"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2578011-main-zoom.jpg?imwidth=320",
        name:"MAKEUP BY MARIO",
        detail:"SoftSculpt@ Transforming Skin"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2567519-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320",
        name:"WASO",
        detail:"SHIKULIME Gel-to-Oil Cleanser"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2536308-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320",
        name:"Summer Fridays.",
        detail:"ShadeDrops Broad Spectrum SPF 30"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2592228-main-zoom.jpg?imwidth=320",
        name:"amika",
        detail:"Hydro Rush Intense Moisture Conditione.."
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2592012-main-zoom.jpg?imwidth=320",
        name:"WASO",
        detail:"YUZU-C Eye Awakening Essence"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2572238-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320",
        name:"WASO",
        detail:"KOSHIRICE Acne Calming Spot"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2605244-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=320",
        name:"PAT McGRATH LABS",
        detail:"Skin Fetish: Divine Blush Duo"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2605244-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=320",
        name:"OLEHENRIKSEN",
        detail:"Firmly Yours Dry Body Oil with Peptides"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2578037-main-zoom.jpg?imwidth=320",
        name:"HAUS LABS BY LAD.",
        detail:"Bio-Radiant Gel- Powder Highlighter."
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2589422-main-zoom.jpg?imwidth=320",
        name:"Moroccanoil",
        detail:"Signature Scent Duo"
    },
    
]


for(let i=0; i<data.length; i++){

    let char=data[i];

    let box=document.createElement("div");
    let image=document.createElement("img");
    image.setAttribute("src",char.image);
    image.setAttribute("class","crauser");
    let p1=document.createElement("p");
    p1.innerText=char.name;
    let p2=document.createElement("p");
    p2.innerText=char.detail;

    box.append(image,p1,p2);
    document.querySelector("#just").append(box);
}


// For You

let forData=[
    
    {
        image:"https://www.sephora.com/productimages/sku/s2577872-main-zoom.jpg?imwidth=320",
        name:"PAT McGRATH LABS",
        detail:"Skin Fetish: Divine Blush Duo"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2419786-main-zoom.jpg?imwidth=320",
        name:"OLEHENRIKSEN",
        detail:"Firmly Yours Dry Body Oil with Peptides"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2555811-main-zoom.jpg?imwidth=320",
        name:"HAUS LABS BY LAD.",
        detail:"Bio-Radiant Gel- Powder Highlighter."
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2588515-main-zoom.jpg?imwidth=320",
        name:"Moroccanoil",
        detail:"Signature Scent Duo"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2366524-main-zoom.jpg?imwidth=320",
        name:"HAUS LABS BY LAD..",
        detail:"Power Sculpt Velvet Bronzer with "
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2578011-main-zoom.jpg?imwidth=320",
        name:"WASO",
        detail:"KOSHIRICE Acne Calming Spot"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2333771-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=320",
        name:"tarte",
        detail:"Maracuja Juicy Glow Highlighting Stick"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2172310-main-zoom.jpg?imwidth=320",
        name:"MAKEUP BY MARIO",
        detail:"SoftSculpt@ Transforming Skin"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2407278-main-zoom.jpg?imwidth=320",
        name:"WASO",
        detail:"SHIKULIME Gel-to-Oil Cleanser"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2536308-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320",
        name:"Summer Fridays.",
        detail:"ShadeDrops Broad Spectrum SPF 30"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2571966-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320",
        name:"amika",
        detail:"Hydro Rush Intense Moisture Conditione.."
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2457299-main-zoom.jpg?imwidth=320",
        name:"WASO",
        detail:"YUZU-C Eye Awakening Essence"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2592012-main-zoom.jpg?imwidth=320",
        name:"WASO",
        detail:"YUZU-C Eye Awakening Essence"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2572238-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320",
        name:"WASO",
        detail:"KOSHIRICE Acne Calming Spot"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2605244-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=320",
        name:"PAT McGRATH LABS",
        detail:"Skin Fetish: Divine Blush Duo"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2605244-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=320",
        name:"OLEHENRIKSEN",
        detail:"Firmly Yours Dry Body Oil with Peptides"
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2594810-main-zoom.jpg?imwidth=320",
        name:"HAUS LABS BY LAD.",
        detail:"Bio-Radiant Gel- Powder Highlighter."
    },
    {
        image:"https://www.sephora.com/productimages/sku/s2589422-main-zoom.jpg?imwidth=320",
        name:"Moroccanoil",
        detail:"Signature Scent Duo"
    },
    
]

for(let i=0; i<forData.length; i++){

    let char=forData[i];

    let box2=document.createElement("div");
    let image2=document.createElement("img");
    image2.setAttribute("src",char.image);
    let pt1=document.createElement("p");
    pt1.innerText=char.name;
    let pt2=document.createElement("p");
    pt2.innerText=char.detail;

    box2.append(image2,pt1,pt2);
    document.querySelector("#foryou").append(box2);
}



// Beaurty Offers



let beautyData=[
    
    {
        image:"https://www.sephora.com/contentimages/promo/bpme/July/2022-bpme-bi-sku-point-multiplier-site-desktop-mobile-app-beauty-offers-banner-4x-tarte.jpg",
        name:"Get 4X Pointstt",
        detail:"Beauty Insider members only. In store& online Ends 7/27/2022 ttExclusions/terms apply. May be combined with other promotional offers."
    },
    {
        image:"https://www.sephora.com/contentimages/promo/beautyoffers/2022/May/2022-complexion-story-site-desktop-mobile-beauty-offers-page-banner-sample-bag-1000x750-us.jpg",
        name:"Try bestselling complexion picks from Danessa Myricks Beauty, Rare Beauty, and more.",
        detail:"Free with $35 purchase. Beauty Insider members only. Online only Exclusions/terms apply."
    },
    {
        image:"https://www.sephora.com/contentimages/promo/beautyoffers/2022/July/2022-07-18-slotting-promo-app-site-desktop-mobile-dtext-beauty-offers-page-banner--SULWHASOOGIFT-us-ca-handoff.jpg",
        name:"CORmplimentary Sulwhasoo Size Set",
        detail:"Complimentary with $85 Sulwhasoo purchase  Beauty Insider members only. Online only terms apply."
    },
    {
        image:"https://www.sephora.com/contentimages/promo/beautyoffers/2022/May/2022-5-25-briogeo-superfoods-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg",
        name:"Complimentary Augustinus Bader Trial Sizes",
        detail:"Target wrinkles, dullness, and more with three luxurious skincare trial sizes."
    },
    {
        image:"https://www.sephora.com/contentimages/promo/beautyoffers/2022/July/2022-7-12-ceremonia-site-desktop-mobile-app-beauty-offers-page-banner-en-us.jpg",
        name:"Free Trial Size from Ceremonia",
        detail:"Free with $25 purchase.Beauty Insider members only. Online only Exclusions/terms apply."
    },
    {
        image:"https://www.sephora.com/contentimages/promo/beautyoffers/2022/July/2022-7-13-july-skincare-challenge-site-desktop-mobile-app-beauty-offers-page-beauty-offer-new-en-us-can.jpg",
        name:"Free Sol de Janeiro Samples",
        detail:"Visibly plump skin in two weeks"
    },
    {
        image:"https://www.sephora.com/contentimages/promo/beautyoffers/2022/July/2022-7-1-sol-de-janeiro-limited-edition-mists-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg",
        name:"Free Sol de Janeiro Trial Size",
        detail:"Pick pne of two bestselling body creams! Try Bom Dia Bright or Brazilian Bum Bum."
    },
    {
        image:"https://www.sephora.com/contentimages/promo/beautyoffers/2022/June/2022-6-23-laneige-water-bank-collection-relaunch-site-app-beauty-offers-page-banner.jpg",
        name:"Free LANEIGE Trial Size",
        detail:"Free with $25 purchase. Beauty Insider members only Online only EXclusions/terms apply."
    },
    {
        image:"https://www.sephora.com/contentimages/promo/beautyoffers/2022/June/2022-6-18-june-hair-challenge-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg",
        name:"Free Moroccanoil Samples",
        detail:"Free with $25 purchase. Beauty Insider members only Online only EXclusions/terms apply."
    },
    {
        image:"https://www.sephora.com/contentimages/promo/beautyoffers/2022/June/2022-06-05-slotting-promo-app-site-beauty-offers-banner-LUXURYSKIN-us-ca-handoff.jpg",
        name:"Complimentary Luxe Skincare",
        detail:"Free with $25 purchase. Beauty Insider members only Online only EXclusions/terms apply."
    },
    {
        image:"https://www.sephora.com/contentimages/promo/beautyoffers/2022/June/2022-june-body-app-home-page-content-card-PROMO-f1.jpg",
        name:"Get 4X Pointstt",
        detail:"Beauty Insider members only. In store& online Ends 7/27/2022 ttExclusions/terms apply. May be combined with other promotional offers."
    },
    {
        image:"https://www.sephora.com/contentimages/promo/beautyoffers/2022/May/2022-5-25-briogeo-superfoods-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg",
        name:"Try bestselling complexion picks from Danessa Myricks Beauty, Rare Beauty, and more.",
        detail:"Free with $35 purchase. Beauty Insider members only. Online only Exclusions/terms apply."
    },
    {
        image:"https://www.sephora.com/contentimages/promo/beautyoffers/2022/May/2022-complexion-story-site-desktop-mobile-beauty-offers-page-beauty-offers-banner-choose-1-of-3-1000x750-us.jpg",
        name:"CORmplimentary Sulwhasoo Size Set",
        detail:"Complimentary with $85 Sulwhasoo purchase  Beauty Insider members only. Online only terms apply."
    },
    {
        image:"https://www.sephora.com/contentimages/promo/beautyoffers/2022/March/2022-apr-clinical-skincare-site-desktop-mobile-app-beauty-offers-page-banner-promo-3-1000x750-us.jpg",
        name:"Complimentary Augustinus Bader Trial Sizes",
        detail:"Target wrinkles, dullness, and more with three luxurious skincare trial sizes."
    },
    {
        image:"https://www.sephora.com/contentimages/promo/beautyoffers/2022/April/2022-apr-warby-paid-foundation-der-a-site-app-home-page-content-card-1000x750-us.jpg",
        name:"Free Trial Size from Ceremonia",
        detail:"Free with $25 purchase.Beauty Insider members only. Online only Exclusions/terms apply."
    },
    
]


for(let i=0; i<beautyData.length; i++){

    let char=beautyData[i];

    let box3=document.createElement("div");
    let image3=document.createElement("img");
    image3.setAttribute("src",char.image);
    let pta1=document.createElement("p");
    pta1.innerText=char.name;
    let pta2=document.createElement("p");
    pta2.innerText=char.detail;
    let btn=document.createElement("button");
    btn.innerText="Apply"
    let div=document.createElement("div");
    div.setAttribute("id","btn");
    div.append(btn);
    
    box3.append(image3,pta1,pta2,div);
    document.querySelector("#cutie").append(box3);
}


// cards


let cardsData=[
    
    {
        image:"https://www.sephora.com/contentimages/homepage/071922/Homepage/RWD/2022-7-1-hp-marketing-banner-sephora-collection-makeup-match-brush-us-ca-rwd-slice.jpeg?imwidth=800",
        name:"New Makeup Match Brush Collection",
        detail:"Starting at $8! Vegan tools to complete any look.",
        now:"SHOP NOW▸",
    },
    {
        image:"https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/2022-06-02-hp-marketing-banner-wedding-seasonal-services-desktop-mobile-rwd-us-slice.jpeg?imwidth=800",
        name:"Shop Now, Pay Later",
        detail:"Spilt your purchase into four payments.",
        now:"LEARN MORE▸",
    },
    {
        image:"https://www.sephora.com/contentimages/homepage/070522/Homepage/RWD/2022-07-18-hp-marketing-banner-klarna-afterpay-us-ca-rwd-slice.jpeg?imwidth=800",
        name:"Wedding Beauty Services",
        detail:"Get a makeup look you'll love for all your big events.",
        now:"BOOK NOW▸",
    },
]

for(let i=0; i<cardsData.length; i++){

    let char=cardsData[i];

    let box4=document.createElement("div");
    let ptag1=document.createElement("p");
    ptag1.innerText=char.name;
    let ptag2=document.createElement("p");
    ptag2.innerText=char.detail;
    let ptag3=document.createElement("p");
    ptag3.innerText=char.now
    let image4=document.createElement("img");
    image4.setAttribute("src",char.image);
    
    
    box4.append(ptag1,ptag2,ptag3,image4);
    document.querySelector("#cards").append(box4);
}