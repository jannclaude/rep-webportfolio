var sendButton = document.getElementById('contact-link');

sendButton.addEventListener('click', function() {

	var newName = document.getElementById("exampleFormControlInput1").value,
		newEmail = document.getElementById("exampleFormControlInput2").value,
		newIcon = document.getElementById("floatingSelect1").value,
		newSocialName = document.getElementById("basic-addons1").value,
		newSubject = document.getElementById("floatingSelect").value,
		newMessage = document.getElementById("exampleFormControlTextarea1").value

		subject = newSubject,
		emailAddr = 'jannclaudejesus@gmail.com';

		if (!newSocialName) {
			queryString = '?subject=' + subject + ' from ' + newEmail + "&body=Hello, I'm " + newName + '. ' + newMessage
		} else {
			queryString = '?subject=' + subject + ' from ' + newEmail + "&body=Hello, I'm " + newName + '. ' + newMessage + '\n\nYou could also reach me through my ' + newIcon + " account @" + newSocialName
		}

		this.href = window.encodeURI('mailto: ' + emailAddr + queryString);

		console.log(this.href);
})

function stoppedTyping() {
	var input1 = document.getElementById("exampleFormControlInput1"),
		input2 = document.getElementById("exampleFormControlInput2"),
		input3 = document.getElementById("exampleFormControlTextarea1"),
		link = document.getElementById("contact-link")

	if (input1.value.trim() !== '' && input2.value.trim() !== '' && input3.value.trim() !== '') {
		link.classList.remove('disabled');
	} else {
		link.classList.add('disabled');
	}
}

function updateViewport() {
	const metaTag = document.querySelector('meta[name="viewport"]');
	
	if (window.matchMedia('(max-width: 992px)').matches) {
	  metaTag.setAttribute('content', 'width=device-width, initial-scale=0.8');
	} else {
	  metaTag.setAttribute('content', 'width=device-width, initial-scale=1');
	}
  }

  updateViewport();

  window.addEventListener('resize', updateViewport);