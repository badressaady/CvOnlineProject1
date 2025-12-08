import { useNavigate } from "react-router-dom";
import { useCv } from "../context/CvContext";
import Template1 from "../components/templatesDesigns/template1";
import Template2 from "../components/templatesDesigns/template2";
import Template3 from "../components/templatesDesigns/template3";
import Carousel from "../components/ui/carousel";

export default function Slider() {
  const navigate = useNavigate();
  const { setSelectedTemplate } = useCv();

  // NEW: slides array compatible with your Carousel
  const slides = [
    {
      id: "template1",
      title: "Template 1",
      button: "Choose Template 1",
      component: <Template1 />,
      onClick: () => {choose("template1")},
    },
    {
      id: "template2",
      title: "Template 2",
      button: "Choose Template 2",
      component: <Template2 />,
      onClick: () => choose("template2"),
    },
    {
      id: "template3",
      title: "Template 3",
      button: "Choose Template 3",
      component: <Template3 />,
      onClick: () => choose("template3"),
    }
  ];

  function choose(templateId) {
    setSelectedTemplate(templateId);
    navigate("/templates");
  }

  // Convert slides for Carousel format
  const formattedSlides = slides.map((s) => ({
    title: s.title,
    button: s.button,
    src: "",       // not used, but required by Carousel
    onClick: s.onClick,
    component: s.component,  // we inject the template component here
  }));

  return (
    <div className="flex justify-center items-center pb-60">
      <Carousel slides={formattedSlides} />
    </div>
  );
}
