import environment from "../components/Enviroment/environment";

const dummyTask = [
    { "id": 1, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "todo" }, 
    { "id": 2, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "todo" }, 
    { "id": 3, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "todo" }, 
    { "id": 4, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "todo" }, 
    { "id": 5, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "doing" },
    { "id": 6, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "doing" },
    { "id": 7, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "doing" },
    { "id": 8, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "doing" },
    { "id": 9, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "doing" },
    { "id": 10, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "doing" },
    { "id": 11, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "done" },
    { "id": 12, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "done" },
    { "id": 13, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "done" },
    { "id": 14, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "done" },
    { "id": 15, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "done" },
    { "id": 16, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "done" },
    { "id": 17, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "done" },
    { "id": 18, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "done" },
    { "id": 19, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "done" },
    { "id": 20, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "done" },
    { "id": 21, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "done" },
    { "id": 22, "title": "Build UI for onboarding flow"  , "description": "Complete all design and work on building UI for onboarding new clients to our project", "subtask": [{ "title":"Create Task_1" , "isActive": true} , { "title":"Create Task_2" , "isActive": true} , { "title":"Create Task_3" , "isActive": false }] , "status": "done" }
];

const dummyBoards = [
    { "id": 1, "name":"Platform Launch", isActive: true}, 
    { "id": 2, "name":"Market Plan", isActive: false}, 
    { "id": 3, "name":"Roadmap", isActive: false}
]

export const LOGIN_URL = `${environment.BASE_URL}/auth/login`;
export const REGISTER_URL = `${environment.BASE_URL}/auth/signup`;
export const REQUEST_PASSWORD_URL = `${environment.BASE_URL}/auth/forgot-password`;
export const RESET_PASSWORD_URL = `${environment.BASE_URL}/auth/reset-password`;
export const CREATEBOARD_URL = `${environment.BASE_URL}/board/`;
export const GETALLBOARDS_URL = `${environment.BASE_URL}/board/`;
export const GETALLTASKS_URL = `${environment.BASE_URL}/task/`;

export {dummyTask, dummyBoards} 
