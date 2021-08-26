const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const rootElement = $(":root");

function removeActiveElement(className, elementSelected = null) {
    const elementActive = $(`.${className}`);
    if (elementActive && elementActive !== elementSelected) {
        elementActive.classList.remove(className);
    }
}

// Navigation menu event: __Direction
const navItems = $$(".nav__item");
navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
        const navItemctive = $(".nav__item--active");
        if (navItemctive) {
            navItemctive.classList.remove("nav__item--active");
        }
        navItem.classList.add("nav__item--active");
    });
});

// Option event: __Toggle menu option
const optionBtns = $$(".options__btn");
optionBtns.forEach(option => {
    option.addEventListener("click", (event) => {
        event.stopPropagation();
        const optionActive = $(".options__btn--active");
        if (optionActive && option !== optionActive) {
            optionActive.classList.remove("options__btn--active");
        }
        option.classList.toggle("options__btn--active");
        removeActiveElement("messenger__setting--active");
        if (optionActive) {
            removeActiveElement("messenger__item__option--active");
            removeActiveElement("notify__item__option--active");
            removeActiveElement("notify__setting--active");
            removeActiveElement("complementary__item__option--active");
            removeActiveElement("expand__options--active");
        }
        complementaryArea.style.display = null;
    });
});
const optionMessenger = $(".options__messenger");
document.addEventListener("click", event => {
    removeActiveElement("options__btn--active");
    if (!optionMessenger.classList.contains("options__btn--active")) {
        removeActiveElement("messenger__setting--active");
        removeActiveElement("messenger__item__option--active");
        removeActiveElement("notify__setting--active");
        removeActiveElement("notify__item__option--active");
        removeActiveElement("complementary__item__option--active");
        removeActiveElement("expand__options--active");
    }
    complementaryArea.style.display = null;
});

// Menu event
const menuArea = $(".menu__area");
menuArea.addEventListener("click", event => {
    event.stopPropagation();
});
const menuContainer = $(".menu__area__container");
menuContainer.onscroll = function (event) {
    const block = $(".block");
    block.style.maxHeight = this.scrollHeight - this.offsetHeight - 53 + "px";
    let blockHeight = this.scrollTop - 53;
    if (blockHeight <= 0) {
        blockHeight = 0;
    } else if (blockHeight >= this.scrollHeight - this.offsetHeight - 53) {
        blockHeight = this.scrollHeight - this.offsetHeight - 53;
    }
    block.style.height = blockHeight + "px";
}

// Messenger area event: __Search
const messengerSearch = $(".messenger__search");
messengerSearch.addEventListener("click", event => {

});

// Messenger area event: __Menu
const messengerArea = $(".messenger__area");
messengerArea.addEventListener("click", event => {
    event.stopPropagation();
    removeActiveElement("messenger__setting--active");
    removeActiveElement("messenger__item__option--active");
});

const messengerOption = $(".mess__messenger__option");
const messengerSetting = $(".mess__messenger__setting");
messengerOption.addEventListener("click", (event) => {
    event.stopPropagation();
    messengerSetting.classList.toggle("messenger__setting--active");
    removeActiveElement("messenger__item__option--active");
});

const friendMessengerOption = $(".friend__messenger__option");
const friendMessengerSetting = $(".friend__messenger__setting");
if (friendMessengerOption) {
    friendMessengerOption.addEventListener("click", (event) => {
        event.stopPropagation();
        friendMessengerSetting.classList.toggle("messenger__setting--active");
        removeActiveElement("messenger__item__option--active");
    });
}
const notifyOption = $(".notify__option");
const notifySetting = $(".notify__setting");
notifyOption.addEventListener("click", (event) => {
    event.stopPropagation();
    notifySetting.classList.toggle("notify__setting--active");
    removeActiveElement("notify__item__option--active");
});

const statusMessItems = $$(".status__mess");
statusMessItems.forEach(statusMessItem => {
    statusMessItem.addEventListener("click", () => {
        statusMessItem.lastElementChild.classList.toggle("setting__toggle--active");
    });
});

// __Setting: phone sound
const modalPhone = $(".modal__phone");

const closeModalBtn = $(".modal__close-btn");
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
        removeActiveElement("modal--active");
        statusMessItems[0].lastElementChild.classList.add("setting__toggle--active");
        statusMessItems[3].lastElementChild.classList.add("setting__toggle--active");
    });
}

const phoneStatus = $(".status__phone");
if (modalPhone) {
    phoneStatus.addEventListener("click", () => {
        if (!phoneStatus.lastElementChild.classList.contains("setting__toggle--active")) {
            removeActiveElement("messenger__setting--active");
            modalPhone.classList.add("modal--active");
        }
    });
}
const friendPhoneStatus = $(".friend__status__phone");
if (modalPhone && friendPhoneStatus) {
    friendPhoneStatus.addEventListener("click", () => {
        if (!friendPhoneStatus.lastElementChild.classList.contains("setting__toggle--active")) {
            removeActiveElement("messenger__setting--active");
            modalPhone.classList.add("modal--active");
        }
    });
}
const modalOptions = $$(".modal__option__item");
if (modalOptions) {
    modalOptions.forEach(modalOption => {
        modalOption.addEventListener("click", () => {
            const modalRadio = modalOption.querySelector("input[type='radio']");
            const optionSelected = modalPhone.querySelector(".footer__close-modal");
            modalRadio.checked = true;
            optionSelected.classList.add("footer__close-modal--active");
            optionSelected.addEventListener("click", () => {
                removeActiveElement("modal--active");
            });
        });
    });
}

// Messenger area event: __Message options
const messageOptions = $$(".messenger__item__option");
messageOptions.forEach(messOption => {
    messOption.addEventListener("click", event => {
        event.stopPropagation();
        removeActiveElement("messenger__setting--active");
        removeActiveElement("messenger__item__option--active", messOption);
        messOption.classList.toggle("messenger__item__option--active");
        const option = messOption.querySelector(".option__message");
        if (event.screenY >= 430) {
            option.setAttribute("style", "bottom: calc(100% + 16px)");
            option.style.setProperty("--after-display", "block");
        } else {
            option.setAttribute("style", "top: calc(100% + 16px)");
            option.style.setProperty("--before-display", "block");
        }
    });
})
// Notify area event: __notify options
const notifyArea = $(".notify__area");
notifyArea.addEventListener("click", event => {
    event.stopPropagation();
    removeActiveElement("notify__setting--active");
    removeActiveElement("notify__item__option--active");
});

const notifyOptions = $$(".notify__item__option");
notifyOptions.forEach(noteOption => {
    noteOption.addEventListener("click", event => {
        event.stopPropagation();
        removeActiveElement("notify__setting--active");
        removeActiveElement("notify__item__option--active", noteOption);
        noteOption.classList.toggle("notify__item__option--active");
        const option = noteOption.querySelector(".option__notify");
        if (event.screenY >= 430) {
            option.setAttribute("style", "bottom: calc(100% + 16px)");
            option.style.setProperty("--after-display", "block");
        } else {
            option.setAttribute("style", "top: calc(100% + 16px)");
            option.style.setProperty("--before-display", "block");
        }
    });
})

const settingItems = $$(".setting");
// Setting click event
settingItems.forEach(settingItem => {
    settingItem.addEventListener("click", (event) => {
        event.stopPropagation();
    });
});

// Complementary event
const complementaryArea = $(".complementary__area");
complementaryArea.addEventListener("click", event => {
    event.stopPropagation();
});
const complementOptions = $$(".comple__options");
complementOptions.forEach(complementOption => {
    complementOption.addEventListener("click", event => {
        event.stopPropagation();
        event.preventDefault();
        removeActiveElement("complementary__item__option--active", complementOption);
        complementOption.classList.toggle("complementary__item__option--active");
    });
});

// Expand menu event
const expandOptions = $$(".expand__options");
expandOptions.forEach(expandOption => {
    expandOption.addEventListener("click", event => {
        event.stopPropagation();
    })
});

const expandOpenBtns = $$(".expand__open");
const expandNumber = expandOpenBtns.length;
for (let index = 0; index < expandNumber; index++) {
    expandOpenBtns[index].addEventListener("click", () => {
        removeActiveElement("expand__options--active");
        expandOptions[index].classList.add("expand__options--active");
        complementaryArea.style.display = "none";
    });
}
const expandBacks = $$(".expand__back");
expandBacks.forEach(expandBack => {
    expandBack.addEventListener("click", () => {
        removeActiveElement("expand__options--active");
        complementaryArea.style.display = null;
    });
});

const expandSelectors = $$(".expand__item__selector");
expandSelectors.forEach(expandSelector => {
    expandSelector.addEventListener("click", () => {
        const modalRadio = expandSelector.querySelector("input[type='radio']");
        modalRadio.checked = true;
        // const darkmodeActive = $(".darkmode--active");
    });
});
const openKeyboardBtn = $(".expand__open__keyboard");
if (openKeyboardBtn) {
    openKeyboardBtn.addEventListener("click", () => {
        removeActiveElement("expand__options--active");
        expandOptions[expandNumber].classList.add("expand__options--active");
    })
}
const keyboardBack = $(".keyboard__back");
keyboardBack.addEventListener("click", () => {
    removeActiveElement("expand__options--active", keyboardBack);
    expandOptions[expandNumber - 1].classList.add("expand__options--active");
});

// Content

const lazyLoadSidebarItems = $$(".sidebar__lazy-item");
const loadMoreSidebarItems = $(".expand__sidebar");
if (loadMoreSidebarItems) {
    loadMoreSidebarItems.addEventListener("click", () => {
        lazyLoadSidebarItems.forEach(sidebarItem => {
            sidebarItem.style.setProperty("--lazy-display", "flex");
        });
        loadMoreSidebarItems.style.setProperty("--hide-display", "none");
    });
}
const hideSidebarItems = $(".collapse__sidebar");
if (hideSidebarItems) {
    hideSidebarItems.addEventListener("click", () => {
        lazyLoadSidebarItems.forEach(sidebarItem => {
            sidebarItem.style.setProperty("--lazy-display", "none");
        });
        loadMoreSidebarItems.style.setProperty("--hide-display", "flex");
    });
}

const lazyLoadShortcutItems = $$(".shortcut__lazy-item");
const loadMoreShortcutItems = $(".expand__shortcut");
if (loadMoreShortcutItems) {
    loadMoreShortcutItems.addEventListener("click", () => {
        lazyLoadShortcutItems.forEach(shortcutItem => {
            shortcutItem.style.setProperty("--lazy-display", "flex");
        });
        loadMoreShortcutItems.style.setProperty("--hide-display", "none");
    });
}
const hideShortcutItems = $(".collapse__shortcut");
if (hideShortcutItems) {
    hideShortcutItems.addEventListener("click", () => {
        lazyLoadShortcutItems.forEach(shortcutItem => {
            shortcutItem.style.setProperty("--lazy-display", "none");
        });
        loadMoreShortcutItems.style.setProperty("--hide-display", "flex");
    });
}

const sideBarRight = $(".side-bar__right");
const sideBarBirthday = $(".side-bar__birthday");
const birthdayClearBtn = $(".birthday__clear");
if (birthdayClearBtn) {
    birthdayClearBtn.addEventListener("click", () => {
        sideBarRight.removeChild(sideBarBirthday);
    })
}
if (friendMessengerOption) {
    const oHeight = friendMessengerOption.offsetHeight;
    sideBarRight.addEventListener("scroll", (event) => {
        if (sideBarRight.scrollTop >= 200) {
            friendMessengerSetting.classList.remove("messenger__setting--active");
        }
        friendMessengerSetting.style.setProperty("--popout-top", `calc(28rem - ${oHeight}px - ${sideBarRight.scrollTop}px)`);
    });
}