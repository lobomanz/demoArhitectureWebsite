getProjectPictures(id)
//sve slike određenog projekta po id-u tog projekta
let projectPicturesList = [
    '/images/copot_kuca_1.png',
    '/images/copot_kuca_2.png',
    '/images/copot_kuca_3.png',
    '/images/copot_kuca_4.png',
    '/images/copot_kuca_5.png',
]
getProjectRichText(id)
//za projekt richtext 
let projectRichText = `
<h1>Naslov</h1>
<p>Text text text</p>
<h2>Drugi naslov</h2>
<p>Text text text</p>
`;

getFirstPicturesList()
//prva slika svakog projekta
let firstPicturesList=[
	{
		id:1,
		image:"/images/copot_kuca_1.png"
	},
	{
		id:2,
		image:"/images/copot_kuca_1.png"
	},
]

getAllProjectsShortInfo()
//svi projekti sa prvom slikom i par info
let projectsShortInfo = [
    {
        id:1,
        image:"/images/copot_kuca_1.png",
        title:"Copot kuća",
        date:"22/07/2022",
        location:"Varaždin"
    },
    {
        id:2,
        image:"/images/copot_kuca_1.png",
        title:"Marko kuća",
        date:"22/05/2023",
        location:"Zagreb"
    }
]

getAllServicesShortInfo()
//sve usluge sa prvom slikom i par info
let servicesShortInfo = [
    {
        id:1,
        image:"/images/copot_kuca_1.png",
        title:"Idejni projekti"
    },
    {
        id:2,
        image:"/images/copot_kuca_1.png",
        title:"Elektrika"
    }
]

getServicePictures(id)
//sve slike određene usluge po id-u tog projekta
let servicePicturesList = [
    '/images/copot_kuca_1.png',
    '/images/copot_kuca_2.png',
    '/images/copot_kuca_3.png',
    '/images/copot_kuca_4.png',
    '/images/copot_kuca_5.png',
]
getServiceRichText(id)
//za usluge richtext 
let serviceRichText = `
<h1>Naslov</h1>
<p>Text text text</p>
<h2>Drugi naslov</h2>
<p>Text text text</p>
`;

getEmployes()
//lista sa slikom i dvije info zaposlenika
let employesList = [
    {
        image:'/images/vedran_vuletic.png',
        fullName:"Vedran Vuletić",
        title:"Voditelj ureda, direktor,Ovlašteni arhitekt, Ovl. arhitekt urbanist"
    },
    {
        image:'/images/deni_pavic.png',
        fullName:"Deni Pavić",
        title:"Vlasnik tvrtke, direktor"
    },
]
getReferences()
//reference sa godinom i stringom
let referencesList = [
    {
        year:"2021",
        title:"Eco-Friendly Housing - Private Investor - Main Solution - Main Project"
    },
    {
        year:"2023",
        title:"Private Investor - Main Solution - Main Project"
    },
]