import Button from "../components/Button";

export default function Home({ setShow, nextTitle }) {
  return (
    <main className="lineaireSimple">
      <Button setShow={setShow} nextTitle={nextTitle} />
    </main>
  );
}

Home.propTypes = {
  ...Button.propTypes,
};
