type ShowMessageType = {
  message?: string;
};

export default function ShowMessage(props: ShowMessageType) {
  const { message } = props;

  return (
    message && (
      <section className="w-full text-sm mx-auto flex flex-row items-center justify-center ">
        {message}
      </section>
    )
  );
}
