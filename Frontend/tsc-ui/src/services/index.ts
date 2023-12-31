import axios from "axios";
import { UserType } from "../types/login";

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
    navigatorId: "test1",
    navigator: "Tom Brady",
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
    navigatorId: "dummy",
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
    navigatorId: "",
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
    navigatorId: "dummy",
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
    navigatorId: "",
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
    navigatorId: "dummy",
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
    navigatorId: "test1",
    navigator: "Tom Brady",
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
    navigatorId: "dummy",
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
    navigatorId: "test1",
    navigator: "Tom Brady",
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
    navigatorId: "test1",
    navigator: "Tom Brady",
    mhProvider: ["Lorem"],
    sudProvider: ["enim"],
    need: ["exercitation", "consectetur"],
    caseManagement: "nostrud",
    approvalStatus: "PENDING",
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
    navigatorId: "dummy",
    navigator: "Misty Hayes",
    mhProvider: ["qui"],
    sudProvider: ["id"],
    need: ["eiusmod", "excepteur"],
    caseManagement: "id",
    approvalStatus: "PENDING",
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
    navigatorId: "",
    navigator: "",
    mhProvider: ["non"],
    sudProvider: ["et"],
    need: ["ipsum", "aute"],
    caseManagement: "consequat",
    remark: "Needs detox",
    approvalStatus: "PENDING",
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
    navigatorId: "dummy",
    navigator: "Mcdowell Page",
    mhProvider: ["sit"],
    sudProvider: ["id"],
    need: ["ullamco", "reprehenderit"],
    caseManagement: "aliquip",
    approvalStatus: "PENDING",
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
    navigatorId: "",
    navigator: "",
    mhProvider: ["non"],
    sudProvider: ["laboris"],
    need: ["eu", "non"],
    caseManagement: "ipsum",
    approvalStatus: "PENDING",
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
    navigatorId: "dummy",
    navigator: "Mcdowell Page",
    mhProvider: ["nostrud"],
    sudProvider: ["ex"],
    need: ["ea", "laborum"],
    caseManagement: "amet",
    approvalStatus: "PENDING",
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
    navigatorId: "test1",
    navigator: "Tom Brady",
    mhProvider: ["veniam"],
    sudProvider: ["anim"],
    need: ["ad", "ad"],
    caseManagement: "sit",
    approvalStatus: "REJECTED",
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
    navigatorId: "dummy",
    navigator: "Mcdowell Page",
    mhProvider: ["consequat"],
    sudProvider: ["cupidatat"],
    need: ["ut", "do"],
    caseManagement: "reprehenderit",
    approvalStatus: "REJECTED",
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
    navigatorId: "test1",
    navigator: "Tom Brady",
    mhProvider: ["anim"],
    sudProvider: ["nisi"],
    need: ["ex", "aliqua"],
    caseManagement: "ex",
    approvalStatus: "REJECTED",
  },
];

const mockServiceData = [
  {
    activityLog: [
      {
        timeStamp: "2019-06-02T01:06:46 -06:-30",
        comment: "Kelsey Benjamin",
      },
      {
        timeStamp: "2022-07-12T08:31:41 -06:-30",
        comment: "Cole Curry",
      },
      {
        timeStamp: "2021-11-05T05:59:12 -06:-30",
        comment: "Sofia Adams",
      },
    ],
    serviceID: "650d660242ba3d1c788a7ed3",
    beneficiaryID: "650d6602dd0e89b02ba81208",

    navigatorID: 26,
    serviceName: "BLUEGRAIN",
    caseWorkerID: 30,
    organizationName: "BEZAL",
    consent: [
      "ut",
      "consectetur",
      "reprehenderit",
      "excepteur",
      "occaecat",
      "deserunt",
      "irure",
    ],
    status: "Pending",
    supportingDocs: [
      "esse",
      "officia",
      "officia",
      "quis",
      "excepteur",
      "ut",
      "proident",
    ],
    goal: "Ipsum et dolor",
  },
  {
    serviceID: "650d6602a93e296487f3dd91",
    beneficiaryID: "650d6602b38281783cb6f6d9",
    caseWorkerID: 32,
    navigatorID: 37,
    activityLog: [
      {
        timeStamp: "2016-04-02T05:54:47 -06:-30",
        comment: "Swanson Johnston",
      },
      {
        timeStamp: "2014-10-12T05:44:39 -06:-30",
        comment: "Gwendolyn Weber",
      },
      {
        timeStamp: "2016-07-16T01:43:03 -06:-30",
        comment: "Paulette Flores",
      },
    ],
    serviceName: "LETPRO",
    organizationName: "EMERGENT",
    consent: ["Lorem", "non", "sit", "eu", "exercitation", "id", "sit"],
    status: "Pending",
    supportingDocs: [
      "nulla",
      "irure",
      "consectetur",
      "officia",
      "ut",
      "veniam",
      "anim",
    ],
    goal: "Velit labore sunt",
  },
  {
    serviceID: "650d660283d3ed251edc5ba5",
    beneficiaryID: "650d6602175c5c7e549c124e",
    caseWorkerID: 31,
    navigatorID: 34,
    activityLog: [
      {
        timeStamp: "2021-04-17T07:56:14 -06:-30",
        comment: "Hendricks Palmer",
      },
      {
        timeStamp: "2019-11-22T04:16:13 -06:-30",
        comment: "Lakeisha Sims",
      },
      {
        timeStamp: "2022-02-01T01:28:19 -06:-30",
        comment: "Erica Nash",
      },
    ],
    serviceName: "FLUM",
    organizationName: "MOMENTIA",
    consent: [
      "excepteur",
      "ad",
      "nisi",
      "ea",
      "sit",
      "exercitation",
      "incididunt",
    ],
    status: "Pending",
    supportingDocs: [
      "consequat",
      "dolor",
      "cupidatat",
      "eu",
      "ipsum",
      "Lorem",
      "aliqua",
    ],
    goal: "Sit ipsum incididunt",
  },
  {
    serviceID: "650d66028c281077ccc27477",
    beneficiaryID: "650d660271acffb5c36fcd14",
    caseWorkerID: 28,
    navigatorID: 36,
    activityLog: [
      {
        timeStamp: "2018-11-30T12:29:23 -06:-30",
        comment: "Barbra Richard",
      },
      {
        timeStamp: "2017-05-10T08:45:21 -06:-30",
        comment: "Josefa Miller",
      },
      {
        timeStamp: "2019-06-08T08:37:52 -06:-30",
        comment: "Sanford Pace",
      },
    ],
    serviceName: "KONGLE",
    organizationName: "EXOSTREAM",
    consent: [
      "exercitation",
      "enim",
      "in",
      "anim",
      "deserunt",
      "consectetur",
      "cupidatat",
    ],
    status: "Pending",
    supportingDocs: [
      "sint",
      "proident",
      "voluptate",
      "nostrud",
      "non",
      "officia",
      "dolor",
    ],
    goal: "Incididunt commodo nulla",
  },
  {
    serviceID: "650d66022fd670f6907892d8",
    beneficiaryID: "650d6602fcf2067d90688e3e",
    caseWorkerID: 34,
    navigatorID: 32,
    activityLog: [
      {
        timeStamp: "2014-02-11T05:37:32 -06:-30",
        comment: "Lea Montgomery",
      },
      {
        timeStamp: "2016-09-26T06:28:15 -06:-30",
        comment: "Booker Randall",
      },
      {
        timeStamp: "2019-08-20T09:18:50 -06:-30",
        comment: "Clarke Dorsey",
      },
    ],
    serviceName: "ZIZZLE",
    organizationName: "RENOVIZE",
    consent: ["in", "laboris", "aliqua", "non", "elit", "sit", "fugiat"],
    status: "Pending",
    supportingDocs: [
      "non",
      "ex",
      "excepteur",
      "occaecat",
      "consequat",
      "ut",
      "proident",
    ],
    goal: "Esse eu quis",
  },
  {
    serviceID: "650d6602e7b14683e81f5104",
    beneficiaryID: "650d660211907d63613fec03",
    caseWorkerID: 37,
    navigatorID: 39,
    activityLog: [
      {
        timeStamp: "2021-07-04T11:04:28 -06:-30",
        comment: "Barton Robinson",
      },
      {
        timeStamp: "2017-01-29T06:25:31 -06:-30",
        comment: "Mcgowan Cantrell",
      },
      {
        timeStamp: "2018-09-10T05:51:15 -06:-30",
        comment: "Krystal Hubbard",
      },
    ],
    serviceName: "DIGIGENE",
    organizationName: "AQUASURE",
    consent: ["nostrud", "ex", "consequat", "nostrud", "do", "do", "nulla"],
    status: "Pending",
    supportingDocs: [
      "velit",
      "labore",
      "deserunt",
      "dolore",
      "proident",
      "dolore",
      "cupidatat",
    ],
    goal: "Et ut ipsum",
  },
  {
    serviceID: "650d6602a3a5ef49e5025afd",
    beneficiaryID: "650d660278dd14b6e4045a79",
    caseWorkerID: 33,
    navigatorID: 30,
    activityLog: [
      {
        timeStamp: "2021-09-09T09:17:24 -06:-30",
        comment: "Bridget Barron",
      },
      {
        timeStamp: "2019-04-11T04:16:29 -06:-30",
        comment: "Ford Hancock",
      },
      {
        timeStamp: "2020-06-29T04:14:54 -06:-30",
        comment: "Huff Calderon",
      },
    ],
    serviceName: "ORGANICA",
    organizationName: "SCENTRIC",
    consent: [
      "reprehenderit",
      "enim",
      "magna",
      "esse",
      "consequat",
      "in",
      "anim",
    ],
    status: "Pending",
    supportingDocs: [
      "laborum",
      "irure",
      "laboris",
      "nisi",
      "sint",
      "minim",
      "pariatur",
    ],
    goal: "Esse velit consequat",
  },
];

const scheduledTaks = [
  {
    id: "650c7af5de434511c5622ad9",
    beneficiaryId: "650c7af5ea6ee8d6ddc93460",
    beneficiaryName: "Tom Brady",
    navigatorId: "650c7af5ccabf664089dc4cc",
    startTime: new Date(2023, 9, 22, 10, 7).getTime(),
    endTime: new Date(2023, 9, 28, 10, 7).getTime(),
    description: "Bank account creation",
  },
  {
    id: "650c7af58b35fed0c5d7d9ff",
    beneficiaryId: "650c7af5e3761f0eb2baf1d1",
    navigatorId: "650c7af5962012ff903bebf2",
    beneficiaryName: "Tom Brady",
    startTime: new Date(2023, 10, 2, 10, 7).getTime(),
    endTime: new Date(2023, 10, 8, 10, 7).getTime(),
    description: "Hospital checkup",
  },
  {
    id: "650c7af5ea29c101e0544cf6",
    beneficiaryId: "650c7af5c693428ddfbfd10c",
    navigatorId: "650c7af5b89cf07674e30d4c",
    beneficiaryName: "Tom Brady",
    startTime: new Date(2023, 9, 22, 20, 7).getTime(),
    endTime: new Date(2023, 9, 28, 10, 7).getTime(),
    description: "Mental checkup 1",
  },
  {
    id: "650c7af52602fbb2a98bf5cf",
    beneficiaryId: "650c7af5734429b7e6d7042b",
    beneficiaryName: "Tom Brady",
    navigatorId: "650c7af55f9212e28c2dfe1c",
    startTime: new Date(2023, 9, 25, 10, 7).getTime(),
    endTime: new Date(2023, 9, 28, 10, 7).getTime(),
    description: "Mental Health Checkup 1",
  },
  {
    id: "650c7af515cdc8e13a368615",
    beneficiaryId: "650c7af5338536b066be0e93",
    beneficiaryName: "John Abraham",
    navigatorId: "Health checkup",
    startTime: new Date(2023, 8, 28, 10, 7).getTime(),
    endTime: new Date(2023, 8, 28, 14, 7).getTime(),
    description: "nulla mollit deserunt ullamco ad",
  },
  {
    id: "650c7af561328adb6734ef34",
    beneficiaryId: "650c7af510eeff7f32f01888",
    navigatorId: "650c7af5bbed04edc08837cd",
    beneficiaryName: "John Doe",
    startTime: new Date(2023, 8, 2, 10, 7).getTime(),
    endTime: new Date(2023, 8, 28, 10, 7).getTime(),
    description: "Health Check",
  },
  {
    id: "650c7af524db73537cb24f8e",
    beneficiaryId: "650c7af5856eabde72d739a1",
    navigatorId: "650c7af598c2eb44eef58328",
    beneficiaryName: "John Doe",
    startTime: new Date(2023, 8, 12, 10, 7).getTime(),
    endTime: new Date(2023, 8, 28, 10, 7).getTime(),
    description: "Detox check 2",
  },
  {
    id: "650c7af5023f3855e131f789",
    beneficiaryId: "650c7af595ed66f948519737",
    navigatorId: "650c7af561b364141ea35ae0",
    beneficiaryName: "Tom Brady",
    startTime: new Date(2023, 9, 28, 10, 7).getTime(),
    endTime: new Date(2023, 9, 28, 14, 7).getTime(),
    description: "Detox check 1",
  },
  {
    id: "650c7af54c7fa3e0f5e3f4f5",
    beneficiaryId: "650c7af5a28b3c8ae7ac9120",
    navigatorId: "650c7af5940c3a3d755fc1d9",
    beneficiaryName: "John Doe",
    startTime: new Date(2023, 9, 22, 12, 7).getTime(),
    endTime: new Date(2023, 10, 12, 10, 7).getTime(),
    description: "Docker appointment",
  },
  {
    id: "650c7af5d2fa1ef61a9fff2e",
    beneficiaryId: "650c7af5b1b0c52f5eaeaad5",
    navigatorId: "650c7af511caaec43c21c284",
    beneficiaryName: "Taylor Swift",
    startTime: new Date(2023, 10, 22, 10, 7).getTime(),
    endTime: new Date(2023, 11, 28, 10, 7).getTime(),
    description: "Job search",
  },
];


// Simulate an API request and response delay
const simulateApiRequest = (data: any[]): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000); // Adjust the delay as needed (e.g., 1000ms for a 1-second delay)
  });
};

const baseHost = axios.create({baseURL: "https://uig75k9qxf.us-east-1.awsapprunner.com/"})
export const getInitialData = () => {
  return baseHost.get("/users/allBeneficiaries").then(res => res.data.map((row:any) => ({...row, id: row.beneficiaryID})));
};

export const getCaseWorkerBeneficiaries = (id: string) => {
  return baseHost.get("/users/beneficiaries", {params: {id}}).then(res => res.data.map((row:any) => ({...row, id: row.beneficiaryID})));
};

export const getRequestsForCaseWorker = () => {
  return simulateApiRequest(mockRequestData);
};

export const updateApprovalStatus = (userId: string, status: string) => {
  const user = mockRequestData.find((row) => row.id === userId);
  if (user) {
    user.approvalStatus = status;
  }
};
export const addService = (t: any) => {
  return baseHost.post("/services",t)
}

export const assignToBeneficiary = (
  beneficiaryID: string,
  userId?: string,
  userName?: string
) => {

  return baseHost.put("/users/beneficiaries/assignNavigator", null, {params: {beneficiaryID, navigatorID: userId}})
  return new Promise((resolve) => {
    const beneficiary = mockData.find((row) => row.id === beneficiaryID);
    if (beneficiary && userId && userName) {
      beneficiary.navigator = userName;
      beneficiary.navigatorId = userId;
    }
    resolve(null);
  });
};

export const getAllServices = (navigatorID: string, beneficiaryID: string) => {
  return baseHost
    .get("/services", {
      params: { id: navigatorID, beneficiaryID },
    })
    .then((res: any) => res.data);
};

export const getScheduledTasks = (userType: UserType, userId: string) => {
  return simulateApiRequest(scheduledTaks)
}
