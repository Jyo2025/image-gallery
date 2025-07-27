const mainImg = document.querySelector('.img-container img');

document.addEventListener("click",function(e){
    const li = e.target.closest('li');
    if(!li) return;

    const listImg = li.querySelector('img');
    const listSrc = listImg.src;

    listImg.src = mainImg.src;
    mainImg.src = listSrc;
    
})