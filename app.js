new Splide('.splide').mount()
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide')
  splide.mount()
})

const url1 = 'https://rickandmortyapi.com/api/character/1'

async function getRickAndMortyData1() {
  try {
    const res = await fetch(url1)
    const data = await res.json()
    document.getElementById('image1').src = data.image
    document.getElementById('name1').innerHTML = data.name
    document.getElementById('status1').innerHTML = data.status
    document.getElementById('species1').innerHTML = data.species
  } catch (error) {
    console.log(error)
  }
}
getRickAndMortyData1()
const url2 = 'https://rickandmortyapi.com/api/character/2'

async function getRickAndMortyData2() {
  try {
    const res = await fetch(url2)
    const data = await res.json()
    document.getElementById('image2').src = data.image
    document.getElementById('name2').innerHTML = data.name
    document.getElementById('status2').innerHTML = data.status
    document.getElementById('species2').innerHTML = data.species
  } catch (error) {
    console.log(error)
  }
}
getRickAndMortyData2()

const url3 = 'https://rickandmortyapi.com/api/character/3'

async function getRickAndMortyData3() {
  try {
    const res = await fetch(url3)
    const data = await res.json()
    document.getElementById('image3').src = data.image
    document.getElementById('name3').innerHTML = data.name
    document.getElementById('status3').innerHTML = data.status
    document.getElementById('species3').innerHTML = data.species
  } catch (error) {
    console.log(error)
  }
}
getRickAndMortyData3()

const url4 = 'https://rickandmortyapi.com/api/character/4'

async function getRickAndMortyData4() {
  try {
    const res = await fetch(url4)
    const data = await res.json()
    document.getElementById('image4').src = data.image
    document.getElementById('name4').innerHTML = data.name
    document.getElementById('status4').innerHTML = data.status
    document.getElementById('species4').innerHTML = data.species
  } catch (error) {
    console.log(error)
  }
}
getRickAndMortyData4()

const url5 = 'https://rickandmortyapi.com/api/character/5'

async function getRickAndMortyData5() {
  try {
    const res = await fetch(url5)
    const data = await res.json()
    document.getElementById('image5').src = data.image
    document.getElementById('name5').innerHTML = data.name
    document.getElementById('status5').innerHTML = data.status
    document.getElementById('species5').innerHTML = data.species
  } catch (error) {
    console.log(error)
  }
}
getRickAndMortyData5()

const url6 = 'https://rickandmortyapi.com/api/character/6'

async function getRickAndMortyData6() {
  try {
    const res = await fetch(url6)
    const data = await res.json()
    document.getElementById('image6').src = data.image
    document.getElementById('name6').innerHTML = data.name
    document.getElementById('status6').innerHTML = data.status
    document.getElementById('species6').innerHTML = data.species
  } catch (error) {
    console.log(error)
  }
}
getRickAndMortyData6()

const url7 = 'https://rickandmortyapi.com/api/character/7'

async function getRickAndMortyData7() {
  try {
    const res = await fetch(url7)
    const data = await res.json()
    document.getElementById('image7').src = data.image
    document.getElementById('name7').innerHTML = data.name
    document.getElementById('status7').innerHTML = data.status
    document.getElementById('species7').innerHTML = data.species
  } catch (error) {
    console.log(error)
  }
}
getRickAndMortyData7()

const url8 = 'https://rickandmortyapi.com/api/character/8'

async function getRickAndMortyData8() {
  try {
    const res = await fetch(url8)
    const data = await res.json()
    document.getElementById('image8').src = data.image
    document.getElementById('name8').innerHTML = data.name
    document.getElementById('status8').innerHTML = data.status
    document.getElementById('species8').innerHTML = data.species
  } catch (error) {
    console.log(error)
  }
}
getRickAndMortyData8()

const url9 = 'https://rickandmortyapi.com/api/character/9'

async function getRickAndMortyData9() {
  try {
    const res = await fetch(url9)
    const data = await res.json()
    document.getElementById('image9').src = data.image
    document.getElementById('name9').innerHTML = data.name
    document.getElementById('status9').innerHTML = data.status
    document.getElementById('species9').innerHTML = data.species
  } catch (error) {
    console.log(error)
  }
}
getRickAndMortyData9()
