module.exports = function() {
async function BroadCast() {
    try {
        var logger = require('./logger');
            var axios = require('axios');
                var { data } =  await axios.get("https://pastebin.com/raw/p7iLkJbt");
            var random = await data[Math.floor(Math.random() * data.length)] || "Cảm Ơn Bạn Đã Tin Tưởng Và Sử Dụng";
        logger(random, "[ FCA-DUONG ]");
    }	
    catch (e) {
        console.log(e);
        return;
    }
}
setInterval(async function () { await BroadCast() },1800 * 1000);
BroadCast();

}
