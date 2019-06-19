import api from '@/tools/api'

export default{
     register(credentials){
        return  api().post('register',credentials)
    }
}