import FetchAPI from './FetchAPI';

class FetchUsers extends FetchAPI {
    getUserList(perPage = 10, since = 0) {
        return this.getData(`/users?since=${since}&per_page=${perPage}`)
    }
    getUserInfo(userName) {
        return this.getData(`/users/${userName}`)
    }
}

export default FetchUsers;