var colors = ["#4a5F70","#7f825f","#c2ae95","#824e4e","#66777d","#a5a283","#bf9076","#80716a","#ac9f7c"];

var quotes = [
  ["Tourists don’t know where they’ve been, travelers don’t know where they’re going.", "Paul Theroux"],
  ["Twenty years from now you will be more disappointed by the things that you didn’t do then by the ones you did do. So throw off the bowlines, sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.", "Mark Twain"],
  ["Happiness is a direction, not a place.", "Sydney J. Harris"],
  ["Like all great travelers, I have seen more than I remember, and remember more than I’ve seen.", "Benjamin Disraeli"],
  ["If you reject the food, ignore the customs, fear the religion and avoid the people, you might better stay home.", "James Michener"],
  ["Half the fun of the travel is the esthetic of lostness.", "Ray Bradbury"],
  ["No one realizes how beautiful it is to travel until he comes home and rests his head on his old, familiar pillow.", "Lin Yutang"],
  ["Certainly, travel is more than the seeing of the sights; it is a change that goes on, deep and permanent, in the ideas of living.", "Miriam Beard"],
  ["Seek out that particular mental attitude which makes you feel most deeply and vitally alive, along with which comes the inner voice which says this is the real me, and when you have found that attitude, follow it.", "William James"],
  ["Two roads diverged in a wood, and I - I took the one less traveled by, and that has made all the difference.", "Robert Frost"],
  ["The traveler sees what he sees, the tourist sees what he has come to see.", "G.K. Chesterton"],
  ["Take only memories, leave only footprints.", "Chief Seattle"],
  ["Embrace the detours.", "Kevin Charbonneau"],
  ["A journey of a thousand miles must begin with a single step.", "Lao Tzu"],
  ["The world is a book, and those who do not travel, read only a page.", "Saint Augustine"],
  ["Not all those who wander are lost.", "J.R.R.Tolkien"]
];

$(document).ready(function() {
  $("#getQuote").on("click", function() {
    var i = Math.floor((Math.random() * quotes.length) + 1);
    $(".quote").html("\"" + quotes[i][0] + "\"");
    $(".name").html("- " + quotes[i][1]);
    var new_href = "https://twitter.com/intent/tweet?hashtags=TravelQuotes&text=\"" + quotes[i][0] + "\"";
    $("#tweetButton").attr("href", new_href);
    
    var color = Math.floor((Math.random() * colors.length) + 1);
    $("body").css("background-color", colors[color]);
    $("h1").css("color", colors[color]);
    $("h2").css("color", colors[color]);
    $(".btn").css("background", colors[color]);
    $(".btn").css("color", "#fff");
  });
});