var video = document.querySelector("#player1");
let volumeSlider = document.querySelector("#slider")
let oldVolume = 0

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
	video.load()
	document.getElementById("volume").innerHTML = ''
});

document.querySelector("#play").addEventListener('click', function() {
	video.play()
	volumeSlider.value = video.volume * 100
	document.getElementById("volume").innerHTML = volumeSlider.value + "%"
})

document.querySelector("#pause").addEventListener('click', function() {
	video.pause()
})

document.querySelector("#slower").addEventListener('click', function () {
	let currentRate = video.playbackRate
	// console.log("The playback speed was: "+ currentRate)
	let updatedRate = currentRate * (0.95)
	console.log("The updated slowed down playback speed is: "+ updatedRate)
	video.playbackRate = updatedRate
})

document.querySelector("#faster").addEventListener('click', function() {
	let currentRate = video.playbackRate
	// console.log("The playback speed was: "+ currentRate)
	let updatedRate = currentRate / 0.95
	console.log("The updated sped up playback speed is: "+ updatedRate)
	video.playbackRate = updatedRate
})

document.querySelector("#skip").addEventListener('click', function() {
	let currentTimeVal = video.currentTime
	let newTimeVal = currentTimeVal + 15
	if(newTimeVal > video.duration) {
		newTimeVal = 0
	}
	console.log("The current location of the video in seconds is "+newTimeVal)
	video.currentTime = newTimeVal
})

document.querySelector("#mute").addEventListener('click', function(e) {
	if(e.target.innerHTML == "Mute") {
		e.target.innerHTML = "Unmute"
		video.muted = true
		volumeSlider.disabled = true
		// document.getElementById("volume").innerHTML = "0%"
	} else {
		e.target.innerHTML = "Mute"
		video.muted = false
		volumeSlider.disabled = false
		// document.getElementById("volume").innerHTML = volumeSlider.value + "%"
	}
})

volumeSlider.addEventListener("input", function(e) {
	video.volume = e.target.value / 100
	document.getElementById("volume").innerHTML = e.target.value + "%"
})

document.querySelector("#vintage").addEventListener('click', function() {
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener('click', function() {
	video.classList.remove("oldSchool")
})


