var Note = function(header, content){
  this.header = header;
  this.content = content;
}

Note.all = function(){
  var storage = window['localStorage'];
  collection = [];

  for(key in storage){
    item = JSON.parse(storage[key]);
    note = new Note(item['header'], item['content']);
    collection.push(note)
  }

  return collection;
}

$(document).ready(function(){
  $('.note').on('click', function(){
    $('.note [contenteditable=true]').removeAttr('contenteditable');
    $(this).attr('contenteditable', 'true');
  });
});
