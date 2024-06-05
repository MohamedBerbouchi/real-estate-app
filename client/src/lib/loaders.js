import axios from "axios";
import axiosClient from "./axiosClient";

export const ListPageLoader = async ({request, params}) => {
    console.log(request.url);
    const query = request.url.split('?')[1]
    // const url = new URL(request.url)
    // console.log(url.search)

    const  res = await axiosClient.get('/posts?'+query)
    console.log(res)
    return {
      data:   res.data,
    };
  };