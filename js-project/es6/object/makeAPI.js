const developers = [
{
      allDevelopersInfo:{
            name:"subrota" ,
            isMale:true ,
            age : 21 ,
            ssc:4.06 ,
            hsc:4.08 ,
            interest:['programming' , 'problem solving' , 'math' , 'search for new knowladge'] ,
            qualification: function () { //we should use normal  function to access property value in object//
             return   `SSC : ${this.ssc}  HSC : ${this.hsc}`;
            }  ,
            bio:{
                nationality:"Bangladeshi" ,
                religion: "Hindu" ,
                state:"Rajshahi , Joypurhat" ,
                profile:"https://www.thoughtco.com/thmb/U3uVJMsgzLd00DbkIicnnIYM_kM=/1414x1414/smart/filters:no_upscale()/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg" ,
                website:"http://subrotachandra.lovestoblog.com/login.html" ,
                youTube:"https://www.youtube.com/channel/UC6EXps0XcZ8e5kEvtQzU-VQ" ,
                addressMap:"https://goo.gl/maps/H69Bc1kqcoLWcQSK7" ,
            }
            , 
            name:"dipsh" ,
            isMale:true ,
            age : 25 ,
            ssc:4.80 ,
            hsc:5 ,
            interest:['programming' , 'problem solving' , 'math' , 'search for new knowladge'] ,
            qualification: function () { //we should use normal  function to access property value in object//
             return   `SSC : ${this.ssc}  HSC : ${this.hsc}`;
            }  ,
            bio:{
                nationality:"Bangladeshi" ,
                religion: "Hindu" ,
                state:"Rajshahi , Joypurhat" ,
                profile:"https://www.thoughtco.com/thmb/U3uVJMsgzLd00DbkIicnnIYM_kM=/1414x1414/smart/filters:no_upscale()/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg" ,
                website:"http://subrotachandra.lovestoblog.com/login.html" ,
                youTube:"https://www.youtube.com/channel/UC6EXps0XcZ8e5kEvtQzU-VQ" ,
                addressMap:"https://goo.gl/maps/H69Bc1kqcoLWcQSK7" ,
            }
    }
   }
]

//>>>-------------------------------->>> Play with API <<<------------------------------------<<<

developers.filter(info => {
    console.log(info.allDevelopersInfo.age);
});