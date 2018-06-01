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
  	let retrieveSnippetData = localStorage.getItem('myFormSnippetData');
  	$('.debug').text(retrieveSnippetData);
  	let retrieveData = localStorage.getItem('myFormTextData');
  	$('.debug').text(retrieveData);
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