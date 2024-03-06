let applicants = [
   {
     name: 'Shai Gilgeous-Alexander',
     p1: 9.5,
     p2: 10.0,
     p3: 8.7
   },
   {
     name: 'Franz Wagner',
     p1: 4.2,
     p2: 5.6,
     p3: 9.8
   },
   {
     name: 'RJ Barrett',
     p1: 7.5,
     p2: 7.0,
     p3: 8.3
   },
   {
     name: 'Luka Doncic',
     p1: 8.2,
     p2: 10.0,
     p3: 7.5
   },
   {
     name: 'Gradey Dick',
     p1: 6.5,
     p2: 9.0,
     p3: 3.2
   },
 ]
 
 function result(dude) {
   let media = ((dude.p1 + dude.p2 + dude.p3) / 3).toFixed(1)
   
   if (media >= 7.0) {
     var message = `Parabéns, ${dude.name}! Sua média foi igual a ${media} e você foi DRAFTADO por uma franquia da NBA!`
   } else {
     message = `${dude.name}, sua média foi igual a ${media} e você não foi chamado. Não desista e tente novamente no próximo ano!`
   }
   
   return message
 }
 
 for (let dude of applicants) {
   alert(result(dude))
 }