var countDownDate = new Date("Apr 12, 2024 15:37:25").getTime();


// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();

  // Find the difference between now and the count down date
  var difference = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";
  console.log(seconds)
  // If the count down is finished, write some text
  if (difference < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


export default function getCountDown () {

  return {
    days: '10',
    hours: '90',
    minutes: '10',
    seconds: '10'
  }
}