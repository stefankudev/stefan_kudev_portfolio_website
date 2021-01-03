import css from "./TestimonialCard.module.css";
var cn = require("classnames");

export default function TestimonialCard({
  name = "Dirk Grizzly",
  jobTitle = "Superstar Developer",
  testimonial = "Stefan helped sort our our back end in no time",
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
