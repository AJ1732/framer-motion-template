const GradCard = ({ children }) => {
  return (
    <div className="before:bg-gradient before:animate-rotation after:animate-rotation after:bg-gradient relative aspect-[1/1.5] h-full rounded-lg bg-zinc-900 px-4 py-3 font-bold text-primary-100 before:absolute before:-inset-0.5 before:-z-10 before:rounded-lg after:absolute after:-inset-0.5 after:-z-10 after:rounded-lg after:blur-[3.5rem]">
      {children}
    </div>
  );
};
export default GradCard;
