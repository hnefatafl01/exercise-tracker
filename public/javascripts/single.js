$(document).ready(function() {
  var parsed = window.location.search.split('=');
  var id = parsed[1];
  console.log(parsed);
  $.get(`http://localhost:3000/session/${id}`, function(result){
    console.log(result);
    $('#session').append(`<div class="well"><a href="/single.html?id=${sessions.id}"><div>${sessions.date}</div>
                                <div>${sessions.exercise}</div>
                                <div>${sessions.HR_zone}</div>
                                <div>${sessions.duration}</div>
                                <div>${sessions.distance}</div>
                              </div></a>`)
  })
})
