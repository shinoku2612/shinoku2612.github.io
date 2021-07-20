// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "SHIN";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
// const progressBar = $(".progress-bar");
// const progressDone = $(".progress-done");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");
const volumeBtn = $(".fa-volume-up");
const volumeMute = $(".fa-volume-mute");
const volumeDown = $(".fa-volume-down");
const volumeBar = $("#volume");
const volumeChange = $(".volume-change");

//Input form
const inputSongName = $$('input[type="text"]')[0];
const inputSingerName = $$('input[type="text"]')[1];

function requestAPI(API, method = 'GET', body = null, header = {}) {
    var option = {
        method: method,
        headers: header,
        body: body
    }
    return fetch(API, option)
        .then(function (response) {
            return response.json();
        })
        .catch(() => {
            console.log('ERROR!')
        });
}

export const SONG_API = "http://localhost:3000/songs";
export const audio = $("#audio");
export default requestAPI;

import { form } from './addSong.js'
export const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    audioVolume: 1,
    isMute: false,
    playedSong: [],
      config: {},
    // (1/2) Uncomment the line below to use localStorage
    // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
    songs: [
        {
            name: "Nevada",
            singer: "Vicetone",
            path: "./Playlist/Nevada.mp3",
            image: "./Thumbnail/Music.png"
        },
        {
            name: "Anh Chỉ Là Bạn Thân",
            singer: "Tăng Phúc",
            path: "./Playlist/ACLBT.mp3",
            image: "./Thumbnail/Music.png"
        },
        {
            name: "Attention",
            singer: "Charlie Puth",
            path: "./Playlist/Attention.mp3",
            image: "./Thumbnail/Music.png"
        },
        {
            name: "DiESi",
            singer: "Unknown",
            path: "./Playlist/DiESi.mp3",
            image: "./Thumbnail/Music.png"
        },
        {
            name: "Đúng Cũng Thành Sai",
            singer: "Mỹ Tâm",
            path: "./Playlist/DungCungThanhSai.mp3",
            image: "./Thumbnail/Music.png"
        },
        {
            name: "Memories",
            singer: "Maroon 5",
            path: "./Playlist/Memories.mp3",
            image: "./Thumbnail/Music.png"
        },
        {
            name: "Sài Gòn Yếu Đuối Biết Dựa Vào Ai",
            singer: "Tăng Phúc",
            path: "./Playlist/SGYDBDVA.mp3",
            image: "./Thumbnail/Music.png"
        },
        {
            name: "Tìm Nhau Không",
            singer: "Tăng Phúc",
            path: "./Playlist/TimNhauKhong.mp3",
            image: "./Thumbnail/Music.png"
        }
    ],
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                            <div class="song ${index === this.currentIndex ? "active" : ""
                }" data-index="${index}">
                                <div class="thumb"
                                    style="background-image: url('${song.image}')">
                                </div>
                                <div class="body">
                                    <h3 class="title">${song.name}</h3>
                                    <p class="author">${song.singer}</p>
                                </div>
                                <div class="option item-${index}">
                                    <i class="fas fa-minus-circle"></i>
                                </div>
                            </div>
                        `;
        });
        playlist.innerHTML = htmls.join("");
    },
    setConfig: function (key, value) {
        this.config[key] = value;
        // (2/2) Uncomment the line below to use localStorage
        // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            }
        });
    },
    handleVolumeBar: function (volumeBar) {
        const leftRange = volumeBar.value * 100;
        const color = `linear-gradient(90deg, #ec1f55 ${leftRange}%, #d3d3d3 ${leftRange}%)`;
        volumeBar.style.background = color;
    },
    handleEvents: function () {
        const _this = this;
        const cdWidth = cd.offsetWidth;
        // Xử lý CD quay / dừng
        // Handle CD spins / stops
        const cdThumbAnimate = cdThumb.animate([
            {
                transform: "rotate(0deg)"
            },
            {
                transform: "rotate(360deg)"
            }
        ], {
            duration: 10000, // 10 seconds
            iterations: Infinity
        });
        cdThumbAnimate.pause();

        // Xử lý phóng to / thu nhỏ CD
        // Handles CD enlargement / reduction
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        };

        // Xử lý khi click play
        // Handle when click play
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };

        // Khi song được play
        // When the song is played
        audio.onplay = function () {
            _this.setConfig("currentIndex", _this.currentIndex);
            _this.isPlaying = true;
            player.classList.add("playing");
            cdThumbAnimate.play();
            _this.playedSong.push(_this.currentIndex);
        };

        // Khi song bị pause
        // When the song is pause
        audio.onpause = function () {
            _this.isPlaying = false;
            player.classList.remove("playing");
            cdThumbAnimate.pause();
        };

        // Khi tiến độ bài hát thay đổi
        // When the song progress changes
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(
                    (audio.currentTime / audio.duration) * 100
                );
                progress.value = progressPercent;
                //Xử lý giao diện cho progress bar
                const leftRange = progress.value;
                const color = `linear-gradient(90deg, #ec1f55 ${leftRange}%, #d3d3d3 ${leftRange}%)`;
                progress.style.background = color;
                //{Uncomment khi dùng div làm progress bar}
                // progressDone.style.width = progressPercent + '%';
            }
        };

        // Xử lý khi tua song
        // Handling when seek
        progress.oninput = function (e) {
            const seekTime = (audio.duration / 100) * progress.value;
            audio.currentTime = seekTime;
        };

        //Xử lý giao diện cho progress bar

        // {Nếu dùng div làm progress bar thì uncomment đoạn này
        // và comment đoạn trên}
        // progressBar.onmouseup = function (e) {
        //     const percentage = e.offsetX / progressBar.offsetWidth;
        //     const seekTime = (audio.duration * percentage);
        //     audio.currentTime = seekTime;
        // }

        // Khi next song
        // When next song
        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            cdThumbAnimate.cancel();
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        };

        // Khi prev song
        // When prev song
        prevBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        };

        // Xử lý bật / tắt random song
        // Handling on / off random song
        randomBtn.onclick = function (e) {
            _this.isRandom = !_this.isRandom;
            _this.setConfig("isRandom", _this.isRandom);
            randomBtn.classList.toggle("active", _this.isRandom);
        };

        // Xử lý lặp lại một song
        // Single-parallel repeat processing
        repeatBtn.onclick = function (e) {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig("isRepeat", _this.isRepeat);
            repeatBtn.classList.toggle("active", _this.isRepeat);
        };

        // Xử lý next song khi audio ended
        // Handle next song when audio ended
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        };

        // Lắng nghe hành vi click vào playlist
        // Listen to playlist clicks
        playlist.onclick = function (e) {
            const songNode = e.target.closest(".song:not(.active)");
            if (songNode || e.target.closest(".option")) {
                // Xử lý khi click vào song
                // Handle when clicking on the song
                if (songNode && !e.target.closest(".option")) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    cdThumbAnimate.cancel();
                    audio.play();
                }
                // Xử lý khi click vào song option
                // Handle when clicking on the song option
            }
        };

        //Xử lý âm thanh audio
        /**
         * Volume range:
         * 0: mute (x);
         * 0.01 --> 0.32: 1 vạch
         * 0.33 --> 0.65: 2 vạch
         * 0.66 --> 1: 3 vạch
         */
        audio.onvolumechange = function () {
            volumeBar.value = audio.volume;
            _this.audioVolume = audio.volume;
            _this.setConfig("audioVolume", _this.audioVolume);

            const currentVolume = Number(audio.volume.toFixed(2));
            _this.handleVolumeBar(volumeBar);
            if (volumeBar.value <= 0) {
                volumeMute.style.display = 'inline';
                volumeDown.style.display = 'none';
                volumeBtn.style.display = 'none';
            }
            if (!audio.muted && volumeBar.value > 0 && volumeBar.value <= 0.5) {
                volumeDown.style.display = 'inline';
                volumeMute.style.display = 'none';
                volumeBtn.style.display = 'none';
            }
            if (volumeBar.value > 0.5 && volumeBar.value >= 1) {
                volumeBtn.style.display = 'inline';
                volumeMute.style.display = 'none';
                volumeDown.style.display = 'none';
            }
        }
        volumeBtn.onclick = function (e) {
            audio.muted = true;
            audio.volume = 0;
        }
        volumeMute.onclick = function (e) {
            audio.muted = false;
            audio.volume = 0.5;
        }
        volumeDown.onclick = function (e) {
            audio.muted = true;
            audio.volume = 0;
        }
        volumeBar.oninput = function () {
            audio.volume = volumeBar.value;
        }
        volumeChange.onmousemove = function () {
            _this.handleVolumeBar(volumeBar);
        }
        volumeChange.onmouseover = function () {
            volumeBar.style.display = 'inline-block';
        }
        volumeChange.onmouseout = function () {
            volumeBar.style.display = 'none';
        }

        //Handles document key press (key up)
        document.onkeydown = function (keys) {
            //Khi ấn ESC: ẩn form thêm bài hát
            if (keys.which === 27 || keys.keyCode === 27) {
                form.style.display = 'none';
            }
            const isFocus = inputSongName === document.activeElement ||
                inputSingerName === document.activeElement;
            if (!isFocus) {
                //Khi ấn phím cách: dừng nếu đang phát; phát tiếp nếu đang tạm dừng.
                if (keys.which === 32 || keys.keyCode === 32) {
                    playBtn.click();
                };
                //Khi ấn phím mũi tên trái/mũi tên phải: tua về/tua tới 3s
                if (keys.which === 37 || keys.keyCode === 37) {
                    audio.currentTime -= 3;
                }
                if (keys.which === 39 || keys.keyCode === 39) {
                    audio.currentTime += 3;
                }
                //Khi ấn phím 0: phát lại từ đầu
                if (keys.which === 96 || keys.keyCode === 96) {
                    audio.currentTime = 0;
                }
                //Xử lý âm lượng bài hát:
                // up --> tăng âm lượng
                if (keys.which === 38 || keys.keyCode === 38) {
                    audio.volume + 0.1 >= 1 ? 1 : audio.volume += 0.1;
                }
                //down --> giảm âm lượng
                if (keys.which === 40 || keys.keyCode === 40) {
                    audio.volume - 0.1 <= 0 ? 0 : audio.volume -= 0.1;
                }
            }
        }
    },
    scrollToActiveSong: function () {
        $(".song.active").scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        });
    },
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    // loadConfig: function () {
    //     this.isRandom = this.config.isRandom;
    //     this.isRepeat = this.config.isRepeat;
    //     audio.volume = this.config.audioVolume;
    //     volumeBar.value = this.config.audioVolume;
    //     this.currentIndex = this.config.currentIndex;
    // },
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playRandomSong: function () {
        let newIndex;   
        if(this.playedSong.length === this.songs.length) {
            this.playedSong = [];
        }
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex || this.playedSong.includes(newIndex));

        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    start: function () {
        // Gán cấu hình từ config vào ứng dụng
        // Assign configuration from config to application
        // this.loadConfig();

        // Định nghĩa các thuộc tính cho object
        // Defines properties for the object
        this.defineProperties();

        // Lắng nghe / xử lý các sự kiện (DOM events)
        // Listening / handling events (DOM events)
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        // Load the first song information into the UI when running the app
        this.loadCurrentSong();

        // Render playlist
        this.render();

        audio.autoplay = true;

        // Hiển thị trạng thái ban đầu của button repeat & random
        // Display the initial state of the repeat & random button
        randomBtn.classList.toggle("active", this.isRandom);
        repeatBtn.classList.toggle("active", this.isRepeat);
    }
};
app.start();