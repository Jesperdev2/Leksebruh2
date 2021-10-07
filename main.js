const img = document.getElementById("norwegian");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    img.style.top = offset + 325 + "px";
})