import { LineWave } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LineWave
        height="150"
        width="150"
        color="geen"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
    />
  );
};
