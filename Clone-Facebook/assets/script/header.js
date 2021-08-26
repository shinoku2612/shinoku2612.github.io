const header = document.createElement("header");
header.classList.add("header");

const headerHome = document.createElement("div");
headerHome.classList.add("header__home");

const headerLogo = document.createElement("div");
headerLogo.classList.add("header__logo");
headerLogo.innerHTML = `
<a href="../../index.html" class="go-back-home">
<svg height="40" width="40">
    <defs>
        <linearGradient id="grad1" x1="50%" x2="50%" y1="97.0782153%" y2="0%">
            <stop offset="0%" style="stop-color:#0062E0;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#19AFFF;stop-opacity:1" />
        </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="20" fill="url(#grad1)" />
    <text fill="#ffffff" font-size="56" font-weight="600"
        font-family="'Source Sans Pro', sans-serif" x="11" y="48">f</text>
</svg>
</a>
`;

const headerSearch = document.createElement("div");
headerSearch.classList.add("header__search");
headerSearch.innerHTML = `
<input type="text" id="search__input" class="search__input" placeholder="Tìm kiếm trên Facebook">
<label class="search__label" for="search__input"><i class="search__icon fas fa-search"></i></label>
<div class="search__box">
    <div class="search__box__back">
        <i class="back__icon far fa-long-arrow-left"></i>
    </div>
    <div class="search__box__header">
        <h3 class="search__box__title">
            Tìm kiếm gần đây
        </h3>
        <a href="#" class="search__box__edit">Chỉnh sửa</a>
    </div>
    <ul class="search__box__history">
        <li class="search__box__target">
            <a href="#" class="target__wall">
                <img src="../../assets/img/avatar/zsm.jpg" alt="Target Avatar" class="target__avatar">
                <span class="target__name">ZingSpeed Mobile</span>
            </a>
            <div class="history__clear">
                <i class="clear__icon fas fa-times"></i>
            </div>
        </li>
        <li class="search__box__target">
            <a href="#" class="target__wall">
                <img src="../../assets/img/avatar/clb-kn.png" alt="Target Avatar" class="target__avatar">
                <span class="target__name">CLB Kỹ Năng - ĐH Sư Phạm Kỹ Thuật TP.HCM</span>
            </a>
            <div class="history__clear">
                <i class="clear__icon fas fa-times"></i>
            </div>
        </li>
    </ul>
</div>
`;

const headerNav = document.createElement("div");
headerNav.classList.add("header__navigation");
const headerNavBox = document.createElement("ul");
headerNavBox.classList.add("nav__box");

const headerNavItems = [
    `
    <svg height="24" width="24">
        <image href="./assets/img/svg/home.svg" height="24" width="24" />
        <image href="./assets/img/svg/home-active.svg" height="24" width="24" />
    </svg>
    `,
    `
    <svg height="24" width="24">
        <image href="./assets/img/svg/flag.svg" height="24" width="24" />
        <image href="./assets/img/svg/flag-active.svg" height="24" width="24" />
    </svg>
    `,
    `
    <svg height="24" width="24">
        <image href="./assets/img/svg/watch.svg" height="24" width="24" />
        <image href="./assets/img/svg/watch-active.svg" height="24" width="24" />
    </svg>
    `,
    `
    <svg height="24" width="24">
        <image href="./assets/img/svg/market.svg" height="24" width="24" />
        <image href="./assets/img/svg/market-active.svg" height="24" width="24" />
    </svg>
    `,
    `
    <svg height="24" width="24">
        <image href="./assets/img/svg/group.svg" height="24" width="24" />
        <image href="./assets/img/svg/group-active.svg" height="24" width="24" />
    </svg>
    `
];
const navItemActive = [
    "nav__item--active",
    "", "", "", ""
];
const targets = [
    "../../index.html",
    "#", "#", "#", "#"
];

for (let index = 0; index < 5; index++) {
    headerNavBox.innerHTML += `
    <li class="nav__item ${navItemActive[index]}">
        <a href="${targets[index]}" class="item item__home">
            ${headerNavItems[index]}
        </a>
    </li>
    `;
}

const headerComple = document.createElement("div");
headerComple.classList.add("header__complementary");
const headerUser = document.createElement("div");
headerUser.classList.add("header__user");
const userName = "Shin";
const userAvatar = "Zeref.jpg";
headerUser.innerHTML = `
<a href="./assets/profile.html" class="user__wall">
    <img src="../../assets/img/avatar/${userAvatar}" alt="User Avatar" class="user__avatar">
    <span class="user__name">${userName}</span>
</a>
`;
const headerOption = document.createElement("div");
headerOption.classList.add("header__options");
headerOption.innerHTML = `
<div class="options__btn options__menu">
    <i class="option__icon menu__icon fas fa-ellipsis-v"></i>
    <div class="menu__area">
        <div class="menu__area__header">
            <h3 class="menu__area__title">Menu</h3>
        </div>
        <div class="menu__area__container scroll-container">
            <div class="menu__area__body">
                <div class="menu menu--left">
                    <div class="menu__search">
                        <input type="text" id="menu__search__input" class="search__input"
                            placeholder="Tìm kiếm trong Menu">
                        <label class="search__label" for="menu__search__input">
                            <i class="search__icon fas fa-search"></i>
                        </label>
                    </div>
                    <div class="menu__fields" style="margin-top: 48px;">
                        <h5 class="fields__name">Xã hội</h5>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/calendar.svg" height="30" width="30"
                                    x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Sự kiện</h5>
                                <span class="fields__description">Tổ chức hoặc tim sự kiện cùng những
                                    hoạt
                                    động khác trên mạng và ở quanh đây.</span>
                            </div>
                        </a>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/friends.svg" height="30" width="30"
                                    x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Bạn bè</h5>
                                <span class="fields__description">Tìm kiếm bạn bè hoặc những người bạn
                                    có thể biết.</span>
                            </div>
                        </a>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/group_menu.svg" height="30" width="30"
                                    x="8" y="10" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Nhóm</h5>
                                <span class="fields__description">Kết nối với những người cùng chung sở
                                    thích.</span>
                            </div>
                        </a>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/newspaper.svg" height="30" width="30"
                                    x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Bảng tin</h5>
                                <span class="fields__description">Xem bài viết phù hợp của những người
                                    và Trang bạn theo dõi.</span>
                            </div>
                        </a>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/flag_menu.svg" height="30" width="30"
                                    x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Trang</h5>
                                <span class="fields__description">Khám phá và kết nối với các doanh
                                    nghiệp trên Facebook.</span>
                            </div>
                        </a>
                    </div>
                    <div class="menu__fields">
                        <h5 class="fields__name">Giải trí</h5>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/mobile-game.svg" height="30" width="30"
                                    x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Video chơi game</h5>
                                <span class="fields__description">Xem, kết nối với những game và người
                                    phát trực tiếp mà bạn yêu thích.</span>
                            </div>
                        </a>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/game-console.svg" height="30" width="30"
                                    x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Chơi game</h5>
                                <span class="fields__description">Chơi game bạn yêu thích.</span>
                            </div>
                        </a>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/video.svg" height="30" width="30" x="8"
                                    y="10" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Watch</h5>
                                <span class="fields__description">Đích đến của video phù hợp với sở
                                    thích và quan hệ kết nối của bạn.</span>
                            </div>
                        </a>
                    </div>
                    <div class="menu__fields">
                        <h5 class="fields__name">Mua sắm</h5>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/credit.svg" height="30" width="30"
                                    x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Facebook Pay</h5>
                                <span class="fields__description">Một cách dễ dàng, bảo mật thanh toán
                                    trên các ứng dụng bạn đang dùng.</span>
                            </div>
                        </a>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/store.svg" height="30" width="30" x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Marketplace</h5>
                                <span class="fields__description">Mua bán trong cộng đồng của
                                    bạn.</span>
                            </div>
                        </a>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/gift.svg" height="30" width="30" x="8"
                                    y="10" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Ưu đãi</h5>
                                <span class="fields__description">Quảng cáo và chiết khấu của các doanh
                                    nghiệp quanh đây.</span>
                            </div>
                        </a>
                    </div>
                    <div class="menu__fields">
                        <h5 class="fields__name">Cá nhân</h5>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/advertising.svg" height="30" width="30"
                                    x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Hoạt động quảng cáo gần đây</h5>
                                <span class="fields__description">Xem toàn bộ các quảng cáo mà bạn đã
                                    tương tác trên Facebook.</span>
                            </div>
                        </a>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/clock.svg" height="30" width="30" x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Kỷ niệm</h5>
                                <span class="fields__description">Lướt xem ảnh, video và bài viết cũ của
                                    bạn trên Facebook.</span>
                            </div>
                        </a>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/bookmark.svg" height="30" width="30" x="8"
                                    y="10" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Đã lưu</h5>
                                <span class="fields__description">Tìm bài bài viết, ảnh và video mà bạn
                                    đã lưu để xem sau.</span>
                            </div>
                        </a>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/cloudy.svg" height="30" width="30" x="8"
                                    y="10" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Thời tiết</h5>
                                <span class="fields__description">Kiểm tra dự báo thời tiết tại địa
                                    phương và đăng ký nhận thông báo về tình hình thời tiết hàng
                                    ngày.</span>
                            </div>
                        </a>
                    </div>
                    <div class="menu__fields">
                        <h5 class="fields__name">Chuyên nghiệp</h5>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/chart.svg" height="30" width="30" x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Quảng cáo</h5>
                                <span class="fields__description">Tạo, quản lý và theo dõi hiệu quả
                                    quảng cáo.</span>
                            </div>
                        </a>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/briefcase.svg" height="30" width="30"
                                    x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Việc làm</h5>
                                <span class="fields__description">Tìm việc làm phù hợp với bạn.</span>
                            </div>
                        </a>
                    </div>
                    <div class="menu__fields">
                        <h5 class="fields__name">Nguồn lực cho cộng đồng</h5>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/handshake.svg" height="30" width="30"
                                    x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Ứng phó khẩn cấp</h5>
                                <span class="fields__description">Tìm thông tin mới nhất của các cuộc
                                    khủng hoảng đang diễn ra trên thế giới.</span>
                            </div>
                        </a>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/heart.svg" height="30" width="30" x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Chiến dịch gây quỹ</h5>
                                <span class="fields__description">Quyên góp và gây quỹ cho tổ chức phi
                                    lợi nhuận và mục đích cá nhân.</span>
                            </div>
                        </a>
                    </div>
                    <div class="menu__fields">
                        <h5 class="fields__name">Sản phẩm khác của Facebook</h5>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/messenger.svg" height="30" width="30"
                                    x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Messenger</h5>
                                <span class="fields__description">Chat ngay tức thì với bạn bè và những
                                    người đã kết nối.</span>
                            </div>
                        </a>
                        <a class="fields__item">
                            <svg height="50" width="50">
                                <image href="./assets/img/svg/messenger_kid.svg" height="30" width="30"
                                    x="4" />
                            </svg>
                            <div class="item__text fields__text">
                                <h5 class="item__name">Messenger nhí</h5>
                                <span class="fields__description">Cho phép bé nhắn tin với bạn thân và
                                    gia đình.</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="menu menu--right">
                    <div class="block"></div>
                    <div class="menu__right__items">
                        <div class="menu__right__header">
                            <h4>Tạo</h4>
                        </div>
                        <div class="menu__fields">
                            <a class="fields__item">
                                <div class="fields__item__icon">
                                    <i class="far fa-edit"></i>
                                </div>
                                <div class="item__text fields__text">
                                    <h5 class="item__name">Đăng</h5>
                                </div>
                            </a>
                            <a class="fields__item">
                                <div class="fields__item__icon">
                                    <i class="fas fa-book-open"></i>
                                </div>
                                <div class="item__text fields__text">
                                    <h5 class="item__name">Tin</h5>
                                </div>
                            </a>
                            <a class="fields__item">
                                <div class="fields__item__icon">
                                    <i class="fas fa-video-plus"></i>
                                </div>
                                <div class="item__text fields__text">
                                    <h5 class="item__name">Phòng họp mặt</h5>
                                </div>
                            </a>
                        </div>
                        <div class="menu__fields">
                            <a class="fields__item">
                                <div class="fields__item__icon">
                                    <i class="fas fa-flag-alt"></i>
                                </div>
                                <div class="item__text fields__text">
                                    <h5 class="item__name">Trang</h5>
                                </div>
                            </a>
                            <a class="fields__item">
                                <div class="fields__item__icon">
                                    <i class="far fa-ad"></i>
                                </div>
                                <div class="item__text fields__text">
                                    <h5 class="item__name">Quảng cáo</h5>
                                </div>
                            </a>
                            <a class="fields__item">
                                <div class="fields__item__icon">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="item__text fields__text">
                                    <h5 class="item__name">Nhóm</h5>
                                </div>
                            </a>
                            <a class="fields__item">
                                <div class="fields__item__icon">
                                    <i class="fas fa-calendar-star"></i>
                                </div>
                                <div class="item__text fields__text">
                                    <h5 class="item__name">Sự kiện</h5>
                                </div>
                            </a>
                            <a class="fields__item">
                                <div class="fields__item__icon">
                                    <i class="fas fa-shopping-bag"></i>
                                </div>
                                <div class="item__text fields__text">
                                    <h5 class="item__name">Bài niêm yết trên Marketplace</h5>
                                </div>
                            </a>
                            <a class="fields__item">
                                <div class="fields__item__icon">
                                    <i class="fas fa-briefcase"></i>
                                </div>
                                <div class="item__text fields__text">
                                    <h5 class="item__name">Việc làm</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="options__btn options__messenger">
    <div class="unread__number">3</div>
    <i class="option__icon mess__icon fab fa-facebook-messenger"></i>
    <div class="messenger__area">
        <div class="messenger__area__header">
            <h3 class="messenger__area__title">Messenger</h3>
            <div class="messenger__area__icon mess__messenger__option messenger__option">
                <div class="messenger__option__icon">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div class="setting mess__messenger__setting messenger__setting">
                    <div class="setting__header">
                        <h5 class="setting__title">Cài đặt chat</h5>
                        <p class="setting__description">Tùy chỉnh trải nghiệm trên Messenger.</p>
                    </div>
                    <ul class="setting__status">
                        <li class="status__item status__mess status__phone">
                            <i class="fal fa-phone-alt"></i>
                            <span class="status__option">Âm thanh cuộc gọi đến</span>
                            <div class="setting__toggle">
                                <div class="toggle__btn"></div>
                            </div>
                        </li>
                        <li class="status__item status__mess">
                            <i class="fal fa-volume-off"></i>
                            <span class="status__option">Âm thanh tin nhắn</span>
                            <div class="setting__toggle setting__toggle--active">
                                <div class="toggle__btn"></div>
                            </div>
                        </li>
                        <li class="status__item status__mess">
                            <i class="fal fa-comment"></i>
                            <span class="status__option" style="line-height: 1.8rem;">
                                Tin nhắn mới bật lên
                                <br />
                                <span>Tự động mở tin nhắn mới.</span>
                            </span>
                            <div class="setting__toggle setting__toggle--active">
                                <div class="toggle__btn"></div>
                            </div>
                        </li>
                    </ul>
                    <ul class="setting__policy">
                        <li class="policy__item">
                            <i class="fal fa-adjust"></i>
                            <span class="policy__option">Trạng thái hoạt động</span>
                        </li>
                        <li class="policy__item">
                            <i class="fal fa-comments-alt"></i>
                            <span class="policy__option">Tin nhắn đang chờ</span>
                        </li>
                        <li class="policy__item">
                            <i class="fal fa-comment-alt-dots"></i>
                            <span class="policy__option">Cài đặt gửi tin nhắn</span>
                        </li>
                        <li class="policy__item">
                            <i class="fal fa-minus-hexagon"></i>
                            <span class="policy__option">Cài đặt chặn</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="messenger__area__icon messenger__expand">
                <div class="messenger__option__icon">
                    <i class="fas fa-expand-arrows-alt"></i>
                </div>
            </div>
            <div class="messenger__area__icon messenger__video">
                <div class="messenger__option__icon">
                    <i class="fas fa-video-plus"></i>
                </div>
            </div>
            <div class="messenger__area__icon messenger__edit">
                <div class="messenger__option__icon">
                    <i class="fas fa-edit"></i>
                </div>
            </div>
        </div>
        <div class="message__area__container scroll-container">
            <div class="messenger__search">
                <input type="text" id="mess__search__input" class="search__input"
                    placeholder="Tìm kiếm trên Messenger">
                <label class="search__label" for="mess__search__input">
                    <i class="search__icon fas fa-search"></i>
                </label>
                <div class="search__box__back">
                    <i class="back__icon far fa-long-arrow-left"></i>
                </div>
            </div>
            <div class="messenger__area__body">
                <a class="messenger__item message--unseen">
                    <img src="./assets/img/avatar/godspeed.png" alt="Avatar" class="item__avatar">
                    <div class="item__text">
                        <h5 class="item__name">༺God Speed༻</h5>
                        <span class="item__message">Bạn: Hôm nay là một ngày đẹp trời</span>
                        <span class="item__message-time">· 5 phút</span>
                    </div>
                    <div class="item__message-status">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="messenger__item__option">
                        <i class="fas fa-ellipsis-h"></i>
                        <div class="option__message">
                            <ul class="message__expand">
                                <li class="message__expand__item">
                                    <i class="fal fa-check"></i>
                                    <span class="message__expand__option">Đánh dấu</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fab fa-facebook-messenger"></i>
                                    <span class="message__expand__option">Mở bằng Messenger</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-bell"></i>
                                    <span class="message__expand__option">Tắt cuộc trò chuyện</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-user-circle"></i>
                                    <span class="message__expand__option">Xem trang cá nhân</span>
                                </li>
                            </ul>
                            <ul class="message__expand">
                                <li class="message__expand__item">
                                    <i class="fal fa-phone-alt"></i>
                                    <span class="message__expand__option">Gọi thoại</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-video"></i>
                                    <span class="message__expand__option">Chat video</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>
                <a class="messenger__item message--seen">
                    <img src="./assets/img/avatar/clb-kn.png" alt="Avatar" class="item__avatar">
                    <div class="item__text">
                        <h5 class="item__name">SKILL CLUB K20</h5>
                        <span class="item__message">Nguyễn Thị Ánh Tuyết: Mình K20</span>
                        <span class="item__message-time">· 32 phút</span>
                    </div>
                    <div class="item__message-status">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="messenger__item__option">
                        <i class="fas fa-ellipsis-h"></i>
                        <div class="option__message">
                            <ul class="message__expand">
                                <li class="message__expand__item">
                                    <i class="fal fa-check"></i>
                                    <span class="message__expand__option">Đánh dấu</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fab fa-facebook-messenger"></i>
                                    <span class="message__expand__option">Mở bằng Messenger</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-bell"></i>
                                    <span class="message__expand__option">Tắt cuộc trò chuyện</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-user-circle"></i>
                                    <span class="message__expand__option">Xem trang cá nhân</span>
                                </li>
                            </ul>
                            <ul class="message__expand">
                                <li class="message__expand__item">
                                    <i class="fal fa-phone-alt"></i>
                                    <span class="message__expand__option">Gọi thoại</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-video"></i>
                                    <span class="message__expand__option">Chat video</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>
                <a class="messenger__item message--unseen">
                    <img src="./assets/img/avatar/user4.jpg" alt="Avatar" class="item__avatar">
                    <div class="item__text">
                        <h5 class="item__name">Tài Liệu Sinh Viên</h5>
                        <span class="item__message">Chào Shin !
                            📌 Trọn bộ 6000 khoá học Online chất lượng nhất Việt Nam chỉ 300k
                            Tặng kèm Drive Unlimited thoải mái lưu trữ trên chính tài khoản của
                            mình.</span>
                        <span class="item__message-time">· 4 ngày</span>
                    </div>
                    <div class="item__message-status">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="messenger__item__option">
                        <i class="fas fa-ellipsis-h"></i>
                        <div class="option__message">
                            <ul class="message__expand">
                                <li class="message__expand__item">
                                    <i class="fal fa-check"></i>
                                    <span class="message__expand__option">Đánh dấu</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fab fa-facebook-messenger"></i>
                                    <span class="message__expand__option">Mở bằng Messenger</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-bell"></i>
                                    <span class="message__expand__option">Tắt cuộc trò chuyện</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-user-circle"></i>
                                    <span class="message__expand__option">Xem trang cá nhân</span>
                                </li>
                            </ul>
                            <ul class="message__expand">
                                <li class="message__expand__item">
                                    <i class="fal fa-phone-alt"></i>
                                    <span class="message__expand__option">Gọi thoại</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-video"></i>
                                    <span class="message__expand__option">Chat video</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>
                <a class="messenger__item message--unseen">
                    <img src="./assets/img/avatar/Zeref.jpg" alt="Avatar" class="item__avatar">
                    <div class="item__text">
                        <h5 class="item__name">Shin</h5>
                        <span class="item__message">You sent a photo.</span>
                        <span class="item__message-time">· 6 ngày</span>
                    </div>
                    <div class="item__message-status">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="messenger__item__option">
                        <i class="fas fa-ellipsis-h"></i>
                        <div class="option__message">
                            <ul class="message__expand">
                                <li class="message__expand__item">
                                    <i class="fal fa-check"></i>
                                    <span class="message__expand__option">Đánh dấu</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fab fa-facebook-messenger"></i>
                                    <span class="message__expand__option">Mở bằng Messenger</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-bell"></i>
                                    <span class="message__expand__option">Tắt cuộc trò chuyện</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-user-circle"></i>
                                    <span class="message__expand__option">Xem trang cá nhân</span>
                                </li>
                            </ul>
                            <ul class="message__expand">
                                <li class="message__expand__item">
                                    <i class="fal fa-phone-alt"></i>
                                    <span class="message__expand__option">Gọi thoại</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-video"></i>
                                    <span class="message__expand__option">Chat video</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>
                <a class="messenger__item message--seen">
                    <img src="./assets/img/avatar/user1.jpg" alt="Avatar" class="item__avatar">
                    <div class="item__text">
                        <h5 class="item__name">Diệp Thanh Truyền</h5>
                        <span class="item__message">đang coi.</span>
                        <span class="item__message-time">· 1 tuần</span>
                    </div>
                    <div class="item__message-status">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="messenger__item__option">
                        <i class="fas fa-ellipsis-h"></i>
                        <div class="option__message">
                            <ul class="message__expand">
                                <li class="message__expand__item">
                                    <i class="fal fa-check"></i>
                                    <span class="message__expand__option">Đánh dấu</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fab fa-facebook-messenger"></i>
                                    <span class="message__expand__option">Mở bằng Messenger</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-bell"></i>
                                    <span class="message__expand__option">Tắt cuộc trò chuyện</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-user-circle"></i>
                                    <span class="message__expand__option">Xem trang cá nhân</span>
                                </li>
                            </ul>
                            <ul class="message__expand">
                                <li class="message__expand__item">
                                    <i class="fal fa-phone-alt"></i>
                                    <span class="message__expand__option">Gọi thoại</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-video"></i>
                                    <span class="message__expand__option">Chat video</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>
                <a class="messenger__item message--seen">
                    <img src="./assets/img/avatar/user2.jpg" alt="Avatar" class="item__avatar">
                    <div class="item__text">
                        <h5 class="item__name">MS Hoa Giao Tiếp</h5>
                        <span class="item__message">Chúc mừng Shin đã trở thành 1 trong 20 người may mắn
                            nhất nhận được học bổng trị giá 1.000.000đ khi đăng ký khóa học 6 tháng.

                            Bạn vui lòng để lại #Tên + #SĐT và cơ sở gần nhất để cô liên hệ xác nhận nha
                            ^^</span>
                        <span class="item__message-time">· 4 tuần</span>
                    </div>
                    <div class="item__message-status">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="messenger__item__option">
                        <i class="fas fa-ellipsis-h"></i>
                        <div class="option__message">
                            <ul class="message__expand">
                                <li class="message__expand__item">
                                    <i class="fal fa-check"></i>
                                    <span class="message__expand__option">Đánh dấu</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fab fa-facebook-messenger"></i>
                                    <span class="message__expand__option">Mở bằng Messenger</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-bell"></i>
                                    <span class="message__expand__option">Tắt cuộc trò chuyện</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-user-circle"></i>
                                    <span class="message__expand__option">Xem trang cá nhân</span>
                                </li>
                            </ul>
                            <ul class="message__expand">
                                <li class="message__expand__item">
                                    <i class="fal fa-phone-alt"></i>
                                    <span class="message__expand__option">Gọi thoại</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-video"></i>
                                    <span class="message__expand__option">Chat video</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>
                <a class="messenger__item">
                    <img src="./assets/img/avatar/user3.jpg" alt="Avatar" class="item__avatar">
                    <div class="item__text">
                        <h5 class="item__name">Thu Cuối</h5>
                        <span class="item__message">Bạn: Gì kỳ vậy</span>
                        <span class="item__message-time">· 7 tuần</span>
                    </div>
                    <div class="item__message-status">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="messenger__item__option">
                        <i class="fas fa-ellipsis-h"></i>
                        <div class="option__message">
                            <ul class="message__expand">
                                <li class="message__expand__item">
                                    <i class="fal fa-check"></i>
                                    <span class="message__expand__option">Đánh dấu</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fab fa-facebook-messenger"></i>
                                    <span class="message__expand__option">Mở bằng Messenger</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-bell"></i>
                                    <span class="message__expand__option">Tắt cuộc trò chuyện</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-user-circle"></i>
                                    <span class="message__expand__option">Xem trang cá nhân</span>
                                </li>
                            </ul>
                            <ul class="message__expand">
                                <li class="message__expand__item">
                                    <i class="fal fa-phone-alt"></i>
                                    <span class="message__expand__option">Gọi thoại</span>
                                </li>
                                <li class="message__expand__item">
                                    <i class="fal fa-video"></i>
                                    <span class="message__expand__option">Chat video</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="messenger__area__footer">
            <a href="#" class="message__footer-link">
                Xem tất cả trong Messenger
            </a>
        </div>
    </div>
    </div>
    <div class="options__btn options__notify">
    <div class="unread__number">1</div>
    <i class="option__icon notify__icon fas fa-bell"></i>
    <div class="notify__area">
        <div class="notify__area__header">
            <div class="notify__header">
                <h3 class="notify__area__title">Thông báo</h3>
                <div class="notify__area__icon notify__option">
                    <div class="notify__option__icon">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                    <div class="setting notify__setting">
                        <ul class="setting__status">
                            <li class="status__item status__phone">
                                <i class="fal fa-check"></i>
                                <span class="status__option">Đánh dấu tất cả là đã đọc</span>
                            </li>
                            <li class="status__item">
                                <i class="fal fa-cog"></i>
                                <span class="status__option">Cài đặt thông báo</span>
                            </li>
                            <li class="status__item">
                                <i class="fal fa-desktop-alt"></i>
                                <span class="status__option">Mở thông báo</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="notify__area__container scroll-container">
            <a href="#" class="notify__view-all">Xem tất cả</a>
            <div class="notify__area__body">
                <div class="notify__new">
                    <h3 class="notify__history">Mới</h3>
                    <a class="notify__item notify--new">
                        <img src="./assets/img/avatar/zsm.jpg" alt="Avatar" class="item__avatar">
                        <div class="item__text">
                            <p class="item__notify"><strong>ZingSpeed Mobile</strong> đang phát trực
                                tiếp: "【GIẢI ĐẤU】30072021 | LIVESTREAM GIẢI ĐẤU ASIAN CUP TOURNAMENT
                                2021 - TUẦN 1 - VÒNG LOẠI".</p>
                            <div class="item__notify-time">29 phút trước</div>
                        </div>
                        <div class="item__notify-status"></div>
                        <div class="notify__item__option">
                            <i class="fas fa-ellipsis-h"></i>
                            <div class="option__notify">
                                <ul class="notify__expand">
                                    <li class="notify__expand__item">
                                        <i class="fal fa-check"></i>
                                        <span class="notify__expand__option">Đánh dấu</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-window-close"></i>
                                        <span class="notify__expand__option">Gỡ thông báo này</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-bell-slash"></i>
                                        <span class="notify__expand__option">Tắt thông báo về bài viết
                                            này</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-bug"></i>
                                        <span class="notify__expand__option">Báo cáo sự cố cho Đội ngũ
                                            phụ trách Thông báo</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="notify__old">
                    <h3 class="notify__history">Trước đó</h3>
                    <a class="notify__item notify--old">
                        <img src="./assets/img/avatar/zsm.jpg" alt="Avatar" class="item__avatar">
                        <div class="item__text">
                            <p class="item__notify"><strong>ZingSpeed Mobile</strong> đã đăng video
                                mới: "【GIẢI ĐẤU】HIGHTLIGHT GIẢI ĐẤU ASIAN CUP TOURNAMENT 2021 - VÒNG
                                LOẠI".</p>
                            <div class="item__notify-time">17 giờ trước</div>
                        </div>
                        <div class="notify__item__option">
                            <i class="fas fa-ellipsis-h"></i>
                            <div class="option__notify">
                                <ul class="notify__expand">
                                    <li class="notify__expand__item">
                                        <i class="fal fa-check"></i>
                                        <span class="notify__expand__option">Đánh dấu</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-window-close"></i>
                                        <span class="notify__expand__option">Gỡ thông báo này</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-bell-slash"></i>
                                        <span class="notify__expand__option">Tắt thông báo về bài viết
                                            này</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-bug"></i>
                                        <span class="notify__expand__option">Báo cáo sự cố cho Đội ngũ
                                            phụ trách Thông báo</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    <a class="notify__item notify--old">
                        <img src="./assets/img/avatar/user5.jpg" alt="Avatar" class="item__avatar">
                        <div class="item__text">
                            <p class="item__notify">Bạn có bài viết mới để xem trong <strong>SKILL
                                    CLUB K20.</strong></p>
                            <div class="item__notify-time">1 ngày trước</div>
                        </div>
                        <div class="notify__item__option">
                            <i class="fas fa-ellipsis-h"></i>
                            <div class="option__notify">
                                <ul class="notify__expand">
                                    <li class="notify__expand__item">
                                        <i class="fal fa-check"></i>
                                        <span class="notify__expand__option">Đánh dấu</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-window-close"></i>
                                        <span class="notify__expand__option">Gỡ thông báo này</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-bell-slash"></i>
                                        <span class="notify__expand__option">Tắt thông báo về bài viết
                                            này</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-bug"></i>
                                        <span class="notify__expand__option">Báo cáo sự cố cho Đội ngũ
                                            phụ trách Thông báo</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    <a class="notify__item notify--old">
                        <img src="./assets/img/avatar/user1.jpg" alt="Avatar" class="item__avatar">
                        <div class="item__text">
                            <p class="item__notify"><strong>Diệp Thanh Truyền</strong> đã phản hồi
                                bình luận của bạn về ảnh trong <strong>Nghiện Build PC.</strong></p>
                            <div class="item__notify-time">3 ngày trước</div>
                        </div>
                        <div class="notify__item__option">
                            <i class="fas fa-ellipsis-h"></i>
                            <div class="option__notify">
                                <ul class="notify__expand">
                                    <li class="notify__expand__item">
                                        <i class="fal fa-check"></i>
                                        <span class="notify__expand__option">Đánh dấu</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-window-close"></i>
                                        <span class="notify__expand__option">Gỡ thông báo này</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-bell-slash"></i>
                                        <span class="notify__expand__option">Tắt thông báo về bài viết
                                            này</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-bug"></i>
                                        <span class="notify__expand__option">Báo cáo sự cố cho Đội ngũ
                                            phụ trách Thông báo</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    <a class="notify__item notify--old">
                        <img src="./assets/img/avatar/clb-kn.png" alt="Avatar" class="item__avatar">
                        <div class="item__text">
                            <p class="item__notify"><strong>CLB Kỹ Năng - ĐH Sư Phạm Kỹ Thuật
                                    TP.HCM</strong> đã thêm ảnh mới.</p>
                            <div class="item__notify-time">1 tuần trước</div>
                        </div>
                        <div class="notify__item__option">
                            <i class="fas fa-ellipsis-h"></i>
                            <div class="option__notify">
                                <ul class="notify__expand">
                                    <li class="notify__expand__item">
                                        <i class="fal fa-check"></i>
                                        <span class="notify__expand__option">Đánh dấu</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-window-close"></i>
                                        <span class="notify__expand__option">Gỡ thông báo này</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-bell-slash"></i>
                                        <span class="notify__expand__option">Tắt thông báo về bài viết
                                            này</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-bug"></i>
                                        <span class="notify__expand__option">Báo cáo sự cố cho Đội ngũ
                                            phụ trách Thông báo</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    <a class="notify__item notify--old">
                        <img src="./assets/img/avatar/user6.jpg" alt="Avatar" class="item__avatar">
                        <div class="item__text">
                            <p class="item__notify">Yêu cầu tham gia <strong>Học lập trình
                                    web...</strong> của bạn đã được phê duyệt. Giờ đây bạn có thể đăng
                                và bình luận về các bài viết trong nhóm.</p>
                            <div class="item__notify-time">2 tuần trước</div>
                        </div>
                        <div class="notify__item__option">
                            <i class="fas fa-ellipsis-h"></i>
                            <div class="option__notify">
                                <ul class="notify__expand">
                                    <li class="notify__expand__item">
                                        <i class="fal fa-check"></i>
                                        <span class="notify__expand__option">Đánh dấu</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-window-close"></i>
                                        <span class="notify__expand__option">Gỡ thông báo này</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-bell-slash"></i>
                                        <span class="notify__expand__option">Tắt thông báo về bài viết
                                            này</span>
                                    </li>
                                    <li class="notify__expand__item">
                                        <i class="fal fa-bug"></i>
                                        <span class="notify__expand__option">Báo cáo sự cố cho Đội ngũ
                                            phụ trách Thông báo</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="options__btn options__complementary">
    <div class="notice"></div>
    <i class="option__icon complementary__icon fas fa-sort-down"></i>
    <div class="complementary__area">
        <div class="complementary__area__container scroll-container">
            <div class="complementary__area__body">
                <div class="complementary__fields">
                    <a href="../../profile.html" class="complementary__item">
                        <img src="./assets/img/avatar/Zeref.jpg"
                            class="complementary__item__image"></img>
                        <div class="item__text complementary__text">
                            <h5 class="item__name">Shin</h5>
                            <span class="direction">Xem trang cá nhân của bạn</span>
                        </div>
                    </a>
                </div>
                <div class="complementary__fields">
                    <a class="complementary__item">
                        <div class="complementary__item__icon">
                            <i class="fas fa-comment-alt-exclamation"></i>
                        </div>
                        <div class="item__text complementary__text">
                            <h5 class="item__name">Đóng góp ý kiến</h5>
                            <span class="fields__description">Góp phần cải thiện phiên bản Facebook
                                mới.</span>
                        </div>
                    </a>
                </div>
                <div class="complementary__fields">
                    <a class="complementary__item">
                        <div class="user__change">
                            <div class="unread__number user__change--notice">1</div>
                            <img src="./assets/img/avatar/pikachu.jpg" class="avatar__change">
                        </div>
                        <div class="item__text complementary__text">
                            <h5 class="item__name">Chuyển tài khoản</h5>
                            <span class="fields__description">Đăng nhập dưới tên Pikachu.</span>
                        </div>
                        <div class="complementary__item__option comple__options">
                            <i class="fas fa-ellipsis-h"></i>
                            <div class="option__complement complement__option">
                                <ul class="complement__expand" style="border: none;">
                                    <li class="complement__expand__item">
                                        <i class="fas fa-plus-circle"></i>
                                        <span class="complement__expand__option">Đăng nhập bằng tài
                                            khoản khác</span>
                                    </li>
                                    <li class="complement__expand__item">
                                        <i class="fas fa-trash-alt"></i>
                                        <span class="complement__expand__option">Gỡ tài khoản</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    <a class="complementary__item expand__open">
                        <div class="complementary__item__icon">
                            <i class="fas fa-cog"></i>
                        </div>
                        <div class="item__text complementary__text">
                            <h5 class="item__name">Cài đặt & quyền riêng tư</h5>
                        </div>
                        <i class="fal fa-chevron-right"></i>
                    </a>
                    <a class="complementary__item expand__open">
                        <div class="complementary__item__icon">
                            <i class="fas fa-question-circle"></i>
                        </div>
                        <div class="item__text complementary__text">
                            <h5 class="item__name">Trợ giúp & hỗ trợ</h5>
                        </div>
                        <i class="fal fa-chevron-right"></i>
                    </a>
                    <a class="complementary__item expand__open">
                        <div class="complementary__item__icon">
                            <i class="fas fa-moon"></i>
                        </div>
                        <div class="item__text complementary__text">
                            <h5 class="item__name">Màn hình và trợ năng</h5>
                        </div>
                        <i class="fal fa-chevron-right"></i>
                    </a>
                    <a class="complementary__item">
                        <div class="complementary__item__icon">
                            <i class="fal fa-sign-out"></i>
                        </div>
                        <div class="item__text complementary__text">
                            <h5 class="item__name">Đăng xuất</h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="complementary__area__footer">
            <a href="" class="complementary__footer__link">Quyền riêng tư</a>
            &zwnj; &#183; &zwnj;
            <a href="" class="complementary__footer__link">Điều khoản</a>
            &zwnj; &#183; &zwnj;
            <a href="" class="complementary__footer__link">Quảng cáo</a>
            &zwnj; &#183; &zwnj;
            <a href="" class="complementary__footer__link">
                Lựa chọn quảng cáo
            </a>
            &zwnj; &#183; &zwnj;
            <a href="" class="complementary__footer__link">Cookie</a>
            &zwnj; &#183; &zwnj;
            <a href="" class="complementary__footer__link link__item--last comple__options">
                Xem thêm
                <div class="option__complement last__link">
                    <ul class="complement__expand" style="border: none;">
                        <li class="complement__expand__item">
                            <span class="complement__expand__option">Giới thiệu</span>
                        </li>
                        <li class="complement__expand__item">
                            <span class="complement__expand__option">Nghề nghiệp</span>
                        </li>
                        <li class="complement__expand__item">
                            <span class="complement__expand__option">Nhà phát triển</span>
                        </li>
                        <li class="complement__expand__item">
                            <span class="complement__expand__option">Trợ giúp</span>
                        </li>
                    </ul>
                </div>
            </a>
            &zwnj; &#183; &zwnj;
            <span class="complementary__footer__text">Facebook &copy; 2021</span>
        </div>
    </div>
</div>
`;

headerHome.appendChild(headerLogo);
headerHome.appendChild(headerSearch);

headerNav.appendChild(headerNavBox);

headerComple.appendChild(headerUser);
headerComple.appendChild(headerOption);

header.appendChild(headerHome);
header.appendChild(headerNav);
header.appendChild(headerComple);
document.body.appendChild(header);