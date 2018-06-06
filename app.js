var snippets = [];
// Store values in local storage:
$(document).ready(function() {
  $('.setSnippet').on('click', function() {
    let textAreaValue = $('.textArea').val();
    let textFieldValue = $('.textField').val();
    $('debug').text(textAreaValue);
    localStorage.setItem('myFormTextData', textFieldValue);
    $('.textField').val('');
    localStorage.setItem('myFormSnippetData', textAreaValue);
    $('.textArea').val('');
    var individualSnippet= {};
    individualSnippet[textFieldValue] = textAreaValue;
    snippets.push(individualSnippet);
  });
// Retrieve previously saved snippet from local storage:
  $('.getSnippet').on('click', function() {
  	let retrieveData = localStorage.getItem('myFormTextData');
  	$('.retrievedSnippetName').text(retrieveData);
  	let retrieveSnippetData = localStorage.getItem('myFormSnippetData');
  	$('.debug').text(retrieveSnippetData);

  });
// Display all snippets:
  $('.getAllSnippets').on('click', function() {
  	snippets.forEach(function(snip) {
  	  for (var snipName in snip) {
        $('.debug').append('<div><p>' + snipName + '</p><p>' + snip[snipName] + '</p></div>');
  	  }
  	});
  });
// Search button functionality:
  $('.findButton').on('click', function() {
  	let searchInput = $('.searchField').val();
  	snippets.forEach(function(indSnip) {
  	  for (var name in indSnip) {
  	    if (name === searchInput) {
          $('.debug').replaceWith('<div class="debug"><p>' + name + '</p><p>' + indSnip[name] + '</p></div>')
  	    }
  	  }
  	});
  });
});

  // $('.setData').on('click', function() {
  //   let textFieldValue = $('.textField').val();
  //   // console.log(textFieldValue);
  //   $('debug').text(textFieldValue);
  //   localStorage.setItem('myFormTextData', textFieldValue);
  //   $('.textField').val('');
  // });
  // $('.getData').on('click', function() {
  // 	let retrieveData = localStorage.getItem('myFormTextData');
  // 	$('.debug').text(retrieveData);
  // });
  // $('.textField').on('keyup', function() {
  // 	let textFieldValue = $('.textField').val();
  // });