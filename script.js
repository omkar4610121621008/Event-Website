const sportEvents = [ 
    { "name": "Football", "image": "https://www.thefa.com/-/media/thefacom-new/images/rules-and-regulations/news-items/fa-charges---july-2022-800.ashx?cw=800&ch=450&resizemode=crop&jq=100&hash=E33EEC6B3AA689F77A47E2297868D5938F740D3C", "description": "Friday Night Lights: O's vs N's (Kick-Off 7pm), Glebe FC Clubhouse & Grounds, Foxbury Avenue", "date": "14/10/22", "price": "£4.99" }, 
    { "name": "Basketball", "image": "https://static01.nyt.com/images/2021/08/03/sports/03olympics-basketball1/03olympics-basketball1-videoSixteenByNineJumbo1600.jpg", "description": "3hr Saturday Basketball in Stratford, come and enjoy!, Carpenters & Dockland Centre, 98 Gibbins Rd", "date": "15/10/22", "price": "£4.99" }, 
    { "name": "Baseball", "image": "https://media.npr.org/assets/img/2021/12/01/gettyimages-1350959374_slide-cfc68139d5d293865e924e213d385afb01169b67.jpg", "description": "MLB London 2023, London Stadium", "date": "16/10/22", "price": "£3.99" }, 
    { "name": "Marathon", "image": "https://ichef.bbci.co.uk/live-experience/cps/1024/cpsprodpb/4382/production/_126928271_gettyimages-1243666073.jpg", "description": "The Maidstone Half Marathon returns!, Mote Park, Mote Ave", "date": "17/10/22", "price": "£0.99" }, 
    { "name": "Table Tennis", "image": "https://dd20lazkioz9n.cloudfront.net/wp-content/uploads/2021/09/wttleadpic.jpg", "description": "PERIVALE TABLE TENNIS CLUB PLAYS SOON!, Perivale Community Association", "date": "18/10/22", "price": "£4.99" }, 
    { "name": "Badminton", "image": "https://media.istockphoto.com/photos/asian-badminton-player-is-hitting-in-court-picture-id1094297362?k=20&m=1094297362&s=612x612&w=0&h=g97TLXkfGWpJ3SdQ4o4IUyt5IZ_uD-qfRwc5T0CwPcQ=", "description": "LEBC - Single Badminton Session from 1pm, Chobham Academy, 40 Cheering Ln", "date": "19/10/22", "price": "£3.99" }, 
    { "name": "Foosball", "image": "https://robbreport.com/wp-content/uploads/2021/03/ESPN_Foosball.jpg?w=1000", "description": "London Regional Championship 2022, Eversfield Cere", "date": "20/10/22", "price": "£0.99" }, 
    { "name": "Golfing", "image": "https://m.economictimes.com/thumb/msid-86802907,width-1200,height-900,resizemode-4,imgsize-63366/golf-1-istock.jpg", "description": "Phil Millington CHarity Golf Day, Lamberhurst Golf Club - Kent", "date": "21/10/22", "price": "£10.99" }, 
    { "name": "Cricket", "image": "https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg", "description": "FREE indoor cricket in central London, Fitzrovia, London", "date": "22/10/22", "price": "£3.99" }, 
    { "name": "Boxing", "image": "https://talksport.com/wp-content/uploads/sites/5/2022/09/FloydMayweatherDeji.jpg?strip=all&quality=100&w=1200&h=800&crop=1", "description": "Deji vs Floyd Mayweather, Global Titans Fight Series, Dubai", "date": "23/10/22", "price": "£6.99" }, 
    { "name": "Gymnastics", "image": "https://hips.hearstapps.com/cos.h-cdn.co/assets/16/31/2560x1707/gallery-1470589651-gettyimages-586427236.jpg?resize=480:*", "description": "London Festival of Gymnastics, The Brentwood Centre, Doddinghurst Rd", "date": "24/10/22", "price": "£1.99" } ]

const main = document.querySelector('.main')

let createEvent = ({name, image, description, date, price}) => {

    const event = document.createElement('div')
    event.classList.add('event-card')

    const eventName = document.createElement('h2')              //creating container for name and background image
    eventName.classList.add('event-title')
    eventName.append(name)
    eventName.style.backgroundImage = `url("${image}")`
    eventName.style.backgroundSize = "cover"

    const ddpContainer = document.createElement('div')          //creating container for description, date, price and checkboxes
    ddpContainer.classList.add('description-date-price')

    const eventDescription = document.createElement('p')        //creating description element and parsing in description argument from array of objects
    eventDescription.classList.add('description-event')
    eventDescription.append(description)
    ddpContainer.appendChild(eventDescription)

    const eventDate = document.createElement('p')               //creating date element and parsing in date argument from array of objects
    eventDate.classList.add('date')
    eventDate.append(date)
    ddpContainer.appendChild(eventDate)

    const eventPrice = document.createElement('p')              //creating price element and parsing in price argument from array of objects
    eventPrice.classList.add('price')
    eventPrice.append(price)
    ddpContainer.appendChild(eventPrice)

    const checkContainer = document.createElement('div')        //creating container for checkboxes
    checkContainer.classList.add('check-div')
    let x = document.createElement("INPUT");                    //creating three checkboxes for each option
    x.setAttribute("type", "checkbox");

    let y = document.createElement("INPUT");
    y.setAttribute("type", "checkbox");

    let z = document.createElement("INPUT");
    z.setAttribute("type", "checkbox");

    const going = document.createElement("p")
    going.classList.add("going")
    const textNode = document.createTextNode("Going");
    going.appendChild(textNode);

    const notGoing = document.createElement("p")
    notGoing.classList.add("not-going")
    const textNode2 = document.createTextNode("Not going");
    notGoing.appendChild(textNode2);

    const definetly = document.createElement("p")
    definetly.classList.add("definetly")
    const textNode3 = document.createTextNode("definetly");
    definetly.appendChild(textNode3);

    checkContainer.append(x)
    checkContainer.appendChild(going)
    checkContainer.append(y)
    checkContainer.appendChild(notGoing)                        //Appending everything together
    checkContainer.append(z)
    checkContainer.appendChild(definetly)


    event.appendChild(eventName)
    event.appendChild(ddpContainer)
    event.appendChild(checkContainer)

    main.appendChild(event)
}

sportEvents.forEach(event => {
    createEvent(event);
})