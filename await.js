function fn(){

    console.log("step 1")
    console.log("step 2")
    console.log("step 3")
   
    setTimeout(()=>console.log(("Hey.....")),4000)
    setTimeout(()=>console.log(("Hi...")),2000)
    setTimeout(()=>console.log(("Whatsapp.......")),6000)
    }
    console.log(fn())
    console.log("bye")
    setInterval(()=>console.log("Welcome"),3000)