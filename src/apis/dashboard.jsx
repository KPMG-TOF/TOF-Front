import api  from './index';

export const ref_analysis = (ref_id) =>

  api.get(`/api/v1/main/analysis/${ref_id}`);

export const fileoutput = async (fileinfo) => { 
  try {
      const response = await api.post("/api/v1/upload/doc/file", fileinfo, {
        headers: {
          "Content-Type": `multipart/form-data; `, 
        },
      });
      return response;
    } catch (error) {
      console.error("fileUpload 오류:", error);
      throw error;
  }
}

export const linkoutput = async (fileinfo) => {
  try {
    const response = await api.post("api/v1/upload/doc/link", fileinfo, {
      // Additional options if needed
    });
    return response;
  } catch (error) {
    console.error("fileUpload 오류:", error);
    throw error;
  }
};


export const ref_docs = (ref_id) =>
    api.get(`/api/v1/docs/${ref_id}`);


export const upload_docs = async (fileinfo) => { 
    try {
        const response = await api.post("/api/v1/upload/doc", fileinfo, {
          headers: {
            "Content-Type": `multipart/form-data; `, // ? 이거 맞나? 파일 보내니깡.. 
          },
        });
        return response;
      } catch (error) {
        console.error("fileUpload 오류:", error);
        throw error;
    }
    
}
