import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
	resources: {
		en: {
			translation: {
                language : "language",
                hello : "hello",
                intro : "WHO WE ARE",
                header : "About Us",
                missionText : "Our Mission is to bring gaming to everyone",
                mission : "Our Mission"
                
            },
		},
		fr: {
			translation:{
                language : "Langue",
                missionText : "Notre mission est de rendre les jeux accessibles à tous.",
                hello : "konichiwa",
                intro : "QUI NOUS SOMMES",
                header : "A propos de nous",
                mission : "Notre mission"
            },
		},
	},
	lng: localStorage.getItem("lng") || "en",
});


export default i18next;