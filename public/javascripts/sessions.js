$(document).ready(function() {
  $.get('http://localhost:3000/session', function(sessions) {
    sessions.forEach(function(sessions){
      $('#session-log').append(`<div class="well"><a href="/single.html?id=${sessions.id}"><div>${sessions.date}</div>
                                  <div>${sessions.exercise}</div>
                                  <div>${sessions.HR_zone}</div>
                                  <div>${sessions.duration}</div>
                                  <div>${sessions.distance}</div>
                                </div></a>`)
    })
  })
})
