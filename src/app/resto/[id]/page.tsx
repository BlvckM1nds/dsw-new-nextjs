import { Fragment } from "react";

export default function RestoCategory({ params }: any) {
  return (
    <Fragment>
      <p className="text-3xl font-bold">
        {params.id}
      </p>
    </Fragment>
  );
};