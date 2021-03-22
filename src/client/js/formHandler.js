function handleSubmit(event) {
    event.preventDefault()

    let urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    let url = document.getElementById('url').value;
    let urlValid = urlRegex.test(url);
    
    if(urlValid){
        fetch('http://localhost:8081/analyize',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    url: url,
                })
            }
        )
        .then(response => response.json())
        .then(data => {
            console.log('agreement', data.agreement)
            console.log('confidence:', data.confidence)
            console.log('irony', data.irony)
            console.log('score_tag', data.score_tag)
            console.log('subjectivity:', data.subjectivity)
        });
    }
    else{
        console.log("Invalid URL")
    }
}

export { handleSubmit }
