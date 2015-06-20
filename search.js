
function search(query) {
 var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+query+"&maxResults=10&key=AIzaSyBkR-hDZZn-YnmV3RBWwXJ6zLaA2yhNAqU";
  $.getJSON(url, function(json) {
    var videoId = json["items"][0]["id"]["videoId"];
    var videoUrl = "https://www.youtube.com/watch?v=" + videoId;
    console.log(videoUrl);
    return videoUrl;
  });
}