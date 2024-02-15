import { Head_decor } from "./decorate";
import { BalihoIc } from "./balihoIc";

export const Head = () => {
  return (
    <>
      <div className="head">
        <Head_decor></Head_decor>
        <div className="logo"></div>
        <h1>Redekto</h1>
        <h3>red is our spirit</h3>
        <h3>elektro is our speed</h3>
      </div>
      <BalihoIc></BalihoIc>
    </>
  );
};
