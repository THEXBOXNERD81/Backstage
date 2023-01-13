const body = document.querySelector("body")
const main = document.querySelector("#main")
const issues = document.querySelectorAll(".issues")
const album = document.querySelector(".title")
const artist = document.querySelector(".artist")
const song = document.querySelector('.song')
const info = document.querySelector(".info")
const playPause = document.querySelector(".play-pause")
const muteUnmute = document.querySelector(".mute-unmute")
let audio = document.querySelector(".freeAudio")

// issue

const firstP = document.querySelector(".zero")
const secondP = document.querySelector(".first")
const thirdP = document.querySelector(".second")
const fourthP = document.querySelector(".third")
const fifthP = document.querySelector(".fourth")

// Image

const songTitle = document.querySelector(".song")

// ge element rätt höjd

  let height = window.innerHeight|| document.documentElement.clientHeight||
  document.body.clientHeight;

  let width = window.innerWidth|| document.documentElement.clientWidth||
  document.body.clientWidth;

  console.log(height, width);

// vid scroll ändra translate för att få ny scroll
function scroller(e) {
  let height = window.innerHeight|| document.documentElement.clientHeight||
  document.body.clientHeight;
   let scroll = e.deltaY || 0
   // scroll down event
   if (scroll>0 && page<4) {
     page ++
   }
   // scroll up event
   else if (scroll<0 && page>0) {
     page --
   }

   main.style.transform = "translate3d(0px, " + -1 * (height = height * page) + "px" + ", 0px)"
   body.classList.remove("fp-issue" + (page-1), "fp-issue" + (page+1) )
   body.classList.add("fp-issue" + page)

   if (page===0) {
     album.innerHTML = ("Free Nationals")
     artist.innerHTML = ("Free Nationals")
     info.innerHTML = "Free Nationals is the debut album by American R&B band Free Nationals. It was released on December 13, 2019, through OBE and Empire Distribution. The album features guest appearances from Mac Miller, Kali Uchis, Daniel Caesar, Anderson .Paak, T.I., JID, and MIKNNA among others. It was nominated for Best Progressive R&B Album at the 63rd Annual Grammy Awards.[2]"
     songTitle.innerHTML = "Now Playing<br>RENE"
     audio = document.querySelector(".freeAudio")
   }

   else if (page===1) {
     album.innerHTML = ("I Am")
     artist.innerHTML = ("Earth, Wind and Fire")
     info.innerHTML = ("I Am is the ninth studio album by the American band Earth, Wind & Fire released in June 1979 on ARC/Columbia Records. The LP rose to number 1 on the Billboard Top Soul Albums chart and number 3 on the Billboard 200 chart. I Am has been certified Double Platinum in the U.S. by the RIAA, Platinum in the UK by the BPI and Platinum in Canada by Music Canada.")
     songTitle.innerHTML = "Now Playing<br>Boogie Wonderland"
     audio = document.querySelector(".twoAudio")
   }

   else if (page===2) {
     album.innerHTML = ("Random Access Memories")
     artist.innerHTML = ("Daft Punk")
     info.innerHTML = ("Random Access Memories became Daft Punk's first and only album to top the US Billboard 200, and has since been certified platinum by the Recording Industry Association of America (RIAA). It also topped the charts in twenty other countries. Its lead single 'Get Lucky' was a critical and commercial worldwide success, topping the charts in over thirty countries and becoming one of the best-selling digital singles of all time.")
     songTitle.innerHTML = "Now Playing<br>Instant Crush"
     audio = document.querySelector(".threeAudio")
    }

   else if (page===3) {
     album.innerHTML = ("Sparkle single")
     artist.innerHTML = ("Greenwood")
     info.innerHTML = ("Recorded in 1985, Greenwood sold very few copies back then. The local market just wasn't interested, and overseas sales were out of reach. In 2009, Tokyo's DJ Muro added Greenwood's 'Sparkle' to his Hawaiian Breaks mixtape. Almost overnight, Greenwood's long forgotten single became a hit — nearly 25 years later!")
     songTitle.innerHTML = "Now Playing<br>Sparkle"     
     audio = document.querySelector(".fourAudio")
    }

   else if (page===4) {
     album.innerHTML = ("Undetermined ")
     artist.innerHTML = ("TLS, JLG")
     info.innerHTML = ("Written by myself and a good friend of mine. Something that im proud of making even though its just a instrumental for now. Composed during the winter of 2022 and is yet to be released.")
     songTitle.innerHTML = "Now Playing<br>Undetermined"
     audio = document.querySelector(".fiveAudio")
   }   
  //  console.log(height)
  //  console.log(page)

}

let page = 0
function Pause() {
  // change playPause to a play icon
  playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/></svg>'
  // turn off music
  audio.pause()
}

window.addEventListener('wheel', function(e){
  play = 0
  Pause()
  scroller(e)
})

// give element right height when changed or onload

function res(page) {
  let height = window.innerHeight|| document.documentElement.clientHeight||
  document.body.clientHeight;
  let width  = window.innerWidth || document.documentElement.clientWidth ||
  document.body.clientWidth;

  main.style.height =  height + "px"
  issues.forEach(issue => {
    issue.style.height = height + "px"
    console.log(height, width)
  })
  main.style.transform = "translate3d(0px, " + -1 * (height = height * page) + "px" + ", 0px)"
  // console.log(width)
}

window.addEventListener('resize', function(e) {
  res(page)

})
window.addEventListener('load', function(e) {
  res(page)
})



let play = 0 //if play = 1 then music is playing, 0 and its paused

function resume(play) {
  if (play == 0) {
    // change playPause to a play icon
    playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/></svg>'
    // turn off music
    audio.pause()
  }
  else if (play == 1) {
    // change playPause to a pause icon
    playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/></svg>'
    // song title animation
    // turn on music
    audio.play()
  }
}


let mute = 0 // if mute is 1 then its active (aka mute) 0 means unmute

function volume(mute) {
  if (mute == 0) {
    // change muteUnmute to a volume icon
    muteUnmute.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16"><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/></svg>'
    // turn off volume
    let allAudio = document.querySelectorAll('audio')
    allAudio.forEach(function (audio) {
      audio.muted = false
    })

  }
  else if (mute == 1) {
    // change muteUnmute to a mute icon
    muteUnmute.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16"><path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/></svg>'
    // turn on volume
    let allAudio = document.querySelectorAll('audio')
    allAudio.forEach(function (audio) {
      audio.muted = true
    })
  }
}

playPause.addEventListener('click', function(e) {

 if (play === 0) {
    play = 1
    resume(play)
  }
  else if (play === 1) {
    play = 0
    resume(play)
  }
})
muteUnmute.addEventListener('click', function(e) {
 if (mute === 1) {
    mute = 0
    volume(mute)
  }
  else if (mute === 0) {
    mute = 1
    volume(mute)
  }
})



firstP.addEventListener('click', function (e) {
    page = 0
    body.className = ""
    play = 0
    Pause()
    scroller(e)
})

secondP.addEventListener('click', function (e) {
    page = 1
    body.className = ""
    play = 0
    Pause()
    scroller(e)
})

thirdP.addEventListener('click', function (e) {
    page = 2
    body.className = ""
    play = 0
    Pause()
    scroller(e)
})

fourthP.addEventListener('click', function (e) {
    page = 3
    body.className = ""
    play = 0
    Pause()
    scroller(e)
})

fifthP.addEventListener('click', function (e) {
    page = 4
    body.className = ""
    play = 0
    Pause()
    scroller(e)
})
