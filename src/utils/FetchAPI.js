class FetchAPI {
    constructor(options = {}) {
        this.baseUrl = options.baseUrl || `https://api.github.com`;
    }
    getData(url) {
        return fetch(`${this.baseUrl}${url}`)
                    .then(response => response.json())
    }
}
export default FetchAPI;