import Clock from 'react-live-clock';

const ClockDisplay = () => {
  return (
    <Clock format={'h:mm:ssa'} ticking={true} />
  );
};

export default ClockDisplay;
