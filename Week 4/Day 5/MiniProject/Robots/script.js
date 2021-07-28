const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image:'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image:'https://robohash.org/10?200x200'
    }
    ];

    console.log(robots[2]['id']);

    let cards = document.getElementsByClassName("cards");
    let test = document.getElementById("1");
    let test2 = document.getElementById("2");
    let test3 = document.getElementById("3");
    let test4 = document.getElementById("4");
    let test5 = document.getElementById("5");
    let test6 = document.getElementById("6");
    let test7 = document.getElementById("7");
    let test8 = document.getElementById("8");
    let test9 = document.getElementById("9");
    let fname = document.getElementById("name");
    let mail = document.getElementById("mail");
    let display = document.getElementsByClassName("display")


console.log(test4.children[0].src)
console.log(robots[1]['image'])
if (cards[1]['id'] == robots[1]['id']){
    console.log("ok")
    test.children[0].innerHTML = `<img src='${robots[0]['image']}' height='200px' width='200px'>`
    test.children[1].innerHTML = robots[0]['name'] 
    test.children[2].innerHTML = robots[0]['email']
}
if (cards[2]['id'] == robots[2]['id']){
    console.log(test2.children[1])
    test2.children[0].innerHTML = `<img src='${robots[1]['image']}' height='200px' width='200px'>`
    test2.children[1].innerHTML = robots[1]['name']
    test2.children[2].innerHTML = robots[1]['email'] 
}
if (cards[3]['id'] == robots[3]['id']){
    console.log("ok")
    test3.children[0].innerHTML = `<img src='${robots[2]['image']}' height='200px' width='200px'>`
    test3.children[1].innerHTML = robots[2]['name']
    test3.children[2].innerHTML = robots[2]['email']
}

if (cards[4]['id'] == robots[4]['id']){
    console.log("ok")
    test4.children[0].innerHTML = `<img src='${robots[3]['image']}' height='200px' width='200px'>`
    test4.children[1].innerHTML = robots[3]['name'] 
    test4.children[2].innerHTML = robots[3]['email']
}
if(cards[5]['id'] == robots[5]['id']){
    console.log("ok")
    test5.children[0].innerHTML = `<img src='${robots[4]['image']}' height='200px' width='200px'>`
    test5.children[1].innerHTML = robots[4]['name'] 
    test5.children[2].innerHTML = robots[4]['email']
}
if(cards[6]['id'] == robots[6]['id']){
    console.log("ok")
    test6.children[0].innerHTML = `<img src='${robots[5]['image']}' height='200px' width='200px'>`
    test6.children[1].innerHTML = robots[5]['name'] 
    test6.children[2].innerHTML = robots[5]['email']
}
if(cards[7]['id'] == robots[7]['id']){
    console.log("ok")
    test7.children[0].innerHTML = `<img src='${robots[6]['image']}' height='200px' width='200px'>`
    test7.children[1].innerHTML = robots[6]['name']
    test7.children[2].innerHTML = robots[6]['email'] 
}
if(cards[8]['id'] == robots[8]['id']){
    console.log("ok")
    test8.children[0].innerHTML = `<img src='${robots[7]['image']}' height='200px' width='200px'>`
    test8.children[1].innerHTML = robots[7]['name']
    test8.children[2].innerHTML = robots[7]['email'] 
}

// cards[8].style = "display: none"
// if(cards[9]['id'] == robots[9]['id']){
//     console.log("ok")
//     test9.children[0].innerHTML = `<img src='${robots[8]['image']}' height='200px' width='200px'>`
//     test9.children[1].innerHTML = robots[8]['name']
//     test9.children[2].innerHTML = robots[8]['email'] 
// };
// if(cards[9]['id'] == robots[9]['id']){
//     console.log("ok")
//     test9.children[1].innerHTML = robots[8]['name'] 
// }
// else{
//     console.log("okkk")
// }





let searchbox = document.getElementById("search");
let roboname = [robots[0]['name'],robots[1]['name'],robots[2]['name'],
robots[3]['name'],robots[4]['name'],robots[5]['name'],robots[6]['name'],
robots[7]['name'], robots[8]['name']].map(function(v) {
    return v.toLowerCase();
});
// newRobot = roboname.split();
// console.log(newRobot);
console.log(roboname);

    searchbox.addEventListener("keypress", result);

function result(e){
    if(e.keyCode === 13){
        const value = e.target.value.toLowerCase();
        var arrayLength = roboname.length;
        for (var i = 0; i < arrayLength; i++) {
            if(value === roboname[i]){
            console.log(roboname[i])
        }
        }
        
    }
};


