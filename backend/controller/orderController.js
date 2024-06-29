const Razorpay = require("razorpay")
const crypto = require("crypto")
const order = require("../model/orderModel")
const googleapis = require("googleapis")
const { google } = require("googleapis");

const util = require("util")
const fs = require('fs');
const readFileAsync = util.promisify(fs.readFile);
exports.createOrder = async(req,res)=>{

    var instance = new Razorpay({ key_id: process.env.key_id, key_secret: process.env.key_secret })

        const { name, email, phone, coursename } = req.body;
    
        var options = {
            amount: 50000/10, 
            currency: "INR",
            receipt: "receipt#1",
            notes: {
                name: name,
                email: email,
                phone: phone,
                coursename: coursename
            }
        };
    
        try {
            const orderDetails = await instance.orders.create(options);
     
            res.json({
                orderDetails
            })
        }

catch (error) {
    console.error(error);
    res.status(500).send("Failed to create order");
}
    }

exports.handleWebHook = async(req,res)=>{
        console.log("hooks")
        
        const signature = req.get('X-Razorpay-Signature');
        if (!verifySignature(req.body, signature)) {
            console.log("Inside")
            return res.status(400).send('Invalid signature');
        }
    
    
        const orderDetails = req.body.payload.order.entity
      
    
        if (req.body.event === 'order.paid') {
          
            const Details = {
                name: orderDetails.notes.name,
                email: orderDetails.notes.email,
                phone: orderDetails.notes.phone,
                coursename: orderDetails.notes.coursename,
                payment: orderDetails.amount_paid/100,
                orderId:orderDetails.id
            } 
            
    
           const newUser = await order.create(Details)
    
           await handleGooglesheet(Details)
           console.log(newUser)
        }
    
    
    
        res.json({ status: 'success' });
    };
    
    
    function verifySignature(payload, signature) {
        const secret = 'Admin123'; 
        const hmac = crypto.createHmac('sha256', secret);
        const generatedSignature = hmac.update(JSON.stringify(payload)).digest('hex');
        return generatedSignature === signature;
    }
    async function handleGooglesheet(Details){

        const keyFile = "./valiant-vault-417214-ca5deb3686b3.p12";
        const key = await readFileAsync(keyFile);
        const passphrase = "Admin123";

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: "hurryeptech@valiant-vault-417214.iam.gserviceaccount.com",
                private_key: key,
                passphrase: passphrase
            },
            scopes: "https://www.googleapis.com/auth/spreadsheets"
        });
        const client = await auth.getClient()
            
        const googleSheets = google.sheets({ version: "v4", auth: client });
        
        const spreadsheetId = '11EcIzyQBXsCogHxqF0-Y0ckTDxsShs2SLeKOUxdof6Q' ;
        
        const metaData = await googleSheets.spreadsheets.get({
          auth,
          spreadsheetId,
        });
        
        const edited =   await googleSheets.spreadsheets.values.append({
          auth,
          spreadsheetId,
          range: "Sheet1!A:F",
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[Details.name, Details.email,Details.phone,Details.coursename,Details.payment,Details.orderId]],
          },
        
        });
    
    console.log("googlesheet")
    }
    
    exports.getOrder = async(req,res)=>{
    
        const {orderId} = req.params
    
        const orderDetails = await order.findOne({orderId: orderId})  
      
        if(!orderDetails)
            {
                return res.status(400).send('Invalid Order_id');
            }
            console.log("Hello Inners")
            res.json({
                Success:true,
                orderDetails
            })
    }
    
    

