import { ElMessage,ElMessageBox } from "element-plus";
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
  ElMessageBox(message) {
    ElMessageBox.alert(message, '提示', {
    confirmButtonText: '确定',
  })
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
