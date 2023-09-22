const mockData = [
  {
    id: "6509c54e0909d275733b3c04",
    cabinNo: 87,
    age: 23,
    eyeColor: "blue",
    firstName: "Maria",
    lastName: "George",
    gender: "female",
    contact: "+1 (855) 550-2255",
    navigatorId:"test1",  navigator: "Vinay Desai",
    mhProvider: ["Lorem"],
    sudProvider: ["enim"],
    need: ["exercitation", "consectetur"],
    caseManagement: "nostrud",
  },
  {
    id: "6509c54e315e671ebe94a8b0",
    cabinNo: 35,
    age: 25,
    eyeColor: "blue",
    firstName: "Darla",
    lastName: "Prince",
    gender: "female",
    contact: "+1 (854) 580-3085",
    navigatorId:"dummy",
    navigator: "Misty Hayes",
    mhProvider: ["qui"],
    sudProvider: ["id"],
    need: ["eiusmod", "excepteur"],
    caseManagement: "id",
  },
  {
    id: "6509c54e28afa959ef4c3458",
    cabinNo: 11,
    age: 32,
    eyeColor: "green",
    firstName: "Dejesus",
    lastName: "Salazar",
    gender: "male",
    contact: "+1 (920) 405-3380",
    navigatorId:"",
    navigator: "",
    mhProvider: ["non"],
    sudProvider: ["et"],
    need: ["ipsum", "aute"],
    caseManagement: "consequat",
  },
  {
    id: "6509c54ecc2fd7e8426b4089",
    cabinNo: 97,
    age: 33,
    eyeColor: "brown",
    firstName: "Meyers",
    lastName: "King",
    gender: "male",
    contact: "+1 (993) 514-3201",
    navigatorId:"dummy",
    navigator: "Mcdowell Page",
    mhProvider: ["sit"],
    sudProvider: ["id"],
    need: ["ullamco", "reprehenderit"],
    caseManagement: "aliquip",
  },
  {
    id: "6509c54eb30469886157e648",
    cabinNo: 5,
    age: 39,
    eyeColor: "blue",
    firstName: "Delgado",
    lastName: "Sandoval",
    gender: "male",
    contact: "+1 (940) 523-2400",
    navigatorId:"",
    navigator: "",
    mhProvider: ["non"],
    sudProvider: ["laboris"],
    need: ["eu", "non"],
    caseManagement: "ipsum",
  },
  {
    id: "6509c54e5edee13f9f047a1a",
    cabinNo: 84,
    age: 37,
    eyeColor: "blue",
    firstName: "Mcleod",
    lastName: "Bird",
    gender: "male",
    contact: "+1 (838) 516-3681",
    navigatorId:"dummy",
    navigator: "Mcdowell Page",
    mhProvider: ["nostrud"],
    sudProvider: ["ex"],
    need: ["ea", "laborum"],
    caseManagement: "amet",
  },
  {
    id: "6509c54ecff7b96bb9a77c16",
    cabinNo: 36,
    age: 22,
    eyeColor: "brown",
    firstName: "Patrice",
    lastName: "Kinney",
    gender: "female",
    contact: "+1 (876) 410-3355",
    navigatorId:"test1",  navigator: "Vinay Desai",
    mhProvider: ["veniam"],
    sudProvider: ["anim"],
    need: ["ad", "ad"],
    caseManagement: "sit",
  },
  {
    id: "6509c54e58cf0a58d2d3a125",
    cabinNo: 95,
    age: 32,
    eyeColor: "brown",
    firstName: "Dunn",
    lastName: "Clarke",
    gender: "male",
    contact: "+1 (840) 557-2944",
    navigatorId:"dummy",
    navigator: "Mcdowell Page",
    mhProvider: ["consequat"],
    sudProvider: ["cupidatat"],
    need: ["ut", "do"],
    caseManagement: "reprehenderit",
  },
  {
    id: "6509c54ea7d3c76db7d9ff1e",
    cabinNo: 80,
    age: 30,
    eyeColor: "green",
    firstName: "Marion",
    lastName: "Terrell",
    gender: "female",
    contact: "+1 (943) 416-2734",
    navigatorId:"test1",  navigator: "Vinay Desai",
    mhProvider: ["anim"],
    sudProvider: ["nisi"],
    need: ["ex", "aliqua"],
    caseManagement: "ex",
  },
];

const mockRequestData = [
  {
    id: "6509c54e0909d275733b3c04",
    cabinNo: 87,
    age: 23,
    eyeColor: "blue",
    firstName: "Maria",
    lastName: "George",
    gender: "female",
    contact: "+1 (855) 550-2255",
    navigatorId:"test1",  navigator: "Vinay Desai",
    mhProvider: ["Lorem"],
    sudProvider: ["enim"],
    need: ["exercitation", "consectetur"],
    caseManagement: "nostrud",
    approvalStatus: "PENDING"
  },
  {
    id: "6509c54e315e671ebe94a8b0",
    cabinNo: 35,
    age: 25,
    eyeColor: "blue",
    firstName: "Darla",
    lastName: "Prince",
    gender: "female",
    contact: "+1 (854) 580-3085",
    navigatorId:"dummy",
    navigator: "Misty Hayes",
    mhProvider: ["qui"],
    sudProvider: ["id"],
    need: ["eiusmod", "excepteur"],
    caseManagement: "id",
    approvalStatus: "PENDING"
  },
  {
    id: "6509c54e28afa959ef4c3458",
    cabinNo: 11,
    age: 32,
    eyeColor: "green",
    firstName: "Dejesus",
    lastName: "Salazar",
    gender: "male",
    contact: "+1 (920) 405-3380",
    navigatorId:"",
    navigator: "",
    mhProvider: ["non"],
    sudProvider: ["et"],
    need: ["ipsum", "aute"],
    caseManagement: "consequat",
    remark :"Needs detox",
    approvalStatus: "PENDING"
  },
  {
    id: "6509c54ecc2fd7e8426b4089",
    cabinNo: 97,
    age: 33,
    eyeColor: "brown",
    firstName: "Meyers",
    lastName: "King",
    gender: "male",
    contact: "+1 (993) 514-3201",
    navigatorId:"dummy",
    navigator: "Mcdowell Page",
    mhProvider: ["sit"],
    sudProvider: ["id"],
    need: ["ullamco", "reprehenderit"],
    caseManagement: "aliquip",
    approvalStatus: "PENDING"
  },
  {
    id: "6509c54eb30469886157e648",
    cabinNo: 5,
    age: 39,
    eyeColor: "blue",
    firstName: "Delgado",
    lastName: "Sandoval",
    gender: "male",
    contact: "+1 (940) 523-2400",
    navigatorId:"",
    navigator: "",
    mhProvider: ["non"],
    sudProvider: ["laboris"],
    need: ["eu", "non"],
    caseManagement: "ipsum",
    approvalStatus: "PENDING"
  },
  {
    id: "6509c54e5edee13f9f047a1a",
    cabinNo: 84,
    age: 37,
    eyeColor: "blue",
    firstName: "Mcleod",
    lastName: "Bird",
    gender: "male",
    contact: "+1 (838) 516-3681",
    navigatorId:"dummy",
    navigator: "Mcdowell Page",
    mhProvider: ["nostrud"],
    sudProvider: ["ex"],
    need: ["ea", "laborum"],
    caseManagement: "amet",
    approvalStatus: "PENDING"
  },
  {
    id: "6509c54ecff7b96bb9a77c16",
    cabinNo: 36,
    age: 22,
    eyeColor: "brown",
    firstName: "Patrice",
    lastName: "Kinney",
    gender: "female",
    contact: "+1 (876) 410-3355",
    navigatorId:"test1",  navigator: "Vinay Desai",
    mhProvider: ["veniam"],
    sudProvider: ["anim"],
    need: ["ad", "ad"],
    caseManagement: "sit",
    approvalStatus: "REJECTED"
  },
  {
    id: "6509c54e58cf0a58d2d3a125",
    cabinNo: 95,
    age: 32,
    eyeColor: "brown",
    firstName: "Dunn",
    lastName: "Clarke",
    gender: "male",
    contact: "+1 (840) 557-2944",
    navigatorId:"dummy",
    navigator: "Mcdowell Page",
    mhProvider: ["consequat"],
    sudProvider: ["cupidatat"],
    need: ["ut", "do"],
    caseManagement: "reprehenderit",
    approvalStatus: "REJECTED"
  },
  {
    id: "6509c54ea7d3c76db7d9ff1e",
    cabinNo: 80,
    age: 30,
    eyeColor: "green",
    firstName: "Marion",
    lastName: "Terrell",
    gender: "female",
    contact: "+1 (943) 416-2734",
    navigatorId:"test1",  navigator: "Vinay Desai",
    mhProvider: ["anim"],
    sudProvider: ["nisi"],
    need: ["ex", "aliqua"],
    caseManagement: "ex",
    approvalStatus: "REJECTED"
  },
];


// Simulate an API request and response delay
const simulateApiRequest = (data: any[]):Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000); // Adjust the delay as needed (e.g., 1000ms for a 1-second delay)
  });
};

export const getInitialData = () => {
  return simulateApiRequest(mockData);
};

export const getCaseWorkerBeneficiaries = () => {
  return simulateApiRequest(mockData)
}

export const getRequestsForCaseWorker = () => {
  return simulateApiRequest(mockRequestData)
}

export const updateApprovalStatus = (userId: string, status: string) => {
  const user = mockRequestData.find(row => row.id === userId);
  if(user){
    user.approvalStatus = status;
  }
}

export const assignToBeneficiary = (beneficiaryId: string, userId?: string, userName?: string) => {
 return new Promise((resolve) => {
  const beneficiary = mockData.find(row => row.id === beneficiaryId);
  if(beneficiary && userId && userName) {
    beneficiary.navigator = userName
    beneficiary.navigatorId = userId
  }
  resolve(null)
 })
}
