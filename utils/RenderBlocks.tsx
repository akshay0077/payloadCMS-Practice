import { blocks } from "../blocks/blockList";

import React from "react";

const RenderBlocks = ({ item }:any) => {
    const [{ layout }] = item
  return(
    <div>
    {layout.map((block:any, i:any) => {
      const Block = blocks[block.blockType];
      if (Block) {
        return <Block key={i} {...block} />;
      }
      return null;
    })}
  </div>
  )
};

export default RenderBlocks;
