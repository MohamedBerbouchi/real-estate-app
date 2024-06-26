import axios from "axios";
import axiosClient from "./axiosClient";

export const ListPageLoader = async ({ request, params }) => {
  console.log(request.url);
  const query = request.url.split("?")[1];
  // const url = new URL(request.url)
  // console.log(url.search)
  try {
    const res = axiosClient.get("/posts?" + query);
    // console.log(res.data)
    return {
      ok: true,
      postResolve: res,
    };
  } catch (err) {
    return {
      ok: false,
      data: [],
    };
  }
};
export const SinglePageLoader = async ({ request, params }) => {
  const id = params.id;
  try {
    const res = await axiosClient.get("/posts/" + id);
    console.log(res);

    return {
      ok: true,
      data: res.data,
    };
  } catch (err) {
    console.log(err);
    return {
      ok: false,
      data: [],
    };
  }
};
export const ProfilePageLoader = async ({ request, params }) => {
  try {
    const res = await axiosClient.get("/users/profilePosts");
    const chatRes = await axiosClient.get("/chats");
    console.log(chatRes);
    return {
      ok: true,
      postsData: res.data,
      chatsData: chatRes.data,
    };
  } catch (err) {
    console.log(err);
    return {
      ok: false,
      postsData: [],
      chatsData: [],
    };
  }
};
