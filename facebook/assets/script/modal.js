const modal = document.createElement("div");
modal.classList.add("modal", "modal__phone");
modal.innerHTML = `
<div class="modal__overlay"></div>
<div class="modal__container">
    <div class="modal__close-btn">
        <i class="fal fa-times"></i>
    </div>
    <header class="modal__header">
        <h5 class="modal__heading">Tắt cuộc gọi video và cuộc gọi thoại</h5>
    </header>
    <div class="modal__body">
        <p class="modal__description">Khi tính năng gọi điện video bị tắt, bạn sẽ không nhận được thông báo khi
            mọi
            người cố gọi cho bạn trên trình duyệt nữa.</p>
        <div class="modal__option">
            <div class="modal__option__item">
                <div class="modal__option__icon">
                    <i class="fas fa-clock"></i>
                </div>
                <span class="item__details">Trong 1 giờ</span>
                <label class="modal__input--radio">
                    <input type="radio" name="modal__option__item">
                    <span class="radio__label"></span>
                </label>
            </div>
            <div class="modal__option__item">
                <div class="modal__option__icon">
                    <i class="fas fa-moon"></i>
                </div>
                <span class="item__details">Đến 8h sáng</span>
                <label class="modal__input--radio">
                    <input type="radio" name="modal__option__item">
                    <span class="radio__label"></span>
                </label>
            </div>
            <div class="modal__option__item">
                <div class="modal__option__icon">
                    <i class="fas fa-minus-circle"></i>
                </div>
                <span class="item__details">Đến khi tôi bật lại</span>
                <label class="modal__input--radio">
                    <input type="radio" name="modal__option__item">
                    <span class="radio__label"></span>
                </label>
            </div>
        </div>
    </div>
    <footer class="modal__footer">
        <button class="footer__close-modal">Đồng ý</button>
    </footer>
</div>
`;
document.body.appendChild(modal);