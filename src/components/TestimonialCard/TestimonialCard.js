import css from "./TestimonialCard.module.css";
var cn = require("classnames");

export default function TestimonialCard({
  name = "Firstname Lastname",
  jobTitle = "Job Title",
  testimonial = "Testimonial text goes here. Lorem ipsum testimonial sit amet, constructor anti-phishing leet.",
  photo = "null",
}) {
  return (
    <div className={cn(css.card)}>
      <img
        className={cn(css.testimonialImg)}
        alt={"A photo of " + name}
        src={photo}
      ></img>
      <h4 className={cn(css.testimonialName)}>{name}</h4>
      <p className={cn(css.testimonialJobTitle)}>{jobTitle}</p>
      <p className={cn(css.testimonialText)}>{testimonial}</p>
    </div>
  );
}
