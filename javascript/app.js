$('.carousel').carousel({
    interval: 2000
  });

$("#donateButton").on("click", function(event)  {
  event.preventDefault();
  window.location.href="content/donate.html";
});