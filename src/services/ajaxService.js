import Axios from "axios";

const CLASS_NAME = "[Ajaxservice] ";

const AjaxService = {
  // post request 傳參數
  post(url, param, successCallBack, failCallBack) {
    Axios.post(url, param, {})
      .then((resp) => {
        if (resp) {
          successCallBack(resp.data);
          console.log(CLASS_NAME + "post success!");
        }
      })
      .catch((resp) => {
        console.log(CLASS_NAME + "post error!");
        console.log(resp);
        failCallBack(resp);
      });
  },
  // get request
  get(url, successCallBack, failCallBack) {
    Axios.get(url, {}, {})
      .then((resp) => {
        if (resp) {
          successCallBack(resp.data);
          console.log(CLASS_NAME + "get success!");
        }
      })
      .catch((resp) => {
        console.log(CLASS_NAME + "get error!");
        console.log(resp);
        failCallBack(resp);
      });
  },
};
export default AjaxService;
