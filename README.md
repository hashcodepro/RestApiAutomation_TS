# Rest API Automation Framework with Typescript

This is an executable rest api automation framework which is much more suitable for large projects consisting of multiple endpoints and complex workflows.

## Project Structure

```
├── src
│   ├── config
│   ├── enums
│   ├── reports
│   ├── services
│   │   └── jsonplaceholder
│   │       └── posts
│   ├── tests
│   │   └── features
│   │       ├── jsonplaceholder
│   │       └── step-definitions
│   │           ├── hooks
│   │           ├── jsonplaceholder
│   │           └── world
│   ├── types
│   │   ├── services
│   │   └── utilities
│   └── utilities
│       └── rest
├── tsconfig.json
├── cucumber.ts
├── env.sh
├── package.json
└── README.md
```
- `services` would contain the reusable code for the rest services and their endpoints. All of the business logic for the tests would be present in here.
- `tests` dir is structured to match the services dir i.e. for every rest services there would be a dir in tests corresponding to it which could contain features for each endpoint.
- `utilities` would contain code mostly used by the services like sending the request and getting the response in a formatted way. It can also contain code for any i/o or excel operations.
- `types` consists of the custom typings for the entire code.
- `config` consists of necessary configuration required by the tests.
- `enums` would contain all of the predefined constants or values required by the tests.
- `reports` would contain all the html and json files for the reports and also the code required to generate them.
- `cucumber.ts` would contain the cucumber profile which would be used for executing the scenarios.
- `env.sh` contains all the environment variables that needs to be set before executing the scenarios.

## Getting Started


### Installation

- Clone the repository into a folder.
- Navigate to the Project root directory and execute the below command.
```
npm install
```

### Execution

Next step would be to generate the JS files and executing the tests. 
```
tsc

npm test
```

### Reports

To generate the reports execute the below command
```
npm run report
```
The html files would be generated in the reports folder.
![API Testing using Cucumber and Typescript Test Results](./images/report.pngraw=true "API Testing using Cucumber and Typescript Test Results")


### References

* https://www.npmjs.com/package/axios
* https://jsonplaceholder.typicode.com/
* https://github.com/typicode/jsonplaceholder