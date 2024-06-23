const Bubble = ({ children }) => {
  return (
    <span className="font-poppins text-center text-5xl font-thin text-primary-300">
      {children.split("").map((child, idx) => (
        <span
          key={idx}
          // Using tailwindcss-selector-patterns plugin
          className="pattern-[+]:hover:font-medium pattern-[+]:hover:text-primary-200 pattern-[+2]:hover:font-light pattern-[-]:hover:font-medium pattern-[-2]:hover:font-light transition-all duration-500 hover:font-black hover:text-primary-100"
        >
          {child}
        </span>
      ))}
    </span>
  );
};
export default Bubble;
