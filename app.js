var snippets = [];

$(document).ready(function() {
  $('.setSnippet').on('click', function() {
    let textAreaValue = $('.textArea').val();
    let textFieldValue = $('.textField').val();
    // console.log(textFieldValue);
    $('debug').text(textAreaValue);
    localStorage.setItem('myFormTextData', textFieldValue);
    $('.textField').val('');
    localStorage.setItem('myFormSnippetData', textAreaValue);
    $('.textArea').val('');
    var individualSnippet= {};
    individualSnippet[textFieldValue] = textAreaValue;
    snippets.push(individualSnippet);
  });
  $('.getSnippet').on('click', function() {
  	let retrieveData = localStorage.getItem('myFormTextData');
  	$('.retrievedSnippetName').text(retrieveData);
  	let retrieveSnippetData = localStorage.getItem('myFormSnippetData');
  	$('.debug').text(retrieveSnippetData);

  });

  $('.getAllSnippets').on('click', function() {
  	snippets.forEach(function(snip) {
  	  // snip.forEach(function(snipCode) {
  	  for (var snipName in snip) {
  	  	console.log(snipName)
        //append
        $('.debug').append('<div><p>' + snipName + '</p><p>' + snip[snipName] + '</p></div>');
        // $('.debug').append(snipName);
        // $('.debug').append(snip[snipName]);
  	  }
  	});
  	// when get all snippets is clicked
  	// for each snippet in snippets array
  	  // append the name and snippet to debug
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