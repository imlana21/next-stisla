import Error403Component from "react/stisla/component/error/403";
import Error404Component from "react/stisla/component/error/404";
import Error500Component from "react/stisla/component/error/500";
import Error503Component from "react/stisla/component/error/503";


export default function ErrorPageComponent() {
  return (
    <div>
      <div className="section-header">
        <h1>Error Page</h1>
      </div>
      <div className="container mt-5">
        <Error403Component />
      </div>
    </div>
  );
}