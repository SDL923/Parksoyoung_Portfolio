const button_click_for_more = document.querySelector("#button_click_for_more")
const menu_home = document.querySelector("#menu_home")
const menu_about = document.querySelector("#menu_about")
const menu_portfolio = document.querySelector("#menu_portfolio")
const menu_bio = document.querySelector("#menu_bio")
const menu_contack = document.querySelector("#menu_contack")


const scroll_home = document.querySelector("#anchor_home")
const scroll_about = document.querySelector("#anchor_about")
const scroll_portfolio = document.querySelector("#anchor_portfolio")
const scroll_bio = document.querySelector("#anchor_bio")
const scroll_contack = document.querySelector("#anchor_contack")


button_click_for_more.onclick = function(){
    window.scroll({top:scroll_bio.offsetTop, behavior:'smooth'})
}

menu_home.onclick = function(){
    window.scroll({top:scroll_home.offsetTop, behavior:'smooth'})
}
menu_about.onclick = function(){
    window.scroll({top:scroll_about.offsetTop, behavior:'smooth'})
}
menu_portfolio.onclick = function(){
    window.scroll({top:scroll_portfolio.offsetTop, behavior:'smooth'})
}
menu_bio.onclick = function(){
    window.scroll({top:scroll_bio.offsetTop, behavior:'smooth'})
}
menu_contack.onclick = function(){
    window.scroll({top:scroll_contack.offsetTop, behavior:'smooth'})
}


