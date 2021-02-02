const express= require('express') 
var ahmed = true 
var d = new Date()
var f = d.getDay()
var n = d.getHours()
console.log(f)
console.log(n)
const app = express()
app.set('view engine', 'pug');
 app.use('/static',express.static('public'))
app.use(logger)
//home
app.get('/',(req,res)=>{
  
  res.render('index',{
    title:"Bechir"
  })
  
})
///use router
app.get('/Contact',(req,res)=>{
  res.render('index02')
  console.log("hello")
  
})
app.get('/services',(req,res)=>{
  res.render('index03')
  console.log("hello")
  
})
app.use(logger)

function logger(req,res,next) { 
console.log("Bechir")
if(n>=9 && n<=15 && f>=2 && f<=4){
  next()
} 
else{
  res.send("OpenMonday to Friday,  from 9 to 17")
}

}
app.listen(3000)