type Props = {
  children: React.ReactNode | JSX.Element;
};

const Dimmer = ({ children }: Props) => {
  return (
    <div className="fixed w-full h-full bg-white left-0 top-0 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Dimmer;
