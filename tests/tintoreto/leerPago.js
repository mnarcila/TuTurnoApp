console.log("Inicia");
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({region:"us-east-2"})
exports.handler = (event, context, callback) => {
    // TODO implement
    var params = {
        TableName:"tnt_pago"
    };
    docClient.scan(params,function(err,data){
       if(err){
           callback(err,null);
       }else {
        callback(null, data);

       }

    });

  };//arn:aws:lambda:us-east-2:025715205717:function:leerPagos
// https://egrfd9sahj.execute-api.us-east-2.amazonaws.com/Test
