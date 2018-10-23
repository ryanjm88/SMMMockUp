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

$("#donateNow").on("click", function(event) {
  event.preventDefault();
  window.location.href="https://www.paypal.com/donate/?token=HnvFCNh4fZmRv5PuIng4gp_Gids10UbcRrL1KC2PEcgMRGAMcSt_gjckiBeEvLZ_QUncKG&country.x=US&locale.x=";
  window.open(url, '_blank');
});