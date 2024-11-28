import io from "socket.io-client";
import { routes } from "../routes/routes";

const token = localStorage.getItem("token");

export const socket = io(routes.app, {
  autoConnect: false,
  extraHeaders: {
    authorization: `Bearer ${token}`,
  },
});
