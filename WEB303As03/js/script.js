//Name: Sarbjit
//Date: 2023-10-01
$(document).ready(function() {
    getDataWithGetJSON();
  });

  //This function retrieves data using getJSON method.
  function getDataWithGetJSON() {
    $.getJSON('team.json', function(data) {
      $('#team').empty();
      $.each(data.members, function(index, members) {
        var $memberDiv = $('<div class="member">');
        var $name = $('<h2>').text(members.name);
        var $position = $('<h5>').text(members.position);
        var $bio = $('<p>').text(members.bio);
        $memberDiv.append($name, $position, $bio);
        $('#team').append($memberDiv);
      });
    });
  }

  // This function retrieves data using AJAX.
  function getDataWithAjax() {
    $('#team').text('Loading...');
  
    $.ajax({
      type: 'GET',
      url: 'team.json',
      dataType: 'json',
      success: function(data) {
        $('#team').empty();
        $.each(data.members, function(index, members) {
          var $memberDiv = $('<div class="member">');
          var $name = $('<h2>').text(members.name);
          var $position = $('<h5>').text(members.position);
          var $bio = $('<p>').text(members.bio);
          $memberDiv.append($name, $position, $bio);
          $('#team').append($memberDiv);
        });
      },

      // Display an error message
      error: function() {
        $('#team').text('Error: Content could not be retrieved.');
      }
    });
  }