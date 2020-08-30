import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import Sub_Header from "./Sub_Header";

const Header = () => {
  const [visi, setVisi] = useState("");

  return (
    <div style={{ display: "flex" }}>
      <div className="header_item_w">
        <button onClick={() => setVisi("Views")}>Views</button>
        <Sub_Header title="Views" display={visi} />
      </div>

      <div className="header_item_w">
        <button onClick={() => setVisi("Contacts")}>Contacts</button>
        <Sub_Header title="Contacts" display={visi} />
      </div>

      <div className="header_item_w">
        <button onClick={() => setVisi("Setting")}>Setting</button>
        <Sub_Header title="Setting" display={visi} />
      </div>
    </div>
  );
};

export default Header;
