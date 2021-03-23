import { checkUrl } from './urlValidation' ;
import { toggleLoading } from './toggleLoading';

const handleSubmit = event => {
    event.preventDefault()

    toggleLoading(true);

    let url = document.getElementById('url').value;
    let urlValid = checkUrl(url);
    let resultSection = document.getElementById('results');

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
            resultSection.innerHTML =
                `<h6>
                    <span onclick="return Client.clearResults()" class="close">[X]</span>
                    Results for [${url}]:
                </h6>
                <ul>
                    <li>
                        <span>Agreement</span>
                        <span>${data.agreement}</span>
                    </li>
                    <li>
                        <span>Confidence</span>
                        <span>${data.confidence}</span>
                    </li>
                    <li>
                        <span>Irony</span>
                        <span>${data.irony}</span>
                    </li>
                    <li>
                        <span>Score</span>
                        <span>${data.score_tag}</span>
                    </li>
                    <li>
                        <span>Subjectivity</span>
                        <span>${data.subjectivity}</span>
                    </li>
                </ul>`
                toggleLoading(false);
        })
        .catch(error => {
            console.log(error);
            toggleLoading(false);
            resultSection.innerHTML = "Unknown server error";
        });
        
        return 0;
    }
    else{
        resultSection.innerHTML = "Invalid URL!";
        toggleLoading(false);
        return 1;
    }
}

const clearResults = event => {
    let resultSection = document.getElementById('results');
    document.getElementById('url').value = '';
    resultSection.innerHTML = "";
}

export { handleSubmit, clearResults }
