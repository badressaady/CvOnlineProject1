import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

export default function CVDocument({ cvData, templateSettings }) {
  const info = cvData?.personalInfo || {};
  const summary = cvData?.summary || "";

  const education = cvData?.education || [];
  const experience = cvData?.experience || [];
  const skills = cvData?.skills || [];
  const languages = cvData?.languages || [];

  const defaults = {
    titleColor: templateSettings.titleColor || "#B73A56",
    headerColor: templateSettings.headerColor || "#E8DED6",
    backgroundColor: templateSettings.backgroundColor || "#F7F3EE",
    sideColor: templateSettings.sideColor || "#EAD1D1",
    inputColor: templateSettings.inputColor || "#2E2E2E",
  };

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: defaults.backgroundColor,
      fontFamily: "Helvetica",
    },

    // LEFT SIDEBAR
    leftSide: {
      width: "38%",
      backgroundColor: defaults.sideColor,
      paddingTop: 140,
      paddingLeft: 30,
      paddingRight: 20,
    },

    // TOP HEADER BLOCK (right side)
    headerBlock: {
      position: "absolute",
      top: 60,
      left: 170,
      width: "70%",
      height: 110,
      backgroundColor: defaults.headerColor,
      padding: 20,
      borderRadius: 8,
    },

    name: {
      fontSize: 20,
      fontWeight: "bold",
      color: defaults.titleColor,
    },

    jobTitle: {
      fontSize: 12,
      color: defaults.titleColor,
      marginTop: 4,
    },

    // FIXED PHOTO POSITION — inside the sidebar
    photoWrapper: {
      position: "absolute",
      top: 40,
      left: 45,
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: "white",
      overflow: "hidden",
      border: "3px solid white",
      zIndex: 999,
    },

    photo: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    // RIGHT CONTENT
    rightSide: {
      width: "62%",
      paddingTop: 200,
      paddingLeft: 40,
      paddingRight: 30,
    },

    sectionTitle: {
      fontSize: 12,
      fontWeight: "bold",
      color: defaults.titleColor,
      marginTop: 20,
      marginBottom: 4,
    },

    text: {
      fontSize: 10,
      color: defaults.inputColor,
      marginBottom: 4,
      lineHeight: 1.5,
    },

    listItem: {
      fontSize: 10,
      color: defaults.inputColor,
      marginBottom: 6,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* PHOTO — FIXED POSITION + RELIABLE BASE64 */}
        {templateSettings.showPhoto && info.profileImage ? (
          <View style={styles.photoWrapper}>
            <Image src={info.profileImage} style={styles.photo} />
          </View>
        ) : null}

        {/* SIDEBAR */}
        <View style={styles.leftSide}>
          <Text style={styles.sectionTitle}>CONTACT</Text>
          <Text style={styles.text}>Email: {info.email || "—"}</Text>
          <Text style={styles.text}>Téléphone: {info.phone || "—"}</Text>
          <Text style={styles.text}>Adresse: {info.address || "—"}</Text>

          <Text style={styles.sectionTitle}>LANGUES</Text>
          {languages.length > 0 ? (
            languages.map((lang, i) => (
              <Text key={i} style={styles.text}>
                {lang.name} — {lang.level}
              </Text>
            ))
          ) : (
            <Text style={styles.text}>Aucune langue ajoutée</Text>
          )}

          <Text style={styles.sectionTitle}>COMPÉTENCES</Text>
          {skills.length > 0 ? (
            skills.map((s, i) => (
              <Text key={i} style={styles.text}>• {s}</Text>
            ))
          ) : (
            <Text style={styles.text}>Aucune compétence ajoutée</Text>
          )}
        </View>

        {/* HEADER BLOCK */}
        <View style={styles.headerBlock}>
          <Text style={styles.name}>
            {(info.firstName || "Prénom")} {(info.lastName || "Nom")}
          </Text>
          <Text style={styles.jobTitle}>
            {info.positionTitle || "Intitulé du poste"}
          </Text>
        </View>

        {/* RIGHT SECTION */}
        <View style={styles.rightSide}>
          <Text style={styles.sectionTitle}>PROFIL PROFESSIONEL</Text>
          <Text style={styles.text}>{summary || "Votre résumé apparaîtra ici."}</Text>

          <Text style={styles.sectionTitle}>EXPÉRIENCE PROFESSIONNELLE</Text>
          {experience.length > 0 ? (
            experience.map((exp, i) => (
              <View key={i} style={{ marginBottom: 10 }}>
                <Text style={styles.listItem}>{exp.role} — {exp.company}</Text>
                <Text style={styles.text}>{exp.from} - {exp.to}</Text>
                <Text style={styles.text}>{exp.description}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.text}>Aucune expérience ajoutée</Text>
          )}

          <Text style={styles.sectionTitle}>ÉDUCATION</Text>
          {education.length > 0 ? (
            education.map((edu, i) => (
              <View key={i} style={{ marginBottom: 10 }}>
                <Text style={styles.listItem}>{edu.degree} — {edu.school}</Text>
                <Text style={styles.text}>{edu.from} — {edu.to}</Text>
                <Text style={styles.text}>{edu.description}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.text}>Aucune éducation ajoutée</Text>
          )}
        </View>

      </Page>
    </Document>
  );
}
