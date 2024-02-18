import { ref_reference } from "src/apis/rfplist";

export const rfpReference = async () => {
    try {

      // const res = await ref_list();
      // if (res.data.result === "success") {
      //   const rfpdumpData =res.data.rfp_list;

      const res = await ref_reference();
      if (res.data.result === "success") {
        const rfpdumpData =res.data.rfp_list;
      
      // const rfpdumpData = [
      //   { id: '1', name: 'RFP title1', upload_date: '2024.04.02', progress: true},
      //   { id: '2', name: 'RFP title2', upload_date: '2024.04.08', progress: true},
      //   // 여기에 더 많은 더미 데이터 객체 추가
      //       ];

      const rfpdump = rfpdumpData.map(rfp => ({
        no: rfp.id,
        name: rfp.file, 
        date: rfp.upload_date,
        status: rfp.progress,
        link: `http://localhost:3030/rfp`
      }));

      return rfpdump;
    }
    return [];
    } catch (error) {
      console.error('사용자 데이터를 불러오는 데 실패했습니다.', error);
      return []; // 에러 발생 시 빈 배열 반환
    }
  };