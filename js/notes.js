var Note = function(header, content){
  this.header = header;
  this.content = content;
}

$(document).ready(function(){
  $('.note').on('click', function(){
    $('.note [contenteditable=true]').removeAttr('contenteditable');
    $(this).attr('contenteditable', 'true');
  });
});
