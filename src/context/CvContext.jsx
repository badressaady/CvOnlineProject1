import React,{createContext,useContext,useEffect,useState} from "react";    
import defaultData  from '../utils/defaultData';
import { templateDefaults } from "../utils/templateDefaults";

 export const CvContext = createContext(); 

 export const CvProvider =  ({ children }) => {
    const [cvData, setCvData ] = useState(() => {
        try{
            const saved = localStorage.getItem("cv-data");
            return saved ? JSON.parse(saved) : defaultData;
        }catch(err){ 
            console.err("Erreur parse LocalStorage",err);
            return defaultData;
        } 
    });
            const [selectedTemplate, setSelectedTemplate] = useState(
        localStorage.getItem("selected-template") || "template1"
        );

        const [templateSettings, setTemplateSettings] = useState(() => {
        try {
            const saved = localStorage.getItem("template-settings");
            return saved? JSON.parse(saved) : templateDefaults.template1;
            }catch(err){
                console.log("Erreur parse LocalStorage",err);
                return templateDefaults.template1;
            } 
        });
        useEffect(() => {
        localStorage.setItem("template-settings", JSON.stringify(templateSettings));
        }, [templateSettings]); 
        useEffect(() => {
        try{
            localStorage.setItem("cv-data",JSON.stringify(cvData)) // converite l'objet cvdata en string
        }catch(err){
            console.error("Erreur sauvegarde localStorage ", err);   
        }
    },[cvData]); 
    const updatePersonalInfo = (partial) => { // l'entrer va etre comme ca (name: "Mohammmed ")
        setCvData((prev) => ({...prev, personalInfo: {...prev.personalInfo , ...partial}}))
    };
    const updateSummary = (text) => setCvData((prev)=>({ ...prev,summary: text}))  ;
    const setEducation = (educationArray) => setCvData((prev) =>({...prev,education: educationArray}));
    const setExperience = (experienceArray) => setCvData((prev) => ({ ...prev, experience: experienceArray }));
    const setSkills = (skillsArray) => setCvData((prev) => ({ ...prev, skills: skillsArray }));
    const setLanguages = (languagesArray) => setCvData((prev) => ({ ...prev, languages: languagesArray }));

    const updateMeta = (partialMeta) => setCvData((prev) => ({ ...prev, meta: { ...prev.meta, ...partialMeta } }));

    const resetCv = () => {
        setCvData(defaultData),
        localStorage.removeItem("cv-data");
    };
    const updateTemplate = (partial) => {
   setTemplateSettings(prev => ({ ...prev, ...partial }));
   }; 
   const resetTemplate=()=>{
    setTemplateSettings(templateDefaults.template1);
    localStorage.removeItem("template-settings");
   }
    
    const contextvalue = {
        cvData,
        updatePersonalInfo,
        updateSummary,
        setEducation,
        setExperience,
        setSkills,
        setLanguages,
        updateMeta,
        resetCv,
        selectedTemplate,
        setSelectedTemplate,
        templateSettings,
        setTemplateSettings,
        updateTemplate,
        resetTemplate
        
    }
    return(
        <CvContext.Provider value={contextvalue} >   
        {children}
        </CvContext.Provider> 
    )
};
export const useCv = () => {   //useCv a sortcut to access the context
    const context = useContext(CvContext);
    if (!context) {
        throw new Error('useCv doit être utilisé à l\'intérieur d\'un CvProvider');
    }
    return context;
};