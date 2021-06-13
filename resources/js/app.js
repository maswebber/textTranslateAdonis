import '../css/app.css'
const axios = require('axios');
const qs = require('qs');

var sl=document.getElementById('sl');
var tl=document.getElementById('tl');
var textto=document.getElementById('textto');
var textend=document.getElementById('textend');
var translate=document.getElementById('formTrans');
translate.addEventListener('submit',function(e){
    e.preventDefault();
    const url = `https://translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=${tl.value}&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e`;
    const data={
        sl:sl.value,
        tl:tl.value,
        q:textto.value,
    };
    const cross={crossDomain:true}
    // console.log(data)
    axios.post(url,qs.stringify(data),cross)
      .then(function (response) {
        textend.value=response.data.sentences[0].trans;
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
});


//   const data = {
//     'sl': sourceLang,
//     'tl': targetLang,
//     'q': text,
//   };

// return request({
// method: 'POST',
// uri: url,
// encoding: 'UTF-8',

// form: data,
// json: true,
// })