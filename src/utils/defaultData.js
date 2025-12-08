// src/utils/defaultData.js

const defaultData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    profileImage:"",// URL ou base64
    positionTitle: "", // Ex: "Full-Stack Developer"
  },

  summary: "",

  education: [
    // Exemple si tu veux un élément vide dès le début :
    // {
    //   id: crypto.randomUUID(),
    //   school: "",
    //   degree: "",
    //   from: "",
    //   to: "",
    //   description: ""
    // }
  ],

  experience: [
    // {
    //   id: crypto.randomUUID(),
    //   company: "",
    //   role: "",
    //   from: "",
    //   to: "",
    //   description: ""
    // }
  ],

  projects: [
    // {
    //   id: crypto.randomUUID(),
    //   title: "",
    //   description: "",
    //   link: ""
    // }
  ],

  skills: [],       // ["React", "JavaScript", "Python"]

  languages: [
    // { name: "English", level: "Advanced" }
  ]
};

export default defaultData;
