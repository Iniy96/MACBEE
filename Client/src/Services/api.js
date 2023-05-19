import axios from "axios"

const BASE_URL = "http://localhost:5000"

export const SendResume = async (resumeData) => {
    try {
        const {data} = await axios.post(`${BASE_URL}/SendResume`, resumeData,{headers:{"Content-Type":"multipart/form-data"}})
        return data
    } catch (error) {
        return("Error which sending from frontend...",error);
    }
}
export const SendEnquiry = async (EnquiryData) => {
    try {
        const {data} = await axios.post(`${BASE_URL}/SendEnquiry`, EnquiryData,{headers:{"Content-Type":"multipart/form-data"}})
        return data
    } catch (error) {
        return("Error which sending from frontend...",error);
    }
}