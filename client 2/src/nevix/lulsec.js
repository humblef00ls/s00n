import api from '@/nevix/api.js'

export default  {
    register (credentials){
        return api().post('register', credentials)
    }
}
