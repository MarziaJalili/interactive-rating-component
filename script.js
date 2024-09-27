const submit = document.querySelector(".submit")
const thankYou = document.querySelector(".thank-you")
const giveRating = document.querySelector(".give-rating")
const scores = document.querySelectorAll(".score")
const scoreSpan = document.querySelector(".selected-score")


scores.forEach(button => {
    button.addEventListener("click", () => {
        scores.forEach(btn => btn.classList.remove("selected"))
        button.classList.add("selected");
    })
}
)



submit.addEventListener("click", () => {
    giveRating.style.display = "none";
    thankYou.style.display = "grid";
    const selectedBtn = document.querySelector(".selected");
    scoreSpan.innerText = selectedBtn.innerText
});
