const $listItem = $('.list-group>li');
const $exercise = $('#exercise');
const $duration = $('#duration');
const $distance = $('#distance');
const apiUrl = 'http://localhost:3000/session'

$(document).ready(()=> {
  listHover();
  selectHR();
  submitInput();
})

function listHover() {
  $listItem.hover(
  function() {
    $(this).css('background', '#0769ad')
  },
  function() {
    $(this).css('background', '#222222')
  })
}

function selectHR() {
  $listItem.click(function() {
    const selected = $(this).hasClass('active')
    if(selected) {
      $(this).removeClass('active')
    } else {
      $(this).addClass('active')
    }
  })
}

function submitInput() {
  $('#submit').click(function(event) {
    var exerciseSession = {
      date: new Date(),
      exercise: $exercise.val(),
      duration: $duration.val(),
      distance: $duration.val(),
      HR_zone: function(){
        if ($listItem.hasClass('active')) {
          return $('.list-group .active').html();
        }
      }()
    }
    $.ajax({
		    type: 'POST',
		    dataType: 'json',
		    url: `${apiUrl}`,
		    data: exerciseSession
		})
  })
}
