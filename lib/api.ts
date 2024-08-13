import axios from "axios"

const api = axios.create({
    baseURL: "https://app.koyeb.com"
})

api.interceptors.request.use(
    function(config){
        const token = process.env.KOYEB_API_TOKEN

        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    function(error){
        return Promise.reject(error)
    }
)

export default api