const totalTimeStr = process.argv[2]
let totalTime = 0
// console.log("saniye", parseInt(process.argv[2].slice(0,process.argv[2].length-1)))
// console.log ("dakika", ((parseInt(process.argv[2].slice(0,process.argv[2].length-3)))*60))
// console.log("search", totalTimeStr.search(("(min)")))
if (totalTimeStr.search(("(min)")) < 0) {
	totalTime = parseInt(process.argv[2].slice(0,process.argv[2].length-1))
	// console.log("if")
} else {
	totalTime = ((parseInt(process.argv[2].slice(0,process.argv[2].length-3)))*60)
	// console.log("else")
}
// console.log(totalTime)
let timeRest = totalTime -1
const interVal = setInterval(function(){
	console.log(`Left: ${timeRest}s`); 
	timeRest -= 1;
	if (timeRest === 0) {clearInterval(interVal)}
}, 1000)
