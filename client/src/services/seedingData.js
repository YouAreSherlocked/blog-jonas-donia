 export const worksections = [
   'Programming',
   'Graphic Design', 
   'Illustrations', 
   'Photography'
 ];
 
 export const technologies = [
   'Adobe Illustrator', 
   'Adobe InDesign', 
   'Adobe Photoshop', 
   'Adobe After Effects',
   'After Premiere Pro',
   'Adobe Lightroom',
   'Adobe XD',
   'React Js',
   'Vue Js',
   'Javascript',
   'Asp.Net',
   'Laravel',
   'PHP',
   'Redux'
 ];
 
 export const projects = [
   {
     category: worksections[1],
     id: 1,
     title: "Mirayon",
     description: "Mirayon is a group of musicians. They produce post-rock, experimental music.",
     technologies: [
       technologies[0]
     ],
     image: require("../assets/img/Graphic Design/mirayon/mirayon_logo_4ways.jpg"),
     thumbnail: require("../assets/img/Graphic Design/mirayon/thumbnail.jpg"),
     imgs: [
       {
         text: "img description",
         img: require("../assets/img/Graphic Design/mirayon/mirayon_logo_main-01.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Graphic Design/mirayon/mirayon_logo_font.png")
       }  
     ]
   },
   {
     category: worksections[1],
     id: 2,
     title: "JG Genesis",
     description: "JG Genesis ist eine Jugendgruppe, welche neben wöchentlichen Gemeinschafts- und Inputabende regelmässig auch Themenabende und Camps anbietet.",
     technologies: [
       technologies[1],
       technologies[2]
     ],
     image: require("../assets/img/Graphic Design/genesis/sledgecamp_flyer_19.jpg"),
     thumbnail: require("../assets/img/Graphic Design/genesis/sledgecamp_flyer_19_illu.jpg"),
     imgs: [
       {
         text: "img description",
         img: require("../assets/img/Graphic Design/genesis/genesistown_2_flyer_v2.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Graphic Design/genesis/flyer kleidertausch deutsch v2.jpg")
       }
     ]
   },
   {
     category: worksections[1],
     id: 3,
     title: "Custodigit",
     description: "Custodigit ist ein Crypto Wallet Startup welches einen Koplettauftritt benötigte.",
     technologies: [
       technologies[0],
       technologies[1],
       technologies[6]
     ],
     image: require("../assets/img/Graphic Design/custodigit/custodigit_logo_icon.jpg"),
     thumbnail: require("../assets/img/Graphic Design/custodigit/thumbnail4.jpg"),
     imgs: [
       {
         text: "img description",
         img: require("../assets/img/Graphic Design/custodigit/thumbnail2.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Graphic Design/custodigit/custodigit_product.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Graphic Design/custodigit/custodigit_illus.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Graphic Design/custodigit/custodigit_logo_ideas.jpg")
       }
     ]
   },
   {
     category: worksections[2],
     id: 4,
     title: "1 Day Designer Challenge",
     description: "Immer wieder mal findet im Apps Team eine 1 Tag-Designer Challenge statt. In dieser Challenge ging es darum ein Plattencover zu gestalten.",
     technologies: [
       technologies[2]
     ],
     image: require("../assets/img/Illustrations/designerchallenge/illustration_small.jpg"),
     thumbnail: require("../assets/img/Illustrations/designerchallenge/illustration_small.jpg"),
     imgs: [
       {
         text: "img description",
         img: require("../assets/img/Illustrations/designerchallenge/illustration_small_part1.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Illustrations/designerchallenge/illustration_small_part2.jpg")
       }
     ]
   },
   {
     category: worksections[2],
     id: 5,
     title: "JG Genesis",
     description: "Description of test1",
     technologies: [
       technologies[0],
       technologies[2]
     ],
     image: require("../assets/img/Illustrations/genesis/thumbnail.jpg"),
     thumbnail: require("../assets/img/Illustrations/genesis/thumbnail.jpg"),
     imgs: [
       {
         text: "img description",
         img: require("../assets/img/Illustrations/genesis/basics_beamer-crop-u2955.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Illustrations/genesis/genesis_stories_logo_v2-crop-u3554.jpg")
       }
     ]
   },
   {
     category: worksections[2],
     id: 6,
     title: "Apps Team",
     description: "Description of test1",
     technologies: [
       technologies[1],
       technologies[2]
     ],
     image: require("../assets/img/Illustrations/appsteam/apps_team_comic1_1.jpg"),
     thumbnail: require("../assets/img/Illustrations/appsteam/thumbnail.jpg"),
     imgs: [
       {
         text: "img description",
         img: require("../assets/img/Illustrations/appsteam/apps_team_comic.jpg")
       }
     ]
   },
   {
     category: worksections[0],
     id: 7,
     title: "Zoom",
     description: "Zoom ist eine Webapp um das Wissen über Kunden und ihre Zahlungsgewohnheiten zu testen.",
     technologies: [
       technologies[8]
     ],
     image: require("../assets/img/programming/zoom/zoom.jpg"),
     thumbnail: require("../assets/img/programming/zoom/zoom.jpg"),
     imgs: [
       {
         text: "img description",
         img: require("../assets/img/programming/zoom/zoom_2.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/programming/zoom/zoom_3.jpg")
       }
     ]
   },
   {
     category: worksections[0],
     id: 8,
     title: "Digital Business Carreer",
     description: "DBC ist ein Jobportal um bei Startups eine Arbeitsstelle zu finden.",
     technologies: [
       technologies[7],
       technologies[13]
     ],
     image: require("../assets/img/programming/dbc/dbc.jpg"),
     thumbnail: require("../assets/img/programming/dbc/dbc.jpg"),
     imgs: [
       {
         text: "img description",
         img: require("../assets/img/programming/dbc/dbc_2.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/programming/dbc/dbc_3.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/programming/dbc/dbc_4.jpg")
       }
     ]
   },
   {
     category: worksections[0],
     id: 9,
     title: "Fit Adviser",
     inProgress: true,
     description: "Fitadviser bietet Sport- und Fitnessberatung an und brauchte zusätzlich zur bereits bestehenden Webseite breitgefächerte Adminfunktionen.",
     technologies: [
       technologies[8],
       technologies[11],
       technologies[12]
     ],
     image: require("../assets/img/programming/fitadviser/fitadviser.jpg"),
     thumbnail: require("../assets/img/programming/fitadviser/fitadviser.jpg"),
     imgs: [
       
     ]
   },
   {
     category: worksections[0],
     id: 10,
     title: "Portfolio",
     description: "Portfolio um einen Überblick von erstellten Arbeiten darzustellen.",
     technologies: [
       technologies[7],
       technologies[13]
     ],
     image: require("../assets/img/programming/portfolio/portfolio.jpg"),
     thumbnail: require("../assets/img/programming/portfolio/portfolio.jpg"),
     imgs: [
       {
         text: "img description",
         img: require("../assets/img/programming/portfolio/portfolio_2.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/programming/portfolio/portfolio_3.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/programming/portfolio/portfolio_4.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/programming/portfolio/portfolio_5.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/programming/portfolio/portfolio_dark.jpg")
       }
     ]
   },
   {
     category: worksections[3],
     id: 11,
     title: "Productions",
     description: "",
     technologies: [
       technologies[5],
       technologies[2]
     ],
     image: require("../assets/img/Photography/productions/thumbnail.jpg"),
     thumbnail: require("../assets/img/Photography/productions/thumbnail.jpg"),
     imgs: [
       {
         text: "img description",
         img: require("../assets/img/Photography/productions/studientage-2018-36.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/productions/TIM_3228.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/productions/weihnachts-gd-18-70.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/productions/weihnachts-gd-18-94.jpg")
       }
     ]
   },
   {
     category: worksections[3],
     id: 12,
     title: "Wedding Lena & Joni",
     description: "",
     technologies: [
       technologies[5],
       technologies[2]
     ],
     image: require("../assets/img/Photography/lenajoni/thumbnail.jpg"),
     thumbnail: require("../assets/img/Photography/lenajoni/thumbnail.jpg"),
     imgs: [
       {
         text: "img description",
         img: require("../assets/img/Photography/lenajoni/wedding-lena-joni-185.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/lenajoni/wedding-lena-joni-209.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/lenajoni/wedding-lena-joni-202.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/lenajoni/wedding-lena-joni-147.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/lenajoni/wedding-lena-joni-167.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/lenajoni/wedding-lena-joni-213.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/lenajoni/wedding-lena-joni-218.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/lenajoni/wedding-lena-joni-194.jpg")
       }
     ]
   },
   {
     category: worksections[3],
     id: 13,
     title: "Free Time",
     description: "",
     technologies: [
       technologies[5],
       technologies[2]
     ],
     image: require("../assets/img/Photography/freetime/thumbnail.jpg"),
     thumbnail: require("../assets/img/Photography/freetime/thumbnail.jpg"),
     imgs: [
       {
         text: "img description",
         img: require("../assets/img/Photography/freetime/DSC_6495.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/freetime/DSC_6535.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/freetime/TIM_0798.jpg")
       }
     ]
   },
   {
     category: worksections[3],
     id: 14,
     title: "People",
     description: "",
     technologies: [
       technologies[5],
       technologies[2]
     ],
     image: require("../assets/img/Photography/people/thumbnail.jpg"),
     thumbnail: require("../assets/img/Photography/people/thumbnail.jpg"),
     imgs: [
       {
         text: "img description",
         img: require("../assets/img/Photography/people/humans-of-biel-color.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/people/P1064610.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/people/MLR_6624.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/people/TIM_9579.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/people/wedding-lena-joni-220.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/people/studientage-2018-87.jpg")
       }
     ]
   },
   {
     category: worksections[3],
     id: 15,
     title: "holidays",
     description: "",
     technologies: [
       technologies[5],
       technologies[2]
     ],
     image: require("../assets/img/Photography/holidays/thumbnail.jpg"),
     thumbnail: require("../assets/img/Photography/holidays/thumbnail.jpg"),
     imgs: [
       {
         text: "img description",
         img: require("../assets/img/Photography/holidays/P4170055.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/holidays/P4190008.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/holidays/P4160003.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/holidays/P7220897.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/holidays/MLR_0536.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/holidays/MLR_0806.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/holidays/P4160320.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Photography/holidays/P4170112 (2)-Bearbeitet.jpg")
       }
     ]
   },
   {
     category: worksections[1],
     id: 16,
     title: "Campaign Analytics",
     description: "Logo Design für Daten Analyse Team.",
     technologies: [
       technologies[0],
       technologies[1],
       technologies[6]
     ],
     image: require("../assets/img/Graphic Design/can/CAN_Logo_V2.jpg"),
     thumbnail: require("../assets/img/Graphic Design/can/thumbnail.jpg"),
     imgs: [
       {
         text: "img description",
         img: require("../assets/img/Graphic Design/can/can_logo_ideas.jpg")
       },
       {
         text: "img description",
         img: require("../assets/img/Graphic Design/can/Campaign_Analytics_Wallpaper_V3_SMALL.jpg")
       }
     ]
   },
 ];