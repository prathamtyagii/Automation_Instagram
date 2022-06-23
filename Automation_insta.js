//node Automation_insta.js --url='https://www.instagram.com/accounts/login/' --config='instagram.json'
let minimist=require('minimist');
let puppeteer=require('puppeteer');
let fs=require('fs');
let robot=require('robotjs');

let args=minimist(process.argv);
let configJSON = fs.readFileSync(args.config, "utf-8");
let config = JSON.parse(configJSON);

async function run() {
    let browser = await puppeteer.launch({
        headless: false,
        args: [
            '--start-maximized'
        ],
        defaultViewport: null
    });

    let pages=await browser.pages();
    let page=pages[0];
    await page.goto(args.url);

    await page.waitFor(3000);
    
    //Logging In
    await page.waitForSelector('input[name="username"]');
    await page.type('input[name="username"]',config.username,{delay:100});

    await page.waitForSelector('input[name="password"]');
    await page.type('input[name="password"]',config.password,{delay:100});

    await page.keyboard.press("Enter");

    await page.waitFor(3000);

    //Following a public account
    await page.waitFor(3000);
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    await page.keyboard.press("Enter");

    await page.waitFor(3000);
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    await page.keyboard.press("Enter");

    await page.waitForSelector('input.XTCLo');
    await page.type('input.XTCLo',config.toBeFollowed[0],{delay:200});

    await page.waitFor(3000);

    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");

    await page.waitForSelector('button._5f5mN.jIbKX._6VtSN');
    await page.click('button._5f5mN.jIbKX._6VtSN');

    await page.waitFor(3000);
    
    //Clicking the home button

    await page.goto(args.url);

    await page.waitFor(3000);

    //Sending Follow request to a private account
    await page.waitForSelector('input.XTCLo');
    await page.type('input.XTCLo',config.toBeFollowed[1],{delay:200});

    await page.waitFor(3000);

    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");

    await page.waitFor(3000);

    await page.waitForSelector('button.sqdOP');
    await page.click('button.sqdOP');

    await page.waitFor(3000);

    //Clicking the home button 

    await page.goto(args.url);

    await page.waitFor(3000);

    //Texting a follower
    await page.waitForSelector('input.XTCLo');
    await page.type('input.XTCLo',config.followers[0],{delay:200});

    await page.waitFor(3000);

    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");

    await page.waitForSelector('button.sqdOP.L3NKy._8A5w5');
    await page.click('button.sqdOP.L3NKy._8A5w5');

    await page.waitFor(3000);

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");

    await page.waitForSelector('div.qF0y9>textarea');
    await page.type('div.qF0y9>textarea',config.message,{delay:200});

    await page.keyboard.press("Enter");   
    
    //Clicking the home button
    await page.goto(args.url);

    await page.waitFor(3000);

    //Unfollowing a private account
    await page.waitForSelector('input.XTCLo');
    await page.type('input.XTCLo',config.toBeFollowed[0],{delay:200});

    await page.waitFor(3000);

    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");

    await page.waitFor(3000);

    await page.waitForSelector('button._5f5mN.-fzfL._6VtSN');
    await page.click('button._5f5mN.-fzfL._6VtSN');

    await page.waitFor(3000);

    await page.waitForSelector('button.aOOlW.-Cab_');
    await page.click('button.aOOlW.-Cab_');

    await page.waitFor(3000);

    //Posting a photo
    await page.waitFor(6000);

    await page.waitForSelector('div.vZuFV>button.wpO6b.ZQScA');
    await page.click('div.vZuFV>button.wpO6b.ZQScA');

    await page.waitFor(3000);

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");

    await page.waitFor(10000);

    robot.moveMouse(1300, 500);
    /*robot.mouseClick('left');

    robot.keyTap("right");
    
    robot.keyTap("enter");

    robot.keyTap("right");
    
    robot.keyTap("right");

    robot.keyTap("enter");*/

    await page.waitForSelector('body > div.RnEpo.gpWnf.Yx5HN > div.pbNvD > div > div > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div:nth-child(3) > div > button');
    await page.click('body > div.RnEpo.gpWnf.Yx5HN > div.pbNvD > div > div > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div:nth-child(3) > div > button');    
    
    await page.waitForSelector('body > div.RnEpo.gpWnf.Yx5HN > div.pbNvD > div > div > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div:nth-child(3) > div > button');
    await page.click('body > div.RnEpo.gpWnf.Yx5HN > div.pbNvD > div > div > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div:nth-child(3) > div > button');

    await page.waitForSelector('textarea.lFzco');
    await page.type('textarea.lFzco','This is the Caption to our post',{delay:100});

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitFor(3000);

    //Clicking the home button 

    await page.goto(args.url);
    await page.waitFor(3000);

    //Liking all posts of a person
    await page.waitForSelector('input.XTCLo');
    await page.type('input.XTCLo',config.followers[0],{delay:200});

    await page.waitFor(3000);

    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");

    await page.waitFor(3000);

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    await page.keyboard.press("Enter");

    let val=true;
    
    while(val){
        await page.waitForSelector('span.fr66n>button.wpO6b');
        await page.click('span.fr66n>button.wpO6b');

        await page.waitFor(3000);

        try {
            let waitforselector= await page.waitForSelector('div.l8mY4.feth3>button.wpO6b', {visible: true, timeout: 1000 })
            await page.click('div.l8mY4.feth3>button.wpO6b');
        } catch (e) {
            val=false;
            await page.waitForSelector('div.qF0y9.Igw0E.IwRSH>button.wpO6b');
            await page.click('div.qF0y9.Igw0E.IwRSH>button.wpO6b');
        }

    }

};

run();