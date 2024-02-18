import api  from './index';

export const ref_list = async () => {// rfp 조회
    try {
        const response = api.get(`/api/v1/rfp/list`);
        return response;
    } catch (error) {
        console.error("getDiagramData 오류:", error);
        throw error;
    }
}

export const ref_reference = async () => {// rfp 조회
  try {
      const response = api.get(`/api/v1/rfp/reference`);
      return response;
  } catch (error) {
      console.error("getDiagramData 오류:", error);
      throw error;
  }
}
    
export const ref_update_progress = async (rfp_id) => { // rfp 진행상황 삭제
    try {
    const response = api.get(`/api/v1/rfp/update/progress/${rfp_id}`);
    return response;
    } catch (error) {
        console.error("getDiagramData 오류:", error);
        throw error;
    }
}

export const ref_delete_progress = async (rfp_id) => { // rfp 진행상황 삭제
    try {
    const response = api.get(`/api/v1/rfp/delete/${rfp_id}`, );
    return response;
    } catch (error) {
        console.error("getDiagramData 오류:", error);
        throw error;
    }
}

export const ref_file_upload = async (file) => { // rfp 파일 업로드
    try {
      const response = await api.post(`/api/v1/upload/rfp`, file, {
        headers: {
          "Content-Type": `multipart/form-data; `,
        },
      });
      return response;
    } catch (error) {
      console.error("fileUpload 오류:", error);
      throw error;
    }
  };