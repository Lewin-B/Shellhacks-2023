type SpinnerProps = {
    trigger: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({trigger}) => {
    return trigger ? (
      <h1>Loading...</h1>
    ) : null;
  }

export default Spinner;