import RenderBlocks from "../../../utils/RenderBlocks";

import React from "react";
import axios from "axios";

 
export default async function Page({ params }) {
  const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+`/api/pages?where[slug][equals]=${params.slug}`); 

  return (
    <div>
      <RenderBlocks item={res.data.docs}/>
    </div>
  );
}

