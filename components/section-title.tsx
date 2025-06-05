interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="text-3xl font-semibold text-blue-700 my-6 border-b-2 border-blue-200 pb-2">
      {title}
    </h2>
  );
};
export default SectionTitle;
