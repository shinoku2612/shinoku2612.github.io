import requestAPI from './musicPlayer.js';
import { SONG_API, app, audio } from './musicPlayer.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// //Lấy dữ liệu của song để truyền lên API
const data = {
    "name": "Unknown",
    "singer": "Unknown",
    "path": "",
    "image": "./Thumbnail/Music.png"
};
const pathTree = [
    "MyFolder/",
    "TaiLieuHocTap/",
    "JavaSrcipt_Co_Ban/",
    "Pratice_with_sampleCode/",
    "Playlist/"
];
const pathLength = pathTree.length;

export const form = $('.form-body');
const showForm = $('#show-form');
const btnCancel = $('#btn-cancel');
const btnOK = $('#btn-ok');
const fileInput = $('#file');
const fileName = $('#file-name');
const mediaPlayPage = $('body');

// Gửi request tới Web Server, kiểm tra file path (url) có tồn tại không

//Lấy tên file, lưu lại và hiển thị trên giao diện
fileInput.onchange = function () {
    fileName.innerText = this.files[0].name;

    let startPath = "http://127.0.0.1:8887/";

    const request = new XMLHttpRequest();

    for (let i = 0; i <= pathLength; i++) {
        request.open('GET', startPath + this.files[0].name, false);
        request.send();
        if (request.status === 200) {
            data.path = startPath;
            break;
        }
        startPath += pathTree[i];
    }
}
showForm.onclick = function () {
    form.style.display = 'flex';
    mediaPlayPage.disabled = true;
    // console.log(1)
}
btnCancel.onclick = function (e) {
    e.preventDefault();
    form.style.display = 'none';
}
// btnOK.onclick = function (e) {
//     const inputValue = document.querySelectorAll('.input-box input');
//     const songName = inputValue[0].value;
//     const songSinger = inputValue[1].value;
//     data["name"] = songName;
//     data["singer"] = songSinger;
//     data["path"] += fileName.innerText;

//     if (songName !== '' && songSinger !== '' && fileName.innerText !== '') {
//         e.preventDefault();
//         const body = JSON.stringify(data);
//         const header = { 'Content-Type': 'application/json' };
//         let listSong = [];
//         requestAPI(SONG_API, 'POST', body, header)
//             .then(() => {
//                 requestAPI(SONG_API)
//                     .then(data => {
//                         app.songs = data;
//                         app.render();
//                     });
//             });
//         data["path"] = "";
//         inputValue[0].value = '';
//         inputValue[1].value = '';
//         fileName.innerText = '';
//         form.style.display = 'none';
//     }
// }