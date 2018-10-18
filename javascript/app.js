$('.carousel').carousel({
    interval: 2000
  });

$("#donateButton").on("click", function(event)  {
  event.preventDefault();
  window.location.href="content/donate.html";
});

$("#donateButton2").on("click", function(event)  {
  event.preventDefault();
  window.location.href="./donate.html";
  console.log("test");
});