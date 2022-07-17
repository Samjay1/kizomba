router.get('/verifypayment', (req, res)=>{
    console.log('verifypayment working here :>> ');
    res.header("Access-Control-Allow-Origin", "*");
    let {user_id,amount,reference} = req.query
    let cost = req.query.amount; //actual amount to be stored in database
    const myurl = 'https://api.paystack.co/transaction/verify/' +reference;
    axios.get(myurl, {
        headers: {
            Authorization: 'Bearer sk_test_f28f9acaefc3aa3b47e99d1e656c0aef39bf8066'
            }
    })
    .then((value)=>{
        console.log('PAYMENT SUCCESS',user_id, cost)
        // console.log(value.data);
        if(value.data.status==true){
            let data = value.data.data;
            let amount = (data.amount)/100 ;
            let transaction_id = data.reference;
            let payment_method = data.channel;
            let phone = data.customer.phone;
            let email = data.customer.email;
            let other = data.authorization.brand;
            //card details format => last4, exp_month, exp_year, card_type
            let card_details= data.authorization.last4 +','+ data.authorization.exp_month +','+ data.authorization. exp_year +','+  data.authorization.card_type;
            let status = 'completed';

             //Data from PAYSTACK
            //update deposite db with paystack data--------------------------------------------------
            res.status(201).json({
                status: true,
                message: 'Successful',
            }) 
        }
    })
    .catch((error)=>{
        console.log('MY ERROR', error);
        res.status(500).json({
            status:false,
            message: error
        });
    });
    
}) 