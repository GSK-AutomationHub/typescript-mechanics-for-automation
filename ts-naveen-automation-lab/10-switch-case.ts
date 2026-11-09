// switch case useful in following scearios
// RBAC (rule base access control) --> admin, employee, vendor, guest
// Enums --> String, Number, Heterogenous
// Multi-Env --> QA, DEV, STAGE, PROD
// Cross-browser --> chrome, firefox, safari, edge
// Reading multiple I/O --> JSON, XML, YAML

let workingDay: string = 'WENESDAY'

switch(workingDay.toLowerCase()){
    case "monday" : 
        console.log('monday');
        break;
    case 'tuesday':
        console.log('tuesday');
        break;
    case 'wenesday':
        console.log('wenesday');
        break;
    case 'thursday':
        console.log('thursday');
        break;
    case 'friday':
        console.log('friday');
        break;
    default:
        console.log('Invalid Working Day')
}

enum BROWSER{
    CHROME = 'chrome',
    FIREFOX = 'firefox',
    SAFARI = 'safari',
    EDGE = 'edge'
}

let browserName = BROWSER.SAFARI

switch(browserName.toLowerCase()){
    case 'chrome':
        console.log('lanuch chrome instance');
        break;
    case 'firefox':
        console.log('lanuch firefox instance');
        break;
    case 'safari':
        console.log('lanuch safari instance');
        break;
    case 'edge':
        console.log('lanuch edge instance');
        break;
    default:
        console.log('Invalid Browser')
}