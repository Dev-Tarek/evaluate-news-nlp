const request = require('request');

const appendQueryParams = (url, params) => {
    if(Object.keys(params).length){
        let urlLastChar = url.slice(0, -1);
        if(urlLastChar !== '?')
            url += '?'
        for(let param in params)
            url += `${param}=${params[param]}&`
        url = url.slice(0, -1);
    }
    return url;
}

const meaningCloudApiPost = async (params = {}) => {
    let endpoint = 'https://api.meaningcloud.com/sentiment-2.1';
    endpoint = appendQueryParams(endpoint, params);
    return new Promise(resolve => {
        request(
            endpoint, 
            { method: 'POST', redirect: 'follow' },
            function(error, response){
                if(!error)
                    resolve(response.body);
            }
        )
    });
}

module.exports = {
    post: meaningCloudApiPost
}
