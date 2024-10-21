const employees = [
  {
    "id": 1,
    "firstname": "Amit",
    "email": "e@e.com",
    "password": "1234",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Sales Report",
        "taskDescription": "Compile and submit the quarterly sales report.",
        "taskDate": "2024-10-20",
        "category": "Sales"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Attend Team Meeting",
        "taskDescription": "Join the team meeting to discuss project updates.",
        "taskDate": "2024-10-21",
        "category": "Meetings"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Complete Client Documentation",
        "taskDescription": "Submit the documentation for Client A.",
        "taskDate": "2024-10-10",
        "category": "Documentation"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstname": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Website",
        "taskDescription": "Make necessary updates to the corporate website.",
        "taskDate": "2024-10-22",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Resolve the login issue reported by users.",
        "taskDate": "2024-10-15",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Design UI Mockups",
        "taskDescription": "Create mockups for the new app interface.",
        "taskDate": "2024-10-23",
        "category": "Design"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstname": "Rahul",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Organize Workshop",
        "taskDescription": "Set up the workshop for new employees.",
        "taskDate": "2024-10-14",
        "category": "Training"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Analyze Market Trends",
        "taskDescription": "Research and analyze current market trends.",
        "taskDate": "2024-10-25",
        "category": "Marketing"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstname": "Anjali",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Marketing Strategy",
        "taskDescription": "Develop a marketing strategy for the next quarter.",
        "taskDate": "2024-10-27",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Meet with Client B",
        "taskDescription": "Discuss project requirements with Client B.",
        "taskDate": "2024-10-18",
        "category": "Client Meeting"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstname": "Vikram",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Financial Report",
        "taskDescription": "Prepare the financial report for Q3.",
        "taskDate": "2024-10-26",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Arrange Team Outing",
        "taskDescription": "Plan a team-building outing for the department.",
        "taskDate": "2024-11-01",
        "category": "HR"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  }
];

   
  
    const admin =[{
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
   } ];
  
   export const setLocalStorage =() =>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin' ,JSON.stringify(admin));

   }
   export const getLocalStorage =() =>{
    const admin = JSON.parse(localStorage.getItem('admin'));
    const employees = JSON.parse(localStorage.getItem('employees'));
    

    return {admin,employees};
    
    
   }
  
