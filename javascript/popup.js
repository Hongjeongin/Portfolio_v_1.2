const popup = document.querySelector(".popup");

function showPopup (images, title, content) {
    const popupWindow = document.querySelector(".popupWindow");
    popup.style.display = 'flex';


    popupWindow.innerHTML = `<div class="popupImage">
                                    <img src={images}/>
                                </div>
                                <div class="popupTitle">
                                    <p>${title}</p>
                                </div>
                                <div class="popupContent">
                                    <p>${content}</p>
                            </div>`;
    return;
}

function closePopup (images, title, content) {
    popup.style.display = 'none';
}