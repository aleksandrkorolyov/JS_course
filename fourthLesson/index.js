/**
 * Created by aleksandr on 13.06.18.
 */
// 1.
var arr = ['1','2','3','4'];
function inArray(arr,el){
    var a = arr.indexOf(el);

    if(a==-1){
        return('False')
    }else{
        return('True')
    }
}
inArray(arr,'4');

// 2.
var arr = ['1','2','3','2'];
function modifyArray(arr,el,newEl){
    for (var i=0;i<arr.length;i++){
        if(arr[i]==el){
            var n = arr.splice(i,1,newEl);
        }
    }
    if (n!== undefined){
        return(arr);
    }else{
        return('element '+el+' not found in array '+arr);
    }
}
modifyArray(arr,'2','name');

// 3.
var str = 'my name is Alex';
function transformString(str,el,newEl){
    var n = str.replace(el,newEl);
    if (n!== str){
        return(n);
    }else{
        return('element '+el+' not found in string '+str);
    }
}
transformString(str,'name','coolName');