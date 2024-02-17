export const referenceData = [
    {
      title: "클라우드 인프라 구축 사업 계획서",
      end_date: "2022.08.29",
      manager: "이수민",
      index :"1",
      link : "http://localhost:3030/rfp/1"
    },
    {
      title: "하나은행 RFP 사업 요약서",
      end_date: "2022.09.15",
      manager: "이지원",
      index :"2",
      link : "http://localhost:3030/rfp/2"
    }
  ];

export const rfpDataAll = {
  "result": "success",
 
  "info": {
    "company": "KEB 하나은행",
    "cost": "제안사 제안 가격",
    "title": "KEB 하나은행 GLN(Global Loyalty Nework) 플랫폼 구축을 위한 클라우드 서비스 제안요청서"
  },
  "summary": {
    "start_date": "2018.12",
    "end_date": "2019.3",
    "subject": [
    "안정적인 클라우드 인프라 구축",
    "클라우드 기반 전자결제 서비스 구성",
    "고가용성 및 편의성을 고려한 개발 및 운영 환경 제공"
    ],
    "requirement": [
    "국내외 네트워크망 확장 연계 고려",
    "물리적/논리적 시스템 구성에 있어 관련 국내 감독규정 준수",
    "인프라 리소스 및 로그 모니터링 진단 툴 제공",
    "교육/운영지원/기술이전 등 기업 활동 지원",
    "프로젝트 관리 및 품질보증 방안 제시",
    "리스크 관리방안 제시"
    ]

  }
  ,
  "reference": [
    {
      "rfp_id": 4,
      "title": "2022년 개방형 한국어 통합 사전 시스템 클라우드 전환",
      "end_date": "계약 후~160일",
      "manager": "박시현",
      "keyword": [
          "클라우드 전환",
          "클라우드",
          "개선"
      ],
      "similarity": 80.0
  },
      {
        "rfp_id": 3,
        "title": "24년 사이버보안 취약점 진단사업",
        "end_date": "계약일로부터 2024년 12월 20일까지",
        "manager": "백승현",
        "keyword": [
            "프로젝트 관리",
            "보안"
        ],
        "similarity": 50.0

      },

    {
      "rfp_id": 9,
      "title": "KTOA 인터넷 트래픽 정산 시스템 H/W구축",
      "end_date": "계약일로부터 6개월",
      "manager": "고서연",
      "keyword": [
          "네트워크",
          "연동"
      ],
      "similarity": 40.0
  },
  {
    "rfp_id": 10,
    "title": "연구용 서버 취약점 보안진단 솔루션 구매",
    "end_date": "계약 체결일로부터 3개월이내",
    "manager": "김병권",
    "keyword": [
        "솔루션",
        "시스템"
    ],
    "similarity": 30.0
}

  ],
  "tasks": {
      "priority": [
          {
              "order": 15,
              "title": "priority"
          },
          {
              "order": 6,
              "title": "priority"
          }
      ],
      "competivity": [
          {
              "order": 246,
              "title": "competivity"
          },
          {
              "order": 918,
              "title": "competivity"
          },
          {
              "order": 784,
              "title": "competivity"
          },
          {
              "order": 465,
              "title": "competivity"
          }
      ],
      "workforce": [
          {
              "count": 734,
              "category": "workforce"
          },
          {
              "count": 595,
              "category": "workforce"
          },
          {
              "count": 973,
              "category": "workforce"
          }
      ]
  }
}



export const priorityData = [
  { no: 1, title: "클라우드 기반 전자결제 서비스 구성" },
  { no: 2, title: "클라우드 서비스 안정성 확보" },
  { no: 3, title: "국내외 클라우드 및 전자금융 관리규정 준수" },
  { no: 4, title: "서비스 운영에 대한 기술적 지원 및 추후관리" },
  { no: 5, title: "규정 최신화에 따른 고려사항 식별 가이드 제공" },
  { no: 6, title: "보안 위협 시나리오 및 해결방법 도출" },
];

export const competitivenessData = [
  { no: 1, title: "선진화된 PI 방법론과 글로벌 Best Practice 기반의 금융컨설팅 서비스" },
  { no: 2, title: "스마트 금융혁신을 위한 Digital Transformation 전문 수행팀" },
  { no: 3, title: "리스크 및 이슈관리 기반의 독자적인 전사적 품질관리 체계" },
  { no: 4, title: "대규모 IT 시스템 도입 및 운영 컨설팅 전문 수행팀" },
  { no: 5, title: "시스템 구축 진단을 위한 독자적인 PIR 서비스"},
  { no: 6, title: "Risk & Compliance Service 전문팀"},
  { no: 7, title:"전사 기반의 개인정보 현황 파악 및 통합 관리 체계 구축 전문팀"}

];

export const workforceData = [
  { no: 1, title: "해외 개인정보 관련 법률 전문가", people: 1 },
  { no: 2, title: "ISO27001/27701, ISMS-P 등의 인증심사원 자격을 지닌 개인정보 전문가", people: 2 },
  { no: 3, title: "AWS 클라우드 아키텍처 전문가", people: 2 },
  { no: 4, title: "AWS 클라우드 보안 전문가", people: 1 },
  { no: 5, title: "금융권 인프라 구축 및 보안 프로젝트 경력자", people: 1 },
  { no: 6, title: "시스템 엔지니어", people: 1 },
];