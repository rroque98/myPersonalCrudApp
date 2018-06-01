$(document).ready(function() {
  $('.setData').on('click', function() {
    let textFieldValue = $('.textField').val();
    // console.log(textFieldValue);
    $('debug').text(textFieldValue);
    localStorage.setItem('myFormTextData', textFieldValue);
    $('.textField').val('');
  });
  $('.getData').on('click', function() {
  	let retrieveData = localStorage.getItem('myFormTextData');
  	$('.debug').text(retrieveData);
  });
  // $('.textField').on('keyup', function() {
  // 	let textFieldValue = $('.textField').val();
  // });

  $('.setSnippet').on('click', function() {
    let textAreaValue = $('.textArea').val();
    // console.log(textFieldValue);
    $('debug').text(textAreaValue);
    localStorage.setItem('myFormSnippetData', textAreaValue);
    $('.textArea').val('');
  });
  $('.getSnippet').on('click', function() {
  	let retrieveSnippetData = localStorage.getItem('myFormSnippetData');
  	$('.debug').text(retrieveSnippetData);
  });
});