import string from './css.js'

let n = 1;
const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
demo.innerHTML = string.substring(0, n)
demo2.innerText = string.substring(0, n)
let time = 100
const player = {
    run: () => {
        n += 1
        if (n > string.length) {
            window.clearInterval(id)
            return
        }
        window.scrollTo(0, 9999999)
        demo.innerHTML = string.substring(0, n)
        demo2.innerText = string.substring(0, n)
        demo2.scrollTop = 999999
    },
    play: () => {
        player.pause()
        return setInterval(player.run, time)
    },
    pause: () => {
        window.clearInterval(id)
    },
    slow: () => {
        player.pause()
        time = 300
        id = player.play()
    },
    normal: () => {
        player.pause()
        time = 100
        id = player.play()
    },
    fast: () => {
        player.pause()
        time = 0
        id = player.play()
    },
}


let id = player.play()

document.querySelector('#btnPause').onclick = () => {
    player.pause()
}
document.querySelector('#btnPlay').onclick = () => {
    id = player.play()
}
document.querySelector('#btnSlow').onclick = player.slow
document.querySelector('#btnNormal').onclick = player.normal
document.querySelector('#btnFast').onclick = player.fast