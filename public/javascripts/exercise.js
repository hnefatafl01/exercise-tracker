// const exercise = $('#exercise');
// const  = $('#low');
// const  = $('#med');
// const  = $('#high');
// const  = $('#max');
const listItem = $('.list-group>li');

$(document).ready(()=> {
  listHover();
  selectHR();
})

function listHover() {
  listItem.hover(
  function() {
    $(this).css('background', '#0769ad')
  },
  function() {
    $(this).css('background', '#222222')
  })
}

function selectHR() {
  listItem.click(function() {
    const selected = $(this).hasClass('active')
    if(selected) {
      $(this).removeClass('active')
    } else {
      $(this).addClass('active')
    }
  })
}
