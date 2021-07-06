var test_results = [];

var test_functions = [];

//verify cookie in tgck
var cookie_in_tgck = function(){
    if(TlIqCustm.ckz.readCookie('tgck') !== null){
        if(TlIqCustm.ckz.readCookie('tgck').indexOf('B_FareDisplay_actual') > -1){
            return ['PASS', 'PASS'];
        }
    }
    return ['FAIL', 'cookie not in tgck'];
};

//verify cookie only registers one time
var cookie_in_tgck_once = function(){
    if(TlIqCustm.ckz.readCookie('tgck') !== null){
        var count = TlIqCustm.ckz.readCookie('tgck').split('B_FareDisplay_actual').length-1;
        if(count === 1){
            return ['PASS', 'PASS'];
        }
    }
    return ['FAIL', 'cookie not in tgck only once'];
};





test_functions.push(cookie_in_tgck);
test_functions.push(cookie_in_tgck_once);



test_functions.forEach(function(callback){
    var test_name = callback.name;
    var test_result = callback()[0];
    var test_message = callback()[1];
    var bonus_array = [test_name, test_result, test_message];
    test_results.push(bonus_array);
});

console.table(test_results);










