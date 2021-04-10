
const request = require("request");
const fs = require("fs")
const path = require("path")

let dataPath = path.join(__dirname,"../data.json")

request({url:'https://www.reddit.com/hot.json'},(err,resp,body) =>{
    if(err){
        console.log(err)
    }
    else{
        JSON.parse(body).data.children.forEach(item => {
            fs.appendFileSync(dataPath,item.data.title + '\n')
            let imgUrl = item.data.all_awardings[1] 
            // if(imgUrl){
            //     request(imgUrl.icon_url).pipe(
            //         path.join(dataPath,"../"+imgUrl.icon_url)
            //     )
            //     }
    
        });
    }
});