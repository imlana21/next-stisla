import Error403Component from "@components/error/403";

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