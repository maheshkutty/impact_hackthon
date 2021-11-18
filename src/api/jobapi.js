import axios from "axios";

const jobapi = axios.create({
    baseURL: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json",
})

export default jobapi;