// Story
const storyUsers = [
    {
        storyBackground: "url('../../assets/img/avatar/s1.jpg')",
        storyUserAvatar: "url('../../assets/img/avatar/su1.jpg')",
        storyUserName: "Xuân Hòa",
        storyStatus: "unseen"
    },
    {
        storyBackground: "url('../../assets/img/avatar/s2.jpg')",
        storyUserAvatar: "url('../../assets/img/avatar/su2.jpg')",
        storyUserName: "Trân Thượng Thanh Duyên",
        storyStatus: "seen"
    },
    {
        storyBackground: "url('../../assets/img/avatar/s3.jpg')",
        storyUserAvatar: "url('../../assets/img/avatar/su3.jpg')",
        storyUserName: "Vỹ Trần",
        storyStatus: "unseen"
    },
    {
        storyBackground: "url('../../assets/img/avatar/s4.jpg')",
        storyUserAvatar: "url('../../assets/img/avatar/su4.jpg')",
        storyUserName: "Hero Wars Mobile",
        storyStatus: "unseen"
    },
];
const numOfStory = storyUsers.length;
const storyContainer = document.querySelector(".story");

for (let i = 0; i < numOfStory; i++) {
    storyContainer.innerHTML += `
        <div class="story__items story__user story--${storyUsers[i].storyStatus}">
            <div class="story__user__avatar"></div>
            <div class="story__user__name">${storyUsers[i].storyUserName}</div>
        </div>
    `;
}
const storyBackgrounds = document.querySelectorAll(".story__user");
const storyUserAvatars = document.querySelectorAll(".story__user__avatar");
for (let i = 0; i < numOfStory; i++) {
    storyBackgrounds[i].style.setProperty("--story-thumb", storyUsers[i].storyBackground);
    storyUserAvatars[i].style.setProperty("--user-avatar", storyUsers[i].storyUserAvatar);
}

const meetingMember = [
    "url('../../assets/img/avatar/f1.jpg')",
    "url('../../assets/img/avatar/f2.jpg')",
    "url('../../assets/img/avatar/f3.jpg')",
    "url('../../assets/img/avatar/f6.jpg')",
    "url('../../assets/img/avatar/f8.jpg')",
];
const numOfMember = meetingMember.length;
const memberAvatar = document.querySelectorAll(".room-member__avatar");
for (let i = 0; i < numOfMember; i++) {
    memberAvatar[i].style.setProperty("--member-avatar", meetingMember[i]);
}