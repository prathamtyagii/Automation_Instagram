//node Automation_insta.js --url='https://www.instagram.com/accounts/login/' --config='instagram.json'
let minimist=require('minimist');
let puppeteer=require('puppeteer');
let fs=require('fs');
//let robot=require('robotjs');

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

    await page.keyboard.press("Enter");

    await page.waitFor(3000);
    await page.waitForSelector('svg._ab6-');
    await page.click('svg._ab6-');
    await page.keyboard.press("Tab");

    await page.keyboard.press("Enter");

    await page.waitForSelector('input._aauy');
    await page.type('input._aauy',config.toBeFollowed[0],{delay:200});

    await page.waitFor(3000);

    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");

    await page.waitFor(3000);

    await page.keyboard.press("Tab");

    await page.waitFor(3000);

    await page.keyboard.press("Enter");

    await page.waitFor(3000);
    
    //Clicking the home button

    await page.waitForSelector('svg._ab6-');
    await page.click('svg._ab6-');

    await page.waitFor(3000);

    await page.keyboard.press("Enter");
    await page.waitFor(3000);

    //Sending Follow request to a private account

    await page.waitForSelector('svg._ab6-');
    await page.click('svg._ab6-');
    await page.keyboard.press("Tab");

    await page.keyboard.press("Enter");

    await page.waitForSelector('input._aauy');
    await page.type('input._aauy',config.toBeFollowed[1],{delay:200});

    await page.waitFor(3000);

    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");

    await page.waitFor(3000);

    await page.keyboard.press("Tab");

    await page.waitFor(3000);

    await page.keyboard.press("Enter");

    await page.waitFor(3000);
    
    //Clicking the home button

    await page.waitForSelector('svg._ab6-');
    await page.click('svg._ab6-');

    await page.waitFor(3000);

    await page.keyboard.press("Enter");
    await page.waitFor(3000);

    //Texting a follower

    await page.waitForSelector('svg._ab6-');
    await page.click('svg._ab6-');
    await page.keyboard.press("Tab");

    await page.keyboard.press("Enter");

    await page.waitForSelector('input._aauy');
    await page.type('input._aauy',config.followers[1],{delay:200});

    await page.waitFor(3000);

    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");

    await page.waitFor(3000);

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    await page.waitFor(3000);

    await page.keyboard.press("Enter");

    await page.waitFor(3000);

    await page.waitForSelector('.');
    await page.type('.',config.message,{delay:200});

    await page.keyboard.press("H");
    await page.keyboard.press("i");
    await page.keyboard.press("i");

    await page.keyboard.press("Enter");  
    await page.waitFor(3000); 
    
    //Clicking the home button
    await page.waitForSelector('svg._ab6-');
    await page.click('svg._ab6-');

    await page.waitFor(3000);

    await page.keyboard.press("Enter");
    await page.waitFor(3000);

    //Unfollowing a private account

    await page.keyboard.press("Enter");

    await page.waitFor(3000);
    await page.waitForSelector('svg._ab6-');
    await page.click('svg._ab6-');
    await page.keyboard.press("Tab");

    await page.keyboard.press("Enter");

    await page.waitForSelector('input._aauy');
    await page.type('input._aauy',config.followers[0],{delay:200});

    await page.waitFor(3000);

    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");

    await page.waitFor(3000);

    await page.keyboard.press("Tab");

    await page.waitFor(3000);

    await page.keyboard.press("Enter");

    await page.waitFor(3000);

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    await page.keyboard.press("Enter");

    await page.waitFor(3000);

    //Clicking the home button 

    await page.waitForSelector('svg._ab6-');
    await page.click('svg._ab6-');

    await page.waitFor(3000);

    await page.keyboard.press("Enter");
    await page.waitFor(3000);

    //Liking all posts of a person
    await page.keyboard.press("Enter");

    await page.waitFor(3000);
    await page.waitForSelector('svg._ab6-');
    await page.click('svg._ab6-');
    await page.keyboard.press("Tab");

    await page.keyboard.press("Enter");

    await page.waitForSelector('input._aauy');
    await page.type('input._aauy',config.followers[1],{delay:200});

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
    await page.keyboard.press("Tab");

    await page.keyboard.press("Enter");

    let val=true;
    
    while(val){
        await page.waitForSelector('span._aamw>button._abl-');
        await page.click('span._aamw>button._abl-');

        await page.waitFor(3000);

        try {
            let waitforselector= await page.waitForSelector('div._aaqg>button._abl-', {visible: true, timeout: 1000 })
            await page.click('div._aaqg>button._abl-');
        } catch (e) {
            val=false;
            await page.waitForSelector('svg.x1lliihq.x1n2onr6');
            await page.click('svg.x1lliihq.x1n2onr6');
        }

    }

    //Clicking the home button
    await page.waitForSelector('svg._ab6-');
    await page.click('svg._ab6-');

    await page.waitFor(3000);

    await page.keyboard.press("Enter");
    await page.waitFor(3000);

    //Posting a photo
    await page.waitFor(3000);
    await page.waitForSelector('svg._ab6-');
    await page.click('svg._ab6-');

    await page.waitFor(3000);

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    await page.keyboard.press("Enter");

    await page.waitFor(3000);

    await page.keyboard.press("Tab");

    await page.keyboard.press("Enter");

    await page.waitFor(10000);

    //robot.moveMouse(1300, 500);
    //robot.mouseClick('left');

    //robot.keyTap("right");
    
    //robot.keyTap("enter");

    //robot.keyTap("right");
    
    //robot.keyTap("right");

    //robot.keyTap("enter");
    

    await page.waitForSelector('#mount_0_0_LO > div > div > div:nth-child(3) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div > div > div._ac7b._ac7d > div > div');
    await page.click('#mount_0_0_LO > div > div > div:nth-child(3) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div > div > div._ac7b._ac7d > div > div');    
    
    await page.waitForSelector('#mount_0_0_LO > div > div > div:nth-child(3) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div > div > div._ac7b._ac7d > div > div');
    await page.click('#mount_0_0_LO > div > div > div:nth-child(3) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div > div > div._ac7b._ac7d > div > div');

    await page.waitForSelector('#mount_0_0_LO > div > div > div:nth-child(3) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div > div.x15wfb8v.x3aagtl.x6ql1ns.x1iyjqo2.xs83m0k.xdl72j9.x13vbajr.x1ue5u6n.x78zum5 > div.x13ehr01.x9f619.x78zum5.x1n2onr6.x1f4304s > div > div > div > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div.x78zum5.x6s0dn4.x1n2onr6.xh8yej3 > div.xw2csxc.x1odjw0f.x1n2onr6.x1hnll1o.xpqswwc.x5dp1im.xl565be.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x1w2wdq1.xen30ot.x1swvt13.x1pi30zi.xh8yej3.x5n08af');
    await page.type('#mount_0_0_LO > div > div > div:nth-child(3) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div > div.x15wfb8v.x3aagtl.x6ql1ns.x1iyjqo2.xs83m0k.xdl72j9.x13vbajr.x1ue5u6n.x78zum5 > div.x13ehr01.x9f619.x78zum5.x1n2onr6.x1f4304s > div > div > div > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div.x78zum5.x6s0dn4.x1n2onr6.xh8yej3 > div.xw2csxc.x1odjw0f.x1n2onr6.x1hnll1o.xpqswwc.x5dp1im.xl565be.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x1w2wdq1.xen30ot.x1swvt13.x1pi30zi.xh8yej3.x5n08af','This is the Caption to our post',{delay:100});

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await page.waitFor(3000);
    


};

run();
