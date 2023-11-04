// var cars = [
//     'ayla',
//     'agya',
//     'calya',
//     'kijang',
//     'Brio',
//     'BMW',
//     'Pajero'
// ]

// var carsnumbers= [
//     1 + 1,2 * 5,3 - 4,4 / 4,5,6,7,8
// ]

// // console.log(cars)

//  console.log(carsnumbers)

// // document.writeln(cars)

// // document.writeln(carsnumbers)

// // console.log(cars[4])

// // document.writeln(cars[4])

// // document.writeln(cars.length)

// // console.log(cars.toString())

// // document.write(carsnumbers.toString())

// // document.getElementById("carlist").innerHTML = cars.toString();
// // document.getElementById("carnumber").innerHTML = carsnumbers.toString();

// // var data = document.getElementsByTagName('div')
// // document.writeln("Test: ",data[0]= cars.toString());

// var dataGroup = cars.concat(carsnumbers)
// console.log(dataGroup)
// cars[6] = "Hyundai"
// console.log(cars)

// console.log("")
// console.log("")

// //Array Methods
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits+ " Variable awal")
// fruits.pop()
// console.log(fruits+ " menghapus data paling terakhir")
// fruits.push("Grape")
// console.log(fruits+ " memasukan value grape ke array")
// fruits.shift();
// console.log(fruits+ " menghapus data paling awal")
// console.log(fruits[0]+ " value index ke 0")
// delete fruits[0];
// console.log(fruits+ " value index ke 0 setelah di hapus")
// fruits.splice(2, 0, "Lemon", "Kiwi")
// console.log(fruits+ " menambahkan lemon dan kiwi pada index value 2 dan delete 0")

// console.log("")
// console.log("")

// //bisa di declare ulang
// var food = "Mie Ayam"
// var food = "ketoprak"
// console.log(food+" hasil var")

// //hanya bisa di declare 1x
// const foods = "Mie Ayam"
// // foods = "ketoprak"
// console.log(foods+" hasil const")

// //untuk mengganti valuenya panggil saja variablenya
// let foodss = "Mie Ayam"
// foodss = "ketoprak"
// console.log(foodss+" hasil let")

// const data = true
// const data2 = false

// var number = 3.5;
// console.log(number)

// console.log("")
// console.log("")


// //penghitungan
// let result = 3 + 5
// console.log("%d hasil Pertambahan",result)

// let resultPerkalian = 3*5
// console.log(resultPerkalian+" hasil Perkalian")

// let resultPembagian = 15/5
// console.log(resultPembagian+" hasil Pembagian")

// let resultPengurangan = 15-5
// console.log(resultPengurangan+" hasil Pengurangan")

// let resultModulus = 25%5
// console.log(resultModulus+" hasil Modulus")

// console.log("")
// console.log("")

// // //perhitungan menggunakan alert box dalam browser
// // const number1 = prompt("Angka pertama")
// // const number2 = prompt("Angka kedua")
// // const hasil = number1 * number2
// // alert("Hasil perhitungan : "+ hasil)


// //boolean
// const benar = 5 == 5
// console.log("Apakah 5 sama dengan 5 " , benar)

// const salah = 5 == 6
// console.log("Apakah 5 sama dengan 6 ",salah)

// const lebihKecil = 5 <= 6
// console.log("Apakah 5 lebih kecil daripada 6 ",lebihKecil)

// const lebihbesar = 5 >= 6
// console.log("Apakah 5 lebih besar daripada 6 ",lebihbesar)

// const result2 = 5 == "5"
// console.log("Apakah 5 sama dengan 5 ",result2)

// const result3 = 5 === "5"
// console.log("Apakah 5 sama dengan 5 ",result3)

// console.log("")
// console.log("")

// //String template
// const nama = "Pras"
// const score = 80
// console.log("Nama : " + nama + ", Score : " + score)//normal javascript
// console.log(`Nama : ${nama}, Score : ${score}`)//backtick 1 line
// console.log("Nama : %s, Score : %d",nama,score)// bahasa C

// console.log("")
// console.log("")

// //operator logika
// const nilaiUjian = 60
// const nilaiAbsen = 90
// const lulusUjian = nilaiUjian >= 70
// const lulusAbsen = nilaiAbsen >= 80

// console.log("Nilai Ujian ", lulusUjian)
// console.log("Nilai Absen ", lulusAbsen)

// const wisudaAtau = lulusUjian || lulusAbsen
// console.log("Wisuda Salah satu true", wisudaAtau)

// const wisudaDan = lulusUjian && lulusAbsen
// console.log("Wisuda dua duanya true", wisudaDan)

// console.log("")
// console.log("")

// //conditional statement
// //dua kondisi lulus
// console.log("Dua kondisi true")
// if((lulusAbsen&&lulusUjian) == true){
//     console.log("Lulus")
// } else {
//     console.log("Tidak Lulus")
// }
// console.log("")

// //salah satu lulus
// console.log("salah satu kondisi true")
// if((lulusAbsen||lulusUjian) == true){
//     console.log("Lulus")
// } else {
//     console.log("Tidak Lulus")
// }
// console.log("")

// console.log("Pengecekan Nilai")
// if(nilaiUjian<=60){
//     console.log("Remedial")
// } else if( nilaiUjian > 60 && nilaiUjian<80){
//     console.log("Cukup")
// } else {
//     console.log("Sangat Baik")
// }
// console.log("")


// //Ternary operator
// console.log("Ternary Operation")
// const hasilRapot = nilaiUjian<=60 ?"Tidak Lulus":nilaiUjian>60 &&nilaiUjian<80 ?"cukup": "Sangat Baik"
// console.log(hasilRapot)

// console.log("")
// console.log("")


// //loop
// console.log("Looping")
// console.log("Looping For")
// document.writeln("looping for <br><br>")
// for(var i = 0 ; i < cars.length; i++){
//     console.log(cars[i]+"<br>")
//     document.writeln("Data mobil : "+cars[i]+"<br>")
// }

// var i =0
// // do{
// //     document.writeln(cars[i]+"<br>")
// //     i++
// // }
// console.log("Looping While")
// document.writeln("<br><br>looping while <br><br>")
// while(i<cars.length){
//     document.writeln("Data mobil : "+cars[i]+"<br>")
//     i++
// }

// var x=0
// console.log("")
// document.writeln("<br><br>")

// console.log("Looping do while")
// document.writeln("looping do while<br><br>")
// do{
//     document.writeln("Data mobil : "+cars[x]+"<br>")
//     x++
// }
// while(x<cars.length);
// console.log("")

// const foodies =[
//     {
//         dataId: 1,
//         rasa: 'Manis',
//         warna: 'Merah',
//         bentuk: 'bulat'
//     },
//     {
//         dataId: 2,
//         rasa: 'Asam',
//         warna: 'Kuning',
//         bentuk: 'silinder'
//     },{
//         dataId: 3,
//         rasa: 'Pedas',
//         warna: 'Merah',
//         bentuk: 'Panjang'
//     }
// ]

// document.writeln("<br>")

// // let text = ""
// // for(let x in foodies){
// //     for(let y in foodies){
// //         text += foodies[y]+" "
// //         document.writeln("Makan siang hari ini : "+text+"<br>")
// //     }

// // }

// document.writeln("<br>")
// document.writeln(foodies[0][0])

// foodies.forEach(foodies=>{
//     for(let value in foodies){
//         document.writeln(`${foodies[value]}<br>`)
//     }
// })


// //function
// //declaration

// function user (nama, email){
//     document.writeln(`<br>Nama : ${nama}, Email : ${email}<br><br>`)
// }
// user("Pras","Siusprass@gmail.com")

// function raport(x,y){
//     if((x >=70 && y>=80) == true){
//         document.writeln("Lulus")
//     } else {
//         document.writeln("Tidak Lulus")
//     }
//     console.log("")
// }

// raport(75,80)

// document.writeln("<br>Bagian atas hasil dari function raport1 <br> <br>Bagian bawah hasil dari function raport2")

// function raport2(){
//     if((lulusAbsen && lulusUjian) == true){
//         document.writeln("<br>Lulus<br>")
//     } else {
//         document.writeln("<br>Tidak Lulus<br>")
//     }
//     console.log("")
// }

// raport2()



// //expression
// document.writeln("<br>Expression Function")
// const raport3 = function(x,y){
//     if((x>=70 && y>=80) == true){
//         document.writeln("<br>Lulus<br>")
//     } else {
//         document.writeln("<br>Tidak Lulus<br>")
//     }
//     console.log("")
//     return x,y
// }

// raport3(80,80)

// document.writeln("<br>Function Raport 4")
// const raport4 = function (x,y){
//     if((x>=70 && y>=80) == true){
//         HR4 = "<br>lulus<br>"
//     } else{
//         HR4 = "<br>Tidak Lulus <br>"
//     }
//     return HR4
// }

// document.writeln(raport4(50,80))


// document.writeln("<br>Function Raport 5")
// const raport5= (lulusUjian,lulusAbsen)=>{
//     if((lulusUjian>=70 && lulusAbsen>=80) == true){
//         HR4 = "<br>lulus<br>"
//     } else{
//         HR4 = "<br>Tidak Lulus <br>"
//     }
//     return HR4
// }
// document.writeln(raport5(lulusUjian,lulusAbsen))

// document.writeln("<br>Function Raport Siswa")
// const Siswa = raport5(lulusUjian,lulusAbsen)
// document.writeln(Siswa)



//Function BMI Calculator

function bmiCalculator(){
    var bmiCalcCount
    const height = parseInt(document.getElementById('heightInput').value)
    const weight = parseInt(document.getElementById('weightInput').value)

    bmiCalcCount = (weight/Math.pow((height/100),2)).toFixed(2)
    document.getElementById('resultBMI').textContent = "Your BMI point is "+bmiCalcCount

    if(bmiCalcCount>=18.5 && bmiCalcCount<=25){
        document.getElementById('resultIndicator').textContent = "You are Healthy!"
    } else if(bmiCalcCount<16){
        document.getElementById('resultIndicator').textContent = "You are too Thin!"
    } else if(bmiCalcCount<18.5){
        document.getElementById('resultIndicator').textContent = "You are Thin!"
    } else if(bmiCalcCount<35){
        document.getElementById('resultIndicator').textContent = "You are overweight!"
    } else{
        document.getElementById('resultIndicator').textContent = "You are Obesity!"
    }
}
