import { ElMessage } from "element-plus";
import http from "./http";

const util = {
  ElMessage(type, message) {
    if (type == 0) {
      ElMessage(message);
    } else if (type == 1) {
      ElMessage({ message, type, plain: true });
    } else if (type == 2) {
      ElMessage({ message, type, plain: true });
    } else {
      ElMessage.error(message);
    }
  },
  http({url, data}) {
    return http({
      url,
      method: "post",
      data,
    });
  },
};

export default util;
