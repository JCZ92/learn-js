// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
const func = {
    logMsg: function() {
        console.log(this.errMsg);
    }
}

const obj1 = {
    errMsg: "This is a error!"
}
const obj2 = {
    errMsg: "This is a error!"
}
func.logMsg.call(obj1);
func.logMsg.call(obj2);