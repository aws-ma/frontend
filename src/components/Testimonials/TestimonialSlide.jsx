import "./testimonialSlide.css";
const TestimonialSlide = ({ text, name, img }) => {
    return (
        <div className='t-container'>
            <img src={img} alt='' />
            <div className='t-text'>{text}</div>
            <p>{name}</p>
        </div>
    );
};
export default TestimonialSlide;
