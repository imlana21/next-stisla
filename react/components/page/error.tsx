import Error403Component from "@components/error/403";
import Error404Component from "@components/error/404";
import Error500Component from "@components/error/500";
import Error503Component from "@components/error/503";


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