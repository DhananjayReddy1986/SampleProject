# JSTraining

Pass parameters to protractor.conf.js from command prompt  
1). Using yargs 
    Install yargs by using the following command : npm install yargs
    Assume that if you want to pass Name and Env from command prompt
    
    Syntax : protractor .\protractor.conf.js --name=Dhanu --env=dev
    
    Code in protractor.conf.js file

    const args = require('yargs').argv;
    console.log('Name: ' + args.name);
    console.log('env: ' + args.env); 

    Note : If you use args.env that will be replaced with value that we passed from command prompt 

2). Using minimist
    Install minimist by using the following command : npm install minimist
    Assume that if you want to pass Name and Env from command prompt
    
    Syntax : protractor .\protractor.conf.js --name=Dhanu --env=dev

    Code in protractor.conf.js file

    const args1 = require('minimist')(process.argv.slice(2));
    console.log(args1['name']);
    console.log(args1['env']);