console.log("Inicia");
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({region:"us-east-2"})
exports.handler = (event, context, callback) => {
    // TODO implement
    var params = {
        TableName:"tnt_pago",
        Item: {
            id:event.id,
            valor:event.valor,
            dia: event.dia
        }
    };
    docClient.put(params,function(err,data){
       if(err){
           callback(err,null);
       }else {
        callback(null, "Registrado");
       }
    });

  };
//arn:aws:lambda:us-east-2:025715205717:function:registrarPago
